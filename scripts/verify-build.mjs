import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function findMissingContent(html, requiredStrings) {
  return requiredStrings.filter((s) => !html.includes(s));
}

const requiredStrings = [
  // Identity block
  'Rho Lall',
  'AI Analytics Engineer',
  'I build AI systems that recover revenue for real businesses.',
  'I document solutions for both human and machine readers.',
  'I bring down ruthless clarity on complex problems.',
  'Phoenix, AZ',
  // Proof card repo names
  'lead-recovery-case-study',
  'big-banana',
  'credit-analysis',
  'financial-analysis',
  'Riptide',
  'BullDozers_CHATBOT',
  // Elsewhere links
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
