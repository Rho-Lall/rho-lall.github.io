// Page content for "Follow the Friction".
// Copy is authoritative from docs/scroll-direction.md; layout direction lives in docs/home.pen.

export interface IdentityBlock {
  name: string;
  title: string;
  taglines: [string, string, string];
  location: string;
}

export interface ElsewhereLink {
  label: string;
  url: string;
  icon: string;
}

export interface PersonSchema {
  name: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
  description: string;
}

export interface SocialMeta {
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
}

// --- Data ---

export const identity: IdentityBlock = {
  name: 'Rho Lall',
  title: 'BI Architect',
  taglines: [
    'I bring down ruthless clarity on complex problems.',
    'I build systems that recover revenue for real businesses.',
    'I document solutions for both human and machine readers.',
  ],
  location: 'Phoenix, AZ',
};

export const ctaLabel = 'Start your session';

export const friction = {
  heading: 'You probably already know where the friction is.',
  painPoints: [
    'The process that still depends on one person knowing what to do.',
    'The numbers that trigger a debate before they can trigger a decision.',
    'The project everyone agrees matters, but nobody can quite get moving.',
    'The report everyone loves to doubt.',
  ],
};

export const pivot = {
  lead: "The hard part usually isn't finding more problems.",
  statement: "It's figuring out what the problems are actually telling you.",
};

export const valueProp = {
  heading: 'See the problem differently.',
  intro: 'Follow the Friction is a short, AI-guided executive session built around one goal:',
  goal: 'Help you connect the dots inside your business and identify what deserves your focus.',
  detail:
    'You know what you know. But this will enable you to test assumptions, surface contradictions, expose hidden dependencies, and follow the implications.',
};

export const reframing = {
  heading: 'Because the problem you bring in may not be the problem you leave with.',
  cards: [
    { from: 'What looks like a reporting problem', to: 'might be an ownership problem.' },
    { from: 'What looks like a technology problem', to: 'might be a process problem.' },
    {
      from: 'What looks like an isolated workaround',
      to: 'might be evidence that the business has outgrown a decision made years ago.',
    },
  ],
  punchline: "That's the point.",
};

export const audience = {
  heading: 'This is for businesses that got more complicated as they grew.',
  context:
    'Especially growing e-commerce and lifestyle brands where systems like NetSuite, Snowflake, and Looker now sit between more people, more processes, and more decisions than they used to.',
  bridge: 'The business works. But it has become harder to understand from end to end.',
  symptoms: [
    'You can feel it when a simple question requires three people.',
    'When two departments bring different numbers to the same meeting.',
    'When a project crosses enough systems that nobody quite owns the whole thing.',
    'When the person who "just knows how it works" becomes part of the infrastructure.',
  ],
};

export const onYourMind = {
  heading: "What's on your mind?",
  sub: "What's taking up space?",
  maybes: [
    "Maybe your numbers don't agree.",
    "Maybe too much knowledge still lives in people's heads.",
    'Maybe the business has outgrown systems that used to work perfectly well.',
    'Maybe a manual workaround has quietly become part of how the company operates.',
    "Maybe you're considering a major data, AI, reporting, or technology initiative and aren't sure what has to be true first.",
    'Maybe you just know something feels harder than it should.',
  ],
  anchor: 'Start there.',
  follow: 'Start where there is friction. See where it leads.',
};

export const outcomes = {
  heading: "What you'll leave with.",
  intro: 'The session is designed to help you uncover:',
  cards: [
    { icon: 'git-branch', label: 'Patterns you may not have connected before' },
    { icon: 'scan', label: 'What appears to deserve deeper attention' },
    { icon: 'target', label: 'Why it matters to the business' },
    { icon: 'trending-down', label: 'What the current situation may be costing you' },
    { icon: 'compass', label: 'What still needs to be understood before making a decision' },
  ],
  antiChecklist: "You won't leave with a canned maturity score or a generic checklist.",
  antiPromise: "You'll leave with a clearer way to think about what's happening.",
};

export const credibility = {
  heading: 'Technically Correct is Still Wrong.',
  paragraphs: [
    "I'm a BI Architect. My work sits in the space between the systems and the business trying to use them.",
    'That has taught me to be suspicious of technically correct answers to business problems. A dashboard can be fast and still fail the people relying on it. A data platform can be healthy while nobody trusts the number. A system can follow best practices and still be painful to change.',
    'And increasingly, business logic has to make sense to more than just the person who built it. It has to be understandable to the next person, the next system, and the machines beginning to work alongside them.',
  ],
  punch: 'So I look beyond whether something works.',
  core:
    'I want to know what depends on it, who trusts it, what happens around it, and what the business has quietly learned to compensate for.',
  close: "That's usually where the interesting problem is.",
  substackPrefix: 'I write about these problems on',
  substackLabel: 'Substack',
  substackUrl: 'https://rholall.substack.com',
};

export const closing = {
  heading: 'Years of decisions are baked into your business.',
  decisionLines: [
    'Some live in code.',
    'Some live in dashboards.',
    'Some live in spreadsheets.',
    "Some live in people's heads.",
  ],
  growing:
    'As the business grows, those decisions become connected in ways that are increasingly difficult to see from inside the company.',
  quote: 'Sometimes you need someone outside the web to help you see the web.',
  finalHeading: 'Start Your Session.',
  finalSub: "Bring whatever feels harder than it should. We'll start there.",
};

export const diagnosticForm = {
  apiEndpoint: 'https://y1krjhl41m.execute-api.us-east-1.amazonaws.com/prod/leads',
  leadSource: 'follow-the-friction',
  // TODO: replace with the real session URL once it exists (see docs/scroll-direction.md).
  successUrl: '',
  heading: 'Start your session',
  subtext: "Tell me where to send it and I'll follow up with next steps.",
  detailsLabel: "What's your primary goal right now?",
  submitLabel: 'Start your session',
  successHeading: 'Thank you!',
  successMessage: 'Your request is in. Check your email for next steps.',
  errorMessage: 'Something went wrong. Please try again.',
};

export const elsewhereLinks: ElsewhereLink[] = [
  { label: 'Substack', url: 'https://rholall.substack.com', icon: 'rss' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/rholall', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/Rho-Lall', icon: 'github' },
];

export const personSchema: PersonSchema = {
  name: 'Rho Lall',
  jobTitle: 'BI Architect',
  url: 'https://rho-lall.github.io',
  sameAs: [
    'https://github.com/Rho-Lall',
    'https://linkedin.com/in/rholall',
    'https://rholall.substack.com',
    'https://bulldozer.life',
  ],
  description:
    'BI Architect running Follow the Friction, a short AI-guided executive session that helps you connect the dots inside your business and identify what deserves your focus.',
};

export const socialMeta: SocialMeta = {
  ogTitle: 'Follow the Friction — Rho Lall, BI Architect',
  ogDescription:
    'A short, AI-guided executive session. Start where there is friction. See where it leads.',
  ogType: 'website',
  ogUrl: 'https://rho-lall.github.io',
  twitterCard: 'summary',
  twitterTitle: 'Follow the Friction — Rho Lall, BI Architect',
  twitterDescription:
    'A short, AI-guided executive session. Start where there is friction. See where it leads.',
};
