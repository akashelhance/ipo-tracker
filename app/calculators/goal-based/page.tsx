import type { Metadata } from "next"
import Link from "next/link"
import { Target, ArrowLeft, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Goal-Based Investment Calculator - Plan Your Financial Goals | Free Tool",
  description:
    "Calculate investment required for your financial goals like home, car, education with our goal-based calculator. Plan and achieve your dreams.",
  keywords: "goal based calculator, financial goals, investment planning, home loan calculator, education planning",
}

export default function GoalBasedCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/calculators"
            className="inline-flex items-center text-lime-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculators
          </Link>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Target className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Goal-Based Calculator</h1>
              <p className="text-lime-100 text-lg">Calculate investments needed to achieve your financial goals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-lime-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Goal-Based Calculator Coming Soon</h2>
              <p className="text-gray-600">
                We're building a comprehensive goal-based investment calculator with these capabilities:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Goal Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    Goal amount and timeline
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    Multiple goal tracking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    Priority-based planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    Inflation adjustment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    Risk tolerance assessment
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Investment Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Monthly investment required
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Asset allocation suggestions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Goal achievement timeline
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Alternative scenarios
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-lime-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-lime-900">Popular Financial Goals</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lime-800">
                <div className="text-center">
                  <div className="text-2xl mb-1">🏠</div>
                  <div className="text-sm">Home Purchase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🚗</div>
                  <div className="text-sm">Car Purchase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🎓</div>
                  <div className="text-sm">Education</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">✈️</div>
                  <div className="text-sm">Vacation</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">Start planning your financial goals with our comprehensive tools</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/calculators"
                  className="bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-700 transition-colors"
                >
                  View All Calculators
                </Link>
                <Link
                  href="/calculators/sip"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  SIP Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
