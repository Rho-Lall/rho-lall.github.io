export interface IdentityBlock {
  name: string;
  title: string;
  taglines: [string, string, string];
  location: string;
}

export interface ProofCard {
  name: string;
  problem: string; // max 120 chars
  result: string; // max 120 chars
  repoUrl: string;
  fallbackUrl: string;
  image: string; // path relative to src/images/
}

export interface ElsewhereLink {
  label: string;
  url: string;
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
  title: 'AI Analytics Engineer',
  taglines: [
    'I build AI systems that recover revenue for real businesses.',
    'I document solutions for both human and machine readers.',
    'I bring down ruthless clarity on complex problems.',
  ],
  location: 'Phoenix, AZ',
};

export const currentlyBuilding = {
  heading: 'Currently Building',
  description:
    'Lead recovery system for appointment businesses: voice + chat AI that answers missed calls and dead DMs, and books the appointment.',
  caseStudyUrl: 'https://github.com/Rho-Lall/lead-recovery-case-study',
  caseStudyLabel: 'Case study →',
};

export const proofCards: ProofCard[] = [
  {
    name: 'lead-recovery-case-study',
    problem: 'Missed calls cost appointment businesses $800+ per lost client',
    result: 'Voice + chat AI concierge that books missed appointments',
    repoUrl: 'https://github.com/Rho-Lall/lead-recovery-case-study',
    fallbackUrl: 'https://github.com/Rho-Lall',
    image: 'lead-recovery.png',
  },
  {
    name: 'big-banana',
    problem:
      'Banana pricing history is scattered across obscure sources, hard to research systematically',
    result:
      'AI research pipeline that mines primary sources and synthesizes structured findings',
    repoUrl: 'https://github.com/Rho-Lall/big-banana',
    fallbackUrl: 'https://github.com/Rho-Lall',
    image: 'big-banana.png',
  },
  {
    name: 'credit-analysis',
    problem:
      'Paying down multiple credit cards optimally is a manual, error-prone spreadsheet exercise',
    result:
      'Branch-and-bound optimizer that computes the fastest, cheapest payoff strategy automatically',
    repoUrl: 'https://github.com/Rho-Lall/credit-analysis',
    fallbackUrl: 'https://github.com/Rho-Lall',
    image: 'credit-analysis.jpg',
  },
  {
    name: 'financial-analysis',
    problem:
      'SEC financial filings are hard to model and analyze without slow, ad-hoc pipelines',
    result:
      'dbt Fusion + Data Vault 2.0 pipeline with an interactive financial reporting dashboard',
    repoUrl: 'https://github.com/Rho-Lall/financial-analysis',
    fallbackUrl: 'https://github.com/Rho-Lall',
    image: 'financial-analysis.jpg',
  },
  {
    name: 'Riptide',
    problem:
      'Coordinating many concurrent Claude Code agents by hand does not scale past a couple terminals',
    result:
      'Lightweight framework orchestrating 6-30 agents through structured parallel waves',
    repoUrl: 'https://github.com/Rho-Lall/Riptide',
    fallbackUrl: 'https://github.com/Rho-Lall',
    image: 'riptide.jpg',
  },
  {
    name: 'BullDozers_CHATBOT',
    problem:
      'Sales teams lose deals to a week-long, manual interview-to-underwriting process',
    result:
      'AI assistant that interviews, collects documents, and assembles underwriting packages in minutes',
    repoUrl: 'https://github.com/Rho-Lall/BullDozers_CHATBOT',
    fallbackUrl: 'https://github.com/Rho-Lall',
    image: 'bulldozers-chatbot.jpg',
  },
];

export const elsewhereLinks: ElsewhereLink[] = [
  { label: 'Substack', url: 'https://rholall.substack.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/rholall' },
  { label: 'GitHub', url: 'https://github.com/Rho-Lall' },
];

export const personSchema: PersonSchema = {
  name: 'Rho Lall',
  jobTitle: 'AI Analytics Engineer',
  url: 'https://rho-lall.github.io',
  sameAs: [
    'https://github.com/Rho-Lall',
    'https://linkedin.com/in/rholall',
    'https://rholall.substack.com',
    'https://bulldozer.life',
  ],
  description:
    'AI Analytics Engineer building AI systems that recover revenue for real businesses.',
};

export function validateProofCard(card: ProofCard): boolean {
  return (
    card.problem.length > 0 &&
    card.problem.length <= 120 &&
    card.result.length > 0 &&
    card.result.length <= 120
  );
}

export const socialMeta: SocialMeta = {
  ogTitle: 'Rho Lall — AI Analytics Engineer',
  ogDescription: 'I build AI systems that recover revenue for real businesses.',
  ogType: 'website',
  ogUrl: 'https://rho-lall.github.io',
  twitterCard: 'summary',
  twitterTitle: 'Rho Lall — AI Analytics Engineer',
  twitterDescription:
    'I build AI systems that recover revenue for real businesses.',
};
