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

type ClusterId = 'design' | 'build' | 'create' | 'lead';

interface ToolItem {
  id: string;
  name: string;
  tooltip: string;
  cluster: ClusterId | ClusterId[];
  icon: ReactNode;
}

const TOOLS: ToolItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    tooltip: 'Figma',
    cluster: 'design',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#1e1e1e] border border-white/10 shadow-lg">
        <svg viewBox="0 0 38 57" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
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
    id: 'google-stitch',
    name: 'Google Stitch',
    tooltip: 'Google Stitch (AI UI Design)',
    cluster: 'design',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#171922] border border-[#4285F4]/30 shadow-lg" title="Google Stitch">
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="2.5 2" />
          <circle cx="6" cy="6" r="1.5" fill="#4285F4" />
          <circle cx="18" cy="6" r="1.5" fill="#EA4335" />
          <circle cx="18" cy="18" r="1.5" fill="#FBBC05" />
          <circle cx="6" cy="18" r="1.5" fill="#34A853" />
          <path d="M12 7l1.5 3.5L17 12l-3.5 1.5L12 17l-1.5-3.5L7 12l3.5-1.5L12 7Z" fill="url(#stitch-gradient)" />
          <defs>
            <linearGradient id="stitch-gradient" x1="7" y1="7" x2="17" y2="17" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4285F4" />
              <stop offset="0.33" stopColor="#EA4335" />
              <stop offset="0.66" stopColor="#FBBC05" />
              <stop offset="1" stopColor="#34A853" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    id: 'claude',
    name: 'Claude',
    tooltip: 'Claude (Design & Code)',
    cluster: ['design', 'build'],
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#1e1715] border border-[#d97757]/35 shadow-lg" title="Claude (Design & Code)">
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#D97757">
          <path d="M4.714 15.955c1.379 0 2.498 1.119 2.498 2.498s-1.119 2.497-2.498 2.497-2.497-1.118-2.497-2.497 1.118-2.498 2.497-2.498zm14.571-11.91c1.379 0 2.498 1.118 2.498 2.497s-1.119 2.498-2.498 2.498-2.497-1.119-2.497-2.498 1.118-2.497 2.497-2.497zm-3.864 5.387a1.05 1.05 0 0 1 .35 1.305l-5.143 8.904a1.05 1.05 0 0 1-1.304.35 1.05 1.05 0 0 1-.35-1.305l5.143-8.904a1.05 1.05 0 0 1 1.304-.35zm-9.988 1.489a1.05 1.05 0 0 1 1.304.349l5.143 8.905a1.05 1.05 0 0 1-.35 1.304 1.05 1.05 0 0 1-1.304-.35L5.083 12.23a1.05 1.05 0 0 1 .35-1.304zm11.582 1.534c1.378 0 2.497 1.119 2.497 2.498s-1.119 2.497-2.497 2.497-2.498-1.118-2.498-2.497 1.12-2.498 2.498-2.498z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'framer',
    name: 'Framer',
    tooltip: 'Framer',
    cluster: 'build',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-black border border-white/20 shadow-lg">
        <span className="font-semibold text-[18px] sm:text-[20px] text-white font-sans">Fr</span>
      </div>
    ),
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    tooltip: 'Photoshop',
    cluster: 'create',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#001e36] border border-[#00c8ff]/30 shadow-lg">
        <span className="font-bold text-[18px] sm:text-[20px] tracking-tight text-[#00c8ff] font-sans">Ps</span>
      </div>
    ),
  },
  {
    id: 'canva',
    name: 'Canva',
    tooltip: 'Canva',
    cluster: 'create',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00c4cc] to-[#0072b2] border border-white/20 shadow-lg">
        <span className="font-serif italic font-bold text-[19px] sm:text-[22px] tracking-tighter text-white">Cv</span>
      </div>
    ),
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tooltip: 'ChatGPT',
    cluster: 'create',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#0c1a16] border border-[#10a37f]/35 shadow-lg" title="ChatGPT">
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#10a37f">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.98 4.182a5.985 5.985 0 0 0-3.997 2.9 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .511 4.91 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.762-4.204 5.985 5.985 0 0 0 3.998-2.9 6.046 6.046 0 0 0-.738-7.075zM13.26 22.8a4.47 4.47 0 0 1-3.073-.996l.142-.08 4.775-2.755a.794.794 0 0 0 .392-.68v-6.725l2.017 1.167a.08.08 0 0 1 .038.052v5.572c-.005 2.476-2.012 4.483-4.487 4.434zm-9.648-4.12a4.466 4.466 0 0 1-.534-3.01l.142.085 4.78 2.755a.77.77 0 0 0 .779 0l5.836-3.362v2.328a.804.804 0 0 1-.33.614l-4.837 2.789c-2.148 1.237-4.89.501-6.132-1.644zm2.175-12.552a4.478 4.478 0 0 1 2.362-1.97v5.667a.766.766 0 0 0 .387.676l5.808 3.348-2.017 1.167a.757.757 0 0 1-.709 0L4.359 13.978c-2.144-1.243-2.878-3.983-1.644-6.126zm16.566 3.85l-5.825-3.381 2.017-1.167a.757.757 0 0 1 .709 0l4.827 2.789a4.486 4.486 0 0 1-.676 8.09v-5.667a.79.79 0 0 0-.406-.666zm2.008-3.02l-.142-.085-4.77-2.779a.775.775 0 0 0-.784 0l-4.774 2.755v-2.328a.66.66 0 0 1 .283-.614l4.828-2.783a4.492 4.492 0 0 1 6.672 4.652zm-15.66 4.968l-2.017-1.162a.804.804 0 0 1-.379-.567V6.065a4.492 4.492 0 0 1 7.365-3.447l-.141.08-4.775 2.754a.794.794 0 0 0-.392.68zm1.096-2.362l2.597-1.496 2.602 1.496v2.993l-2.592 1.497-2.603-1.497z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    tooltip: 'Google Analytics',
    cluster: 'lead',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#1f170b] border border-[#f9ab00]/30 shadow-lg" title="Google Analytics">
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#F9AB00">
          <path d="M22.074 24H1.895C.852 24 0 23.147 0 22.104v-4.419c0-1.043.852-1.896 1.895-1.896H7.58V9.474c0-1.042.852-1.894 1.894-1.894h6.331V1.925C15.805.87 16.674 0 17.729 0h4.346C23.13 0 24 .87 24 1.926v20.148C24 23.13 23.13 24 22.074 24z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'ms-suite',
    name: 'MS Suite',
    tooltip: 'MS Suite (Office / 365)',
    cluster: 'lead',
    icon: (
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#1a1b1f] border border-white/15 shadow-lg" title="MS Suite (Office / 365)">
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-5 sm:h-5">
          <rect x="2.5" y="2.5" width="8.8" height="8.8" fill="#F25022" rx="1.2" />
          <rect x="12.7" y="2.5" width="8.8" height="8.8" fill="#7FBA00" rx="1.2" />
          <rect x="2.5" y="12.7" width="8.8" height="8.8" fill="#00A4EF" rx="1.2" />
          <rect x="12.7" y="12.7" width="8.8" height="8.8" fill="#FFB900" rx="1.2" />
        </svg>
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

function Wave(): ReactNode {
  return (
    <svg className="s-wave flip" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 0v44c180 42 330 40 520 6s420-62 640-14c110 24 200 40 280 34V0z" fill="#f5f1e4" />
    </svg>
  );
}

export function SkillsSection() {
  const [activeCluster, setActiveCluster] = useState<ClusterId | ClusterId[] | null>(null);

  const isClusterActive = (id: ClusterId) => {
    if (!activeCluster) return false;
    if (Array.isArray(activeCluster)) return activeCluster.includes(id);
    return activeCluster === id;
  };

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

        {/* ==========================================================
            SKILLS CONSTELLATION MOCKUP (4 Orbital Loops + Central Hub)
           ========================================================== */}
        <div className="skills-constellation mt-8 relative" data-reveal>
          {/* DESKTOP CONSTELLATION CANVAS */}
          <div className="hidden md:block relative w-full h-[550px] select-none">
            {/* SVG ORBITAL LOOPS */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 550"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central hub subtle glow */}
              <circle cx="500" cy="270" r="110" fill="url(#central-glow)" />

              {/* Loop 1: Top-Left (Design) */}
              <path
                d="M 500 270 C 440 230, 270 120, 210 120 C 145 120, 110 180, 150 250 C 190 310, 420 280, 500 270"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeOpacity={isClusterActive('design') ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Loop 2: Top-Right (Build) */}
              <path
                d="M 500 270 C 560 230, 730 120, 790 120 C 855 120, 890 180, 850 250 C 810 310, 580 280, 500 270"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeOpacity={isClusterActive('build') ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Loop 3: Bottom-Left (Create) */}
              <path
                d="M 500 270 C 440 310, 240 360, 180 390 C 115 425, 125 480, 185 470 C 255 460, 420 320, 500 270"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeOpacity={isClusterActive('create') ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Loop 4: Bottom-Right (Lead) */}
              <path
                d="M 500 270 C 560 310, 760 360, 820 390 C 885 425, 875 480, 815 470 C 745 460, 580 320, 500 270"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeOpacity={isClusterActive('lead') ? '0.9' : '0.4'}
                className="transition-opacity duration-300"
              />

              {/* Background Stars */}
              <g opacity="0.6">
                <path d="M 490 80 Q 490 90 480 90 Q 490 90 490 100 Q 490 90 500 90 Q 490 90 490 80 Z" fill="#ffd54f" />
                <path d="M 640 190 Q 640 196 634 196 Q 640 196 640 202 Q 640 196 646 196 Q 640 196 640 190 Z" fill="#ffd54f" />
                <path d="M 350 310 Q 350 317 343 317 Q 350 317 350 324 Q 350 317 357 317 Q 350 317 350 310 Z" fill="#ffd54f" />
                <path d="M 630 320 Q 630 326 624 326 Q 630 326 630 332 Q 630 326 636 326 Q 630 326 630 320 Z" fill="#ffd54f" />
              </g>

              {/* Gradients */}
              <defs>
                <radialGradient id="central-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            {/* CENTRAL HUB: "What I Do" */}
            <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[190px] h-[190px] rounded-full border border-[#d4af37] bg-[#1a0204] text-center shadow-[0_0_35px_rgba(212,175,55,0.35)] z-10 transition-transform duration-300 hover:scale-105">
              <h3
                className="text-[34px] font-normal leading-tight text-[#f8ecd0]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What<br />I Do
              </h3>
              <p className="mt-1.5 max-w-[130px] text-[12px] leading-snug text-[#cbb8a3]">
                Skills that come together to create impact.
              </p>
            </div>

            {/* 1. TOP-LEFT: Design */}
            <div
              className={`absolute left-[13%] top-[8%] flex items-start gap-4 transition-transform duration-300 ${
                isClusterActive('design') ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCluster('design')}
              onMouseLeave={() => setActiveCluster(null)}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300"
                style={{
                  backgroundColor: '#ff4d42',
                  boxShadow: '0 0 25px rgba(255, 77, 66, 0.75)',
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

            {/* 2. TOP-RIGHT: Build */}
            <div
              className={`absolute right-[10%] top-[8%] flex items-start gap-4 transition-transform duration-300 ${
                isClusterActive('build') ? 'scale-105' : ''
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

            {/* 3. BOTTOM-LEFT: Create */}
            <div
              className={`absolute left-[5%] bottom-[18%] flex items-start gap-4 transition-transform duration-300 ${
                isClusterActive('create') ? 'scale-105' : ''
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

            {/* 4. BOTTOM-RIGHT: Lead */}
            <div
              className={`absolute right-[7%] bottom-[18%] flex items-start gap-4 transition-transform duration-300 ${
                isClusterActive('lead') ? 'scale-105' : ''
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
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-full max-w-[760px] px-4">
              <div className="flex items-center gap-3 select-none mb-1.5">
                <span className="h-[1px] w-12 bg-[#d4af37]/40" />
                <span className="text-[13px] font-medium tracking-wide text-[#e2b868]">
                  Tools I Use
                </span>
                <span className="h-[1px] w-12 bg-[#d4af37]/40" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 rounded-2xl border border-[#d4af37]/25 bg-black/55 px-4 py-2 backdrop-blur-md shadow-2xl">
                {TOOLS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="group relative transition-transform duration-200 hover:-translate-y-1 hover:scale-110 focus-visible:outline-none"
                    onMouseEnter={() => setActiveCluster(t.cluster)}
                    onMouseLeave={() => setActiveCluster(null)}
                    aria-label={`Tool: ${t.tooltip}`}
                  >
                    {t.icon}
                    <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rounded bg-black/95 border border-white/10 px-2 py-0.5 text-[10.5px] font-medium text-[#f8ecd0] whitespace-nowrap opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 z-30">
                      {t.tooltip}
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
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 rounded-2xl border border-[#d4af37]/25 bg-black/45 p-3 backdrop-blur-md max-w-[360px]">
                {TOOLS.map((t) => (
                  <div key={t.id} className="group relative transition-transform active:scale-95" title={t.tooltip}>
                    {t.icon}
                    <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 rounded bg-black/95 px-1.5 py-0.5 text-[9px] text-[#f8ecd0] whitespace-nowrap opacity-0 group-hover:opacity-100 z-30">
                      {t.name}
                    </span>
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
