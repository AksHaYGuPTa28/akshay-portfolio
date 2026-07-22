import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">02</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 text-sm font-semibold text-foreground">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
