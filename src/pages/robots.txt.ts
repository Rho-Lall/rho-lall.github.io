import type { APIRoute } from 'astro';
import { MIRROR_URL } from '../data/agents-doc';

export const prerender = true;

const body = `User-agent: *
Allow: /

Sitemap: ${MIRROR_URL}/sitemap.xml

# Agent context
# ${MIRROR_URL}/agents.md
# ${MIRROR_URL}/llms.txt
`;

export const GET: APIRoute = () =>
	new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
