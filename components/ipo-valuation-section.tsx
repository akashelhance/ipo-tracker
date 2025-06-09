interface ValuationData {
  roe?: string
  roce?: string
  ebitdaMargin?: string
  patMargin?: string
  debtToEquity?: string
  eps?: string
  peRatio?: string
  ronw?: string
  nav?: string
}

interface IpoValuationSectionProps {
  valuation: ValuationData
}

export function IpoValuationSection({ valuation }: IpoValuationSectionProps) {
  // Don't render if no valuation or all fields are falsy
  if (!valuation || Object.values(valuation).every((value) => !value)) {
    return null
  }

  // Create array of KPI rows with only available data
  const kpiRows = [
    { label: "Return on Equity (ROE)", value: valuation.roe },
    { label: "Return on Capital Employed (ROCE)", value: valuation.roce },
    { label: "EBITDA Margin", value: valuation.ebitdaMargin },
    { label: "PAT Margin", value: valuation.patMargin },
    { label: "Debt to Equity", value: valuation.debtToEquity },
    { label: "Earnings Per Share (EPS)", value: valuation.eps },
    { label: "Price/Earning (P/E) Ratio", value: valuation.peRatio },
    { label: "Return on Net Worth (RoNW)", value: valuation.ronw },
    { label: "Net Asset Value (NAV)", value: valuation.nav },
  ].filter((row) => row.value) // Only include rows with values

  // Don't render if no valid rows
  if (kpiRows.length === 0) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Oswal Pumps IPO Valuation – FY2024</h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Check Oswal Pumps IPO valuations detail like Earning Per Share (EPS), Price/Earning P/E Ratio, Return on Net
        Worth (RoNW), and Net Asset Value (NAV) details.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">KPI</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Values
              </th>
            </tr>
          </thead>
          <tbody>
            {kpiRows.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-100">{row.label}</td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-100 font-semibold">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
