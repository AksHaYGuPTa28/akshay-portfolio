import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">05</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Education</h2>
        </div>

        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={item.school}
              className="flex flex-col gap-1 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground">{item.school}</h3>
                <p className="mt-1 text-sm text-muted">{item.degree}</p>
              </div>
              <span className="font-mono text-xs text-muted">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
