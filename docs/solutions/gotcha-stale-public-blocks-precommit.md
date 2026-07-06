# Gotcha: Untracked Gatsby build files in `public/` block commits

## Symptom
`git commit` fails with `COMMIT BLOCKED: Security issues detected!` even
though the staged diff is clean. The pre-commit hook scans *all* untracked
files for secret-like keyword patterns (one of which is a common auth-field
name), and stale Gatsby webpack chunks left in `public/` (from before
`gotcha-gitignore-public-dist-flip.md`'s flip) contain that keyword inside
React's bundled autofill-handling code — a false positive.

## Fix
Delete leftover untracked build output from `public/` (`git ls-files
--others --exclude-standard public/` to list, then remove — `git clean -f`
is blocked by a repo hook, so `rm` the listed paths directly). `public/`
should contain only real Astro static assets (`favicon.svg`, `llms.txt`).
