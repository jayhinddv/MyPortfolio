import type { MetadataRoute } from "next";

export const siteConfig = {
  name: "Jayhind Yadav",
  role: "Full Stack Backend-Heavy Systems Engineer",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jayhind-yadav.vercel.app",
  description:
    "Jayhind Yadav designs and builds scalable full-stack systems with Node.js, React, PostgreSQL, Redis, BullMQ, Docker, real-time calling workflows, and production-grade APIs.",
  email: "jayhinddv@gmail.com",
  phone: "+91 727-584-1548",
  location: "Delhi, India",
  resumePath: "/Resumes.pdf",
  profileImage: "/jayhind-hero.webp",
  ogImage: "/opengraph-image",
  socials: {
    github: "https://github.com/taqui-786",
    linkedin: "https://www.linkedin.com/in/jayhind-yadav-224908276/",
    twitter: "https://x.com/Jayhind_Indian",
    facebook: "https://www.facebook.com/jayhinddv",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const highlights = [
  {
    title: "Real-time call systems",
    body: "Built CRM calling workflows with WebRTC, PBX/Asterisk thinking, agent state, and customer communication inside business operations.",
  },
  {
    title: "Backend APIs for CRM workflows",
    body: "Designed APIs around lead flow, customer activity, integrations, reporting, and day-to-day operational needs instead of isolated CRUD screens.",
  },
  {
    title: "Redis and BullMQ workers",
    body: "Used queues, caching, and background workers to keep user flows responsive and long-running jobs reliable.",
  },
  {
    title: "Concurrency fixes in containers",
    body: "Handled duplicate execution and state coordination problems that show up when services run across multiple containers.",
  },
  {
    title: "Database performance work",
    body: "Improved data access with indexing, query optimization, normalized data flows, and pragmatic caching.",
  },
];

export const expertise = [
  {
    group: "Backend Systems",
    skills: ["Node.js", "Express.js", "REST APIs", "Webhooks", "System design", "Concurrency control"],
  },
  {
    group: "Databases & Performance",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "Query optimization", "Indexing", "Data modeling"],
  },
  {
    group: "Real-Time & Messaging",
    skills: ["Redis", "BullMQ", "WebRTC", "Asterisk / PBX", "Job queues", "Session state"],
  },
  {
    group: "DevOps / Infrastructure",
    skills: ["Docker", "AWS foundations", "Multi-container deployments", "Git", "Production handoffs"],
  },
  {
    group: "Frontend Support",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessible UI", "Dashboard workflows"],
  },
];

export const experience = [
  {
    company: "VI Exports Pvt. Ltd.",
    role: "Software Engineer",
    period: "Dec 2024 - Present",
    location: "Delhi, India",
    bullets: [
      "Architect scalable full-stack applications using Node.js, React, and PostgreSQL for CRM and business workflow systems.",
      "Design high-performance REST APIs, webhook flows, and real-time communication paths across internal operations.",
      "Use Redis and BullMQ for asynchronous job processing where reliability, retries, and duplicate execution control matter.",
      "Containerize services with Docker and support AWS-oriented deployments while improving production readiness.",
    ],
  },
  {
    company: "DAPS",
    role: "Software Engineer",
    period: "Oct 2023 - Dec 2024",
    location: "Noida, India",
    bullets: [
      "Built full-stack systems for property valuation workflows with Node.js, React, MongoDB, SQL Server, and external APIs.",
      "Contributed to system architecture, API design, QA collaboration, and production handoffs for valuation and reporting products.",
      "Improved database-heavy workflows through SQL tuning, cleaner data access, and focused backend ownership.",
    ],
  },
  {
    company: "Absolute Dimensions Pvt. Ltd.",
    role: "Software Engineer",
    period: "Jun 2021 - Jul 2023",
    location: "Patna, India",
    bullets: [
      "Delivered MERN and MySQL-backed products across e-commerce, medical, and enterprise workflows in a startup environment.",
      "Handled end-to-end feature development from backend APIs to React interfaces, with attention to data flow and maintainability.",
    ],
  },
];

export const projects = [
  {
    slug: "crm-real-time-calling",
    title: "CRM Platform with Integrated Real-Time Calling",
    summary:
      "A unified CRM and calling workspace for leads, customer interactions, and agent workflows.",
    problem:
      "Businesses needed one place to manage leads, customer interactions, and calling workflows without constantly switching between CRM screens and external calling tools.",
    solution:
      "Built a CRM platform with integrated real-time calling using WebRTC for internal communication and PBX/Asterisk-oriented external call flows, keeping agent-to-customer interaction inside the same business interface.",
    architecture: [
      "Integrated telephony into CRM workflows instead of treating calls as a separate external tool.",
      "Used Redis for session handling, real-time state, and coordination between active agents.",
      "Designed APIs for lead workflows, call events, customer state, and operational reporting.",
      "Managed concurrency and duplicate state updates across agents and running services.",
    ],
    impact: [
      "Reduced dependency on disconnected third-party tools.",
      "Improved agent response flow by keeping call context near lead and customer data.",
      "Made real-time communication part of the core business workflow.",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "Redis", "WebRTC", "Asterisk", "Docker"],
  },
  {
    slug: "valuation-reporting",
    title: "Property Valuation & Automated Reporting System",
    summary:
      "A reporting platform that reduces manual valuation work through normalized data and automated report generation.",
    problem:
      "Manual property valuation reports were time-consuming, repetitive, and vulnerable to data entry mistakes.",
    solution:
      "Developed a platform that aggregates data from multiple sources, normalizes it, and generates valuation reports through backend-driven workflows.",
    architecture: [
      "Designed modular API integrations for external valuation data sources.",
      "Implemented data normalization steps before report generation.",
      "Optimized database queries for faster retrieval during report workflows.",
      "Kept reporting logic server-side for consistency and auditability.",
    ],
    impact: [
      "Reduced manual effort in report preparation.",
      "Improved turnaround time for valuation workflows.",
      "Made valuation data more consistent across generated reports.",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "SQL Server", "External APIs"],
  },
  {
    slug: "ai-lead-generation",
    title: "AI-Powered Lead Generation & Automation Workflows",
    summary:
      "Automated lead workflows with integrations, background processing, and reliable communication events.",
    problem:
      "Sales teams needed better lead routing and follow-up automation without losing visibility into the pipeline.",
    solution:
      "Built backend workflows that process lead events, trigger communication paths, and use job queues to keep automation reliable under load.",
    architecture: [
      "Separated user-facing actions from long-running automation through BullMQ workers.",
      "Used Redis for queue coordination and state needed across worker processes.",
      "Designed webhook-friendly APIs for third-party communication and lead events.",
      "Kept automation decisions traceable for operational review.",
    ],
    impact: [
      "Made lead follow-up less dependent on manual steps.",
      "Improved reliability by moving automation into background workers.",
      "Prepared the system for higher event volume and integration growth.",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "Redis", "BullMQ", "Webhooks"],
  },
  {
    slug: "legal-advisory-platform",
    title: "North Eye Legal Advisory Platform",
    summary:
      "A platform for secure document exchange and legal consultation workflows.",
    problem:
      "Clients and advisors needed a structured place for consultations, documents, and case-oriented communication.",
    solution:
      "Developed backend APIs and data flows for client-advisor interactions, document exchange, and consultation state.",
    architecture: [
      "Modeled advisor, client, document, and consultation workflows as explicit backend resources.",
      "Built API-driven communication between frontend and backend services.",
      "Kept secure document exchange central to the workflow design.",
    ],
    impact: [
      "Made client-advisor workflows easier to operate.",
      "Centralized consultation context and document movement.",
      "Improved maintainability through clear backend resource boundaries.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "React"],
  },
  {
    slug: "auction-commerce-insurance",
    title: "Auction, E-Commerce & Insurance Workflow Systems",
    summary:
      "Production-style business platforms spanning bidding, commerce, inventory, claims, and reporting.",
    problem:
      "Different business teams needed practical systems for auctions, shop operations, payments, inventory, and claim tracking.",
    solution:
      "Built and maintained backend-heavy features for ARSIM, Grata E-Shop, and Astute, covering bidding, notifications, e-commerce flows, and insurance survey operations.",
    architecture: [
      "Designed domain-specific APIs around bidding, orders, inventory, claims, and report uploads.",
      "Used relational and document databases according to workflow needs.",
      "Integrated notifications, payment-oriented flows, and status tracking where required.",
    ],
    impact: [
      "Supported multiple business workflows across different domains.",
      "Improved operational visibility through status and reporting flows.",
      "Delivered maintainable features for teams with real daily usage.",
    ],
    stack: ["Node.js", "React", "MongoDB", "SQL Server", ".NET Core", "REST APIs"],
  },
];

export const blogPosts = [
  {
    slug: "redis-locks-multi-container-jobs",
    title: "Redis Locks for Multi-Container Background Jobs",
    description:
      "A practical note on preventing duplicate execution when the same worker or cron-like job can run in more than one container.",
    date: "2026-04-14",
    tags: ["Redis", "BullMQ", "Concurrency"],
    paragraphs: [
      "Duplicate execution is easy to miss until a service scales horizontally. A job that behaves perfectly in one container can run twice when two containers wake up at the same time.",
      "The practical approach is to make critical work idempotent first, then use a Redis-backed lock with a sensible TTL around the section that must not overlap. The lock should expire if the worker dies, and the job should still be safe to retry.",
      "BullMQ helps with retries and queue semantics, but the business action behind a job still needs clear ownership. Store execution state, use unique job IDs where possible, and make the database the final source of truth.",
    ],
  },
  {
    slug: "postgresql-performance-for-crm-systems",
    title: "PostgreSQL Performance Notes for CRM Workflows",
    description:
      "How I think about indexes, query shape, and data access in CRM-style systems with many filters and frequent updates.",
    date: "2026-04-14",
    tags: ["PostgreSQL", "Performance", "CRM"],
    paragraphs: [
      "CRM screens often look simple but create heavy query pressure: search, filters, ownership, lead status, recent activity, and reporting can all hit the same tables.",
      "Good performance starts with query shape. Index the real access patterns, avoid fetching more columns than the UI needs, and keep reporting queries separate when they become too expensive for the operational path.",
      "Caching can help, but it should not hide unclear data modeling. The best improvements often come from better indexes, stable pagination, and removing repeated joins from hot paths.",
    ],
  },
  {
    slug: "bullmq-job-handling-production",
    title: "BullMQ Job Handling in Production Systems",
    description:
      "A short production checklist for queues, retries, failures, and operational visibility.",
    date: "2026-04-14",
    tags: ["BullMQ", "Node.js", "Queues"],
    paragraphs: [
      "Queues are not just a way to move slow work out of a request. They become part of the system contract, so retry behavior, failure handling, and visibility matter.",
      "A reliable worker should have clear job names, structured payloads, idempotent handlers, bounded retries, and logs that tell you which business entity failed.",
      "For higher-trust systems, I like to record job outcomes in application tables too. That gives support and engineering teams a shared view of what happened without needing to inspect queue internals every time.",
    ],
  },
];

export const faq = [
  {
    question: "What kind of roles is Jayhind looking for?",
    answer:
      "Backend-heavy full-stack roles focused on Node.js, React, PostgreSQL, Redis, queues, real-time workflows, and scalable business systems.",
  },
  {
    question: "Is this portfolio ready for Vercel?",
    answer:
      "Yes. It uses Next.js App Router, Next metadata routes, sitemap, robots, manifest, and a Vercel-ready build script.",
  },
  {
    question: "Where should content be edited?",
    answer:
      "Most portfolio content lives in src/data/site.ts. Replace links, copy, project details, and contact information there.",
  },
];

export const sitemapRoutes: MetadataRoute.Sitemap = [
  "",
  "/projects",
  "/resume",
  "/contact",
  "/blog",
  ...blogPosts.map((post) => `/blog/${post.slug}`),
].map((path) => ({
  url: `${siteConfig.baseUrl}${path}`,
  lastModified: new Date(),
  changeFrequency: path === "" ? "weekly" : "monthly",
  priority: path === "" ? 1 : path === "/projects" ? 0.9 : 0.7,
}));
