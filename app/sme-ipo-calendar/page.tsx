import type { Metadata } from "next"
import Link from "next/link"
import {
  Calendar,
  TrendingUp,
  Building2,
  MapPin,
  Calculator,
  FileText,
  Users,
  BarChart3,
  ExternalLink,
  ChevronDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CTAButton } from "@/components/cta-button"
import { ipos } from "@/lib/ipo-data"

export const metadata: Metadata = {
  title: "SME IPO Calendar 2025 | Small & Medium Enterprise IPO Listings",
  description:
    "Complete list of upcoming SME IPOs in 2025. Track SME IPO dates, price bands, lot sizes, and investment opportunities in small and medium enterprises.",
  keywords: "SME IPO, small medium enterprise IPO, SME IPO calendar 2025, BSE SME, SME investment, upcoming SME IPO",
  openGraph: {
    title: "SME IPO Calendar 2025 | Small & Medium Enterprise IPO Listings",
    description:
      "Complete list of upcoming SME IPOs in 2025. Track SME IPO dates, price bands, lot sizes, and investment opportunities.",
    type: "website",
  },
}

// Filter only SME IPOs
const smeIpos = ipos.filter((ipo) => ipo.ipoType === "SME")

// Function to get IPO status
function getIpoStatus(openDate: string, closeDate: string) {
  const today = new Date()
  const open = new Date(openDate)
  const close = new Date(closeDate)

  if (today < open) {
    return { status: "Upcoming", color: "bg-blue-100 text-blue-800" }
  } else if (today >= open && today <= close) {
    return { status: "Open", color: "bg-green-100 text-green-800" }
  } else {
    return { status: "Closed", color: "bg-gray-100 text-gray-800" }
  }
}

// Function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default function SMEIpoCalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="h-12 w-12" />
              <h1 className="text-4xl md:text-6xl font-bold">SME IPO Calendar</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover investment opportunities in Small & Medium Enterprises
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>{smeIpos.length} SME IPOs Listed</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>BSE SME Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SME IPO Calendar 2025</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete list of Small & Medium Enterprise IPOs with detailed information including price bands, dates,
              and investment requirements.
            </p>
          </div>

          {/* SME IPO Table */}
          {smeIpos.length > 0 ? (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Company Name</th>
                      <th className="px-6 py-4 text-center font-semibold">Status</th>
                      <th className="px-6 py-4 text-center font-semibold">Price Band (₹)</th>
                      <th className="px-6 py-4 text-center font-semibold">Open Date</th>
                      <th className="px-6 py-4 text-center font-semibold">Close Date</th>
                      <th className="px-6 py-4 text-center font-semibold">Market Lot</th>
                      <th className="px-6 py-4 text-center font-semibold">Issue Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {smeIpos.map((ipo, index) => {
                      const { status, color } = getIpoStatus(ipo.openDate, ipo.closeDate)

                      return (
                        <tr
                          key={ipo.documentId}
                          className={`hover:bg-purple-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                        >
                          <td className="px-6 py-4">
                            <Link
                              href={`/ipo/${ipo.slug}`}
                              className="font-semibold text-purple-700 hover:text-purple-900 hover:underline transition-colors"
                            >
                              {ipo.companyName}
                            </Link>
                            <div className="text-sm text-gray-500 mt-1">{ipo.ipoType}</div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Badge className={`${color} font-medium`}>{status}</Badge>
                          </td>
                          <td className="px-6 py-4 text-center font-semibold">
                            ₹{ipo.priceBandLow} - ₹{ipo.priceBandHigh}
                          </td>
                          <td className="px-6 py-4 text-center text-green-700 font-medium">
                            {formatDate(ipo.openDate)}
                          </td>
                          <td className="px-6 py-4 text-center text-red-700 font-medium">
                            {formatDate(ipo.closeDate)}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold">{ipo.marketLot.toLocaleString()}</td>
                          <td className="px-6 py-4 text-center font-semibold">{ipo.ipoSize}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden divide-y divide-gray-100">
                {smeIpos.map((ipo) => {
                  const { status, color } = getIpoStatus(ipo.openDate, ipo.closeDate)

                  return (
                    <div key={ipo.documentId} className="p-6 hover:bg-purple-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <Link
                          href={`/ipo/${ipo.slug}`}
                          className="font-semibold text-lg text-purple-700 hover:text-purple-900 hover:underline transition-colors"
                        >
                          {ipo.companyName}
                        </Link>
                        <Badge className={`${color} font-medium ml-2`}>{status}</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Price Band</div>
                          <div className="font-semibold">
                            ₹{ipo.priceBandLow} - ₹{ipo.priceBandHigh}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Market Lot</div>
                          <div className="font-semibold">{ipo.marketLot.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Open Date</div>
                          <div className="font-semibold text-green-700">{formatDate(ipo.openDate)}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Close Date</div>
                          <div className="font-semibold text-red-700">{formatDate(ipo.closeDate)}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-500">Issue Size</div>
                          <div className="font-semibold">{ipo.ipoSize}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-xl">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No SME IPOs Available</h3>
              <p className="text-gray-500">Check back later for upcoming SME IPO listings.</p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About SME IPOs</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                SME IPOs are offered by Small and Medium Enterprises on the BSE SME platform. These IPOs typically have
                lower minimum investment requirements and offer opportunities to invest in growing businesses with high
                potential returns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Building2 className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">BSE SME Platform</h4>
                <p className="text-sm text-gray-600">Listed on dedicated BSE SME exchange with special regulations</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">High Growth Potential</h4>
                <p className="text-sm text-gray-600">SMEs often show rapid growth and expansion opportunities</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Lower Investment</h4>
                <p className="text-sm text-gray-600">Smaller lot sizes make SME IPOs accessible to retail investors</p>
              </div>
            </div>
          </div>

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

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about SME IPOs and investing
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="divide-y divide-gray-100">
                {/* FAQ 1 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">
                      What are SME IPOs and how do they differ from regular IPOs?
                    </h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      SME IPOs are Initial Public Offerings by Small and Medium Enterprises listed on the BSE SME
                      platform. They differ from regular IPOs in terms of listing requirements, minimum investment
                      amounts, and regulatory framework. SME IPOs typically have lower issue sizes, simplified
                      compliance requirements, and are designed to help smaller companies raise capital for growth.
                    </p>
                  </div>
                </details>

                {/* FAQ 2 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">How can I invest in SME IPOs?</h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      To invest in SME IPOs, you need a demat account with a broker that provides access to BSE SME
                      platform. You can apply through your broker's online platform, mobile app, or by submitting a
                      physical application form. The application process is similar to regular IPOs, requiring you to
                      specify the number of shares and bid price within the given price band.
                    </p>
                  </div>
                </details>

                {/* FAQ 3 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">
                      What is the minimum investment required for SME IPOs?
                    </h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      The minimum investment in SME IPOs varies by company but is generally lower than regular IPOs.
                      Typically, the minimum application size ranges from ₹1,00,000 to ₹2,00,000. The exact amount
                      depends on the company's lot size and price band. This makes SME IPOs more accessible to retail
                      investors compared to large-cap IPOs.
                    </p>
                  </div>
                </details>

                {/* FAQ 4 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">
                      What are the risks associated with SME IPO investments?
                    </h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      SME IPO investments carry higher risks including limited liquidity, less stringent disclosure
                      requirements, higher volatility, and potential business risks due to the smaller scale of
                      operations. These companies may have limited operating history, dependence on key personnel, and
                      face challenges in scaling operations. Investors should carefully evaluate the company's
                      fundamentals before investing.
                    </p>
                  </div>
                </details>

                {/* FAQ 5 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Can SME IPO shares be traded immediately after listing?
                    </h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-colors" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Yes, SME IPO shares can be traded on the BSE SME platform immediately after listing. However,
                      liquidity may be limited compared to main board stocks. Trading happens during regular market
                      hours, and you can buy/sell through your broker's trading platform. It's important to note that
                      SME stocks may have wider bid-ask spreads due to lower trading volumes.
                    </p>
                  </div>
                </details>

                {/* FAQ 6 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Are there any tax implications for SME IPO investments?
                    </h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      SME IPO investments are subject to the same tax rules as regular equity investments. Short-term
                      capital gains (holding period less than 1 year) are taxed at 15%, while long-term capital gains
                      exceeding ₹1 lakh are taxed at 10%. Dividends received are taxable as per your income tax slab.
                      It's advisable to consult a tax advisor for specific situations.
                    </p>
                  </div>
                </details>

                {/* FAQ 7 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">
                      How should I research SME companies before investing?
                    </h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Research SME companies by analyzing their business model, financial statements, management
                      background, industry prospects, and competitive position. Review the DRHP (Draft Red Herring
                      Prospectus) carefully, check for any regulatory issues, assess debt levels, and understand the
                      purpose of fund raising. Consider the company's growth potential and scalability of the business
                      model.
                    </p>
                  </div>
                </details>

                {/* FAQ 8 */}
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900">
                      What is the typical timeline for SME IPO listing?
                    </h4>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      SME IPOs typically have a 3-day subscription period, followed by allotment within 7-10 days. The
                      shares are usually listed within 6-8 working days after the issue closes. The exact timeline may
                      vary based on the company and market conditions. Investors receive allotment details via email and
                      SMS, and shares are credited to their demat accounts before listing.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with SME IPO Opportunities</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on promising SME investment opportunities. Explore our comprehensive IPO tools and
              resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/upcoming-ipo-calendar">
                <Button variant="outline" size="lg" className="px-8">
                  View All IPOs
                </Button>
              </Link>
              <Link href="/ipo-subscription-status">
                <Button size="lg" className="px-8 bg-purple-600 hover:bg-purple-700">
                  Check Subscription Status
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
