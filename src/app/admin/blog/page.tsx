import type { Metadata } from "next";
import { BlogStudio } from "./BlogStudio";

export const metadata: Metadata = {
  title: "Blog Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogStudioPage() {
  return <BlogStudio />;
}
