import type { APIRoute } from 'astro';

// Static host: a 302 needs a server, so this ships a meta-refresh page instead.
const TARGET = 'https://github.com/Rho-Lall';

export const prerender = true;

export const GET: APIRoute = () =>
	new Response(
		`<!doctype html><html lang="en"><head><meta charset="utf-8">` +
			`<meta http-equiv="refresh" content="0; url=${TARGET}">` +
			`<link rel="canonical" href="${TARGET}">` +
			`<title>Agents</title></head>` +
			`<body><p>Redirecting to <a href="${TARGET}">${TARGET}</a>.</p></body></html>`,
		{ headers: { 'Content-Type': 'text/html; charset=utf-8' } },
	);
