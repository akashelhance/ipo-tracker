import type { Metadata } from "next"
import Link from "next/link"
import { CTAButton } from "@/components/cta-button"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  Info,
  Target,
  Award,
  Sparkles,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface SilverRate {
  city: string
  silver999: number
  silver925: number
  lastUpdated: string
  change: number
}

// Revalidate every 15 minutes for silver rate updates
export const revalidate = 900

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Silver Rate Today in India – 999, 925 Silver Price Per Gram | Live Updates",
    description:
      "Check today's silver rate in India for 999 and 925 silver per gram and per kg. Get live silver price updates for all major cities across India.",
    keywords:
      "silver rate today, silver price today, 999 silver rate, 925 silver rate, silver price per gram, silver price in India, today silver rate",
    authors: [{ name: "Silver Rates Team" }],
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
      title: "Silver Rate Today in India – 999, 925 Silver Price",
      description:
        "Check today's silver rate in India for 999 and 925 silver. Get live silver price updates for all major cities.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/silver-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/silver-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "Silver Rates Today",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Silver Rate Today in India",
      description: "Check today's silver rate for 999 and 925 silver across major Indian cities.",
      images: ["https://yoursite.com/images/silver-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/silver-rates",
    },
  }
}

async function fetchSilverRates(): Promise<SilverRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      city: "Mumbai",
      silver999: 92.5,
      silver925: 85.5,
      lastUpdated: new Date().toISOString(),
      change: 1.2,
    },
    {
      city: "Delhi",
      silver999: 93.0,
      silver925: 86.0,
      lastUpdated: new Date().toISOString(),
      change: 1.5,
    },
    {
      city: "Bangalore",
      silver999: 92.8,
      silver925: 85.8,
      lastUpdated: new Date().toISOString(),
      change: 1.0,
    },
    {
      city: "Kolkata",
      silver999: 93.2,
      silver925: 86.2,
      lastUpdated: new Date().toISOString(),
      change: -0.5,
    },
    {
      city: "Chennai",
      silver999: 92.6,
      silver925: 85.6,
      lastUpdated: new Date().toISOString(),
      change: 0.8,
    },
    {
      city: "Hyderabad",
      silver999: 92.7,
      silver925: 85.7,
      lastUpdated: new Date().toISOString(),
      change: 1.1,
    },
  ]
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default async function SilverRatesPage() {
  const silverRates = await fetchSilverRates()

  const avgRate = (silverRates.reduce((sum, r) => sum + r.silver999, 0) / silverRates.length).toFixed(2)
  const highestRate = Math.max(...silverRates.map((r) => r.silver999))
  const lowestRate = Math.min(...silverRates.map((r) => r.silver999))

  const faqs = [
    {
      q: "What is the difference between 999 and 925 silver?",
      a: "999 silver (fine silver) is 99.9% pure silver, while 925 silver (sterling silver) is 92.5% silver mixed with 7.5% other metals (usually copper) for added strength and durability. 925 silver is commonly used for jewelry.",
    },
    {
      q: "Why do silver rates differ across cities in India?",
      a: "Silver rates vary across cities due to factors like local taxes, transportation costs, demand-supply dynamics, and making charges. State taxes and local levies can also cause price variations.",
    },
    {
      q: "What factors affect silver prices in India?",
      a: "Silver prices are influenced by international silver prices, US dollar exchange rate, import duties, GST, industrial demand, investment demand, gold prices (as they often move together), and global economic conditions.",
    },
    {
      q: "What is the GST on silver in India?",
      a: "GST on silver is 3% on the silver value. Additionally, making charges attract 5% GST. These charges are over and above the base silver price.",
    },
    {
      q: "Is it better to buy silver coins or silver jewelry?",
      a: "Silver coins and bars are better for investment as they have lower making charges and are closer to pure silver (999). Silver jewelry typically has higher making charges (20-30% of silver value).",
    },
    {
      q: "When is the best time to buy silver?",
      a: "There's no perfect time, but buying during price dips can be beneficial. Silver prices tend to be lower during non-festival periods. Consider averaging your purchases over time to reduce timing risk.",
    },
    {
      q: "How to verify silver purity?",
      a: "Look for hallmark certification on silver items. The hallmark shows purity (999 or 925), manufacturer's mark, and hallmarking center's mark. You can also get items tested at certified assaying centers.",
    },
    {
      q: "Can I invest in digital silver?",
      a: "Yes, digital silver allows you to buy silver online in small denominations. It's stored safely with custodians and can be converted to physical silver or sold back at prevailing market rates.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Silver Rate Today in India",
            description: "Today's silver rate in India for 999 and 925 silver across major cities.",
            url: "https://yoursite.com/silver-rates",
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
                  name: "Silver Rates",
                  item: "https://yoursite.com/silver-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-gray-600/20 to-zinc-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Live Silver Rates
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Silver Rate Today in India</h1>
              <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-3xl mx-auto">
                Check live silver prices for 999 and 925 silver across all major cities in India. Updated daily.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-slate-500 to-gray-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{avgRate}</div>
              </div>
              <div className="text-slate-100 text-lg font-medium">Average 999 Rate</div>
              <div className="text-slate-200 text-sm mt-1">Per gram</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{highestRate}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Highest Rate</div>
              <div className="text-green-200 text-sm mt-1">999 per gram</div>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{lowestRate}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">Lowest Rate</div>
              <div className="text-blue-200 text-sm mt-1">999 per gram</div>
            </div>

            <div className="group bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">Today</div>
              </div>
              <div className="text-orange-100 text-lg font-medium">Updated</div>
              <div className="text-orange-200 text-sm mt-1">Live prices</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">City-wise Silver Rates</h2>
                  <p className="text-gray-600">Today's silver prices across major cities in India</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(silverRates[0].lastUpdated)}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      City
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      999 Silver (per gram)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      925 Silver (per gram)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      999 Silver (per kg)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      925 Silver (per kg)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {silverRates.map((rate) => (
                    <tr
                      key={rate.city}
                      className="hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50 transition-all duration-300"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-slate-600 mr-3" />
                          <Link
                            href={`/silver-rates/${rate.city.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-lg font-semibold text-gray-900 hover:text-slate-600 transition-colors"
                          >
                            {rate.city}
                          </Link>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-xl font-bold text-slate-600">₹{rate.silver999.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-xl font-bold text-gray-600">₹{rate.silver925.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-lg font-semibold text-gray-700">
                          ₹{(rate.silver999 * 1000).toLocaleString("en-IN")}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-lg font-semibold text-gray-700">
                          ₹{(rate.silver925 * 1000).toLocaleString("en-IN")}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div
                          className={`flex items-center font-semibold ${rate.change >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {rate.change >= 0 ? (
                            <TrendingUp className="h-5 w-5 mr-1" />
                          ) : (
                            <TrendingDown className="h-5 w-5 mr-1" />
                          )}
                          <span>
                            {rate.change >= 0 ? "+" : ""}₹{Math.abs(rate.change).toFixed(2)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-slate-600" />
                Understanding Silver Rates in India
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Silver prices in India are influenced by international silver prices, US dollar exchange rate, import
                  duties, GST, and local demand-supply dynamics. Silver is widely used in jewelry, industrial applications,
                  and as an investment vehicle. Silver rates are updated daily and vary slightly across cities due to local
                  taxes and transportation costs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">999 Silver</h4>
                    <p className="text-slate-800">
                      99.9% pure silver, also known as fine silver. Softer and more malleable. Primarily used for investment
                      coins, bars, and bullion.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">925 Silver</h4>
                    <p className="text-gray-800">
                      92.5% pure silver (sterling silver) mixed with 7.5% other metals. More durable and commonly used for
                      jewelry and decorative items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Invest in silver digitally with India's largest broker</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-slate-600" />
              Factors Affecting Silver Prices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">International Silver Prices</h4>
                <p className="leading-relaxed">
                  Silver prices in India follow international silver prices determined by global markets like COMEX and
                  London Metal Exchange.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">Industrial Demand</h4>
                <p className="leading-relaxed">
                  Silver has significant industrial applications in electronics, solar panels, and medical equipment, making
                  industrial demand a key price factor.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">Import Duty & GST</h4>
                <p className="leading-relaxed">
                  Import duties and GST (currently 3% on silver value and 5% on making charges) significantly impact the
                  final silver price in India.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-slate-900">Investment Demand</h4>
                <p className="leading-relaxed">
                  Silver is seen as a hedge against inflation and economic uncertainty. Investment demand through coins,
                  bars, and ETFs influences prices.
                </p>
              </div>
            </div>
          </div>

          <OtherInvestmentOptionWithDemat />
        </div>

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

