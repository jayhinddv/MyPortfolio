import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, blogPostingJsonLd } from "@/lib/seo";
import { blogPosts, seoKeywords, siteConfig } from "@/data/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [...seoKeywords, ...post.tags, post.title],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.baseUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${post.title} by ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = blogPostingJsonLd(post.slug);

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]), ...(jsonLd ? [jsonLd] : [])]} />
      <article className="container-shell max-w-3xl py-24 sm:py-28">
        <p className="section-kicker">{post.tags.join(" / ")}</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-6xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">{post.description}</p>
        <p className="mt-5 text-sm text-[color:var(--muted)]">Published {post.date}</p>
        <div className="surface-card mt-12 space-y-6 p-8 text-lg leading-9 text-[color:var(--muted)]">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </>
  );
}
