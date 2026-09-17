import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateLead, buildLeadPayload, type LeadInput } from './lead-form.ts';

function input(overrides: Partial<LeadInput> = {}): LeadInput {
  return { name: 'Ada Lovelace', email: 'ada@example.com', phone: '', details: '', ...overrides };
}

test('accepts a valid name and email with optional fields blank', () => {
  assert.deepEqual(validateLead(input()), {});
});

test('requires name', () => {
  assert.ok(validateLead(input({ name: '' })).name);
  assert.ok(validateLead(input({ name: '   ' })).name);
});

test('name must be 2-50 characters after trimming', () => {
  assert.ok(validateLead(input({ name: 'A' })).name);
  assert.equal(validateLead(input({ name: 'Al' })).name, undefined);
  assert.equal(validateLead(input({ name: 'x'.repeat(50) })).name, undefined);
  assert.ok(validateLead(input({ name: 'x'.repeat(51) })).name);
});

test('requires a well-formed email', () => {
  assert.ok(validateLead(input({ email: '' })).email);
  assert.ok(validateLead(input({ email: 'not-an-email' })).email);
  assert.ok(validateLead(input({ email: 'a@b' })).email);
  assert.equal(validateLead(input({ email: ' ada@example.com ' })).email, undefined);
});

test('details is optional but capped at 500 characters', () => {
  assert.equal(validateLead(input({ details: 'x'.repeat(500) })).details, undefined);
  assert.ok(validateLead(input({ details: 'x'.repeat(501) })).details);
});

test('phone is optional', () => {
  assert.equal(validateLead(input({ phone: '' })).phone, undefined);
  assert.equal(validateLead(input({ phone: '602-555-0100' })).phone, undefined);
});

test('buildLeadPayload trims fields and adds lead source and timestamp', () => {
  const now = new Date('2026-09-16T12:00:00.000Z');
  const payload = buildLeadPayload(
    input({ name: ' Ada ', email: ' ada@example.com ', phone: ' 602 ', details: ' Stabilize dbt ' }),
    'bi-governance-diagnostic',
    now,
  );
  assert.deepEqual(payload, {
    name: 'Ada',
    email: 'ada@example.com',
    phone: '602',
    details: 'Stabilize dbt',
    customFields: { leadSource: 'bi-governance-diagnostic', timestamp: '2026-09-16T12:00:00.000Z' },
  });
});
