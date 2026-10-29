/**
 * A laptop, notepad and coffee on the empty left of her table. Drawn in the hero frame's own pixels
 * (1024 x 576) and laid over the canvas at the same place and scale, so the props stay on the table
 * at every viewport. Everything sits left of her elbow (x < 340), so she is never covered.
 */
export function DeskProps() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1024 576" fill="none" aria-hidden="true">
      <defs>
        <filter id="desk-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <linearGradient id="desk-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbefe0" />
          <stop offset="1" stopColor="#f1dcc3" />
        </linearGradient>
        <linearGradient id="desk-metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5b4642" />
          <stop offset="0.7" stopColor="#7a605a" />
          <stop offset="1" stopColor="#a07f73" />
        </linearGradient>
        <radialGradient id="desk-glow" cx="0.5" cy="0" r="0.8">
          <stop offset="0" stopColor="#ffe9d2" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffe9d2" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadows on the table */}
      <g fill="#2a0806" opacity="0.45" filter="url(#desk-soft)">
        <path d="M168 504L322 504L330 516L162 518Z" />
        <path d="M112 540L186 534L190 542L118 547Z" />
        <ellipse cx="306" cy="544" rx="19" ry="4.5" />
      </g>

      {/* Laptop: screen light spilling onto the table */}
      <path d="M180 474L312 474L340 520L150 520Z" fill="url(#desk-glow)" />

      {/* Laptop base and keyboard */}
      <path d="M183 472L309 472L323 505L169 505Z" fill="url(#desk-metal)" stroke="#2b1a17" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M169 505L323 505L322 509L170 509Z" fill="#3b2a27" />
      <path d="M190 476L302 476L310 493L182 493Z" fill="#2b1f1d" />
      <g stroke="#57443f" strokeWidth="0.8">
        <path d="M188 480.5L304 480.5" />
        <path d="M186.5 484.5L306 484.5" />
        <path d="M185 488.8L308 488.8" />
      </g>
      <path d="M228 495.5L264 495.5L266 502.5L226 502.5Z" fill="#6b5550" stroke="#3b2a27" strokeWidth="0.7" />

      {/* Laptop screen, angled a little back */}
      <path d="M186 472L306 472L302 394L190 394Z" fill="#1d1416" stroke="#2b1a17" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M191 467L301 467L297.5 399L194.5 399Z" fill="url(#desk-screen)" />
      {/* Tiny design-tool mock on the screen */}
      <path d="M194.5 399L297.5 399L297.8 405L194.2 405Z" fill="#3a1a12" />
      <circle cx="199" cy="402" r="1.2" fill="#e8453c" />
      <circle cx="203" cy="402" r="1.2" fill="#ffe28a" />
      <rect x="198" y="409" width="20" height="54" rx="1.5" fill="#ead2b8" />
      <g fill="#c9a98d">
        <rect x="200" y="412" width="16" height="3" rx="1" />
        <rect x="200" y="418" width="12" height="3" rx="1" />
        <rect x="200" y="424" width="14" height="3" rx="1" />
      </g>
      <rect x="223" y="410" width="50" height="32" rx="2.5" fill="#e8453c" />
      <path d="M229 434C236 424 242 430 248 422C254 415 261 424 267 418" stroke="#fbefe0" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="262" cy="417" r="3.5" fill="#ffe28a" />
      <rect x="223" y="446" width="30" height="4" rx="1.5" fill="#3a1a12" />
      <rect x="223" y="453" width="44" height="3" rx="1.5" fill="#c9a98d" />
      <rect x="278" y="410" width="15" height="15" rx="7.5" fill="#3a1a12" opacity="0.85" />
      <rect x="278" y="430" width="15" height="12" rx="2" fill="#ead2b8" />
      <path d="M191 467L301 467L297.5 399L194.5 399Z" fill="#fff" opacity="0.06" />
      <path d="M232 399L247 399L218 467L203 467Z" fill="#fff" opacity="0.08" />

      {/* Notepad with a pen, lying at an angle */}
      <path d="M110 507L176 502L186 537L117 543Z" fill="#f6e7d2" stroke="#4a2a20" strokeWidth="1" strokeLinejoin="round" />
      <path d="M117 543L186 537L186.5 540L117.5 546Z" fill="#cdb79c" />
      <path d="M122 506.3L126 541.8" stroke="#e8453c" strokeWidth="0.9" opacity="0.8" />
      <g stroke="#b99a80" strokeWidth="0.7">
        <path d="M121 514.5L179 510" />
        <path d="M122.5 520.5L181 516" />
        <path d="M124 526.5L182.5 522" />
        <path d="M125.5 532.5L184 528" />
      </g>
      <path d="M131 518C135 514 139 520 143 516C147 512 150 518 154 515" stroke="#3a1a12" strokeWidth="0.9" strokeLinecap="round" />
      <g fill="#3a1a12">
        <circle cx="120" cy="506.3" r="1.6" />
        <circle cx="131" cy="505.5" r="1.6" />
        <circle cx="142" cy="504.6" r="1.6" />
        <circle cx="153" cy="503.8" r="1.6" />
        <circle cx="164" cy="503" r="1.6" />
      </g>
      <path d="M140 539L192 521" stroke="#3a1a12" strokeWidth="4" strokeLinecap="round" />
      <path d="M141 538.6L190 521.7" stroke="#e8453c" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M140 539L136 540.6" stroke="#e8c79d" strokeWidth="2" strokeLinecap="round" />

      {/* Coffee mug, same one she sips in the loader */}
      <g className="desk-steam" stroke="#ffeede" strokeWidth="1.6" strokeLinecap="round" opacity="0.55">
        <path className="coffee-steam__wisp" d="M300 506C297 501 303 498 300 493C298 489 301 486 300 482" />
        <path className="coffee-steam__wisp [animation-delay:0.6s]" d="M309 505C306 500 312 497 309 492C307 488 310 485 309 481" />
      </g>
      <path d="M321 517C328 516 330 522 328.5 526C327 530 324 531 320 530.5" stroke="#3a1a12" strokeWidth="4" strokeLinecap="round" />
      <path d="M321 517C328 516 330 522 328.5 526C327 530 324 531 320 530.5" stroke="#f5e1c8" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M290 510H322L320 540C319.8 542.2 318.3 543.5 316 543.5H296C293.7 543.5 292.2 542.2 292 540L290 510Z" fill="#f5e1c8" stroke="#3a1a12" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M290.9 521H321.1L320.7 526.5H291.3Z" fill="#e8453c" />
      <path d="M294 513L295.5 539" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M316 513L315 540" stroke="#c9a98d" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="306" cy="510" rx="16" ry="3.4" fill="#f5e1c8" stroke="#3a1a12" strokeWidth="1.3" />
      <ellipse cx="306" cy="510.4" rx="12.6" ry="2.1" fill="#5a2d1a" />
    </svg>
  );
}
