export const TEMPO_MIN = 50;
export const TEMPO_MAX = 180;
export const DEFAULT_TEMPO = 92;

export function clampTempo(value) {
  return Math.max(TEMPO_MIN, Math.min(TEMPO_MAX, value));
}

export function parseCommittedTempo(value, fallback = DEFAULT_TEMPO) {
  if (typeof value === 'string' && !value.trim()) {
    return clampTempo(fallback);
  }

  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return clampTempo(fallback);
  }

  return clampTempo(parsed);
}

export function parseTempoDraft(value) {
  if (typeof value !== 'string') {
    return { state: 'invalid' };
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return { state: 'empty' };
  }

  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) {
    return { state: 'invalid' };
  }

  if (parsed < TEMPO_MIN || parsed > TEMPO_MAX) {
    return {
      state: 'out-of-range',
      value: parsed
    };
  }

  return {
    state: 'valid',
    value: parsed
  };
}
