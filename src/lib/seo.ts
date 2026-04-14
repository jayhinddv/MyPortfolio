import { blogPosts, faq, projects, siteConfig } from "@/data/site";

export function absoluteUrl(path = "") {
  return `${siteConfig.baseUrl}${path}`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.baseUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: absoluteUrl(siteConfig.profileImage),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin, siteConfig.socials.twitter],
    knowsAbout: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "Asterisk PBX",
      "System Design",
      "Backend Engineering",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    author: personJsonLd(),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectsJsonLd() {
  return projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects#${project.slug}`),
    creator: personJsonLd(),
    keywords: project.stack.join(", "),
  }));
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingJsonLd(slug: string) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: personJsonLd(),
    url: absoluteUrl(`/blog/${post.slug}`),
  };
}
