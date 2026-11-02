import './case-study.css';
import { Label, Wave } from './Sections';
import { PostcardSlider } from './PostcardSlider';
import { Block, Bullets, DataTable, Figure, LiveLink } from './CaseStudyParts';
import { AADITHYA_LIVE, AADITHYA_SLIDES } from './workSlides';

// Sampled from the live site's screenshots.
const PALETTE = [
  { name: 'Deep navy', color: '#18294a' },
  { name: 'Warm gold', color: '#b09868' },
  { name: 'Off-white', color: '#f8f9f2' },
  { name: 'Soft blue-grey', color: '#e0e8f0' },
];

const PROCESS = ['Open-ended brief', 'Research', 'Design', 'Frontend development', 'Vercel deployment', 'Client feedback'];

export function CaseStudy({ page = false }: { page?: boolean }) {
  return (
    <section id="case-study" className={`s-sec s-dark cs ${page ? 'cs-page' : ''}`} aria-labelledby="cs-title">
      {!page && <Wave fill="#f5f1e4" flip />}
      <div className="s-wrap cs-wrap">
        <Label light>Case study</Label>
        <p className="cs-client" data-reveal>
          Aadithya Automation &amp; Security Systems
        </p>
        <h2 id="cs-title" className="s-title cs-title cs-title-long" data-reveal>
          Building a Digital Presence <em>for a Security Solutions Business</em>
        </h2>

        <div className="cs-top" data-reveal>
          <LiveLink href={AADITHYA_LIVE}>View live website</LiveLink>
        </div>

        {/* Quick Facts Metadata Grid */}
        <dl className="cs-meta-grid" data-reveal>
          <div className="cs-meta-item">
            <dt>Project</dt>
            <dd>Website Design &middot; UI/UX &middot; Frontend Development &middot; Deployment</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Industry</dt>
            <dd>Security &amp; Automation</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Role</dt>
            <dd>UI/UX Designer, Frontend Developer &amp; Client Collaborator</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Status</dt>
            <dd>Ongoing &middot; Live on Vercel</dd>
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

        <Block id="cs-overview" label="01. Project Overview">
          <p>Aadithya Automation &amp; Security Systems provides CCTV surveillance, access control, fire alarms, networking equipment and automation solutions.</p>
          <p>Starting with a broad website requirement, I researched the business and developed a digital experience focused on product discovery, visual demonstrations and accessible customer enquiries.</p>
          <p>My role spans design, development, deployment and continuous refinement based on client feedback.</p>
        </Block>

        <Block id="cs-challenge" label="02. The Challenge">
          <p>The website needed to present a diverse range of technical products, establish business credibility and help potential customers understand available solutions.</p>
          <h4 className="cs-h4">Key objectives:</h4>
          <Bullets
            items={[
              'Organise products and services into an intuitive structure.',
              'Communicate technical features through clear content and visuals.',
              'Establish a professional and consistent brand identity.',
              'Simplify navigation and customer enquiries.',
              'Create a foundation for future content and digital marketing.',
            ]}
          />
          <p>With no detailed product brief initially, I took the initiative to research the business and develop a direction that could evolve with the client's needs.</p>
        </Block>

        <Block id="cs-direction" label="03. Design Direction">
          <p>I established a visual identity using deep navy, warm gold, off-white and soft blue-grey, combining bold typography with clean layouts and consistent components.</p>
          <ul className="cs-palette" aria-label="Colour palette">
            {PALETTE.map((p) => (
              <li key={p.name}>
                <span style={{ background: p.color }} aria-hidden="true" />
                {p.name}
              </li>
            ))}
          </ul>
          <p>The homepage features a cinematic industrial setting and the headline:</p>
          <p className="cs-lead">"Your Property, Under Your Control."</p>
          <Figure
            src="/work/aadithya-hero.webp"
            alt="Aadithya home page with an industrial building at sunset and the headline Your Property, Under Your Control"
            caption="The homepage hero and its direct route into the catalogue."
          />
          <p>The design balances a strong visual impression with clear navigation and a direct route to product discovery.</p>
        </Block>

        <Block id="cs-catalogue" label="04. Product Discovery &amp; Multimedia Experience">
          <p>I structured the catalogue into categories such as IP cameras, access control, fire alarms, storage and networking equipment.</p>
          <Figure
            src="/work/aadithya-catalogue.webp"
            alt="Aadithya product catalogue with category filters and IP camera product cards"
            caption="Category filters above consistent product cards."
          />
          <p>Consistent product cards help visitors browse equipment, while dedicated product pages organise specifications, key features, installation information and enquiry actions.</p>
          <h4 className="cs-h4">Beyond Static Product Images</h4>
          <p>To help customers understand technical products in context, I introduced a multimedia showcase featuring:</p>
          <Bullets
            items={[
              'Product and equipment presentations.',
              'Configuration and recording setups.',
              'Real-world CCTV footage.',
              'Infrared night vision demonstrations.',
              'Installation and mounting options.',
              'Mobile and desktop remote-monitoring visuals.',
            ]}
          />
          <Figure
            src="/work/aadithya-product.webp"
            alt="Detail page for the 2 MP Network IR Dome Camera showing a ceiling and wall mounting demonstration"
            caption="A product page with its mounting demonstration in the media area."
          />
          <p>This approach extends product presentation beyond specifications, helping visitors explore how equipment looks and functions in practical environments.</p>
        </Block>

        <Block id="cs-navigation" label="05. Navigation &amp; Interactive Design">
          <h4 className="cs-h4">Floating Mobile Navigation</h4>
          <p>A compact, icon-led side tab provides quick access to Home, Products, Services, Clients, FAQs, Updates and Contact, with a highlighted active state.</p>
          <Figure
            phone
            src="/work/aadithya-hero-mobile.webp"
            alt="Aadithya mobile home page with a floating vertical icon navigation tab on the right edge"
            caption="The floating, icon-led side tab on mobile."
          />
          <h4 className="cs-h4">Interactive 3D Client Carousel</h4>
          <p>A layered carousel gives the client showcase a distinctive visual presentation, allowing visitors to explore displayed organisations through an interactive interface.</p>
          <Figure
            src="/work/aadithya-clients.webp"
            alt="Aadithya Clients section with a layered 3D carousel of client logo cards"
            caption="The layered 3D client carousel."
          />
          <p>Both features introduce more engaging ways to navigate and explore the website.</p>
        </Block>

        <Block id="cs-content" label="06. Content &amp; Customer Enquiries">
          <p>The website includes dedicated sections designed to support customer discovery and future growth.</p>
          <DataTable
            head={['Section', 'Purpose']}
            rows={[
              ['FAQs', 'A structured space for common questions about security and automation solutions.'],
              ['Updates', 'Categories for blogs, articles, case studies, launches and other business updates.'],
              ['Contact & Request a Quote', 'A centralised enquiry experience combining business information, working hours, address and a form for customer requirements.'],
            ]}
          />
          <Figure
            src="/work/aadithya-faq-updates.webp"
            alt="Aadithya Common Questions page with the Updates dropdown menu open"
            caption="The FAQs page with the Updates menu open."
          />
          <Figure
            src="/work/aadithya-contact.webp"
            alt="Aadithya contact page with contact details beside the Request a Quote form"
            caption="Contact details alongside the Request a Quote form."
          />
          <p>These features establish a foundation for customer education, content publishing and future enquiry-flow improvements.</p>
        </Block>

        <Block id="cs-deployment" label="07. Development &amp; Live Deployment">
          <p>I translated the design into a working website, implemented the frontend and deployed it on Vercel.</p>
          <ol className="cs-flow" aria-label="Project workflow">
            {PROCESS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>Working with a live implementation allows the client to review the actual experience and request changes as requirements evolve.</p>
          <p>The project remains ongoing, with continuous refinement driven by client feedback.</p>
        </Block>

        <Block id="cs-outcome" label="08. Outcome">
          <p>The project has established a cohesive website experience featuring:</p>
          <Bullets
            items={[
              'Structured product and service discovery.',
              'Dedicated product detail pages with multimedia demonstrations.',
              'Responsive navigation and interactive client presentation.',
              'FAQs and organised content navigation.',
              'A centralised customer enquiry experience.',
              'Live deployment and an iterative development workflow.',
            ]}
          />
          <p>Rather than treating the website as a static corporate presence, I developed a foundation designed to communicate technical products clearly and support future business needs.</p>
        </Block>

        <Block id="cs-learning" label="Key Learning">
          <p>This project strengthened my ability to turn an open-ended brief into a structured digital experience, combining research, visual design, product communication, frontend development and ongoing client collaboration.</p>
        </Block>

        <div className="cs-quote-card" data-reveal>
          <blockquote className="cs-quote-text">A digital foundation built to evolve.</blockquote>
        </div>
      </div>
    </section>
  );
}
