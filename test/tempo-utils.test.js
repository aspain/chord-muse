import test from 'node:test';
import assert from 'node:assert/strict';

import { parseCommittedTempo, parseTempoDraft } from '../public/js/tempo-utils.js';

test('parseTempoDraft keeps empty or partial values uncommitted while editing', () => {
  assert.deepEqual(parseTempoDraft(''), { state: 'empty' });
  assert.deepEqual(parseTempoDraft('10'), { state: 'out-of-range', value: 10 });
  assert.deepEqual(parseTempoDraft('181'), { state: 'out-of-range', value: 181 });
});

test('parseTempoDraft accepts in-range numeric values for immediate sync', () => {
  assert.deepEqual(parseTempoDraft('100'), { state: 'valid', value: 100 });
  assert.deepEqual(parseTempoDraft(' 92 '), { state: 'valid', value: 92 });
});

test('parseCommittedTempo clamps finalized values into the supported BPM range', () => {
  assert.equal(parseCommittedTempo('', 92), 92);
  assert.equal(parseCommittedTempo('10', 92), 50);
  assert.equal(parseCommittedTempo('100', 92), 100);
  assert.equal(parseCommittedTempo('240', 92), 180);
});
