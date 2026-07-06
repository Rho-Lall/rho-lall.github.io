# Pattern: JSON-LD script tags in Astro

## When to Use
Embedding structured data (schema.org JSON-LD) in an Astro component.

## Implementation
Don't render `{JSON.stringify(obj)}` as a script child — Astro HTML-escapes
expression children, turning `"` into `&quot;` and corrupting the JSON. Use
`<script type="application/ld+json" set:html={JSON.stringify(obj)} />`
instead; `set:html` sets raw innerHTML, bypassing escaping. Only safe when
the object's string values are static/developer-controlled — untrusted input
could break out via a `</script>` substring.

## Example
`src/components/JsonLd.astro`
