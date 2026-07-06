# Pattern: Run the real build in a node:test `before` hook

## When to Use
Verifying something only observable in actual build output (e.g. JSON-LD
rendered into static HTML) without installing a test-container/vitest setup.

## Implementation
`execSync('npm run build', { cwd: root, stdio: 'ignore' })` inside a
`before()` from `node:test`, then read/parse the real `dist/` file in the
test body. Astro builds this small site in ~300ms, so it's cheap enough to
run per test file rather than mocking the build output.

## Example
`test/json-ld.test.mjs`
