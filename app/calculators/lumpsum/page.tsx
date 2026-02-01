import type { Metadata } from "next"
import Link from "next/link"
import { DollarSign, TrendingUp, Calculator, Target, PieChart, Home, ChevronRight } from "lucide-react"
import LumpsumCalculatorForm from "@/components/lumpsum-calculator-form"

export const metadata: Metadata = {
  title: "Lumpsum Calculator - Calculate One-time Investment Returns | Free Tool",
  description:
    "Calculate returns on your lump sum investments with our free online calculator. Plan your one-time investments with accurate compound growth projections and visual charts.",
  keywords:
    "lumpsum calculator, one time investment, lump sum returns, investment calculator, compound interest, maturity calculator",
  openGraph: {
    title: "Free Lumpsum Calculator - Calculate Investment Returns",
    description:
      "Calculate returns on your lump sum investments with compound interest. Get instant results with visual charts.",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a lumpsum investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lumpsum investment is when you invest a large amount of money at once, rather than investing smaller amounts regularly. This strategy can be beneficial when you have a significant amount to invest and expect markets to perform well.",
      },
    },
    {
      "@type": "Question",
      name: "How is lumpsum return calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lumpsum returns are calculated using the compound interest formula: A = P × (1 + r)^n, where A is maturity amount, P is principal investment, r is annual interest rate, and n is number of years.",
      },
    },
    {
      "@type": "Question",
      name: "Is lumpsum better than SIP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both have advantages. Lumpsum can generate higher returns if invested at the right time, while SIP helps average out market volatility through rupee cost averaging. The choice depends on your financial situation and market timing.",
      },
    },
  ],
}

export default function LumpsumCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex items-center text-sm text-green-100 mb-8">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="h-3 w-3" /> Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-green-200" />
              <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-green-200" />
              <span className="text-white font-medium">Lumpsum Calculator</span>
            </nav>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <DollarSign className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Lumpsum Calculator</h1>
                <p className="text-green-100 text-lg">
                  Calculate returns on your one-time investments with compound interest
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="container mx-auto px-4 py-12">
          <LumpsumCalculatorForm />
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Lumpsum Investment?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Lumpsum investments can be powerful wealth-building tools when timed correctly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Higher Potential Returns</h3>
                <p className="text-gray-600">
                  When invested at the right time, lumpsum can generate higher returns than systematic investments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Immediate Exposure</h3>
                <p className="text-gray-600">
                  Your entire investment starts working immediately, benefiting from compound growth from day one
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PieChart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Simple & Convenient</h3>
                <p className="text-gray-600">
                  One-time investment without the need for regular monitoring or monthly commitments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a lumpsum investment?</h3>
                  <p className="text-gray-600">
                    A lumpsum investment is when you invest a large amount of money at once, rather than investing
                    smaller amounts regularly. This strategy can be beneficial when you have a significant amount to
                    invest and expect markets to perform well.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How is lumpsum return calculated?</h3>
                  <p className="text-gray-600">
                    Lumpsum returns are calculated using the compound interest formula: A = P × (1 + r)^n, where A is
                    maturity amount, P is principal investment, r is annual interest rate, and n is number of years.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is lumpsum better than SIP?</h3>
                  <p className="text-gray-600">
                    Both have advantages. Lumpsum can generate higher returns if invested at the right time, while SIP
                    helps average out market volatility through rupee cost averaging. The choice depends on your
                    financial situation and market timing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Other Calculators</h2>
              <p className="text-gray-600">Plan your investments with our comprehensive calculator suite</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link
                href="/calculators/sip"
                className="bg-blue-50 hover:bg-blue-100 p-4 rounded-xl text-center transition-colors group"
              >
                <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-blue-900">SIP Calculator</p>
              </Link>

              <Link
                href="/calculators/fd"
                className="bg-orange-50 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors group"
              >
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-orange-900">FD Calculator</p>
              </Link>

              <Link
                href="/calculators/ppf"
                className="bg-purple-50 hover:bg-purple-100 p-4 rounded-xl text-center transition-colors group"
              >
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-purple-900">PPF Calculator</p>
              </Link>

              <Link
                href="/calculators/nps"
                className="bg-pink-50 hover:bg-pink-100 p-4 rounded-xl text-center transition-colors group"
              >
                <PieChart className="h-8 w-8 text-pink-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-pink-900">NPS Calculator</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
