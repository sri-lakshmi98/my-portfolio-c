import './case-study.css';
import { Label, Wave } from './Sections';
import { PostcardSlider, type PostcardSlide } from './PostcardSlider';

const LIVE = 'https://aadithya-automation.vercel.app/';

const AADITHYA_SLIDES: PostcardSlide[] = [
  {
    src: '/work/aadithya.webp',
    title: '01 · Responsive Website Hero Redesign',
    caption: 'Rebuilt around client identity: "Your property. Always visible. Always yours." with authoritative navy & champagne palette.',
    tag: 'Hero & Identity',
    alt: 'The live Aadithya Automation and Security Systems home page',
  },
  {
    src: '/work/aadithya-3d.webp',
    title: '02 · 3D Product & Client Coverflow',
    caption: 'Interactive card tilt with dynamic depth highlighting 4K PTZ cameras, biometric access control, and commercial clients.',
    tag: '3D Interaction',
    alt: 'Interactive 3D product coverflow and specification card mockup',
  },
  {
    src: '/work/aadithya-quote.webp',
    title: '03 · 60-Second Quotation Funnel',
    caption: 'Streamlined 3-step system selector integrated with one-click WhatsApp quote dispatch and phone callback.',
    tag: 'Conversion Funnel',
    alt: 'Seamless quotation flow and direct WhatsApp consultation dispatch',
  },
];

const CHALLENGES = [
  {
    title: 'An open-ended, undefined brief',
    text: 'Tasked with shaping the full digital presence from scratch without predefined content guidelines, brand kits, or sitemaps.',
  },
  {
    title: 'Complex hardware product taxonomy',
    text: 'Translating technical security specs (4K PTZ dome optics, biometric facial recognition, perimeter radar) into clear customer benefits.',
  },
  {
    title: 'Continuous iterative client feedback',
    text: 'Balancing rapid live deployment with fluid client requests as real-world business requirements crystallized.',
  },
];

function Block({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section className="cs-block" aria-labelledby={id} data-reveal>
      <h3 id={id} className="cs-label">
        {label}
      </h3>
      <div className="cs-body">{children}</div>
    </section>
  );
}

function LiveLink({ children }: { children: React.ReactNode }) {
  return (
    <a className="cs-live" href={LIVE} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> &#8599;</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function CaseStudy({ page = false }: { page?: boolean }) {
  return (
    <section id="case-study" className={`s-sec s-dark cs ${page ? 'cs-page' : ''}`} aria-labelledby="cs-title">
      {!page && <Wave fill="#f5f1e4" flip />}
      <div className="s-wrap cs-wrap">
        <Label light>Case study</Label>
        <p className="cs-client" data-reveal>
          Aadithya Automation &amp; Security Systems
        </p>
        <h2 id="cs-title" className="s-title cs-title" data-reveal>
          Building a digital foundation <em>from an open-ended brief.</em>
        </h2>
        <p className="cs-tags" data-reveal>
          Website Design <i aria-hidden="true">&middot;</i> UI/UX Architecture <i aria-hidden="true">&middot;</i> 3D Coverflow Interaction <i aria-hidden="true">&middot;</i> Vercel Deployment <i aria-hidden="true">&middot;</i> WhatsApp Lead Capture
        </p>
        
        <div className="cs-top" data-reveal>
          <LiveLink>View live website</LiveLink>
        </div>

        {/* Quick Facts Metadata Grid */}
        <dl className="cs-meta-grid" data-reveal>
          <div className="cs-meta-item">
            <dt>Client</dt>
            <dd>Aadithya Automation &amp; Security</dd>
          </div>
          <div className="cs-meta-item">
            <dt>My Role</dt>
            <dd>UI/UX Design, Front-End Development, Research &amp; Deployment</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Core Tech &amp; Tools</dt>
            <dd>Figma, React, Tailwind CSS, Vercel, WhatsApp API</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Deployment Status</dt>
            <dd>Live on Vercel &bull; Ongoing iterative enhancements</dd>
          </div>
        </dl>

        {/* Interactive Postcard Slider Gallery */}
        <div className="cs-gallery-wrap" data-reveal>
          <div className="cs-gallery-label">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f5e211' }} />
            Interactive Postcard Gallery &mdash; Slide through key design deliverables
          </div>
          <PostcardSlider slides={AADITHYA_SLIDES} projectName="Aadithya Automation" />
        </div>

        {/* Chapter 01: Project Overview */}
        <Block id="cs-overview" label="Project overview">
          <p>
            When Aadithya Automation approached me, they had an established offline security integration business across commercial facilities and residential communities, but lacked a coherent digital identity. They needed a modern website to showcase enterprise camera installations, access control, and smart perimeter systems.
          </p>
          <p>
            Rather than waiting for every technical specification to be drafted, I proactively researched security hardware, organized their service offerings, and built a live digital prototype deployed on Vercel so the client could test real interactions immediately.
          </p>
        </Block>

        {/* Chapter 02: The Challenge */}
        <Block id="cs-challenge" label="The challenge">
          <p className="cs-lead">How do you structure an authoritative website when the requirements are evolving daily?</p>
          <ul className="cs-cards">
            {CHALLENGES.map((c, i) => (
              <li key={c.title}>
                <span aria-hidden="true">0{i + 1}</span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </Block>

        {/* Chapter 03: Key Design Decisions */}
        <Block id="cs-features" label="Key design decisions &amp; execution">
          <div className="cs-feature-section">
            
            {/* Feature 01 */}
            <article className="cs-feature-card">
              <div className="cs-feature-info">
                <span className="cs-feature-tag">UX Feature 01</span>
                <h4>3D Interactive Product Coverflow</h4>
                <p>
                  Industrial and commercial security equipment can look monolithic in static product grids. I introduced an auto-advancing 3D coverflow with pointer tilt interactions.
                </p>
                <ul className="cs-feature-bullets">
                  <li><strong>Tactile depth:</strong> Hardware products tilt on hover, giving visitors a sense of physical weight and premium craftsmanship.</li>
                  <li><strong>Instant spec discovery:</strong> Visitors can view camera resolution, night vision ranges, and storage specs without page reloads.</li>
                  <li><strong>Social proof:</strong> Commercial client logos integrated directly into the carousel flow.</li>
                </ul>
              </div>
              <figure className="cs-feature-art">
                <img
                  src="/work/aadithya-3d.webp"
                  alt="3D Product and Client Coverflow"
                  loading="lazy"
                />
                <figcaption>Interactive 3D Product Showcase with dynamic depth tilt and specification badges.</figcaption>
              </figure>
            </article>

            {/* Feature 02 */}
            <article className="cs-feature-card reverse">
              <div className="cs-feature-info">
                <span className="cs-feature-tag">Conversion Feature 02</span>
                <h4>Frictionless 60-Second Quotation Funnel</h4>
                <p>
                  Enterprise customers want rapid pricing, not long generic contact forms. I designed an intuitive 3-step quote generator linked directly to WhatsApp.
                </p>
                <ul className="cs-feature-bullets">
                  <li><strong>Step 1 &mdash; Property category:</strong> Select Commercial, Residential Villa, or Industrial Facility in 1 tap.</li>
                  <li><strong>Step 2 &mdash; System checklist:</strong> Check 4K CCTV, Biometrics, or Alarm sensors with visual toggles.</li>
                  <li><strong>Step 3 &mdash; Direct dispatch:</strong> Sends pre-filled configuration straight to the technician's WhatsApp.</li>
                </ul>
              </div>
              <figure className="cs-feature-art">
                <img
                  src="/work/aadithya-quote.webp"
                  alt="Seamless Quote Request and WhatsApp consultation workflow"
                  loading="lazy"
                />
                <figcaption>3-Step interactive quotation workflow with direct WhatsApp consultation dispatch.</figcaption>
              </figure>
            </article>

          </div>
        </Block>

        {/* Chapter 04: The Outcome */}
        <Block id="cs-outcome" label="The outcome">
          <p className="cs-lead">
            A deployed, live digital presence that turned an open-ended request into an active business asset.
          </p>
          <div className="cs-metric-row">
            <div className="cs-metric-badge">
              <span className="cs-metric-num">100%</span>
              <span className="cs-metric-label">Live deployment on Vercel with zero server maintenance overhead</span>
            </div>
            <div className="cs-metric-badge">
              <span className="cs-metric-num">&lt; 60s</span>
              <span className="cs-metric-label">Rapid quote submission time via optimized 3-step inquiry workflow</span>
            </div>
            <div className="cs-metric-badge">
              <span className="cs-metric-num">0 &rarr; 1</span>
              <span className="cs-metric-label">Complete brand visual foundation created from an unguided brief</span>
            </div>
          </div>
          <p>
            The project validated that building in the open with live deployments accelerates client alignment far faster than static PDF presentations.
          </p>
        </Block>

        {/* Chapter 05: Designer Mindset */}
        <div className="cs-quote-card" data-reveal>
          <blockquote className="cs-quote-text">
            When a brief is open-ended, the designer’s job is to create clarity out of ambiguity&mdash;building a live foundation that invites collaboration rather than waiting for instructions.
          </blockquote>
          <span className="cs-quote-author">M. Shri Lakshmi &mdash; Project Takeaway</span>
        </div>

      </div>
    </section>
  );
}
