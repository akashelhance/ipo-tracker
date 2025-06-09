interface FinancialData {
  summary: string
  table: {
    period: string
    revenue: string
    expense: string
    profitAfterTax: string
    assets: string
  }[]
}

interface IpoFinancialReportProps {
  financials: FinancialData
}

export function IpoFinancialReport({ financials }: IpoFinancialReportProps) {
  // Don't render if no financials or empty table
  if (!financials || !financials.table || financials.table.length === 0) {
    return null
  }

  // Helper function to check if profit is positive
  const isProfitPositive = (profit: string) => {
    return profit.startsWith("₹") && !profit.includes("-") && profit !== "₹0"
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Oswal Pumps IPO Company Financial Report</h2>

      <p className="text-gray-700 mb-6 leading-relaxed">{financials.summary}</p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Period Ended
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Revenue
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Expense
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Profit After Tax
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Assets
              </th>
            </tr>
          </thead>
          <tbody>
            {financials.table.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
              >
                <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{row.period}</td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{row.revenue}</td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{row.expense}</td>
                <td
                  className={`px-4 py-3 text-sm border-b border-gray-100 font-medium ${
                    isProfitPositive(row.profitAfterTax) ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {row.profitAfterTax}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{row.assets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
