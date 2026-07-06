import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Feature: github-pages-site, GPS-23: JSON-LD output is valid JSON with required schema.org Person fields

const root = fileURLToPath(new URL('..', import.meta.url));

function extractJsonLd(html) {
  const match = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
  return match ? match[1] : null;
}

before(() => {
  execSync('npm run build', { cwd: root, stdio: 'ignore' });
});

test('extractJsonLd returns null when no JSON-LD script tag is present', () => {
  assert.equal(extractJsonLd('<html><body>no ld</body></html>'), null);
});

test('extractJsonLd pulls the raw payload out of a script tag', () => {
  const html = '<script type="application/ld+json">{"a":1}</script>';
  assert.equal(extractJsonLd(html), '{"a":1}');
});

test('dist/index.html contains valid JSON-LD with required schema.org Person fields', () => {
  const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf-8');
  const raw = extractJsonLd(html);
  assert.ok(raw, 'expected an application/ld+json script tag in dist/index.html');

  const schema = JSON.parse(raw);

  assert.equal(schema['@context'], 'https://schema.org');
  assert.equal(schema['@type'], 'Person');
  assert.equal(typeof schema.name, 'string');
  assert.ok(schema.name.length > 0);
  assert.equal(typeof schema.jobTitle, 'string');
  assert.ok(schema.jobTitle.length > 0);
  assert.equal(typeof schema.url, 'string');
  assert.ok(schema.url.startsWith('https://'), 'url must be absolute');
  assert.equal(typeof schema.description, 'string');
  assert.ok(schema.description.length > 0);
  assert.ok(Array.isArray(schema.sameAs) && schema.sameAs.length > 0, 'sameAs must be a non-empty array');
  for (const url of schema.sameAs) {
    assert.ok(url.startsWith('https://'), `sameAs entry not absolute: ${url}`);
  }
});
