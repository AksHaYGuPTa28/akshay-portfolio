import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-surface/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">04</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Projects</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {project.name}
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted">{project.year}</span>
              </div>

              <ul className="mb-4 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                >
                  View on GitHub
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
