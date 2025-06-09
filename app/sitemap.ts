import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yoursite.com"

  // Static pages
  const staticPages = [
    "",
    "/upcoming-ipo-calendar",
    "/ipo-subscription-status",
    "/ipo-grey-market-premium",
    "/share-buyback-offers",
    "/sme-ipo-calendar",
    "/stock-brokers-comparison",
    "/calculators",
    "/calculators/sip",
    "/calculators/lumpsum",
    "/calculators/fd",
    "/calculators/ppf",
    "/calculators/rd",
    "/calculators/nps",
    "/calculators/swp",
    "/calculators/retirement",
    "/calculators/goal-based",
    "/calculators/elss",
    "/calculators/tax-saving",
    "/blog",
    "/about",
    "/contact",
    "/our-products",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
    "/sitemap",
  ]

  // Sample IPO slugs (replace with actual data)
  const ipoSlugs = [
    "oswal-pumps",
    "techcorp-solutions",
    "green-energy-ltd",
    "digital-innovations",
    "healthcare-ventures",
    "fintech-dynamics",
  ]

  // Sample buyback slugs (replace with actual data)
  const buybackSlugs = ["infosys", "tcs", "wipro", "hcl-technologies", "tech-mahindra", "bharti-airtel"]

  // Sample broker slugs (replace with actual data)
  const brokerSlugs = [
    "zerodha",
    "upstox",
    "angel-one",
    "icici-direct",
    "hdfc-securities",
    "groww",
    "5paisa",
    "sharekhan",
  ]

  // Sample blog post slugs (replace with actual data)
  const blogSlugs = [
    "how-to-apply-for-ipo-in-india",
    "understanding-ipo-grey-market-premium",
    "best-investment-calculators-2025",
    "share-buyback-vs-dividends",
    "choosing-right-stock-broker",
  ]

  const sitemap: MetadataRoute.Sitemap = [
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    })),

    // IPO detail pages
    ...ipoSlugs.map((slug) => ({
      url: `${baseUrl}/ipo/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),

    // Buyback detail pages
    ...buybackSlugs.map((slug) => ({
      url: `${baseUrl}/buyback/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),

    // Broker detail pages
    ...brokerSlugs.map((slug) => ({
      url: `${baseUrl}/broker/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Blog post pages
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]

  return sitemap
}
