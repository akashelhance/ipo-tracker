import type { Metadata } from "next"
import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import { CTAButton } from "@/components/cta-button"
import {
  TrendingUp,
  Calendar,
  Building2,
  Star,
  ArrowRight,
  Info,
  Users,
  FileText,
  Target,
  DollarSign,
  ExternalLink,
    BarChart3,
     Calculator,
  ChevronDown,
} from "lucide-react"

interface IPO {
  ipo_name: string
  title: string
  slug: string
  ipo_type: string | null
  published_on: string
  issue_type: string
  price_band_text: string
  lot_size_text: string
  gmp_text: string
  listing: string[]
  timeline: {
    open_date?: string
    close_date?: string
    allotment_date?: string
    refunds_date?: string
    credit_to_demat_date?: string
    listing_date?: string
  }
}

interface PageProps {
  searchParams: { search?: string }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Upcoming SME IPO Calendar 2025 – IPO List with Dates & Price Band | Live Updates",
    description:
      "Check the complete list of upcoming SME IPOs in 2025 with issue dates, price band, lot size, exchange platform and more. Track SME IPOs with live updates.",
    keywords:
      "upcoming SME IPO 2025, IPO calendar, IPO list, IPO dates, price band, lot size, SME IPO, NSE IPO, BSE IPO",
    authors: [{ name: "SME IPO Calendar Team" }],
    creator: "SME IPO Calendar",
    publisher: "SME IPO Calendar",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: "Upcoming SME IPO Calendar 2025 – Complete IPO List with Dates & Price Band",
      description:
        "Track upcoming SME IPOs in 2025 with complete details including issue dates, price band, lot size and exchange platform. Get live updates on SME IPOs.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/upcoming-sme-ipo-calendar",
      siteName: "SME IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/sme-ipo-calendar-og.jpg",
          width: 1200,
          height: 630,
          alt: "Upcoming SME IPO Calendar 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Upcoming SME IPO Calendar 2025 – Complete IPO List",
      description: "Track upcoming SME IPOs in 2025 with complete details including dates, price band, and lot size.",
      images: ["https://yoursite.com/images/sme-ipo-calendar-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/upcoming-sme-ipo-calendar",
    },
  }
}

function formatDate(dateString?: string): string {
  if (!dateString) return "N/A"
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function extractPriceBand(priceBandText: string): { low: number; high: number } {
  const matches = priceBandText.match(/₹\s?([\d,.]+)\s?to\s?₹\s?([\d,.]+)/i)
  if (!matches) return { low: 0, high: 0 }
  const low = Number.parseFloat(matches[1].replace(/,/g, ""))
  const high = Number.parseFloat(matches[2].replace(/,/g, ""))
  return { low, high }
}

function formatPriceBand(low: number, high: number): string {
  if (!low && !high) return "N/A"
  return `₹${low.toLocaleString("en-IN")} - ₹${high.toLocaleString("en-IN")}`
}

export default async function SMEIPOCalendarPage({ searchParams }: PageProps) {
  const search = searchParams?.search || ""

  // Fetch IPO data server-side with ISR (revalidates every 5 minutes)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/ipos/light`, {
    next: { revalidate: 300 }, // Cache for 5 minutes
  })

  if (!res.ok) {
    throw new Error("Failed to fetch IPO data")
  }

  const data = await res.json()
  const allIpos: IPO[] = data.docs || []

  let ipos = allIpos.filter((ipo) => ipo.ipo_type === "SME")

  // Filter by search query (case insensitive)
  if (search) {
    ipos = ipos.filter((ipo) => ipo.title.toLowerCase().includes(search.toLowerCase()))
  }

  const totalSMEIPOs = ipos.length
  const openSMEIPOs = ipos.filter((ipo) => {
    const openDate = new Date(ipo.timeline.open_date || ipo.published_on)
    const closeDate = new Date(ipo.timeline.close_date || ipo.published_on)
    const now = new Date()
    return now >= openDate && now <= closeDate
  }).length

  // FAQ data
  const faqs = [
    {
      q: "What is an SME IPO?",
      a: "An SME Initial Public Offering (IPO) is when a smaller company offers its shares to the public for the first time on a stock exchange, typically with relaxed listing requirements.",
    },
    {
      q: "How to apply for an SME IPO in India?",
      a: "You can apply for SME IPOs through your broker's trading platform, mobile apps, or UPI-enabled applications. You need a demat account and PAN card to apply.",
    },
    {
      q: "What is the minimum investment required for SME IPO?",
      a: "The minimum investment depends on the lot size and price band of the SME IPO. It typically ranges from ₹10,000 to ₹15,000 for retail investors.",
    },
    {
      q: "What are the benefits of investing in SME IPOs?",
      a: "SME IPOs offer high growth potential and the chance to invest in emerging businesses. They also provide diversification opportunities and transparency in financial disclosures.",
    },
    {
      q: "When do SME IPO shares get allotted?",
      a: "SME IPO shares are typically allotted within 7-10 working days after the IPO closes. The allotment process is done through a computerized lottery system.",
    },
    {
      q: "What happens if an SME IPO is oversubscribed?",
      a: "If an SME IPO is oversubscribed, shares are allotted through a lottery system. Retail investors may receive partial allotment or no allotment based on the subscription level.",
    },
    {
      q: "Can I sell SME IPO shares immediately after listing?",
      a: "Yes, you can sell SME IPO shares immediately after they are listed and credited to your demat account, usually on the listing day.",
    },
    {
      q: "What documents are required for SME IPO application?",
      a: "You need a PAN card, Aadhaar card, bank account, and demat account to apply for an SME IPO. Some brokers may require additional KYC documents.",
    },
  ]

  return (
    <>
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Upcoming SME IPO Calendar 2025",
            description:
              "Complete list of upcoming SME IPOs in 2025 with issue dates, price band, lot size and exchange platform details.",
            url: "https://yoursite.com/upcoming-sme-ipo-calendar",
            mainEntity: {
              "@type": "ItemList",
              name: "Upcoming SME IPOs 2025",
              description: "List of upcoming SME Initial Public Offerings in India for 2025",
              numberOfItems: ipos.length,
              itemListElement: ipos.map((ipo, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "FinancialProduct",
                  name: `${ipo.title} IPO`,
                  description: `${ipo.title} Initial Public Offering with price band ${ipo.price_band_text}`,
                  url: `https://yoursite.com/ipo/${ipo.slug}`,
                  provider: {
                    "@type": "Organization",
                    name: ipo.title,
                  },
                  offers: {
                    "@type": "Offer",
                    price: ipo.price_band_text,
                    priceCurrency: "INR",
                    validFrom: ipo.timeline.open_date,
                    validThrough: ipo.timeline.close_date,
                  },
                },
              })),
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://yoursite.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "SME IPO Calendar",
                  item: "https://yoursite.com/upcoming-sme-ipo-calendar",
                },
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "SME IPO Calendar",
              logo: {
                "@type": "ImageObject",
                url: "https://yoursite.com/logo.png",
              },
            },
            dateModified: new Date().toISOString(),
            datePublished: "2024-01-01T00:00:00Z",
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Star className="h-4 w-4 mr-2" />
                SME IPO Tracking
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">SME IPO Calendar 2025</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover high-growth SME investment opportunities. Track dates, price bands, and never miss a promising
                SME IPO.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{totalSMEIPOs}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">Total SME IPOs</div>
              <div className="text-purple-200 text-sm mt-1">Growth opportunities</div>
            </div>

            <div className="group bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{openSMEIPOs}</div>
              </div>
              <div className="text-emerald-100 text-lg font-medium">Open for Subscription</div>
              <div className="text-emerald-200 text-sm mt-1">Active SME offerings</div>
            </div>

            <div className="group bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4 inline-flex items-center">
                <DollarSign className="h-6 w-6 text-white mr-2" />
              </div>

              <Link
                href="https://zerodha.com/?c=QT4498&s=CONSOLE"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
              >
                <div className="text-orange-100 text-lg font-medium mb-2">Start Investing</div>
                <div className="text-orange-200 text-sm">Open Demat Account</div>
              </Link>
            </div>
          </div>

          {/* Enhanced Table Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            {/* Table Header with Search */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming SME IPOs 2025</h2>
                  <p className="text-gray-600">Track the latest public offerings</p>
                </div>
                <SearchForm defaultValue={search} />
              </div>
            </div>

            {/* Enhanced Table */}
            <div className="overflow-x-auto">
              {ipos.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Company Details
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        IPO Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Timeline
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price Band
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Investment
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Exchange
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {ipos.map((ipo) => {
                      const { low, high } = extractPriceBand(ipo.price_band_text || "")
                      const lotSize = Number.parseInt(ipo.lot_size_text || "1") || 1

                      return (
                        <tr
                          key={ipo.slug}
                          className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                        >
                          {/* Company Details */}
                          <td className="px-6 py-6">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                {ipo.title.charAt(0)}
                              </div>
                              <div className="ml-4">
                                <Link
                                  href={`/ipo/${ipo.slug}`}
                                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors group-hover:text-blue-700"
                                >
                                  {ipo.ipo_name}
                                  <ArrowRight className="inline h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <div className="flex items-center mt-1">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                                    {ipo.issue_type || "N/A"}
                                  </span>
                                  <span className="ml-2 text-sm text-gray-500">{ipo.lot_size_text}</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* IPO Type */}
                          <td className="px-6 py-6">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-green-100 to-emerald-100 text-green-800">
                              {ipo.ipo_type || "N/A"}
                            </span>
                          </td>

                          {/* Timeline */}
                          <td className="px-6 py-6">
                            <div className="space-y-2">
                              <div className="flex items-center text-sm">
                                <Calendar className="h-4 w-4 text-green-500 mr-2" />
                                <span className="font-medium text-gray-900">Opens:</span>
                                <span className="ml-2 text-green-600 font-semibold">
                                  {formatDate(ipo.timeline.open_date || ipo.published_on)}
                                </span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Calendar className="h-4 w-4 text-red-500 mr-2" />
                                <span className="font-medium text-gray-900">Closes:</span>
                                <span className="ml-2 text-red-600 font-semibold">
                                  {formatDate(ipo.timeline.close_date || ipo.published_on)}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Price Band */}
                          <td className="px-6 py-6">
                            <div className="text-lg font-bold text-gray-900 mb-1">{`₹${low.toLocaleString()} - ₹${high.toLocaleString()}`}</div>
                            <div className="text-sm text-gray-500">Price Range</div>
                          </td>

                          {/* Investment */}
                          <td className="px-6 py-6">
                            <div className="text-lg font-bold text-purple-600 mb-1">{lotSize}</div>
                            <div className="text-sm text-gray-500">Lot Size</div>
                            <div className="text-xs text-gray-400 mt-1">
                              Min: ₹{(high * lotSize).toLocaleString("en-IN")}
                            </div>
                          </td>

                          {/* Exchange */}
                          <td className="px-6 py-6">
                            <span className="inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200">
                              <Building2 className="h-4 w-4 mr-1" />
                              {ipo.listing.join(", ")}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {search ? "No SME IPOs found" : "No SME IPOs available"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {search
                      ? `No SME IPOs match your search for "${search}". Try a different search term.`
                      : "There are currently no SME IPOs available. Check back soon for new opportunities."}
                  </p>
                  {search && (
                    <Link
                      href="/sme-ipos"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      View All SME IPOs
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Comprehensive IPO Information Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-blue-600" />
                What is an SME IPO?
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  An SME Initial Public Offering (IPO) is when a smaller company offers its shares to the public for the
                  first time on a stock exchange, typically with relaxed listing requirements. This process allows
                  companies to raise capital from public investors to fund business expansion, pay off debts, or provide
                  liquidity to existing shareholders. For investors, SME IPOs present an opportunity to invest in
                  emerging businesses during their transition from private to public ownership.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <Building2 className="h-6 w-6 mr-3" />
                    Understanding SME IPO Process
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    The SME IPO process involves several stages including company valuation, regulatory approvals from
                    SEBI, roadshows to institutional investors, price discovery, and finally the public offering.
                    Companies work with investment banks and underwriters to determine the IPO price band, which
                    represents the range within which investors can bid for shares. The final price is determined based
                    on demand and market conditions.
                  </p>
                </div>

                <p className="leading-relaxed">
                  SME IPOs are designed for smaller companies with a post-issue paid-up capital between ₹1-25 crores.
                  These offerings have relaxed compliance requirements and provide growth-stage companies access to
                  public capital. SME IPOs often offer higher growth potential but come with increased risk.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 mr-3" />
                      SME IPOs
                    </h4>
                    <p className="text-green-800 leading-relaxed">
                      SME IPOs are designed for smaller companies with a post-issue paid-up capital between ₹1-25
                      crores. These offerings have relaxed compliance requirements and provide growth-stage companies
                      access to public capital. SME IPOs often offer higher growth potential but come with increased
                      risk.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 mr-3" />
                    IPO Application Process
                  </h4>
                  <p className="text-amber-800 leading-relaxed">
                    To apply for an IPO, investors need a demat account, PAN card, and bank account. Applications can be
                    submitted through brokers, banks, or UPI-enabled platforms. Retail investors can apply for shares
                    worth up to ₹2 lakhs, while applications above this amount are classified under the
                    Non-Institutional Investor (NII) category. The allotment process is conducted through a computerized
                    lottery system for oversubscribed IPOs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Apply for IPOs with zero brokerage charges</p>
          </div>

          {/* Enhanced Information Section */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-blue-600" />
              Key Benefits of SME IPO Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Early Investment Opportunity</h4>
                <p className="leading-relaxed">
                  SME IPOs provide the chance to invest in companies at their public market debut, potentially capturing
                  significant growth as the company expands and matures in the public markets.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Portfolio Diversification</h4>
                <p className="leading-relaxed">
                  Adding SME IPO stocks to your portfolio can provide diversification across different sectors, company
                  sizes, and growth stages, helping to spread investment risk.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Transparency & Disclosure</h4>
                <p className="leading-relaxed">
                  Public companies are required to maintain high standards of financial disclosure and corporate
                  governance, providing investors with regular updates and transparency.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Liquidity Benefits</h4>
                <p className="leading-relaxed">
                  Once listed, SME IPO shares can be easily bought and sold on stock exchanges, providing liquidity that
                  is not available with private company investments.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
             {/* Explore More Investment Tools Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore More Investment Tools</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive suite of investment tools and resources to make informed decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* IPO Calendar */}
              <Link href="/upcoming-ipo-calendar" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">IPO Calendar</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Track all upcoming IPOs with dates, price bands, and subscription details
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    View Calendar <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>

              {/* Subscription Status */}
              <Link href="/ipo-subscription-status" className="group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-600 rounded-xl">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Subscription Status</h4>
                  </div>
                  <p className="text-gray-600 mb-4">Real-time IPO subscription data and oversubscription ratios</p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                    Check Status <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>

              {/* GMP */}
              <Link href="/ipo-grey-market-premium" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-600 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Grey Market Premium</h4>
                  </div>
                  <p className="text-gray-600 mb-4">Latest GMP rates and market sentiment for upcoming IPOs</p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                    View GMP <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>

              {/* Calculators */}
              <Link href="/calculators" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-600 rounded-xl">
                      <Calculator className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Investment Calculators</h4>
                  </div>
                  <p className="text-gray-600 mb-4">SIP, Lumpsum, FD, PPF and other financial calculators</p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    Use Calculators <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>

              {/* Broker Comparison */}
              <Link href="/stock-brokers-comparison" className="group">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-teal-600 rounded-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Broker Comparison</h4>
                  </div>
                  <p className="text-gray-600 mb-4">Compare brokerage charges, features and choose the best broker</p>
                  <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                    Compare Brokers <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>

              {/* Blog */}
              <Link href="/blog" className="group">
                <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-rose-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-rose-600 rounded-xl">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Investment Blog</h4>
                  </div>
                  <p className="text-gray-600 mb-4">Latest market insights, IPO analysis and investment tips</p>
                  <div className="flex items-center text-rose-600 font-semibold group-hover:text-rose-700">
                    Read Articles <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Zerodha CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Invest in SME IPOs?</h3>
              <p className="text-xl mb-6 opacity-90">
                Open your demat account with India's largest broker and start investing in SME IPOs with zero brokerage
                on equity delivery trades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Zero brokerage on equity delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Advanced trading platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Trusted by 1.5+ crore investors</span>
                </div>
              </div>
              <CTAButton size="lg" className="bg-white text-blue-600 hover:bg-gray-100" />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="mt-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
                Frequently Asked Questions
              </h2>

              {faqs.map((faq, idx) => (
                <details key={idx} className="mb-4 rounded-md bg-gray-50 p-4 shadow">
                  <summary className="cursor-pointer font-medium text-lg text-blue-700">{faq.q}</summary>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
                </details>
              ))}

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.q,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.a,
                      },
                    })),
                  }),
                }}
              />
            </div>
          </section>
        )}
      </div>
    </>
  )
}
