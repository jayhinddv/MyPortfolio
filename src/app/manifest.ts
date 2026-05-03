import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} Portfolio`,
    short_name: "Jayhind",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fc",
    theme_color: "#10141f",
    icons: [
      {
        src: "/favicon.png",
        sizes: "500x500",
        type: "image/png",
      },
      {
        src: "/portfolioLogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
