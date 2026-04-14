import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, projectsJsonLd } from "@/lib/seo";
import { projects, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend-heavy full-stack project case studies by Jayhind Yadav covering CRM calling systems, PostgreSQL workflows, Redis queues, property valuation, legal platforms, and automation.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]), ...projectsJsonLd()]} />
      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Projects"
          title="Engineering case studies built around real backend problems."
          description="Each card is written the way an engineering team would discuss the work: problem, solution, architecture, impact, and stack."
        />
        <div className="mt-12 grid gap-7">
          {projects.map((project) => (
            <article id={project.slug} key={project.slug} className="surface-card scroll-mt-28 p-7 sm:p-8">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="section-kicker text-xs">Case study</p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-[color:var(--ink)] sm:text-4xl">{project.title}</h2>
                  <p className="mt-5 leading-8 text-[color:var(--muted)]">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-5">
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Problem</h3>
                    <p className="mt-2 leading-7 text-[color:var(--muted)]">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Solution</h3>
                    <p className="mt-2 leading-7 text-[color:var(--muted)]">{project.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Architecture / Technical Choices</h3>
                    <ul className="mt-3 grid gap-2 text-sm leading-7 text-[color:var(--muted)]">
                      {project.architecture.map((item) => (
                        <li key={item} className="muted-card p-3">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Impact</h3>
                    <ul className="mt-3 grid gap-2 text-sm leading-7 text-[color:var(--muted)] sm:grid-cols-3">
                      {project.impact.map((item) => (
                        <li key={item} className="rounded-md border border-[color:var(--line)] bg-white/50 p-3 dark:bg-white/[0.025]">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-[color:var(--muted)]">
          For private production systems, links are intentionally limited. Recruiters can request deeper walkthroughs via {siteConfig.email}.
        </p>
      </section>
    </>
  );
}
