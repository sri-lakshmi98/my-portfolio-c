import './case-study.css';
import { Label, Wave } from './Sections';
import { PostcardSlider } from './PostcardSlider';
import { Block, Bullets, Chips, DataTable, Figure, LiveLink } from './CaseStudyParts';
import { NAND_BHABHI_LIVE, NAND_BHABHI_SLIDES } from './workSlides';

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
          Building a Connected Fashion Commerce Experience <em>Through Video Shopping, Store Customisation &amp; Intelligent Store Management</em>
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
            <dd>UI/UX Design</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Focus</dt>
            <dd>E-commerce UX, Video Commerce, Dashboard Design, Inventory Management, Order Fulfilment &amp; Delivery Tracking</dd>
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
          <p>NANADHBABBHI is an ethnic fashion e-commerce experience designed to bring together visual storytelling, product discovery and efficient store management.</p>
          <p>The project initially started with a client-provided website reference. Rather than simply recreating the existing design, I explored opportunities to extend the experience into a more comprehensive commerce ecosystem.</p>
          <p>This led to the development of two interconnected experiences:</p>
          <Bullets
            items={[
              <><strong>Customer-facing storefront:</strong> A premium shopping experience for discovering ethnic fashion, exploring collections, watching fashion videos and purchasing products.</>,
              <><strong>Custom administration dashboard:</strong> A centralised management experience for controlling products, inventory, orders, promotional content, fashion videos and delivery tracking.</>,
            ]}
          />
          <p>The objective was to create an experience that serves both sides of e-commerce: making shopping more engaging for customers while giving the business owner greater control over everyday operations.</p>
        </Block>

        <Block id="nb-problem" label="02. The Problem">
          <p>Fashion is inherently visual. Customers often want to understand how a garment looks when worn, how its fabric moves, how embroidery appears and how different pieces work together.</p>
          <p>Traditional e-commerce interfaces primarily communicate these details through static product photography and descriptions, leaving a gap between discovering a product online and experiencing it in real life.</p>
          <p>For the business owner, the challenge extends beyond product listings. Managing inventory, updating promotional content, processing orders and communicating delivery information requires multiple operational workflows.</p>
          <p>The design needed to address these challenges without making either experience unnecessarily complicated.</p>
          <h4 className="cs-h4">Key challenges identified:</h4>
          <Bullets
            items={[
              'Limited product storytelling through static imagery.',
              'Disconnect between fashion inspiration and product discovery.',
              'Dependence on developers for routine storefront updates.',
              'Complexity in managing size-based inventory.',
              'Lack of a consolidated operational overview.',
              'Need for a more engaging post-purchase delivery experience.',
            ]}
          />
        </Block>

        <Block id="nb-approach" label="03. The Design Approach">
          <p>I approached NANADHBABBHI as a connected commerce ecosystem rather than treating the storefront and admin dashboard as independent interfaces.</p>
          <p>The customer journey was structured around:</p>
          <p className="cs-lead">Discover &rarr; Explore &rarr; Evaluate &rarr; Purchase &rarr; Track</p>
          <p>The business workflow was structured around:</p>
          <p className="cs-lead">Create &rarr; Manage &rarr; Publish &rarr; Fulfil &rarr; Monitor</p>
          <p>This allowed the design to extend beyond the conventional e-commerce experience and address the operational systems supporting the entire shopping journey.</p>
        </Block>

        <Block id="nb-customer" label="04. The Customer-Facing Experience">
          <h4 className="cs-h4 first">4.1 Editorial Fashion Storefront</h4>
          <p>The storefront establishes a premium ethnic-fashion identity through warm ivory backgrounds, deep burgundy accents, elegant typography and large editorial imagery.</p>
          <p>The homepage introduces the brand through a prominent visual hero, followed by product categories, collections and shopping highlights.</p>
          <Figure
            src="/work/nand-bhabhi-hero.webp"
            alt="NANADHBABBHI home page with the headline Ethnic Wear for Every You beside a model in a pink and red saree"
            caption="The homepage hero: warm ivory, deep burgundy and large editorial imagery."
          />
          <p>Product detail pages balance visual presentation with practical purchasing interactions, including:</p>
          <Bullets
            items={[
              'Product imagery and descriptions.',
              'Pricing and discount information.',
              'Size and colour selection.',
              'Quantity controls.',
              'Add-to-cart and purchasing actions.',
            ]}
          />
          <Figure
            src="/work/nand-bhabhi-product.webp"
            alt="Blush Pink Anarkali Suit product page with size, colour and quantity selection"
            caption="A product detail page with size, colour and quantity controls."
          />
          <Figure
            src="/work/nand-bhabhi-account.webp"
            alt="Customer account overview page with a side menu and counts for orders, wishlist and addresses"
            caption="The customer account overview, with orders, tracking, wishlist and addresses."
          />
          <p className="cs-note"><strong>Design rationale:</strong> Create an editorial shopping environment that communicates the personality of the brand while keeping purchasing decisions straightforward.</p>

          <h4 className="cs-h4">4.2 Video-Led Fashion Discovery</h4>
          <p>One of the major extensions to the original concept was the introduction of a dedicated fashion-video experience.</p>
          <p>Fashion videos allow customers to explore garments in motion, offering a richer understanding of styling, fabric movement and overall appearance.</p>
          <p>The experience goes beyond conventional video galleries through product tagging, connecting individual fashion videos directly with catalogue products.</p>
          <Figure
            src="/work/nand-bhabhi-new-arrivals.webp"
            alt="The New Arrivals page with a tagged fashion video beside a Shop the Look product list"
            caption="The New Arrivals: product tags on the video, with Shop the Look alongside."
          />

          <h4 className="cs-h4">4.3 Shop the Look</h4>
          <p>The Shop the Look experience connects multiple products within a single fashion story.</p>
          <p>Instead of treating every product as an isolated listing, customers can explore coordinated pieces and discover related items through the same visual experience.</p>
          <p className="cs-note"><strong>Design rationale:</strong> Bring inspiration and shopping closer together by turning fashion content into a product-discovery channel.</p>
        </Block>

        <Block id="nb-admin" label="05. The Admin Dashboard &mdash; A Complete Store Management Experience">
          <p>The administrative dashboard was designed to provide the store owner with greater control over the different aspects of running an online fashion business.</p>
          <p>Rather than limiting the dashboard to basic product and order management, the experience introduces dedicated workflows for content, inventory, fulfilment and delivery customisation.</p>

          <h4 className="cs-h4">5.1 Dashboard &amp; Operational Overview</h4>
          <p>The main dashboard brings important business information into one place.</p>
          <p>It includes operational summaries such as revenue, average order value and orders requiring attention.</p>
          <Figure
            src="/work/nand-bhabhi-dashboard.webp"
            alt="Dark admin dashboard with revenue summary, a 14-day revenue chart and a Needs attention panel"
            caption="The main dashboard, with operational summaries and a dedicated attention area."
          />
          <p>A dedicated attention area highlights:</p>
          <Bullets
            items={[
              'Orders awaiting confirmation.',
              'Orders pending shipment.',
              'Low-stock products.',
              'Pending return requests.',
              'Upcoming sales and operational priorities.',
            ]}
          />
          <p className="cs-note"><strong>Design rationale:</strong> Help administrators identify important business activities quickly instead of navigating through multiple sections to understand what needs attention.</p>

          <h4 className="cs-h4">5.2 Storefront Customisation</h4>
          <p>The client required flexibility to adapt the storefront to different collections, campaigns and seasonal promotions.</p>
          <p>I explored an administrative customisation workflow that allows selected visual content to be updated through image insertion.</p>
          <p>This gives the store owner more control over the website's presentation and reduces dependency on developers for routine promotional changes.</p>

          <h4 className="cs-h4">5.3 Fashion Video Management</h4>
          <p>The Fashion Videos module introduces a dedicated content-management workflow.</p>
          <p>Administrators can upload and organise fashion videos while tracking their publishing status.</p>
          <Figure
            src="/work/nand-bhabhi-videos.webp"
            alt="Admin Fashion videos screen with status filters and published video cards"
            caption="The Fashion Videos module, with status filters above the video library."
          />
          <p>The interface supports the following content states:</p>
          <Chips items={['Published', 'Scheduled', 'Draft', 'Processing', 'Archived', 'Upload Failed']} />
          <p>A separate product-tagging workflow connects videos with catalogue products, while Shop the Look helps organise related products into a cohesive shopping experience.</p>

          <h4 className="cs-h4">5.4 Inventory Management</h4>
          <p>The inventory module focuses on providing clear visibility into product availability.</p>
          <p>Unlike a basic product list, the interface considers size-based inventory, allowing administrators to monitor stock at a more granular level.</p>
          <Figure
            src="/work/nand-bhabhi-inventory.webp"
            alt="Admin Inventory screen listing products with SKU, stock by size, total and stock level"
            caption="The Inventory module, with stock tracked per size."
          />
          <p>Key interface elements include:</p>
          <Bullets
            items={[
              'Product SKUs.',
              'Size-wise stock quantities.',
              'Total inventory.',
              'Stock-level indicators.',
              'Product search and filtering.',
              'Inventory update workflows.',
            ]}
          />
          <p>The intended operational workflow also supports automatic stock deductions when orders are placed.</p>
          <p className="cs-note"><strong>Design rationale:</strong> Make inventory information easier to understand and act upon, particularly when products are available in multiple sizes.</p>

          <h4 className="cs-h4">5.5 Order Management &amp; Fulfilment</h4>
          <p>Order management connects the shopping experience with the operational activities that follow a purchase.</p>
          <p>The dashboard highlights orders requiring confirmation and shipment, helping administrators prioritise fulfilment activities.</p>
          <p>The overall workflow also considers returns and other post-purchase operational requirements.</p>
          <p className="cs-note"><strong>Design rationale:</strong> Make the transition from order placement to fulfilment easier to monitor and manage.</p>
        </Block>

        <Block id="nb-tracking" label="06. Configurable Delivery Tracking &mdash; Extending the Post-Purchase Experience">
          <p>One of the distinctive extensions to the administrative dashboard is the Tracking Widget configuration module.</p>
          <p>Delivery tracking is often treated as a standard, fixed interface. For NANADHBABBHI, I explored making this experience configurable from the admin dashboard.</p>
          <p>The objective was to give the store owner control over how customers experience delivery tracking while maintaining the visual identity of the brand.</p>

          <h4 className="cs-h4">6.1 Tracking Widget Configuration</h4>
          <p>Administrators can enable or disable the tracking widget on the customer's Track Order page.</p>
          <p>The configuration interface also provides multiple delivery icon options:</p>
          <Chips items={['Parcel', 'Truck', 'Delivery Van', 'Motorbike', 'Scooter', 'Air Cargo']} />
          <p>This allows the delivery visualisation to represent different transportation methods.</p>

          <h4 className="cs-h4">6.2 Store Identity &amp; ETA</h4>
          <p>The Store &amp; ETA configuration section provides controls for the store name and delivery-related presentation.</p>
          <p>The store identity is reflected within the tracking experience, keeping the brand visible beyond the checkout process.</p>

          <h4 className="cs-h4">6.3 Standard vs Express Delivery</h4>
          <p>A particularly important part of this module is the side-by-side live preview.</p>
          <p>The administrator can compare two delivery experiences:</p>
          <div className="cs-compare">
            <div>
              <h5>Standard Delivery</h5>
              <Bullets
                items={[
                  'Regular handling.',
                  'Standard-speed status indicator.',
                  'Estimated arrival information.',
                  'Map-based route visualisation.',
                ]}
              />
            </div>
            <div>
              <h5>Express Delivery</h5>
              <Bullets
                items={[
                  'Priority handling.',
                  'Express-speed status indicator.',
                  'Separate estimated arrival information.',
                  'Map-based route visualisation.',
                ]}
              />
            </div>
          </div>
          <p>Both experiences display the delivery journey between the origin and destination, allowing the administrator to understand how different delivery options will appear to customers.</p>

          <h4 className="cs-h4">6.4 Map-Based Tracking Preview</h4>
          <p>The tracking interface uses a geographical map to represent the parcel's journey.</p>
          <p>It incorporates:</p>
          <Bullets
            items={[
              'Origin and destination markers.',
              'Route visualisation.',
              'Delivery vehicle representation.',
              'Location labels.',
              'Map zoom controls.',
              'Delivery status indicators.',
            ]}
          />
          <p>The preview also allows administrators to change the destination and shipment status to examine different tracking scenarios.</p>
          <p className="cs-note"><strong>Design rationale:</strong> Extend the brand experience beyond checkout by making delivery tracking more visual, configurable and informative.</p>
          <p>The tracking module demonstrates how administrative customisation can directly influence the customer's post-purchase experience.</p>
        </Block>

        <Block id="nb-analytics" label="07. Video Analytics &amp; Business Insights">
          <p>The Video Analytics dashboard brings together content-related information to provide a broader overview of the store's video-commerce activities.</p>
          <p>The interface includes summary indicators for:</p>
          <Chips items={['Total videos.', 'Published videos.', 'Product hotspots.', 'Shoppable content.']} />
          <Figure
            src="/work/nand-bhabhi-analytics.webp"
            alt="Admin Video analytics screen with summary cards for films, hotspots and shoppable pieces"
            caption="The Video Analytics dashboard and its summary indicators."
          />
          <p>The broader objective is to connect content management with business insights, helping administrators understand how fashion content is organised and connected to the product catalogue.</p>
          <p>More advanced measurements, such as watch time, click-through rates and revenue attribution, require a live analytics integration and are therefore treated as integration-dependent capabilities.</p>
        </Block>

        <Block id="nb-system" label="08. Visual Design System">
          <p>The project uses two complementary visual directions to serve different user needs.</p>
          <div className="cs-compare">
            <div>
              <h5>Storefront</h5>
              <Bullets
                items={[
                  'Warm ivory and neutral backgrounds.',
                  'Deep burgundy accents.',
                  'Editorial serif typography.',
                  'Large fashion imagery.',
                  'Generous whitespace.',
                  'Fine borders and restrained iconography.',
                ]}
              />
            </div>
            <div>
              <h5>Administration Dashboard</h5>
              <Bullets
                items={[
                  'Dark interface surfaces.',
                  'Burgundy active navigation states.',
                  'Structured information cards.',
                  'Organised tables and filters.',
                  'Clear status indicators.',
                  'Consistent spacing and reusable interface patterns.',
                ]}
              />
            </div>
          </div>
          <p>The storefront focuses on creating an aspirational fashion identity, while the dashboard prioritises information hierarchy, clarity and operational efficiency.</p>
        </Block>

        <Block id="nb-decisions" label="09. Key Design Decisions">
          <DataTable
            head={['Design Decision', 'Design Objective']}
            rows={[
              ['Editorial storefront', 'Establish a premium fashion identity'],
              ['Video-led discovery', 'Communicate products beyond static imagery'],
              ['Interactive product tagging', 'Connect inspiration with purchasing'],
              ['Shop the Look', 'Encourage coordinated product discovery'],
              ['Storefront customisation', 'Give the business control over promotional content'],
              ['Size-based inventory', 'Improve stock visibility'],
              ['Operational attention area', 'Highlight pending business activities'],
              ['Dedicated video management', 'Organise fashion content workflows'],
              ['Configurable tracking widget', 'Customise the post-purchase experience'],
              ['Standard and Express previews', 'Differentiate delivery experiences'],
              ['Map-based tracking', 'Make delivery progress more visual'],
              ['Consolidated analytics', 'Improve visibility into store operations and content'],
            ]}
          />
        </Block>

        <Block id="nb-outcome" label="10. Outcome">
          <p>NANADHBABBHI evolved from a reference-led e-commerce website into a broader fashion-commerce experience connecting customer shopping with business administration.</p>
          <p>The designed ecosystem brings together:</p>
          <Bullets
            items={[
              'Premium ethnic-fashion storefront.',
              'Structured product discovery and purchasing.',
              'Video-led fashion discovery.',
              'Interactive product tagging.',
              'Shop the Look experience.',
              'Storefront customisation.',
              'Size-based inventory management.',
              'Order and shipment management.',
              'Returns monitoring.',
              'Fashion video content management.',
              'Video analytics overview.',
              'Configurable delivery tracking.',
              'Standard and Express delivery previews.',
              'Map-based parcel visualisation.',
              'Centralised operational summaries.',
            ]}
          />
          <p>The key outcome is the breadth of the design: it considers the complete commerce journey, from the first product discovery to order fulfilment and delivery tracking.</p>
        </Block>

        <Block id="nb-reflection" label="11. Reflection">
          <p>This project reinforced an important aspect of product design: a successful e-commerce experience extends far beyond the storefront.</p>
          <p>Customer-facing interactions depend on a wider system of content management, inventory control, order processing and fulfilment.</p>
          <p>By extending the original website reference with video commerce, administrative customisation and configurable delivery tracking, I explored how a connected design approach can serve both customer expectations and business requirements.</p>
        </Block>

        <div className="cs-quote-card" data-reveal>
          <blockquote className="cs-quote-text">
            NANADHBABBHI brings together the emotional side of fashion discovery and the operational side of running an online store &mdash; creating a more connected commerce experience.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
