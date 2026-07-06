# Pattern: TDD in a worktree before its tooling wave has merged

## When to Use
A wave needs to write and test `.ts` logic, but the wave owning `package.json`/
test runner setup (vitest, tsconfig) hasn't merged into this worktree yet.

## Implementation
Use Node 22's built-in `node:test` + `node:assert/strict`, run with
`node --experimental-strip-types --test <file>.test.ts`. Zero dependencies,
real RED→GREEN cycle. Swap to vitest syntax later if the team wants shared
matchers — the assertions themselves don't need to change much.

## Example
`src/data/site-data.test.ts`, `validateProofCard` in `src/data/site-data.ts`
