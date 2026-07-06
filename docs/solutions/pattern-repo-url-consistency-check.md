# Pattern: repoUrl/fallbackUrl consistency check

## When to Use
Any data array where one field is derived from another (e.g. a URL built from
a name) — verify the derivation instead of trusting hand-typed strings.

## Implementation
Assert `repoUrl === 'https://github.com/Rho-Lall/' + name` for every entry
in a script, rather than eyeballing each literal during review.

## Example
`src/data/site-data.ts` — `proofCards` array
