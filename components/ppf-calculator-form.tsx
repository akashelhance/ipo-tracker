"use client"

import type React from "react"

import { useState } from "react"
import { PPFResultChart } from "./ppf-result-chart"

type ContributionFrequency = "yearly" | "half-yearly" | "quarterly" | "monthly"

interface PPFFormData {
  yearlyInvestment: number
  duration: number
  interestRate: number
  contributionFrequency: ContributionFrequency
}

interface PPFResult {
  totalInvestment: number
  totalInterest: number
  maturityAmount: number
  yearlyBreakdown: {
    year: number
    investment: number
    interest: number
    balance: number
  }[]
}

export function PPFCalculatorForm() {
  const [formData, setFormData] = useState<PPFFormData>({
    yearlyInvestment: 150000, // Default max amount
    duration: 15, // Default PPF duration
    interestRate: 7.1, // Current PPF rate
    contributionFrequency: "yearly",
  })

  const [result, setResult] = useState<PPFResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    // Validate input
    if (name === "yearlyInvestment" && (Number(value) < 500 || Number(value) > 150000)) {
      setError("Yearly investment must be between ₹500 and ₹1,50,000")
    } else if (name === "duration" && (Number(value) < 1 || Number(value) > 50)) {
      setError("Duration must be between 1 and 50 years")
    } else if (name === "interestRate" && (Number(value) < 1 || Number(value) > 15)) {
      setError("Interest rate must be between 1% and 15%")
    } else {
      setError(null)
    }

    setFormData({
      ...formData,
      [name]: name === "contributionFrequency" ? value : Number(value),
    })
  }

  const calculatePPF = () => {
    setIsCalculating(true)
    setError(null)

    // Validate inputs
    if (formData.yearlyInvestment < 500 || formData.yearlyInvestment > 150000) {
      setError("Yearly investment must be between ₹500 and ₹1,50,000")
      setIsCalculating(false)
      return
    }

    if (formData.duration < 1 || formData.duration > 50) {
      setError("Duration must be between 1 and 50 years")
      setIsCalculating(false)
      return
    }

    if (formData.interestRate < 1 || formData.interestRate > 15) {
      setError("Interest rate must be between 1% and 15%")
      setIsCalculating(false)
      return
    }

    // Calculate PPF returns
    setTimeout(() => {
      try {
        const result = calculatePPFReturns(
          formData.yearlyInvestment,
          formData.duration,
          formData.interestRate,
          formData.contributionFrequency,
        )
        setResult(result)
        setIsCalculating(false)
      } catch (err) {
        setError("Error calculating PPF returns. Please check your inputs.")
        setIsCalculating(false)
      }
    }, 500) // Simulate calculation time
  }

  const calculatePPFReturns = (
    yearlyInvestment: number,
    duration: number,
    interestRate: number,
    contributionFrequency: ContributionFrequency,
  ): PPFResult => {
    const yearlyBreakdown = []
    let totalInvestment = 0
    let balance = 0
    const rate = interestRate / 100

    // Calculate contribution per installment based on frequency
    const contributionsPerYear =
      contributionFrequency === "yearly"
        ? 1
        : contributionFrequency === "half-yearly"
          ? 2
          : contributionFrequency === "quarterly"
            ? 4
            : 12

    const contributionPerInstallment = yearlyInvestment / contributionsPerYear

    // Calculate for each year
    for (let year = 1; year <= duration; year++) {
      let yearlyInvestmentTotal = 0
      let yearlyInterest = 0

      // Add contributions for the year
      for (let i = 0; i < contributionsPerYear; i++) {
        yearlyInvestmentTotal += contributionPerInstallment
      }

      totalInvestment += yearlyInvestmentTotal
      balance += yearlyInvestmentTotal

      // Calculate interest (compounded annually)
      yearlyInterest = balance * rate
      balance += yearlyInterest

      yearlyBreakdown.push({
        year,
        investment: yearlyInvestmentTotal,
        interest: yearlyInterest,
        balance,
      })
    }

    const totalInterest = balance - totalInvestment
    const maturityAmount = balance

    return {
      totalInvestment,
      totalInterest,
      maturityAmount,
      yearlyBreakdown,
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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Enter Your PPF Investment Details</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="yearlyInvestment" className="block text-sm font-medium text-gray-700 mb-1">
                Yearly Investment Amount (₹)
              </label>
              <input
                type="number"
                id="yearlyInvestment"
                name="yearlyInvestment"
                value={formData.yearlyInvestment}
                onChange={handleInputChange}
                min="500"
                max="150000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter amount (₹500 - ₹1,50,000)"
              />
              <p className="text-xs text-gray-500 mt-1">Min: ₹500, Max: ₹1,50,000 per year</p>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Investment Duration (Years)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                min="1"
                max="50"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter duration (1-50 years)"
              />
              <p className="text-xs text-gray-500 mt-1">Standard PPF lock-in period is 15 years</p>
            </div>

            <div>
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                id="interestRate"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleInputChange}
                step="0.1"
                min="1"
                max="15"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter interest rate"
              />
              <p className="text-xs text-gray-500 mt-1">Current PPF interest rate: 7.1% p.a.</p>
            </div>

            <div>
              <label htmlFor="contributionFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                Contribution Frequency
              </label>
              <select
                id="contributionFrequency"
                name="contributionFrequency"
                value={formData.contributionFrequency}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="yearly">Yearly (Once a year)</option>
                <option value="half-yearly">Half-Yearly (Twice a year)</option>
                <option value="quarterly">Quarterly (Four times a year)</option>
                <option value="monthly">Monthly (Twelve times a year)</option>
              </select>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={calculatePPF}
              disabled={isCalculating || !!error}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-indigo-300 disabled:cursor-not-allowed"
            >
              {isCalculating ? "Calculating..." : "Calculate PPF Returns"}
            </button>
          </div>

          {/* PPF Benefits */}
          <div className="mt-8 bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">PPF Benefits</h3>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Tax deduction under Section 80C (up to ₹1.5 lakh)</li>
              <li>• Tax-free interest and maturity amount</li>
              <li>• Government-backed safe investment</li>
              <li>• Loan facility available from 3rd year</li>
              <li>• Partial withdrawals allowed from 7th year</li>
            </ul>
          </div>
        </div>

        {/* Results Section */}
        <div>
          {result ? (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Your PPF Investment Results</h2>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-indigo-600 mb-1">Total Investment</p>
                  <p className="text-xl font-bold text-indigo-900">{formatCurrency(result.totalInvestment)}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600 mb-1">Total Interest</p>
                  <p className="text-xl font-bold text-green-900">{formatCurrency(result.totalInterest)}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-600 mb-1">Maturity Amount</p>
                  <p className="text-xl font-bold text-purple-900">{formatCurrency(result.maturityAmount)}</p>
                </div>
              </div>

              {/* Chart */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Investment Breakdown</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <PPFResultChart totalInvestment={result.totalInvestment} totalInterest={result.totalInterest} />
                </div>
              </div>

              {/* Growth Stats */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Growth Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Interest to Investment Ratio</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {(result.totalInterest / result.totalInvestment).toFixed(2)}x
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Annual Growth Rate</p>
                    <p className="text-lg font-semibold text-gray-900">{formData.interestRate}%</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <div className="bg-indigo-50 p-6 rounded-xl text-center max-w-md">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">PPF Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Enter your investment details and calculate your estimated PPF returns over time.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">
                    The Public Provident Fund (PPF) is one of the most popular long-term tax-saving investment schemes
                    in India. It offers an attractive interest rate with complete tax exemption on the investment,
                    interest earned, and maturity amount.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Yearly Breakdown Table (shown only when results are available) */}
      {result && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Year-by-Year Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Year</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700 border-b">Investment</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700 border-b">Interest Earned</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700 border-b">Balance</th>
                </tr>
              </thead>
              <tbody>
                {result.yearlyBreakdown.map((item) => (
                  <tr key={item.year} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700 border-b">{item.year}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 text-right border-b">
                      {formatCurrency(item.investment)}
                    </td>
                    <td className="py-3 px-4 text-sm text-green-600 text-right border-b">
                      {formatCurrency(item.interest)}
                    </td>
                    <td className="py-3 px-4 text-sm font-medium text-indigo-700 text-right border-b">
                      {formatCurrency(item.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
