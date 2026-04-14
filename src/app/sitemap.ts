import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes;
}
