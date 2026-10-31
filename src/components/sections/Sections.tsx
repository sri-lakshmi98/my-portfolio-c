import type { ReactNode } from 'react';
import { useCopy } from '../../hooks/useCopy';
import './sections.css';
import { ProjectCarousel, type ProjectItem } from './ProjectCarousel';
import {
  AADITHYA_LIVE,
  AADITHYA_SLIDES,
  ANUSATHYA_INSTAGRAM,
  ANUSATHYA_SLIDES,
  NAND_BHABHI_LIVE,
  NAND_BHABHI_SLIDES,
  NEST_SLIDES,
} from './workSlides';

export const EMAIL = 'msrilak345@gmail.com';
export const PHONE = '+91 96365 69426';
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from your portfolio')}`;
export const RESUME = '/Shri-Lakshmi-Resume.pdf';

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" focusable="false">
    <path d="M4 12L12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CopyIcon = () => (
  <svg aria-hidden="true" className="h-3 w-3 shrink-0" viewBox="0 0 12 12" fill="none" focusable="false">
    <rect x="4" y="1" width="7" height="7" rx="0.7" stroke="currentColor" />
    <rect x="1" y="4" width="7" height="7" rx="0.7" stroke="currentColor" />
  </svg>
);

export function Wave({ fill, flip }: { fill: string; flip?: boolean }) {
  return (
    <svg
      className={`s-wave ${flip ? 'flip' : ''}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 90V46C180 4 330 6 520 40s420 62 640 14c110-24 200-40 280-34V90z" fill={fill} />
    </svg>
  );
}

export function Label({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`s-label ${light ? 'light' : ''}`} data-reveal>
      <span className="s-dot" aria-hidden="true" />
      {children}
    </p>
  );
}

const SERVICES = [
  {
    title: 'Websites that sell',
    text: 'Layouts, copy and visuals built around what you sell, then taken all the way to a live page in Figma, Framer, HTML and CSS.',
    tags: ['Web design', 'Visual design', 'HTML & CSS'],
    icon: (
      <>
        <rect x="6" y="10" width="44" height="34" rx="5" />
        <path d="M6 20h44M14 15h.01M20 15h.01M14 28h16M14 35h24" />
        <path d="M40 38l8 8 3-9z" className="fill" />
      </>
    ),
  },
  {
    title: 'UI/UX and usability testing',
    text: 'I use your site or product like a first-time visitor, find where people stall, and hand back clear notes you can act on.',
    tags: ['UI testing', 'Wireframing', 'Information architecture'],
    icon: (
      <>
        <circle cx="24" cy="24" r="14" />
        <path d="M34 34l14 14" />
        <path d="M18 24l5 5 9-10" />
      </>
    ),
  },
  {
    title: 'Content, SEO and reach',
    text: 'Content strategy, SEO and promotional pieces that help the right people find you and know what to do next.',
    tags: ['SEO', 'Content strategy', 'Promotion'],
    icon: (
      <>
        <path d="M8 44V30M20 44V20M32 44V26M44 44V10" />
        <path d="M6 48h44" />
        <path d="M34 10h10v10" />
      </>
    ),
  },
  {
    title: 'Operations that keep delivery moving',
    text: 'Vendors, budgets, audits, calendars and cross-team coordination, so design work ships on time and stays on track.',
    tags: ['Vendors', 'Budgets', 'Coordination'],
    icon: (
      <>
        <rect x="8" y="8" width="40" height="40" rx="6" />
        <path d="M16 20l4 4 7-8M16 36l4 4 7-8M32 22h8M32 38h8" />
      </>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="s-sec s-dark" aria-labelledby="services-title">
      <Wave fill="#f5f1e4" flip />
      <div className="s-wrap">
        <Label light>What I can do for you</Label>
        <h2 id="services-title" className="s-title" data-reveal>
          Four things I can take <em>off your plate.</em>
        </h2>
        <p className="s-lead" data-reveal>
          Whether you are hiring for a design seat or briefing a freelance project, this is what you get from me.
        </p>
        <div className="s-grid4">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="s-service" data-reveal style={{ '--d': `${i * 0.08}s` } as React.CSSProperties}>
              <span className="s-num" aria-hidden="true">0{i + 1}</span>
              <svg className="s-icon" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
                {s.icon}
              </svg>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul aria-label={`${s.title} focus areas`}>
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'aadithya',
    kind: 'Website design & frontend development',
    name: 'Aadithya Automation & Security Systems',
    title: 'Aadithya',
    subtitle: 'Automation & Security Systems',
    cover: '/work/aadithya-hero-mobile.webp',
    coverPosition: 'top',
    text: 'A website experience designed to help potential customers explore technical products, understand their capabilities, discover the company\'s services and initiate enquiries, taken from a broad requirement through design, frontend implementation and live deployment.',
    points: [
      'Category-based product discovery with individual product detail pages',
      'Multimedia showcase with real-world footage, night vision and installation visuals',
      'Floating, icon-led mobile navigation and an interactive 3D client carousel',
    ],
    cta: 'Visit the live site',
    href: AADITHYA_LIVE,
    caseHref: '#/case-study/aadithya',
    slides: AADITHYA_SLIDES,
    tags: ['Website design', 'UI/UX design', 'Frontend', 'Vercel'],
  },
  {
    id: 'nest',
    kind: 'UX testing and guidance',
    name: 'Nest by Emmple',
    title: 'Nest by Emmple',
    subtitle: 'School operations product',
    cover: '/work/nest.webp',
    coverPosition: 'left top',
    text: 'I tested the product the way a new user would and guided the team on usability, so friction got named early and fixes had a clear direction.',
    points: [
      'Hands-on usability testing across student intake forms',
      'Guidance on how the product should behave and notifications dispatch',
      'Cut admissions intake processing from 18 to 6 minutes',
    ],
    cta: 'See the product',
    href: 'https://nest.emmple.com',
    slides: NEST_SLIDES,
    tags: ['UX testing', 'Usability', 'Heuristic Audit'],
  },
  {
    id: 'nand-bhabhi',
    kind: 'E-commerce website & custom admin dashboard',
    name: 'NANADHBABBHI',
    title: 'NANADHBABBHI',
    subtitle: 'E-commerce & admin dashboard',
    cover: '/work/nand-bhabhi-hero.webp',
    coverPosition: '72% center',
    text: 'An ethnic fashion e-commerce experience that brings together visual storytelling, product discovery and efficient store management, across a customer-facing storefront and a custom administration dashboard.',
    points: [
      'Video-led fashion discovery with product tagging and Shop the Look',
      'Admin dashboard for size-based inventory, orders, fashion videos and storefront content',
      'Configurable delivery tracking with Standard and Express previews',
    ],
    cta: 'Visit the live site',
    href: NAND_BHABHI_LIVE,
    caseHref: '#/case-study/nand-bhabhi',
    slides: NAND_BHABHI_SLIDES,
    tags: ['E-commerce UX', 'Video commerce', 'Dashboard design', 'UI/UX design'],
  },
  {
    id: 'anusathya',
    kind: 'Freelance digital marketing',
    name: 'Shree Anusathya Designers',
    title: 'Shree Anusathya',
    subtitle: 'Designers',
    cover: '/work/anusathya-dash-ig-overview.webp',
    coverPosition: 'left top',
    text: 'Building a digital presence from the ground up through 100% organic marketing across Instagram, Pinterest and Google Business Profile, with on-site shooting, creative direction and on-camera work when content availability restricted the plan.',
    points: [
      '23,278 Instagram views and 18.1% follower growth',
      '6K Pinterest impressions and 268 engagements',
      '78 Google Business Profile interactions, 63 direction requests and 11 calls',
    ],
    cta: 'Visit the Instagram page',
    href: ANUSATHYA_INSTAGRAM,
    caseHref: '#/case-study/anusathya',
    slides: ANUSATHYA_SLIDES,
    tags: ['Digital marketing', 'Instagram', 'Pinterest', 'Google Business Profile'],
  },
];

export function Work() {
  return (
    <section id="work" className="s-sec hc-sec" aria-labelledby="work-title">
      <Wave fill="#460607" flip />
      <ProjectCarousel projects={PROJECTS}>
        <Label light>Selected work</Label>
        <h2 id="work-title" className="s-title" data-reveal>
          Real projects, <em>up close.</em>
        </h2>
      </ProjectCarousel>
    </section>
  );
}

const STEPS = [
  { title: 'Listen', text: 'What you sell, who buys it, and the one action a visitor should take.' },
  { title: 'Structure', text: 'Information architecture and wireframes, so the page makes sense before it looks good.' },
  { title: 'Design and build', text: 'Visual design in Figma or Framer, built out in HTML and CSS where needed.' },
  { title: 'Test and ship', text: 'UI quality testing, fixes, SEO basics and a clean hand-off.' },
];

export function Process() {
  return (
    <section id="process" className="s-sec s-dark" aria-labelledby="process-title">
      <Wave fill="#2f0506" flip />
      <div className="s-wrap">
        <Label light>How I work</Label>
        <h2 id="process-title" className="s-title" data-reveal>
          A simple process, <em>no surprises.</em>
        </h2>
        <ol className="s-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} data-reveal style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              <span className="s-step-n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="s-note" data-reveal>
          Behind every step sits the part many designers skip: schedules, vendors and follow-through.
        </p>
      </div>
    </section>
  );
}

const TEAMS = [
  {
    company: 'Wisflux Tech Labs',
    role: 'People Ops Intern',
    focus: 'Quality and content',
    points: [
      'Ran comprehensive UI/UX quality testing on websites and digital products to surface usability issues',
      'Created promotional and informational content',
      'Supported onboarding and team efficiency initiatives',
    ],
  },
  {
    company: 'Layam Group',
    role: 'Jr. Executive',
    focus: 'Executive support and procurement',
    points: [
      'Primary administrative contact and Secretary to the CEO: calendars, daily task allocation, high-priority operations',
      'End-to-end vendor relations and procurement: purchase orders, inventory records, invoice checks',
      'Coordinated internal departments on staffing and delivery of corporate initiatives',
    ],
  },
  {
    company: 'First Welding Certification Pvt. Ltd.',
    role: 'Admin Manager',
    focus: 'Web, SEO and operations',
    points: [
      'Designed UI layouts and contributed directly to building the primary company website',
      'Led SEO, digital marketing and content strategy to grow visibility and organic search reach',
      'Managed accounts, monthly budgets, vendors and audit coordination',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="s-sec s-cream" aria-labelledby="exp-title">
      <Wave fill="#460607" flip />
      <div className="s-wrap">
        <Label>Where I&apos;ve put this to work</Label>
        <h2 id="exp-title" className="s-title" data-reveal>
          Design thinking, <em>operations discipline.</em>
        </h2>
        <p className="s-lead" data-reveal>
          Three teams, three different jobs, one habit: make things clearer and get them delivered.
        </p>
        <div className="s-grid3">
          {TEAMS.map((t, i) => (
            <article key={t.company} className="s-team" data-reveal style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
              <p className="s-focus">{t.focus}</p>
              <h3>{t.company}</h3>
              <p className="s-role">{t.role}</p>
              <ul>
                {t.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { SkillsSection as Skills } from './SkillsSection';

export function Contact() {
  const { copied, copy } = useCopy(EMAIL);
  return (
    <section id="contact" className="s-sec s-cream s-contact" aria-labelledby="contact-title">
      <Wave fill="#460607" flip />
      <div className="s-wrap">
        <div className="s-avail" data-reveal>
          <p className="s-avail-pill">
            <span className="s-pulse" aria-hidden="true" />
            Available now
          </p>
          <h2 id="contact-title">
            Open to an Associate Designer role <em>and freelance projects.</em>
          </h2>
          <p className="s-avail-text">
            Hiring for a design seat, or have a site that should be selling more? Send a line about what you need and
            I will get back to you.
          </p>
          <div className="s-cta">
            <a className="s-btn primary" href={MAILTO}>
              Hire me <Arrow />
            </a>
            <a className="s-btn soft" href={RESUME} download="Shri-Lakshmi-Resume.pdf">
              Download resume
            </a>
            <button
              type="button"
              className="s-btn ghost"
              onClick={copy}
              aria-label={copied ? 'Email copied to clipboard' : `Copy ${EMAIL} to clipboard`}
            >
              {copied ? 'Copied' : EMAIL}
              <CopyIcon />
            </button>
          </div>
          <span className="sr-only" aria-live="polite">
            {copied ? 'Email copied to clipboard.' : ''}
          </span>
        </div>

        <div className="s-two">
          <article className="s-who" data-reveal>
            <h3>Hiring a designer?</h3>
            <p>Associate Designer roles in web and UI/UX, on site in Chennai or Jaipur, or remote. My resume has the detail.</p>
            <a className="s-link" href={RESUME} download="Shri-Lakshmi-Resume.pdf">
              Get the resume <Arrow />
            </a>
          </article>
          <article className="s-who" data-reveal style={{ '--d': '0.1s' } as React.CSSProperties}>
            <h3>Got a project?</h3>
            <p>A new site, a refresh, or a fresh pair of eyes on usability. Tell me what you sell and who you sell to.</p>
            <a className="s-link" href={MAILTO}>
              Email a brief <Arrow />
            </a>
          </article>
          <article className="s-who" data-reveal style={{ '--d': '0.2s' } as React.CSSProperties}>
            <h3>Prefer a call?</h3>
            <p>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              <br />
              Chennai, Jaipur and remote.
            </p>
            <a className="s-link" href={`tel:${PHONE.replace(/\s/g, '')}`}>
              Call me <Arrow />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="s-footer">
      <div className="s-wrap s-foot">
        <div>
          <p className="s-foot-name">M. Shri Lakshmi</p>
          <p className="s-foot-sub">Web and UI/UX designer. Clear, usable websites, backed by content, SEO and sound operations.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="s-foot-contact">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
          <a href={RESUME} download="Shri-Lakshmi-Resume.pdf">Resume (PDF)</a>
        </div>
      </div>
      <p className="s-copy">&copy; M. Shri Lakshmi. Designed and built by me.</p>
    </footer>
  );
}
