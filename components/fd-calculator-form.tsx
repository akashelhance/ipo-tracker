"use client"

import { useState } from "react"
import { Calculator, TrendingUp, PiggyBank } from "lucide-react"
import { FDResultChart } from "./fd-result-chart"

interface FDResult {
  principalAmount: number
  interestEarned: number
  maturityAmount: number
  effectiveRate: number
}

export function FDCalculatorForm() {
  const [formData, setFormData] = useState({
    principal: "",
    rate: "",
    duration: "",
    frequency: "4", // Default to quarterly
  })

  const [result, setResult] = useState<FDResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const compoundingOptions = [
    { value: "1", label: "Annual" },
    { value: "2", label: "Half-Yearly" },
    { value: "4", label: "Quarterly" },
    { value: "12", label: "Monthly" },
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.principal || Number.parseFloat(formData.principal) < 1000) {
      newErrors.principal = "Principal amount must be at least ₹1,000"
    }
    if (!formData.rate || Number.parseFloat(formData.rate) < 0.1 || Number.parseFloat(formData.rate) > 20) {
      newErrors.rate = "Interest rate must be between 0.1% and 20%"
    }
    if (
      !formData.duration ||
      Number.parseFloat(formData.duration) < 0.25 ||
      Number.parseFloat(formData.duration) > 30
    ) {
      newErrors.duration = "Duration must be between 3 months (0.25 years) and 30 years"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateFD = () => {
    if (!validateForm()) return

    setIsCalculating(true)

    // Simulate calculation delay
    setTimeout(() => {
      const P = Number.parseFloat(formData.principal)
      const r = Number.parseFloat(formData.rate) / 100 // Convert percentage to decimal
      const t = Number.parseFloat(formData.duration)
      const n = Number.parseInt(formData.frequency)

      // Compound Interest Formula: A = P(1 + r/n)^(nt)
      const maturityAmount = P * Math.pow(1 + r / n, n * t)
      const interestEarned = maturityAmount - P
      const effectiveRate = ((maturityAmount / P - 1) / t) * 100

      setResult({
        principalAmount: Math.round(P * 100) / 100,
        interestEarned: Math.round(interestEarned * 100) / 100,
        maturityAmount: Math.round(maturityAmount * 100) / 100,
        effectiveRate: Math.round(effectiveRate * 100) / 100,
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calculator Form */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Calculator className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">FD Calculator</h2>
        </div>

        <div className="space-y-6">
          {/* Principal Amount */}
          <div>
            <label htmlFor="principal" className="block text-sm font-medium text-gray-700 mb-2">
              Principal Amount (₹)
            </label>
            <input
              type="number"
              id="principal"
              value={formData.principal}
              onChange={(e) => handleInputChange("principal", e.target.value)}
              placeholder="e.g., 100000"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                errors.principal ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.principal && <p className="mt-1 text-sm text-red-600">{errors.principal}</p>}
          </div>

          {/* Interest Rate */}
          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              id="rate"
              step="0.1"
              value={formData.rate}
              onChange={(e) => handleInputChange("rate", e.target.value)}
              placeholder="e.g., 7.5"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                errors.rate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.rate && <p className="mt-1 text-sm text-red-600">{errors.rate}</p>}
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
              Time Duration (Years)
            </label>
            <input
              type="number"
              id="duration"
              step="0.25"
              value={formData.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
              placeholder="e.g., 5"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors ${
                errors.duration ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
          </div>

          {/* Compounding Frequency */}
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
              Compounding Frequency
            </label>
            <select
              id="frequency"
              value={formData.frequency}
              onChange={(e) => handleInputChange("frequency", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            >
              {compoundingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateFD}
            disabled={isCalculating}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Calculating...
              </div>
            ) : (
              "Calculate FD Returns"
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {result ? (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <PiggyBank className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Principal</span>
                </div>
                <p className="text-xl font-bold text-blue-900">{formatCurrency(result.principalAmount)}</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Interest</span>
                </div>
                <p className="text-xl font-bold text-green-900">{formatCurrency(result.interestEarned)}</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-800">Maturity</span>
                </div>
                <p className="text-xl font-bold text-orange-900">{formatCurrency(result.maturityAmount)}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Breakdown</h3>
              <FDResultChart principalAmount={result.principalAmount} interestEarned={result.interestEarned} />

              {/* Additional Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Effective Annual Rate</p>
                  <p className="text-lg font-semibold text-gray-900">{result.effectiveRate}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Growth Multiple</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {(result.maturityAmount / result.principalAmount).toFixed(2)}x
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Calculate</h3>
            <p className="text-gray-600">
              Enter your FD details in the form to see projected returns and visual breakdown.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
