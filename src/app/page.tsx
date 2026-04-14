import Link from "next/link";
import { ArrowRight, Download, Mail, Network, Server, ShieldCheck } from "lucide-react";
import { ContactLinks } from "@/components/ContactLinks";
import { FadeIn } from "@/components/Motion";
import { HeroProfile } from "@/components/HeroProfile";
import { JsonLd } from "@/components/JsonLd";
import { ProjectCaseCard } from "@/components/ProjectCaseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd, faqJsonLd, projectsJsonLd } from "@/lib/seo";
import { experience, expertise, faq, highlights, projects, siteConfig } from "@/data/site";

const stats = [
  ["4+ years", "building production business systems"],
  ["Redis + BullMQ", "for distributed processing and reliability"],
  ["PostgreSQL", "query design, indexing, and performance work"],
];

const heroSignals = [
  { icon: Server, label: "Service design", value: "Node APIs, webhooks, workers" },
  { icon: Network, label: "State coordination", value: "Redis, BullMQ, WebRTC flows" },
  { icon: ShieldCheck, label: "Operational quality", value: "Retries, idempotency, handoffs" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }]), faqJsonLd(), ...projectsJsonLd()]} />
      <section className="relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-20">
        <div className="technical-grid absolute inset-x-0 top-0 h-[760px] opacity-35" />
        <div className="absolute right-[12%] top-20 h-96 w-96 rounded-full bg-[rgba(15,118,110,0.12)] blur-3xl" />
        <div className="container-shell relative">
          <div className="overflow-hidden rounded-lg border border-[color:var(--line)] bg-white/72 shadow-[0_30px_110px_rgba(16,18,20,0.08)] backdrop-blur-xl dark:bg-white/[0.035] dark:shadow-none">
            <div className="grid border-b border-[color:var(--line)] text-xs font-semibold uppercase text-[color:var(--muted)] sm:grid-cols-3">
              <p className="border-b border-[color:var(--line)] px-5 py-4 sm:border-b-0 sm:border-r">Backend-heavy full stack</p>
              <p className="border-b border-[color:var(--line)] px-5 py-4 sm:border-b-0 sm:border-r">Node.js / React / PostgreSQL</p>
              <p className="px-5 py-4 text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">Delhi, India</p>
            </div>

            <div className="grid lg:min-h-[680px] lg:grid-cols-[0.57fr_0.43fr]">
              <FadeIn className="flex">
                <div className="flex w-full flex-col justify-between p-6 sm:p-10 lg:p-12">
                  <div>
                    <p className="section-kicker">Portfolio / Systems Engineer</p>
                    <h1 className="mt-8 max-w-[760px] text-balance text-4xl font-semibold leading-[1.03] text-[color:var(--ink)] sm:text-6xl lg:text-[4.6rem]">
                      Backend systems with product-level clarity.
                    </h1>
                    <p className="mt-7 max-w-[640px] text-lg leading-8 text-[color:var(--muted)]">
                      I build APIs, real-time calling workflows, distributed workers, PostgreSQL-backed platforms, and Redis-powered automation for business workflows that need to stay reliable under pressure.
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-3">
                      <Link href="/projects" className="button-primary">
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <a href={siteConfig.resumePath} className="button-secondary">
                        Download Resume <Download className="ml-2 h-4 w-4" />
                      </a>
                      <Link href="/contact" className="button-secondary">
                        Contact Me <Mail className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
                      {stats.map(([value, label]) => (
                        <div key={value} className="bg-white/65 p-5 dark:bg-white/[0.035]">
                          <p className="text-2xl font-semibold text-[color:var(--ink)]">{value}</p>
                          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.12} className="border-t border-[color:var(--line)] bg-[#111514] lg:border-l lg:border-t-0">
                <div className="flex h-full flex-col">
                  <HeroProfile />
                  <div className="grid gap-px border-t border-white/10 bg-white/10">
                    {heroSignals.map((signal) => (
                      <div key={signal.label} className="flex items-start gap-4 bg-[#101412] p-5">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/[0.08] text-[color:var(--accent)]">
                          <signal.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold text-white">{signal.label}</p>
                          <p className="mt-1 text-sm leading-6 text-white/62">{signal.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
          <SectionHeading
            eyebrow="About"
            title="Practical engineering for real operational problems."
            description="I am strongest where product requirements meet backend complexity: data flow, API boundaries, queues, caching, reporting, call systems, and services that need to behave correctly under concurrent usage."
          />
          <div className="grid gap-6 border-l border-[color:var(--line)] pl-6 text-base leading-8 text-[color:var(--muted)] sm:pl-8">
            <p>
              My work has moved across CRM systems, valuation platforms, legal workflows, e-commerce, bidding systems, and insurance operations. The common thread is not a framework; it is turning messy business processes into reliable software with clear APIs, predictable data, and production-minded defaults.
            </p>
            <p>
              I care about the backend details that recruiters and engineering teams actually need: safe job execution, queue retries, database performance, webhook reliability, call-state coordination, and clean React interfaces that help users finish work faster.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {["Clear API boundaries", "Reliable background work", "Database-aware product flows"].map((item) => (
                <div key={item} className="quiet-panel p-4 text-sm font-semibold leading-6 text-[color:var(--ink)]">
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
            eyebrow="Proof"
            title="Signals that matter for backend-heavy full-stack work."
            description="A quick view of the engineering problems I have spent time with."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--line)] md:grid-cols-2 xl:grid-cols-5">
            {highlights.map((item, index) => (
              <FadeIn key={item.title} className="bg-white/90 p-6 transition duration-300 hover:bg-white dark:bg-[#111514]/90 dark:hover:bg-[#151b19]">
                <p className="text-xs font-semibold text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">0{index + 1}</p>
                <h3 className="mt-5 font-semibold leading-6 text-[color:var(--ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.body}</p>
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
              title="Case studies with architecture and impact."
              description="Not template cards. These are business systems described from the engineering side."
            />
            <Link href="/projects" className="premium-link">
              See all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCaseCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-band">
        <div className="container-shell max-w-[1060px]">
          <div className="rounded-lg border border-[color:var(--line)] bg-white/80 p-6 shadow-[0_28px_110px_rgba(16,18,20,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#121816] dark:shadow-[0_28px_110px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
            <div className="grid gap-8 border-b border-[color:var(--line)] pb-10 dark:border-white/10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionHeading
                eyebrow="Expertise"
                title="Grouped by capability, not logos."
                description="The stack is strongest when it maps to real system responsibilities."
              />
              <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)] dark:text-zinc-400 lg:justify-self-end">
                Backend ownership spans service boundaries, data shape, asynchronous processing, deployment hygiene, and the user-facing workflows that depend on them.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {expertise.map((group, index) => (
                <article
                  key={group.group}
                  className={`group flex min-h-[230px] flex-col rounded-lg border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_18px_70px_rgba(16,18,20,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-white hover:shadow-[0_24px_90px_rgba(16,18,20,0.1)] dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_18px_70px_rgba(0,0,0,0.16)] dark:hover:border-[#51d6bb]/35 dark:hover:bg-white/[0.055] dark:hover:shadow-[0_24px_90px_rgba(0,0,0,0.24)] ${index === expertise.length - 1 ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase text-[color:var(--accent-strong)] dark:text-[#7ce3cf]">Capability 0{index + 1}</p>
                      <h3 className="mt-4 text-xl font-semibold leading-snug text-[color:var(--ink)] dark:text-white">{group.group}</h3>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[color:var(--line)] bg-[color:var(--soft)] text-sm font-semibold text-[color:var(--muted)] transition group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent-strong)] dark:border-white/10 dark:bg-white/[0.045] dark:text-zinc-400 dark:group-hover:border-[#51d6bb]/35 dark:group-hover:text-[#7ce3cf]">
                      {group.skills.length}
                    </span>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="mb-3 h-px w-full bg-[color:var(--line)] dark:bg-white/10" />
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-md border border-[color:var(--line)] bg-white/55 px-2.5 py-1 text-xs font-medium leading-5 text-[color:var(--muted)] transition group-hover:border-[color:var(--accent)] group-hover:bg-[color:var(--accent-soft)] dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-300 dark:group-hover:border-white/15 dark:group-hover:bg-white/[0.05]">
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
          <div className="editorial-panel mt-12 divide-y divide-[color:var(--line)] overflow-hidden">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="grid gap-6 p-7 sm:p-8 lg:grid-cols-[0.36fr_0.64fr]">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">{job.period}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{job.location}</p>
                </div>
                <div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[color:var(--ink)]">{job.role}</h3>
                    <p className="mt-1 font-medium text-[color:var(--muted)]">{job.company}</p>
                  </div>
                  <ul className="mt-6 grid gap-3 text-sm leading-7 text-[color:var(--muted)] md:grid-cols-2">
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
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
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
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {faq.map((item) => (
              <div key={item.question} className="surface-card p-6">
                <h3 className="font-semibold text-[color:var(--ink)]">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
