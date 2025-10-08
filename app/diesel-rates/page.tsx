import type { Metadata } from "next"
import { CTAButton } from "@/components/cta-button"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  Fuel,
  Info,
  Target,
  Truck,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface DieselRate {
  city: string
  state: string
  dieselPrice: number
  lastUpdated: string
  change: number
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Diesel Price Today in India – City-wise Diesel Rate Per Litre | Live Updates",
    description:
      "Check today's diesel price in India for all major cities. Get live diesel rate updates per litre across different states and cities.",
    keywords:
      "diesel price today, diesel rate today, fuel price, diesel price per litre, diesel rate in India, city wise diesel price",
    authors: [{ name: "Diesel Rates Team" }],
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
      title: "Diesel Price Today in India – City-wise Diesel Rate",
      description:
        "Check today's diesel price in India for all major cities. Get live diesel rate updates per litre.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/diesel-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/diesel-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "Diesel Rates Today",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Diesel Price Today in India",
      description: "Check today's diesel price across major Indian cities.",
      images: ["https://yoursite.com/images/diesel-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/diesel-rates",
    },
  }
}

async function fetchDieselRates(): Promise<DieselRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      city: "Mumbai",
      state: "Maharashtra",
      dieselPrice: 94.27,
      lastUpdated: new Date().toISOString(),
      change: 0.12,
    },
    {
      city: "Delhi",
      state: "Delhi",
      dieselPrice: 89.66,
      lastUpdated: new Date().toISOString(),
      change: 0.18,
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      dieselPrice: 87.00,
      lastUpdated: new Date().toISOString(),
      change: -0.08,
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      dieselPrice: 92.76,
      lastUpdated: new Date().toISOString(),
      change: 0.15,
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      dieselPrice: 94.24,
      lastUpdated: new Date().toISOString(),
      change: 0.10,
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      dieselPrice: 97.82,
      lastUpdated: new Date().toISOString(),
      change: 0.20,
    },
    {
      city: "Pune",
      state: "Maharashtra",
      dieselPrice: 90.87,
      lastUpdated: new Date().toISOString(),
      change: 0.12,
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      dieselPrice: 92.17,
      lastUpdated: new Date().toISOString(),
      change: -0.05,
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

export default async function DieselRatesPage() {
  const dieselRates = await fetchDieselRates()

  const avgRate = (dieselRates.reduce((sum, r) => sum + r.dieselPrice, 0) / dieselRates.length).toFixed(2)
  const highestRate = Math.max(...dieselRates.map((r) => r.dieselPrice))
  const lowestRate = Math.min(...dieselRates.map((r) => r.dieselPrice))

  const faqs = [
    {
      q: "Why do diesel prices vary across cities in India?",
      a: "Diesel prices vary due to state-specific VAT rates, local taxes, transportation costs, and dealer commissions. Each state has the authority to set its own VAT on petroleum products, leading to price variations.",
    },
    {
      q: "How are diesel prices calculated in India?",
      a: "Diesel prices include base price (determined by crude oil price and refining cost), central excise duty, dealer commission, and state VAT. These components together determine the retail selling price.",
    },
    {
      q: "When are diesel prices updated?",
      a: "Diesel prices in India are revised daily at 6 AM by oil marketing companies based on international crude oil prices and exchange rates. This system was implemented in June 2017.",
    },
    {
      q: "Why is diesel cheaper than petrol in India?",
      a: "Diesel is generally cheaper than petrol primarily due to lower central excise duty. However, the gap has narrowed significantly over the years as the government has increased taxes on diesel.",
    },
    {
      q: "What factors affect diesel prices?",
      a: "Key factors include international crude oil prices, USD-INR exchange rate, central excise duty, state VAT, refining costs, transportation costs, and dealer margins.",
    },
    {
      q: "Which city has the cheapest diesel in India?",
      a: "Typically, cities like Delhi, Ahmedabad, and Bangalore have lower diesel prices due to comparatively lower state VAT rates. Prices are highest in cities like Mumbai and Hyderabad.",
    },
    {
      q: "Is diesel still a good choice for vehicles?",
      a: "Diesel vehicles offer better fuel efficiency and are economical for high-mileage users. However, higher vehicle cost, maintenance, and narrowing price gap with petrol should be considered.",
    },
    {
      q: "How can commercial vehicle owners save on diesel costs?",
      a: "Fleet operators can save through bulk purchasing, fuel cards with discounts, route optimization, driver training for fuel-efficient driving, and regular vehicle maintenance.",
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
            name: "Diesel Price Today in India",
            description: "Today's diesel price in India across major cities with live updates.",
            url: "https://yoursite.com/diesel-rates",
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
                  name: "Diesel Rates",
                  item: "https://yoursite.com/diesel-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Truck className="h-4 w-4 mr-2" />
                Live Diesel Prices
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Diesel Price Today in India</h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
                Check live diesel prices across all major cities in India. Updated daily at 6 AM.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{avgRate}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Average Price</div>
              <div className="text-green-200 text-sm mt-1">Per litre</div>
            </div>

            <div className="group bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{highestRate.toFixed(2)}</div>
              </div>
              <div className="text-red-100 text-lg font-medium">Highest Price</div>
              <div className="text-red-200 text-sm mt-1">Per litre</div>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{lowestRate.toFixed(2)}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">Lowest Price</div>
              <div className="text-blue-200 text-sm mt-1">Per litre</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{dieselRates.length}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">Cities</div>
              <div className="text-purple-200 text-sm mt-1">Tracked</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">City-wise Diesel Rates</h2>
                  <p className="text-gray-600">Today's diesel prices across major cities in India</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(dieselRates[0].lastUpdated)}
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
                      Diesel Price (per litre)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {dieselRates.map((rate) => (
                    <tr
                      key={rate.city}
                      className="hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-green-600 mr-3" />
                          <span className="text-lg font-semibold text-gray-900">{rate.city}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-gray-700">{rate.state}</span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-2xl font-bold text-green-600">₹{rate.dieselPrice.toFixed(2)}</div>
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
                <Info className="h-8 w-8 mr-4 text-green-600" />
                Understanding Diesel Pricing in India
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Diesel prices in India are determined by similar factors as petrol, including international crude oil
                  prices, refining costs, and taxes. However, diesel typically has a lower tax burden compared to petrol,
                  making it relatively cheaper. The price structure includes base price, central excise duty, dealer
                  commission, and state VAT, which varies across states.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Daily Price Revision</h3>
                  <p className="text-green-800 leading-relaxed">
                    Like petrol, diesel prices are revised daily at 6 AM by oil marketing companies based on international
                    crude oil prices and currency exchange rates. This dynamic pricing mechanism ensures that consumers pay
                    prices that reflect global market conditions.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Commercial Use</h4>
                    <p className="text-blue-800 text-sm">
                      Diesel is widely used in commercial vehicles, trucks, and buses due to better fuel efficiency.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-900 mb-3">Lower Excise Duty</h4>
                    <p className="text-purple-800 text-sm">
                      Diesel attracts lower central excise duty compared to petrol, making it more economical.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-orange-900 mb-3">State VAT</h4>
                    <p className="text-orange-800 text-sm">
                      Variable VAT rates across states cause significant price differences between cities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Track fuel prices and manage your finances better</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-green-600" />
              Diesel Efficiency Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-green-900">Regular Maintenance</h4>
                <p className="leading-relaxed">
                  Keep your diesel engine well-maintained with regular servicing, clean air filters, and proper fuel
                  injector cleaning to maintain optimal fuel efficiency.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-green-900">Proper Gear Usage</h4>
                <p className="leading-relaxed">
                  Drive in the correct gear and avoid revving the engine unnecessarily. Diesel engines perform best at lower
                  RPMs with smooth acceleration.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-green-900">Load Management</h4>
                <p className="leading-relaxed">
                  Avoid overloading your vehicle and remove unnecessary weight. Every 50kg of extra weight can reduce fuel
                  efficiency by 1-2%.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-green-900">Fuel Quality</h4>
                <p className="leading-relaxed">
                  Use good quality diesel from reputable fuel stations. Poor quality fuel can damage engine components and
                  reduce fuel efficiency significantly.
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

