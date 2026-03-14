export function getDiagramZoomStartIndex(clickedIndex, _playbackState = {}) {
  if (!Number.isInteger(clickedIndex) || clickedIndex < 0) return null;

  // Opening the lightbox should honor the chord the user clicked.
  // Playback can still advance the carousel after the overlay is open.
  return clickedIndex;
}
