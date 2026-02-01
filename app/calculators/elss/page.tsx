import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, Calculator, Home, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "ELSS Calculator - Equity Linked Savings Scheme Returns | Tax Saving Calculator",
  description:
    "Calculate ELSS returns and tax savings with our free ELSS calculator. Plan your 80C investments with equity linked savings scheme.",
  keywords: "ELSS calculator, equity linked savings scheme, tax saving, 80C calculator, ELSS returns",
}

export default function ELSSCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center text-sm text-violet-100 mb-8">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="h-3 w-3" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-violet-200" />
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-violet-200" />
            <span className="text-white font-medium">ELSS Calculator</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">ELSS Calculator</h1>
              <p className="text-violet-100 text-lg">
                Calculate Equity Linked Savings Scheme returns with tax benefits
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">ELSS Calculator Coming Soon</h2>
              <p className="text-gray-600">
                We're developing an advanced ELSS calculator with comprehensive tax-saving features:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Investment Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Annual investment amount
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    3-year lock-in period
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Expected annual return
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    SIP vs lumpsum options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Fund performance analysis
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Tax Benefits & Returns</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Tax savings under 80C
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Long-term capital gains
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Post-tax returns calculation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Maturity value projection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Comparison with other 80C options
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-violet-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-violet-900">About ELSS Investments</h3>
              <p className="text-violet-800 leading-relaxed">
                Equity Linked Savings Scheme (ELSS) are tax-saving mutual funds that invest primarily in equity markets.
                They offer the shortest lock-in period (3 years) among all 80C investments and have the potential for
                higher returns.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">Explore more tax-saving and equity investment calculators</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/calculators"
                  className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
                >
                  View All Calculators
                </Link>
                <Link
                  href="/calculators/tax-saving"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Tax-Saving Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
