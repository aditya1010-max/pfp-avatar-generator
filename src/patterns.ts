import { createRandom } from "./generator";
import type { ColorPalette } from "./colors";

type PatternType =
  | "blobs"
  | "diagonal"
  | "radial"
  | "grid"
  | "waves"
  | "constellation"
  | "halftone"
  | "diamonds"
  | "generateZigzag"

export function generatePattern(
  seed: string,
  palette: ColorPalette,
): string {
  const random = createRandom(seed);

  // Keep color generation and pattern generation deterministic.
  random();

  const patterns: PatternType[] = [
    "blobs",
    "diagonal",
    "radial",
    "grid",
    "waves",
    "constellation",
    "halftone",
    "diamonds",
    "generateZigzag"
  ];

  const pattern =
    patterns[Math.floor(random() * patterns.length)];

  switch (pattern) {
    case "blobs":
      return generateBlobs(palette, random);

    case "diagonal":
      return generateDiagonal(palette, random);

    case "radial":
      return generateRadial(palette, random);

    case "grid":
      return generateGrid(palette, random);

    case "waves":
      return generateWaves(palette, random);

    case "constellation":
      return generateConstellation(palette, random);

    case "halftone":
      return generateHalftone(palette, random);

    case "diamonds":
      return generateDiamonds(palette, random);

    case "generateZigzag":
      return generateZigzag(palette, random);


  }
}

function generateBlobs(
  palette: ColorPalette,
  random: () => number,
): string {
  const x = Math.floor(random() * 100);
  const y = Math.floor(random() * 100);

  return `
    radial-gradient(
      circle at ${x}% ${y}%,
      ${palette.accent} 0%,
      transparent 42%
    ),
    radial-gradient(
      circle at 80% 75%,
      ${palette.secondary} 0%,
      transparent 48%
    ),
    linear-gradient(
      135deg,
      ${palette.primary},
      ${palette.secondary}
    )
  `;
}

function generateDiagonal(
  palette: ColorPalette,
  random: () => number,
): string {
  const angle = Math.floor(random() * 60) + 120;
  const width = Math.floor(random() * 30) + 25;

  return `
    repeating-linear-gradient(
      ${angle}deg,
      ${palette.primary} 0px,
      ${palette.primary} ${width}px,
      ${palette.secondary} ${width}px,
      ${palette.secondary} ${width * 2}px
    )
  `;
}

function generateRadial(
  palette: ColorPalette,
  random: () => number,
): string {
  const x = Math.floor(random() * 100);
  const y = Math.floor(random() * 100);

  return `
    radial-gradient(
      circle at ${x}% ${y}%,
      ${palette.accent} 0%,
      ${palette.primary} 45%,
      ${palette.secondary} 100%
    )
  `;
}

function generateGrid(
  palette: ColorPalette,
  _random: () => number,
): string {

  return `
    linear-gradient(
      45deg,
      ${palette.secondary} 25%,
      transparent 25%
    ),
    linear-gradient(
      -45deg,
      ${palette.primary} 25%,
      transparent 25%
    ),
    linear-gradient(
      45deg,
      transparent 75%,
      ${palette.accent} 75%
    ),
    linear-gradient(
      -45deg,
      transparent 75%,
      ${palette.secondary} 75%
    ),
    ${palette.primary}
  `;
}

// function generateRings(
//   palette: ColorPalette,
//   random: () => number,
// ): string {
//   const x = Math.floor(random() * 100);
//   const y = Math.floor(random() * 100);

//   return `
//     repeating-radial-gradient(
//       circle at ${x}% ${y}%,
//       ${palette.primary} 0px,
//       ${palette.primary} 12px,
//       ${palette.secondary} 14px,
//       ${palette.secondary} 24px
//     )
//   `;
// }

function generateWaves(
  palette: ColorPalette,
  random: () => number,
): string {
  const angle = Math.floor(random() * 40) + 20;

  return `
    repeating-linear-gradient(
      ${angle}deg,
      ${palette.primary} 0px,
      ${palette.primary} 18px,
      ${palette.secondary} 20px,
      ${palette.secondary} 38px,
      ${palette.accent} 40px,
      ${palette.accent} 48px
    )
  `;
}

function generateConstellation(
  palette: ColorPalette,
  random: () => number,
): string {
  const x1 = Math.floor(random() * 100);
  const y1 = Math.floor(random() * 100);

  const x2 = Math.floor(random() * 100);
  const y2 = Math.floor(random() * 100);

  const x3 = Math.floor(random() * 100);
  const y3 = Math.floor(random() * 100);

  return `
    radial-gradient(
      circle at ${x1}% ${y1}%,
      ${palette.accent} 0px,
      ${palette.accent} 4px,
      transparent 5px
    ),
    radial-gradient(
      circle at ${x2}% ${y2}%,
      ${palette.accent} 0px,
      ${palette.accent} 3px,
      transparent 4px
    ),
    radial-gradient(
      circle at ${x3}% ${y3}%,
      ${palette.accent} 0px,
      ${palette.accent} 5px,
      transparent 6px
    ),
    ${palette.primary}
  `;
}

function generateHalftone(
  palette: ColorPalette,
  random: () => number,
): string {
  const size = Math.floor(random() * 10) + 10;

  return `
    radial-gradient(
      circle,
      ${palette.accent} 2px,
      transparent 3px
    )
    0 0 / ${size}px ${size}px,
    ${palette.primary}
  `;
}

function generateDiamonds(
  palette: ColorPalette,
  _random: () => number,
): string {

  return `
    linear-gradient(
      45deg,
      ${palette.secondary} 25%,
      transparent 25%,
      transparent 75%,
      ${palette.secondary} 75%
    ),
    linear-gradient(
      45deg,
      ${palette.accent} 25%,
      transparent 25%,
      transparent 75%,
      ${palette.accent} 75%
    ),
    ${palette.primary}
  `;
}


function generateZigzag(
  palette: ColorPalette,
  _random: () => number,
): string {
  return `
    linear-gradient(
      135deg,
      ${palette.secondary} 25%,
      transparent 25%
    )
    -20px 0 / 40px 40px,

    linear-gradient(
      225deg,
      ${palette.accent} 25%,
      transparent 25%
    )
    -20px 0 / 40px 40px,

    linear-gradient(
      315deg,
      ${palette.secondary} 25%,
      transparent 25%
    )
    0 0 / 40px 40px,

    linear-gradient(
      45deg,
      ${palette.accent} 25%,
      ${palette.primary} 25%
    )
    0 0 / 40px 40px
  `;
}
