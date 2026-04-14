import type { Metadata } from "next";
import { Download } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/seo";
import { experience, expertise, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Jayhind Yadav, a backend-heavy full stack engineer focused on Node.js, React, PostgreSQL, Redis, BullMQ, Docker, and scalable systems.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resume", path: "/resume" }])} />
      <section className="container-shell section-space">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Resume"
            title="Backend-heavy full-stack engineering resume."
            description="Download the PDF or scan the same core information here before making a call."
          />
          <a href={siteConfig.resumePath} className="button-primary">
            Download PDF <Download className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="surface-card p-7 lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-xl font-semibold text-[color:var(--ink)]">{siteConfig.name}</h2>
            <p className="mt-2 text-sm font-medium text-[color:var(--muted)]">{siteConfig.role}</p>
            <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{siteConfig.description}</p>
            <div className="mt-6 grid gap-4">
              {expertise.map((group) => (
                <div key={group.group} className="muted-card p-4">
                  <h3 className="text-sm font-semibold text-[color:var(--ink)]">{group.group}</h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{group.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-5">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="surface-card p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-[color:var(--ink)]">{job.role}</h2>
                    <p className="mt-1 font-medium text-[color:var(--muted)]">{job.company}</p>
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">{job.period}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="muted-card p-4">{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
