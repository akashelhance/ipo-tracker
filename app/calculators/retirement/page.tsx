import type { Metadata } from "next"
import Link from "next/link"
import { Trophy, ArrowLeft, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Retirement Calculator - Plan Your Retirement Corpus | Free Retirement Planning Tool",
  description:
    "Calculate how much you need to invest for retirement with our free retirement calculator. Plan your retirement corpus and monthly investments.",
  keywords: "retirement calculator, retirement planning, retirement corpus, pension planning, financial independence",
}

export default function RetirementCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/calculators"
            className="inline-flex items-center text-amber-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculators
          </Link>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Trophy className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Retirement Calculator</h1>
              <p className="text-amber-100 text-lg">Plan your retirement corpus and calculate monthly investments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Retirement Calculator Coming Soon</h2>
              <p className="text-gray-600">
                We're creating a comprehensive retirement planning calculator with these features:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Planning Inputs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Current age and retirement age
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Current monthly expenses
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Expected inflation rate
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Life expectancy planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Current savings and investments
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Retirement Analysis</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Required retirement corpus
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Monthly investment needed
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Asset allocation strategy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Retirement income planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Healthcare cost planning
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-amber-900">Retirement Planning Essentials</h3>
              <p className="text-amber-800 leading-relaxed">
                Retirement planning involves calculating how much money you'll need to maintain your lifestyle after
                retirement. Start early to leverage the power of compounding and ensure a comfortable retirement with
                adequate corpus for your golden years.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">Explore more retirement and pension planning tools</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/calculators"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  View All Calculators
                </Link>
                <Link
                  href="/calculators/nps"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  NPS Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
