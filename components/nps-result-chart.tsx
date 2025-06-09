"use client"

import { useRef } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface NPSResultChartProps {
  lumpSum: number
  annuity: number
  totalCorpus: number
}

export function NPSResultChart({ lumpSum, annuity, totalCorpus }: NPSResultChartProps) {
  const chartRef = useRef<ChartJS<"doughnut">>(null)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const data = {
    labels: ["Lump Sum Withdrawal", "Annuity Purchase"],
    datasets: [
      {
        data: [lumpSum, annuity],
        backgroundColor: [
          "rgba(244, 63, 94, 0.8)", // Rose
          "rgba(59, 130, 246, 0.8)", // Blue
        ],
        borderColor: ["rgba(244, 63, 94, 1)", "rgba(59, 130, 246, 1)"],
        borderWidth: 2,
        hoverBackgroundColor: ["rgba(244, 63, 94, 0.9)", "rgba(59, 130, 246, 0.9)"],
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
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ""
            const value = context.parsed
            const percentage = ((value / totalCorpus) * 100).toFixed(1)
            return `${label}: ${formatCurrency(value)} (${percentage}%)`
          },
        },
      },
    },
    cutout: "60%",
  }

  return (
    <div className="relative">
      <div style={{ height: "300px" }}>
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>

      {/* Center text overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-sm text-gray-600">Total Corpus</div>
          <div className="text-lg font-bold text-gray-900">{formatCurrency(totalCorpus)}</div>
        </div>
      </div>
    </div>
  )
}
