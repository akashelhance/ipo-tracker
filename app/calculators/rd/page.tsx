import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { RDCalculatorForm } from "@/components/rd-calculator-form"

export const metadata: Metadata = {
  title: "RD Calculator - Recurring Deposit Calculator | Calculate RD Returns Online",
  description:
    "Calculate your Recurring Deposit (RD) maturity amount with our free RD calculator. Plan your monthly savings and calculate compound returns with different compounding frequencies.",
  keywords:
    "RD calculator, recurring deposit calculator, RD returns, monthly deposit calculator, bank RD rates, compound interest",
  openGraph: {
    title: "RD Calculator - Calculate Recurring Deposit Returns",
    description:
      "Free online RD calculator to calculate maturity amount, interest earned, and plan your monthly savings effectively.",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is RD maturity amount calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RD maturity amount is calculated using compound interest formula: M = P × [(1 + r/n)^(nt) - 1] / [1 - (1 + r/n)^(-1)], where P is monthly deposit, r is annual interest rate, n is compounding frequency, and t is time in years.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between RD and FD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RD (Recurring Deposit) requires monthly deposits of a fixed amount, while FD (Fixed Deposit) is a one-time lump sum investment. RD helps in disciplined savings, while FD is suitable for investing surplus money.",
      },
    },
    {
      "@type": "Question",
      name: "Can I withdraw RD before maturity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most banks allow premature withdrawal of RD, but it usually comes with a penalty of 0.5% to 1% on the interest rate. The exact penalty varies by bank and tenure completed.",
      },
    },
  ],
}

export default function RDCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 py-8">
            <Link
              href="/calculators"
              className="inline-flex items-center text-teal-100 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Calculators
            </Link>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Calendar className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">RD Calculator</h1>
                <p className="text-teal-100 text-lg">Calculate Recurring Deposit maturity with monthly contributions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="container mx-auto px-4 py-12">
          <RDCalculatorForm />
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Recurring Deposits?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Disciplined Savings</h3>
                  <p className="text-gray-600">Build a habit of regular monthly savings with fixed deposits</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Higher Returns</h3>
                  <p className="text-gray-600">Earn better interest rates compared to regular savings accounts</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Flexible Tenure</h3>
                  <p className="text-gray-600">Choose tenure from 6 months to 10 years based on your goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">How is RD maturity amount calculated?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    RD maturity amount is calculated using compound interest formula where your monthly deposits earn
                    interest that compounds over time. The formula considers your monthly deposit amount, interest rate,
                    compounding frequency, and investment duration.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    What is the difference between RD and FD?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    RD requires monthly deposits of a fixed amount throughout the tenure, while FD is a one-time lump
                    sum investment. RD helps build disciplined savings habits, while FD is suitable for investing
                    surplus money you already have.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Can I withdraw RD before maturity?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, most banks allow premature withdrawal of RD, but it usually comes with a penalty of 0.5% to 1%
                    on the interest rate. The exact penalty varies by bank and the tenure you have completed before
                    withdrawal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Explore Other Calculators</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link href="/calculators/sip" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition-colors">
                  <div className="text-blue-600 font-semibold">SIP Calculator</div>
                </Link>
                <Link
                  href="/calculators/fd"
                  className="bg-orange-50 hover:bg-orange-100 p-4 rounded-xl transition-colors"
                >
                  <div className="text-orange-600 font-semibold">FD Calculator</div>
                </Link>
                <Link
                  href="/calculators/ppf"
                  className="bg-purple-50 hover:bg-purple-100 p-4 rounded-xl transition-colors"
                >
                  <div className="text-purple-600 font-semibold">PPF Calculator</div>
                </Link>
                <Link
                  href="/calculators/lumpsum"
                  className="bg-green-50 hover:bg-green-100 p-4 rounded-xl transition-colors"
                >
                  <div className="text-green-600 font-semibold">Lumpsum Calculator</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
