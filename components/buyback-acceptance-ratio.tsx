interface BuybackAcceptanceRatioProps {
  companyName: string
  year: string
  marketPrice: string
  buybackPrice: string
  investment: string
  acceptanceData: {
    ratio: string
    shares: string
    profit: string
  }[]
}

export function BuybackAcceptanceRatio({
  companyName,
  year,
  marketPrice,
  buybackPrice,
  investment,
  acceptanceData,
}: BuybackAcceptanceRatioProps) {
  // Don't render if no acceptance data
  if (!acceptanceData || acceptanceData.length === 0) {
    return null
  }

  // Calculate shares for the paragraph
  const investmentAmount = investment.replace(/[^\d]/g, "")
  const buybackPriceAmount = buybackPrice.replace(/[^\d]/g, "")
  const calculatedShares = Math.floor(Number(investmentAmount) / Number(buybackPriceAmount))

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        📈 {companyName} Buyback {year} Acceptance Ratio
      </h2>

      {/* Summary Paragraph */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          The investor should buy around {calculatedShares} shares at a current market price of {marketPrice} (as of
          date). The calculation will be {investment} / {buybackPrice} buyback price = {calculatedShares} shares.
        </p>
      </div>

      {/* Acceptance Ratio Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-gray-100 to-blue-100">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Acceptance Ratio
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Investment
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Shares Buyback
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                Profit
              </th>
            </tr>
          </thead>
          <tbody>
            {acceptanceData.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-100">{row.ratio}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-100">{investment}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-100">{row.shares}</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600 border-b border-gray-100">
                  {row.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
