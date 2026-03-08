import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/lib/seo";

const ROUTES = ["/", "/about", "/services", "/works", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map((route) => ({
    url: getCanonicalUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
