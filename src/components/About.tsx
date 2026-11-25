import { stats } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent">01</span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">About</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-base leading-relaxed text-muted">
              I build production-grade web applications and AI-powered systems, from
              designing RAG pipelines and agentic tooling on top of the OpenAI, Claude, and
              Gemini APIs to owning full-stack delivery with React, Node.js, and
              microfrontend architecture. I lean heavily on AI-assisted development tools
              (Cursor, Claude Code, GitHub Copilot) to move fast without cutting corners on
              code quality, and I enjoy leading small teams through ambiguous, high-impact
              problems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Currently AI Full Stack Lead at VITA Solutions, leading engineering on a flight
              and cargo carbon emissions data platform for a global aviation industry body, on
              AWS Serverless, Node.js and Snowflake. Before this I
              was a Senior Software Engineer leading a team of 4, and earlier shipped
              products at VoerEir, Loopin HQ, and Videtorrium India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="text-2xl font-semibold text-gradient">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
