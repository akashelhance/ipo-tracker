interface PeerGroupComparisonProps {
  companies: {
    name: string
    eps: string
    peRatio: string
    ronw: string
    nav: string
    income: string
  }[]
}

export function PeerGroupComparison({ companies }: PeerGroupComparisonProps) {
  if (!companies || companies.length === 0) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Peer Group Comparison</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left font-bold text-gray-900 p-3 border border-gray-200 rounded-tl-lg">Company</th>
              <th className="text-left font-bold text-gray-900 p-3 border border-gray-200">EPS</th>
              <th className="text-left font-bold text-gray-900 p-3 border border-gray-200">PE Ratio</th>
              <th className="text-left font-bold text-gray-900 p-3 border border-gray-200">RoNW %</th>
              <th className="text-left font-bold text-gray-900 p-3 border border-gray-200">NAV</th>
              <th className="text-left font-bold text-gray-900 p-3 border border-gray-200 rounded-tr-lg">Income</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="p-3 border border-gray-200 font-medium text-gray-900">{company.name}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{company.eps}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{company.peRatio}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{company.ronw}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{company.nav}</td>
                <td className="p-3 border border-gray-200 text-gray-700">{company.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
