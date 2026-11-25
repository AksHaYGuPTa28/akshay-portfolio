import Image from "next/image";
import { profile } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative overflow-hidden border-b border-border px-6 pt-20 pb-24"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent), transparent)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            Available for new opportunities
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg font-medium text-gradient">
            {profile.titles.join(" · ")}
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 text-sm text-muted md:justify-start">
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div
            className="absolute inset-0 -z-10 scale-105 rounded-[2rem] opacity-60 blur-2xl"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
            }}
          />
          <div className="h-64 w-64 overflow-hidden rounded-[2rem] border border-border bg-surface sm:h-80 sm:w-80">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Akshay Gupta"
              width={480}
              height={640}
              priority
              className="h-full w-full object-cover object-[center_20%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
