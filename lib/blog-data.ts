export interface Blog {
  id: string
  title: string
  description: string
  content: string
  image: string
  category: string
  date: string
  author: string
  slug: string
}

export const categories = [
  { name: "Capital Market", count: 12 },
  { name: "Bonus Issue", count: 8 },
  { name: "Trading", count: 15 },
  { name: "Block Deal", count: 6 },
  { name: "Financial News", count: 18 },
  { name: "Grey Market Premium", count: 10 },
  { name: "Listing Gains", count: 9 },
  { name: "QIB/NII/Retail Updates", count: 7 },
  { name: "SME IPOs", count: 14 },
  { name: "Regulations", count: 11 },
]

const blogs: Blog[] = [
  {
    id: "1",
    title: "Understanding IPO Grey Market Premium: What Investors Should Know",
    description:
      "Explore the concept of Grey Market Premium in IPOs and how it impacts listing day performance and investor decisions.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Grey Market Premium",
    date: "June 5, 2023",
    author: "Rahul Sharma",
    slug: "understanding-ipo-grey-market-premium",
  },
  {
    id: "2",
    title: "Top 5 SME IPOs to Watch in 2023",
    description:
      "Discover the most promising Small and Medium Enterprise IPOs coming to the market this year with potential for significant returns.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "SME IPOs",
    date: "May 28, 2023",
    author: "Priya Patel",
    slug: "top-sme-ipos-2023",
  },
  {
    id: "3",
    title: "How Block Deals Impact Stock Prices: Analysis and Insights",
    description:
      "An in-depth look at how large block deals influence stock prices in both short and long term market scenarios.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Block Deal",
    date: "May 15, 2023",
    author: "Vikram Malhotra",
    slug: "block-deals-stock-price-impact",
  },
  {
    id: "4",
    title: "SEBI's New IPO Regulations: What Changes for Retail Investors",
    description:
      "Breaking down the latest regulatory changes by SEBI and how they affect retail participation in initial public offerings.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Regulations",
    date: "May 10, 2023",
    author: "Anjali Desai",
    slug: "sebi-new-ipo-regulations",
  },
  {
    id: "5",
    title: "Analyzing Recent Listing Gains: Patterns and Predictions",
    description:
      "A statistical analysis of listing day gains from recent IPOs and what patterns emerge for future offerings.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Listing Gains",
    date: "April 28, 2023",
    author: "Sanjay Kapoor",
    slug: "analyzing-recent-listing-gains",
  },
  {
    id: "6",
    title: "The Impact of QIB Subscription on IPO Success",
    description:
      "How Qualified Institutional Buyer subscription levels correlate with IPO performance and what it means for retail investors.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "QIB/NII/Retail Updates",
    date: "April 22, 2023",
    author: "Neha Gupta",
    slug: "qib-subscription-ipo-success",
  },
  {
    id: "7",
    title: "Capital Market Trends: Q2 2023 Outlook",
    description: "Expert analysis on emerging trends in the Indian capital markets for the second quarter of 2023.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Capital Market",
    date: "April 15, 2023",
    author: "Rajesh Kumar",
    slug: "capital-market-trends-q2-2023",
  },
  {
    id: "8",
    title: "Bonus Issues: Impact on Share Price and Investor Strategy",
    description: "Understanding how bonus issues affect share prices and what strategies investors should consider.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Bonus Issue",
    date: "April 8, 2023",
    author: "Deepak Singhania",
    slug: "bonus-issues-share-price-impact",
  },
  {
    id: "9",
    title: "Day Trading Strategies for Volatile IPO Stocks",
    description: "Effective day trading techniques specifically tailored for newly listed and volatile IPO stocks.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Trading",
    date: "March 30, 2023",
    author: "Amit Shah",
    slug: "day-trading-ipo-stocks",
  },
  {
    id: "10",
    title: "Financial News Impact: How Headlines Move Markets",
    description:
      "Analyzing how financial news headlines and announcements create market movements and trading opportunities.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Financial News",
    date: "March 22, 2023",
    author: "Meera Iyer",
    slug: "financial-news-market-impact",
  },
  {
    id: "11",
    title: "SME IPO Investing: Risks and Rewards",
    description:
      "A balanced perspective on the unique risks and potential rewards of investing in Small and Medium Enterprise IPOs.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "SME IPOs",
    date: "March 15, 2023",
    author: "Suresh Menon",
    slug: "sme-ipo-risks-rewards",
  },
  {
    id: "12",
    title: "Technical Analysis for IPO Stocks: Post-Listing Patterns",
    description: "How to apply technical analysis to newly listed stocks and identify profitable trading patterns.",
    content: "Full blog content here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Trading",
    date: "March 8, 2023",
    author: "Ravi Deshmukh",
    slug: "technical-analysis-ipo-stocks",
  },
]

export function getAllBlogs() {
  return blogs
}

export function getBlogsByCategory(category: string) {
  return blogs.filter((blog) => blog.category === category)
}

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug)
}

export function searchBlogs(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(lowercaseQuery) || blog.description.toLowerCase().includes(lowercaseQuery),
  )
}
