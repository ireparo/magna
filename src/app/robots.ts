import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://royalblue-snail-286673.hostingersite.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/uploads/"],
    },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
