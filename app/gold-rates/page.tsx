import type { Metadata } from "next"
import Link from "next/link"
import { CTAButton } from "@/components/cta-button"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  Star,
  Info,
  Target,
  DollarSign,
  Award,
  Sparkles,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface GoldRate {
  city: string
  gold22K: number
  gold24K: number
  gold18K: number
  lastUpdated: string
  change: number
}

// Revalidate every 15 minutes for gold rate updates
export const revalidate = 900

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gold Rate Today in India – 22K, 24K Gold Price Per Gram | Live Updates",
    description:
      "Check today's gold rate in India for 22K, 24K, and 18K gold per gram and 10 grams. Get live gold price updates for all major cities across India.",
    keywords:
      "gold rate today, gold price today, 22k gold rate, 24k gold rate, gold price per gram, gold price in India, today gold rate",
    authors: [{ name: "Gold Rates Team" }],
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
      title: "Gold Rate Today in India – 22K, 24K Gold Price",
      description:
        "Check today's gold rate in India for 22K, 24K, and 18K gold. Get live gold price updates for all major cities.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/gold-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/gold-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "Gold Rates Today",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gold Rate Today in India",
      description: "Check today's gold rate for 22K, 24K, and 18K gold across major Indian cities.",
      images: ["https://yoursite.com/images/gold-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/gold-rates",
    },
  }
}

async function fetchGoldRates(): Promise<GoldRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      city: "Mumbai",
      gold22K: 6785,
      gold24K: 7402,
      gold18K: 5551,
      lastUpdated: new Date().toISOString(),
      change: 25,
    },
    {
      city: "Delhi",
      gold22K: 6800,
      gold24K: 7418,
      gold18K: 5565,
      lastUpdated: new Date().toISOString(),
      change: 30,
    },
    {
      city: "Bangalore",
      gold22K: 6790,
      gold24K: 7407,
      gold18K: 5557,
      lastUpdated: new Date().toISOString(),
      change: 20,
    },
    {
      city: "Kolkata",
      gold22K: 6795,
      gold24K: 7413,
      gold18K: 5561,
      lastUpdated: new Date().toISOString(),
      change: -15,
    },
    {
      city: "Chennai",
      gold22K: 6788,
      gold24K: 7405,
      gold18K: 5554,
      lastUpdated: new Date().toISOString(),
      change: 18,
    },
    {
      city: "Hyderabad",
      gold22K: 6792,
      gold24K: 7409,
      gold18K: 5558,
      lastUpdated: new Date().toISOString(),
      change: 22,
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

export default async function GoldRatesPage() {
  const goldRates = await fetchGoldRates()

  const avgRate = Math.round(goldRates.reduce((sum, r) => sum + r.gold22K, 0) / goldRates.length)
  const highestRate = Math.max(...goldRates.map((r) => r.gold22K))
  const lowestRate = Math.min(...goldRates.map((r) => r.gold22K))

  const faqs = [
    {
      q: "What is the difference between 22K and 24K gold?",
      a: "24K gold is 99.9% pure gold, while 22K gold is 91.6% pure gold mixed with other metals like copper or silver for strength. 24K gold is softer and more expensive, while 22K is more durable and commonly used for jewelry.",
    },
    {
      q: "Why do gold rates differ across cities in India?",
      a: "Gold rates vary across cities due to factors like local taxes, transportation costs, demand-supply dynamics, and making charges. Octroi and other local levies can also cause price variations.",
    },
    {
      q: "What factors affect gold prices in India?",
      a: "Gold prices are affected by international gold prices, US dollar exchange rate, import duties, GST, demand during festivals and weddings, global economic conditions, and central bank policies.",
    },
    {
      q: "What is the GST on gold in India?",
      a: "GST on gold is 3% on the gold value. Additionally, making charges attract 5% GST. These charges are over and above the base gold price.",
    },
    {
      q: "Is it better to buy gold jewelry or gold coins?",
      a: "Gold coins and bars are better for investment as they have lower making charges. Gold jewelry is good for personal use but comes with higher making charges (15-25% of gold value).",
    },
    {
      q: "When is the best time to buy gold?",
      a: "There's no perfect time, but buying during price dips and avoiding peak festival seasons (when prices are usually higher) can be beneficial. Consider rupee cost averaging by buying small amounts regularly.",
    },
    {
      q: "How to check the purity of gold?",
      a: "Always buy BIS hallmarked gold jewelry which guarantees purity. Check for the BIS mark, purity in karats (22K, 18K), jeweler's identification mark, and hallmarking center's mark on the jewelry.",
    },
    {
      q: "Can I invest in digital gold?",
      a: "Yes, digital gold allows you to buy gold online in small denominations starting from ₹1. It's stored safely with custodians and can be converted to physical gold or sold back at prevailing rates.",
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
            name: "Gold Rate Today in India",
            description: "Today's gold rate in India for 22K, 24K, and 18K gold across major cities.",
            url: "https://yoursite.com/gold-rates",
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
                  name: "Gold Rates",
                  item: "https://yoursite.com/gold-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-yellow-600/20 to-orange-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Live Gold Rates
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Gold Rate Today in India</h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto">
                Check live gold prices for 22K, 24K, and 18K gold across all major cities in India. Updated daily.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-amber-500 to-yellow-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{avgRate}</div>
              </div>
              <div className="text-amber-100 text-lg font-medium">Average 22K Rate</div>
              <div className="text-amber-200 text-sm mt-1">Per gram</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{highestRate}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Highest Rate</div>
              <div className="text-green-200 text-sm mt-1">22K per gram</div>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{lowestRate}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">Lowest Rate</div>
              <div className="text-blue-200 text-sm mt-1">22K per gram</div>
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
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">City-wise Gold Rates</h2>
                  <p className="text-gray-600">Today's gold prices across major cities in India</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(goldRates[0].lastUpdated)}
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
                      22K Gold (per gram)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      24K Gold (per gram)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      18K Gold (per gram)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      22K Gold (10 grams)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {goldRates.map((rate) => (
                    <tr
                      key={rate.city}
                      className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-amber-600 mr-3" />
                          <Link
                            href={`/gold-rates/${rate.city.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors"
                          >
                            {rate.city}
                          </Link>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-xl font-bold text-amber-600">₹{rate.gold22K.toLocaleString("en-IN")}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-xl font-bold text-yellow-600">₹{rate.gold24K.toLocaleString("en-IN")}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-xl font-bold text-orange-600">₹{rate.gold18K.toLocaleString("en-IN")}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-lg font-semibold text-gray-700">
                          ₹{(rate.gold22K * 10).toLocaleString("en-IN")}
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
                            {rate.change >= 0 ? "+" : ""}₹{Math.abs(rate.change)}
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
                <Info className="h-8 w-8 mr-4 text-amber-600" />
                Understanding Gold Rates in India
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Gold prices in India are influenced by various factors including international gold prices (determined
                  primarily by the London Bullion Market), US dollar exchange rate, import duties, GST, and local
                  demand-supply dynamics. Gold rates are updated daily based on these factors and vary slightly across
                  different cities due to local taxes and transportation costs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-amber-900 mb-3">22K Gold</h4>
                    <p className="text-amber-800">
                      91.6% pure gold, commonly used for jewelry. More durable due to alloy mix with other metals.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-yellow-900 mb-3">24K Gold</h4>
                    <p className="text-yellow-800">
                      99.9% pure gold, softest form. Primarily used for investment purposes like coins and bars.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-3">18K Gold</h4>
                    <p className="text-orange-800">
                      75% pure gold, more affordable. Often used for modern jewelry designs requiring strength.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Invest in gold digitally with India's largest broker</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-amber-600" />
              Factors Affecting Gold Prices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-amber-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-amber-900">International Gold Prices</h4>
                <p className="leading-relaxed">
                  Gold prices in India are primarily influenced by international gold prices determined by global markets,
                  particularly the London Bullion Market.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-amber-900">Currency Exchange Rate</h4>
                <p className="leading-relaxed">
                  The USD-INR exchange rate significantly impacts gold prices. When rupee weakens against dollar, gold
                  becomes more expensive in India.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-amber-900">Import Duty & GST</h4>
                <p className="leading-relaxed">
                  Import duties and GST (currently 3% on gold value and 5% on making charges) add to the final price of
                  gold in India.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-amber-900">Demand & Supply</h4>
                <p className="leading-relaxed">
                  Seasonal demand during festivals, weddings, and investment demand significantly influences gold prices in
                  the Indian market.
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

