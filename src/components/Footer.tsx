import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-white/64 backdrop-blur-xl dark:bg-[#0b0d0d]">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-semibold text-[color:var(--ink)]">{siteConfig.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--muted)]">
            Full stack backend-heavy engineer building Node.js, React, PostgreSQL, Redis, queue, and real-time systems for business workflows.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[color:var(--ink)]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${siteConfig.email}`} aria-label="Email Jayhind" className="rounded-md border border-[color:var(--line)] bg-white/70 p-2 transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.09]">
              <Mail className="h-4 w-4" />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-md border border-[color:var(--line)] bg-white/70 p-2 transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.09]">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-md border border-[color:var(--line)] bg-white/70 p-2 transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.09]">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
