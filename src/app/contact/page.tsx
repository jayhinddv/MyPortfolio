import type { Metadata } from "next";
import { ContactLinks } from "@/components/ContactLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/seo";
import { seoKeywords, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Hire Jayhind Yadav",
  description:
    "Contact Jayhind Yadav for backend-focused full stack engineering roles involving Node.js, React, PostgreSQL, Redis, Docker, CRM systems, real-time workflows, and scalable APIs.",
  keywords: [
    ...seoKeywords,
    "hire Jayhind Yadav",
    "contact Jayhind Yadav",
    "hire Node.js developer India",
    "backend developer available India",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Jayhind Yadav | Backend-Focused Full Stack Developer",
    description:
      "Reach Jayhind Yadav for Node.js, React, PostgreSQL, Redis, Docker, CRM, real-time workflow, and production API roles.",
    url: `${siteConfig.baseUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <section className="container-shell section-space">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk if the role needs practical backend ownership."
            description="Open to backend-focused full-stack roles, scalable systems work, CRM/calling workflows, Redis queues, PostgreSQL performance, and production platform engineering."
          />
          <div>
            <ContactLinks />
            <div className="mt-6 border-y border-[color:var(--line)] py-5">
              <h2 className="font-semibold text-[color:var(--ink)]">Recruiter note</h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Send the role, expected stack, location/remote context, and whether the work is more backend, full-stack, CRM, real-time, or platform-focused. I usually respond fastest on email and LinkedIn.
              </p>
              <a href={`mailto:${siteConfig.email}?subject=Backend%20Engineer%20Role`} className="button-primary mt-5">
                Email Jayhind
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
