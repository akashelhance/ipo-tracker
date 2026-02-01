import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, Calculator, PiggyBank, Target, Home, ChevronRight } from "lucide-react"
import { SipCalculatorForm } from "@/components/sip-calculator-form"

export const metadata: Metadata = {
  title: "SIP Calculator - Calculate Systematic Investment Plan Returns | Free Online Tool",
  description:
    "Calculate your SIP returns with our free online SIP calculator. Plan your systematic investment plan with accurate projections, compound growth calculations, and visual charts.",
  keywords:
    "SIP calculator, systematic investment plan, SIP returns, mutual fund calculator, investment planning, compound interest",
  openGraph: {
    title: "SIP Calculator - Calculate Systematic Investment Plan Returns",
    description: "Free online SIP calculator with visual charts. Calculate returns on your systematic investment plan.",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SIP and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIP (Systematic Investment Plan) is a method of investing in mutual funds where you invest a fixed amount regularly. It helps in rupee cost averaging and harnesses the power of compounding to build wealth over time.",
      },
    },
    {
      "@type": "Question",
      name: "How is SIP return calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIP returns are calculated using the compound interest formula: M = P × [(1+r)^n - 1] / r × (1+r), where M is maturity amount, P is monthly investment, r is monthly interest rate, and n is total number of months.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum amount for SIP investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most mutual funds allow SIP investments starting from ₹500 per month. However, some funds may have higher minimum amounts. It's recommended to start with an amount you can consistently invest.",
      },
    },
  ],
}

export default function SIPCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-blue-100 mb-8">
              <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                <Home className="h-3 w-3" /> Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-blue-200" />
              <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-blue-200" />
              <span className="text-white font-medium">SIP Calculator</span>
            </nav>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">SIP Calculator</h1>
                <p className="text-blue-100 text-lg">Calculate returns on your Systematic Investment Plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Calculator Form */}
            <SipCalculatorForm />

            {/* Benefits Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Disciplined Investing</h3>
                <p className="text-gray-600">
                  SIP helps you invest regularly and build a disciplined investment habit, regardless of market
                  conditions.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Rupee Cost Averaging</h3>
                <p className="text-gray-600">
                  Buy more units when prices are low and fewer when prices are high, averaging out your investment cost.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Power of Compounding</h3>
                <p className="text-gray-600">
                  Your returns generate their own returns over time, leading to exponential growth of your investments.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">What is SIP and how does it work?</h3>
                  <p className="text-gray-600">
                    SIP (Systematic Investment Plan) is a method of investing in mutual funds where you invest a fixed
                    amount regularly. It helps in rupee cost averaging and harnesses the power of compounding to build
                    wealth over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">How is SIP return calculated?</h3>
                  <p className="text-gray-600">
                    SIP returns are calculated using the compound interest formula: M = P × [(1+r)^n - 1] / r × (1+r),
                    where M is maturity amount, P is monthly investment, r is monthly interest rate, and n is total
                    number of months.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    What is the minimum amount for SIP investment?
                  </h3>
                  <p className="text-gray-600">
                    Most mutual funds allow SIP investments starting from ₹500 per month. However, some funds may have
                    higher minimum amounts. It's recommended to start with an amount you can consistently invest.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Calculators */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Explore Other Calculators</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/calculators/lumpsum"
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Calculator className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900">Lumpsum</h3>
                  </div>
                </Link>

                <Link
                  href="/calculators/fd"
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <PiggyBank className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900">Fixed Deposit</h3>
                  </div>
                </Link>

                <Link
                  href="/calculators/ppf"
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Target className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900">PPF</h3>
                  </div>
                </Link>

                <Link
                  href="/calculators/nps"
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="h-5 w-5 text-rose-600" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900">NPS</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
