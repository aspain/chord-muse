import test from 'node:test';
import assert from 'node:assert/strict';

import { buildChordDefinition, getKeyTonicName, getScaleNoteName } from '../public/js/music-theory.js';

test('major keys use theory-correct tonic spellings for their scale degrees', () => {
  assert.equal(getKeyTonicName('major', 4), 'E');
  assert.equal(getScaleNoteName('major', 4, 6), 'C#');
  assert.equal(buildChordDefinition(4, 'major', 6).label, 'C#m');
});

test('minor keys prefer conventional tonic spellings', () => {
  assert.equal(getKeyTonicName('minor', 1), 'C#');
  assert.equal(getScaleNoteName('minor', 1, 6), 'A');
  assert.equal(buildChordDefinition(1, 'minor', 4).label, 'F#m');
});

test('sharp keys spell leading tones correctly instead of flattening them', () => {
  const leadingToneChord = buildChordDefinition(6, 'major', 7);

  assert.equal(leadingToneChord.noteName, 'E#');
  assert.equal(leadingToneChord.label, 'E#dim');
  assert.equal(leadingToneChord.id, 'E#:dim');
});
