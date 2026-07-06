# Pattern: Forward-referencing not-yet-built sibling components

## When to Use
A wave's task list has one component import another that's built later in
the same serial chain (e.g. a layout importing head components built next).

## Implementation
Write the import at its final path now. Don't stub it. Defer `astro
check`/build verification to after the last task in the chain lands — it's
expected to fail mid-wave, not a defect of the earlier task.

## Example
`src/layouts/BaseLayout.astro` (GPS-9) imports `JsonLd.astro`/`SocialMeta.astro`
(GPS-10/11, built next in the same wave).
