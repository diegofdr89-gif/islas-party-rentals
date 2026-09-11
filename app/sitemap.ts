import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.islaspartyrentals.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "es-US": "https://www.islaspartyrentals.com",
          "en-US": "https://www.islaspartyrentals.com/en",
        },
      },
    },
    {
      url: "https://www.islaspartyrentals.com/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "es-US": "https://www.islaspartyrentals.com",
          "en-US": "https://www.islaspartyrentals.com/en",
        },
      },
    },
  ];
}