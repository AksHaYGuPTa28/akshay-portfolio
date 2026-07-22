"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-foreground">
          Akshay<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent md:inline-block"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 text-sm text-muted md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" download className="block py-2 text-accent">
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
