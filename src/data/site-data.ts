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

export interface DiagnosticArea {
  label: string;
  icon: string;
}

// --- Data ---

export const identity: IdentityBlock = {
  name: 'Rho Lall',
  title: 'BI Architect',
  taglines: [
    'I build systems that recover revenue for real businesses.',
    'I document solutions for both human and machine readers.',
    'I bring down ruthless clarity on complex problems.',
  ],
  location: 'Phoenix, AZ',
};

export const problem = {
  lead: 'Your data environment has years of decisions baked into it.',
  lines: ['Some live in code.', 'Some live in dashboards.', 'Some live in people’s heads.'],
};

export const headline = {
  heading: ['Rebuild the engine without', 'grounding the plane.'],
  paragraphs: [
    'Your business has grown faster than the data systems supporting it. Now those systems need to catch up while the business keeps moving.',
    'A free, code-first governance diagnostic for the BI architect responsible for keeping a growing data environment reliable while the business keeps moving.',
  ],
  hook: 'Find where your environment is carrying risk and the 2–3 issues worth tackling first.',
};

export const failurePoints = {
  heading: 'Find the failure points.',
  intro: 'The diagnostic looks at your environment from two directions:',
  directions: [
    {
      label: 'Your systems',
      description:
        'Analyze the code, models, reporting, definitions, and architecture that have accumulated over time.',
    },
    {
      label: 'Your institutional knowledge',
      description:
        'Identify the decisions, dependencies, and business context that still live with individual people.',
    },
  ],
  areasIntro: 'Together, they evaluate six areas:',
  areas: [
    { label: 'Definitions', icon: 'book-open' },
    { label: 'Architecture', icon: 'layers' },
    { label: 'Reporting', icon: 'chart-bar' },
    { label: 'Ownership', icon: 'users' },
    { label: 'Institutional Memory', icon: 'brain' },
    { label: 'Change Risk', icon: 'shield-alert' },
  ] satisfies DiagnosticArea[],
};

export const flightPlan = {
  heading: 'Get a clear flight plan.',
  intro: 'As a BI architect, you already know there’s a lot to clean up.',
  subtext: 'The executive findings report helps narrow the field:',
  questions: [
    'Where is the risk?',
    'What is most likely to create problems later?',
    'What are the 2–3 issues we should tackle first?',
  ],
  ctaLabel: 'Run the free diagnostic',
};

export const diagnosticForm = {
  apiEndpoint: 'https://y1krjhl41m.execute-api.us-east-1.amazonaws.com/prod/leads',
  leadSource: 'bi-governance-diagnostic',
  heading: 'Run the free diagnostic',
  subtext: 'Tell me where to send it and I’ll follow up with next steps.',
  detailsLabel: 'What’s your primary goal right now?',
  submitLabel: 'Send my request',
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
    'BI Architect offering a free, code-first governance diagnostic for growing data environments.',
};

export const socialMeta: SocialMeta = {
  ogTitle: 'Rho Lall — BI Architect',
  ogDescription:
    'Rebuild the engine without grounding the plane. A free, code-first governance diagnostic for BI architects.',
  ogType: 'website',
  ogUrl: 'https://rho-lall.github.io',
  twitterCard: 'summary',
  twitterTitle: 'Rho Lall — BI Architect',
  twitterDescription:
    'Rebuild the engine without grounding the plane. A free, code-first governance diagnostic for BI architects.',
};
