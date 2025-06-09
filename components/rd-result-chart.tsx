"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface RDResultChartProps {
  totalInvested: number
  interestEarned: number
  maturityAmount: number
}

export function RDResultChart({ totalInvested, interestEarned, maturityAmount }: RDResultChartProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const data = {
    labels: ["Invested Amount", "Interest Earned"],
    datasets: [
      {
        data: [totalInvested, interestEarned],
        backgroundColor: ["#0d9488", "#10b981"],
        borderColor: ["#0f766e", "#059669"],
        borderWidth: 2,
        hoverBackgroundColor: ["#0f766e", "#059669"],
        hoverBorderColor: ["#134e4a", "#047857"],
      },
    ],
  }

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 14,
            weight: "500",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
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
  }

  return (
    <div className="relative">
      <div className="h-80">
        <Doughnut data={data} options={options} />
      </div>

      {/* Center Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Total Value</p>
          <p className="text-xl font-bold text-gray-900">{formatCurrency(maturityAmount)}</p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-600">Invested</p>
          <p className="text-lg font-semibold text-teal-600">{((totalInvested / maturityAmount) * 100).toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Returns</p>
          <p className="text-lg font-semibold text-green-600">
            {((interestEarned / maturityAmount) * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  )
}
