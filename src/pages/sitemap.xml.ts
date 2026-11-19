export const prerender = true;

export async function GET() {
	const urls = ['/', '/services', '/about', '/blog'];
	if (import.meta.env.PENNY_API_KEY) {
		try {
			const response = await fetch('https://ai.marblism.com/api/penny/blog-posts', {
				headers: { 'x-penny-api-key': import.meta.env.PENNY_API_KEY },
				signal: AbortSignal.timeout(8000),
			});
			if (response.ok) {
				const payload = (await response.json()) as { posts?: Array<{ slug?: string }> };
				for (const post of payload.posts ?? []) {
					if (post.slug) urls.push(`/blog/${encodeURIComponent(post.slug)}`);
				}
			}
		} catch {
			console.warn('[sitemap] Penny posts unavailable; keeping the core routes.');
		}
	}
	const body = urls
		.map((url) => `\t<url><loc>https://rho-lall.com${url}</loc></url>`)
		.join('\n');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, {
		headers: { 'Content-Type': 'application/xml' },
	});
}
