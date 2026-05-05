export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
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
