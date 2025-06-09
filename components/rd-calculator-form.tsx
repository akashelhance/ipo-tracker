"use client"

import { useState } from "react"
import { Calculator, TrendingUp, DollarSign, Calendar } from "lucide-react"
import { RDResultChart } from "./rd-result-chart"

interface RDResult {
  totalInvested: number
  interestEarned: number
  maturityAmount: number
}

export function RDCalculatorForm() {
  const [monthlyAmount, setMonthlyAmount] = useState<string>("5000")
  const [duration, setDuration] = useState<string>("5")
  const [durationUnit, setDurationUnit] = useState<"months" | "years">("years")
  const [interestRate, setInterestRate] = useState<string>("7.5")
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>("4")
  const [result, setResult] = useState<RDResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateInputs = () => {
    const newErrors: Record<string, string> = {}

    if (!monthlyAmount || Number.parseFloat(monthlyAmount) <= 0) {
      newErrors.monthlyAmount = "Please enter a valid monthly amount"
    }
    if (!duration || Number.parseFloat(duration) <= 0) {
      newErrors.duration = "Please enter a valid duration"
    }
    if (!interestRate || Number.parseFloat(interestRate) <= 0 || Number.parseFloat(interestRate) > 50) {
      newErrors.interestRate = "Please enter a valid interest rate (0-50%)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateRD = () => {
    if (!validateInputs()) return

    setIsCalculating(true)

    setTimeout(() => {
      const P = Number.parseFloat(monthlyAmount)
      const r = Number.parseFloat(interestRate) / 100
      const n = Number.parseInt(compoundingFrequency)
      const timeInYears = durationUnit === "years" ? Number.parseFloat(duration) : Number.parseFloat(duration) / 12
      const totalMonths = Math.round(timeInYears * 12)

      // RD Formula: M = P × [((1 + r/n)^(nt) - 1) / (1 - (1 + r/n)^(-1/3))]
      // Simplified for monthly deposits with quarterly compounding
      const monthlyRate = r / 12
      const maturityAmount = P * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))

      const totalInvested = P * totalMonths
      const interestEarned = maturityAmount - totalInvested

      setResult({
        totalInvested: Math.round(totalInvested * 100) / 100,
        interestEarned: Math.round(interestEarned * 100) / 100,
        maturityAmount: Math.round(maturityAmount * 100) / 100,
      })

      setIsCalculating(false)
    }, 1000)
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
            <div className="p-2 bg-teal-100 rounded-lg">
              <Calculator className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">RD Calculator</h2>
          </div>

          <div className="space-y-6">
            {/* Monthly Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Investment Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                  className={`w-full pl-8 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.monthlyAmount ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="5000"
                  min="100"
                  max="1000000"
                />
              </div>
              {errors.monthlyAmount && <p className="text-red-500 text-sm mt-1">{errors.monthlyAmount}</p>}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Investment Duration</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className={`flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.duration ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="5"
                  min="1"
                  max={durationUnit === "years" ? "10" : "120"}
                />
                <select
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value as "months" | "years")}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                </select>
              </div>
              {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Interest Rate</label>
              <div className="relative">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className={`w-full px-4 pr-8 py-3 border rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.interestRate ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="7.5"
                  min="1"
                  max="50"
                  step="0.1"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
              </div>
              {errors.interestRate && <p className="text-red-500 text-sm mt-1">{errors.interestRate}</p>}
            </div>

            {/* Compounding Frequency */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Compounding Frequency</label>
              <select
                value={compoundingFrequency}
                onChange={(e) => setCompoundingFrequency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="4">Quarterly</option>
                <option value="2">Half-Yearly</option>
                <option value="1">Yearly</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateRD}
              disabled={isCalculating}
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-5 w-5" />
                  Calculate RD Returns
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {result && (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Invested</p>
                      <p className="text-2xl font-bold text-teal-600">{formatCurrency(result.totalInvested)}</p>
                    </div>
                    <div className="p-3 bg-teal-100 rounded-full">
                      <DollarSign className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Interest Earned</p>
                      <p className="text-2xl font-bold text-green-600">{formatCurrency(result.interestEarned)}</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Maturity Amount</p>
                      <p className="text-2xl font-bold text-cyan-600">{formatCurrency(result.maturityAmount)}</p>
                    </div>
                    <div className="p-3 bg-cyan-100 rounded-full">
                      <Calendar className="h-6 w-6 text-cyan-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Investment Breakdown</h3>
                <RDResultChart
                  totalInvested={result.totalInvested}
                  interestEarned={result.interestEarned}
                  maturityAmount={result.maturityAmount}
                />
              </div>

              {/* Additional Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Investment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest to Investment Ratio:</span>
                    <span className="font-semibold">
                      {((result.interestEarned / result.totalInvested) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth Multiple:</span>
                    <span className="font-semibold">{(result.maturityAmount / result.totalInvested).toFixed(2)}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Effective Annual Return:</span>
                    <span className="font-semibold text-green-600">{Number.parseFloat(interestRate).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {!result && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Calculate</h3>
              <p className="text-gray-600">
                Enter your RD details and click calculate to see your investment growth projection.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
