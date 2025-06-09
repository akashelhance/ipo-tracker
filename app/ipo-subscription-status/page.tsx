import type { Metadata } from "next"
import Link from "next/link"
import { subscriptions } from "@/lib/subscription-data"
import { TrendingUp, Users, Building2, Calendar, Target, BarChart3, Info, AlertTriangle, Star } from "lucide-react"

// Import the CTA button component at the top of the file
import { CTAButton } from "@/components/cta-button"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "IPO Subscription Status 2025 – Live QIB, Retail & NII Updates | Real-time Data",
    description:
      "Track real-time IPO subscription numbers for Mainboard and SME IPOs with category-wise details (QIB, NII, Retail, Employee) and day-wise progress. Get live subscription updates.",
    keywords:
      "IPO subscription status, QIB subscription, NII subscription, retail subscription, employee reservation, IPO oversubscription, live IPO data, subscription tracking",
    authors: [{ name: "IPO Subscription Team" }],
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
      title: "IPO Subscription Status 2025 – Live QIB, Retail & NII Updates",
      description:
        "Track real-time IPO subscription numbers for Mainboard and SME IPOs with category-wise details and day-wise progress.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/ipo-subscription-status",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/ipo-subscription-og.jpg",
          width: 1200,
          height: 630,
          alt: "IPO Subscription Status 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "IPO Subscription Status 2025 – Live Updates",
      description: "Track real-time IPO subscription numbers with category-wise details and day-wise progress.",
      images: ["https://yoursite.com/images/ipo-subscription-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/ipo-subscription-status",
    },
  }
}

function getStatusBadge(status: string) {
  const statusStyles = {
    Open: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg",
    Closed: "bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg",
    Upcoming: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg",
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${statusStyles[status as keyof typeof statusStyles]}`}
    >
      {status}
    </span>
  )
}

function getSubscriptionColor(subscription: string): string {
  const value = Number.parseFloat(subscription.replace("x", ""))
  if (value >= 20) return "text-green-600 font-bold"
  if (value >= 10) return "text-blue-600 font-bold"
  if (value >= 5) return "text-orange-600 font-bold"
  if (value >= 1) return "text-gray-900 font-semibold"
  return "text-red-600 font-semibold"
}

function getIPOTypeBadge(type: string) {
  const typeStyles = {
    Mainboard: "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200",
    SME: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeStyles[type as keyof typeof typeStyles]}`}
    >
      {type}
    </span>
  )
}

export default function IPOSubscriptionStatusPage() {
  // Calculate statistics
  const totalIPOs = subscriptions.length
  const openIPOs = subscriptions.filter((s) => s.status === "Open").length
  const closedIPOs = subscriptions.filter((s) => s.status === "Closed").length
  const mainboardIPOs = subscriptions.filter((s) => s.ipoType === "Mainboard").length
  const smeIPOs = subscriptions.filter((s) => s.ipoType === "SME").length

  // Calculate average subscription
  const avgSubscription =
    subscriptions.reduce((sum, sub) => {
      const value = Number.parseFloat(sub.total.replace("x", ""))
      return sum + value
    }, 0) / totalIPOs

  // Add FAQ data
  const faqs = [
    {
      q: "What does IPO subscription status mean?",
      a: "IPO subscription status shows how many times an IPO has been subscribed across different investor categories (QIB, NII, Retail, Employee) compared to the shares available.",
    },
    {
      q: "What is QIB in IPO subscription?",
      a: "QIB stands for Qualified Institutional Buyers, which includes mutual funds, insurance companies, banks, and foreign institutional investors with minimum investment criteria.",
    },
    {
      q: "What is NII in IPO subscription?",
      a: "NII stands for Non-Institutional Investors, which includes high net worth individuals, corporates, and trusts applying for more than ₹2 lakhs worth of shares.",
    },
    {
      q: "What does 'x times subscribed' mean?",
      a: "When an IPO is 'x times subscribed', it means the demand is x times more than the shares available. For example, 5x means demand is 5 times the available shares.",
    },
    {
      q: "Does high subscription guarantee allotment?",
      a: "No, high subscription actually reduces your chances of getting full allotment. Oversubscribed IPOs use a lottery system for share allocation.",
    },
    {
      q: "What is Employee Reservation in IPO?",
      a: "Employee Reservation is a portion of shares reserved for company employees, often offered at a discount to the issue price as part of employee benefits.",
    },
    {
      q: "How is IPO subscription calculated?",
      a: "IPO subscription is calculated by dividing the total number of shares applied for by the total number of shares available in each category.",
    },
  ]

  return (
    <>
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IPO Subscription Status 2025",
            description:
              "Real-time IPO subscription tracking with category-wise details for QIB, NII, Retail and Employee reservations.",
            url: "https://yoursite.com/ipo-subscription-status",
            mainEntity: {
              "@type": "Dataset",
              name: "IPO Subscription Data",
              description: "Live subscription data for ongoing and recent IPOs in India",
              keywords: "IPO subscription, QIB, NII, retail, employee reservation",
              creator: {
                "@type": "Organization",
                name: "IPO Calendar",
              },
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
                  name: "IPO Subscription Status",
                  item: "https://yoursite.com/ipo-subscription-status",
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
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <BarChart3 className="h-4 w-4 mr-2" />
                Live Subscription Tracking
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">IPO Subscription Status</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Track real-time IPO subscription numbers for Mainboard and SME IPOs, with category-wise details and
                day-wise progress.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-6 w-6 text-blue-200" />
                <div className="text-2xl font-bold">{totalIPOs}</div>
              </div>
              <div className="text-blue-100 text-sm font-medium">Total IPOs</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-6 w-6 text-green-200" />
                <div className="text-2xl font-bold">{openIPOs}</div>
              </div>
              <div className="text-green-100 text-sm font-medium">Open Now</div>
            </div>

            <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="h-6 w-6 text-gray-200" />
                <div className="text-2xl font-bold">{closedIPOs}</div>
              </div>
              <div className="text-gray-100 text-sm font-medium">Closed</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <Building2 className="h-6 w-6 text-indigo-200" />
                <div className="text-2xl font-bold">{mainboardIPOs}</div>
              </div>
              <div className="text-indigo-100 text-sm font-medium">Mainboard</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-6 w-6 text-purple-200" />
                <div className="text-2xl font-bold">{smeIPOs}</div>
              </div>
              <div className="text-purple-100 text-sm font-medium">SME</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl text-white">
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="h-6 w-6 text-orange-200" />
                <div className="text-2xl font-bold">{avgSubscription.toFixed(1)}x</div>
              </div>
              <div className="text-orange-100 text-sm font-medium">Avg. Sub.</div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">IPO Subscription Status</h2>
                  <p className="text-gray-600">Real-time subscription data across all categories</p>
                </div>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                  <tr>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-3 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      QIB
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      NII
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Retail
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider hidden sm:table-cell">
                      Employee
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                      Day 1
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                      Day 2
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider hidden md:table-cell">
                      Day 3
                    </th>
                    <th className="px-3 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {subscriptions.map((subscription) => (
                    <tr
                      key={subscription.slug}
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                    >
                      <td className="px-4 py-4">
                        <div>
                          <Link
                            href={`/ipo/${subscription.slug}`}
                            className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {subscription.companyName}
                          </Link>
                        </div>
                      </td>
                      <td className="px-3 py-4">{getIPOTypeBadge(subscription.ipoType)}</td>
                      <td className="px-3 py-4 text-center">
                        <span className={getSubscriptionColor(subscription.qib)}>{subscription.qib}</span>
                      </td>
                      <td className="px-3 py-4 text-center">
                        <span className={getSubscriptionColor(subscription.nii)}>{subscription.nii}</span>
                      </td>
                      <td className="px-3 py-4 text-center">
                        <span className={getSubscriptionColor(subscription.retail)}>{subscription.retail}</span>
                      </td>
                      <td className="px-3 py-4 text-center hidden sm:table-cell">
                        <span className={getSubscriptionColor(subscription.employee)}>{subscription.employee}</span>
                      </td>
                      <td className="px-3 py-4 text-center">
                        <span className={`text-lg ${getSubscriptionColor(subscription.total)}`}>
                          {subscription.total}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-center hidden md:table-cell">
                        <span className={`text-sm ${getSubscriptionColor(subscription.day1)}`}>
                          {subscription.day1}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-center hidden md:table-cell">
                        <span className={`text-sm ${getSubscriptionColor(subscription.day2)}`}>
                          {subscription.day2}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-center hidden md:table-cell">
                        <span className={`text-sm ${getSubscriptionColor(subscription.day3)}`}>
                          {subscription.day3}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-center">{getStatusBadge(subscription.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comprehensive IPO Subscription Information Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-blue-600" />
                Understanding IPO Subscription Status
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  IPO subscription status provides real-time insights into investor demand across different categories.
                  Understanding these numbers helps investors gauge market sentiment and make informed decisions about
                  IPO participation. The subscription data is updated multiple times during the IPO period, showing how
                  many times each category has been subscribed compared to the shares allocated.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-3" />
                    How IPO Subscription Works
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    When an IPO opens for subscription, shares are allocated to different investor categories - QIB
                    (50%), NII (15%), Retail (35%), and sometimes Employee reservation. The subscription status shows
                    the demand in each category as a multiple of shares available. For example, 5x subscription means
                    demand is 5 times the available shares in that category.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                      <TrendingUp className="h-6 w-6 mr-3" />
                      High Subscription Benefits
                    </h4>
                    <ul className="text-green-800 leading-relaxed space-y-2">
                      <li>• Indicates strong investor confidence</li>
                      <li>• May lead to better listing performance</li>
                      <li>• Shows market validation of company valuation</li>
                      <li>• Creates positive momentum for the stock</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                      <AlertTriangle className="h-6 w-6 mr-3" />
                      Subscription Considerations
                    </h4>
                    <ul className="text-amber-800 leading-relaxed space-y-2">
                      <li>• Higher subscription reduces allotment chances</li>
                      <li>• Retail category gets preferential treatment</li>
                      <li>• QIB subscription often indicates institutional interest</li>
                      <li>• Day-wise trends show momentum building</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-3" />
                    Category-wise Allocation Strategy
                  </h4>
                  <p className="text-purple-800 leading-relaxed">
                    Understanding category-wise allocation helps in strategic IPO application. Retail investors (up to
                    ₹2 lakhs) get 35% allocation with better allotment odds in oversubscribed IPOs. NII category (above
                    ₹2 lakhs) gets 15% but faces higher competition. QIB category (50%) includes institutional investors
                    and often drives overall subscription numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Ready to Apply for IPOs?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Start your IPO investment journey with India's most trusted broker. Get real-time subscription
                  updates, easy application process, and expert research insights.
                </p>
                <CTAButton variant="secondary" size="lg" />
                <p className="text-blue-200 text-sm mt-3">₹0 brokerage on IPO applications • Instant account opening</p>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <BarChart3 className="h-7 w-7 mr-3 text-blue-600" />
              Understanding IPO Subscription Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">QIB (Qualified Institutional Buyers)</h4>
                <p className="text-sm leading-relaxed">
                  Includes mutual funds, insurance companies, banks, and foreign institutional investors with minimum
                  investment criteria.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">NII (Non-Institutional Investors)</h4>
                <p className="text-sm leading-relaxed">
                  High net worth individuals, corporates, and trusts applying for more than ₹2 lakhs worth of shares.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Retail Individual Investors</h4>
                <p className="text-sm leading-relaxed">
                  Individual investors applying for shares worth up to ₹2 lakhs, including resident Indians and NRIs.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Employee Reservation</h4>
                <p className="text-sm leading-relaxed">
                  Reserved portion for company employees, often offered at a discount to the issue price.
                </p>
              </div>
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
                href="/ipo-grey-market-premium"
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">IPO GMP</h4>
                <p className="text-sm text-gray-600">Grey Market Premium</p>
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

          {/* Add FAQ section before the closing div */}
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
      </div>
    </>
  )
}
