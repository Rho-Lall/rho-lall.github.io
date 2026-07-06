# Pattern: Self-hosted variable fonts via @fontsource

## When to Use
Adding a web font to a static/zero-JS site without an external CDN request
(Google Fonts link tag).

## Implementation
`npm install @fontsource-variable/<font-name>`, then
`@import "@fontsource-variable/<font-name>";` in the global stylesheet before
the `@theme` block. Reference it in `--font-sans` — no `<link>` tag needed.

## Example
`src/styles/global.css`
