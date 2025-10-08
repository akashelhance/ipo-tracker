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
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat";

interface IPO {
  ipo_name:String,
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
    title: "Upcoming IPO Calendar 2025 – IPO List with Dates & Price Band | Live Updates",
    description:
      "Check the complete list of upcoming IPOs in 2025 with issue dates, price band, lot size, exchange platform and more. Track Mainboard & SME IPOs with live updates.",
    keywords:
      "upcoming IPO 2025, IPO calendar, IPO list, IPO dates, price band, lot size, Mainboard IPO, SME IPO, NSE IPO, BSE IPO",
    authors: [{ name: "IPO Calendar Team" }],
    creator: "IPO Calendar",
    publisher: "IPO Calendar",
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
      title: "Upcoming IPO Calendar 2025 – Complete IPO List with Dates & Price Band",
      description:
        "Track upcoming IPOs in 2025 with complete details including issue dates, price band, lot size and exchange platform. Get live updates on Mainboard & SME IPOs.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/upcoming-ipo-calendar",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/ipo-calendar-og.jpg",
          width: 1200,
          height: 630,
          alt: "Upcoming IPO Calendar 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Upcoming IPO Calendar 2025 – Complete IPO List",
      description: "Track upcoming IPOs in 2025 with complete details including dates, price band, and lot size.",
      images: ["https://yoursite.com/images/ipo-calendar-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/upcoming-ipo-calendar",
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
  const low = parseFloat(matches[1].replace(/,/g, ""))
  const high = parseFloat(matches[2].replace(/,/g, ""))
  return { low, high }
}

function formatPriceBand(low: number, high: number): string {
  if (!low && !high) return "N/A"
  return `₹${low.toLocaleString("en-IN")} - ₹${high.toLocaleString("en-IN")}`
}

export default async function IPOCalendarPage({ searchParams }: PageProps) {
  const search = searchParams?.search || ""

  // Fetch IPO data server-side with ISR (revalidates every 5 minutes)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ipos/light`, {
    next: { revalidate: 300 }, // Cache for 5 minutes
  })

  if (!res.ok) {
    throw new Error("Failed to fetch IPO data")
  }

  const data = await res.json()
  let ipos: IPO[] = data.docs || []

  // Filter by search query (case insensitive)
  if (search) {
    ipos = ipos.filter((ipo) =>
      ipo.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Calculate stats
  const mainboardIPOs = ipos.filter((ipo) => ipo.ipo_type === "Mainboard").length
  const smeIPOs = ipos.filter((ipo) => ipo.ipo_type === "SME").length
  const totalValue = ipos.reduce((sum, ipo) => {
    const { low, high } = extractPriceBand(ipo.price_band_text)
    const lotSize = parseInt(ipo.lot_size_text) || 1
    const avgPrice = (low + high) / 2 || 0
    return sum + avgPrice * lotSize
  }, 0)

  // FAQ data
  const faqs = [
    {
      q: "What is an IPO?",
      a: "An Initial Public Offering (IPO) is when a company offers its shares to the public for the first time to raise capital for business expansion and growth.",
    },
    {
      q: "How to apply for an IPO in India?",
      a: "You can apply for IPOs through your broker's trading platform, mobile apps, or UPI-enabled applications. You need a demat account and PAN card to apply.",
    },
    {
      q: "What is the minimum investment required for IPO?",
      a: "The minimum investment depends on the lot size and price band of the IPO. It typically ranges from ₹10,000 to ₹15,000 for retail investors.",
    },
    {
      q: "What is the difference between Mainboard and SME IPO?",
      a: "Mainboard IPOs are for larger companies listed on NSE/BSE main exchanges, while SME IPOs are for smaller companies listed on SME platforms with lower listing requirements.",
    },
    {
      q: "When do IPO shares get allotted?",
      a: "IPO shares are typically allotted within 7-10 working days after the IPO closes. The allotment process is done through a computerized lottery system.",
    },
    {
      q: "What happens if IPO is oversubscribed?",
      a: "If an IPO is oversubscribed, shares are allotted through a lottery system. Retail investors may receive partial allotment or no allotment based on the subscription level.",
    },
    {
      q: "Can I sell IPO shares immediately after listing?",
      a: "Yes, you can sell IPO shares immediately after they are listed and credited to your demat account, usually on the listing day.",
    },
    {
      q: "What documents are required for IPO application?",
      a: "You need a PAN card, Aadhaar card, bank account, and demat account to apply for an IPO. Some brokers may require additional KYC documents.",
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
            name: "Upcoming IPO Calendar 2025",
            description:
              "Complete list of upcoming IPOs in 2025 with issue dates, price band, lot size and exchange platform details.",
            url: "https://yoursite.com/upcoming-ipo-calendar",
            mainEntity: {
              "@type": "ItemList",
              name: "Upcoming IPOs 2025",
              description: "List of upcoming Initial Public Offerings in India for 2025",
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
                  name: "IPO Calendar",
                  item: "https://yoursite.com/upcoming-ipo-calendar",
                },
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "IPO Calendar",
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
                Live IPO Tracking
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Upcoming IPO Calendar 2025</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest IPO listings, dates, and price bands. Never miss an investment opportunity.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{ipos.length}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">Total IPOs</div>
              <div className="text-blue-200 text-sm mt-1">Active opportunities</div>
            </div>

            <div className="group bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{mainboardIPOs}</div>
              </div>
              <div className="text-emerald-100 text-lg font-medium">Mainboard IPOs</div>
              <div className="text-emerald-200 text-sm mt-1">Large cap offerings</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{smeIPOs}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">SME IPOs</div>
              <div className="text-purple-200 text-sm mt-1">Growth opportunities</div>
            </div>

         <div className="group bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4 inline-flex items-center">
    <DollarSign className="h-6 w-6 text-white mr-2" />
    {/* Optionally, you can keep this icon only or remove this entire div if you want */}
  </div>

  <Link
    href="https://zerodha.com/?c=QT4498&s=CONSOLE"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-100 text-lg font-medium hover:underline inline-block"
  >
    Open Demat with Zerodha
  </Link>
</div>
          </div>

          {/* Enhanced Table Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            {/* Table Header with Search */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming IPOs 2025</h2>
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
              const lotSize = parseInt(ipo.lot_size_text || "1") || 1

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
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-12 w-12 text-gray-400" />
          </div>
          <div className="text-gray-500 text-xl mb-2">No IPOs found</div>
          <p className="text-gray-400">{search ? `No IPOs match "${search}"` : "No IPOs available at the moment"}</p>
        </div>
      )}
    </div>
          </div>

          {/* Comprehensive IPO Information Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-blue-600" />
                What is an IPO?
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  An Initial Public Offering (IPO) is when a private company offers its shares to the public for the
                  first time on a stock exchange. This process allows companies to raise capital from public investors
                  to fund business expansion, pay off debts, or provide liquidity to existing shareholders. For
                  investors, IPOs present an opportunity to invest in companies during their transition from private to
                  public ownership.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <Building2 className="h-6 w-6 mr-3" />
                    Understanding IPO Process
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    The IPO process involves several stages including company valuation, regulatory approvals from SEBI,
                    roadshows to institutional investors, price discovery, and finally the public offering. Companies
                    work with investment banks and underwriters to determine the IPO price band, which represents the
                    range within which investors can bid for shares. The final price is determined based on demand and
                    market conditions.
                  </p>
                </div>

                <p className="leading-relaxed">
                  IPOs are categorized into Mainboard and SME (Small and Medium Enterprises) offerings. Mainboard IPOs
                  are for larger companies with higher capital requirements and are listed on major exchanges like NSE
                  and BSE. SME IPOs are designed for smaller companies and are listed on dedicated SME platforms with
                  relaxed listing requirements, making it easier for growing businesses to access public capital.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 mr-3" />
                      Mainboard IPOs
                    </h4>
                    <p className="text-green-800 leading-relaxed">
                      Mainboard IPOs are for established companies with a minimum post-issue paid-up capital of ₹10
                      crores. These companies must have a track record of profitability and meet stringent regulatory
                      requirements. Mainboard IPOs typically attract institutional investors and offer better liquidity
                      post-listing.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                      <Star className="h-6 w-6 mr-3" />
                      SME IPOs
                    </h4>
                    <p className="text-purple-800 leading-relaxed">
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
              Key Benefits of IPO Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Early Investment Opportunity</h4>
                <p className="leading-relaxed">
                  IPOs provide the chance to invest in companies at their public market debut, potentially capturing
                  significant growth as the company expands and matures in the public markets.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Portfolio Diversification</h4>
                <p className="leading-relaxed">
                  Adding IPO stocks to your portfolio can provide diversification across different sectors, company
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
                  Once listed, IPO shares can be easily bought and sold on stock exchanges, providing liquidity that is
                  not available with private company investments.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
        <OtherInvestmentOptionWithDemat />
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
