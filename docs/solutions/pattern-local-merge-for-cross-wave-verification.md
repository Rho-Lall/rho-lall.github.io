# Pattern: Local merge to unblock a cross-wave verification gate

## When to Use
A wave's final task needs a genuine passing build, but another
"independent" parallel wave's output (a file it owns) is required for
that build to actually pass, and that wave isn't merged to the integration
branch yet.

## Implementation
`git merge {other-wave-branch} --no-edit` into your own wave branch only
(never into the shared integration branch) once the other wave is fully
complete. Disjoint MODULE_MAP file ownership means a clean, conflict-free
merge. Run the real pipeline against it instead of faking output with
uncommitted temp files.

## Example
`feature/wave-g-verify` merging `feature/wave-f-machine` for GPS-26.
