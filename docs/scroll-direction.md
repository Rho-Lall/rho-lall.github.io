# Follow the Friction — Scroll Implementation Brief

This document is the creative and technical direction for building the scrollytelling page designed in `home.pen`. The .pen file contains 10 viewport-sized frames (1440x900) stacked vertically, each representing one scroll stop. This brief tells you HOW they connect, animate, and transition.

## The Concept

A single-page lead capture site for a BI Architect's diagnostic session called "Follow the Friction." The page uses scroll-driven animation to unfold a narrative. Three visual systems carry different meanings and should never compete for attention simultaneously.

## Three Visual Systems

### 1. Origami (Structure)
The primary transition mechanic. Sections fold and unfold like paper panels as the user scrolls. Implemented with CSS 3D transforms (`perspective` + `rotateX`) scrubbed to scroll position via GSAP ScrollTrigger. Each panel folds away while the next unfolds into view. The fold crease is the natural divider. Scrolling up reverses the fold cleanly.

- Fold transitions happen BETWEEN sections, not within them
- The fold should feel like turning a page, not flipping a card
- Paper texture and warm tones reinforce the origami metaphor
- Cards within sections (frames 05, 08) should have subtle paper-fold styling (thin borders in `#D4CFC5`, slight shadows)

### 2. Zen (Observation)
The mood and imagery. All photographs share a contemplative, warm, natural palette. The zen system dominates WITHIN sections — it's what you're looking at while the origami system handles how you got there.

Images (AI-generated, prompts included in the .pen file):
- Frame 02: River from kayak POV — rocks visible and submerged, turbulence patterns
- Frame 04: Aerial zen garden — concentric rake lines around dark stones
- Frame 07: Still water at dawn — mirror surface with single expanding ripple
- Frame 09: Sand garden close-up — perfect rake lines disrupted around a buried obstruction (KEY IMAGE)
- Frame 10: Kite flying in golden sky — string visible stretching down

### 3. Threads (Hidden Dependencies)
Subtle, atmospheric, never foreground. Thin semi-transparent vertical lines that appear at the edges of dark sections only. They reference the hero illustration's broken puppet strings and remind the viewer they're inside a thinking space.

- Appear ONLY in frames 03 (Pivot) and 06 (Audience) — the sections about things that live in people's heads
- Rendered as 1px wide elements with gradient opacity (fade in/out along their length)
- Very low opacity: `#FFFFFF0C` to `#FFFFFF11` max
- Slightly rotated (3-8 degrees) to feel organic, not gridlike
- Should drift subtly with a slow CSS animation at whisper level

## The Key Transition: Sand Garden to Kite (Frames 09 → 10)

This is the signature moment of the page. A single continuous line transforms meaning as the user scrolls:

1. In frame 09 (Credibility), a disrupted rake line in the sand garden is highlighted/traced
2. As the user scrolls past frame 09 into frame 10, that line morphs into a kite string
3. In frame 10 (Closing), the kite flies high — the attention to disturbance is what gives you altitude

**Technical approach:** Use an SVG path that stays pinned during this transition. The path starts as a horizontal-ish disturbed line (matching the sand garden composition), then as scroll progresses, it straightens and rotates vertical, becoming the kite string. GSAP `morphSVG` or simple path interpolation. The backgrounds crossfade underneath the persistent line element.

This moment should feel like a reveal, not a trick. Ease it. Give it breathing room in scroll distance.

## Scroll Architecture

**Tech stack:** Astro (existing site framework) + GSAP ScrollTrigger for scroll-scrubbed animations. Plain CSS for static styling. No video scrubbing — this is all CSS transforms and image transitions.

**Hero height:** The full scroll journey should span approximately 800-1000vh (8-10x the viewport height). Each of the 10 sections gets roughly 80-100vh of scroll distance, with transition zones of ~20vh between them for the origami fold animations.

### Per-Frame Direction

**Frame 01 — Hero (scroll: 0% to ~10%)**
- Full-bleed hero image (`no-strings-on-me.png`, 2752x1536) with dark gradient overlay
- Content at bottom-left: name (72px, 800 weight), title, taglines, location
- CTA button: "Start your session" in accent coral `#C4553A`
- Text entrance: characters assemble (scatter entrance) on page load, not scroll-driven
- The hero image should have a very subtle slow scale (1.0 to 1.03) during its scroll range for parallax depth
- This is the ONLY frame that uses the illustration style — everything after shifts to zen photography

**Frame 02 — Friction (scroll: ~10% to ~20%)**
- Origami fold-in from frame 01
- Split layout: text left (60%), river image right (40%)
- Headline: "You probably already know where the friction is." — entrance: drift-down, word by word
- Pain points appear sequentially with sage `#7A8B6F` dash markers, staggered 150ms
- River image has subtle parallax (scrolls slightly slower than the text side)

**Frame 03 — Pivot (scroll: ~20% to ~30%)**
- Origami fold-in, background shifts to charcoal `#2A2A2A`
- The dark fold should feel like closing your eyes to think
- Centered text, generous whitespace
- Line 1 ("The hard part...") fades in first, muted `#FFFFFF77`
- Line 2 ("It's figuring out...") punches in with word-overshoot entrance, full white
- Thread elements drift in from edges during this section, very slowly
- This frame should hold longer than others — give the statement room to land

**Frame 04 — Value Prop (scroll: ~30% to ~40%)**
- Origami fold-in, back to warm canvas `#F5F0E8`
- Split layout: zen garden image left (40%), text right (60%)
- Section headline: blur-to-sharp entrance (echoing clarity emerging)
- Bold goal statement should feel like it settles into place
- CTA #1 appears with a subtle rise
- The zen garden image should have a very slow gentle scale animation (whisper level, 60s+ cycle)

**Frame 05 — Reframing (scroll: ~40% to ~50%)**
- Origami fold-in
- Three transformation cards stagger in from left, 200ms apart
- Each card: "from" text (secondary) → sage arrow → "to" text (bold primary)
- Cards have paper texture feel: `#FAF7F0` fill, `#D4CFC5` border, very subtle shadow
- "That's the point." appears last, no animation, just there — the quiet punchline

**Frame 06 — Audience (scroll: ~50% to ~60%)**
- Origami fold-in, shifts to charcoal `#2A2A2A`
- Thread elements present at edges (this section is about knowledge living in people)
- Headline drifts in
- Symptoms list: each line fades in sequentially, starting muted and brightening slightly
- The threads should sway very gently during this section

**Frame 07 — What's on your mind (scroll: ~60% to ~70%)**
- Origami fold-in, back to warm canvas
- Split layout: text left (60%), still water image right (40%)
- Headline: large, weighted, immediate
- "Maybe" list items appear one by one as user scrolls through this section's range
- "Start there." should land with weight — word-punch entrance
- CTA #2 rises into view
- The water image ripple should align with the moment "Start there" appears (as if the thought creates the ripple)

**Frame 08 — Outcomes (scroll: ~70% to ~80%)**
- Origami fold-in
- Centered layout
- Five icon cards in 3+2 grid, stagger in with scale-up (0.9 to 1.0) + fade
- Icons use sage `#7A8B6F`
- Anti-checklist text at bottom fades in after cards settle
- Cards have same paper-fold styling as frame 05

**Frame 09 — Credibility (scroll: ~80% to ~88%)**
- Origami fold-in
- Full-bleed sand garden image with left-side dark gradient overlay
- Text on left side over the overlay
- Headline: "Technically Correct is Still Wrong." — grid-snap entrance
- Body text fades in as paragraphs, not all at once
- The disrupted area of the sand garden should be on the RIGHT side of the image, visible through the lighter overlay
- As the user reaches the end of this section, a thin SVG line traces/highlights the disrupted rake line (this begins the signature transition)

**Frame 10 — Closing (scroll: ~88% to 100%)**
- THE TRANSITION: The SVG line from frame 09 morphs from the disturbed sand line into the kite string
- Background crossfades from sand garden to kite sky
- Warm overlay from bottom so text is readable
- Text content settles at bottom: centered, contemplative
- "Sometimes you need someone outside the web to help you see the web." — the emotional peak
- Accent divider line (48px, `#C4553A`)
- "Start Your Session." — final headline, word-rise entrance
- CTA #3 is the last element, centered

## Color Tokens

```css
:root {
  --canvas: #F5F0E8;      /* warm paper background */
  --charcoal: #2A2A2A;    /* dark sections, never pure black */
  --text-primary: #2A2A2A;
  --text-secondary: #6B6560;
  --accent: #C4553A;       /* CTA buttons, rare emphasis only */
  --accent-muted: #C4553A33;
  --sage: #7A8B6F;         /* icons, dash markers, arrows */
  --fold-shadow: #D4CFC5;  /* card borders, fold creases */
  --paper: #FAF7F0;        /* card fills */
  --white: #FFFFFF;
}
```

## Typography

- **Font:** Plus Jakarta Sans (Google Fonts)
- **Weights in use:** 400 (body), 500 (medium emphasis), 600 (subheads), 700 (headlines), 800 (hero name only)
- **Body:** 14-16px, line-height 1.6-1.7
- **Headlines:** 26-38px, line-height 1.2-1.35
- **Hero name:** 72px, weight 800
- **Small labels:** 13px

## CTA Button

All three CTAs trigger the same form modal (already configured separately). The button:
- Label: "Start your session"
- Right arrow icon (lucide `arrow-right`, 18px)
- Background: `--accent` (`#C4553A`)
- Text: white, 16px, weight 700
- Padding: 14px 28px
- Corner radius: 8px
- Shadow: `0 3px 12px #C4553A40`
- Hover: darken slightly, shadow deepens

## Mobile Behavior

- Below 768px: disable origami fold animations entirely. Show a designed static layout — sections stack vertically with simple fade-in-on-scroll entrances (IntersectionObserver + `.in` class)
- Split layouts (frames 02, 04, 07) become single-column: image on top, text below
- Images get a max-height constraint so they don't dominate small screens
- The sand garden → kite transition simplifies to a crossfade between the two images
- `prefers-reduced-motion: reduce` — show all content in final states, no animations, no scroll binding
- Touch targets: CTA buttons minimum 44px height on coarse pointer devices

## Accessibility

- Semantic landmarks: `<nav>`, `<main>`, `<footer>`, skip link
- Real heading hierarchy: h1 (Rho Lall), h2 per section, h3 for subsections
- `aria-hidden="true"` on decorative thread elements and image overlays
- All images need descriptive alt text
- CTA buttons are real `<button>` elements that trigger the modal
- The scroll animations are decorative — all content is accessible without them

## Footer

- Links to Substack, LinkedIn, GitHub
- Warm charcoal background matching dark sections
- Muted link color, not attention-grabbing

## Assets Required

- `no-strings-on-me.png` — existing hero illustration (2752x1536)
- 5 AI-generated images (generate at build time or pre-generate):
  - River from kayak POV (frame 02)
  - Aerial zen garden (frame 04)
  - Still water with ripple (frame 07)
  - Sand garden with disrupted rake lines (frame 09)
  - Kite in golden sky (frame 10)
- Lucide icons: arrow-right, git-branch, scan, target, trending-down, compass
- Plus Jakarta Sans from Google Fonts (weights 400, 500, 600, 700, 800)

## Complete Copy (All Text Content by Frame)

### Frame 01 — Hero
- **Name:** Rho Lall (72px, weight 800)
- **Title:** BI Architect (26px, weight 500, `#FFFFFFBB`)
- **Tagline 1:** I bring down ruthless clarity on complex problems.
- **Tagline 2:** I build systems that recover revenue for real businesses.
- **Tagline 3:** I document solutions for both human and machine readers.
- **Location:** Phoenix, AZ (13px, `#FFFFFF55`)
- **CTA:** Start your session

### Frame 02 — Friction
- **Headline:** You probably already know where the friction is. (38px, weight 700)
- **Pain 1:** The process that still depends on one person knowing what to do.
- **Pain 2:** The numbers that trigger a debate before they can trigger a decision.
- **Pain 3:** The project everyone agrees matters, but nobody can quite get moving.
- **Pain 4:** The report everyone loves to doubt.

### Frame 03 — Pivot
- **Line 1:** The hard part usually isn't finding more problems. (18px, `#FFFFFF77`)
- **Line 2:** It's figuring out what the problems are actually telling you. (34px, weight 700, white)

### Frame 04 — Value Prop
- **Headline:** See the problem differently. (36px, weight 700)
- **Intro:** Follow the Friction is a short, AI-guided executive session built around one goal:
- **Goal (bold):** Help you connect the dots inside your business and identify what deserves your focus. (19px, weight 700)
- **Detail:** You know what you know. But this will enable you to test assumptions, surface contradictions, expose hidden dependencies, and follow the implications.
- **CTA:** Start your session

### Frame 05 — Reframing
- **Headline:** Because the problem you bring in may not be the problem you leave with. (26px, weight 700)
- **Card 1:** What looks like a reporting problem → might be an ownership problem.
- **Card 2:** What looks like a technology problem → might be a process problem.
- **Card 3:** What looks like an isolated workaround → might be evidence that the business has outgrown a decision made years ago.
- **Punchline:** That's the point. (17px, weight 600)

### Frame 06 — Audience
- **Headline:** This is for businesses that got more complicated as they grew. (30px, weight 700, white)
- **Context:** Especially growing e-commerce and lifestyle brands where systems like NetSuite, Snowflake, and Looker now sit between more people, more processes, and more decisions than they used to. (`#FFFFFFAA`)
- **Bridge:** The business works. But it has become harder to understand from end to end. (`#FFFFFFCC`, weight 500)
- **Symptom 1:** You can feel it when a simple question requires three people.
- **Symptom 2:** When two departments bring different numbers to the same meeting.
- **Symptom 3:** When a project crosses enough systems that nobody quite owns the whole thing.
- **Symptom 4:** When the person who "just knows how it works" becomes part of the infrastructure.

### Frame 07 — What's on your mind
- **Headline:** What's on your mind? (38px, weight 700)
- **Sub:** What's taking up space? (16px)
- **Maybe 1:** Maybe your numbers don't agree.
- **Maybe 2:** Maybe too much knowledge still lives in people's heads.
- **Maybe 3:** Maybe the business has outgrown systems that used to work perfectly well.
- **Maybe 4:** Maybe a manual workaround has quietly become part of how the company operates.
- **Maybe 5:** Maybe you're considering a major data, AI, reporting, or technology initiative and aren't sure what has to be true first.
- **Maybe 6:** Maybe you just know something feels harder than it should.
- **Anchor:** Start there. (17px, weight 700)
- **Follow:** Start where there is friction. See where it leads.
- **CTA:** Start your session

### Frame 08 — Outcomes
- **Headline:** What you'll leave with. (36px, weight 700)
- **Intro:** The session is designed to help you uncover:
- **Outcome 1:** (icon: git-branch) Patterns you may not have connected before
- **Outcome 2:** (icon: scan) What appears to deserve deeper attention
- **Outcome 3:** (icon: target) Why it matters to the business
- **Outcome 4:** (icon: trending-down) What the current situation may be costing you
- **Outcome 5:** (icon: compass) What still needs to be understood before making a decision
- **Anti 1:** You won't leave with a canned maturity score or a generic checklist.
- **Anti 2 (bold):** You'll leave with a clearer way to think about what's happening. (16px, weight 600)

### Frame 09 — Credibility
- **Headline:** Technically Correct is Still Wrong. (32px, weight 700, white)
- **Para 1:** I'm a BI Architect. My work sits in the space between the systems and the business trying to use them.
- **Para 2:** That has taught me to be suspicious of technically correct answers to business problems. A dashboard can be fast and still fail the people relying on it. A data platform can be healthy while nobody trusts the number. A system can follow best practices and still be painful to change.
- **Para 3:** And increasingly, business logic has to make sense to more than just the person who built it. It has to be understandable to the next person, the next system, and the machines beginning to work alongside them.
- **Punch:** So I look beyond whether something works. (15px, weight 500, `#FFFFFFCC`)
- **Para 4:** I want to know what depends on it, who trusts it, what happens around it, and what the business has quietly learned to compensate for.
- **Close:** That's usually where the interesting problem is. (16px, weight 600, white)
- **Footer:** I write about these problems on **Substack** (link color: sage)

### Frame 10 — Closing
- **Headline:** Years of decisions are baked into your business. (28px, weight 700, centered)
- **Line 1:** Some live in code.
- **Line 2:** Some live in dashboards.
- **Line 3:** Some live in spreadsheets.
- **Line 4:** Some live in people's heads.
- **Growing:** As the business grows, those decisions become connected in ways that are increasingly difficult to see from inside the company.
- **Quote (bold):** Sometimes you need someone outside the web to help you see the web. (20px, weight 700)
- **Divider:** 48px × 2px accent coral line
- **Final headline:** Start Your Session. (30px, weight 700)
- **Final sub:** Bring whatever feels harder than it should. We'll start there.
- **CTA:** Start your session

## .pen Frame IDs (for reference)

| Frame | ID | Background |
|---|---|---|
| 01 Hero | OWPJU | Hero image + dark gradient overlay |
| 02 Friction | BHheZ | `$canvas` (#F5F0E8) |
| 03 Pivot | innTC | `$charcoal` (#2A2A2A) |
| 04 Value Prop | J3Q3P | `$canvas` |
| 05 Reframing | nXSmt | `$canvas` |
| 06 Audience | gJGNA | `$charcoal` |
| 07 What's on your mind | A1YDY | `$canvas` |
| 08 Outcomes | E2e47U | `$canvas` |
| 09 Credibility | N7JrE | Sand garden image + dark left gradient |
| 10 Closing | yq14p | Kite image + warm bottom gradient |

## CTA Button Component (reusable, ID: I4y9Ai)

All three CTA buttons are instances of this component. They all trigger the existing lead form modal that posts to `https://y1krjhl41m.execute-api.us-east-1.amazonaws.com/prod/leads`. On success, the form redirects to the diagnostic session.

## What This Page Is NOT

- Not a traditional static page with sections — it's a scroll-driven narrative
- Not video-based — all transitions are CSS 3D transforms and image crossfades
- Not a dashboard or data visualization
- Not using the doodle/sketch aesthetic — that concept was considered and set aside
- Not two pages — the form modal handles lead capture, and its success URL redirects to the session
