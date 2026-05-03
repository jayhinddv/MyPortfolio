import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ContactLinks } from "@/components/ContactLinks";
import { FadeIn } from "@/components/Motion";
import { HeroProfile } from "@/components/HeroProfile";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCaseCard } from "@/components/ProjectCaseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, faqJsonLd, portfolioItemListJsonLd, projectsJsonLd } from "@/lib/seo";
import { experience, expertise, faq, highlights, profileSnapshot, projects, siteConfig } from "@/data/site";

const stats = [
  ["4+ years", "building business software"],
  ["Backend-first", "APIs, data, queues, reliability"],
  ["Full-stack", "React interfaces backed by clean services"],
];

const workingStandards = [
  {
    title: "Product-aware engineering",
    body: "I connect backend decisions to the actual workflow: who uses it, what can fail, which data matters, and how the team will support it later.",
  },
  {
    title: "Production habits",
    body: "I think about retries, idempotency, logging, database pressure, queue behavior, and deployment readiness while building, not only after bugs appear.",
  },
  {
    title: "Clear collaboration",
    body: "I write APIs, handoffs, and implementation notes so frontend, QA, product, and future engineers can understand the system without guessing.",
  },
  {
    title: "Practical delivery",
    body: "I prefer simple architecture that can grow: focused services, readable code, stable data models, and interfaces that help users finish work faster.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }]), faqJsonLd(), portfolioItemListJsonLd(), ...projectsJsonLd()]} />
      <section className="pb-10 pt-10 sm:pb-14 sm:pt-14">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <FadeIn>
              <p className="section-kicker">Senior Software Engineer / Backend-focused fullstack</p>
              <h1 className="mt-5 max-w-[820px] text-balance text-4xl font-semibold leading-[1.02] text-[color:var(--ink)] sm:text-6xl lg:text-[4.7rem]">
                I build reliable web systems for teams that need software to hold up in production.
              </h1>
              <p className="mt-5 max-w-[720px] text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                I am a 4+ year backend-focused fullstack engineer working across Node.js, React, PostgreSQL, Redis, BullMQ, Docker, AWS, CRM systems, high-volume webhooks, AI integrations, real-time workflows, and production APIs.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/projects" className="button-primary">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a href={siteConfig.resumePath} className="button-secondary">
                  Resume <Download className="ml-2 h-4 w-4" />
                </a>
                <Link href="/contact" className="button-secondary">
                  Contact <Mail className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-4 border-y border-[color:var(--line)] py-4 sm:grid-cols-3">
                {stats.map(([value, label]) => (
                  <div key={value}>
                    <p className="text-xl font-semibold text-[color:var(--ink)]">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <HeroProfile />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-8 border-t border-[color:var(--line)] pt-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading
            eyebrow="About"
            title="Practical engineering for serious business workflows."
            description="I am strongest where product requirements meet backend complexity: data flow, API boundaries, queues, caching, reporting, call systems, and services that need to behave correctly under concurrent usage."
          />
          <div className="grid gap-4 text-base leading-7 text-[color:var(--muted)]">
            <p>
              My work has moved across CRM systems, valuation platforms, legal workflows, e-commerce, bidding systems, and insurance operations. The common thread is not a framework; it is turning messy business processes into reliable software with clear APIs, predictable data, and production-minded defaults.
            </p>
            <p>
              I care about the backend details that recruiters and engineering teams actually need: safe job execution, queue retries, database performance, webhook reliability, call-state coordination, and clean React interfaces that help users finish work faster.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Clear API boundaries", "Reliable background work", "Database-aware product flows"].map((item) => (
                <div key={item} className="border-t border-[color:var(--line)] pt-4 text-sm font-semibold leading-6 text-[color:var(--ink)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Profile Snapshot"
            title="Where my experience fits best."
            description="A concise view of the role, stack, and production systems I work with most often."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {profileSnapshot.map((group) => (
              <article key={group.label} className="border border-[color:var(--line)] bg-[color:var(--card)] p-5">
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">{group.label}</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-[color:var(--muted)]">
                  {group.items.map((item) => (
                    <li key={item} className="border-l border-[color:var(--line)] pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Work Standard"
            title="The way I build is as important as the stack I use."
            description="Companies hire for reliability, communication, and ownership. These are the engineering habits I bring into each project."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {workingStandards.map((item, index) => (
              <FadeIn key={item.title} className="border-t border-[color:var(--line)] pt-4">
                <p className="text-xs font-semibold text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-[color:var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{item.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Proof"
            title="Engineering signals companies can evaluate quickly."
            description="A focused view of the backend and full-stack problems I have handled in production-style systems."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {highlights.map((item, index) => (
              <FadeIn key={item.title} className="border-t border-[color:var(--line)] pt-4">
                <p className="text-xs font-semibold text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">0{index + 1}</p>
                <h3 className="mt-3 font-semibold leading-6 text-[color:var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Projects"
              title="Case studies written for engineering review."
              description="The goal is not to show pretty cards. It is to show the problem, backend decisions, system responsibilities, and business impact."
            />
            <Link href="/projects" className="premium-link">
              See all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCaseCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell max-w-[1060px]">
          <div>
            <div className="grid gap-6 border-b border-[color:var(--line)] pb-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionHeading
                eyebrow="Expertise"
                title="Capabilities grouped by real engineering responsibility."
                description="The stack is strongest when it maps to services, data, reliability, deployment, and user-facing workflow."
              />
              <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)] dark:text-zinc-400 lg:justify-self-end">
                Backend ownership spans service boundaries, data shape, asynchronous processing, deployment hygiene, and the user-facing workflows that depend on them.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {expertise.map((group, index) => (
                <article
                  key={group.group}
                  className={`group flex min-h-[190px] flex-col border border-[color:var(--line)] bg-[color:var(--card)] p-5 transition duration-300 hover:border-[color:var(--accent)] ${index === expertise.length - 1 ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase text-[color:var(--accent-strong)] dark:text-[#7ce3cf]">Capability 0{index + 1}</p>
                      <h3 className="mt-3 text-xl font-semibold leading-snug text-[color:var(--ink)] dark:text-white">{group.group}</h3>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-[color:var(--line)] bg-[color:var(--soft)] text-sm font-semibold text-[color:var(--muted)] transition group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent-strong)] dark:border-white/10 dark:bg-white/[0.045] dark:text-zinc-400 dark:group-hover:border-[#51d6bb]/35 dark:group-hover:text-[#7ce3cf]">
                      {group.skills.length}
                    </span>
                  </div>

                  <div className="mt-auto pt-5">
                    <div className="mb-3 h-px w-full bg-[color:var(--line)] dark:bg-white/10" />
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="border border-[color:var(--line)] bg-white/55 px-2.5 py-1 text-xs font-medium leading-5 text-[color:var(--muted)] transition group-hover:border-[color:var(--accent)] group-hover:bg-[color:var(--accent-soft)] dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-300 dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.05]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Experience"
            title="Impact-focused backend ownership."
            description="A recruiter-friendly summary of recent engineering work."
          />
          <div className="mt-8 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="grid gap-5 py-6 lg:grid-cols-[0.32fr_0.68fr]">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">{job.period}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{job.location}</p>
                </div>
                <div>
                  <div>
                    <h3 className="text-xl font-semibold text-[color:var(--ink)]">{job.role}</h3>
                    <p className="mt-1 font-medium text-[color:var(--muted)]">{job.company}</p>
                  </div>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-[color:var(--muted)] md:grid-cols-2">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="border-l border-[color:var(--line)] pl-4">{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Open to backend and scalable systems roles."
            description="The best fit is a team that needs practical ownership across APIs, databases, queues, and product workflows."
          />
          <ContactLinks />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="FAQ" title="Quick context for recruiters." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {faq.map((item) => (
              <div key={item.question} className="border-t border-[color:var(--line)] pt-4">
                <h3 className="font-semibold text-[color:var(--ink)]">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
