import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function findMissingContent(html, requiredStrings) {
  return requiredStrings.filter((s) => !html.includes(s));
}

const requiredStrings = [
  // Identity
  'Rho Lall',
  'BI Architect',
  'Phoenix, AZ',
  // Narrative beats, one per frame
  'You probably already know where the friction is.',
  'It&#39;s figuring out what the problems are actually telling you.',
  'See the problem differently.',
  'That&#39;s the point.',
  'This is for businesses that got more complicated as they grew.',
  'What&#39;s on your mind?',
  'What you&#39;ll leave with.',
  'Technically Correct is Still Wrong.',
  'Start Your Session.',
  // CTA and form
  'Start your session',
  'diagnostic-dialog',
  // Footer links
  'rholall.substack.com',
  'linkedin.com/in/rholall',
  'github.com/Rho-Lall',
  // JSON-LD marker
  'application/ld+json',
];

function main() {
  const html = readFileSync(resolve('dist/index.html'), 'utf-8');
  const missing = findMissingContent(html, requiredStrings);

  if (missing.length > 0) {
    console.error('BUILD VERIFICATION FAILED');
    console.error('Missing content in dist/index.html:');
    missing.forEach((s) => console.error(`  ✗ "${s}"`));
    process.exit(1);
  }

  try {
    readFileSync(resolve('dist/llms.txt'), 'utf-8');
  } catch {
    console.error('BUILD VERIFICATION FAILED: dist/llms.txt not found');
    process.exit(1);
  }

  console.log('BUILD VERIFICATION PASSED: All required content present.');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
