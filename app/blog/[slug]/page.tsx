import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogTitle from "@/components/blog-title"
import BlogDate from "@/components/blog-date"
import BlogFeaturedImage from "@/components/blog-featured-image"
import BlogAuthorInfo from "@/components/blog-author-info"
import BlogTableOfContents from "@/components/blog-table-of-contents"
import BlogContent from "@/components/blog-content"
import BlogFaqSection from "@/components/blog-faq-section"
import BlogRelatedPosts from "@/components/blog-related-posts"
import BlogSocialSharing from "@/components/blog-social-sharing"

// Dummy blog data - replace with API call later
const getBlogData = async (slug: string) => {
  // Simulate API call
  const blogData = {
    title: "Complete Guide to IPO Investment Strategies in 2024",
    slug: "ipo-investment-strategies-2024",
    publishedDate: "2024-01-15T10:00:00Z",
    featuredImage: "/placeholder.svg?height=400&width=800&text=IPO+Investment+Guide",
    author: {
      name: "Rajesh Kumar",
      bio: "Senior Financial Analyst with 10+ years of experience in IPO research and market analysis.",
      avatar: "/placeholder.svg?height=80&width=80&text=RK",
      socialLinks: {
        twitter: "https://twitter.com/rajeshkumar",
        linkedin: "https://linkedin.com/in/rajeshkumar",
      },
    },
    content: `
      <h2 id="understanding-ipo-basics">Understanding IPO Basics</h2>
      <p>An Initial Public Offering (IPO) represents a company's first sale of stock to the public. This comprehensive guide will help you understand the fundamentals of IPO investing and develop effective strategies.</p>
      
      <h3 id="what-is-an-ipo">What is an IPO?</h3>
      <p>When a private company decides to go public, it offers shares to institutional and retail investors through an IPO. This process allows companies to raise capital for expansion while giving investors an opportunity to own a piece of the business.</p>
      
      <h2 id="key-factors-to-consider">Key Factors to Consider</h2>
      <p>Before investing in any IPO, consider these crucial factors:</p>
      <ul>
        <li><strong>Company Fundamentals:</strong> Analyze the company's financial health, revenue growth, and profitability.</li>
        <li><strong>Market Conditions:</strong> Consider the overall market sentiment and sector performance.</li>
        <li><strong>Valuation:</strong> Compare the IPO price with similar companies in the market.</li>
        <li><strong>Management Team:</strong> Evaluate the experience and track record of the leadership team.</li>
      </ul>
      
      <h3 id="financial-analysis">Financial Analysis</h3>
      <p>Conduct thorough due diligence by reviewing the company's prospectus, financial statements, and growth projections.</p>
      
      <h2 id="investment-strategies">Investment Strategies</h2>
      <p>Develop a systematic approach to IPO investing with these proven strategies:</p>
      
      <h3 id="long-term-approach">Long-term Approach</h3>
      <p>Focus on companies with strong fundamentals and sustainable competitive advantages for long-term wealth creation.</p>
      
      <h3 id="diversification">Diversification</h3>
      <p>Spread your IPO investments across different sectors to minimize risk and maximize potential returns.</p>
      
      <h2 id="risk-management">Risk Management</h2>
      <p>IPO investing carries inherent risks. Implement proper risk management techniques to protect your capital.</p>
    `,
    description:
      "Learn effective IPO investment strategies for 2024. Comprehensive guide covering fundamentals, analysis techniques, and risk management for successful IPO investing.",
    tags: ["IPO", "Investment", "Stock Market", "Financial Planning"],
    enableSharing: true,
    faq: [
      {
        question: "What is the minimum investment required for IPOs?",
        answer:
          "The minimum investment varies by IPO, typically ranging from ₹10,000 to ₹15,000 for retail investors, depending on the lot size and share price.",
      },
      {
        question: "How long should I hold IPO shares?",
        answer:
          "This depends on your investment strategy. Long-term investors may hold for years, while short-term traders might exit within days or weeks based on market performance.",
      },
      {
        question: "Can I sell IPO shares on the listing day?",
        answer: "Yes, you can sell IPO shares on the listing day once trading begins on the stock exchange.",
      },
    ],
    relatedPosts: [
      {
        title: "Top 10 IPOs to Watch in 2024",
        slug: "top-ipos-2024",
        image: "/placeholder.svg?height=200&width=300&text=Top+IPOs+2024",
        publishedDate: "2024-01-10T10:00:00Z",
      },
      {
        title: "IPO vs Direct Listing: What's the Difference?",
        slug: "ipo-vs-direct-listing",
        image: "/placeholder.svg?height=200&width=300&text=IPO+vs+Direct+Listing",
        publishedDate: "2024-01-08T10:00:00Z",
      },
      {
        title: "How to Analyze IPO Prospectus",
        slug: "analyze-ipo-prospectus",
        image: "/placeholder.svg?height=200&width=300&text=IPO+Prospectus+Analysis",
        publishedDate: "2024-01-05T10:00:00Z",
      },
    ],
  }

  if (slug !== blogData.slug) {
    return null
  }

  return blogData
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getBlogData(params.slug)

  if (!data) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${data.title} | IPO Calendar Blog`,
    description: data.description,
    keywords: data.tags.join(", "),
    authors: [{ name: data.author.name }],
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.featuredImage,
          width: 800,
          height: 400,
          alt: data.title,
        },
      ],
      type: "article",
      publishedTime: data.publishedDate,
      authors: [data.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.featuredImage],
    },
  }
}

export default async function BlogSlugPage({ params }: { params: { slug: string } }) {
  const data = await getBlogData(params.slug)

  if (!data) {
    notFound()
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    image: data.featuredImage,
    datePublished: data.publishedDate,
    dateModified: data.publishedDate,
    author: {
      "@type": "Person",
      name: data.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "IPO Calendar",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ipocalendar.com/blog/${data.slug}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <header className="mb-8">
              {data?.title && <BlogTitle title={data.title} />}
              {data?.publishedDate && <BlogDate date={data.publishedDate} />}
              {data?.featuredImage && <BlogFeaturedImage src={data.featuredImage} alt={data.title} />}
              {data?.author && <BlogAuthorInfo author={data.author} />}
            </header>

            {/* Main Content Layout */}
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Main Content */}
              <main className="lg:col-span-3">
                {data?.content && <BlogContent content={data.content} />}
                {data?.faq && data.faq.length > 0 && <BlogFaqSection faqs={data.faq} />}
              </main>

              {/* Sidebar */}
              <aside className="lg:col-span-1 mt-8 lg:mt-0">
                {data?.content && <BlogTableOfContents content={data.content} />}
                {data?.enableSharing && <BlogSocialSharing title={data.title} slug={data.slug} />}
              </aside>
            </div>

            {/* Related Posts */}
            {data?.relatedPosts && data.relatedPosts.length > 0 && (
              <section className="mt-12">
                <BlogRelatedPosts posts={data.relatedPosts} />
              </section>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
