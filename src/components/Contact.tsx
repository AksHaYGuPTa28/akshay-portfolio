import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="bg-grid relative overflow-hidden px-6 py-24">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--accent-2), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-accent">06 — Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something worth shipping.
        </h2>
        <p className="mt-4 text-base text-muted">
          Open to Senior/Lead engineering and AI engineering roles. Reach out and I&apos;ll get
          back to you.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
