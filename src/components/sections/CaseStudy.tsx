import './case-study.css';
import { Label, Wave } from './Sections';
import { PostcardSlider } from './PostcardSlider';
import { Block, Bullets, Chips, Figure, LiveLink } from './CaseStudyParts';
import { AADITHYA_LIVE, AADITHYA_SLIDES } from './workSlides';

const SHOWCASE = [
  {
    title: 'Product & Equipment Presentation',
    text: 'Visuals introduce the camera alongside its associated recording and configuration equipment, helping visitors understand the broader installation setup.',
  },
  {
    title: 'Product Configuration',
    text: "Dedicated visuals communicate the camera's hardware, recording setup and configuration environment.",
  },
  {
    title: 'Real-World Camera Footage',
    text: "Demonstration footage shows the camera's output in an actual surveillance environment, giving customers a better understanding of its imaging capabilities.",
  },
  {
    title: 'Infrared Night Vision',
    text: "Night vision footage demonstrates the camera's performance in low-light conditions, supported by an infrared night-vision range indicator.",
  },
  {
    title: 'Installation & Mounting',
    text: 'Visual demonstrations communicate ceiling and wall mounting possibilities, helping visitors understand the physical installation options.',
  },
  {
    title: 'Remote Monitoring',
    text: 'Visuals of mobile and desktop monitoring interfaces demonstrate how surveillance footage can be accessed through different devices.',
  },
];

const NAV_CONSIDERATIONS = [
  {
    title: 'Persistent Access',
    text: 'The floating placement keeps important navigation destinations within reach while users explore the website.',
  },
  {
    title: 'Compact, Icon-Led Design',
    text: 'The vertical arrangement makes efficient use of the available screen space while preserving room for the main content.',
  },
  {
    title: 'Clear Visual Hierarchy',
    text: 'A highlighted active state distinguishes the currently selected destination from other navigation options.',
  },
  {
    title: 'Visual Consistency',
    text: "The light surface, rounded container, navy icons and gold accents follow the website's broader visual identity.",
  },
  {
    title: 'Direct Navigation',
    text: 'The component provides an alternative route to important sections without requiring users to repeatedly return to the main navigation.',
  },
];

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
            <dd>Website Design &middot; UI/UX Design &middot; Frontend Development &middot; Deployment</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Industry</dt>
            <dd>Security Solutions &amp; Automation</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Role</dt>
            <dd>UI/UX Design, Frontend Development &amp; Client Collaboration</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Status</dt>
            <dd>Ongoing &mdash; Live Deployment with Continuous Refinement</dd>
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
          <p>
            Aadithya Automation &amp; Security Systems provides security and automation solutions, including CCTV surveillance, access control, fire alarms, networking equipment and related technologies.
          </p>
          <p>
            The project began with a broad requirement to build a website. Rather than approaching it as a conventional corporate website, I explored how the business could establish a stronger digital presence through structured product discovery, visual product demonstrations and accessible enquiry workflows.
          </p>
          <p>
            The result is a website experience designed to help potential customers explore technical products, understand their capabilities, discover the company's services and initiate enquiries.
          </p>
          <p>
            My involvement extended beyond visual design into website structure, navigation, interactive components, frontend implementation, deployment and continuous refinement through client feedback.
          </p>
        </Block>

        <Block id="cs-challenge" label="02. The Challenge">
          <p>
            With no detailed product brief at the outset, the first challenge was to establish a clear direction for a business offering a diverse range of security and automation solutions.
          </p>
          <p>Technical products often contain specifications and capabilities that are difficult to communicate through conventional product listings.</p>
          <p>
            A static product image, for example, may show what a CCTV camera looks like but cannot adequately demonstrate its night vision, monitoring capabilities, installation options or practical application.
          </p>
          <p>The website also needed to establish credibility, organise a broad catalogue and make it easy for potential customers to contact the business.</p>
          <h4 className="cs-h4">Key objectives:</h4>
          <Bullets
            items={[
              'Establish a professional and recognisable digital presence.',
              'Organise a diverse product and service catalogue.',
              'Present technical information in a clear hierarchy.',
              'Improve product understanding through multimedia demonstrations.',
              'Showcase client organisations and build credibility.',
              'Make important website sections and contact options accessible.',
              'Create a foundation for future content and digital marketing.',
            ]}
          />
          <p>
            Rather than waiting for every requirement to be defined, I took the initiative to research the business and establish an initial direction that could evolve through client feedback.
          </p>
        </Block>

        <Block id="cs-direction" label="03. Design Direction &amp; Visual Identity">
          <p>I developed a visual direction around deep navy, warm gold, off-white and soft blue-grey.</p>
          <p>Each colour serves a distinct purpose:</p>
          <Bullets
            items={[
              <><strong>Deep Navy:</strong> Establishes a professional and trustworthy foundation.</>,
              <><strong>Warm Gold:</strong> Highlights important actions, navigation states and selected elements.</>,
              <><strong>Off-white:</strong> Creates breathing space and improves content readability.</>,
              <><strong>Soft Blue-Grey:</strong> Adds subtle depth and visual separation.</>,
            ]}
          />
          <p>The typography combines bold, high-impact headings with readable supporting text and compact labels.</p>
          <p>Consistent spacing, restrained shadows, fine borders and reusable components help maintain visual continuity across different sections.</p>
          <p>The homepage introduces the visual direction through a cinematic industrial setting at sunset, paired with the headline:</p>
          <p className="cs-lead">"Your Property, Under Your Control."</p>
          <Figure
            src="/work/aadithya-hero.webp"
            alt="Aadithya home page with an industrial building at sunset and the headline Your Property, Under Your Control"
            caption="The homepage hero, with Explore Products as the direct entry point into the catalogue."
          />
          <p>The supporting content communicates the business's CCTV installation services, while the prominent Explore Products action provides a direct entry point into the catalogue.</p>
          <p>The intention was to establish a memorable first impression without compromising clarity or usability.</p>
        </Block>

        <Block id="cs-catalogue" label="04. Product Discovery &amp; Catalogue Design">
          <p>The product catalogue was designed to help visitors navigate a diverse range of security and automation equipment.</p>
          <p>Products are organised into categories such as:</p>
          <Chips
            items={[
              'IP Cameras',
              'Access Control Systems',
              'Fire Alarms',
              'Storage & Recording',
              'Networking Equipment',
              'Other Security Solutions',
            ]}
          />
          <p>A consistent product-card layout presents the product image, name, brand, model number, short description and View Details action.</p>
          <Figure
            src="/work/aadithya-catalogue.webp"
            alt="Aadithya product catalogue with category filters and IP camera product cards"
            caption="Category filters above a consistent product-card layout."
          />
          <p>This creates a predictable browsing experience, allowing visitors to scan products and identify relevant equipment without having to interpret different layouts for individual categories.</p>
          <h4 className="cs-h4">Individual Product Pages</h4>
          <p>Selecting a product opens a dedicated detail page with a more focused information hierarchy.</p>
          <p>For example, the 2 MP Network IR Dome Camera page highlights:</p>
          <Bullets
            items={[
              'Imaging resolution.',
              'Infrared night vision range.',
              'Ceiling and wall mounting options.',
              'Remote viewing capabilities.',
              'Recording and configuration setup.',
              'Installation package information.',
            ]}
          />
          <p>The two-column layout balances product imagery with its description, key features and primary Enquire Now action.</p>
          <Figure
            src="/work/aadithya-product.webp"
            alt="Detail page for the 2 MP Network IR Dome Camera showing a ceiling and wall mounting demonstration"
            caption="The 2 MP Network IR Dome Camera page, with the Ceiling & Wall Mounting demonstration in the media area."
          />
          <p>This separates initial product discovery from detailed evaluation, giving visitors a clearer path from browsing to enquiry.</p>
        </Block>

        <Block id="cs-multimedia" label="05. Multimedia Product Showcase &mdash; Beyond Static Product Images">
          <p>One of the important enhancements to the product detail experience was the introduction of a multimedia product showcase.</p>
          <p>Security equipment is inherently technical. Customers often need to understand how a device performs in real-world conditions rather than relying exclusively on product photography and written specifications.</p>
          <p>To address this, I extended the product presentation experience to incorporate different forms of visual content.</p>
          <h4 className="cs-h4">Product Demonstration Gallery</h4>
          <p>The product media area presents a sequence of visual demonstrations associated with the selected product.</p>
          <p>For the 2 MP Network IR Dome Camera, the showcase includes:</p>
          <ul className="cs-cards">
            {SHOWCASE.map((s, i) => (
              <li key={s.title}>
                <span>{i + 1}.</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
          <h4 className="cs-h4">Design Rationale</h4>
          <p>Instead of presenting every product through a single representative image, the multimedia showcase communicates different aspects of the product through contextual visual demonstrations.</p>
          <p>This creates a more informative product evaluation experience.</p>
          <p>For technical products, the difference between seeing a device and understanding its capabilities is significant.</p>
          <p>The multimedia approach helps bridge that gap by bringing product appearance, practical application and technical demonstrations together within the product detail page.</p>
        </Block>

        <Block id="cs-mobile-nav" label="06. Mobile Navigation &amp; Quick Access">
          <p>One of the distinctive interface elements of the website is the floating vertical side tab designed for the mobile experience.</p>
          <p>Rather than relying entirely on the main navigation bar, I introduced a compact, icon-led navigation panel that provides shortcuts to important website destinations.</p>
          <Figure
            phone
            src="/work/aadithya-hero-mobile.webp"
            alt="Aadithya mobile home page with a floating vertical icon navigation tab on the right edge"
            caption="The floating, icon-led side tab on mobile."
          />
          <p>The navigation includes:</p>
          <Chips items={['Home', 'Products', 'Services', 'Clients', 'FAQs', 'Updates', 'Contact']} />
          <h4 className="cs-h4">Design Considerations</h4>
          <dl className="cs-defs">
            {NAV_CONSIDERATIONS.map((n) => (
              <div key={n.title}>
                <dt>{n.title}</dt>
                <dd>{n.text}</dd>
              </div>
            ))}
          </dl>
          <p>The floating tab is an intentional interaction and layout decision rather than a decorative component. Its effectiveness and accessibility across different screen sizes remain areas for usability validation.</p>
        </Block>

        <Block id="cs-clients" label="07. Client Showcase &amp; Interactive 3D Carousel">
          <p>The Clients section introduces a more expressive visual treatment through an interactive, layered 3D card carousel.</p>
          <p>Instead of presenting client logos in a conventional static grid, the carousel places a central card in focus while neighbouring cards remain partially visible.</p>
          <Figure
            src="/work/aadithya-clients.webp"
            alt="Aadithya Clients section with a layered 3D carousel of client logo cards"
            caption="The layered 3D client carousel, with client and brand views."
          />
          <p>This creates depth and establishes a clear visual focal point while giving visitors an interactive way to explore the showcase.</p>
          <p>The section also includes client and brand views, supported by introductory content that provides context for the organisations displayed.</p>
          <p>The objective was to introduce a distinctive interaction into an otherwise information-focused corporate website while maintaining the overall visual language.</p>
        </Block>

        <Block id="cs-faqs" label="08. FAQs &amp; Updates &mdash; Planning Beyond the Homepage">
          <p>The website structure extends beyond product browsing to support customer education and future content.</p>
          <h4 className="cs-h4">Frequently Asked Questions</h4>
          <p>The FAQ section creates a dedicated space for common questions about security, surveillance, networking and automation solutions.</p>
          <p>Organising questions into a dedicated section provides a foundation for helping customers understand the business's offerings before initiating contact.</p>
          <Figure
            src="/work/aadithya-faq-updates.webp"
            alt="Aadithya Common Questions page with the Updates dropdown menu open"
            caption="The Common Questions page with the Updates menu open."
          />
          <h4 className="cs-h4">Updates Navigation</h4>
          <p>The Updates menu groups content into several categories:</p>
          <Bullets
            items={[
              <><strong>All Updates:</strong> Central destination for recent content.</>,
              <><strong>Blogs:</strong> Practical guidance on selecting and using security systems.</>,
              <><strong>Articles:</strong> More detailed technical explanations.</>,
              <><strong>Case Studies:</strong> Examples of installations, requirements and outcomes.</>,
              <><strong>Launches:</strong> Announcements about new products, services and capabilities.</>,
            ]}
          />
          <p>This structure provides room for future publishing and content-led discovery.</p>
          <p>Its contribution to organic search traffic or enquiries has not yet been measured.</p>
        </Block>

        <Block id="cs-contact" label="09. Contact Experience &amp; Enquiry Flow">
          <p>The contact page brings business information and a Request a Quote form into one structured layout.</p>
          <p>Contact details, working hours and address information are presented alongside the enquiry form, allowing visitors to access essential information without navigating between multiple pages.</p>
          <Figure
            src="/work/aadithya-contact.webp"
            alt="Aadithya contact page with contact details beside the Request a Quote form"
            caption="Contact details alongside the Request a Quote form."
          />
          <p>The form includes:</p>
          <Chips items={['Name', 'Company', 'Phone Number', 'Email', 'Property Type', 'Description of Requirements']} />
          <p>The interface uses clear labels, consistent input styling and a prominent Request a Quote action.</p>
          <p>The objective is to reduce friction between discovering a service and initiating a conversation with the business.</p>
        </Block>

        <Block id="cs-deployment" label="10. From Design to Live Deployment">
          <p>The project extends beyond UI design into frontend development and deployment.</p>
          <p>After establishing the initial website experience, I implemented and deployed it on Vercel.</p>
          <p>Working with a live implementation made it possible to evaluate the actual website rather than relying exclusively on static design screens.</p>
          <p>It also established a practical foundation for continued development and client review.</p>
          <p>The client continues to provide feedback and request changes. I use this ongoing collaboration to refine the website and adapt the experience as requirements evolve.</p>
          <p>Iteration is therefore an integral part of the project rather than something that ends with the initial deployment.</p>
        </Block>

        <Block id="cs-growth" label="11. Designing for Future Growth">
          <p>The website has been structured to accommodate future development across several areas.</p>
          <p>The product catalogue can support additional products and categories. The multimedia product presentation can accommodate further product demonstrations, while the client showcase can continue to evolve.</p>
          <p>The FAQs and Updates sections provide room for educational content, technical articles and project stories.</p>
          <p>The contact experience also creates a foundation for future enquiry-flow improvements.</p>
          <p>These are opportunities enabled by the current structure rather than claims of business growth or performance improvements that have already been demonstrated.</p>
        </Block>

        <Block id="cs-outcome" label="12. Current Outcome">
          <p>The project has established a cohesive website experience spanning:</p>
          <Bullets
            items={[
              'A visually distinctive corporate homepage.',
              'Category-based product discovery.',
              'Individual product detail pages.',
              'Multimedia product demonstrations.',
              'Real-world CCTV footage and night vision showcases.',
              'Installation and remote-monitoring visuals.',
              'Floating, icon-led mobile navigation.',
              'Interactive 3D client showcase.',
              'FAQs and structured Updates navigation.',
              'Contact page with Request a Quote functionality.',
              'Frontend implementation and live Vercel deployment.',
              'Ongoing client collaboration and refinement.',
            ]}
          />
          <p>The most important outcome is the evolution of a broad website requirement into a structured digital experience that addresses product discovery, technical communication, brand credibility and customer enquiries.</p>
          <p>The website remains under development as client requirements evolve.</p>
          <p className="cs-note">Formal usability testing, traffic analytics, conversion data and before-and-after performance measurements have not been provided. Consequently, the outcome is described through the implemented experience and design decisions rather than unverified numerical improvements.</p>
        </Block>

        <Block id="cs-learnings" label="13. Key Learnings">
          <p>This project reinforced the importance of taking ownership when working with an open-ended brief.</p>
          <p>Understanding the business, establishing a clear information architecture and creating a consistent visual direction helped transform a broad requirement into a more considered digital experience.</p>
          <p>It also highlighted the importance of context in product presentation.</p>
          <p>For technical products, good product design is not limited to displaying specifications. Customers need visual evidence of how products look, function and fit into real-world environments.</p>
          <p>Introducing multimedia demonstrations helped extend the product detail experience beyond conventional e-commerce layouts.</p>
          <p>Finally, deploying the website and refining it through client feedback reinforced that product design is an iterative process that continues beyond the first release.</p>
        </Block>

        <div className="cs-quote-card" data-reveal>
          <blockquote className="cs-quote-text">A digital foundation built to evolve.</blockquote>
          <p className="cs-quote-sub">
            Aadithya Automation &amp; Security Systems &mdash; combining visual storytelling, multimedia product discovery, considered navigation and a foundation for ongoing digital growth.
          </p>
        </div>
      </div>
    </section>
  );
}
