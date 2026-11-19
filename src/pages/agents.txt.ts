import type { APIRoute } from 'astro';
import { agentsText } from '../data/agents-doc';

// Pointer only: /agents.md is the document.
export const prerender = true;

export const GET: APIRoute = () =>
	new Response(agentsText, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
