import type { Metadata } from "next"
import Link from "next/link"
import { Repeat, Calculator, Home, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "SWP Calculator - Systematic Withdrawal Plan Calculator | Free Online Tool",
  description:
    "Calculate your SWP returns and plan systematic withdrawals from your investments. Free online SWP calculator for retirement and income planning.",
  keywords: "SWP calculator, systematic withdrawal plan, retirement planning, income calculator, withdrawal strategy",
}

export default function SWPCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center text-sm text-purple-100 mb-8">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="h-3 w-3" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-purple-200" />
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-purple-200" />
            <span className="text-white font-medium">SWP Calculator</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Repeat className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">SWP Calculator</h1>
              <p className="text-purple-100 text-lg">Plan your Systematic Withdrawal Plan for regular income</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">SWP Calculator Coming Soon</h2>
              <p className="text-gray-600">
                We're building a comprehensive SWP calculator for your retirement planning needs:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Planning Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Initial investment corpus
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Monthly withdrawal amount
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Expected annual return
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Withdrawal frequency options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Inflation-adjusted withdrawals
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Analysis & Results</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Corpus sustainability period
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Remaining corpus value
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Total withdrawals made
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Year-wise corpus depletion
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Optimal withdrawal strategy
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-purple-900">Understanding SWP</h3>
              <p className="text-purple-800 leading-relaxed">
                Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount regularly from your mutual fund
                investments. It's an ideal strategy for generating regular income during retirement while keeping your
                remaining corpus invested for growth.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">Discover more financial planning tools and investment opportunities</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/calculators"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  View All Calculators
                </Link>
                <Link
                  href="/share-buyback-offers"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Explore Buybacks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
