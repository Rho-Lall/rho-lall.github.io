# Gotcha: `scripts/` was blanket-gitignored from the Gatsby era

## Symptom
`git add scripts/verify-build.mjs` silently reports "ignored by one of
your .gitignore files." The whole `scripts/` directory was excluded
(leftover from ignoring old Gatsby conversion scripts), which would have
kept the new build-verification script out of version control entirely —
breaking GPS-27's CI step that runs `node scripts/verify-build.mjs`.

## Fix
Narrow the ignore to the specific file that should stay local
(`scripts/security-check.sh`, a pre-commit secret scanner) instead of the
whole directory. Don't `git add -f` — that leaves the ignore rule
contradicting a tracked file.

## Example
`.gitignore`, `scripts/verify-build.mjs`
