# Gotcha: public/ meant Gatsby build output, now it's Astro source

## Symptom
New files added to `public/` (favicon, llms.txt, etc.) never show up in
`git status` — they silently never get committed.

## Fix
Gatsby writes its build output to `public/`, so it was gitignored. Astro
treats `public/` as a source directory (static assets copied as-is) and
writes build output to `dist/`. When migrating, flip `.gitignore`: remove
`public/`, add `dist/` (and `.astro/` for Astro's type-gen cache).
