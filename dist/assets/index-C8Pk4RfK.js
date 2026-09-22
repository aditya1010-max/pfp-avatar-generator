(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function t(t){let n=e(t);return function(){return n=n*1664525+1013904223>>>0,n/4294967296}}var n=[`#2564eb90`,`#16a34aa8`,`#dc2626a8`,`#eab208a8`,`#313131b3`,`#a9a965b5`];function r(e){let r=t(e),i=n[Math.floor(r()*n.length)],a=Math.floor(r()*360);return{major:i,primary:`hsla(${a}, 65%, 55%, 0.65)`,secondary:`hsla(${(a+35)%360}, 60%, 45%, 0.65)`,accent:`hsla(${(a+180)%360}, 70%, 65%, 0.75)`}}function i(e,n){let r=t(e);r();let i=[`blobs`,`diagonal`,`radial`,`grid`,`waves`,`constellation`,`halftone`,`diamonds`,`generateZigzag`];switch(i[Math.floor(r()*i.length)]){case`blobs`:return a(n,r);case`diagonal`:return o(n,r);case`radial`:return s(n,r);case`grid`:return c(n,r);case`waves`:return l(n,r);case`constellation`:return u(n,r);case`halftone`:return d(n,r);case`diamonds`:return f(n,r);case`generateZigzag`:return p(n,r)}}function a(e,t){return`
    radial-gradient(
      circle at ${Math.floor(t()*100)}% ${Math.floor(t()*100)}%,
      ${e.accent} 0%,
      transparent 42%
    ),
    radial-gradient(
      circle at 80% 75%,
      ${e.secondary} 0%,
      transparent 48%
    ),
    linear-gradient(
      135deg,
      ${e.primary},
      ${e.secondary}
    )
  `}function o(e,t){let n=Math.floor(t()*60)+120,r=Math.floor(t()*30)+25;return`
    repeating-linear-gradient(
      ${n}deg,
      ${e.primary} 0px,
      ${e.primary} ${r}px,
      ${e.secondary} ${r}px,
      ${e.secondary} ${r*2}px
    )
  `}function s(e,t){return`
    radial-gradient(
      circle at ${Math.floor(t()*100)}% ${Math.floor(t()*100)}%,
      ${e.accent} 0%,
      ${e.primary} 45%,
      ${e.secondary} 100%
    )
  `}function c(e,t){return`
    linear-gradient(
      45deg,
      ${e.secondary} 25%,
      transparent 25%
    ),
    linear-gradient(
      -45deg,
      ${e.primary} 25%,
      transparent 25%
    ),
    linear-gradient(
      45deg,
      transparent 75%,
      ${e.accent} 75%
    ),
    linear-gradient(
      -45deg,
      transparent 75%,
      ${e.secondary} 75%
    ),
    ${e.primary}
  `}function l(e,t){return`
    repeating-linear-gradient(
      ${Math.floor(t()*40)+20}deg,
      ${e.primary} 0px,
      ${e.primary} 18px,
      ${e.secondary} 20px,
      ${e.secondary} 38px,
      ${e.accent} 40px,
      ${e.accent} 48px
    )
  `}function u(e,t){let n=Math.floor(t()*100),r=Math.floor(t()*100),i=Math.floor(t()*100),a=Math.floor(t()*100),o=Math.floor(t()*100),s=Math.floor(t()*100);return`
    radial-gradient(
      circle at ${n}% ${r}%,
      ${e.accent} 0px,
      ${e.accent} 4px,
      transparent 5px
    ),
    radial-gradient(
      circle at ${i}% ${a}%,
      ${e.accent} 0px,
      ${e.accent} 3px,
      transparent 4px
    ),
    radial-gradient(
      circle at ${o}% ${s}%,
      ${e.accent} 0px,
      ${e.accent} 5px,
      transparent 6px
    ),
    ${e.primary}
  `}function d(e,t){let n=Math.floor(t()*10)+10;return`
    radial-gradient(
      circle,
      ${e.accent} 2px,
      transparent 3px
    )
    0 0 / ${n}px ${n}px,
    ${e.primary}
  `}function f(e,t){return`
    linear-gradient(
      45deg,
      ${e.secondary} 25%,
      transparent 25%,
      transparent 75%,
      ${e.secondary} 75%
    ),
    linear-gradient(
      45deg,
      ${e.accent} 25%,
      transparent 25%,
      transparent 75%,
      ${e.accent} 75%
    ),
    ${e.primary}
  `}function p(e,t){return`
    linear-gradient(
      135deg,
      ${e.secondary} 25%,
      transparent 25%
    )
    -20px 0 / 40px 40px,

    linear-gradient(
      225deg,
      ${e.accent} 25%,
      transparent 25%
    )
    -20px 0 / 40px 40px,

    linear-gradient(
      315deg,
      ${e.secondary} 25%,
      transparent 25%
    )
    0 0 / 40px 40px,

    linear-gradient(
      45deg,
      ${e.accent} 25%,
      ${e.primary} 25%
    )
    0 0 / 40px 40px
  `}document.querySelector(`#app`).innerHTML=`
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
`;var m=document.querySelector(`#seed`),h=document.querySelector(`#randomize`),g=document.querySelector(`.avatar-ring`),_=document.querySelector(`.avatar-pattern`);function v(){let e=m.value.trim()||`type`,t=r(e),n=i(e,t);console.log(`Seed:`,e),console.log(`Palette:`,t),console.log(`Pattern:`,n),console.log(`Major color:`,t.major),g.style.background=t.major,_.style.background=n}m.addEventListener(`input`,v),h.addEventListener(`click`,()=>{m.value=crypto.randomUUID(),v()}),v();