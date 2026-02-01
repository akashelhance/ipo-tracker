import type { Metadata } from "next"
import { CTAButton } from "@/components/cta-button"
import {
  TrendingUp,
  TrendingDown,
  MapPin,
  Flame,
  Info,
  Target,
  Home,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface LPGRate {
  city: string
  state: string
  domesticPrice: number
  commercialPrice: number
  lastUpdated: string
  change: number
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "LPG Cylinder Price Today in India – Domestic & Commercial Gas Price | Live Updates",
    description:
      "Check today's LPG cylinder price in India for domestic and commercial gas. Get live LPG rate updates for 14.2 kg cylinders across all cities.",
    keywords:
      "LPG price today, LPG cylinder price, gas cylinder price, domestic LPG price, commercial LPG price, cooking gas price",
    authors: [{ name: "LPG Rates Team" }],
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
      title: "LPG Cylinder Price Today in India – Domestic & Commercial Gas Price",
      description:
        "Check today's LPG cylinder price in India for domestic and commercial gas across all major cities.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/lpg-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/lpg-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "LPG Rates Today",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "LPG Cylinder Price Today in India",
      description: "Check today's LPG cylinder price across major Indian cities.",
      images: ["https://yoursite.com/images/lpg-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/lpg-rates",
    },
  }
}

async function fetchLPGRates(): Promise<LPGRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      city: "Mumbai",
      state: "Maharashtra",
      domesticPrice: 903.00,
      commercialPrice: 1652.50,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
    },
    {
      city: "Delhi",
      state: "Delhi",
      domesticPrice: 803.00,
      commercialPrice: 1802.50,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      domesticPrice: 907.00,
      commercialPrice: 1713.50,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      domesticPrice: 931.00,
      commercialPrice: 1819.50,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      domesticPrice: 920.50,
      commercialPrice: 1768.00,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      domesticPrice: 918.00,
      commercialPrice: 1713.50,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
    },
    {
      city: "Pune",
      state: "Maharashtra",
      domesticPrice: 901.50,
      commercialPrice: 1652.50,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      domesticPrice: 906.00,
      commercialPrice: 1702.00,
      lastUpdated: new Date().toISOString(),
      change: 0.00,
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

export default async function LPGRatesPage() {
  const lpgRates = await fetchLPGRates()

  const avgDomesticRate = (lpgRates.reduce((sum, r) => sum + r.domesticPrice, 0) / lpgRates.length).toFixed(2)
  const avgCommercialRate = (lpgRates.reduce((sum, r) => sum + r.commercialPrice, 0) / lpgRates.length).toFixed(2)
  const highestDomesticRate = Math.max(...lpgRates.map((r) => r.domesticPrice))
  const lowestDomesticRate = Math.min(...lpgRates.map((r) => r.domesticPrice))

  const faqs = [
    {
      q: "Why do LPG cylinder prices vary across cities in India?",
      a: "LPG prices vary due to transportation costs from refineries and ports, state-specific taxes, local levies, and distance from distribution points. Cities closer to refineries typically have lower prices.",
    },
    {
      q: "How are LPG cylinder prices calculated in India?",
      a: "LPG prices include international LPG price benchmarks, currency exchange rates, import costs, customs duty, excise duty, dealer commission, and transportation costs. Prices are revised monthly on the 1st of each month.",
    },
    {
      q: "When are LPG prices updated?",
      a: "Oil marketing companies (IOC, HP, BPCL) revise LPG cylinder prices on the 1st of every month based on international LPG prices and exchange rates from the previous month.",
    },
    {
      q: "What is the Pradhan Mantri Ujjwala Yojana (PMUY) subsidy?",
      a: "PMUY provides subsidized LPG connections to women from Below Poverty Line (BPL) households. Beneficiaries receive assistance for the first refill and cylinder installation charges.",
    },
    {
      q: "What is the difference between domestic and commercial LPG prices?",
      a: "Domestic LPG (14.2 kg) is subsidized for eligible households and costs less, while commercial LPG (19 kg) does not receive subsidies and is priced higher. Commercial cylinders are used in restaurants and businesses.",
    },
    {
      q: "How many subsidized LPG cylinders can I get per year?",
      a: "Under the Direct Benefit Transfer (DBT) scheme, eligible households can get subsidy on 12 cylinders per year. Any additional cylinders are sold at non-subsidized market rates.",
    },
    {
      q: "How to book an LPG cylinder?",
      a: "You can book LPG cylinders through phone call, SMS, mobile apps (like Indane, HP Gas, Bharat Gas apps), or online portals of respective gas companies. Delivery typically takes 2-4 days.",
    },
    {
      q: "What are the safety precautions for LPG cylinders?",
      a: "Keep cylinders in well-ventilated areas, away from heat sources. Check for leaks using soap solution. Turn off the regulator when not in use. Never store cylinders horizontally or in enclosed spaces.",
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
            name: "LPG Cylinder Price Today in India",
            description: "Today's LPG cylinder price in India for domestic and commercial gas across major cities.",
            url: "https://yoursite.com/lpg-rates",
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
                  name: "LPG Rates",
                  item: "https://yoursite.com/lpg-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-red-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-pink-600/20 to-red-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Flame className="h-4 w-4 mr-2" />
                Live LPG Prices
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">LPG Cylinder Price Today</h1>
              <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-3xl mx-auto">
                Check live LPG cylinder prices for domestic and commercial gas across all cities in India.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-rose-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{avgDomesticRate}</div>
              </div>
              <div className="text-rose-100 text-lg font-medium">Avg Domestic Price</div>
              <div className="text-rose-200 text-sm mt-1">14.2 kg cylinder</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Flame className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{avgCommercialRate}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">Avg Commercial Price</div>
              <div className="text-purple-200 text-sm mt-1">19 kg cylinder</div>
            </div>

            <div className="group bg-gradient-to-br from-red-500 to-orange-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{highestDomesticRate.toFixed(2)}</div>
              </div>
              <div className="text-red-100 text-lg font-medium">Highest Price</div>
              <div className="text-red-200 text-sm mt-1">Domestic</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">₹{lowestDomesticRate.toFixed(2)}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Lowest Price</div>
              <div className="text-green-200 text-sm mt-1">Domestic</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">City-wise LPG Cylinder Rates</h2>
                  <p className="text-gray-600">Today's LPG cylinder prices across major cities in India</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(lpgRates[0].lastUpdated)}
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
                      Domestic (14.2 kg)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Commercial (19 kg)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {lpgRates.map((rate) => (
                    <tr
                      key={rate.city}
                      className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-rose-600 mr-3" />
                          <span className="text-lg font-semibold text-gray-900">{rate.city}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-gray-700">{rate.state}</span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-2xl font-bold text-rose-600">₹{rate.domesticPrice.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-2xl font-bold text-purple-600">₹{rate.commercialPrice.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div
                          className={`flex items-center font-semibold ${rate.change === 0 ? "text-gray-600" : rate.change > 0 ? "text-red-600" : "text-green-600"}`}
                        >
                          {rate.change === 0 ? (
                            <span>No Change</span>
                          ) : (
                            <>
                              {rate.change > 0 ? (
                                <TrendingUp className="h-5 w-5 mr-1" />
                              ) : (
                                <TrendingDown className="h-5 w-5 mr-1" />
                              )}
                              <span>
                                {rate.change > 0 ? "+" : ""}₹{Math.abs(rate.change).toFixed(2)}
                              </span>
                            </>
                          )}
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
                <Info className="h-8 w-8 mr-4 text-rose-600" />
                Understanding LPG Cylinder Pricing in India
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  LPG (Liquefied Petroleum Gas) cylinder prices in India are determined by international LPG prices,
                  currency exchange rates, import costs, taxes, and transportation costs. The government provides subsidies
                  on domestic LPG cylinders (14.2 kg) for eligible households through the Direct Benefit Transfer (DBT)
                  scheme, while commercial cylinders (19 kg) are sold at market rates without subsidies.
                </p>

                <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-rose-900 mb-4">Monthly Price Revision</h3>
                  <p className="text-rose-800 leading-relaxed">
                    LPG cylinder prices are revised on the 1st of every month by oil marketing companies (Indian Oil, HP
                    Gas, Bharat Gas) based on international LPG prices and exchange rates from the previous month. This
                    allows for stable pricing throughout the month, unlike daily price revisions for petrol and diesel.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-3">Domestic LPG</h4>
                    <p className="text-blue-800 text-sm">
                      14.2 kg cylinders for household use. Eligible households receive subsidies through DBT scheme. 12
                      subsidized cylinders per year.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-900 mb-3">Commercial LPG</h4>
                    <p className="text-purple-800 text-sm">
                      19 kg cylinders for commercial establishments like restaurants and hotels. No subsidies, sold at
                      market rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Track household expenses and invest smartly</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 border border-rose-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-rose-600" />
              LPG Safety & Efficiency Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-rose-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-rose-900">Safety First</h4>
                <p className="leading-relaxed">
                  Always check for leaks using soap solution. Keep cylinders in well-ventilated areas away from heat
                  sources. Turn off the regulator knob when not in use.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-rose-900">Efficient Cooking</h4>
                <p className="leading-relaxed">
                  Use pressure cookers to save gas. Keep flame size appropriate for your vessel. Cover pots and pans while
                  cooking to reduce cooking time and gas consumption.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-rose-900">Regular Maintenance</h4>
                <p className="leading-relaxed">
                  Clean burners regularly for efficient burning. Replace rubber tubes and regulators every 2 years. Get
                  your gas stove serviced annually.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-rose-900">Book in Advance</h4>
                <p className="leading-relaxed">
                  Book your refill when cylinder is 1/4th full to avoid emergencies. Use mobile apps for easy booking and
                  tracking. Keep emergency contact numbers handy.
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

