"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface FDResultChartProps {
  principalAmount: number
  interestEarned: number
}

export function FDResultChart({ principalAmount, interestEarned }: FDResultChartProps) {
  const maturityAmount = principalAmount + interestEarned

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const data = {
    labels: ["Principal Amount", "Interest Earned"],
    datasets: [
      {
        data: [principalAmount, interestEarned],
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
          usePointStyle: true,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || ""
            const value = context.parsed
            const percentage = ((value / maturityAmount) * 100).toFixed(1)
            return `${label}: ${formatCurrency(value)} (${percentage}%)`
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
      },
    },
    cutout: "60%",
    animation: {
      animateRotate: true,
      duration: 1000,
    },
  }

  return (
    <div className="relative">
      <div className="h-80 relative">
        <Doughnut data={data} options={options} />

        {/* Center Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Total Maturity</p>
            <p className="text-xl font-bold text-gray-900">{formatCurrency(maturityAmount)}</p>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Principal</span>
          </div>
          <span className="font-semibold">{((principalAmount / maturityAmount) * 100).toFixed(1)}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Interest</span>
          </div>
          <span className="font-semibold">{((interestEarned / maturityAmount) * 100).toFixed(1)}%</span>
        </div>
      </div>
    </div>
  )
}
