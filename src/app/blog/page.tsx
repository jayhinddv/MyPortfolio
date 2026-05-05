import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/seo";
import { blogPosts } from "@/data/blog";
import { seoKeywords, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Engineering Blog | Node.js, Redis, BullMQ & PostgreSQL Notes",
  description:
    "Backend engineering notes by Jayhind Yadav on Node.js scaling, Redis locks, BullMQ job handling, PostgreSQL performance, CRM systems, and multi-container deployments.",
  keywords: [
    ...seoKeywords,
    "Jayhind Yadav blog",
    "Node.js engineering blog",
    "Redis locks Node.js",
    "BullMQ production",
    "PostgreSQL performance CRM",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Jayhind Yadav Engineering Blog",
    description:
      "Technical notes on Node.js, Redis, BullMQ, PostgreSQL, backend reliability, and production full-stack systems.",
    url: `${siteConfig.baseUrl}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Blog"
          title="Practical notes from backend-heavy systems work."
          description="Starter posts are included so the site is blog-ready and search-friendly. Replace or expand these when you want to publish deeper writeups."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="surface-card p-7">
              <p className="text-sm text-[color:var(--muted)]">{post.date}</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-[color:var(--ink)]">{post.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="premium-link mt-7">
                Read article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
