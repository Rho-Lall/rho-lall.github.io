# Gotcha: `astro check` fails on `node:test`/`node:assert` after merging waves

## Symptom
`npx astro check` reports `Cannot find name 'node:test'` /
`'node:assert/strict'` in a `.ts` test file, even though `npm run build`
succeeds fine. Surfaces the first time a Node-native test file (see
`gotcha-ts-verify-without-tooling.md`) and Astro's scaffolded `tsconfig.json`
land in the same tree — Astro's default tsconfig has no Node type defs.

## Fix
Add `"types": ["node"]` to `tsconfig.json`'s `compilerOptions` (or install
`@types/node`). Doesn't block `astro build` since unreferenced test files
aren't bundled — only blocks an explicit `astro check`/`tsc` step.
