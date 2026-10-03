import type { MetadataRoute } from "next";
import { DEMO_CONTENT_ACTIVE } from "@/content/demo";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Demo ma'lumot turganda sahifa qidiruv tizimlaridan yopiq.
  if (DEMO_CONTENT_ACTIVE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
