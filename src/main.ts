import "./style.css";

import { generatePalette } from "./colors";
import { generatePattern } from "./patterns";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="app">
    <header class="header">
      <h1>Avatar Generator</h1>
      <p>
        Generate deterministic avatars from a simple seed.
      </p>
    </header>

    <section class="generator">
      <div class="controls">
        <label for="seed">Seed</label>

        <div class="seed-input">
          <input
            id="seed"
            type="text"
            value="type.."
            placeholder="Enter a seed..."
          />

          <button id="randomize" type="button">
            Randomize
          </button>
        </div>
      </div>

      <div class="preview">
        <div id="avatar" class="avatar">
          <div class="avatar-ring">
            <div class="avatar-pattern">
              <span class="avatar-initials"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

const seedInput =
  document.querySelector<HTMLInputElement>("#seed")!;

const randomizeButton =
  document.querySelector<HTMLButtonElement>("#randomize")!;


const avatarRing =
  document.querySelector<HTMLDivElement>(".avatar-ring")!;

const avatarPattern =
  document.querySelector<HTMLDivElement>(".avatar-pattern")!;

function updateAvatar() {
  const seed = seedInput.value.trim() || "type";

  const palette = generatePalette(seed);
  const pattern = generatePattern(seed, palette);

  // const initials = seed.slice(0, 2).toUpperCase();

  console.log("Seed:", seed);
  console.log("Palette:", palette);
  console.log("Pattern:", pattern);
  console.log("Major color:", palette.major);

  // Major color ring
  avatarRing.style.background = palette.major;

  // Generated pattern
  avatarPattern.style.background = pattern;

  // Initials
  // avatarInitials.textContent = initials;
}

seedInput.addEventListener("input", updateAvatar);

randomizeButton.addEventListener("click", () => {
  const randomSeed = crypto.randomUUID();

  seedInput.value = randomSeed;

  updateAvatar();
});

updateAvatar();