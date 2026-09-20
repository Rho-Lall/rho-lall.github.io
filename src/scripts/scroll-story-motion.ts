// GSAP-powered half of the scroll story. Loaded only on desktop viewports that
// allow motion — see scroll-story.ts.
//
// Rule this module follows: GSAP never owns whether content is visible. CSS owns
// that, through the `.anim-item` / `.is-in` pair, so a stalled frame loop or a
// failed tween can never leave the page blank. GSAP only handles scrubbed
// transforms (the folds, parallax, and the kite line), which are decoration.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

const DESKTOP_QUERY = '(min-width: 768px)';
const STAGGER_MS = 90;

/** Elements that animate in when their section arrives, in document order. */
function entranceTargets(section: HTMLElement): HTMLElement[] {
	return Array.from(
		section.querySelectorAll<HTMLElement>('[data-anim], h1, h2, h3, p, li, button, [data-divider]'),
	);
}

/**
 * Resolves once the browser has actually painted a frame. If frames never come
 * (background tab, headless capture, blocked compositor), it resolves false and
 * the page simply stays static rather than hiding its own content.
 */
function framesAreRunning(): Promise<boolean> {
	return new Promise((resolve) => {
		let settled = false;
		const done = (value: boolean) => {
			if (settled) return;
			settled = true;
			resolve(value);
		};

		requestAnimationFrame(() => done(true));
		setTimeout(() => done(false), 400);
	});
}

export async function playScrollStory(
	sections: HTMLElement[],
	revealOnly: (sections: HTMLElement[]) => void,
) {
	if (!(await framesAreRunning())) return;

	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
	document.documentElement.classList.add('has-scroll-story');

	const ctx = gsap.context(() => {
		for (const [index, section] of sections.entries()) {
			const isFirst = index === 0;

			// Entrance choreography: CSS transitions, triggered by a class.
			const targets = entranceTargets(section);
			targets.forEach((target, order) => {
				target.classList.add('anim-item');
				target.style.transitionDelay = `${order * STAGGER_MS}ms`;
			});

			ScrollTrigger.create({
				trigger: section,
				start: isFirst ? 'top bottom' : 'top 72%',
				once: true,
				onEnter: () => {
					for (const target of targets) target.classList.add('is-in');
				},
			});

			// Origami: the section unfolds as it arrives and folds away as it leaves.
			if (!isFirst) {
				gsap.fromTo(
					section,
					{ rotateX: 7, y: 48 },
					{
						rotateX: 0,
						y: 0,
						ease: 'none',
						scrollTrigger: { trigger: section, start: 'top bottom', end: 'top 32%', scrub: 0.6 },
					},
				);
			}

			gsap.to(section, {
				rotateX: -5,
				ease: 'none',
				scrollTrigger: { trigger: section, start: 'bottom 70%', end: 'bottom top', scrub: 0.6 },
			});
		}

		// Images that drift slower than the text beside them.
		for (const image of gsap.utils.toArray<HTMLElement>('[data-parallax]')) {
			gsap.fromTo(
				image,
				{ yPercent: -6 },
				{
					yPercent: 6,
					ease: 'none',
					scrollTrigger: {
						trigger: image.closest('[data-section]') ?? image,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					},
				},
			);
		}

		// Hero depth: a scale so slow it reads as breathing, not zooming.
		const heroImage = document.querySelector<HTMLElement>('[data-hero-image]');
		if (heroImage) {
			gsap.fromTo(
				heroImage,
				{ scale: 1 },
				{
					scale: 1.03,
					ease: 'none',
					scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
				},
			);
		}

		for (const image of gsap.utils.toArray<HTMLElement>('[data-slow-scale]')) {
			gsap.to(image, { scale: 1.04, duration: 40, ease: 'sine.inOut', yoyo: true, repeat: -1 });
		}

		initKiteThread();
	});

	// Images settle late; make sure trigger positions match the final layout.
	window.addEventListener('load', () => ScrollTrigger.refresh());

	// If the viewport crosses into phone territory, drop the whole thing.
	window.matchMedia(DESKTOP_QUERY).addEventListener('change', (event) => {
		if (event.matches) return;
		ctx.revert();
		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		document.documentElement.classList.remove('has-scroll-story');
		gsap.set(sections, { clearProps: 'all' });
		revealOnly(sections);
	});
}

/**
 * Frames 09 -> 10: the traced rake line straightens into the kite string.
 * The line is one continuous element; only its shape, color and opacity change.
 */
function initKiteThread() {
	const svg = document.querySelector<SVGSVGElement>('[data-kite-thread]');
	const path = document.querySelector<SVGPathElement>('[data-kite-path]');
	const credibility = document.querySelector<HTMLElement>('[data-section="09"]');
	const closing = document.querySelector<HTMLElement>('[data-section="10"]');
	if (!svg || !path || !credibility || !closing) return;

	// Trace: the line appears over the disturbed sand as frame 09 finishes.
	gsap.fromTo(
		svg,
		{ opacity: 0 },
		{
			opacity: 1,
			ease: 'none',
			scrollTrigger: { trigger: credibility, start: 'bottom 85%', end: 'bottom 45%', scrub: 0.8 },
		},
	);

	// Morph: rake curve -> kite string, white -> ink, as frame 10 arrives.
	gsap
		.timeline({ scrollTrigger: { trigger: closing, start: 'top 90%', end: 'top 10%', scrub: 0.8 } })
		.to(path, { morphSVG: 'M 74 100 C 64 78, 56 52, 47 17', ease: 'power1.inOut' }, 0)
		.to(path, { stroke: '#2A2A2A66', ease: 'none' }, 0);

	// Let go: the string hands off to the photograph.
	gsap.to(svg, {
		opacity: 0,
		ease: 'none',
		scrollTrigger: { trigger: closing, start: 'center 45%', end: 'bottom bottom', scrub: 0.8 },
	});
}
