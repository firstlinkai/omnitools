import type { MetadataRoute } from "next";
import { TOOLS, isLive } from "@/lib/tools-registry";

const BASE = "https://www.freetools.click";

/**
 * XML sitemap served at /sitemap.xml.
 *
 * The tool URLs are generated from TOOLS in lib/tools-registry.ts — the single
 * source of truth for the suite — so adding a tool to the registry publishes it
 * to the sitemap automatically, with no edits here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // One date shared by every entry so the whole sitemap moves together.
  // Date-only (YYYY-MM-DD) is the most widely-accepted <lastmod> format —
  // a full timestamp with milliseconds is valid ISO 8601 but some crawlers
  // are pickier about it.
  const lastModified = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/download`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const toolRoutes: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${BASE}/tools/${tool.slug}`,
    lastModified,
    changeFrequency: "monthly",
    // Coming Soon stubs are real pages, but rank below shipped tools.
    priority: isLive(tool) ? 0.8 : 0.3,
  }));

  return [...staticRoutes, ...toolRoutes];
}
