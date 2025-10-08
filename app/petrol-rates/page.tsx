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
  DollarSign,
  Gauge,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface PetrolRate {
  city: string
  state: string
  petrolPrice: number
  lastUpdated: string
  change: number
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Petrol Price Today in India – City-wise Petrol Rate Per Litre | Live Updates",
    description:
      "Check today's petrol price in India for all major cities. Get live petrol rate updates per litre across different states and cities.",
    keywords:
      "petrol price today, petrol rate today, fuel price, petrol price per litre, petrol rate in India, city wise petrol price",
    authors: [{ name: "Petrol Rates Team" }],
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
      title: "Petrol Price Today in India – City-wise Petrol Rate",
      description:
        "Check today's petrol price in India for all major cities. Get live petrol rate updates per litre.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/petrol-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/petrol-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "Petrol Rates Today",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Petrol Price Today in India",
      description: "Check today's petrol price across major Indian cities.",
      images: ["https://yoursite.com/images/petrol-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/petrol-rates",
    },
  }
}

async function fetchPetrolRates(): Promise<PetrolRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      city: "Mumbai",
      state: "Maharashtra",
      petrolPrice: 106.31,
      lastUpdated: new Date().toISOString(),
      change: 0.15,
    },
    {
      city: "Delhi",
      state: "Delhi",
      petrolPrice: 96.72,
      lastUpdated: new Date().toISOString(),
      change: 0.20,
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      petrolPrice: 101.94,
      lastUpdated: new Date().toISOString(),
      change: -0.10,
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      petrolPrice: 106.03,
      lastUpdated: new Date().toISOString(),
      change: 0.18,
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      petrolPrice: 102.63,
      lastUpdated: new Date().toISOString(),
      change: 0.12,
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      petrolPrice: 109.66,
      lastUpdated: new Date().toISOString(),
      change: 0.25,
    },
    {
      city: "Pune",
      state: "Maharashtra",
      petrolPrice: 105.87,
      lastUpdated: new Date().toISOString(),
      change: 0.15,
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      petrolPrice: 96.46,
      lastUpdated: new Date().toISOString(),
      change: -0.08,
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

export default async function PetrolRatesPage() {
  const petrolRates = await fetchPetrolRates()

  const avgRate = (petrolRates.reduce((sum, r) => sum + r.petrolPrice, 0) / petrolRates.length).toFixed(2)
  const highestRate = Math.max(...petrolRates.map((r) => r.petrolPrice))
  const lowestRate = Math.min(...petrolRates.map((r) => r.petrolPrice))

  const faqs = [
    {
      q: "Why do petrol prices vary across cities in India?",
      a: "Petrol prices vary due to state-specific VAT rates, local taxes, transportation costs, and dealer commissions. Each state has the authority to set its own VAT on petroleum products.",
    },
    {
      q: "How are petrol prices calculated in India?",
      a: "Petrol prices include base price (determined by crude oil price and refining cost), central excise duty, dealer commission, and state VAT. These components together determine the retail selling price.",
    },
    {
      q: "When are petrol prices updated?",
      a: "Petrol prices in India are revised daily at 6 AM by oil marketing companies (OMCs) like Indian Oil, Bharat Petroleum, and Hindustan Petroleum based on international crude oil prices and exchange rates.",
    },
    {
      q: "What factors affect petrol prices?",
      a: "Key factors include international crude oil prices, USD-INR exchange rate, central excise duty, state VAT, refining costs, transportation costs, and dealer margins.",
    },
    {
      q: "Why is petrol expensive in India?",
      a: "India imports over 80% of its crude oil requirements. High central excise duty and state VAT (combined around 50-60% of retail price) make petrol expensive. Currency fluctuations also impact prices.",
    },
    {
      q: "Which city has the cheapest petrol in India?",
      a: "Typically, cities like Delhi, Ahmedabad, and Gandhinagar have lower petrol prices due to lower state VAT rates compared to cities like Mumbai, Chennai, or Hyderabad.",
    },
    {
      q: "What is the difference between petrol and diesel prices?",
      a: "Diesel is generally cheaper than petrol due to lower excise duty. However, the gap has narrowed over the years. Both are subject to daily price revisions.",
    },
    {
      q: "How can I save on fuel costs?",
      a: "Maintain optimal tire pressure, avoid aggressive driving, regular vehicle servicing, remove unnecessary weight, use AC judiciously, and consider fuel credit cards for cashback and rewards.",
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
            name: "Petrol Price Today in India",
            description: "Today's petrol price in India across major cities with live updates.",
            url: "https://yoursite.com/petrol-rates",
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
                  name: "Petrol Rates",
                  item: "https://yoursite.com/petrol-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Fuel className="h-4 w-4 mr-2" />
                Live Fuel Prices
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Petrol Price Today in India</h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
                Check live petrol prices across all major cities in India. Updated daily at 6 AM.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Gauge className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{avgRate}</div>
              </div>
              <div className="text-orange-100 text-lg font-medium">Average Price</div>
              <div className="text-orange-200 text-sm mt-1">Per litre</div>
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

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{lowestRate.toFixed(2)}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Lowest Price</div>
              <div className="text-green-200 text-sm mt-1">Per litre</div>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">{petrolRates.length}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">Cities</div>
              <div className="text-blue-200 text-sm mt-1">Tracked</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">City-wise Petrol Rates</h2>
                  <p className="text-gray-600">Today's petrol prices across major cities in India</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(petrolRates[0].lastUpdated)}
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
                      Petrol Price (per litre)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {petrolRates.map((rate) => (
                    <tr
                      key={rate.city}
                      className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                          <span className="text-lg font-semibold text-gray-900">{rate.city}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-gray-700">{rate.state}</span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-2xl font-bold text-orange-600">₹{rate.petrolPrice.toFixed(2)}</div>
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
                <Info className="h-8 w-8 mr-4 text-orange-600" />
                Understanding Petrol Pricing in India
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Petrol prices in India are determined by multiple factors including international crude oil prices,
                  refining costs, transportation charges, dealer commissions, and taxes. The price you pay at the pump
                  includes central excise duty levied by the central government and VAT imposed by state governments. Since
                  VAT rates vary by state, petrol prices differ across cities.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">Daily Price Revision</h3>
                  <p className="text-orange-800 leading-relaxed">
                    Since June 2017, India has adopted dynamic fuel pricing. Oil marketing companies revise petrol prices
                    daily at 6 AM based on the previous day's international crude oil prices and currency exchange rates.
                    This system ensures that domestic fuel prices reflect global market conditions more accurately.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Base Price</h4>
                    <p className="text-blue-800 text-sm">
                      Includes crude oil cost, refining charges, and inland freight charges.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-900 mb-3">Central Excise</h4>
                    <p className="text-purple-800 text-sm">
                      Tax levied by the central government on petroleum products.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-3">State VAT</h4>
                    <p className="text-green-800 text-sm">
                      Variable tax rate set by individual states, causing price differences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Track fuel prices and invest smartly</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border border-orange-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-orange-600" />
              Fuel Saving Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-orange-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-orange-900">Maintain Your Vehicle</h4>
                <p className="leading-relaxed">
                  Regular servicing, proper tire inflation, and timely oil changes can improve fuel efficiency by up to
                  10-15%, saving significant costs over time.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-orange-900">Drive Smart</h4>
                <p className="leading-relaxed">
                  Avoid aggressive acceleration and braking, maintain steady speeds, and use cruise control on highways to
                  optimize fuel consumption.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-orange-900">Plan Your Trips</h4>
                <p className="leading-relaxed">
                  Combine multiple errands into one trip, avoid peak traffic hours, and use GPS to find shortest routes to
                  reduce unnecessary fuel consumption.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-orange-900">Use Fuel Cards</h4>
                <p className="leading-relaxed">
                  Many banks offer fuel credit cards with cashback, reward points, and surcharge waivers that can help you
                  save 1-5% on every fuel purchase.
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

