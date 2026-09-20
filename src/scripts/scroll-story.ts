// Scroll choreography for the Follow the Friction narrative.
// Direction: docs/scroll-direction.md. Everything here is decorative — the page
// reads correctly with this script disabled, on phones, and under reduced motion.

const DESKTOP_QUERY = '(min-width: 768px)';
const MOTION_QUERY = '(prefers-reduced-motion: no-preference)';

/** Fallback for phones and reduced motion: reveal on scroll, no transforms. */
function revealOnly(sections: HTMLElement[]) {
	if (!('IntersectionObserver' in window)) return;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-in');
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
	);

	for (const section of sections) {
		section.classList.add('reveal');
		observer.observe(section);
	}
}

export async function initScrollStory() {
	const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
	if (sections.length === 0) return;

	const prefersMotion = window.matchMedia(MOTION_QUERY).matches;
	const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;

	// Reduced motion gets no reveal at all; phones get the light one. Neither
	// downloads GSAP.
	if (!prefersMotion) return;
	if (!isDesktop) {
		revealOnly(sections);
		return;
	}

	const { playScrollStory } = await import('./scroll-story-motion');
	await playScrollStory(sections, revealOnly);
}
