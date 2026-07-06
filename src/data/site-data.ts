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
