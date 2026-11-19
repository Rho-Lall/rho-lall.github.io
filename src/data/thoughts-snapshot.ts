// Snapshot of the most recent Substack posts, written by scripts/snapshot-thoughts.mjs.
// The homepage fetches the live feed at build time; this is what renders when
// that fetch fails (Substack blocks some CI runners).
//
// Refresh with: npm run snapshot:thoughts

export interface ThoughtPost {
	title: string;
	url: string;
	date: string;
	image?: string;
	description?: string;
}

export const thoughtsSnapshot: ThoughtPost[] = [
	{
		"title": "What Can AI Take Off Your Plate?",
		"url": "https://rholall.substack.com/p/what-can-ai-take-off-your-plate",
		"date": "Mon, 16 Nov 2026 16:14:31 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!8aq2!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b052dc4-0182-48c1-ab9b-a6975f8390f0_2752x1536.png",
		"description": "It’s Friday. You have a pile of work that’s done and realize you haven’t thought about it all week. I’ll show you my setup to handoff work to AI, so you can finally move…"
	},
	{
		"title": "Getting Started with Claude Code",
		"url": "https://rholall.substack.com/p/getting-started-with-claude-code",
		"date": "Sat, 14 Nov 2026 01:01:17 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!ol6O!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd74b8dc1-19fc-43d3-9f4a-5a8418cf7de5_2304x1856.jpeg",
		"description": "When you copy the answer out of ChatGPT. How much of your work is still left? You paste the answer back into whatever you were working on and pick up where you left off.…"
	},
	{
		"title": "This Dashboard Answers Everything Except Your Question",
		"url": "https://rholall.substack.com/p/this-dashboard-answers-everything",
		"date": "Mon, 09 Nov 2026 15:11:31 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!po4t!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3a3ee48b-2e7f-4626-8af6-52790d31c784_2528x1696.jpeg",
		"description": "Something on the dashboard looks hinky. You ask one question. Not a hard one. You want to understand. But the asking becomes a process. People pulled in, then someone…"
	},
	{
		"title": "Another Meeting Lost To Internal Bickering",
		"url": "https://rholall.substack.com/p/another-meeting-lost-to-internal",
		"date": "Mon, 02 Nov 2026 15:03:45 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!TPHH!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F47cf4e75-8126-4bcf-b01a-dad98d177e24_2528x1696.jpeg",
		"description": "Some sales in our report were recorded the day before the session where they supposedly happened. That caused sales numbers to flicker slightly depending on what date…"
	},
	{
		"title": "We Don’t Do That Kind of Thing, Do We?",
		"url": "https://rholall.substack.com/p/we-dont-do-that-kind-of-thing-do",
		"date": "Mon, 26 Oct 2026 15:11:34 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!cR1h!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4475d9bd-8781-4006-9bb0-70067fd02a04_2528x1696.jpeg",
		"description": "Did I ever tell you about the time that I exorcised a demon? I only ever saw the house at night. We would return, knock, wait, knock again, and move on. At the time that…"
	},
	{
		"title": "Railway is compromised.",
		"url": "https://rholall.substack.com/p/railway-is-compromised",
		"date": "Thu, 22 Oct 2026 16:45:59 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!JXWP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6a13d85f-1b5c-4fb5-bb67-da2df62975f9_1280x720.png",
		"description": "This text from a buddy sent me into thirty minutes of rotating keys last night. “Railway is compromised.” This Substack is reader-supported. To receive new posts and…"
	},
	{
		"title": "How I Act On Questionable Numbers",
		"url": "https://rholall.substack.com/p/how-i-act-on-questionable-numbers",
		"date": "Wed, 21 Oct 2026 15:52:33 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!-qOb!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2afe96f5-6e93-4c61-98ba-e1a7e2c487e4_2752x1536.jpeg",
		"description": "What do you do with an expensive answer about your own business that you can’t sign off on? At Purple, our media mix model said marketing had zero impact on sales.…"
	},
	{
		"title": "Do you Catch Your Agents in Loops?",
		"url": "https://rholall.substack.com/p/do-you-catch-your-agents-in-loops",
		"date": "Mon, 12 Oct 2026 15:30:55 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!j0zV!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6ba379b5-689d-477b-86f7-89d2da365e6a_2400x1792.jpeg",
		"description": "It’s October, and I’m still working on goals I set in January. Some of them feel new, until I read my notes. The same goal. The same excitement. The same promise to…"
	},
	{
		"title": "Hyper-growth Isn't Your Problem",
		"url": "https://rholall.substack.com/p/hyper-growth-isnt-your-problem",
		"date": "Mon, 05 Oct 2026 19:30:18 GMT",
		"image": "https://substackcdn.com/image/fetch/$s_!uJ00!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd962793e-66d6-4395-8b38-0e309e10a1a6_2400x1792.jpeg",
		"description": "We grew so fast. But now, there is all this stuff. Growth was the goal. Now when the numbers don’t match and the audit comes back dirty, it’s the thing everyone points…"
	}
];
