"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, IndianRupee, Calendar, TrendingUp } from "lucide-react"
import { SipResultChart } from "./sip-result-chart"

interface SipResult {
  totalInvested: number
  estimatedReturns: number
  maturityAmount: number
}

export function SipCalculatorForm() {
  const [monthlyAmount, setMonthlyAmount] = useState<string>("5000")
  const [duration, setDuration] = useState<string>("10")
  const [returnRate, setReturnRate] = useState<string>("12")
  const [result, setResult] = useState<SipResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateSIP = () => {
    setIsCalculating(true)

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const P = Number.parseFloat(monthlyAmount)
      const years = Number.parseFloat(duration)
      const annualRate = Number.parseFloat(returnRate)

      // Convert annual rate to monthly rate
      const r = annualRate / 12 / 100
      const n = years * 12

      // SIP Formula: M = P × [(1+r)^n - 1] / r × (1+r)
      const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r))
      const totalInvested = P * n
      const estimatedReturns = maturityAmount - totalInvested

      setResult({
        totalInvested: Math.round(totalInvested),
        estimatedReturns: Math.round(estimatedReturns),
        maturityAmount: Math.round(maturityAmount),
      })
      setIsCalculating(false)
    }, 500)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateSIP()
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Calculator Form */}
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            SIP Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="monthlyAmount" className="text-sm font-medium text-gray-700">
                Monthly Investment Amount
              </Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="monthlyAmount"
                  type="number"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  placeholder="5000"
                  min="500"
                  max="1000000"
                  required
                />
              </div>
              <p className="text-xs text-gray-500">Minimum: ₹500, Maximum: ₹10,00,000</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium text-gray-700">
                Investment Duration
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  placeholder="10"
                  min="1"
                  max="50"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">years</span>
              </div>
              <p className="text-xs text-gray-500">Duration: 1 to 50 years</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="returnRate" className="text-sm font-medium text-gray-700">
                Expected Annual Return Rate
              </Label>
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="returnRate"
                  type="number"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  placeholder="12"
                  min="1"
                  max="30"
                  step="0.1"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  % p.a.
                </span>
              </div>
              <p className="text-xs text-gray-500">Expected return: 1% to 30% per annum</p>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate SIP Returns"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Investment Results
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {result ? (
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-sm text-blue-600 font-medium">Total Invested Amount</div>
                  <div className="text-2xl font-bold text-blue-900">{formatCurrency(result.totalInvested)}</div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-sm text-green-600 font-medium">Estimated Returns</div>
                  <div className="text-2xl font-bold text-green-900">{formatCurrency(result.estimatedReturns)}</div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-sm text-purple-600 font-medium">Maturity Amount</div>
                  <div className="text-2xl font-bold text-purple-900">{formatCurrency(result.maturityAmount)}</div>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-6">
                <SipResultChart totalInvested={result.totalInvested} estimatedReturns={result.estimatedReturns} />
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Investment Summary</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monthly Investment:</span>
                    <span className="font-medium">{formatCurrency(Number.parseFloat(monthlyAmount))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investment Period:</span>
                    <span className="font-medium">
                      {duration} years ({Number.parseFloat(duration) * 12} months)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected Return:</span>
                    <span className="font-medium">{returnRate}% per annum</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Return Multiple:</span>
                    <span className="font-medium">{(result.maturityAmount / result.totalInvested).toFixed(2)}x</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Calculate</h3>
              <p className="text-gray-600">
                Enter your investment details in the form and click "Calculate SIP Returns" to see your projected
                returns.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
