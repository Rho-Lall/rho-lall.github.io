# Gotcha: Verifying TypeScript before Wave A's tooling merges

## Symptom
Wave B needs to write and verify `.ts` files, but `package.json`/TypeScript/vitest
are owned by Wave A and haven't merged into this worktree yet — `tsc` and
`vitest` aren't installed.

## Fix
Node 22 can parse/type-strip `.ts` files natively. Use this instead of
installing tooling early:
```bash
node --experimental-strip-types --check src/data/site-data.ts
```
For runtime logic + tests, `node --experimental-strip-types --test *.test.ts`
works too (built-in `node:test` + `node:assert/strict`, no deps needed).
