import { useEffect, useState } from 'react';

/**
 * HeroDeskOverlay renders curated tabletop items over the lower portion of the hero:
 * - Left: a partially visible sleek laptop and a small textured sketchbook.
 * - Middle: clear, highlighting the natural wooden grain texture.
 * - Right: a warm ceramic coffee mug with soft steam, placed comfortably away from the character's arms.
 * - Lighting: warm reddish/amber ambient reflection matching #460607.
 * - Animation: gentle shimmering light ray gliding across the wood grain and subtle floating design doodles.
 */
export function HeroDeskOverlay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[26vh] min-h-[170px] max-h-[250px] w-full select-none overflow-hidden transition-opacity duration-1000 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Subtle reddish/amber ambient lighting reflection on the wooden surface */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#460607]/40 via-[#e8453c]/10 to-transparent mix-blend-color-dodge"
        aria-hidden="true"
      />

      {/* 2. Gentle shimmering light ray animation gliding across the desk surface */}
      <div className="desk-light-shimmer absolute inset-0" aria-hidden="true" />

      {/* 3. Tabletop Scene Layout */}
      <div className="relative mx-auto flex h-full w-full max-w-[1500px] items-end justify-between px-4 sm:px-8 md:px-12 lg:px-16 pb-2 sm:pb-4">
        
        {/* === LEFT: Partially visible modern laptop + small sketchbook === */}
        <div className="relative flex items-end gap-3 sm:gap-5 pb-1">
          {/* Partially visible sleek aluminum laptop */}
          <div className="relative -ml-6 sm:-ml-2 transform -rotate-[5deg] transition-transform duration-300 hover:rotate-[-4deg]">
            <svg
              className="w-[140px] sm:w-[190px] md:w-[240px] drop-shadow-[0_12px_24px_rgba(30,3,4,0.7)]"
              viewBox="0 0 280 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="laptopLid" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#2c2d33" />
                  <stop offset="60%" stop-color="#1f2025" />
                  <stop offset="100%" stop-color="#141518" />
                </linearGradient>
                <linearGradient id="laptopGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#e8453c" stop-opacity="0.35" />
                  <stop offset="100%" stop-color="#460607" stop-opacity="0.1" />
                </linearGradient>
                <linearGradient id="screenGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15" />
                  <stop offset="40%" stop-color="#ffffff" stop-opacity="0.03" />
                  <stop offset="100%" stop-color="transparent" />
                </linearGradient>
              </defs>

              {/* Laptop Screen / Open Lid */}
              <path
                d="M30 18 L240 8 C246 8, 250 12, 250 18 L244 114 L24 122 L24 24 C24 20, 27 18, 30 18 Z"
                fill="url(#laptopLid)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              />
              {/* Inner Screen Display with soft IDE/Figma design glow */}
              <path
                d="M36 24 L236 15 L231 108 L31 116 Z"
                fill="#0d0e12"
              />
              <path
                d="M36 24 L236 15 L231 108 L31 116 Z"
                fill="url(#laptopGlow)"
              />
              {/* Screen reflection glare */}
              <path
                d="M36 24 L140 19 L110 112 L31 116 Z"
                fill="url(#screenGloss)"
              />
              {/* Code / UI layout lines on screen */}
              <rect x="46" y="36" width="45" height="4" rx="2" fill="rgba(255,255,255,0.4)" transform="rotate(-2 46 36)" />
              <rect x="47" y="46" width="70" height="3" rx="1.5" fill="#f5e211" fillOpacity="0.75" transform="rotate(-2 47 46)" />
              <rect x="48" y="55" width="55" height="3" rx="1.5" fill="#e8453c" fillOpacity="0.8" transform="rotate(-2 48 55)" />
              <rect x="49" y="64" width="80" height="3" rx="1.5" fill="#2ba0ff" fillOpacity="0.75" transform="rotate(-2 49 64)" />
              <rect x="50" y="73" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" transform="rotate(-2 50 73)" />

              {/* Lower Laptop Base / Keyboard deck */}
              <path
                d="M10 122 L254 112 C262 112, 268 116, 265 122 L248 142 C246 145, 240 147, 234 147 L6 147 C1 147, -2 143, 0 138 Z"
                fill="#22232a"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.2"
              />
              {/* Keyboard bevel */}
              <path
                d="M32 124 L234 116 L224 135 L26 138 Z"
                fill="#16171c"
              />
              {/* Trackpad */}
              <path
                d="M95 138 L160 136 L158 145 L93 145 Z"
                fill="#2b2d35"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.8"
              />
            </svg>
          </div>

          {/* Small textured design sketchbook with pen */}
          <div className="relative -ml-3 sm:ml-0 mb-1 transform rotate-[8deg]">
            <svg
              className="w-[85px] sm:w-[115px] md:w-[135px] drop-shadow-[0_8px_16px_rgba(20,2,3,0.65)]"
              viewBox="0 0 160 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#fff8eb" />
                  <stop offset="100%" stop-color="#eddac0" />
                </linearGradient>
                <linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#460607" />
                  <stop offset="50%" stop-color="#8a1418" />
                  <stop offset="100%" stop-color="#460607" />
                </linearGradient>
              </defs>

              {/* Book shadow & thick bottom edge */}
              <rect x="12" y="16" width="138" height="88" rx="8" fill="#1b0e0f" />
              <rect x="8" y="12" width="140" height="88" rx="8" fill="#d9c5ab" />
              {/* Open page */}
              <rect x="6" y="8" width="140" height="88" rx="8" fill="url(#bookCover)" stroke="#cbb293" strokeWidth="1.2" />

              {/* Wire binding rings */}
              {[20, 34, 48, 62, 76, 90].map((y, i) => (
                <g key={i}>
                  <ellipse cx="6" cy={y} rx="3" ry="5" fill="#333" stroke="#888" strokeWidth="0.8" />
                  <circle cx="12" cy={y} r="2" fill="#2d1517" />
                </g>
              ))}

              {/* Hand-drawn wireframe sketches inside */}
              <rect x="24" y="22" width="46" height="30" rx="3" fill="none" stroke="#e8453c" strokeWidth="1.2" strokeDasharray="2 2" />
              <line x1="28" y1="30" x2="58" y2="30" stroke="#7a1417" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="28" y1="36" x2="64" y2="36" stroke="#7a1417" strokeWidth="1" strokeLinecap="round" />
              <line x1="28" y1="42" x2="48" y2="42" stroke="#7a1417" strokeWidth="1" strokeLinecap="round" />

              {/* Little heart / star doodle */}
              <path d="M100 28 Q106 20 112 28 Q118 20 124 28 Q124 38 112 48 Q100 38 100 28 Z" fill="none" stroke="#e8453c" strokeWidth="1.4" />
              <circle cx="112" cy="72" r="14" fill="none" stroke="#f5e211" strokeWidth="1.2" />
              <path d="M104 72 L120 72 M112 64 L112 80" stroke="#f5e211" strokeWidth="1.2" />

              {/* Resting fountain / drafting pen */}
              <g transform="translate(48, 48) rotate(-22)">
                <rect x="0" y="2" width="76" height="6" rx="3" fill="url(#penBody)" stroke="#f5e211" strokeWidth="0.7" />
                <path d="M76 3 L86 5 L76 7 Z" fill="#d4af37" stroke="#997b1e" strokeWidth="0.6" />
                <rect x="10" y="0" width="8" height="10" rx="2" fill="#d4af37" />
              </g>
            </svg>
          </div>
        </div>

        {/* === MIDDLE: Mostly empty so the rich wooden desk texture shines === */}
        <div className="relative flex-1 flex justify-center items-center h-full px-4">
          {/* Subtle floating design spark / doodle */}
          <div className="floating-doodle pointer-events-none opacity-40 hover:opacity-80 transition-opacity">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
              <path
                d="M21 4L23.5 15.5L35 18L23.5 20.5L21 32L18.5 20.5L7 18L18.5 15.5Z"
                fill="#f5e211"
                fillOpacity="0.45"
              />
              <circle cx="34" cy="10" r="2" fill="#e8453c" fillOpacity="0.6" />
              <circle cx="8" cy="28" r="1.5" fill="#fff" fillOpacity="0.5" />
            </svg>
          </div>
        </div>

        {/* === RIGHT: Small ceramic coffee mug positioned away from her arms === */}
        <div className="relative pb-2 pr-2 sm:pr-6 md:pr-10 lg:pr-14">
          <div className="group relative transform rotate-[-4deg] transition-transform duration-300 hover:scale-105">
            {/* Animated Coffee Steam */}
            <div className="steam-wrap absolute -top-10 left-4 pointer-events-none" aria-hidden="true">
              <svg width="34" height="42" viewBox="0 0 34 42" fill="none">
                <path
                  className="steam-drift path-1"
                  d="M10 38 Q 6 26, 14 16 T 10 4"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  className="steam-drift path-2"
                  d="M20 40 Q 25 28, 17 18 T 22 6"
                  stroke="rgba(245, 226, 17, 0.35)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Ceramic Coffee Mug */}
            <svg
              className="w-[52px] sm:w-[68px] md:w-[78px] drop-shadow-[0_10px_20px_rgba(30,2,4,0.7)]"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="mugGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ede3d5" />
                  <stop offset="35%" stop-color="#fffbf5" />
                  <stop offset="80%" stop-color="#e0d4c1" />
                  <stop offset="100%" stop-color="#bda991" />
                </linearGradient>
                <linearGradient id="coffeeSurface" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#2d150b" />
                  <stop offset="60%" stop-color="#4a2614" />
                  <stop offset="100%" stop-color="#69371c" />
                </linearGradient>
                <linearGradient id="deskWoodWarmth" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#e8453c" stop-opacity="0.3" />
                  <stop offset="100%" stop-color="transparent" />
                </linearGradient>
              </defs>

              {/* Mug Drop Shadow on Table Wood */}
              <ellipse cx="44" cy="80" rx="30" ry="8" fill="#180709" fillOpacity="0.85" />
              <ellipse cx="44" cy="80" rx="22" ry="5" fill="#460607" fillOpacity="0.5" />

              {/* Handle */}
              <path
                d="M62 26 C78 26, 84 38, 82 52 C80 64, 72 70, 60 68"
                fill="none"
                stroke="url(#mugGradient)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M62 28 C74 28, 79 38, 77 50 C75 60, 69 66, 60 65"
                fill="none"
                stroke="#d1c0a8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Mug Body */}
              <path
                d="M18 22 C18 18, 64 18, 64 22 L60 74 C59 78, 23 78, 22 74 Z"
                fill="url(#mugGradient)"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
              />
              
              {/* Ambient Reddish Reflection on Lower Mug Contour */}
              <path
                d="M20 54 L62 54 L60 74 C59 78, 23 78, 22 74 Z"
                fill="url(#deskWoodWarmth)"
              />

              {/* Decorative minimalist graphic emblem on mug (a little red heart / monogram) */}
              <circle cx="41" cy="48" r="9" fill="none" stroke="#e8453c" strokeWidth="1.2" strokeDasharray="2 2" />
              <path d="M37 48 Q 41 43 45 48 Q 45 53 41 56 Q 37 53 37 48 Z" fill="#e8453c" />

              {/* Mug Rim & Coffee Liquid */}
              <ellipse cx="41" cy="22" rx="23" ry="7" fill="#dfd2be" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
              <ellipse cx="41" cy="23" rx="20" ry="5.5" fill="url(#coffeeSurface)" />
              {/* Latte art / crema highlight */}
              <ellipse cx="38" cy="23" rx="7" ry="2.2" fill="#ab7b57" fillOpacity="0.75" />
              <circle cx="36" cy="22.5" r="1.5" fill="#fffdfa" fillOpacity="0.6" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
