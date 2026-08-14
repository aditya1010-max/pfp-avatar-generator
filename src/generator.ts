export function hashSeed(seed: string): number {
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

export function createRandom(seed: string) {
  let state = hashSeed(seed);

  return function random(): number {
    state = (state * 1664525 + 1013904223) >>> 0;

    return state / 4294967296;
  };
}

