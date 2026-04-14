"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(247,248,247,0.78)] backdrop-blur-2xl dark:bg-[rgba(11,13,13,0.74)]">
      <nav aria-label="Main navigation" className="container-shell flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3" aria-label="Jayhind Yadav home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[color:var(--charcoal)] text-sm font-semibold text-white shadow-[0_14px_34px_rgba(16,18,20,0.16)] transition group-hover:-translate-y-0.5 dark:text-[#101214]">
            JY
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-semibold text-[color:var(--ink)]">{siteConfig.name}</span>
            <span className="block text-xs text-[color:var(--muted)]">Backend-heavy full stack</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-lg border border-[color:var(--line)] bg-white/70 p-1 shadow-sm backdrop-blur-xl dark:bg-white/[0.045] md:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded-md bg-[color:var(--charcoal)] px-3 py-2 text-sm font-medium text-white shadow-sm dark:text-[#101214]"
                    : "rounded-md px-3 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-[color:var(--soft)] hover:text-[color:var(--ink)] dark:hover:bg-white/[0.08]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden rounded-md border border-[color:var(--line)] bg-white/60 px-4 py-2 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:bg-white dark:bg-white/[0.05] sm:inline-flex">
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
                  ? "shrink-0 rounded-md bg-[color:var(--charcoal)] px-3 py-2 text-sm font-medium text-white dark:text-[#101214]"
                  : "shrink-0 rounded-md border border-[color:var(--line)] bg-white/60 px-3 py-2 text-sm font-medium text-[color:var(--muted)] dark:bg-white/[0.04]"
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
