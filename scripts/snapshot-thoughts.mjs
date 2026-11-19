// Refreshes src/data/thoughts-snapshot.ts from the live Substack feed.
//
// The homepage fetches that feed at build time, but Substack blocks some CI
// runners (GitHub Actions among them), which leaves the Thoughts section empty
// on deploy. The snapshot is what renders when the live fetch fails.
//
// Run from a machine Substack answers: npm run snapshot:thoughts

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const FEED_URL = 'https://rholall.substack.com/feed';
const OUT_PATH = resolve('src/data/thoughts-snapshot.ts');
const POST_LIMIT = 9;

const decodeEntities = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));

const tagValue = (source, tag) =>
  decodeEntities(
    source
      .match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1]
      ?.replace(/<!\[CDATA\[|\]\]>/g, '')
      .trim() ?? '',
  );

const isPlaybook = (title, categoryMarkup) =>
  /open\s*to\s*work\s*playbook/i.test(title) || /open\s*to\s*work\s*playbook/i.test(categoryMarkup);

// Same parse the homepage runs, so the snapshot and the live feed agree.
export function parseThoughts(xml) {
  return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
    .map(([, item]) => {
      const content = tagValue(item, 'content:encoded') || tagValue(item, 'description');
      const plain = decodeEntities(
        content
          .replace(/<script[\s\S]*?<\/script>/gi, ' ')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim(),
      );
      return {
        title: tagValue(item, 'title'),
        url: tagValue(item, 'link'),
        date: tagValue(item, 'pubDate'),
        image: content.match(/<img\b[^>]*?\bsrc=["']([^"']+)["']/i)?.[1],
        description: plain ? `${plain.slice(0, 170).replace(/\s+\S*$/, '')}…` : undefined,
        categoryMarkup: item.match(/<category\b[^>]*>[\s\S]*?<\/category>/gi)?.join(' ') ?? '',
      };
    })
    .filter((post) => post.title && post.url && post.date && !isPlaybook(post.title, post.categoryMarkup))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, POST_LIMIT)
    .map(({ categoryMarkup, ...post }) => post);
}

async function main() {
  const response = await fetch(FEED_URL, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; rho-lall.github.io snapshot)' },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`Feed request failed with status ${response.status}`);

  const posts = parseThoughts(await response.text());
  if (posts.length === 0) throw new Error('Feed returned no usable posts; refusing to write an empty snapshot');

  const file = `// Snapshot of the most recent Substack posts, written by scripts/snapshot-thoughts.mjs.
// The homepage fetches the live feed at build time; this is what renders when
// that fetch fails (Substack blocks some CI runners).
//
// Refresh with: npm run snapshot:thoughts

export interface ThoughtPost {
\ttitle: string;
\turl: string;
\tdate: string;
\timage?: string;
\tdescription?: string;
}

export const thoughtsSnapshot: ThoughtPost[] = ${JSON.stringify(posts, null, '\t')};
`;

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, file);
  console.log(`Wrote ${posts.length} posts to ${OUT_PATH}`);
  console.log(`Newest: ${posts[0].title}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
