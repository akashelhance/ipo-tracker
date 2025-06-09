import type { Metadata } from "next"
import Link from "next/link"
import { gmpData } from "@/lib/gmp-data"
import { ArrowRight, Info, TrendingUp, AlertTriangle, Calendar, Users, Star, Building2 } from "lucide-react"
// Import the CTA button component at the top of the file
import { CTAButton } from "@/components/cta-button"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "IPO Grey Market Premium (GMP) 2025 – Live Kostak Rates & Listing Gains",
    description:
      "Track latest IPO GMP (Grey Market Premium), Kostak rates, Subject to Sauda, and expected listing gains. Live updates for Mainboard and SME IPOs with real-time data.",
    keywords:
      "IPO GMP, grey market premium, kostak rate, subject to sauda, listing gains, IPO premium, grey market trading, IPO secondary market",
    authors: [{ name: "IPO GMP Team" }],
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
      title: "IPO Grey Market Premium (GMP) 2025 – Live Kostak Rates & Listing Gains",
      description:
        "Track latest IPO GMP, Kostak rates, Subject to Sauda, and expected listing gains. Live updates for Mainboard and SME IPOs.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/ipo-grey-market-premium",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/ipo-gmp-og.jpg",
          width: 1200,
          height: 630,
          alt: "IPO Grey Market Premium 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "IPO Grey Market Premium (GMP) 2025",
      description: "Track latest IPO GMP, Kostak rates, and expected listing gains with live updates.",
      images: ["https://yoursite.com/images/ipo-gmp-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/ipo-grey-market-premium",
    },
  }
}

function getStatusBadge(status: string) {
  const statusStyles = {
    Open: "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
    Closed: "bg-gradient-to-r from-gray-400 to-gray-500 text-white",
    Upcoming: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status as keyof typeof statusStyles]}`}
    >
      {status}
    </span>
  )
}

export default function IPOGreyMarketPremiumPage() {
  // Calculate statistics
  const openIPOs = gmpData.filter((ipo) => ipo.status === "Open").length
  const upcomingIPOs = gmpData.filter((ipo) => ipo.status === "Upcoming").length
  const closedIPOs = gmpData.filter((ipo) => ipo.status === "Closed").length

  // Calculate average GMP percentage
  const avgGMPPercentage =
    gmpData.reduce((sum, ipo) => {
      const percentage = Number.parseFloat(ipo.listingGain.replace("%", ""))
      return sum + percentage
    }, 0) / gmpData.length

  // Add FAQ data
  const faqs = [
    {
      q: "What is IPO Grey Market Premium (GMP)?",
      a: "IPO Grey Market Premium (GMP) is the premium at which IPO shares are traded in the unofficial market before they are listed on the stock exchange. It reflects investor sentiment and demand for the IPO shares.",
    },
    {
      q: "How is GMP calculated?",
      a: "GMP is calculated as the difference between the grey market price and the IPO issue price. For example, if an IPO is priced at ₹100 and trading at ₹150 in the grey market, the GMP is ₹50.",
    },
    {
      q: "Does GMP guarantee listing gains?",
      a: "No, GMP does not guarantee listing gains. While it indicates market sentiment, actual listing prices can vary significantly due to market conditions, company fundamentals, and other factors.",
    },
    {
      q: "What is Kostak Rate in IPO?",
      a: "Kostak rate is the amount paid to acquire an IPO application before allotment. Traders buy applications from retail investors who are willing to sell their application rights before the allotment process.",
    },
    {
      q: "What does Subject to Sauda mean?",
      a: "Subject to Sauda (STS) is a conditional deal where the buyer agrees to buy shares only if the seller receives an allotment. The premium is paid only after confirmation of allotment to the seller.",
    },
    {
      q: "Is grey market trading legal in India?",
      a: "Grey market trading operates in a legal grey area. While not explicitly illegal, it's not regulated by SEBI. Investors should be cautious as there's no legal recourse in case of disputes.",
    },
    {
      q: "How reliable is GMP data?",
      a: "GMP data varies across regions and brokers and is based on unofficial sources. It should be used as one of many factors in investment decisions, not as the sole basis for investing.",
    },
    {
      q: "When does grey market trading start for an IPO?",
      a: "Grey market trading typically starts as soon as an IPO is announced and continues until the shares are officially listed on the stock exchange.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
              <TrendingUp className="h-4 w-4 mr-2" />
              Live GMP Tracking
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">IPO Grey Market Premium</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Track the latest IPO GMP, Kostak rates, and expected listing gains in real-time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">{gmpData.length}</div>
                <div className="text-blue-200">Total IPOs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">{avgGMPPercentage.toFixed(1)}%</div>
                <div className="text-blue-200">Avg. Listing Gain</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 mr-3 text-blue-600" />
              Understanding Grey Market Premium (GMP)
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Grey Market Premium (GMP) reflects the premium at which IPO shares are traded in the unofficial market
                before they are listed on the stock exchange. It indicates investor sentiment and demand for the IPO
                shares prior to official trading.
              </p>
              <p>
                While GMP can provide insights into potential listing gains, it's important to note that it does not
                guarantee actual listing performance. Market conditions, company fundamentals, and other factors can
                significantly impact the official listing price.
              </p>
              <p>
                GMP values vary across different regions and brokers, and can fluctuate significantly based on market
                sentiment and news. The figures shown here are approximate averages collected from various sources.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-amber-800 text-sm">
                    <strong>Disclaimer:</strong> The GMP data presented is based on market rumors and unofficial
                    sources. It should not be considered as investment advice. Investors should conduct their own
                    research or consult with a financial advisor before making investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">{openIPOs}</div>
            </div>
            <div className="text-green-100 text-lg font-medium">Open IPOs</div>
            <div className="text-green-200 text-sm mt-1">Currently accepting applications</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">{upcomingIPOs}</div>
            </div>
            <div className="text-blue-100 text-lg font-medium">Upcoming IPOs</div>
            <div className="text-blue-200 text-sm mt-1">Opening soon</div>
          </div>

          <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-6 rounded-2xl shadow-xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold">{closedIPOs}</div>
            </div>
            <div className="text-gray-100 text-lg font-medium">Closed IPOs</div>
            <div className="text-gray-200 text-sm mt-1">Awaiting listing</div>
          </div>
        </div>

        {/* GMP Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest IPO Grey Market Premium</h2>
                <p className="text-gray-600">Track GMP, Kostak rates, and expected listing gains</p>
              </div>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    IPO Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    IPO Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    IPO Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    GMP
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                    Kostak Rate
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider hidden lg:table-cell">
                    Subject to Sauda
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Listing Gain %
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {gmpData.map((ipo, index) => (
                  <tr
                    key={ipo.slug}
                    className={`hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 ${
                      index % 2 === 0 ? "" : "bg-slate-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/ipo/${ipo.slug}`}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors flex items-center"
                      >
                        {ipo.ipoName}
                        <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{ipo.ipoDate}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{ipo.ipoPrice}</td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-semibold text-green-700">{ipo.gmp}</span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-gray-700">{ipo.kostak}</td>
                    <td className="px-6 py-4 hidden lg:table-cell text-gray-700">{ipo.sauda}</td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-semibold text-blue-700">{ipo.listingGain}</span>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(ipo.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <CTAButton size="lg" />
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What is Kostak Rate?</h3>
            <p className="text-gray-600">
              Kostak rate is the amount paid to acquire an IPO application before allotment. Traders buy applications
              from retail investors who are willing to sell their application rights before the allotment process.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What is Subject to Sauda?</h3>
            <p className="text-gray-600">
              Subject to Sauda (STS) is a conditional deal where the buyer agrees to buy shares only if the seller
              receives an allotment. The premium is paid only after confirmation of allotment to the seller.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use GMP Data?</h3>
            <p className="text-gray-600">
              GMP can be used as one of many factors in your IPO investment decision. A strong positive GMP may indicate
              high demand, but always consider company fundamentals, valuation, and market conditions.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl border border-gray-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Investment Tools</h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/upcoming-ipo-calendar"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPO Calendar</h4>
              <p className="text-sm text-gray-600">Upcoming IPOs</p>
            </Link>

            <Link
              href="/ipo-subscription-status"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Subscription Status</h4>
              <p className="text-sm text-gray-600">Live IPO Data</p>
            </Link>

            <Link
              href="/share-buyback-offers"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Buyback Offers</h4>
              <p className="text-sm text-gray-600">Share Buybacks</p>
            </Link>

            <Link
              href="/stock-brokers-comparison"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Broker Comparison</h4>
              <p className="text-sm text-gray-600">Compare Brokers</p>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
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
