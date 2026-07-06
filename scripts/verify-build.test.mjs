import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findMissingContent } from './verify-build.mjs';

test('findMissingContent returns empty array when all strings present', () => {
  const html = '<html>Rho Lall, AI Analytics Engineer, Phoenix, AZ</html>';
  const required = ['Rho Lall', 'AI Analytics Engineer', 'Phoenix, AZ'];
  assert.deepEqual(findMissingContent(html, required), []);
});

test('findMissingContent returns the single missing string', () => {
  const html = '<html>Rho Lall, AI Analytics Engineer</html>';
  const required = ['Rho Lall', 'AI Analytics Engineer', 'Phoenix, AZ'];
  assert.deepEqual(findMissingContent(html, required), ['Phoenix, AZ']);
});

test('findMissingContent returns all missing strings, excluding present ones', () => {
  const html = '<html>Rho Lall</html>';
  const required = ['Rho Lall', 'AI Analytics Engineer', 'Phoenix, AZ', 'lead-recovery-case-study'];
  assert.deepEqual(
    findMissingContent(html, required),
    ['AI Analytics Engineer', 'Phoenix, AZ', 'lead-recovery-case-study']
  );
});
