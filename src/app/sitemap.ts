import type { MetadataRoute } from "next";

const SITE_URL = "https://hibachiinsurance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-15");

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/coverage`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/quote`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
