import test from 'node:test';
import assert from 'node:assert/strict';
import { RateLimiter } from './rate-limit.js';

test('allows a small number of requests and blocks the next ones', () => {
  const limiter = new RateLimiter({ windowMs: 1000, max: 2 });
  assert.equal(limiter.check('alice'), true);
  assert.equal(limiter.check('alice'), true);
  assert.equal(limiter.check('alice'), false);
});
