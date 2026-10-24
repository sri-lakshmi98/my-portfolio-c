import './case-study.css';
import { Label, Wave } from './Sections';

const LIVE = 'https://aadithya-automation.vercel.app/';

const CHALLENGES = [
  {
    title: 'An open-ended brief',
    text: 'I had to turn a broad request into a workable website structure and visual direction without relying on a complete set of predefined instructions.',
  },
  {
    title: 'Limited product-specific knowledge',
    text: 'I was responsible for the website, but I did not have enough technical product knowledge to independently validate every product description or specification.',
  },
  {
    title: 'An evolving client vision',
    text: 'The website needed to accommodate the client’s feedback and changing instructions instead of treating the first version as the final product.',
  },
];

const FUTURE = [
  'Clearer product and category discovery.',
  'Better organization of business and product information.',
  'SEO-friendly content and page development.',
  'Opportunities for future promotional content and digital marketing.',
  'Continued refinement as verified information becomes available.',
];

const SOLUTION = [
  ['Website experience', 'Translating an open-ended request into a structured digital experience.'],
  [
    'Practical execution',
    'Taking the project through development and deployment so the client could review the work on a live website.',
  ],
  [
    'Room to evolve',
    'Keeping the website open to content corrections, design refinements, and client-led changes as the business requirements became clearer.',
  ],
];

const OUTCOME = [
  'A deployed website accessible through a live URL.',
  'An initial website structure developed from an open-ended brief.',
  'A foundation designed with future content and digital marketing possibilities in mind.',
  'A visible review process through live deployment.',
  'An ongoing workflow for implementing client-requested changes.',
];

const DETAILS = [
  ['Project', 'Aadithya Automation & Security Systems website'],
  ['My role', 'Website design and development, research, deployment, and ongoing client-directed updates'],
  ['Approach', 'Independent initial direction followed by iterative client collaboration'],
  ['Deployment', 'Vercel'],
  ['Status', 'Live website; continuing refinements based on client instructions'],
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

/** The Aadithya case study, written in the first person. */
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
          Website Design <i aria-hidden="true">&middot;</i> UI/UX <i aria-hidden="true">&middot;</i> Independent
          Research <i aria-hidden="true">&middot;</i> Vercel Deployment <i aria-hidden="true">&middot;</i> Iterative
          Client Collaboration
        </p>
        <div className="cs-top" data-reveal>
          <LiveLink>View live website</LiveLink>
        </div>

        <figure className="cs-shot" data-reveal>
          <img
            src="/work/aadithya.webp"
            width="1400"
            height="699"
            loading="lazy"
            alt="The live Aadithya Automation and Security Systems home page"
          />
        </figure>

        <Block id="cs-overview" label="Project overview">
          <p>
            A client approached me to create a website for Aadithya Automation &amp; Security Systems, giving me
            responsibility for shaping the initial digital experience without a detailed design brief or a fully
            defined website structure.
          </p>
          <p>
            Rather than waiting for every detail to be decided, I took the initiative to research the business
            context, establish a starting direction, and build a website foundation that could evolve with the
            client&rsquo;s needs.
          </p>
          <p>
            My goal was to create more than an online presence. I wanted to establish a flexible digital foundation
            that could be refined over time and potentially support future activities such as search engine
            optimization, content development, product discovery, and digital marketing.
          </p>
        </Block>

        <Block id="cs-challenge" label="The challenge">
          <p className="cs-lead">How do you build a useful website when the direction is still taking shape?</p>
          <ul className="cs-cards">
            {CHALLENGES.map((c, i) => (
              <li key={c.title}>
                <span aria-hidden="true">0{i + 1}</span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
          <p>
            I approached these challenges by separating what I could independently design and develop from what
            required the client&rsquo;s knowledge, confirmation, or approval.
          </p>
        </Block>

        <Block id="cs-approach" label="My approach">
          <ol className="cs-steps">
            <li>
              <h4>
                <span aria-hidden="true">01</span> Research before assumptions
              </h4>
              <p>
                I began by researching the business context and exploring how the website could communicate its
                offerings online. This helped me establish an initial structure and design direction rather than
                building disconnected pages without a clear purpose.
              </p>
              <p>
                My research informed the starting point, but I treated product-specific information as something
                that needed to be confirmed with the client, not something to invent or assume.
              </p>
            </li>
            <li>
              <h4>
                <span aria-hidden="true">02</span> Building the first version independently
              </h4>
              <p>
                With the initial direction established, I worked on the website&rsquo;s structure, visual
                presentation, and product-discovery experience.
              </p>
              <p>
                The intention was to make the business easier to explore online while creating a foundation that
                could accommodate additional content and improvements as the project developed.
              </p>
              <p>
                Instead of trying to make every decision permanent at the beginning, I focused on creating a usable
                first version that could be reviewed, tested, and refined.
              </p>
            </li>
            <li>
              <h4>
                <span aria-hidden="true">03</span> Designing with future growth in mind
              </h4>
              <p>
                I considered how the website could support the business beyond its initial launch. The foundation
                was planned with future improvements in mind, including:
              </p>
              <ul className="cs-list">
                {FUTURE.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="cs-note">
                These were forward-looking considerations, not claims that every marketing activity or SEO outcome
                had already been delivered.
              </p>
            </li>
          </ol>
        </Block>

        <Block id="cs-solution" label="The solution">
          <p>
            The result was a live website that established an initial digital presence for Aadithya Automation
            &amp; Security Systems.
          </p>
          <p>
            My work focused on creating a starting point that the client could review and build upon, rather than
            presenting an unverified first draft as a finished, unchangeable solution.
          </p>
          <p>The project brought together three important aspects of my work:</p>
          <dl className="cs-defs">
            {SOLUTION.map(([term, text]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block id="cs-deploy" label="Deployment and transparency">
          <p className="cs-lead">Making the work visible throughout the process.</p>
          <p>
            I deployed the website using Vercel, giving the client a live version to review rather than limiting
            feedback to static designs or screenshots.
          </p>
          <p>
            This also helped me establish a more transparent working process. The client could see the website as it
            developed, communicate requested changes, and provide direction based on the actual experience.
          </p>
          <p>
            I continued updating the website according to the client&rsquo;s instructions, treating feedback as part
            of the development process rather than as an inconvenience after delivery.
          </p>
          <p>
            For me, this was an important part of the engagement: the client was not just receiving a website; they
            could follow its progress and participate in shaping its direction.
          </p>
        </Block>

        <Block id="cs-client" label="Working with the client">
          <p>
            One of the most important lessons from this project was understanding where independent initiative
            should end and client collaboration should begin.
          </p>
          <p>
            I could research, structure, design, develop, and deploy the website independently. However, accurate
            technical product information required input from someone with direct knowledge of the business and its
            offerings.
          </p>
          <p>
            I therefore approached the website as an evolving collaboration: I established the foundation, shared the
            live work, incorporated the client&rsquo;s instructions, and left room for information to be clarified
            and improved.
          </p>
          <p>
            This allowed me to take responsibility for execution without pretending to have expertise or information
            I did not possess.
          </p>
        </Block>

        <Block id="cs-outcome" label="The outcome">
          <p>The project resulted in:</p>
          <ul className="cs-list">
            {OUTCOME.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="cs-note">
            The website remains an evolving project, so I am not presenting unverified increases in traffic,
            enquiries, conversions, or revenue as results.
          </p>
        </Block>

        <Block id="cs-learned" label="What I learned">
          <p>
            This project strengthened my understanding that website design involves more than choosing layouts,
            colors, and typography.
          </p>
          <p>
            It requires making decisions with incomplete information, distinguishing research from verified facts,
            communicating limitations, and building something flexible enough to improve as the requirements become
            clearer.
          </p>
          <p>
            I also learned the value of making work visible early. A live website creates a shared reference point
            for feedback and helps turn abstract instructions into concrete improvements.
          </p>
          <p>
            Most importantly, I learned that taking ownership does not mean knowing every answer at the beginning. It
            means knowing how to move the project forward responsibly while involving the right people when their
            input matters.
          </p>
        </Block>

        <Block id="cs-details" label="Project details">
          <dl className="cs-facts">
            {DETAILS.map(([term, text]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <div className="cs-end" data-reveal>
          <LiveLink>Explore the live project</LiveLink>
          <p>A project built on initiative, transparency, and continuous improvement.</p>
        </div>
      </div>
    </section>
  );
}
