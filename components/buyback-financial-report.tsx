interface BuybackFinancialReportProps {
  companyName: string
  financials: {
    year: string
    revenue: string
    expense: string
    pat: string
  }[]
}

export function BuybackFinancialReport({ companyName, financials }: BuybackFinancialReportProps) {
  // Don't render if no financials data
  if (!financials || financials.length === 0) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">📊 {companyName} Financial Report</h2>

      <h3 className="text-lg font-medium text-gray-600 mb-6">₹ in Crores</h3>

      {/* Financial Report Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-gray-100 to-blue-100">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">Year</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Revenue
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Expense
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">PAT</th>
            </tr>
          </thead>
          <tbody>
            {financials.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-100">{row.year}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-100">{row.revenue}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-100">{row.expense}</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600 border-b border-gray-100">{row.pat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
