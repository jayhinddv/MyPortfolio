import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HoverLift } from "@/components/Motion";
import { projects } from "@/data/site";

type Project = (typeof projects)[number];

export function ProjectCaseCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <HoverLift className="h-full">
      <article className="quiet-panel group relative flex h-full min-h-[360px] flex-col overflow-hidden p-7">
        <div className="absolute inset-x-0 top-0 h-1 bg-[color:var(--accent)] opacity-80" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker text-xs">Case study</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-[color:var(--ink)]">{project.title}</h3>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[color:var(--line)] bg-white/70 text-[color:var(--muted)] transition group-hover:-translate-y-0.5 group-hover:border-[color:var(--accent)] group-hover:bg-[color:var(--accent-soft)] group-hover:text-[color:var(--accent-strong)] dark:bg-white/[0.04] dark:group-hover:text-[color:var(--accent)]">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-5 leading-7 text-[color:var(--muted)]">{project.summary}</p>
        {!compact ? (
          <div className="mt-6 grid gap-4 text-sm leading-7 text-[color:var(--muted)]">
            <p className="muted-card p-4"><span className="font-semibold text-[color:var(--ink)]">Problem:</span> {project.problem}</p>
            <p className="muted-card p-4"><span className="font-semibold text-[color:var(--ink)]">Solution:</span> {project.solution}</p>
          </div>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {project.stack.slice(0, compact ? 5 : project.stack.length).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <Link href="/projects" className="premium-link mt-7 border-t border-[color:var(--line)] pt-5">
          Read project details
        </Link>
      </article>
    </HoverLift>
  );
}
