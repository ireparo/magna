import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://royalblue-snail-286673.hostingersite.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/serveis/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/exercici/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/equip/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tarifes/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contacte/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
