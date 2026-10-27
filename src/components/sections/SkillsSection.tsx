import { useState } from 'react';
import type { ReactNode } from 'react';
import './skills.css';

interface SkillCluster {
  id: 'design' | 'build' | 'create' | 'lead';
  title: string;
  color: string;
  glow: string;
  icon: ReactNode;
  items: string[];
}

const CLUSTERS: SkillCluster[] = [
  {
    id: 'design',
    title: 'Design',
    color: '#ff4d42',
    glow: 'rgba(232, 69, 60, 0.65)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 10l4-4 3 3-4 4" />
        <path d="M3 21l6.5-6.5" />
        <path d="M14 10L7.5 16.5 3 21l4.5-4.5L14 10Z" />
        <path d="M14 10l3 3" />
      </svg>
    ),
    items: ['UI/UX', 'Wireframing', 'Visual Design', 'Prototyping', 'Information Architecture'],
  },
  {
    id: 'build',
    title: 'Build',
    color: '#f5a623',
    glow: 'rgba(245, 166, 35, 0.65)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    items: ['Web Design', 'Web Development', 'HTML & CSS', 'Responsive Design', 'Interactions'],
  },
  {
    id: 'create',
    title: 'Create',
    color: '#26c6da',
    glow: 'rgba(38, 198, 218, 0.65)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
    items: ['Content Creation', 'Graphic Design', 'Presentations', 'Social Media Assets'],
  },
  {
    id: 'lead',
    title: 'Lead',
    color: '#e91e63',
    glow: 'rgba(233, 30, 99, 0.65)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: ['Operations', 'Executive Support', 'Vendor Management', 'Inventory & Audits'],
  },
];

interface ToolItem {
  id: string;
  name: string;
  cluster: 'design' | 'build' | 'create';
  icon: ReactNode;
}

const TOOLS: ToolItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    cluster: 'design',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e1e1e] border border-white/10 shadow-lg">
        <svg viewBox="0 0 38 57" className="w-6 h-6" fill="none">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
          <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
        </svg>
      </div>
    ),
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    cluster: 'create',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#001e36] border border-[#00c8ff]/30 shadow-lg">
        <span className="font-bold text-[20px] tracking-tight text-[#00c8ff] font-sans">Ps</span>
      </div>
    ),
  },
  {
    id: 'canva',
    name: 'Canva',
    cluster: 'create',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00c4cc] to-[#0072b2] border border-white/20 shadow-lg">
        <span className="font-serif italic font-bold text-[22px] tracking-tighter text-white">Cv</span>
      </div>
    ),
  },
  {
    id: 'framer',
    name: 'Framer',
    cluster: 'build',
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/20 shadow-lg">
        <span className="font-semibold text-[20px] text-white font-sans">Fr</span>
      </div>
    ),
  },
];

const FACTS = [
  { title: 'Education', text: 'BCA, ICFAI University, Jaipur' },
  { title: 'Languages', text: 'English, Hindi, Tamil' },
  { title: 'Leadership', text: 'Head of the Abhivyakti cultural representation club. Girls’ football team captain. Anchor at many events.' },
  { title: 'Based', text: 'Chennai, Jaipur or remote' },
];

export function SkillsSection() {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  return (
    <section id="skills" className="s-sec s-dark sk-sec" aria-labelledby="skills-title">
      <Wave />
      <div className="s-wrap">
        <p className="s-label light" data-reveal>
          <span className="s-dot" aria-hidden="true" />
          Tools and skills
        </p>
        <h2 id="skills-title" className="s-title" data-reveal>
          The toolkit, <em>at a glance.</em>
        </h2>
        <p className="s-lead sk-lead" data-reveal>
          Four tools sit at the centre. Everything else is a skill that grows out of them.
        </p>

        {/* ========================================================
            SKILLS CONSTELLATION CONTAINER (Matching Reference Image)
            ======================================================== */}
        <div className="sk-constellation-frame relative mx-auto my-8 w-full max-w-[1020px] rounded-3xl border border-[#d4af37]/30 bg-[#250406]/95 p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Constellation Title matching reference */}
          <div className="flex items-baseline gap-2 mb-4 select-none">
            <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-white">
              4. SKILLS CONSTELLATION
            </span>
            <span
              className="text-[18px] sm:text-[21px] text-[#e8453c] font-semibold"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              (Grouped)
            </span>
          </div>

          {/* DESKTOP CONSTELLATION DIAGRAM */}
          <div className="relative hidden md:block w-full aspect-[1000/660]">
            {/* SVG Connecting Orbits, Loops & Sparkle Stars */}
            <svg
              viewBox="0 0 1000 660"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* 4-point sparkle star definition */}
                <g id="sparkle-star">
                  <path
                    d="M0 -12 C1 -3 3 -1 12 0 C3 1 1 3 0 12 C-1 3 -3 1 -12 0 C-3 -1 -1 -3 0 -12 Z"
                    fill="#e2b868"
                    opacity="0.85"
                  />
                </g>
              </defs>

              {/* Orbital Constellation Loops from Center to Satellites */}
              {/* Loop to Design (Top-Left) */}
              <path
                d="M 430 250 C 310 160 210 70 175 135 C 145 195 285 280 425 280"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.4"
                strokeDasharray="4 6"
                strokeOpacity={activeCluster === 'design' ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Loop to Build (Top-Right) */}
              <path
                d="M 570 250 C 690 160 790 70 825 135 C 855 195 715 280 575 280"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.4"
                strokeDasharray="4 6"
                strokeOpacity={activeCluster === 'build' ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Arc to Create (Bottom-Left) */}
              <path
                d="M 425 320 C 320 370 200 420 120 460"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.4"
                strokeDasharray="4 6"
                strokeOpacity={activeCluster === 'create' ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Arc to Lead (Bottom-Right) */}
              <path
                d="M 575 320 C 680 370 800 420 880 460"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.4"
                strokeDasharray="4 6"
                strokeOpacity={activeCluster === 'lead' ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Side Connecting Orbit Arcs (Design -> Create, and Build -> Lead) */}
              <path
                d="M 120 200 C 65 280 60 380 90 450"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.2"
                strokeDasharray="3 6"
                strokeOpacity="0.3"
              />
              <path
                d="M 880 200 C 935 280 940 380 910 450"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.2"
                strokeDasharray="3 6"
                strokeOpacity="0.3"
              />

              {/* Dotted Lines down to Tools dock */}
              <line
                x1="500"
                y1="388"
                x2="500"
                y2="525"
                stroke="#d4af37"
                strokeWidth="1.2"
                strokeDasharray="3 5"
                strokeOpacity="0.35"
              />

              {/* Floating Sparkle Stars */}
              <use href="#sparkle-star" x="480" y="110" transform="scale(1.05)" />
              <use href="#sparkle-star" x="635" y="275" transform="scale(0.85)" />
              <use href="#sparkle-star" x="625" y="505" transform="scale(0.75)" />
              <use href="#sparkle-star" x="340" y="475" transform="scale(0.8)" />
            </svg>

            {/* Central Hub: "What I Do" */}
            <div
              className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-full border border-[#d4af37] bg-[#1a0204] text-center shadow-[0_0_35px_rgba(212,175,55,0.25)] select-none z-10"
              style={{ width: '196px', height: '196px' }}
            >
              {/* Outer dotted orbital ring */}
              <div
                className="pointer-events-none absolute -inset-3.5 rounded-full border border-dashed border-[#d4af37]/40 animate-[spin_60s_linear_infinite]"
              />
              <h3
                className="text-[32px] font-normal leading-[1.05] tracking-tight text-[#f8ecd0]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What<br />I Do
              </h3>
              <p className="mt-2 max-w-[130px] text-[11px] leading-snug text-[#cbb8a3]">
                Skills that come together to create impact.
              </p>
            </div>

            {/* TOP-LEFT CLUSTER: Design */}
            <div
              className={`absolute left-[13%] top-[8%] flex items-start gap-4 transition-transform duration-300 ${
                activeCluster === 'design' ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCluster('design')}
              onMouseLeave={() => setActiveCluster(null)}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300"
                style={{
                  backgroundColor: '#ff4d42',
                  boxShadow: '0 0 25px rgba(232, 69, 60, 0.75)',
                }}
              >
                {CLUSTERS[0].icon}
              </div>
              <div className="flex flex-col">
                <h4
                  className="text-[23px] font-normal text-[#f8ecd0]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Design
                </h4>
                <ul className="mt-1 flex flex-col gap-1 text-[13px] text-white/90">
                  {CLUSTERS[0].items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d42]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TOP-RIGHT CLUSTER: Build */}
            <div
              className={`absolute right-[10%] top-[8%] flex items-start gap-4 transition-transform duration-300 ${
                activeCluster === 'build' ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCluster('build')}
              onMouseLeave={() => setActiveCluster(null)}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300"
                style={{
                  backgroundColor: '#f5a623',
                  boxShadow: '0 0 25px rgba(245, 166, 35, 0.75)',
                }}
              >
                {CLUSTERS[1].icon}
              </div>
              <div className="flex flex-col">
                <h4
                  className="text-[23px] font-normal text-[#f8ecd0]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Build
                </h4>
                <ul className="mt-1 flex flex-col gap-1 text-[13px] text-white/90">
                  {CLUSTERS[1].items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BOTTOM-LEFT CLUSTER: Create */}
            <div
              className={`absolute left-[5%] bottom-[18%] flex items-start gap-4 transition-transform duration-300 ${
                activeCluster === 'create' ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCluster('create')}
              onMouseLeave={() => setActiveCluster(null)}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300"
                style={{
                  backgroundColor: '#26c6da',
                  boxShadow: '0 0 25px rgba(38, 198, 218, 0.75)',
                }}
              >
                {CLUSTERS[2].icon}
              </div>
              <div className="flex flex-col">
                <h4
                  className="text-[23px] font-normal text-[#f8ecd0]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Create
                </h4>
                <ul className="mt-1 flex flex-col gap-1 text-[13px] text-white/90">
                  {CLUSTERS[2].items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#26c6da]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BOTTOM-RIGHT CLUSTER: Lead */}
            <div
              className={`absolute right-[7%] bottom-[18%] flex items-start gap-4 transition-transform duration-300 ${
                activeCluster === 'lead' ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCluster('lead')}
              onMouseLeave={() => setActiveCluster(null)}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300"
                style={{
                  backgroundColor: '#e91e63',
                  boxShadow: '0 0 25px rgba(233, 30, 99, 0.75)',
                }}
              >
                {CLUSTERS[3].icon}
              </div>
              <div className="flex flex-col">
                <h4
                  className="text-[23px] font-normal text-[#f8ecd0]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Lead
                </h4>
                <ul className="mt-1 flex flex-col gap-1 text-[13px] text-white/90">
                  {CLUSTERS[3].items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e91e63]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BOTTOM DOCK: "Tools I Use" */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="flex items-center gap-3 select-none mb-2">
                <span className="h-[1px] w-12 bg-[#d4af37]/40" />
                <span className="text-[13px] font-medium tracking-wide text-[#e2b868]">
                  Tools I Use
                </span>
                <span className="h-[1px] w-12 bg-[#d4af37]/40" />
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-[#d4af37]/25 bg-black/40 px-5 py-2.5 backdrop-blur-md shadow-xl">
                {TOOLS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="group relative transition-transform duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none"
                    onMouseEnter={() => setActiveCluster(t.cluster)}
                    onMouseLeave={() => setActiveCluster(null)}
                    aria-label={`Tool: ${t.name}`}
                  >
                    {t.icon}
                    <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 rounded bg-black/90 px-1.5 py-0.5 text-[10px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {t.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RESPONSIVE & MOBILE VIEW */}
          <div className="flex md:hidden flex-col items-center gap-6">
            {/* Center Circle on Mobile */}
            <div className="relative flex flex-col items-center justify-center rounded-full border border-[#d4af37] bg-[#1a0204] p-6 text-center shadow-[0_0_25px_rgba(212,175,55,0.25)]">
              <h3
                className="text-[28px] font-normal leading-tight text-[#f8ecd0]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What<br />I Do
              </h3>
              <p className="mt-1.5 max-w-[140px] text-[11.5px] leading-snug text-[#cbb8a3]">
                Skills that come together to create impact.
              </p>
            </div>

            {/* 4 Skill Cards Grid */}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4">
              {CLUSTERS.map((c) => (
                <div
                  key={c.id}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm"
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white shadow-md"
                    style={{
                      backgroundColor: c.color,
                      boxShadow: `0 0 16px ${c.glow}`,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h4
                      className="text-[19px] font-normal text-[#f8ecd0]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {c.title}
                    </h4>
                    <ul className="mt-1.5 flex flex-col gap-1 text-[12.5px] text-white/85">
                      {c.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Tools Tray */}
            <div className="flex flex-col items-center w-full pt-2">
              <div className="flex items-center gap-3 select-none mb-2.5">
                <span className="h-[1px] w-8 bg-[#d4af37]/40" />
                <span className="text-[12.5px] font-medium tracking-wide text-[#e2b868]">
                  Tools I Use
                </span>
                <span className="h-[1px] w-8 bg-[#d4af37]/40" />
              </div>
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-[#d4af37]/25 bg-black/40 px-4 py-2.5 backdrop-blur-md">
                {TOOLS.map((t) => (
                  <div key={t.id} className="transition-transform active:scale-95">
                    {t.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facts Row */}
        <div className="sk-facts mt-10" data-reveal>
          {FACTS.map((f) => (
            <div key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wave(): ReactNode {
  return (
    <svg className="s-wave flip" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 90V46C180 4 330 6 520 40s420 62 640 14c110-24 200-40 280-34V90z" fill="#f5f1e4" />
    </svg>
  );
}
