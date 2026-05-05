import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const configuredBaseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jayhinddev.in").replace(/\/+$/, "");

export const siteConfig = {
  name: "Jayhind Yadav",
  role: "Senior Software Engineer",
  baseUrl: configuredBaseUrl,
  description:
    "Jayhind Yadav is a backend-focused fullstack engineer with 4+ years of experience building scalable APIs, real-time systems, CRM platforms, Redis/BullMQ pipelines, PostgreSQL-backed services, Docker deployments, and AWS-based production systems.",
  seoTitle: "Jayhind Yadav | Senior Software Engineer | Node.js Backend Developer",
  seoDescription:
    "Portfolio and resume of Jayhind Yadav, a Senior Software Engineer and backend-focused fullstack engineer in Delhi with 4+ years of experience in Node.js, React, PostgreSQL, Redis, BullMQ, Docker, AWS, CRM systems, real-time workflows, and scalable business APIs.",
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
    label: "Best-fit engineering work",
    items: [
      "Node.js backend systems with Redis, BullMQ, PostgreSQL, Docker, and AWS.",
      "CRM platforms with REST APIs, webhooks, communication workflows, and real-time operations.",
      "AWS-backed services using EC2, S3, RDS, DynamoDB, ECS, ECR, API Gateway, Lambda, SES, and SNS.",
      "JavaScript backend work focused on scalable APIs, queues, caching, and production business systems.",
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
    title: "CRM calling, queues, and AI workflows",
    body: "Built CRM workflows with calling, Redis/BullMQ processing, high-volume webhooks, multi-channel communication, and AI-led automation in one platform.",
  },
  {
    title: "Multi-channel integrations",
    body: "Integrated communication workflows with services such as Twilio, Brevo, and Gupshup for CRM activity, lead follow-up, and customer operations.",
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

export const keyAchievements = [
  "Improved PostgreSQL performance by 30%+ through query optimization and indexing strategies.",
  "Built scalable backend systems handling 100K+ transactions with high reliability.",
  "Designed async processing pipelines using Redis and BullMQ for webhook handling.",
  "Reduced API latency using caching and optimized data flow.",
  "Developed 5+ production-grade applications including CRM and real-time systems.",
  "Implemented AI-driven lead generation and call analysis features in CRM workflows.",
  "Enhanced system reliability using queue-based architecture and fallback strategies.",
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
    skills: ["JavaScript", "React.js", "HTML", "CSS", "Dashboard workflows", "CRM interfaces"],
  },
  {
    group: "APIs & Integrations",
    skills: ["Twilio", "Brevo", "Gupshup", "AI API integration", "Workflow automation", "Call / data analysis"],
  },
];

export const experience = [
  {
    company: "VI Exports Pvt. Ltd.",
    role: "Senior Fullstack Developer",
    period: "Dec 2024 - Present",
    location: "Delhi, India",
    bullets: [
      "Built and scaled CRM platform using Node.js, React, PostgreSQL, and Redis.",
      "Handled high-volume webhook processing using BullMQ queues to prevent database overload.",
      "Integrated Twilio, Brevo, and Gupshup for multi-channel communication workflows.",
      "Optimized PostgreSQL queries and indexing, improving performance by 30%+.",
      "Implemented AI-based lead generation and call recording analysis features.",
      "Designed caching strategies reducing database load and improving API performance.",
      "Deployed containerized applications using Docker on cloud infrastructure.",
    ],
  },
  {
    company: "DAPS",
    role: "Software Engineer",
    period: "Oct 2023 - Dec 2024",
    location: "Noida, India",
    bullets: [
      "Developed scalable full-stack applications using Node.js, React, and MongoDB.",
      "Designed REST APIs and optimized SQL Server queries, improving performance by 20%.",
      "Contributed to system architecture, reducing development time by 15%.",
    ],
  },
  {
    company: "Absolute Dimensions Pvt. Ltd.",
    role: "Software Developer",
    period: "Jun 2021 - Jul 2023",
    location: "Patna, India",
    bullets: [
      "Built MERN stack applications and optimized MySQL databases for large datasets.",
      "Developed responsive UI using React.js for enterprise applications.",
    ],
  },
];

export const projects = [
  {
    slug: "crm-real-time-calling",
    title: "CRM Platform with Calling, BullMQ Workers and AI Automation",
    summary:
      "A unified CRM workspace for leads, calling workflows, high-volume webhooks, Redis/BullMQ workers, multi-channel communication, AI lead generation, call recording analysis, and operational reporting.",
    problem:
      "Business teams needed one place to manage leads, customer communication, calling workflows, webhook-heavy events, follow-up automation, and reporting without switching between disconnected tools or overloading the database.",
    solution:
      "Built and scaled an in-house CRM platform using Node.js, React, PostgreSQL, Redis, and BullMQ. The system combines calling workflows, queue-backed webhook processing, Twilio/Brevo/Gupshup integrations, AI-powered lead generation, and call recording analysis inside the same operational workspace.",
    architecture: [
      "Integrated calling and customer communication into CRM workflows instead of treating them as separate external tools.",
      "Used Redis and BullMQ for high-volume webhook processing, async jobs, retries, and protection against database overload.",
      "Integrated Twilio, Brevo, and Gupshup for multi-channel communication workflows.",
      "Implemented AI-based lead generation and call recording analysis features for business teams.",
      "Optimized PostgreSQL queries, indexing, and caching strategies to reduce API latency and database load.",
      "Designed APIs for leads, call events, webhook events, customer state, follow-ups, and operational reporting.",
    ],
    impact: [
      "Improved PostgreSQL performance by 30%+ through query optimization and indexing.",
      "Handled high-volume webhook processing through queue-based architecture.",
      "Kept lead, call, communication, automation, and reporting context inside one CRM workflow.",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "Redis", "BullMQ", "Docker", "Twilio", "Brevo", "Gupshup", "AI APIs"],
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
