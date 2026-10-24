import type { CSSProperties } from 'react';

const d = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties;

export function WebsiteIllustration() {
  return (
    <svg className="j-art" viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect x="20" y="24" width="320" height="222" rx="14" fill="#fffdf6" stroke="#460607" strokeWidth="2.5" />
      <path d="M20 52h320" stroke="#460607" strokeWidth="2.5" />
      <circle cx="40" cy="38" r="5" fill="#e8453c" />
      <circle cx="56" cy="38" r="5" fill="#f5e211" stroke="#460607" strokeWidth="1" />
      <circle cx="72" cy="38" r="5" fill="#8ed462" />
      <rect x="100" y="31" width="150" height="14" rx="7" fill="#f5f1e4" stroke="#460607" strokeWidth="1.5" />

      <g className="w-sketch" fill="none" stroke="#a3a69e" strokeWidth="1.8" strokeDasharray="5 5" strokeLinecap="round">
        <rect x="36" y="62" width="288" height="20" rx="3" />
        <rect x="36" y="92" width="176" height="92" rx="3" />
        <path d="M36 92l176 92M212 92L36 184" />
        <path d="M228 100h92M228 116h74M228 132h84" />
        <rect x="228" y="152" width="66" height="26" rx="3" />
        <rect x="36" y="196" width="88" height="38" rx="3" />
        <rect x="136" y="196" width="88" height="38" rx="3" />
        <rect x="236" y="196" width="88" height="38" rx="3" />
      </g>

      <g className="w-final">
        <rect className="fin" style={d(1.2)} x="36" y="62" width="288" height="20" rx="10" fill="#460607" />
        <circle className="fin-pop" style={d(1.5)} cx="52" cy="72" r="4.5" fill="#f5e211" />
        <rect className="fin" style={d(1.6)} x="236" y="68" width="30" height="8" rx="4" fill="#f5f1e4" />
        <rect className="fin" style={d(1.7)} x="274" y="68" width="38" height="8" rx="4" fill="#f5f1e4" />
        <rect className="fin" style={d(1.4)} x="36" y="92" width="176" height="92" rx="12" fill="#2ba0ff" />
        <circle className="fin-pop" style={d(1.8)} cx="170" cy="124" r="17" fill="#f5e211" />
        <path className="fin-pop" style={d(1.9)} d="M36 184q38-52 80-26t96-22v48a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12z" fill="#8ed462" />
        <rect className="fin" style={d(1.7)} x="228" y="98" width="92" height="9" rx="4.5" fill="#460607" />
        <rect className="fin" style={d(1.85)} x="228" y="114" width="74" height="7" rx="3.5" fill="#a3a69e" />
        <rect className="fin" style={d(2)} x="228" y="129" width="84" height="7" rx="3.5" fill="#a3a69e" />
        <rect className="fin btn-pulse" style={d(2.1)} x="228" y="152" width="66" height="26" rx="13" fill="#e8453c" />
        <rect className="fin" style={d(2.1)} x="244" y="162" width="34" height="6" rx="3" fill="#fffdf6" />
        <rect className="fin" style={d(2.3)} x="36" y="196" width="88" height="38" rx="10" fill="#b6f23c" stroke="#460607" strokeWidth="1.5" />
        <rect className="fin" style={d(2.45)} x="136" y="196" width="88" height="38" rx="10" fill="#f5e211" stroke="#460607" strokeWidth="1.5" />
        <rect className="fin" style={d(2.6)} x="236" y="196" width="88" height="38" rx="10" fill="#fffdf6" stroke="#460607" strokeWidth="1.5" />
      </g>

      <g className="w-cursor">
        <path d="M0 0l0 20 5.5-5 4 9.5 4-1.8-4-9.2 7.6-.4z" fill="#460607" stroke="#fffdf6" strokeWidth="1.6" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function MarketingIllustration() {
  return (
    <svg className="j-art" viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <g className="m-waves" fill="none" stroke="#e8453c" strokeWidth="3.5" strokeLinecap="round">
        <path className="wave" style={d(0.3)} pathLength="1" d="M122 118q16 17 0 34" />
        <path className="wave" style={d(0.55)} pathLength="1" d="M136 104q30 31 0 62" />
        <path className="wave" style={d(0.8)} pathLength="1" d="M150 90q44 45 0 90" />
      </g>

      <g className="m-horn">
        <path d="M44 120h30l40-24v78l-40-24H44a8 8 0 0 1-8-8v-14a8 8 0 0 1 8-8z" fill="#f5e211" stroke="#460607" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M54 146l8 30h18l-6-30" fill="#e8453c" stroke="#460607" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M114 96v78" stroke="#460607" strokeWidth="2.5" />
        <circle cx="118" cy="135" r="2" fill="#460607" />
      </g>

      <g className="m-chart">
        <path d="M184 212h156M184 212V70" stroke="#460607" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M184 170h156M184 128h156" stroke="#460607" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4 5" />
        <rect className="bar" style={d(1.3)} x="198" y="176" width="26" height="36" rx="4" fill="#2ba0ff" stroke="#460607" strokeWidth="2" />
        <rect className="bar" style={d(1.5)} x="232" y="150" width="26" height="62" rx="4" fill="#8ed462" stroke="#460607" strokeWidth="2" />
        <rect className="bar" style={d(1.7)} x="266" y="120" width="26" height="92" rx="4" fill="#b6f23c" stroke="#460607" strokeWidth="2" />
        <rect className="bar" style={d(1.9)} x="300" y="84" width="26" height="128" rx="4" fill="#e8453c" stroke="#460607" strokeWidth="2" />
        <path className="trend" style={d(2.1)} pathLength="1" d="M200 150q30-4 46-34t52-30 42-32" fill="none" stroke="#460607" strokeWidth="3" strokeLinecap="round" strokeDasharray="1" />
        <path className="trend-head" style={d(2.7)} d="M326 58l-17 1m17-1l-4 16" fill="none" stroke="#460607" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g className="m-dots" fill="#f5e211" stroke="#460607" strokeWidth="1.6">
        <circle className="dot" style={d(2.3)} cx="214" cy="164" r="6" />
        <circle className="dot" style={d(2.45)} cx="246" cy="138" r="6" />
        <circle className="dot" style={d(2.6)} cx="280" cy="108" r="6" />
        <circle className="dot" style={d(2.75)} cx="314" cy="72" r="6" />
      </g>
      <path className="spark" d="M70 70l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#e8453c" />
      <path className="spark s2" d="M150 40l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#460607" />
    </svg>
  );
}

const ROWS = [
  { y: 52, w: 112, tick: '#8ed462' },
  { y: 90, w: 138, tick: '#2ba0ff' },
  { y: 128, w: 98, tick: '#8ed462' },
  { y: 166, w: 124, tick: '#2ba0ff' },
];

export function ManagementIllustration() {
  return (
    <svg className="j-art" viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <path d="M14 238h332" stroke="#460607" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="40" y="18" width="226" height="208" rx="14" fill="#fffdf6" stroke="#460607" strokeWidth="2.5" />
      <rect x="118" y="8" width="70" height="24" rx="8" fill="#460607" />
      <rect x="140" y="14" width="26" height="6" rx="3" fill="#f5e211" />

      {ROWS.map((row, i) => (
        <g key={row.y}>
          <rect x="62" y={row.y} width="22" height="22" rx="6" fill="#f5f1e4" stroke="#460607" strokeWidth="2.2" />
          <path className="tick" style={d(0.5 + i * 0.7)} pathLength="1" d={`M67 ${row.y + 11}l5 6 9-12`} fill="none" stroke={row.tick} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="98" y={row.y + 3} width={row.w} height="7" rx="3.5" fill="#460607" fillOpacity="0.85" />
          <rect x="98" y={row.y + 14} width={row.w * 0.62} height="5" rx="2.5" fill="#a3a69e" />
          <path className="strike" style={d(0.8 + i * 0.7)} pathLength="1" d={`M94 ${row.y + 6.5}h${row.w + 8}`} stroke="#e8453c" strokeWidth="2.6" strokeLinecap="round" />
        </g>
      ))}

      <rect x="62" y="202" width="182" height="12" rx="6" fill="#f5f1e4" stroke="#460607" strokeWidth="2" />
      <rect className="progress" style={d(0.4)} x="64" y="204" width="178" height="8" rx="4" fill="#8ed462" />

      <g className="stamp" style={d(3.5)}>
        <circle cx="298" cy="70" r="40" fill="none" stroke="#e8453c" strokeWidth="3" strokeDasharray="3 5" />
        <circle cx="298" cy="70" r="31" fill="#e8453c" fillOpacity="0.1" stroke="#e8453c" strokeWidth="2.5" />
        <text x="298" y="67" textAnchor="middle" fontSize="12" fontWeight="700" fill="#e8453c" letterSpacing="1.5">ON</text>
        <text x="298" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill="#e8453c" letterSpacing="1.5">TIME</text>
      </g>

      <g transform="translate(-10 0)">
        <path d="M278 198h44v30a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8z" fill="#2ba0ff" stroke="#460607" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M322 206h8a6 6 0 0 1 0 14h-8" fill="none" stroke="#460607" strokeWidth="2.5" />
        <path className="steam" d="M292 188q-6-8 0-14t0-12" fill="none" stroke="#460607" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
        <path className="steam s2" d="M306 190q-6-8 0-14t0-12" fill="none" stroke="#460607" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g transform="translate(14 0)">
        <path d="M326 238v-30" stroke="#460607" strokeWidth="2.5" strokeLinecap="round" />
        <path className="leaf" d="M326 214q-18-4-20-20 16 0 20 20z" fill="#8ed462" stroke="#460607" strokeWidth="2" strokeLinejoin="round" />
        <path className="leaf l2" d="M326 206q16-2 20-18-16-2-20 18z" fill="#b6f23c" stroke="#460607" strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** Wisflux: a screen being tested, with numbered usability pins and a magnifier. */
export function TestingIllustration() {
  return (
    <svg className="j-art" viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect x="20" y="24" width="320" height="222" rx="14" fill="#fffdf6" stroke="#460607" strokeWidth="2.5" />
      <path d="M20 52h320" stroke="#460607" strokeWidth="2.5" />
      <circle cx="40" cy="38" r="5" fill="#e8453c" />
      <circle cx="56" cy="38" r="5" fill="#f5e211" stroke="#460607" strokeWidth="1" />
      <circle cx="72" cy="38" r="5" fill="#2ba0ff" />
      <rect x="100" y="31" width="150" height="14" rx="7" fill="#f5f1e4" stroke="#460607" strokeWidth="1.5" />

      <rect className="fin" style={d(0.4)} x="36" y="64" width="288" height="18" rx="9" fill="#460607" />
      <rect className="fin" style={d(0.6)} x="36" y="94" width="150" height="80" rx="10" fill="#2ba0ff" />
      <rect className="fin" style={d(0.8)} x="200" y="98" width="112" height="9" rx="4.5" fill="#460607" />
      <rect className="fin" style={d(0.9)} x="200" y="114" width="88" height="7" rx="3.5" fill="#a3a69e" />
      <rect className="fin" style={d(1)} x="200" y="128" width="100" height="7" rx="3.5" fill="#a3a69e" />
      <rect className="fin" style={d(1.1)} x="200" y="148" width="62" height="24" rx="12" fill="#e8453c" />

      <g fontSize="11" fontWeight="700" textAnchor="middle" fill="#fffdf6">
        <circle className="fin-pop" style={d(1.5)} cx="164" cy="104" r="11" fill="#e8453c" stroke="#460607" strokeWidth="1.8" />
        <text x="164" y="108">1</text>
        <circle className="fin-pop" style={d(1.9)} cx="276" cy="160" r="11" fill="#e8453c" stroke="#460607" strokeWidth="1.8" />
        <text x="276" y="164">2</text>
        <circle className="fin-pop" style={d(2.3)} cx="96" cy="74" r="11" fill="#e8453c" stroke="#460607" strokeWidth="1.8" />
        <text x="96" y="78">3</text>
      </g>

      <g>
        <rect x="36" y="188" width="288" height="44" rx="10" fill="#f5f1e4" stroke="#460607" strokeWidth="1.8" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={52 + i * 92} y="200" width="20" height="20" rx="6" fill="#fffdf6" stroke="#460607" strokeWidth="2" />
            <path className="tick" style={d(2.6 + i * 0.5)} pathLength="1" d={`M${56 + i * 92} 210l5 6 9-11`} fill="none" stroke="#8ed462" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x={80 + i * 92} y="206" width="52" height="8" rx="4" fill="#460607" fillOpacity="0.7" />
          </g>
        ))}
      </g>

      <g className="lens">
        <circle cx="236" cy="120" r="34" fill="#fffdf6" fillOpacity="0.4" stroke="#460607" strokeWidth="4" />
        <path d="M260 146l30 30" stroke="#460607" strokeWidth="9" strokeLinecap="round" />
        <path d="M222 106q8-8 18-6" fill="none" stroke="#fffdf6" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Aadithya: the security-systems site, in its navy and gold, with a live camera feed. */
export function CameraSiteIllustration() {
  return (
    <svg className="j-art" viewBox="0 0 360 270" aria-hidden="true" focusable="false">
      <rect x="20" y="24" width="320" height="222" rx="14" fill="#f7f2e6" stroke="#460607" strokeWidth="2.5" />
      <path d="M20 52h320" stroke="#460607" strokeWidth="2.5" />
      <circle cx="40" cy="38" r="5" fill="#e8453c" />
      <circle cx="56" cy="38" r="5" fill="#f5e211" stroke="#460607" strokeWidth="1" />
      <circle cx="72" cy="38" r="5" fill="#2ba0ff" />
      <rect x="100" y="31" width="150" height="14" rx="7" fill="#fffdf6" stroke="#460607" strokeWidth="1.5" />

      <rect className="fin" style={d(0.4)} x="34" y="62" width="292" height="104" rx="10" fill="#0f2347" />
      <rect className="fin" style={d(0.7)} x="50" y="84" width="118" height="12" rx="4" fill="#fffdf6" />
      <rect className="fin" style={d(0.85)} x="50" y="102" width="92" height="12" rx="4" fill="#fffdf6" />
      <rect className="fin" style={d(1)} x="50" y="120" width="106" height="12" rx="4" fill="#c9a45c" />
      <rect className="fin" style={d(1.2)} x="50" y="142" width="56" height="16" rx="8" fill="#c9a45c" />

      <g className="fin-pop" style={d(1.4)}>
        <path d="M222 98l62-14 8 24-62 14z" fill="#9cc9ee" stroke="#460607" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="228" cy="116" r="15" fill="#fffdf6" stroke="#460607" strokeWidth="2.2" />
        <circle cx="228" cy="116" r="7" fill="#0f2347" />
        <path d="M268 106l22 30M290 136h-12" stroke="#460607" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="fin-pop" style={d(2)}>
        <circle cx="304" cy="76" r="4.5" fill="#e8453c" />
        <text x="296" y="70" fontSize="8" fontWeight="700" textAnchor="end" fill="#9cc9ee" letterSpacing="1">LIVE</text>
      </g>

      {[0, 1, 2].map((i) => (
        <rect key={i} className="fin" style={d(1.6 + i * 0.2)} x={34 + i * 100} y="178" width="92" height="56" rx="10" fill={['#9cc9ee', '#fffdf6', '#c9a45c'][i]} stroke="#460607" strokeWidth="1.6" />
      ))}
      <g fill="#460607" fillOpacity="0.55">
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={46 + i * 100} y="192" width="48" height="7" rx="3.5" />
            <rect x={46 + i * 100} y="206" width="66" height="6" rx="3" />
          </g>
        ))}
      </g>
    </svg>
  );
}
