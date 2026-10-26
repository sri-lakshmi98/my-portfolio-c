import './case-study.css';
import { Label, Wave } from './Sections';

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
          Nand Bhabhi
        </p>
        <h2 id="cs-title" className="s-title cs-title" data-reveal>
          Clothing E-commerce <em>Website</em>
        </h2>
        <p className="cs-lead" style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '1.25rem', color: '#f5f1e4' }} data-reveal>
          A familiar vision, reimagined with thoughtful interactions.
        </p>
        <p className="cs-tags" data-reveal>
          Clothing E-commerce <i aria-hidden="true">&middot;</i> Product Storytelling <i aria-hidden="true">&middot;</i> Delivery Transparency <i aria-hidden="true">&middot;</i> Store Management <i aria-hidden="true">&middot;</i> UI/UX Design
        </p>

        <figure className="cs-shot" data-reveal style={{ marginTop: '2.5rem' }}>
          <img
            src="/work/nand-bhabhi.jpg"
            width="1400"
            height="850"
            loading="lazy"
            alt="Nand Bhabhi Clothing E-commerce Website home page featuring festive ethnic wear, sarees, lehengas, and trending collections"
          />
        </figure>

        <Block id="nb-overview" label="Project overview">
          <p>
            Nand Bhabhi is a clothing e-commerce website created around the client's visual reference and business requirements. My goal was to recreate the desired website experience while introducing thoughtful features that make browsing products, understanding delivery, and managing the storefront more engaging and convenient.
          </p>
          <p>
            Rather than stopping at the reference, I proposed additional ideas to help the website communicate the uniqueness of its clothing and provide the client with greater flexibility in managing the store.
          </p>
        </Block>

        <Block id="nb-challenge" label="The challenge">
          <p className="cs-lead">
            Translating visual direction into a distinctive, self-manageable shopping experience.
          </p>
          <p>
            The client wanted a clothing e-commerce website that closely followed a provided reference image. The challenge was to translate that visual direction into a usable shopping experience while identifying opportunities to make the website more distinctive.
          </p>
          <p>
            I also wanted to ensure that managing the store would not require the client to depend on a developer for every small visual update.
          </p>
        </Block>

        <Block id="nb-approach" label="My approach">
          <p className="cs-lead">Treating the reference as the starting point, not the limit.</p>
          <p>
            I built the website around the client's preferred design and proposed enhancements focused on three key areas: product storytelling, delivery transparency, and straightforward store management.
          </p>
        </Block>

        <Block id="nb-features" label="Key features &amp; design decisions">
          <ol className="cs-steps">
            <li>
              <h4>
                <span aria-hidden="true">01</span> New arrivals that tell a story
              </h4>
              <p>
                Instead of presenting new arrivals as ordinary product images, I proposed a video-led product presentation.
              </p>
              <p>
                The concept highlights the distinctive details of each garment, including close-up views of stitching, fabric, and craftsmanship. This creates a richer product-viewing experience and helps customers appreciate details that static images may not communicate as effectively.
              </p>
            </li>
            <li>
              <h4>
                <span aria-hidden="true">02</span> An engaging delivery experience
              </h4>
              <p>
                I introduced an animated delivery-status concept that visually follows the package from dispatch through its journey to the customer.
              </p>
              <p>The experience incorporates:</p>
              <ul className="cs-list">
                <li>A packaging and courier-shipment animation.</li>
                <li>Delivery-distance information.</li>
                <li>A visual indication of the selected delivery option: Standard or Express.</li>
              </ul>
              <p>
                The goal was to make delivery information easier to understand while adding a distinctive interaction to the shopping experience.
              </p>
            </li>
            <li>
              <h4>
                <span aria-hidden="true">03</span> A more flexible admin panel
              </h4>
              <p>
                I designed the admin experience to give the client greater control over the storefront's visual presentation.
              </p>
              <p>
                The client can adjust website templates and update banners with ease, allowing them to refresh the store's appearance without needing a developer for every routine change.
              </p>
              <p>
                This approach prioritizes flexibility, ease of management, and greater day-to-day independence.
              </p>
            </li>
          </ol>
        </Block>

        <Block id="nb-outcome" label="The outcome">
          <p>
            The result was a client-focused clothing e-commerce experience that followed the requested visual direction while incorporating ideas beyond the original reference.
          </p>
          <p>
            The project brought together product storytelling, animated delivery information, and flexible storefront management—balancing the client's design expectations with opportunities to improve the overall experience.
          </p>
        </Block>

        <Block id="nb-takeaway" label="My key takeaway">
          <blockquote style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#fff', fontStyle: 'italic', borderLeft: '3px solid #e8453c', paddingLeft: '1.25rem', margin: '0 0 1rem' }}>
            &ldquo;Good design is not just about recreating what a client sees. It is about understanding what they need and finding thoughtful ways to make the experience work better.&rdquo;
          </blockquote>
        </Block>

        <Block id="nb-details" label="Project details">
          <dl className="cs-facts">
            <div>
              <dt>Project</dt>
              <dd>Nand Bhabhi — Clothing E-commerce Website</dd>
            </div>
            <div>
              <dt>Core Deliverables</dt>
              <dd>Storefront design, video-led product showcase, animated delivery tracking, flexible admin panel</dd>
            </div>
            <div>
              <dt>Specialization</dt>
              <dd>Sarees, ethnic wear, festive fashion, and everyday kurtis</dd>
            </div>
            <div>
              <dt>Strategic Focus</dt>
              <dd>Storytelling, post-purchase transparency, client autonomy in store management</dd>
            </div>
          </dl>
        </Block>

        <div className="cs-end" data-reveal>
          <a className="cs-live" href="#work">
            &larr; Back to all selected work
          </a>
          <p>A familiar vision, reimagined with thoughtful interactions.</p>
        </div>
      </div>
    </section>
  );
}
