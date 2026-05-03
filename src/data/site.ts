import type { MetadataRoute } from "next";

const configuredBaseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jayhinddev.in").replace(/\/+$/, "");

export const siteConfig = {
  name: "Jayhind Yadav",
  role: "Backend-Focused Full Stack Developer",
  baseUrl: configuredBaseUrl,
  description:
    "Jayhind Yadav builds reliable backend-focused business systems with Node.js, JavaScript, PostgreSQL, Redis, BullMQ, Docker, AWS services, CRM workflows, and production-ready APIs.",
  seoTitle: "Jayhind Yadav | Node.js Backend & Full Stack Developer in India",
  seoDescription:
    "Portfolio of Jayhind Yadav, a 4+ year backend-focused full stack developer in India building Node.js, JavaScript, PostgreSQL, Redis, BullMQ, Docker, AWS services, CRM systems, real-time workflows, and scalable business APIs.",
  email: "jayhinddv@gmail.com",
  phone: "+91 727-584-1548",
  location: "Delhi, India",
  resumePath: "/Resumes.pdf",
  profileImage: "/jayhind-hero.webp",
  ogImage: "/opengraph-image",
  socials: {
    github: "https://github.com/jayhinddv",
    linkedin: "https://www.linkedin.com/in/jayhind-yadav-224908276/",
    twitter: "https://x.com/Jayhind_Indian",
    facebook: "https://www.facebook.com/jayhinddv",
  },
};

export const seoKeywords = [
  "Jayhind Yadav",
  "Jayhind Yadav portfolio",
  "Jayhind Yadav developer",
  "Jayhind Yadav Node.js developer",
  "Jayhind Yadav backend developer",
  "Jayhind Yadav full stack developer",
  "Jayhind Yadav software engineer",
  "Jayhinddev",
  "jayhinddev.in",
  "Node.js developer India",
  "backend developer India",
  "backend developer Delhi",
  "full stack developer India",
  "full stack developer Delhi",
  "React developer India",
  "JavaScript developer India",
  "PostgreSQL developer",
  "Redis developer",
  "BullMQ developer",
  "Docker developer",
  "AWS developer India",
  "AWS EC2 S3 RDS developer",
  "AWS Lambda API Gateway developer",
  "DynamoDB developer",
  "AWS SES SNS developer",
  "AWS ECS ECR developer",
  "Express.js developer",
  "REST API developer",
  "webhook developer",
  "CRM software developer",
  "real-time calling system developer",
  "WebRTC developer India",
  "Asterisk PBX developer",
  "PostgreSQL performance engineer",
  "Redis queue developer",
  "production API developer",
  "scalable systems developer",
  "backend-focused full stack developer",
  "software engineer Delhi",
  "software engineer India",
  "Node.js React PostgreSQL developer",
  "backend developer Node.js",
  "backend developer Node.js India",
  "backend developer Node.js Delhi",
  "backend developer Node.js Express.js",
  "backend developer Node.js PostgreSQL",
  "backend developer Node.js Redis",
  "backend developer Node.js Redis AWS",
  "backend developer Node.js Redis AWS India",
  "backend developer Node.js PostgreSQL Redis",
  "backend developer Node.js PostgreSQL Redis AWS",
  "backend developer Node.js PostgreSQL Redis Docker",
  "backend developer Node.js PostgreSQL Redis Docker AWS",
  "Node.js backend developer Redis AWS India",
  "Node.js Express Redis PostgreSQL developer",
  "Node.js Express PostgreSQL Redis Docker developer",
  "Node.js PostgreSQL Redis Docker AWS developer",
  "Node.js Redis BullMQ backend developer",
  "Node.js BullMQ queue developer",
  "backend developer Redis BullMQ",
  "backend developer queues Redis BullMQ",
  "JavaScript backend developer Node.js Express",
  "JavaScript Node.js PostgreSQL Redis developer",
  "REST API developer Node.js PostgreSQL",
  "REST API backend developer Node.js Express",
  "webhook developer Node.js Express",
  "API integration developer Node.js",
  "Node.js API developer AWS Lambda",
  "Node.js developer AWS API Gateway Lambda",
  "Node.js developer AWS EC2 S3 RDS",
  "Node.js developer AWS ECS ECR",
  "Node.js developer AWS SES SNS",
  "AWS backend developer Node.js Lambda API Gateway",
  "AWS backend developer EC2 S3 RDS DynamoDB",
  "backend developer AWS Lambda API Gateway DynamoDB",
  "backend developer Docker AWS Node.js",
  "Docker backend developer Node.js AWS",
  "CRM backend developer Node.js",
  "CRM backend developer Node.js PostgreSQL",
  "CRM backend developer Node.js Redis",
  "CRM software developer Node.js PostgreSQL Redis",
  "real-time workflow backend developer Node.js",
  "real-time calling backend developer Node.js",
  "WebRTC backend developer Node.js",
  "Asterisk PBX backend developer Node.js",
  "PostgreSQL performance Node.js developer",
  "PostgreSQL Redis backend developer",
  "Redis caching backend developer Node.js",
  "Redis session backend developer Node.js",
  "scalable API developer Node.js PostgreSQL Redis",
  "production API developer Node.js AWS Docker",
  "remote Node.js backend developer India",
  "Node.js backend engineer India",
  "Node.js software engineer Delhi",
  "4 years Node.js backend developer",
  "4 years backend developer Node.js Redis AWS",
];

export const profileSnapshot = [
  {
    label: "Role searches",
    items: [
      "Backend-focused full stack developer",
      "Node.js backend developer in India",
      "JavaScript and PostgreSQL software engineer",
      "Production API and CRM systems developer",
    ],
  },
  {
    label: "Core stack",
    items: [
      "Node.js, Express.js, REST APIs, Webhooks",
      "JavaScript, React, HTML, CSS",
      "PostgreSQL, SQL Server, MongoDB",
      "Redis, BullMQ, Docker, AWS services",
      "AWS EC2, S3, DynamoDB, RDS, ECS, ECR",
      "AWS API Gateway, Lambda, SES, SNS",
    ],
  },
  {
    label: "Domain experience",
    items: [
      "CRM platforms and real-time calling workflows",
      "Property valuation and automated reporting",
      "Lead automation, legal advisory, e-commerce",
      "Queues, concurrency, database performance",
    ],
  },
  {
    label: "Long-tail recruiter matches",
    items: [
      "Node.js backend developer with Redis, BullMQ, PostgreSQL, Docker, and AWS",
      "Backend developer for CRM systems, REST APIs, webhooks, and real-time workflows",
      "AWS backend developer using EC2, S3, RDS, DynamoDB, ECS, ECR, API Gateway, Lambda, SES, and SNS",
      "JavaScript backend engineer for scalable APIs, queues, caching, and production business systems",
    ],
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const highlights = [
  {
    title: "Production API ownership",
    body: "Designed backend APIs around business workflows, not isolated CRUD screens, with clear contracts for React clients and integrations.",
  },
  {
    title: "Real-time CRM systems",
    body: "Built calling workflows with WebRTC, PBX/Asterisk thinking, agent state, and customer communication inside daily CRM operations.",
  },
  {
    title: "Async jobs and queues",
    body: "Used Redis and BullMQ to keep user flows responsive while handling retries, duplicate execution, and long-running background work.",
  },
  {
    title: "Database performance",
    body: "Improved SQL-heavy workflows through indexing, query optimization, normalized data flows, and pragmatic caching.",
  },
  {
    title: "Deployment-ready delivery",
    body: "Containerized services, prepared production handoffs, and worked with the small details that make software easier to operate.",
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
    skills: ["Docker", "AWS EC2", "AWS S3", "AWS RDS", "DynamoDB", "ECS / ECR", "API Gateway", "Lambda", "SES / SNS"],
  },
  {
    group: "Frontend Support",
    skills: ["JavaScript", "React", "HTML", "CSS", "Dashboard workflows", "CRM interfaces"],
  },
];

export const experience = [
  {
    company: "VI Exports Pvt. Ltd.",
    role: "Software Engineer",
    period: "Dec 2024 - Present",
    location: "Delhi, India",
    bullets: [
      "Own backend-heavy full-stack features for CRM and business workflow systems using Node.js, React, and PostgreSQL.",
      "Design REST APIs, webhook flows, and real-time communication paths for internal teams that depend on fast operational visibility.",
      "Use Redis and BullMQ for asynchronous processing, retries, caching, and duplicate execution control across running services.",
      "Containerize services with Docker and work with AWS services including EC2, S3, RDS, DynamoDB, ECS/ECR, API Gateway, Lambda, SES, and SNS.",
    ],
  },
  {
    company: "DAPS",
    role: "Software Engineer",
    period: "Oct 2023 - Dec 2024",
    location: "Noida, India",
    bullets: [
      "Built full-stack systems for property valuation workflows with Node.js, React, MongoDB, SQL Server, and external APIs.",
      "Contributed to system architecture, API design, QA collaboration, and production handoffs for valuation and reporting products used by business teams.",
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
      "Handled end-to-end feature development from backend APIs to React interfaces, with attention to data flow, maintainability, and delivery speed.",
    ],
  },
];

export const projects = [
  {
    slug: "crm-real-time-calling",
    title: "CRM Platform with Integrated Real-Time Calling",
    summary:
      "A unified CRM and calling workspace for leads, customer interactions, agent state, and operational reporting.",
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
      "A reporting platform that reduced repetitive valuation work through normalized data, integrations, and backend-driven report generation.",
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
      "Automated lead workflows with integrations, queue-backed processing, and reliable communication events.",
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
      "A platform for secure document exchange, consultation workflows, and structured client-advisor communication.",
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
      "Production-style business platforms spanning bidding, commerce, inventory, insurance claims, and reporting.",
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
    question: "Where is Jayhind based?",
    answer:
      "Jayhind Yadav is based in Delhi, India and is open to backend-focused full-stack software engineering roles for teams that need production API, database, queue, and workflow ownership.",
  },
  {
    question: "What technologies does Jayhind work with?",
    answer:
      "Jayhind works with Node.js, JavaScript, Express.js, React, PostgreSQL, SQL Server, MongoDB, Redis, BullMQ, Docker, REST APIs, webhooks, WebRTC, CRM-style business systems, and AWS services including EC2, S3, DynamoDB, RDS, ECS, ECR, API Gateway, Lambda, SES, and SNS.",
  },
  {
    question: "What makes this profile relevant for companies?",
    answer:
      "The work is focused on practical production systems: API design, background jobs, database performance, real-time workflows, Docker deployments, and clear handoffs for business teams.",
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
  "/",
  "/projects",
  "/resume",
  "/contact",
  "/blog",
  ...blogPosts.map((post) => `/blog/${post.slug}`),
].map((path) => ({
  url: `${siteConfig.baseUrl}${path}`,
  lastModified: new Date(),
  changeFrequency: path === "/" ? "weekly" : "monthly",
  priority: path === "/" ? 1 : path === "/projects" ? 0.9 : 0.7,
}));
