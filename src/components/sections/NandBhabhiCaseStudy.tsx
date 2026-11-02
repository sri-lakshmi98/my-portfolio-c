import './case-study.css';
import { Label, Wave } from './Sections';
import { PostcardSlider, type PostcardSlide } from './PostcardSlider';

const NAND_BHABHI_SLIDES: PostcardSlide[] = [
  {
    src: '/work/nand-bhabhi-hero.webp',
    title: '01 · Festive Ethnic Wear Curation',
    caption: 'Hero campaign spotlighting bridal lehengas, silk sarees, and festival promotions with warm golden accents.',
    tag: 'Hero & Storefront',
    alt: 'Nand Bhabhi home page featuring festive ethnic wear, sarees, lehengas',
  },
  {
    src: '/work/new-arrival.webp',
    title: '02 · The Film Library (Video Storytelling)',
    caption: 'Video vignettes capturing garment motion, zari weave, fabric flow, and close-up craftsmanship.',
    tag: 'Product Discovery',
    alt: 'More new arrivals video film library presentation for ethnic wear',
  },
  {
    src: '/work/nand-bhabhi-delivery.webp',
    title: '03 · Animated Delivery Tracking Concept',
    caption: 'Live transit map, real-time distance calculations, and transparent Standard vs Express dispatch indicators.',
    tag: 'Delivery Journey',
    alt: 'Interactive animated delivery status and parcel tracking mockup',
  },
  {
    src: '/work/nand-bhabhi-admin.webp',
    title: '04 · Independent Storefront Control Center',
    caption: '1-click seasonal theme switcher and promo customizer empowering client autonomy without developer dependency.',
    tag: 'Admin & Operations',
    alt: 'Nand Bhabhi storefront control center and theme customization admin panel',
  },
  {
    src: '/work/nand-bhabhi-categories.webp',
    title: '05 · Visual Collection Taxonomy',
    caption: 'Curated shopping cards across Sarees, Kurtis, Lehengas, Anarkali & Suits, Men\'s Wear, and Kids Wear.',
    tag: 'Merchandising',
    alt: 'Featured collection category cards for sarees, kurtis, lehengas and suits',
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

export function NandBhabhiCaseStudy({ page = false }: { page?: boolean }) {
  return (
    <section id="case-study-nand-bhabhi" className={`s-sec s-dark cs ${page ? 'cs-page' : ''}`} aria-labelledby="cs-title">
      {!page && <Wave fill="#f5f1e4" flip />}
      <div className="s-wrap cs-wrap">
        <Label light>Case study</Label>
        <p className="cs-client" data-reveal>
          Nand Bhabhi &bull; Ethnic Couture &amp; Festive Fashion
        </p>
        <h2 id="cs-title" className="s-title cs-title" data-reveal>
          Clothing E-commerce <em>Website</em>
        </h2>
        <p className="cs-lead" style={{ marginTop: '0.6rem', marginBottom: '1.2rem', color: '#f5f1e4' }} data-reveal>
          A familiar vision, reimagined with thoughtful interactions and operational autonomy.
        </p>
        <p className="cs-tags" data-reveal>
          Clothing E-Commerce <i aria-hidden="true">&middot;</i> Video Product Storytelling <i aria-hidden="true">&middot;</i> Delivery Transparency <i aria-hidden="true">&middot;</i> Custom Admin Panel <i aria-hidden="true">&middot;</i> UI/UX Design
        </p>

        {/* Quick Facts Metadata Grid */}
        <dl className="cs-meta-grid" data-reveal>
          <div className="cs-meta-item">
            <dt>Client</dt>
            <dd>Nand Bhabhi Clothing</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Role &amp; Focus</dt>
            <dd>UI/UX Design, Strategy &amp; Interaction Architecture</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Key Deliverables</dt>
            <dd>Storefront Design, Video Storytelling, Delivery Tracker &amp; Admin Panel</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Approach</dt>
            <dd>Reference-led foundation &bull; Value-add feature proposals</dd>
          </div>
        </dl>

        {/* Interactive Postcard Slider Gallery */}
        <div className="cs-gallery-wrap" data-reveal>
          <div className="cs-gallery-label">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f5e211' }} />
            Interactive Postcard Gallery &mdash; Slide through key design deliverables
          </div>
          <PostcardSlider slides={NAND_BHABHI_SLIDES} projectName="Nand Bhabhi E-commerce" />
        </div>

        {/* Chapter 01: Project Overview */}
        <Block id="nb-overview" label="Project overview">
          <p>
            Nand Bhabhi is a specialized clothing e-commerce destination created around the client's visual reference and core commercial goals. The client sought a modern online presence for festive ethnic wear, celebratory sarees, and designer bridal collections.
          </p>
          <p>
            My goal was not simply to replicate a static mockup. I treated the reference image as the starting baseline, proposing three foundational innovations: <strong>sensory video storytelling</strong> for high-value garments, <strong>transparent animated delivery tracking</strong> to build customer trust, and a <strong>developer-free admin panel</strong> for everyday visual autonomy.
          </p>
        </Block>

        {/* Chapter 02: The Strategic Challenge */}
        <Block id="nb-challenge" label="The challenge">
          <p className="cs-lead">
            Translating visual inspiration into a distinctive, self-manageable shopping experience.
          </p>
          <ul className="cs-cards">
            <li>
              <span>01 &bull; THE FIDELITY CHALLENGE</span>
              <h4>Bridging Reference and Usability</h4>
              <p>
                The client arrived with a strong visual reference. The challenge was to maintain that aesthetic charm while ensuring responsive touch targets, snappy mobile load times, and intuitive category paths.
              </p>
            </li>
            <li>
              <span>02 &bull; THE SENSORY GAP</span>
              <h4>Overcoming Static Image Limitations</h4>
              <p>
                Ethnic couture relies on textile weight, zari embroidery shimmer, and fabric drape. Standard flat product photos consistently fail to convey what makes a handloom garment worth its price point.
              </p>
            </li>
            <li>
              <span>03 &bull; THE OPERATIONAL DEPENDENCY</span>
              <h4>Eliminating Developer Bottlenecks</h4>
              <p>
                Fashion retail moves with festive calendars and wedding seasons. Forcing the client to contact a developer every time a banner needed updating or a seasonal coupon launched would create friction and delayed sales.
              </p>
            </li>
          </ul>
        </Block>

        {/* Chapter 03: My Approach */}
        <Block id="nb-approach" label="My approach">
          <p className="cs-lead">
            Treating the reference as the starting point, not the ceiling.
          </p>
          <p>
            I structured the project around three interconnected pillars:
          </p>
          <div className="cs-metric-row">
            <div className="cs-metric-badge">
              <span className="cs-metric-num">01</span>
              <span className="cs-metric-label"><strong>Storytelling:</strong> Video-led arrival reels to showcase fabric &amp; stitching detail</span>
            </div>
            <div className="cs-metric-badge">
              <span className="cs-metric-num">02</span>
              <span className="cs-metric-label"><strong>Transparency:</strong> Live package tracker with courier distance &amp; dispatch stages</span>
            </div>
            <div className="cs-metric-badge">
              <span className="cs-metric-num">03</span>
              <span className="cs-metric-label"><strong>Autonomy:</strong> 1-click theme switcher &amp; self-serve promotional controls</span>
            </div>
          </div>
        </Block>

        {/* Chapter 04: Key Innovations Deep Dive */}
        <Block id="nb-features" label="Key innovations &amp; design decisions">
          <div className="cs-feature-section">
            
            {/* Feature 01 */}
            <article className="cs-feature-card">
              <div className="cs-feature-info">
                <span className="cs-feature-tag">Innovation 01</span>
                <h4>The Film Library: New Arrivals That Move</h4>
                <p>
                  Instead of presenting new arrivals as ordinary photo grids, I introduced a dedicated video-first presentation layer called <em>The Film Library</em>.
                </p>
                <ul className="cs-feature-bullets">
                  <li><strong>Tactile inspection:</strong> Short 5-second cinematic loops showing micro-details: gold threadwork, sequin reflection, and border hems.</li>
                  <li><strong>Movement in action:</strong> Shows how lehengas twirl and how sarees drape when walking, eliminating customer hesitation.</li>
                  <li><strong>Direct cart addition:</strong> Each video card includes an instantaneous 'See it. Love it. Shop it.' action hook.</li>
                </ul>
              </div>
              <figure className="cs-feature-art">
                <img
                  src="/work/new-arrival.webp"
                  alt="The Film Library - Video-led product presentation for Nand Bhabhi"
                  loading="lazy"
                />
                <figcaption>&ldquo;The Film Library&rdquo; &mdash; Video vignettes highlighting garment movement and craftsmanship.</figcaption>
              </figure>
            </article>

            {/* Feature 02 */}
            <article className="cs-feature-card reverse">
              <div className="cs-feature-info">
                <span className="cs-feature-tag">Innovation 02</span>
                <h4>Animated Delivery Tracking: Radical Transparency</h4>
                <p>
                  Ethnic wear purchases are frequently tied to critical deadlines&mdash;family weddings, poojas, and festive celebrations. Anxiety around delivery dates is the #1 reason for cart abandonment.
                </p>
                <ul className="cs-feature-bullets">
                  <li><strong>Packaging animation:</strong> Visual confirmation when garments are folded, boxed, and sealed at the atelier.</li>
                  <li><strong>Live remaining distance:</strong> An animated courier icon tracks physical kilometers remaining to the doorstep.</li>
                  <li><strong>Express vs Standard clarity:</strong> Clear visual badges eliminate guesswork regarding transit speeds.</li>
                </ul>
              </div>
              <figure className="cs-feature-art">
                <img
                  src="/work/nand-bhabhi-delivery.webp"
                  alt="Animated Delivery Status concept showing route and distance information"
                  loading="lazy"
                />
                <figcaption>Interactive live delivery journey concept with courier transit and distance milestones.</figcaption>
              </figure>
            </article>

            {/* Feature 03 */}
            <article className="cs-feature-card">
              <div className="cs-feature-info">
                <span className="cs-feature-tag">Innovation 03</span>
                <h4>Storefront Control Center: 1-Click Client Autonomy</h4>
                <p>
                  I architected the back-office experience so the client could command their own storefront visually without touching a line of code or filing support tickets.
                </p>
                <ul className="cs-feature-bullets">
                  <li><strong>Seasonal theme switcher:</strong> Shift the entire store palette in one click between Festive Crimson, Royal Sapphire, and Emerald Classic.</li>
                  <li><strong>Instant banner builder:</strong> Upload campaign photography, edit headline copy, and activate discount pills in seconds.</li>
                  <li><strong>Independent store management:</strong> Lowers operational overhead while allowing rapid marketing campaigns.</li>
                </ul>
              </div>
              <figure className="cs-feature-art">
                <img
                  src="/work/nand-bhabhi-admin.webp"
                  alt="Nand Bhabhi Storefront Control Center admin panel"
                  loading="lazy"
                />
                <figcaption>Storefront Control Center: 1-click theme presets and live banner customizer.</figcaption>
              </figure>
            </article>

          </div>
        </Block>

        {/* Chapter 05: Visual Merchandising */}
        <Block id="nb-merchandising" label="Merchandising &amp; taxonomy">
          <div className="cs-sidebyside">
            <div className="cs-sidebyside-text">
              <p>
                A high-converting e-commerce storefront requires effortless navigation. I structured the primary taxonomy into intuitive entry points tailored for diverse customer intents:
              </p>
              <p>
                Shoppers can browse by garment category, seasonal theme (e.g. Navratri Special, Bridal Trousseau), or price range, ensuring a friction-free path from discovery to checkout.
              </p>
            </div>
            <figure className="cs-feature-art cs-sidebyside-img">
              <img
                src="/work/nand-bhabhi-categories.webp"
                alt="Curated category navigation cards for Nand Bhabhi"
                loading="lazy"
              />
              <figcaption>Curated collection cards: Sarees, Kurtis, Lehengas, Anarkali &amp; Suits, Men's Wear, and Kids Wear.</figcaption>
            </figure>
          </div>
        </Block>

        {/* Chapter 06: The Outcome */}
        <Block id="nb-outcome" label="The outcome">
          <p className="cs-lead">
            A client-focused clothing e-commerce experience that turned a visual prompt into a living, high-conversion flagship.
          </p>
          <p>
            The final result balanced the client's original design expectations with practical e-commerce enhancements that elevate the customer shopping experience. By pairing video storytelling with transparent delivery tracking and autonomous store controls, the platform serves both the shopper and the business owner seamlessly.
          </p>
        </Block>

        {/* Chapter 07: Key Takeaway */}
        <div className="cs-quote-card" data-reveal>
          <blockquote className="cs-quote-text">
            Good design is not just about recreating what a client sees. It is about understanding what they need and finding thoughtful ways to make the experience work better.
          </blockquote>
          <span className="cs-quote-author">M. Shri Lakshmi &mdash; Design Reflection</span>
        </div>

      </div>
    </section>
  );
}
