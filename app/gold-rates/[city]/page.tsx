import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CTAButton } from "@/components/cta-button"
import {
  ArrowLeft,
  Calendar,
  TrendingUp,
  TrendingDown,
  MapPin,
  Sparkles,
  Info,
  LineChart,
  Award,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface GoldRateDetail {
  city: string
  state: string
  gold22K: number
  gold24K: number
  gold18K: number
  lastUpdated: string
  change: number
  historicalData: {
    date: string
    rate22K: number
    rate24K: number
  }[]
  localFactors: string[]
  shops: string[]
}

async function fetchGoldRateDetail(city: string): Promise<GoldRateDetail | null> {
  const sampleData: Record<string, GoldRateDetail> = {
    mumbai: {
      city: "Mumbai",
      state: "Maharashtra",
      gold22K: 6785,
      gold24K: 7402,
      gold18K: 5551,
      lastUpdated: new Date().toISOString(),
      change: 25,
      historicalData: [
        { date: "2025-01-07", rate22K: 6760, rate24K: 7377 },
        { date: "2025-01-06", rate22K: 6770, rate24K: 7388 },
        { date: "2025-01-05", rate22K: 6755, rate24K: 7371 },
        { date: "2025-01-04", rate22K: 6780, rate24K: 7398 },
        { date: "2025-01-03", rate22K: 6765, rate24K: 7382 },
      ],
      localFactors: [
        "Mumbai imports significant gold through designated agencies",
        "High demand during wedding season (November-May)",
        "State GST of 3% on gold value",
        "Additional making charges of 15-25% by jewelers",
        "Proximity to major refineries affects pricing",
      ],
      shops: [
        "Zaveri Bazaar - Traditional gold market",
        "Tribhovandas Bhimji Zaveri (TBZ)",
        "PNG Jewellers",
        "Tanishq",
        "Kalyan Jewellers",
      ],
    },
    delhi: {
      city: "Delhi",
      state: "Delhi",
      gold22K: 6800,
      gold24K: 7418,
      gold18K: 5565,
      lastUpdated: new Date().toISOString(),
      change: 30,
      historicalData: [
        { date: "2025-01-07", rate22K: 6770, rate24K: 7385 },
        { date: "2025-01-06", rate22K: 6780, rate24K: 7396 },
        { date: "2025-01-05", rate22K: 6765, rate24K: 7379 },
        { date: "2025-01-04", rate22K: 6795, rate24K: 7412 },
        { date: "2025-01-03", rate22K: 6775, rate24K: 7390 },
      ],
      localFactors: [
        "Capital city with high gold demand",
        "Lower state taxes compared to some states",
        "Major gold trading hub in North India",
        "Strong wedding and festival demand",
        "Chandni Chowk is a major gold market",
      ],
      shops: [
        "Chandni Chowk - Historic gold market",
        "Tanishq showrooms",
        "Malabar Gold & Diamonds",
        "PC Jeweller",
        "Kalyan Jewellers",
      ],
    },
  }

  const cityKey = city.toLowerCase().replace(/-/g, "")
  return sampleData[cityKey] || null
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const data = await fetchGoldRateDetail(params.city)

  if (!data) {
    return { title: "City Not Found" }
  }

  return {
    title: `Gold Rate Today in ${data.city} - 22K, 24K, 18K Gold Price | Live Updates`,
    description: `Today's gold rate in ${data.city}: 22K ₹${data.gold22K}/gram, 24K ₹${data.gold24K}/gram, 18K ₹${data.gold18K}/gram. Check live prices, historical trends, and best shops.`,
    keywords: `gold rate ${data.city}, gold price ${data.city}, ${data.city} gold rate today`,
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

export default async function GoldRateCityPage({ params }: { params: { city: string } }) {
  const data = await fetchGoldRateDetail(params.city)

  if (!data) {
    notFound()
  }

  const faqs = [
    {
      q: `What is the gold rate today in ${data.city}?`,
      a: `Today's gold rate in ${data.city} is ₹${data.gold22K} per gram for 22K gold, ₹${data.gold24K} per gram for 24K gold, and ₹${data.gold18K} per gram for 18K gold.`,
    },
    {
      q: `Why is gold rate different in ${data.city}?`,
      a: `Gold rates in ${data.city} vary due to local taxes, transportation costs, demand-supply dynamics, and making charges by local jewelers.`,
    },
    {
      q: `Where to buy gold in ${data.city}?`,
      a: `You can buy gold from trusted jewelers in ${data.city} including ${data.shops.slice(0, 3).join(", ")}. Always check for BIS hallmark certification.`,
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `Gold Rate in ${data.city}`,
            description: `Current gold prices in ${data.city} for 22K, 24K, and 18K gold`,
            offers: {
              "@type": "Offer",
              price: data.gold22K,
              priceCurrency: "INR",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-yellow-600/20 to-orange-600/20"></div>
          <div className="relative container mx-auto px-4 py-12">
            <Link
              href="/gold-rates"
              className="inline-flex items-center text-white hover:text-amber-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Cities
            </Link>

            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {data.state}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Gold Rate in {data.city}</h1>
              <p className="text-xl text-amber-100 mb-6">
                Live gold prices for 22K, 24K, and 18K gold in {data.city}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-amber-200 text-sm mb-1">22K Gold</div>
                  <div className="text-2xl font-bold">₹{data.gold22K}/gram</div>
                  <div className="flex items-center mt-2">
                    {data.change >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-300 mr-1" />
                    )}
                    <span className={`text-sm ${data.change >= 0 ? "text-green-300" : "text-red-300"}`}>
                      {data.change >= 0 ? "+" : ""}₹{data.change}
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-amber-200 text-sm mb-1">24K Gold</div>
                  <div className="text-2xl font-bold">₹{data.gold24K}/gram</div>
                  <div className="text-sm text-amber-200 mt-2">99.9% Pure</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-amber-200 text-sm mb-1">18K Gold</div>
                  <div className="text-2xl font-bold">₹{data.gold18K}/gram</div>
                  <div className="text-sm text-amber-200 mt-2">75% Pure</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Historical Trend */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LineChart className="h-6 w-6 mr-3 text-amber-600" />
              Historical Gold Rates - Last 5 Days
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">22K Gold (₹/gram)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">24K Gold (₹/gram)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.historicalData.map((item, index) => {
                    const prevRate = index < data.historicalData.length - 1 ? data.historicalData[index + 1].rate22K : item.rate22K
                    const change = item.rate22K - prevRate
                    return (
                      <tr key={item.date} className="hover:bg-amber-50">
                        <td className="px-6 py-4 text-gray-700">{formatDate(item.date)}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">₹{item.rate22K}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">₹{item.rate24K}</td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                            {change >= 0 ? "+" : ""}₹{change}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Price Calculator */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Sparkles className="h-6 w-6 mr-3 text-amber-600" />
              Gold Price Calculator - {data.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-amber-900">22K Gold</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 gram</span>
                    <span className="font-bold">₹{data.gold22K.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">10 grams</span>
                    <span className="font-bold">₹{(data.gold22K * 10).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">100 grams</span>
                    <span className="font-bold">₹{(data.gold22K * 100).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-yellow-900">24K Gold</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 gram</span>
                    <span className="font-bold">₹{data.gold24K.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">10 grams</span>
                    <span className="font-bold">₹{(data.gold24K * 10).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">100 grams</span>
                    <span className="font-bold">₹{(data.gold24K * 100).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-orange-900">18K Gold</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 gram</span>
                    <span className="font-bold">₹{data.gold18K.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">10 grams</span>
                    <span className="font-bold">₹{(data.gold18K * 10).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">100 grams</span>
                    <span className="font-bold">₹{(data.gold18K * 100).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Factors */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 mr-3 text-amber-600" />
              Factors Affecting Gold Rates in {data.city}
            </h2>
            <ul className="space-y-3">
              {data.localFactors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Shops */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-amber-600" />
              Popular Gold Shops in {data.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.shops.map((shop, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="font-semibold text-gray-900">{shop}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Always verify BIS hallmark certification before purchasing gold jewelry.
            </p>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Invest in digital gold with India's largest broker</p>
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
                      acceptedAnswer: { "@type": "Answer", text: faq.a },
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

