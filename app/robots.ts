import type { MetadataRoute } from "next";

const BASE = "https://www.freetools.click";

/** robots.txt served at /robots.txt. Everything is crawlable except the API. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
