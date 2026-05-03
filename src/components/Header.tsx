"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(247,248,247,0.9)] backdrop-blur-xl dark:bg-[rgba(11,13,13,0.88)]">
      <nav aria-label="Main navigation" className="container-shell flex min-h-[68px] items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3" aria-label="Jayhind Yadav home">
          <span className="grid h-9 w-9 place-items-center bg-[color:var(--charcoal)] text-sm font-semibold text-white transition group-hover:bg-[color:var(--accent-strong)] dark:text-[#101214]">
            JY
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-semibold text-[color:var(--ink)]">{siteConfig.name}</span>
            <span className="block text-xs text-[color:var(--muted)]">Backend-focused full stack</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-sm font-semibold text-[color:var(--ink)] underline decoration-[color:var(--accent)] decoration-2 underline-offset-8"
                    : "text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden border border-[color:var(--line)] bg-white/60 px-4 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:bg-white dark:bg-white/[0.05] sm:inline-flex">
            Let's talk
          </Link>
        </div>
      </nav>
      <div className="container-shell flex gap-2 overflow-x-auto pb-3 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                  ? "shrink-0 border border-[color:var(--charcoal)] bg-[color:var(--charcoal)] px-3 py-2 text-sm font-medium text-white dark:text-[#101214]"
                  : "shrink-0 border border-[color:var(--line)] bg-white/60 px-3 py-2 text-sm font-medium text-[color:var(--muted)] dark:bg-white/[0.04]"
            }
          >
            {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
