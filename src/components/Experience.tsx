import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">03</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Experience</h2>
        </div>

        <div className="relative border-l border-border pl-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.3rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />

              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>

              <p className="mb-4 text-sm text-accent">
                {job.company} <span className="text-muted">— {job.location}</span>
              </p>

              {job.summary && (
                <p className="mb-3 text-sm leading-relaxed text-muted">{job.summary}</p>
              )}

              <ul className="space-y-2">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
