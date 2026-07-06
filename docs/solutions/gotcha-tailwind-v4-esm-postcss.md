# Gotcha: Legacy PostCSS/Tailwind v3 configs break under ESM

## Symptom
`npm run build` fails with `ReferenceError: module is not defined in ES module
scope` pointing at `postcss.config.js`, once `package.json` has
`"type": "module"` (set by Astro's scaffold).

## Fix
Delete `postcss.config.js` and `tailwind.config.js` (v3, CommonJS) entirely.
Tailwind v4 via `@tailwindcss/vite` needs neither — no PostCSS config, no JS
theme file. See `pattern-tailwind-v4-css-theme.md`.
