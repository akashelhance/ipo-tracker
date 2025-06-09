"use client"

import { useRef } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface SipResultChartProps {
  totalInvested: number
  estimatedReturns: number
}

export function SipResultChart({ totalInvested, estimatedReturns }: SipResultChartProps) {
  const chartRef = useRef<ChartJS<"doughnut">>(null)

  const data = {
    labels: ["Total Invested", "Estimated Returns"],
    datasets: [
      {
        data: [totalInvested, estimatedReturns],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)", // Blue for invested amount
          "rgba(16, 185, 129, 0.8)", // Green for returns
        ],
        borderColor: ["rgba(59, 130, 246, 1)", "rgba(16, 185, 129, 1)"],
        borderWidth: 2,
        hoverBackgroundColor: ["rgba(59, 130, 246, 0.9)", "rgba(16, 185, 129, 0.9)"],
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
            size: 12,
            weight: "500" as const,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || ""
            const value = context.parsed
            const total = totalInvested + estimatedReturns
            const percentage = ((value / total) * 100).toFixed(1)
            const formattedValue = new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(value)
            return `${label}: ${formattedValue} (${percentage}%)`
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
      animateScale: true,
      duration: 1000,
    },
  }

  return (
    <div className="relative">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Investment Breakdown</h4>
      <div className="h-64 relative">
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-sm text-gray-500">Total Value</div>
          <div className="text-lg font-bold text-gray-900">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
              notation: "compact",
            }).format(totalInvested + estimatedReturns)}
          </div>
        </div>
      </div>
    </div>
  )
}
