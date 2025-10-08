import type { Metadata } from "next"
import { CTAButton } from "@/components/cta-button"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  Wind,
  Info,
  Target,
  Leaf,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface CNGRate {
  city: string
  state: string
  cngPrice: number
  lastUpdated: string
  change: number
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "CNG Price Today in India – City-wise CNG Rate Per Kg | Live Updates",
    description:
      "Check today's CNG price in India for all major cities. Get live CNG rate updates per kg across different states and cities.",
    keywords:
      "CNG price today, CNG rate today, CNG price per kg, CNG rate in India, city wise CNG price, compressed natural gas price",
    authors: [{ name: "CNG Rates Team" }],
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
      title: "CNG Price Today in India – City-wise CNG Rate",
      description:
        "Check today's CNG price in India for all major cities. Get live CNG rate updates per kg.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/cng-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/cng-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "CNG Rates Today",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "CNG Price Today in India",
      description: "Check today's CNG price across major Indian cities.",
      images: ["https://yoursite.com/images/cng-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/cng-rates",
    },
  }
}

async function fetchCNGRates(): Promise<CNGRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      city: "Mumbai",
      state: "Maharashtra",
      cngPrice: 75.91,
      lastUpdated: new Date().toISOString(),
      change: 1.50,
    },
    {
      city: "Delhi",
      state: "Delhi",
      cngPrice: 75.61,
      lastUpdated: new Date().toISOString(),
      change: 1.00,
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      cngPrice: 84.89,
      lastUpdated: new Date().toISOString(),
      change: 2.00,
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      cngPrice: 78.50,
      lastUpdated: new Date().toISOString(),
      change: 1.20,
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      cngPrice: 79.00,
      lastUpdated: new Date().toISOString(),
      change: 1.50,
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      cngPrice: 79.50,
      lastUpdated: new Date().toISOString(),
      change: 1.80,
    },
    {
      city: "Pune",
      state: "Maharashtra",
      cngPrice: 75.00,
      lastUpdated: new Date().toISOString(),
      change: 1.00,
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      cngPrice: 71.50,
      lastUpdated: new Date().toISOString(),
      change: 0.80,
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

export default async function CNGRatesPage() {
  const cngRates = await fetchCNGRates()

  const avgRate = (cngRates.reduce((sum, r) => sum + r.cngPrice, 0) / cngRates.length).toFixed(2)
  const highestRate = Math.max(...cngRates.map((r) => r.cngPrice))
  const lowestRate = Math.min(...cngRates.map((r) => r.cngPrice))

  const faqs = [
    {
      q: "What is CNG and how is it different from petrol/diesel?",
      a: "CNG (Compressed Natural Gas) is a cleaner-burning alternative fuel consisting mainly of methane. It produces fewer emissions compared to petrol and diesel, making it environmentally friendly. It's measured and sold per kilogram rather than per litre.",
    },
    {
      q: "Why do CNG prices vary across cities in India?",
      a: "CNG prices vary due to transportation costs, state taxes, local taxes, infrastructure costs, and distance from gas sources. Cities closer to natural gas fields or pipelines typically have lower CNG prices.",
    },
    {
      q: "How are CNG prices calculated in India?",
      a: "CNG prices include base gas cost, compression charges, transportation costs, state taxes, and dealer margins. Gas companies revise prices monthly or as needed based on international natural gas prices and operational costs.",
    },
    {
      q: "When are CNG prices updated?",
      a: "Unlike petrol and diesel which are updated daily, CNG prices are typically revised on a monthly basis by gas distribution companies based on various factors including international natural gas prices.",
    },
    {
      q: "Is CNG cheaper than petrol and diesel?",
      a: "Yes, CNG is significantly cheaper than petrol and diesel on a per-kilometer basis. On average, CNG vehicles offer 50-60% lower running costs compared to petrol vehicles, making them economical for daily use.",
    },
    {
      q: "What are the benefits of CNG vehicles?",
      a: "CNG vehicles offer lower running costs, reduced emissions (70-90% less CO2 than petrol), longer engine life due to cleaner combustion, lower maintenance costs, and government incentives in some regions.",
    },
    {
      q: "Can I convert my petrol vehicle to CNG?",
      a: "Yes, petrol vehicles can be converted to CNG by installing an approved CNG kit. The conversion must be done at authorized centers and requires RTO approval. Diesel vehicles generally cannot be converted to CNG.",
    },
    {
      q: "Where can I refuel CNG?",
      a: "CNG is available at dedicated CNG stations operated by gas distribution companies. Major cities have extensive CNG station networks. You can find nearby CNG stations through company apps or websites.",
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
            name: "CNG Price Today in India",
            description: "Today's CNG price in India across major cities with live updates.",
            url: "https://yoursite.com/cng-rates",
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
                  name: "CNG Rates",
                  item: "https://yoursite.com/cng-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-sky-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-sky-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Leaf className="h-4 w-4 mr-2" />
                Clean Fuel Prices
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">CNG Price Today in India</h1>
              <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                Check live CNG prices across all major cities in India. Eco-friendly and economical fuel option.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Wind className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{avgRate}</div>
              </div>
              <div className="text-cyan-100 text-lg font-medium">Average Price</div>
              <div className="text-cyan-200 text-sm mt-1">Per kg</div>
            </div>

            <div className="group bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{highestRate.toFixed(2)}</div>
              </div>
              <div className="text-red-100 text-lg font-medium">Highest Price</div>
              <div className="text-red-200 text-sm mt-1">Per kg</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{lowestRate.toFixed(2)}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Lowest Price</div>
              <div className="text-green-200 text-sm mt-1">Per kg</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{cngRates.length}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">Cities</div>
              <div className="text-purple-200 text-sm mt-1">CNG Available</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">City-wise CNG Rates</h2>
                  <p className="text-gray-600">Today's CNG prices across major cities in India</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(cngRates[0].lastUpdated)}
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
                      State
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      CNG Price (per kg)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {cngRates.map((rate) => (
                    <tr
                      key={rate.city}
                      className="hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-cyan-600 mr-3" />
                          <span className="text-lg font-semibold text-gray-900">{rate.city}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-gray-700">{rate.state}</span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-2xl font-bold text-cyan-600">₹{rate.cngPrice.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div
                          className={`flex items-center font-semibold ${rate.change >= 0 ? "text-red-600" : "text-green-600"}`}
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
                <Info className="h-8 w-8 mr-4 text-cyan-600" />
                Understanding CNG Pricing in India
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Compressed Natural Gas (CNG) is a cleaner and more economical alternative to conventional fuels. CNG
                  prices are determined by natural gas procurement costs, compression charges, transportation costs, state
                  taxes, and operational expenses. Unlike petrol and diesel which are revised daily, CNG prices are
                  typically updated monthly by gas distribution companies.
                </p>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-cyan-900 mb-4">Environmental Benefits</h3>
                  <p className="text-cyan-800 leading-relaxed">
                    CNG is one of the cleanest burning transportation fuels available. It produces 70-90% less carbon
                    monoxide, 87% less non-methane organic gas, and 87% fewer nitrogen oxides compared to petrol. This
                    makes CNG vehicles a preferred choice for reducing vehicular pollution in urban areas.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-3 flex items-center">
                      <Leaf className="h-5 w-5 mr-2" />
                      Eco-Friendly
                    </h4>
                    <p className="text-green-800 text-sm">
                      Significantly lower emissions compared to petrol and diesel vehicles.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Cost-Effective</h4>
                    <p className="text-blue-800 text-sm">
                      50-60% lower running costs compared to petrol vehicles per kilometer.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-900 mb-3">Engine Life</h4>
                    <p className="text-purple-800 text-sm">
                      Cleaner combustion extends engine life and reduces maintenance costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Make smarter fuel and investment choices</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 border border-cyan-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-cyan-600" />
              CNG Vehicle Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-cyan-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-cyan-900">Lower Running Costs</h4>
                <p className="leading-relaxed">
                  CNG offers significantly lower running costs, typically 50-60% cheaper per kilometer compared to petrol.
                  Ideal for high-mileage users like taxis and commercial vehicles.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-cyan-900">Cleaner Emissions</h4>
                <p className="leading-relaxed">
                  CNG vehicles produce minimal pollutants, contributing to better air quality. They meet stringent emission
                  norms easily and are exempt from odd-even schemes in many cities.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-cyan-900">Safety Features</h4>
                <p className="leading-relaxed">
                  CNG is lighter than air and disperses quickly in case of leakage. Modern CNG kits come with multiple
                  safety features including leak detection and automatic shut-off systems.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-cyan-900">Government Support</h4>
                <p className="leading-relaxed">
                  Many states offer incentives for CNG vehicle purchases including road tax exemptions, subsidies on CNG
                  kit installation, and preferential parking in some areas.
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

