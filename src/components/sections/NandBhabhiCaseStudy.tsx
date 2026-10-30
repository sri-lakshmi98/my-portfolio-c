import './case-study.css';
import { Label, Wave } from './Sections';
import { PostcardSlider } from './PostcardSlider';
import { Block, Bullets, DataTable, Figure, LiveLink } from './CaseStudyParts';
import { NAND_BHABHI_LIVE, NAND_BHABHI_SLIDES } from './workSlides';

// Sampled from the storefront and dashboard screenshots.
const PALETTE = [
  { name: 'Warm neutrals', color: '#f0e8d8' },
  { name: 'Burgundy accents', color: '#581828' },
  { name: 'Dark surfaces', color: '#101018' },
];

const JOURNEY = ['Product discovery', 'Content management', 'Inventory', 'Fulfilment', 'Delivery'];

export function NandBhabhiCaseStudy({ page = false }: { page?: boolean }) {
  return (
    <section id="case-study-nand-bhabhi" className={`s-sec s-dark cs ${page ? 'cs-page' : ''}`} aria-labelledby="cs-title">
      {!page && <Wave fill="#f5f1e4" flip />}
      <div className="s-wrap cs-wrap">
        <Label light>Case study</Label>
        <p className="cs-client" data-reveal>
          NANADHBABBHI
        </p>
        <h2 id="cs-title" className="s-title cs-title cs-title-long" data-reveal>
          Designing a Connected <em>Fashion Commerce Experience</em>
        </h2>

        <div className="cs-top" data-reveal>
          <LiveLink href={NAND_BHABHI_LIVE}>View live website</LiveLink>
        </div>

        {/* Quick Facts Metadata Grid */}
        <dl className="cs-meta-grid" data-reveal>
          <div className="cs-meta-item">
            <dt>Project</dt>
            <dd>E-commerce Website &amp; Custom Admin Dashboard</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Industry</dt>
            <dd>Ethnic Fashion &amp; Apparel</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Role</dt>
            <dd>UI/UX Designer</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Focus</dt>
            <dd>E-commerce UX &middot; Video Commerce &middot; Dashboard Design &middot; Inventory &middot; Order Fulfilment</dd>
          </div>
        </dl>

        {/* Interactive Postcard Slider Gallery */}
        <div className="cs-gallery-wrap" data-reveal>
          <div className="cs-gallery-label">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f5e211' }} />
            Interactive Postcard Gallery &mdash; Slide through key design deliverables
          </div>
          <PostcardSlider slides={NAND_BHABHI_SLIDES} projectName="NANADHBABBHI" />
        </div>

        <Block id="nb-overview" label="01. Project Overview">
          <p>NANADHBABBHI is an ethnic-fashion e-commerce concept developed from a client-provided website reference.</p>
          <p>Rather than simply recreating the reference, I explored ways to connect fashion discovery, online shopping and store management through two complementary experiences:</p>
          <Bullets
            items={[
              <><strong>Customer storefront:</strong> An editorial shopping experience with video-led discovery and interactive product exploration.</>,
              <><strong>Admin dashboard:</strong> A centralised interface for managing products, inventory, orders, promotional content and delivery tracking.</>,
            ]}
          />
          <p>The goal was to create a shopping experience for customers while giving the business owner greater control over store operations.</p>
        </Block>

        <Block id="nb-challenge" label="02. The Challenge">
          <p>Traditional fashion websites rely heavily on static product images, while store owners must manage inventory, orders, promotions and fulfilment separately.</p>
          <p>The design needed to bridge these gaps by:</p>
          <Bullets
            items={[
              'Making fashion discovery more engaging.',
              'Connecting visual inspiration directly to products.',
              'Simplifying storefront and inventory management.',
              'Organising orders and fulfilment workflows.',
              'Extending the brand experience into delivery tracking.',
            ]}
          />
        </Block>

        <Block id="nb-customer" label="03. Customer-Facing Experience">
          <h4 className="cs-h4 first">Editorial Fashion Storefront</h4>
          <p>A premium visual identity combines warm ivory backgrounds, deep burgundy accents, elegant typography and large fashion imagery.</p>
          <Figure
            src="/work/nand-bhabhi-hero.webp"
            alt="NANADHBABBHI home page with the headline Ethnic Wear for Every You beside a model in a pink and red saree"
            caption="The storefront homepage."
          />
          <p>Structured collections, product details, size and colour selection, pricing and purchasing actions create a consistent shopping experience.</p>
          <Figure
            src="/work/nand-bhabhi-product.webp"
            alt="Blush Pink Anarkali Suit product page with size, colour and quantity selection"
            caption="A product page with size, colour and quantity selection."
          />

          <h4 className="cs-h4">Video-Led Fashion Discovery</h4>
          <p>Fashion videos showcase garments in motion, helping customers explore fabric movement, styling and appearance beyond static photography.</p>
          <p>Product tagging connects videos directly to catalogue items, creating a more direct path from inspiration to shopping.</p>
          <Figure
            src="/work/nand-bhabhi-new-arrivals.webp"
            alt="The New Arrivals page with a tagged fashion video beside a Shop the Look product list"
            caption="A tagged fashion video with Shop the Look alongside."
          />

          <h4 className="cs-h4">Shop the Look</h4>
          <p>Customers can explore coordinated products within a single fashion story, connecting related items and encouraging visual product discovery.</p>
        </Block>

        <Block id="nb-admin" label="04. Custom Admin Dashboard">
          <p>The dashboard was designed to bring essential store-management workflows into one interface.</p>

          <h4 className="cs-h4">Store Overview</h4>
          <p>Operational summaries highlight revenue, average order value, pending orders, shipments, low-stock products and return requests.</p>
          <Figure
            src="/work/nand-bhabhi-dashboard.webp"
            alt="Dark admin dashboard with revenue summary, a 14-day revenue chart and a Needs attention panel"
            caption="The store overview and its Needs attention area."
          />
          <p>An attention area helps administrators identify activities requiring action.</p>

          <h4 className="cs-h4">Storefront &amp; Video Management</h4>
          <p>Dedicated workflows support promotional image updates and fashion-video organisation.</p>
          <p>Video management includes publishing states, product tagging and Shop the Look content organisation.</p>
          <Figure
            src="/work/nand-bhabhi-videos.webp"
            alt="Admin Fashion videos screen with status filters and published video cards"
            caption="Fashion video management, with status filters above the library."
          />
          <p>The intention is to give the store owner more control over content and routine storefront updates.</p>

          <h4 className="cs-h4">Inventory &amp; Order Management</h4>
          <p>The inventory interface includes product SKUs, size-wise stock quantities, stock indicators, search and filtering.</p>
          <Figure
            src="/work/nand-bhabhi-inventory.webp"
            alt="Admin Inventory screen listing products with SKU, stock by size, total and stock level"
            caption="Inventory with stock tracked per size."
          />
          <p>Order-management views organise fulfilment activities, including pending orders, shipments and returns.</p>
          <p>These workflows are designed to make stock visibility and operational priorities easier to manage.</p>
        </Block>

        <Block id="nb-tracking" label="05. Configurable Delivery Tracking">
          <p>One of the project's distinctive features is an admin interface for customising the customer-facing tracking experience.</p>

          <h4 className="cs-h4">Tracking Widget Configuration</h4>
          <p>Administrators can enable or disable the tracking widget and choose delivery icon styles, including parcels, trucks, vans, motorbikes and air cargo.</p>

          <h4 className="cs-h4">Standard &amp; Express Delivery</h4>
          <p>Side-by-side previews distinguish standard and express delivery through separate status indicators, estimated arrival information and route visualisations.</p>

          <h4 className="cs-h4">Interactive Map Preview</h4>
          <p>The tracking interface brings together origin and destination markers, route visualisation, delivery vehicle representation, location labels and status indicators.</p>
          <p>Administrators can explore different destinations and shipment states through the preview.</p>
          <p className="cs-note"><strong>Design objective:</strong> Make delivery tracking more visual and give the business greater control over the post-purchase experience.</p>
        </Block>

        <Block id="nb-analytics" label="06. Video Analytics">
          <p>A dedicated analytics overview brings video-related information into one place, including total videos, published videos, product hotspots and shoppable content.</p>
          <Figure
            src="/work/nand-bhabhi-analytics.webp"
            alt="Admin Video analytics screen with summary cards for films, hotspots and shoppable pieces"
            caption="The video analytics overview."
          />
          <p>More advanced metrics, such as watch time, click-through rates and revenue attribution, would require an appropriate live analytics integration.</p>
        </Block>

        <Block id="nb-system" label="07. Visual Design System">
          <DataTable
            head={['Experience', 'Visual system']}
            rows={[
              ['Storefront', 'Warm neutrals, burgundy accents, editorial typography and prominent fashion imagery create a premium shopping identity.'],
              ['Admin Dashboard', 'Dark surfaces, structured tables, clear status indicators and consistent information hierarchy prioritise operational clarity.'],
            ]}
          />
          <ul className="cs-palette" aria-label="Colour palette">
            {PALETTE.map((p) => (
              <li key={p.name}>
                <span style={{ background: p.color }} aria-hidden="true" />
                {p.name}
              </li>
            ))}
          </ul>
          <p>The two visual systems serve different needs while remaining part of one connected commerce experience.</p>
        </Block>

        <Block id="nb-outcome" label="08. Outcome">
          <p>The project brings together a customer storefront and an administrative experience featuring:</p>
          <Bullets
            items={[
              'Editorial fashion shopping and structured product discovery.',
              'Video-led shopping with product tagging.',
              'Shop the Look product exploration.',
              'Storefront content customisation.',
              'Size-based inventory and order management.',
              'Fashion-video management and analytics overview.',
              'Configurable delivery tracking.',
              'Standard and Express delivery previews.',
              'Map-based parcel visualisation.',
            ]}
          />
          <p>The central design outcome is a connected commerce experience that considers both the customer's shopping journey and the business owner's operational needs.</p>
        </Block>

        <Block id="nb-learning" label="Key Learning">
          <p>This project reinforced that e-commerce design extends beyond the storefront. Product discovery, content management, inventory, fulfilment and delivery all contribute to the overall experience.</p>
          <ol className="cs-flow" aria-label="Connected workflows">
            {JOURNEY.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>By exploring these connected workflows, I developed a broader perspective on designing digital products that balance customer engagement with business functionality.</p>
        </Block>

        <div className="cs-quote-card" data-reveal>
          <blockquote className="cs-quote-text">From fashion discovery to final delivery &mdash; one connected commerce experience.</blockquote>
        </div>
      </div>
    </section>
  );
}
