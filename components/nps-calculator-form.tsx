"use client"

import { useState } from "react"
import { Calculator, Loader2 } from "lucide-react"
import { NPSResultChart } from "./nps-result-chart"

interface NPSInputs {
  currentAge: number
  retirementAge: number
  monthlyContribution: number
  expectedReturn: number
  withdrawalPercentage: number
  annuityReturn: number
  lifespanAfterRetirement: number
}

interface NPSResults {
  totalInvested: number
  corpusAtRetirement: number
  lumpSumAmount: number
  annuityAmount: number
  monthlyPension: number
  investmentYears: number
}

function calculateNPS(inputs: NPSInputs): NPSResults {
  const {
    currentAge,
    retirementAge,
    monthlyContribution,
    expectedReturn,
    withdrawalPercentage,
    annuityReturn,
    lifespanAfterRetirement,
  } = inputs

  // Calculate investment period
  const investmentYears = retirementAge - currentAge
  const totalMonths = investmentYears * 12

  // Monthly return rate
  const monthlyReturn = expectedReturn / 12 / 100

  // Future Value calculation using SIP formula
  const corpusAtRetirement =
    monthlyContribution * (((1 + monthlyReturn) ** totalMonths - 1) / monthlyReturn) * (1 + monthlyReturn)

  // Total invested amount
  const totalInvested = monthlyContribution * totalMonths

  // Lump sum and annuity calculations
  const lumpSumAmount = corpusAtRetirement * (withdrawalPercentage / 100)
  const annuityAmount = corpusAtRetirement * (1 - withdrawalPercentage / 100)

  // Monthly pension calculation
  const monthlyPension = (annuityAmount * (annuityReturn / 100)) / 12

  return {
    totalInvested: Math.round(totalInvested),
    corpusAtRetirement: Math.round(corpusAtRetirement),
    lumpSumAmount: Math.round(lumpSumAmount),
    annuityAmount: Math.round(annuityAmount),
    monthlyPension: Math.round(monthlyPension),
    investmentYears,
  }
}

export function NPSCalculatorForm() {
  const [inputs, setInputs] = useState<NPSInputs>({
    currentAge: 30,
    retirementAge: 60,
    monthlyContribution: 5000,
    expectedReturn: 10,
    withdrawalPercentage: 60,
    annuityReturn: 6,
    lifespanAfterRetirement: 20,
  })

  const [results, setResults] = useState<NPSResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [errors, setErrors] = useState<Partial<NPSInputs>>({})

  const validateInputs = (): boolean => {
    const newErrors: Partial<NPSInputs> = {}

    if (inputs.currentAge < 18 || inputs.currentAge > 65) {
      newErrors.currentAge = 18
    }
    if (inputs.retirementAge <= inputs.currentAge || inputs.retirementAge > 75) {
      newErrors.retirementAge = inputs.currentAge + 1
    }
    if (inputs.monthlyContribution < 500 || inputs.monthlyContribution > 200000) {
      newErrors.monthlyContribution = 500
    }
    if (inputs.expectedReturn < 1 || inputs.expectedReturn > 30) {
      newErrors.expectedReturn = 1
    }
    if (inputs.withdrawalPercentage < 0 || inputs.withdrawalPercentage > 60) {
      newErrors.withdrawalPercentage = 0
    }
    if (inputs.annuityReturn < 1 || inputs.annuityReturn > 15) {
      newErrors.annuityReturn = 1
    }
    if (inputs.lifespanAfterRetirement < 5 || inputs.lifespanAfterRetirement > 40) {
      newErrors.lifespanAfterRetirement = 5
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCalculate = async () => {
    if (!validateInputs()) return

    setIsCalculating(true)

    // Simulate calculation delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const calculatedResults = calculateNPS(inputs)
    setResults(calculatedResults)
    setIsCalculating(false)
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
        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-rose-100 rounded-lg">
              <Calculator className="h-6 w-6 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">NPS Calculator</h2>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Age</label>
                <input
                  type="number"
                  value={inputs.currentAge}
                  onChange={(e) => setInputs((prev) => ({ ...prev, currentAge: Number(e.target.value) }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.currentAge ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter current age"
                  min="18"
                  max="65"
                />
                {errors.currentAge && <p className="text-red-500 text-sm mt-1">Age must be between 18-65 years</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Retirement Age</label>
                <input
                  type="number"
                  value={inputs.retirementAge}
                  onChange={(e) => setInputs((prev) => ({ ...prev, retirementAge: Number(e.target.value) }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.retirementAge ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter retirement age"
                  min={inputs.currentAge + 1}
                  max="75"
                />
                {errors.retirementAge && (
                  <p className="text-red-500 text-sm mt-1">Must be greater than current age and max 75</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Contribution (₹)</label>
              <input
                type="number"
                value={inputs.monthlyContribution}
                onChange={(e) => setInputs((prev) => ({ ...prev, monthlyContribution: Number(e.target.value) }))}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                  errors.monthlyContribution ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter monthly contribution"
                min="500"
                max="200000"
              />
              {errors.monthlyContribution && (
                <p className="text-red-500 text-sm mt-1">Amount must be between ₹500 - ₹2,00,000</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Annual Return (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.expectedReturn}
                  onChange={(e) => setInputs((prev) => ({ ...prev, expectedReturn: Number(e.target.value) }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.expectedReturn ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="10"
                  min="1"
                  max="30"
                />
                {errors.expectedReturn && <p className="text-red-500 text-sm mt-1">Return must be between 1-30%</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lump Sum Withdrawal (%)</label>
                <input
                  type="number"
                  value={inputs.withdrawalPercentage}
                  onChange={(e) => setInputs((prev) => ({ ...prev, withdrawalPercentage: Number(e.target.value) }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.withdrawalPercentage ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="60"
                  min="0"
                  max="60"
                />
                {errors.withdrawalPercentage && (
                  <p className="text-red-500 text-sm mt-1">Withdrawal must be between 0-60%</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Annuity Return (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.annuityReturn}
                  onChange={(e) => setInputs((prev) => ({ ...prev, annuityReturn: Number(e.target.value) }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.annuityReturn ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="6"
                  min="1"
                  max="15"
                />
                {errors.annuityReturn && <p className="text-red-500 text-sm mt-1">Return must be between 1-15%</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Lifespan After Retirement (Years)
                </label>
                <input
                  type="number"
                  value={inputs.lifespanAfterRetirement}
                  onChange={(e) => setInputs((prev) => ({ ...prev, lifespanAfterRetirement: Number(e.target.value) }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent ${
                    errors.lifespanAfterRetirement ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="20"
                  min="5"
                  max="40"
                />
                {errors.lifespanAfterRetirement && (
                  <p className="text-red-500 text-sm mt-1">Lifespan must be between 5-40 years</p>
                )}
              </div>
            </div>

            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-5 w-5" />
                  Calculate NPS Returns
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {results && (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-sm text-gray-600 mb-1">Total Invested</div>
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(results.totalInvested)}</div>
                  <div className="text-sm text-gray-500 mt-1">{results.investmentYears} years</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-sm text-gray-600 mb-1">Corpus at Retirement</div>
                  <div className="text-2xl font-bold text-rose-600">{formatCurrency(results.corpusAtRetirement)}</div>
                  <div className="text-sm text-green-600 mt-1">
                    {((results.corpusAtRetirement / results.totalInvested) * 100).toFixed(1)}% growth
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-sm text-gray-600 mb-1">Lump Sum Amount</div>
                  <div className="text-2xl font-bold text-blue-600">{formatCurrency(results.lumpSumAmount)}</div>
                  <div className="text-sm text-gray-500 mt-1">{inputs.withdrawalPercentage}% of corpus</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-sm text-gray-600 mb-1">Monthly Pension</div>
                  <div className="text-2xl font-bold text-green-600">{formatCurrency(results.monthlyPension)}</div>
                  <div className="text-sm text-gray-500 mt-1">For {inputs.lifespanAfterRetirement} years</div>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">NPS Corpus Breakdown</h3>
                <NPSResultChart
                  lumpSum={results.lumpSumAmount}
                  annuity={results.annuityAmount}
                  totalCorpus={results.corpusAtRetirement}
                />

                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                    <span>Lump Sum: {((results.lumpSumAmount / results.corpusAtRetirement) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Annuity: {((results.annuityAmount / results.corpusAtRetirement) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-rose-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-rose-900">Investment Summary</h3>
                <div className="space-y-2 text-sm text-rose-800">
                  <div className="flex justify-between">
                    <span>Investment Period:</span>
                    <span className="font-semibold">{results.investmentYears} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Contributions:</span>
                    <span className="font-semibold">{formatCurrency(results.totalInvested)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Returns:</span>
                    <span className="font-semibold">
                      {formatCurrency(results.corpusAtRetirement - results.totalInvested)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annuity Amount:</span>
                    <span className="font-semibold">{formatCurrency(results.annuityAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Effective Annual Return:</span>
                    <span className="font-semibold">{inputs.expectedReturn}%</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {!results && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ready to Calculate</h3>
              <p className="text-gray-600">
                Enter your NPS details and click calculate to see your retirement corpus and monthly pension
                projections.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
