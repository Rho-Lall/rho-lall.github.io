# rho-lall.github.io

Rho Lall's practitioner profile — a single-page static site built to prove one claim, "AI Analytics Engineer building real-world AI systems," to two very different readers at once.

## Dual-Audience Design

**Human layer.** A hero identity block, a "Currently Building" section, six proof cards linking to real repos, and a set of elsewhere links — designed to be scanned and credible in about ten seconds.

**Machine layer.** The same page, but read as a machine reads it:
- Zero client-side JavaScript required — every section is static HTML at build time, so a `curl` or a headless fetch sees exactly what a browser renders.
- [`llms.txt`](public/llms.txt) — a plain-text index at the site root pointing agents to the identity summary, repo links, and methodology docs.
- A `application/ld+json` [`Person` schema](src/components/JsonLd.astro) embedded in the page head, so structured facts (name, title, links) are machine-parseable without scraping prose.

A post-build script (`scripts/verify-build.mjs`) asserts both layers are present in every deploy — the identity block, all six proof card names, the elsewhere URLs, and valid JSON-LD — before anything ships.

## Stack

- **Astro** (`output: 'static'`) — ships no JS by default, content is baked into HTML at build time
- **Tailwind CSS** — utility-first styling, no runtime CSS-in-JS
- **GitHub Actions → GitHub Pages** — push to `main` triggers build, verify, and deploy; a failed verification blocks the deploy entirely

## Why This Architecture

The site's thesis is machine-readable-by-design: rather than *claiming* to build verifiable AI systems, the site itself is one. A human gets a fast, legible scan. An AI agent evaluating the same claim gets static HTML, a dedicated `llms.txt` index, and schema.org structured data — no rendering, no scraping, no ambiguity. The build pipeline enforces this as a property of every deploy, not a one-time manual check.

## Local Development

```bash
npm install
npm run dev       # local dev server
npm run build     # astro build + postbuild verify (scripts/verify-build.mjs)
npm run verify    # run the content-verification guard standalone
```
