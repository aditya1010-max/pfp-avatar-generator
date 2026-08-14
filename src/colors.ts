import { createRandom } from "./generator";

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  major: string;
}

const majorColors = [
  "#2564eb90", // blue
  "#16a34aa8", // green
  "#dc2626a8", // red
  "#eab208a8", // yellow
  "#313131b3", // black
  "#a9a965b5", // olive 
];

export function generatePalette(seed: string): ColorPalette {
  const random = createRandom(seed);

  const major =
    majorColors[Math.floor(random() * majorColors.length)];

  const baseHue = Math.floor(random() * 360);

const primary = `hsla(${baseHue}, 65%, 55%, 0.65)`;     

const secondaryHue = (baseHue + 35) % 360;
const secondary = `hsla(${secondaryHue}, 60%, 45%, 0.65)`;

const accentHue = (baseHue + 180) % 360;
const accent = `hsla(${accentHue}, 70%, 65%, 0.75)`;

  return {
    major,
    primary,
    secondary,
    accent,
  };
}