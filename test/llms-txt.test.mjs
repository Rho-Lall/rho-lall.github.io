import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Feature: github-pages-site, Property 2: All llms.txt URLs are absolute

function extractLinkTargets(text) {
  const targets = [];
  const parenRe = /\]\(([^)]+)\)/g;
  let match;
  while ((match = parenRe.exec(text))) {
    targets.push(match[1]);
  }
  const colonRe = /^- [^:]+:\s+(\S+)$/gm;
  while ((match = colonRe.exec(text))) {
    const value = match[1];
    if (/^(https?:)?\/\//.test(value)) {
      targets.push(value);
    }
  }
  return targets;
}

function findNonAbsolute(targets) {
  return targets.filter((target) => !target.startsWith('https://'));
}

test('findNonAbsolute flags relative, protocol-relative, and insecure URLs', () => {
  const result = findNonAbsolute([
    'https://ok.com',
    '/relative/path',
    '//protocol-relative.com',
    'http://insecure.com',
  ]);
  assert.deepEqual(result, ['/relative/path', '//protocol-relative.com', 'http://insecure.com']);
});

test('extractLinkTargets pulls markdown-link and colon-style targets, ignoring plain text', () => {
  const sample = '- [Label](https://example.com/a)\n- Site: https://example.com/b\n- Name: Rho Lall';
  assert.deepEqual(extractLinkTargets(sample), ['https://example.com/a', 'https://example.com/b']);
});

test('public/llms.txt: every link target is an absolute https:// URL', () => {
  const path = fileURLToPath(new URL('../public/llms.txt', import.meta.url));
  const content = readFileSync(path, 'utf-8');
  const targets = extractLinkTargets(content);
  assert.ok(targets.length >= 9, `expected at least 9 link targets, found ${targets.length}`);
  assert.deepEqual(findNonAbsolute(targets), []);
});
