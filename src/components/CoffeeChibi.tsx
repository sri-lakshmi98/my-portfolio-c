/**
 * The chibi from the hero, cropped to her upper body, sipping from a mug on a loop.
 * The stage is laid out in the cut-out's own pixels (hero-chibi.png) and scaled as one piece,
 * so the mug always lands on her mouth.
 */
export function CoffeeChibi() {
  return (
    <div className="coffee-stage" aria-hidden="true">
      <div className="coffee-stage__art">
        <img src="/hero-chibi.png" alt="" className="coffee-stage__chibi" draggable={false} />

        <div className="coffee-mug">
          <div className="coffee-steam">
            <svg viewBox="0 0 40 34" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path className="coffee-steam__wisp" d="M10 32C6 26 14 22 10 16C7 11 12 7 10 2" />
              <path className="coffee-steam__wisp [animation-delay:0.5s]" d="M20 32C16 25 24 21 20 14C17 9 22 6 20 1" />
              <path className="coffee-steam__wisp [animation-delay:1s]" d="M30 32C26 26 34 22 30 16C27 11 32 7 30 2" />
            </svg>
          </div>

          <svg className="coffee-mug__cup" viewBox="0 0 50 44" fill="none">
            {/* handle */}
            <path d="M37 13C46 12 48 19 46 24C44 29 40 31 36 30" stroke="#3a1a12" strokeWidth="5" strokeLinecap="round" />
            <path d="M37 13C46 12 48 19 46 24C44 29 40 31 36 30" stroke="#f5e1c8" strokeWidth="2.4" strokeLinecap="round" />
            {/* body */}
            <path d="M5 7H38L35.5 38C35.2 40.6 33.4 42 31 42H12C9.6 42 7.8 40.6 7.5 38L5 7Z" fill="#f5e1c8" stroke="#3a1a12" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M5.9 19H37.1L36.6 25H6.4L5.9 19Z" fill="#e8453c" />
            <path d="M10 10L11.5 36" stroke="#fff" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
            {/* rim with coffee */}
            <ellipse cx="21.5" cy="7" rx="16.5" ry="3.6" fill="#f5e1c8" stroke="#3a1a12" strokeWidth="1.8" />
            <ellipse cx="21.5" cy="7.4" rx="13" ry="2.2" fill="#5a2d1a" />
            {/* fingers wrapped round the front of the cup */}
            <g fill="#c7845c" stroke="#7d4a32" strokeWidth="0.9">
              <rect x="1" y="14" width="11" height="6" rx="3" />
              <rect x="0" y="20.5" width="12" height="6" rx="3" />
              <rect x="1" y="27" width="11" height="6" rx="3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
