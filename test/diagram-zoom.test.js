import test from 'node:test';
import assert from 'node:assert/strict';

import { getDiagramZoomStartIndex } from '../public/js/diagram-zoom.js';

test('lightbox opens on the clicked chord even while playback is on another chord', () => {
  const startIndex = getDiagramZoomStartIndex(0, {
    playChords: true,
    isPlaying: true,
    activeChordIndex: 1
  });

  assert.equal(startIndex, 0);
});

test('lightbox rejects invalid chord indexes', () => {
  assert.equal(getDiagramZoomStartIndex(-1), null);
  assert.equal(getDiagramZoomStartIndex(1.5), null);
});
