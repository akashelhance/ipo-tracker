import type { Metadata } from "next"
import Link from "next/link"
import { Wallet, ArrowLeft } from "lucide-react"
import { NPSCalculatorForm } from "@/components/nps-calculator-form"

export const metadata: Metadata = {
  title: "NPS Calculator - National Pension System Calculator | Calculate NPS Returns & Monthly Pension",
  description:
    "Calculate your NPS corpus, lump sum withdrawal, and monthly pension with our free NPS calculator. Plan your retirement with National Pension System benefits and tax savings.",
  keywords:
    "NPS calculator, national pension system, NPS returns, retirement planning, pension calculator, NPS corpus, monthly pension",
  openGraph: {
    title: "NPS Calculator - Calculate National Pension System Returns",
    description:
      "Free NPS calculator to calculate corpus, lump sum withdrawal, and monthly pension. Plan your retirement with NPS.",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NPS and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "National Pension System (NPS) is a government-sponsored pension scheme that allows you to build a retirement corpus through regular contributions. At retirement, you can withdraw up to 60% as lump sum and use the remaining 40% to purchase an annuity for monthly pension.",
      },
    },
    {
      "@type": "Question",
      name: "How is NPS monthly pension calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NPS monthly pension is calculated based on the annuity amount (40% of corpus) and expected annuity return rate. The formula is: Monthly Pension = (Annuity Amount × Annual Return Rate) ÷ 12 months.",
      },
    },
    {
      "@type": "Question",
      name: "What are the tax benefits of NPS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NPS offers tax benefits under Section 80C (up to ₹1.5 lakh) and additional deduction under Section 80CCD(1B) (up to ₹50,000). The lump sum withdrawal at retirement is also partially tax-free.",
      },
    },
  ],
}

export default function NPSCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 py-8">
            <Link
              href="/calculators"
              className="inline-flex items-center text-rose-100 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Calculators
            </Link>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Wallet className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">NPS Calculator</h1>
                <p className="text-rose-100 text-lg">Calculate National Pension System corpus and monthly pension</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="container mx-auto px-4 py-12">
          <NPSCalculatorForm />
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Why Choose NPS for Retirement Planning?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Tax Benefits</h3>
                  <p className="text-gray-600">Get tax deduction up to ₹2 lakh under Section 80C and 80CCD(1B)</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Market-Linked Returns</h3>
                  <p className="text-gray-600">
                    Benefit from equity and debt market exposure with professional fund management
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Government Backed</h3>
                  <p className="text-gray-600">Regulated by PFRDA with transparent and low-cost structure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-rose-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">What is NPS and how does it work?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    National Pension System (NPS) is a government-sponsored pension scheme that allows you to build a
                    retirement corpus through regular contributions. At retirement, you can withdraw up to 60% as lump
                    sum and use the remaining 40% to purchase an annuity for monthly pension.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">How is NPS monthly pension calculated?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    NPS monthly pension is calculated based on the annuity amount (40% of corpus) and expected annuity
                    return rate. The formula is: Monthly Pension = (Annuity Amount × Annual Return Rate) ÷ 12 months.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">What are the tax benefits of NPS?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    NPS offers tax benefits under Section 80C (up to ₹1.5 lakh) and additional deduction under Section
                    80CCD(1B) (up to ₹50,000). The lump sum withdrawal at retirement is also partially tax-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Related Calculators</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/calculators/sip"
                  className="bg-blue-50 hover:bg-blue-100 p-4 rounded-xl text-center transition-colors group"
                >
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold text-blue-900 group-hover:text-blue-700">SIP Calculator</div>
                </Link>

                <Link
                  href="/calculators/fd"
                  className="bg-orange-50 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors group"
                >
                  <div className="text-2xl mb-2">🏦</div>
                  <div className="font-semibold text-orange-900 group-hover:text-orange-700">FD Calculator</div>
                </Link>

                <Link
                  href="/calculators/ppf"
                  className="bg-indigo-50 hover:bg-indigo-100 p-4 rounded-xl text-center transition-colors group"
                >
                  <div className="text-2xl mb-2">💼</div>
                  <div className="font-semibold text-indigo-900 group-hover:text-indigo-700">PPF Calculator</div>
                </Link>

                <Link
                  href="/calculators/retirement"
                  className="bg-amber-50 hover:bg-amber-100 p-4 rounded-xl text-center transition-colors group"
                >
                  <div className="text-2xl mb-2">🏖️</div>
                  <div className="font-semibold text-amber-900 group-hover:text-amber-700">Retirement</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
