import type { Metadata } from "next";
import { Download } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/seo";
import { experience, expertise, keyAchievements, seoKeywords, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume | Senior Software Engineer | Node.js Backend Developer",
  description:
    "Resume for Jayhind Yadav, a Senior Software Engineer and backend-focused fullstack engineer with 4+ years of experience in Node.js, React, PostgreSQL, Redis, BullMQ, Docker, AWS, CRM systems, and production APIs.",
  keywords: [
    ...seoKeywords,
    "Jayhind Yadav resume",
    "Jayhind Yadav CV",
    "Node.js developer resume India",
    "backend developer resume",
  ],
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Jayhind Yadav Resume | Node.js Backend & Full Stack Developer",
    description:
      "Resume and technical experience for Jayhind Yadav across Node.js, React, PostgreSQL, Redis, BullMQ, Docker, AWS, CRM systems, high-volume webhooks, AI integrations, and production business APIs.",
    url: `${siteConfig.baseUrl}/resume`,
    type: "profile",
  },
};

export default function ResumePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resume", path: "/resume" }])} />
      <section className="container-shell section-space">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Resume"
            title="Senior Software Engineer resume."
            description="Backend-focused fullstack experience across Node.js, React, PostgreSQL, Redis, BullMQ, Docker, AWS, CRM systems, AI integrations, and production APIs."
          />
          <a href={siteConfig.resumePath} className="button-primary">
            Download PDF <Download className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="border-y border-[color:var(--line)] py-5 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-xl font-semibold text-[color:var(--ink)]">{siteConfig.name}</h2>
            <p className="mt-2 text-sm font-medium text-[color:var(--muted)]">{siteConfig.role}</p>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{siteConfig.description}</p>
            <div className="mt-5 border-t border-[color:var(--line)] pt-3">
              <h3 className="text-sm font-semibold text-[color:var(--ink)]">Resume headline</h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                Senior Software Engineer (Node.js | React | PostgreSQL | Redis | Docker | AWS)
              </p>
            </div>
            <div className="mt-5 grid gap-3">
              {expertise.map((group) => (
                <div key={group.group} className="border-t border-[color:var(--line)] pt-3">
                  <h3 className="text-sm font-semibold text-[color:var(--ink)]">{group.group}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{group.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-6">
            <section className="border-y border-[color:var(--line)] py-5">
              <h2 className="text-xl font-semibold text-[color:var(--ink)]">Key Achievements</h2>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--muted)] md:grid-cols-2">
                {keyAchievements.map((achievement) => (
                  <li key={achievement} className="border-l border-[color:var(--line)] pl-4">
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-0 border-y border-[color:var(--line)]">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="border-b border-[color:var(--line)] py-5 last:border-b-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[color:var(--ink)]">{job.role}</h2>
                    <p className="mt-1 font-medium text-[color:var(--muted)]">{job.company}</p>
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="border-l border-[color:var(--line)] pl-4">{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
