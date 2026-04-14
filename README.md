# Jayhind Yadav Portfolio

Premium recruiter-focused portfolio for a backend-heavy full-stack engineer.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel-ready metadata routes, sitemap, robots, manifest, and OG image generation

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Update content

Most editable portfolio content lives in [src/data/site.ts](src/data/site.ts):

- Name, title, email, phone, location, social links
- Resume path
- Hero positioning and SEO description
- Highlights
- Project case studies
- Skills / expertise groups
- Experience bullets
- Blog starter posts
- FAQ content

Replace the resume at [public/Resumes.pdf](public/Resumes.pdf). Replace the profile image at [public/my.png](public/my.png) if you want a new portrait.

## SEO setup

Included:

- Next.js metadata API in [src/app/layout.tsx](src/app/layout.tsx)
- Page-level metadata for projects, resume, contact, and blog
- `robots.ts`
- `sitemap.ts`
- `manifest.ts`
- Dynamic OG image at `/opengraph-image`
- JSON-LD for Person, WebSite, BreadcrumbList, FAQ, BlogPosting, and Project/CreativeWork

Set your real production domain before launch:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Vercel deployment

The repository includes [vercel.json](vercel.json). On Vercel, use:

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: Next.js default

## Analytics and Search Console

Add Google Search Console verification and analytics provider code in [src/app/layout.tsx](src/app/layout.tsx) when ready. Keep any tracking scripts lazy and privacy-conscious.
