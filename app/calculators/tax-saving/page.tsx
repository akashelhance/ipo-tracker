import type { Metadata } from "next"
import Link from "next/link"
import { Receipt, ArrowLeft, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "Tax-Saving Investment Calculator - Calculate 80C Tax Benefits | Free Tool",
  description:
    "Calculate tax savings from various 80C investments like PPF, ELSS, NSC, and more. Plan your tax-saving investments effectively.",
  keywords: "tax saving calculator, 80C calculator, tax benefits, PPF, ELSS, NSC, tax planning",
}

export default function TaxSavingCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/calculators"
            className="inline-flex items-center text-sky-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculators
          </Link>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Receipt className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Tax-Saving Calculator</h1>
              <p className="text-sky-100 text-lg">Calculate tax savings from various investment options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-sky-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tax-Saving Calculator Coming Soon</h2>
              <p className="text-gray-600">
                We're creating a comprehensive tax-saving calculator with these advanced features:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Tax Planning Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    Income tax slab calculation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    80C investment options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    Multiple tax sections (80D, 80G)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    Old vs New tax regime
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    HRA and other deductions
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Investment Analysis</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Tax savings calculation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Post-tax returns comparison
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Investment recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Optimal tax planning strategy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Year-end tax planning
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-3 text-sky-900">Popular Tax-Saving Options</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sky-800 text-sm">
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="font-semibold">PPF</div>
                  <div className="text-xs">15-year lock-in</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="font-semibold">ELSS</div>
                  <div className="text-xs">3-year lock-in</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="font-semibold">NSC</div>
                  <div className="text-xs">5-year lock-in</div>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <div className="font-semibold">Tax Saver FD</div>
                  <div className="text-xs">5-year lock-in</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">Optimize your tax savings with our comprehensive planning tools</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/calculators"
                  className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                >
                  View All Calculators
                </Link>
                <Link
                  href="/calculators/ppf"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  PPF Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
