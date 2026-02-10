import type { MetadataRoute } from "next"
import { ipos } from "@/lib/ipo-data"
import { buybacks } from "@/lib/buyback-data"
import { brokers } from "@/lib/broker-data"
import { getAllBlogs } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yoursite.com" // Update this with your actual domain

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
    "/market-holidays",
    "/glossary",
  ]

  const blogs = getAllBlogs()

  const sitemap: MetadataRoute.Sitemap = [
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    })),

    // IPO detail pages
    ...ipos.map((ipo) => ({
      url: `${baseUrl}/ipo/${ipo.slug}`,
      lastModified: new Date(), // In a real app, use ipo.updatedAt
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),

    // Buyback detail pages
    ...buybacks.map((bb) => ({
      url: `${baseUrl}/buyback/${bb.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),

    // Broker detail pages
    ...brokers.map((broker) => ({
      url: `${baseUrl}/broker/${broker.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Blog post pages
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]

  return sitemap
}
