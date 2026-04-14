import type { Metadata } from "next";
import { ContactLinks } from "@/components/ContactLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jayhind Yadav for backend-heavy full stack engineering roles focused on Node.js, React, PostgreSQL, Redis, Docker, and scalable systems.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <section className="container-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk if the role needs practical backend ownership."
            description="Open to backend-heavy full-stack roles, scalable systems work, CRM/calling workflows, Redis queues, PostgreSQL performance, and production platform engineering."
          />
          <div>
            <ContactLinks />
            <div className="muted-card mt-8 p-6">
              <h2 className="font-semibold text-[color:var(--ink)]">Recruiter note</h2>
              <p className="mt-3 leading-7 text-[color:var(--muted)]">
                Send the role, expected stack, location/remote context, and whether the work is more backend, full-stack, CRM, real-time, or platform-focused. I usually respond fastest on email and LinkedIn.
              </p>
              <a href={`mailto:${siteConfig.email}?subject=Backend%20Engineer%20Role`} className="button-primary mt-6">
                Email Jayhind
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
