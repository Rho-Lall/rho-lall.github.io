# Pattern: Secure external links

## When to Use
Any `<a target="_blank">` to an external URL (case study, proof cards, elsewhere links).

## Implementation
Always pair `target="_blank"` with `rel="noopener noreferrer"` — blocks the
opened page from accessing `window.opener` (reverse tabnabbing) and stops
referrer leakage.

## Example
`src/components/CurrentlyBuilding.astro`
