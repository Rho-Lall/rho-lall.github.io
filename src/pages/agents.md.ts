import type { APIRoute } from 'astro';
import { agentsMarkdown } from '../data/agents-doc';

export const prerender = true;

export const GET: APIRoute = () =>
	new Response(agentsMarkdown, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
