# Pattern: Tailwind v4 CSS-first theme tokens

## When to Use
Configuring Tailwind v4 design tokens (colors, fonts, spacing) in an Astro
project using the `@tailwindcss/vite` plugin.

## Implementation
No `tailwind.config.mjs` needed. Define tokens in a CSS file with
`@theme { --color-name: value; --font-sans: "Font Name", sans-serif; }`,
import it once (`@import "tailwindcss";` at the top), then import that
stylesheet from pages/layouts. Tokens become `bg-name`, `text-name` utilities.

## Example
`src/styles/global.css`
