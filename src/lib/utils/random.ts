const UINT32_RANGE = 2 ** 32;

export const MAX_SEED = UINT32_RANGE - 1;

export function randomSeed(): number {
  return Math.floor(Math.random() * UINT32_RANGE);
}

// mulberry32, written so the nth number comes straight from (seed, n).
// Saving the seed and a draw counter is enough to resume a game exactly.
export function mulberry32(seed: number, draw: number): number {
  let t = (seed + Math.imul(draw + 1, 0x6d2b79f5)) >>> 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / UINT32_RANGE;
}
