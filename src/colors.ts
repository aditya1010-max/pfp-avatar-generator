import { createRandom } from "./generator";

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  major: string;
}

const majorColors = [
  "#2564ebaf", // blue
  "#16a34ac8", // green
  "#dc2626c6", // red
  "#eab208cb", // yellow
  "#313131", // black
  "#ffffff", 
];

export function generatePalette(seed: string): ColorPalette {
  const random = createRandom(seed);

  const major =
    majorColors[Math.floor(random() * majorColors.length)];

  const baseHue = Math.floor(random() * 360);

const primary = `hsla(${baseHue}, 65%, 55%, 0.5)`;     

const secondaryHue = (baseHue + 35) % 360;
const secondary = `hsla(${secondaryHue}, 60%, 45%, 0.5)`;

const accentHue = (baseHue + 180) % 360;
const accent = `hsla(${accentHue}, 70%, 65%, 0.55)`;

  return {
    major,
    primary,
    secondary,
    accent,
  };
}