import { about, links, now, projects, site, tools } from "./content";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <h2 className="text-muted">{title}</h2>
      <div className="grid gap-3">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto grid max-w-2xl gap-14 px-4 py-16 sm:px-6 sm:py-24">
      <header className="grid gap-1">
        <h1>
          {site.name}
          <span className="cursor" aria-hidden="true" />
        </h1>
        <p className="text-muted">
          {site.role} — {site.location}
        </p>
      </header>

      <Section title="about">
        {about.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </Section>

      <Section title="now">
        <ul className="grid gap-1">
          {now.map((item) => (
            <li key={item}>
              <span className="text-muted">&gt; </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="projects">
        <ul className="grid gap-5">
          {projects.map((p) => (
            <li key={p.name} className="grid gap-1">
              <div className="flex gap-3">
                <span className="text-muted">{p.year}</span>
                {p.href ? (
                  <a href={p.href}>{p.name}</a>
                ) : (
                  <span>{p.name}</span>
                )}
              </div>
              <p>{p.description}</p>
              <p className="text-muted">{p.tags.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="tools">
        <dl className="grid grid-cols-[5rem_1fr] gap-x-3 gap-y-1">
          {tools.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-muted">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="contact">
        <dl className="grid grid-cols-[5rem_1fr] gap-x-3 gap-y-1">
          {links.map(([k, label, href]) => (
            <div key={k} className="contents">
              <dt className="text-muted">{k}</dt>
              <dd>
                <a href={href}>{label}</a>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="text-muted">© {new Date().getFullYear()}</footer>
    </main>
  );
}
