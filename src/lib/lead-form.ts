export interface LeadInput {
  name: string;
  email: string;
  phone: string;
  details: string;
}

export type LeadErrors = Partial<Record<keyof LeadInput, string>>;

export interface LeadPayload extends LeadInput {
  customFields: {
    leadSource: string;
    timestamp: string;
  };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limits mirror funnel-0ps LeadCaptureForm so the leads endpoint sees the same shape.
export function validateLead(input: LeadInput): LeadErrors {
  const errors: LeadErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length < 2 || name.length > 50) {
    errors.name = 'Name must be between 2 and 50 characters.';
  }

  if (!email) {
    errors.email = 'Please enter your email.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (input.details.trim().length > 500) {
    errors.details = 'Please keep this under 500 characters.';
  }

  return errors;
}

export function buildLeadPayload(input: LeadInput, leadSource: string, now: Date = new Date()): LeadPayload {
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    details: input.details.trim(),
    customFields: {
      leadSource,
      timestamp: now.toISOString(),
    },
  };
}
