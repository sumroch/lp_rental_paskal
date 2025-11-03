import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://paskalrental.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/syarat-ketentuan`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/kebijakan-privasi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/bantuan`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
