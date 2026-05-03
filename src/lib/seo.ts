import { blogPosts, faq, projects, seoKeywords, siteConfig } from "@/data/site";

export function absoluteUrl(path = "") {
  return `${siteConfig.baseUrl}${path}`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.baseUrl}/#person`,
    name: siteConfig.name,
    givenName: "Jayhind",
    familyName: "Yadav",
    jobTitle: siteConfig.role,
    description: siteConfig.seoDescription,
    url: siteConfig.baseUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: absoluteUrl(siteConfig.profileImage),
    nationality: "Indian",
    knowsLanguage: ["English", "Hindi"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
      siteConfig.socials.facebook,
    ],
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
      "Full Stack Development",
      "REST API Design",
      "CRM Software",
      "Real-Time Communication",
      "Database Performance",
      "Docker Deployments",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.baseUrl}/#website`,
    name: `${siteConfig.name} Portfolio`,
    alternateName: ["Jayhind Yadav", "Jayhind Yadav Developer Portfolio"],
    url: siteConfig.baseUrl,
    description: siteConfig.seoDescription,
    inLanguage: "en-IN",
    keywords: seoKeywords.join(", "),
    publisher: { "@id": `${siteConfig.baseUrl}/#person` },
    author: { "@id": `${siteConfig.baseUrl}/#person` },
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.baseUrl}/#profile-page`,
    url: siteConfig.baseUrl,
    name: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    inLanguage: "en-IN",
    dateModified: new Date().toISOString(),
    mainEntity: { "@id": `${siteConfig.baseUrl}/#person` },
    about: { "@id": `${siteConfig.baseUrl}/#person` },
  };
}

export function portfolioItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} software engineering projects`,
    description: "Selected backend and full-stack software engineering case studies.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/projects#${project.slug}`),
      name: project.title,
    })),
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
    "@id": absoluteUrl(`/projects#${project.slug}`),
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects#${project.slug}`),
    creator: { "@id": `${siteConfig.baseUrl}/#person` },
    author: { "@id": `${siteConfig.baseUrl}/#person` },
    keywords: project.stack.join(", "),
    about: project.stack.map((tech) => ({ "@type": "Thing", name: tech })),
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
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@id": `${siteConfig.baseUrl}/#person` },
    publisher: { "@id": `${siteConfig.baseUrl}/#person` },
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.tags.join(", "),
  };
}
