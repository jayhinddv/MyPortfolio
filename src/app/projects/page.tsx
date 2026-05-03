import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, portfolioItemListJsonLd, projectsJsonLd } from "@/lib/seo";
import { projects, seoKeywords, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects | Node.js, React, PostgreSQL & Redis Case Studies",
  description:
    "Software engineering case studies by Jayhind Yadav covering Node.js APIs, React dashboards, PostgreSQL workflows, Redis queues, CRM calling systems, property valuation, legal platforms, and automation.",
  keywords: [
    ...seoKeywords,
    "Jayhind Yadav projects",
    "Node.js project case study",
    "React PostgreSQL portfolio",
    "Redis queue case study",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Jayhind Yadav Projects | Backend & Full Stack Case Studies",
    description:
      "Case studies covering CRM calling systems, Redis queues, PostgreSQL workflows, automation, legal platforms, and production-ready full-stack systems.",
    url: `${siteConfig.baseUrl}/projects`,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]), portfolioItemListJsonLd(), ...projectsJsonLd()]} />
      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Projects"
          title="Engineering case studies built around real production problems."
          description="Each project is written for the way hiring teams review work: business context, backend responsibility, architecture choices, impact, and stack."
        />
        <div className="mt-8 grid gap-0 border-y border-[color:var(--line)]">
          {projects.map((project) => (
            <article id={project.slug} key={project.slug} className="scroll-mt-24 border-b border-[color:var(--line)] py-7 last:border-b-0">
              <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
                <div>
                  <p className="section-kicker text-xs">Case study</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-[color:var(--ink)] sm:text-3xl">{project.title}</h2>
                  <p className="mt-4 leading-7 text-[color:var(--muted)]">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Problem</h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Solution</h3>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{project.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Architecture / Technical Choices</h3>
                    <ul className="mt-3 grid gap-2 text-sm leading-6 text-[color:var(--muted)]">
                      {project.architecture.map((item) => (
                        <li key={item} className="border-l border-[color:var(--line)] pl-4">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[color:var(--ink)]">Impact</h3>
                    <ul className="mt-3 grid gap-3 text-sm leading-6 text-[color:var(--muted)] sm:grid-cols-3">
                      {project.impact.map((item) => (
                        <li key={item} className="border-t border-[color:var(--line)] pt-3">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-[color:var(--muted)]">
          For private production systems, links are intentionally limited. Recruiters can request deeper walkthroughs via {siteConfig.email}.
        </p>
      </section>
    </>
  );
}
