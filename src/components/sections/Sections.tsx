import type { ReactNode } from 'react';
import { useCopy } from '../../hooks/useCopy';
import './sections.css';

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

const PROJECTS = [
  {
    id: 'aadithya',
    kind: 'Website refresh',
    name: 'Aadithya Automation & Security Systems',
    text: 'A before-and-after redesign. The hero is rewritten around what the client actually sells, and a palette of light blue, deep navy, champagne gold and ivory with Manrope and Inter gives it a steady, trustworthy voice.',
    points: [
      'Clients shown in an auto-advancing 3D coverflow',
      'Products with depth and pointer tilt',
      'Every quote button lands on the contact details',
    ],
    cta: 'Visit the live site',
    href: 'https://aadithya-automation.vercel.app/',
    caseHref: '#/case-study/aadithya',
    art: (
      <img
        className="s-shot"
        src="/work/aadithya.webp"
        width="1400"
        height="699"
        loading="lazy"
        alt="Home page of the refreshed Aadithya Automation and Security Systems website: the headline 'Your property. Always visible. Always yours.' over a security camera"
      />
    ),
    tags: ['Redesign', 'Visual design', 'Front end'],
  },
  {
    id: 'nest',
    kind: 'UX testing and guidance',
    name: 'Nest by Emmple',
    text: 'I tested the product the way a new user would and guided the team on usability, so friction got named early and fixes had a clear direction.',
    points: ['Hands-on usability testing', 'Guidance on how the product should behave'],
    cta: 'See the product',
    href: 'https://nest.emmple.com',
    art: (
      <img
        className="s-shot"
        src="/work/nest.webp"
        width="1400"
        height="536"
        loading="lazy"
        alt="The Nest school dashboard: sidebar navigation, a school banner, quick actions and totals for students, enquiries, staff and pending actions"
      />
    ),
    tags: ['UX testing', 'Usability'],
  },
  {
    id: 'nand-bhabhi',
    kind: 'Clothing E-commerce Website',
    name: 'Nand Bhabhi',
    text: 'A familiar vision, reimagined with thoughtful interactions. Created around the client\'s visual reference and business requirements, introducing video-led product storytelling, delivery transparency, and flexible storefront management.',
    points: [
      'Video-led product presentation for new arrivals',
      'Animated delivery tracking with courier dispatch & distance',
      'Flexible admin panel for template and banner updates',
    ],
    cta: 'Read the case study',
    href: '#/case-study/nand-bhabhi',
    caseHref: '#/case-study/nand-bhabhi',
    art: (
      <img
        className="s-shot"
        src="/work/nand-bhabhi.jpg"
        width="1400"
        height="850"
        loading="lazy"
        alt="Nand Bhabhi clothing e-commerce website home page showcasing ethnic wear, sarees, lehengas, and festive fashion"
      />
    ),
    tags: ['E-commerce', 'Ethnic Fashion', 'UI/UX Design', 'Store Management'],
  },
  {
    id: 'anusathya',
    kind: 'Digital marketing',
    name: 'Shree Anu Sathya Designers',
    text: 'Instagram marketing for a design brand, built around short-form video. A content-led approach took the account to 17,925 views within its first 30 days.',
    points: [
      '17,925 views and 6,480 viewers in the first month',
      'Reels led the reach, with about 14K views',
      '441 interactions and 37 net new followers',
    ],
    cta: 'Visit the Instagram page',
    href: 'https://www.instagram.com/shree_anu_sathya_designers/',
    art: (
      <div className="s-insight">
        <div className="s-insight-stats">
          <p>
            <strong>17.9K</strong>
            <span>views in the first 30 days</span>
          </p>
          <p>
            <strong>6.5K</strong>
            <span>viewers reached</span>
          </p>
          <p>
            <strong>14K</strong>
            <span>of those views from Reels</span>
          </p>
        </div>
        <img
          src="/work/instagram-insights.webp"
          width="700"
          height="663"
          loading="lazy"
          alt="Instagram Insights for the account over 30 days: 17,925 views, 37 net new followers and a graph of views by day"
        />
      </div>
    ),
    tags: ['Instagram', 'Content strategy', 'Reels', 'Analytics'],
  },
];

export function Work() {
  return (
    <section id="work" className="s-sec s-cream" aria-labelledby="work-title">
      <Wave fill="#460607" flip />
      <div className="s-wrap">
        <Label>Selected work</Label>
        <h2 id="work-title" className="s-title" data-reveal>
          Real projects, <em>live links.</em>
        </h2>
        <p className="s-lead" data-reveal>
          Open them, click around, judge for yourself.
        </p>
        <div className="s-projects">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className={`s-project ${i % 2 === 1 ? 'flip' : ''}`}
              aria-labelledby={`${p.id}-name`}
              data-reveal
            >
              <a
                className="s-art"
                href={p.href}
                target={p.href.startsWith('#') ? undefined : '_blank'}
                rel={p.href.startsWith('#') ? undefined : 'noreferrer'}
                tabIndex={-1}
                aria-hidden="true"
              >
                {p.art}
                <span className="s-art-chip">
                  {p.href.startsWith('#') ? 'Case study' : 'Live'} <Arrow />
                </span>
              </a>
              <div className="s-pcopy">
                <p className="s-kicker">
                  Project 0{i + 1} <i aria-hidden="true" /> {p.kind}
                </p>
                <h3 id={`${p.id}-name`}>{p.name}</h3>
                <p className="s-ptext">{p.text}</p>
                <ul className="s-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul className="s-ptags" aria-label="Skills used">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a
                  className="s-link"
                  href={p.href}
                  target={p.href.startsWith('#') ? undefined : '_blank'}
                  rel={p.href.startsWith('#') ? undefined : 'noreferrer'}
                >
                  {p.cta}
                  {!p.href.startsWith('#') && <span className="sr-only"> (opens in a new tab)</span>}
                  <Arrow />
                </a>
                {'caseHref' in p && p.href !== p.caseHref && (
                  <a className="s-link s-link-case" href={p.caseHref}>
                    Read the case study
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
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
      <Wave fill="#f5f1e4" flip />
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
