/** The pieces every case study page is built from. */
export function Block({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section className="cs-block" aria-labelledby={id} data-reveal>
      <h3 id={id} className="cs-label">
        {label}
      </h3>
      <div className="cs-body">{children}</div>
    </section>
  );
}

export function LiveLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="cs-live" href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> &#8599;</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Figure({ src, alt, caption, phone = false }: { src: string; alt: string; caption: string; phone?: boolean }) {
  return (
    <figure className={`cs-feature-art cs-figure ${phone ? 'phone' : ''}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="cs-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="cs-chips">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="cs-table-wrap">
      <table className="cs-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
