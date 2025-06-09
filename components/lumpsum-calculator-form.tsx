"use client"

import { useState } from "react"
import { Calculator, DollarSign, Calendar, TrendingUp } from "lucide-react"
import LumpsumResultChart from "./lumpsum-result-chart"

interface LumpsumResult {
  investedAmount: number
  estimatedReturns: number
  maturityAmount: number
}

export default function LumpsumCalculatorForm() {
  const [formData, setFormData] = useState({
    initialAmount: "",
    duration: "",
    returnRate: "",
  })

  const [result, setResult] = useState<LumpsumResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    const amount = Number.parseFloat(formData.initialAmount)
    const duration = Number.parseFloat(formData.duration)
    const rate = Number.parseFloat(formData.returnRate)

    if (!formData.initialAmount || amount < 500) {
      newErrors.initialAmount = "Please enter an amount of at least ₹500"
    }
    if (!formData.duration || duration < 1 || duration > 50) {
      newErrors.duration = "Duration must be between 1 and 50 years"
    }
    if (!formData.returnRate || rate < 1 || rate > 30) {
      newErrors.returnRate = "Return rate must be between 1% and 30%"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateLumpsum = () => {
    if (!validateForm()) return

    setIsCalculating(true)

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const P = Number.parseFloat(formData.initialAmount) // Principal amount
      const r = Number.parseFloat(formData.returnRate) / 100 // Annual interest rate
      const n = Number.parseFloat(formData.duration) // Number of years

      // Compound Interest Formula: A = P × (1 + r)^n
      const maturityAmount = P * Math.pow(1 + r, n)
      const estimatedReturns = maturityAmount - P

      setResult({
        investedAmount: P,
        estimatedReturns: Math.round(estimatedReturns * 100) / 100,
        maturityAmount: Math.round(maturityAmount * 100) / 100,
      })

      setIsCalculating(false)
    }, 800)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calculator className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Lumpsum Calculator</h2>
          </div>

          <div className="space-y-6">
            {/* Initial Investment Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <DollarSign className="h-4 w-4 inline mr-1" />
                Initial Investment Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={formData.initialAmount}
                  onChange={(e) => handleInputChange("initialAmount", e.target.value)}
                  placeholder="e.g., 100000"
                  className={`w-full pl-8 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                    errors.initialAmount ? "border-red-300" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.initialAmount && <p className="text-red-500 text-sm mt-1">{errors.initialAmount}</p>}
            </div>

            {/* Investment Duration */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Investment Duration (Years)
              </label>
              <input
                type="number"
                value={formData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
                placeholder="e.g., 10"
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                  errors.duration ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
            </div>

            {/* Expected Return Rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <TrendingUp className="h-4 w-4 inline mr-1" />
                Expected Annual Return Rate (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  value={formData.returnRate}
                  onChange={(e) => handleInputChange("returnRate", e.target.value)}
                  placeholder="e.g., 12"
                  className={`w-full px-4 pr-8 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                    errors.returnRate ? "border-red-300" : "border-gray-300"
                  }`}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
              </div>
              {errors.returnRate && <p className="text-red-500 text-sm mt-1">{errors.returnRate}</p>}
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateLumpsum}
              disabled={isCalculating}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-5 w-5" />
                  Calculate Returns
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {result ? (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Summary</h3>

              {/* Result Cards */}
              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-blue-600 mb-1">Total Invested Amount</p>
                  <p className="text-2xl font-bold text-blue-900">{formatCurrency(result.investedAmount)}</p>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-green-600 mb-1">Estimated Returns</p>
                  <p className="text-2xl font-bold text-green-900">{formatCurrency(result.estimatedReturns)}</p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-emerald-600 mb-1">Maturity Amount</p>
                  <p className="text-3xl font-bold text-emerald-900">{formatCurrency(result.maturityAmount)}</p>
                </div>
              </div>

              {/* Chart */}
              <LumpsumResultChart investedAmount={result.investedAmount} estimatedReturns={result.estimatedReturns} />

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Return Multiple:</strong> {(result.maturityAmount / result.investedAmount).toFixed(2)}x
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Effective Annual Growth:</strong> {Number.parseFloat(formData.returnRate).toFixed(1)}%
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Calculate</h3>
              <p className="text-gray-600">
                Enter your investment details in the form to see projected returns and visual breakdown
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
