"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface LumpsumResultChartProps {
  investedAmount: number
  estimatedReturns: number
}

export default function LumpsumResultChart({ investedAmount, estimatedReturns }: LumpsumResultChartProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const totalAmount = investedAmount + estimatedReturns

  const data = {
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        data: [investedAmount, estimatedReturns],
        backgroundColor: ["#3B82F6", "#10B981"],
        borderColor: ["#2563EB", "#059669"],
        borderWidth: 2,
        hoverBackgroundColor: ["#2563EB", "#059669"],
        hoverBorderWidth: 3,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          font: {
            size: 14,
            weight: "500" as const,
          },
          color: "#374151",
        },
      },
      tooltip: {
        backgroundColor: "#1F2937",
        titleColor: "#F9FAFB",
        bodyColor: "#F9FAFB",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: (context: any) => {
            const label = context.label || ""
            const value = context.parsed
            const percentage = ((value / totalAmount) * 100).toFixed(1)
            return `${label}: ${formatCurrency(value)} (${percentage}%)`
          },
        },
      },
    },
    cutout: "60%",
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
    },
  }

  return (
    <div className="relative">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Investment Breakdown</h4>

      {/* Center Text - Outside Chart */}
      <div className="relative">
        <div className="h-80 relative">
          <Doughnut data={data} options={options} />
        </div>

        {/* Overlay Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-sm font-medium text-gray-600">Total Value</p>
          <p className="text-xl font-bold text-emerald-600">{formatCurrency(totalAmount)}</p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-sm font-medium text-blue-600">Invested</p>
          <p className="text-lg font-bold text-blue-900">{((investedAmount / totalAmount) * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <p className="text-sm font-medium text-green-600">Returns</p>
          <p className="text-lg font-bold text-green-900">{((estimatedReturns / totalAmount) * 100).toFixed(1)}%</p>
        </div>
      </div>
    </div>
  )
}
