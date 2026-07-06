# Pattern: Root-level `test/` for verification not owned by any wave

## When to Use
A task needs a test (e.g. a property/verification check) but the thing it
tests lives in `public/` (ships verbatim to `dist/` — don't put test files
there) and no `src/**` module in MODULE_MAP naturally owns the logic.

## Implementation
Create a self-contained `test/{name}.test.mjs` at repo root: define the
tiny helper functions and the test in the same file, using `node:test`.
No wave's MODULE_MAP claims `test/`, so this can't conflict with parallel
waves, and it's excluded from the Astro build (only `public/` ships).

## Example
`test/llms-txt.test.mjs` (GPS-22) validates `public/llms.txt`.
