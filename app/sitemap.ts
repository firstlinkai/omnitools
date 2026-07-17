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
  // One timestamp shared by every entry so the whole sitemap moves together.
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
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
