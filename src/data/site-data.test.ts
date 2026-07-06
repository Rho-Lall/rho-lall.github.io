import { test } from 'node:test';
import assert from 'node:assert/strict';
import { proofCards, validateProofCard, type ProofCard } from './site-data.ts';

function cardWith(problem: string, result: string): ProofCard {
  return {
    name: 'test-card',
    problem,
    result,
    repoUrl: 'https://github.com/Rho-Lall/test-card',
    fallbackUrl: 'https://github.com/Rho-Lall',
  };
}

test('all real proof cards pass validation', () => {
  for (const card of proofCards) {
    assert.equal(validateProofCard(card), true, `${card.name} should be valid`);
  }
});

test('accepts problem/result at exactly 120 chars', () => {
  const s120 = 'x'.repeat(120);
  assert.equal(validateProofCard(cardWith(s120, s120)), true);
});

test('rejects problem/result at 121 chars', () => {
  const s121 = 'x'.repeat(121);
  assert.equal(validateProofCard(cardWith(s121, 'ok')), false);
  assert.equal(validateProofCard(cardWith('ok', s121)), false);
});

test('rejects empty problem or result', () => {
  assert.equal(validateProofCard(cardWith('', 'ok')), false);
  assert.equal(validateProofCard(cardWith('ok', '')), false);
});

test('agrees with direct length check across random lengths', () => {
  for (let i = 0; i < 50; i++) {
    const problemLen = Math.floor(Math.random() * 200);
    const resultLen = Math.floor(Math.random() * 200);
    const card = cardWith('x'.repeat(problemLen), 'x'.repeat(resultLen));
    const expected =
      problemLen > 0 && problemLen <= 120 && resultLen > 0 && resultLen <= 120;
    assert.equal(validateProofCard(card), expected, `len ${problemLen}/${resultLen}`);
  }
});
