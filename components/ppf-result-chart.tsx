"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface PPFResultChartProps {
  totalInvestment: number
  totalInterest: number
}

export function PPFResultChart({ totalInvestment, totalInterest }: PPFResultChartProps) {
  const data = {
    labels: ["Total Investment", "Total Interest"],
    datasets: [
      {
        data: [totalInvestment, totalInterest],
        backgroundColor: ["#4f46e5", "#10b981"],
        borderColor: ["#4338ca", "#059669"],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || ""
            const value = context.raw || 0
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = Math.round((value / total) * 100)

            return `${label}: ₹${value.toLocaleString("en-IN")} (${percentage}%)`
          },
        },
      },
    },
    cutout: "70%",
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const totalAmount = totalInvestment + totalInterest

  return (
    <div className="relative">
      <div className="w-full max-w-xs mx-auto">
        <Doughnut data={data} options={options} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
        <p className="text-sm text-gray-500">Total Amount</p>
        <p className="text-xl font-bold text-indigo-700">{formatCurrency(totalAmount)}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-600">Investment</p>
          <p className="font-semibold text-indigo-700">{Math.round((totalInvestment / totalAmount) * 100)}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Interest</p>
          <p className="font-semibold text-green-600">{Math.round((totalInterest / totalAmount) * 100)}%</p>
        </div>
      </div>
    </div>
  )
}
