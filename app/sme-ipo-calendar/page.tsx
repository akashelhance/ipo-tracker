import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, TrendingUp, Building2, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore More IPO Tools</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on investment opportunities. Check out our comprehensive IPO tools and resources.
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
