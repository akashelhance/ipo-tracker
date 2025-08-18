import type { Metadata } from "next"
import Link from "next/link"
import { BuybackSearchForm } from "@/components/buyback-search-form"
import {
  TrendingUp,
  Calendar,
  DollarSign,
  Building2,
  Star,
  ArrowRight,
  Target,
  Info,
  Users,
  FileText,
} from "lucide-react"

// Import the CTA button component at the top of the file
import { CTAButton } from "@/components/cta-button"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface BuybackApiResponse {
  id: number
  company_name: string
  slug: string
  is_published: boolean
  status: "upcoming" | "open" | "closed"
  record_date: string
  price_per_share: string
  total_offer_amount: string
  buyback_type: string
}

interface BuybackData {
  companyName: string
  slug: string
  status: "Open" | "Upcoming" | "Closed"
  recordDate: string
  offerPrice: number
  marketPrice: number
  buybackSize: string
  buybackType: string
}

interface PageProps {
  searchParams: Promise<{ search?: string }>
}

async function fetchBuybacks(): Promise<BuybackData[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buybacks/public-list`, {
      cache: "no-store", // Always fetch fresh data
    })

    if (!response.ok) {
      throw new Error("Failed to fetch buybacks")
    }

    const apiData: BuybackApiResponse[] = await response.json()

    return apiData
      .filter((item) => item.is_published)
      .map((item) => ({
        companyName: item.company_name,
        slug: item.slug,
        status: item.status === "upcoming" ? "Upcoming" : item.status === "open" ? "Open" : "Closed",
        recordDate: item.record_date,
        offerPrice: Number.parseFloat(item.price_per_share.replace(/[^\d.]/g, "")) || 0,
        marketPrice: Number.parseFloat(item.price_per_share.replace(/[^\d.]/g, "")) * 0.9 || 0, // Estimate market price as 90% of offer price
        buybackSize: item.total_offer_amount,
        buybackType: item.buyback_type,
      }))
  } catch (error) {
    console.error("Error fetching buybacks:", error)
    return [] // Return empty array on error
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Share Buyback Offers 2025 – Ongoing & Upcoming Buybacks | Record Dates & Prices",
    description:
      "Check the latest list of company share buybacks in 2025 including record date, offer price, buyback size, and type. Track Tender Offer and Open Market buybacks.",
    keywords:
      "share buyback 2025, buyback offers, tender offer, open market buyback, record date, buyback price, buyback size, share repurchase",
    authors: [{ name: "Buyback Team" }],
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
      title: "Share Buyback Offers 2025 – Ongoing & Upcoming Buybacks",
      description:
        "Check the latest list of company share buybacks in 2025 including record date, offer price, buyback size, and type.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/share-buyback-offers",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/buyback-offers-og.jpg",
          width: 1200,
          height: 630,
          alt: "Share Buyback Offers 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Share Buyback Offers 2025",
      description: "Track ongoing and upcoming share buyback programs with record dates and offer prices.",
      images: ["https://yoursite.com/images/buyback-offers-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/share-buyback-offers",
    },
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`
}

function getStatusBadge(status: string) {
  const statusStyles = {
    Open: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg",
    Upcoming: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg",
    Closed: "bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg",
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${statusStyles[status as keyof typeof statusStyles]}`}
    >
      {status}
    </span>
  )
}

function getPremiumDiscount(offerPrice: number, marketPrice: number) {
  const difference = offerPrice - marketPrice
  const percentage = ((difference / marketPrice) * 100).toFixed(1)
  const isPositive = difference > 0

  return (
    <div className="text-xs">
      <span className={`font-bold ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {isPositive ? "+" : ""}
        {percentage}%
      </span>
    </div>
  )
}

export default async function ShareBuybackOffersPage({ searchParams }: PageProps) {
  const { search } = await searchParams

  const buybacks = await fetchBuybacks()

  // Filter buybacks based on search query
  const filteredBuybacks = search
    ? buybacks.filter((buyback) => buyback.companyName.toLowerCase().includes(search.toLowerCase()))
    : buybacks

  // Calculate statistics
  const openBuybacks = filteredBuybacks.filter((b) => b.status === "Open").length
  const upcomingBuybacks = filteredBuybacks.filter((b) => b.status === "Upcoming").length
  const totalValue = filteredBuybacks.reduce((sum, buyback) => {
    const value = Number.parseFloat(buyback.buybackSize.replace(/[^\d.]/g, ""))
    return sum + value
  }, 0)

  // Add FAQ data
  const faqs = [
    {
      q: "What is a share buyback?",
      a: "A share buyback is when a company repurchases its own shares from existing shareholders, usually at a premium to the current market price, to return excess cash to shareholders.",
    },
    {
      q: "What is the difference between Tender Offer and Open Market buyback?",
      a: "Tender Offer buyback allows shareholders to tender their shares at a fixed price during a specific period, while Open Market buyback involves the company purchasing shares from the open market over time.",
    },
    {
      q: "Who is eligible to participate in a buyback?",
      a: "Shareholders who hold shares on the record date are eligible to participate in the buyback. The shares must be in your demat account before the record date.",
    },
    {
      q: "Is buyback participation mandatory?",
      a: "No, buyback participation is voluntary. Shareholders can choose whether or not to tender their shares in the buyback offer.",
    },
    {
      q: "How is buyback price determined?",
      a: "Buyback price is determined by the company's board and is usually set at a premium to the current market price to incentivize shareholder participation.",
    },
    {
      q: "What are the tax implications of buyback?",
      a: "Buyback proceeds are subject to capital gains tax. The tax treatment depends on the holding period and the type of shares (listed/unlisted).",
    },
    {
      q: "What happens if buyback is oversubscribed?",
      a: "If a buyback is oversubscribed, shares are accepted on a proportionate basis. Small shareholders (holding up to ₹2 lakhs worth of shares) get preferential treatment.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,69,193,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
              <Target className="h-4 w-4 mr-2" />
              Live Buyback Tracking
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Share Buyback Offers 2025</h1>
            <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto">
              Track ongoing and upcoming share buyback programs from Indian companies. Discover premium opportunities
              and maximize your returns.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="group bg-gradient-to-br from-violet-500 to-violet-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">{filteredBuybacks.length}</div>
            </div>
            <div className="text-violet-100 text-lg font-medium">Total Buybacks</div>
            <div className="text-violet-200 text-sm mt-1">Active programs</div>
          </div>

          <div className="group bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">{openBuybacks}</div>
            </div>
            <div className="text-purple-100 text-lg font-medium">Open Now</div>
            <div className="text-purple-200 text-sm mt-1">Ready to participate</div>
          </div>

          <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">{upcomingBuybacks}</div>
            </div>
            <div className="text-indigo-100 text-lg font-medium">Upcoming</div>
            <div className="text-indigo-200 text-sm mt-1">Coming soon</div>
          </div>

          <div className="group bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">₹{totalValue.toFixed(0)}K</div>
            </div>
            <div className="text-pink-100 text-lg font-medium">Total Value</div>
            <div className="text-pink-200 text-sm mt-1">Crores invested</div>
          </div>
        </div>

        {/* Enhanced Table Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
          {/* Table Header with Search */}
          <div className="bg-gradient-to-r from-gray-50 to-violet-50 p-6 border-b border-gray-200/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Share Buyback Offers 2025</h2>
                <p className="text-gray-600">Track premium buyback opportunities</p>
              </div>
              <BuybackSearchForm defaultValue={search} />
            </div>
          </div>

          {/* Enhanced Table */}
          <div className="overflow-x-auto">
            {filteredBuybacks.length > 0 ? (
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Company Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Record Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Buyback Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Price Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Buyback Size
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {filteredBuybacks.map((buyback) => (
                    <tr
                      key={buyback.slug}
                      className="hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 transition-all duration-300 group"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {buyback.companyName.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <Link
                              href={`/buyback/${buyback.slug}`}
                              className="text-lg font-semibold text-gray-900 hover:text-violet-600 transition-colors group-hover:text-violet-700"
                            >
                              {buyback.companyName}
                              <ArrowRight className="inline h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-lg font-semibold text-gray-900">{formatDate(buyback.recordDate)}</div>
                        <div className="text-sm text-gray-500">Eligibility date</div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800">
                          {buyback.buybackType}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="space-y-2">
                          <div>
                            <div className="text-sm text-gray-500">Offer Price</div>
                            <div className="text-lg font-bold text-gray-900">{formatPrice(buyback.offerPrice)}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Market Price</div>
                            <div className="text-sm font-medium text-gray-700">{formatPrice(buyback.marketPrice)}</div>
                            {getPremiumDiscount(buyback.offerPrice, buyback.marketPrice)}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-lg font-bold text-purple-600">{buyback.buybackSize}</div>
                        <div className="text-sm text-gray-500">Total value</div>
                      </td>
                      <td className="px-6 py-6">{getStatusBadge(buyback.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-12 w-12 text-gray-400" />
                </div>
                <div className="text-gray-500 text-xl mb-2">No buyback offers found</div>
                <p className="text-gray-400">
                  {search ? `No companies match "${search}"` : "No buyback offers available at the moment"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Comprehensive Buyback Information Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Info className="h-8 w-8 mr-4 text-violet-600" />
              What is Share Buyback?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                A share buyback is a corporate action by the company to repurchase its own listed shares to reduce the
                number of shares available in the stock market or open market. Companies come up with the share buyback
                for reasons such as to increase the value of remaining shares after the buyback by reducing the supply
                to the shareholders or we can say the companies controlling the stock in the open market via a buyback.
              </p>

              <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-6 my-8">
                <h3 className="text-2xl font-bold text-violet-900 mb-4 flex items-center">
                  <Building2 className="h-6 w-6 mr-3" />
                  Understanding Share Buyback
                </h3>
                <p className="text-violet-800 leading-relaxed">
                  The company is coming up with a Buyback offer to invest in its own entity. Through the buyback offer,
                  the company reduces the number of shares in the market and increases its holding. If a company thinks
                  that its share is undervalued then they come up with a buyback offer to provide its current investors
                  with some good return. If the company stays bullish on its current operations and the business, the
                  buyback will help the company to boost the proportion of earnings.
                </p>
              </div>

              <p className="leading-relaxed">
                Sometimes the stock price may rise if the same price-to-earnings (P/E) ratio is maintained. There is
                another reason for the buyback that the shares of the buyback may be offered to the company&apos;s
                employees and management with stock rewards and stock options. The company files the letter of offer to
                the SEBI and gets the approval for the share buyback. The company decided the ratio of shares, the
                number of shares, the buyback amount, the buyback type, the buyback record date for the investors, and
                the open and close dates. As per the buyback schedule company starts the buyback process in the open
                market.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-3" />
                    Tender Offer Buyback
                  </h4>
                  <p className="text-green-800 leading-relaxed">
                    In this option, the company offers the shareholders to tender their shares at a premium (price
                    decided by the company). If the investor is eligible for the buyback, they can apply for the same
                    from their Demat or trading accounts. The company buys the shares as per the ratio decided by the
                    company in the buyback offer.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-3" />
                    Open Market Offer
                  </h4>
                  <p className="text-blue-800 leading-relaxed">
                    In this option, the company buys its shares from the open market from the exchanges. The
                    shareholders can sell their shares in the time frame given by the company in the buyback offer. The
                    open market buyback offers last for months as they buy the shares from the open market.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-3" />
                  Buyback Process & Approval
                </h4>
                <p className="text-amber-800 leading-relaxed">
                  The company files the letter of offer to SEBI and gets approval for the share buyback. The company
                  decides the ratio of shares, number of shares, buyback amount, buyback type, record date for
                  investors, and the open and close dates. As per the buyback schedule, the company starts the buyback
                  process in the open market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <CTAButton size="lg" />
          <p className="text-gray-600 text-sm mt-3">
            Start investing in buyback offers with India&apos;s largest broker
          </p>
        </div>

        {/* Enhanced Information Section */}
        <div className="mt-12 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 border border-violet-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-violet-900 mb-6 flex items-center">
            <Building2 className="h-7 w-7 mr-3 text-violet-600" />
            Key Benefits of Share Buybacks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-violet-800">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-violet-900">Increased Share Value</h4>
              <p className="leading-relaxed">
                By reducing the number of shares in circulation, buybacks can increase the value of remaining shares and
                improve earnings per share (EPS) for existing shareholders.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-violet-900">Premium Returns</h4>
              <p className="leading-relaxed">
                Buybacks typically offer shares at a premium to market price, providing immediate returns to
                participating shareholders who tender their shares.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-violet-900">Tax Efficiency</h4>
              <p className="leading-relaxed">
                Buybacks can be more tax-efficient than dividends for companies, as they don&apos;t attract dividend
                distribution tax and provide capital gains treatment for shareholders.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-violet-900">Market Signal</h4>
              <p className="leading-relaxed">
                Buybacks signal management&apos;s confidence in the company&apos;s future prospects and indicate that
                the stock may be undervalued at current market prices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
       <OtherInvestmentOptionWithDemat/>

        {/* FAQ section */}
        {faqs.length > 0 && (
          <section className="mt-16 mb-12">
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
          </section>
        )}
      </div>
    </div>
  )
}
