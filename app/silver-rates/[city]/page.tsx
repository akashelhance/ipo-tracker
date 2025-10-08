import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CTAButton } from "@/components/cta-button"
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  MapPin,
  Sparkles,
  Info,
  LineChart,
  Award,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface SilverRateDetail {
  city: string
  state: string
  silver999: number
  silver925: number
  lastUpdated: string
  change: number
  historicalData: {
    date: string
    rate999: number
    rate925: number
  }[]
  localFactors: string[]
  shops: string[]
}

async function fetchSilverRateDetail(city: string): Promise<SilverRateDetail | null> {
  const sampleData: Record<string, SilverRateDetail> = {
    mumbai: {
      city: "Mumbai",
      state: "Maharashtra",
      silver999: 92.5,
      silver925: 85.5,
      lastUpdated: new Date().toISOString(),
      change: 1.2,
      historicalData: [
        { date: "2025-01-07", rate999: 91.3, rate925: 84.4 },
        { date: "2025-01-06", rate999: 91.8, rate925: 84.9 },
        { date: "2025-01-05", rate999: 90.9, rate925: 84.0 },
        { date: "2025-01-04", rate999: 92.0, rate925: 85.0 },
        { date: "2025-01-03", rate999: 91.5, rate925: 84.6 },
      ],
      localFactors: [
        "Industrial demand affects pricing",
        "GST of 3% on silver value",
        "Making charges typically 20-30%",
        "Import duties impact local prices",
        "Strong demand during festivals",
      ],
      shops: [
        "Zaveri Bazaar",
        "Tanishq",
        "PNG Jewellers",
        "Kalyan Jewellers",
        "Malabar Gold & Diamonds",
      ],
    },
    delhi: {
      city: "Delhi",
      state: "Delhi",
      silver999: 93.0,
      silver925: 86.0,
      lastUpdated: new Date().toISOString(),
      change: 1.5,
      historicalData: [
        { date: "2025-01-07", rate999: 91.5, rate925: 84.6 },
        { date: "2025-01-06", rate999: 92.0, rate925: 85.0 },
        { date: "2025-01-05", rate999: 91.2, rate925: 84.3 },
        { date: "2025-01-04", rate999: 92.5, rate925: 85.5 },
        { date: "2025-01-03", rate999: 91.8, rate925: 84.9 },
      ],
      localFactors: [
        "Capital city with diverse demand",
        "Competitive pricing due to market size",
        "Active trading in Chandni Chowk",
        "Lower octroi compared to some cities",
        "Good availability throughout year",
      ],
      shops: [
        "Chandni Chowk",
        "Tanishq",
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
  const data = await fetchSilverRateDetail(params.city)

  if (!data) {
    return { title: "City Not Found" }
  }

  return {
    title: `Silver Rate Today in ${data.city} - 999, 925 Silver Price | Live Updates`,
    description: `Today's silver rate in ${data.city}: 999 Silver ₹${data.silver999}/gram, 925 Silver ₹${data.silver925}/gram. Check live prices and historical trends.`,
    keywords: `silver rate ${data.city}, silver price ${data.city}, ${data.city} silver rate today`,
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

export default async function SilverRateCityPage({ params }: { params: { city: string } }) {
  const data = await fetchSilverRateDetail(params.city)

  if (!data) {
    notFound()
  }

  const faqs = [
    {
      q: `What is the silver rate today in ${data.city}?`,
      a: `Today's silver rate in ${data.city} is ₹${data.silver999} per gram for 999 silver and ₹${data.silver925} per gram for 925 silver.`,
    },
    {
      q: `Why is silver rate different in ${data.city}?`,
      a: `Silver rates in ${data.city} vary due to local taxes, transportation costs, industrial demand, and making charges by local jewelers.`,
    },
    {
      q: `Where to buy silver in ${data.city}?`,
      a: `You can buy silver from trusted jewelers in ${data.city} including ${data.shops.slice(0, 3).join(", ")}. Always check for hallmark certification.`,
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
            name: `Silver Rate in ${data.city}`,
            description: `Current silver prices in ${data.city} for 999 and 925 silver`,
            offers: {
              "@type": "Offer",
              price: data.silver999,
              priceCurrency: "INR",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-gray-600/20 to-zinc-600/20"></div>
          <div className="relative container mx-auto px-4 py-12">
            <Link
              href="/silver-rates"
              className="inline-flex items-center text-white hover:text-slate-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Cities
            </Link>

            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {data.state}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Silver Rate in {data.city}</h1>
              <p className="text-xl text-slate-100 mb-6">
                Live silver prices for 999 and 925 silver in {data.city}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-slate-200 text-sm mb-1">999 Silver</div>
                  <div className="text-2xl font-bold">₹{data.silver999.toFixed(2)}/gram</div>
                  <div className="flex items-center mt-2">
                    {data.change >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-300 mr-1" />
                    )}
                    <span className={`text-sm ${data.change >= 0 ? "text-green-300" : "text-red-300"}`}>
                      {data.change >= 0 ? "+" : ""}₹{data.change.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-slate-200 text-sm mb-1">925 Silver</div>
                  <div className="text-2xl font-bold">₹{data.silver925.toFixed(2)}/gram</div>
                  <div className="text-sm text-slate-200 mt-2">Sterling Silver</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LineChart className="h-6 w-6 mr-3 text-slate-600" />
              Historical Silver Rates - Last 5 Days
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">999 Silver (₹/gram)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">925 Silver (₹/gram)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.historicalData.map((item, index) => {
                    const prevRate = index < data.historicalData.length - 1 ? data.historicalData[index + 1].rate999 : item.rate999
                    const change = item.rate999 - prevRate
                    return (
                      <tr key={item.date} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-gray-700">{formatDate(item.date)}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">₹{item.rate999.toFixed(2)}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">₹{item.rate925.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                            {change >= 0 ? "+" : ""}₹{change.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Sparkles className="h-6 w-6 mr-3 text-slate-600" />
              Silver Price Calculator - {data.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-slate-900">999 Silver</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 gram</span>
                    <span className="font-bold">₹{data.silver999.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">100 grams</span>
                    <span className="font-bold">₹{(data.silver999 * 100).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 kg</span>
                    <span className="font-bold">₹{(data.silver999 * 1000).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">925 Silver</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 gram</span>
                    <span className="font-bold">₹{data.silver925.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">100 grams</span>
                    <span className="font-bold">₹{(data.silver925 * 100).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">1 kg</span>
                    <span className="font-bold">₹{(data.silver925 * 1000).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 mr-3 text-slate-600" />
              Factors Affecting Silver Rates in {data.city}
            </h2>
            <ul className="space-y-3">
              {data.localFactors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-slate-600" />
              Popular Silver Shops in {data.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.shops.map((shop, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-slate-600 mr-2" />
                    <span className="font-semibold text-gray-900">{shop}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Always verify hallmark certification before purchasing silver jewelry.
            </p>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Invest in digital silver with India's largest broker</p>
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

