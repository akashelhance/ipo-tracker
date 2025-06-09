interface IpoMarketLotTableProps {
  marketLot: number
  lotPrice: number
  maxRetailLots?: number
}

export function IpoMarketLotTable({ marketLot, lotPrice, maxRetailLots = 13 }: IpoMarketLotTableProps) {
  // Calculate values
  const retailMinShares = marketLot
  const retailMaxShares = marketLot * maxRetailLots
  const sHniMinShares = marketLot * (maxRetailLots + 1)
  const bHniMinShares = marketLot * 68 // Assuming B-HNI starts at 68 lots

  const retailMinAmount = marketLot * lotPrice
  const retailMaxAmount = retailMaxShares * lotPrice
  const sHniMinAmount = sHniMinShares * lotPrice
  const bHniMinAmount = bHniMinShares * lotPrice

  // Format currency
  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-green-500 pb-2 inline-block">
        Oswal Pumps IPO Market Lot
      </h2>

      <p className="text-gray-700 mb-6">
        The Oswal Pumps IPO minimum market lot is {marketLot} shares with {formatCurrency(retailMinAmount)} application
        amount. The retail investors can apply up-to {maxRetailLots} lots with {retailMaxShares} shares of{" "}
        {formatCurrency(retailMaxAmount)} amount.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Application</th>
              <th className="border border-gray-200 px-4 py-3 text-center font-semibold">Lot Size</th>
              <th className="border border-gray-200 px-4 py-3 text-center font-semibold">Shares</th>
              <th className="border border-gray-200 px-4 py-3 text-center font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">Retail Minimum</td>
              <td className="border border-gray-200 px-4 py-3 text-center">1</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{retailMinShares}</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{formatCurrency(retailMinAmount)}</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-200 px-4 py-3">Retail Maximum</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{maxRetailLots}</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{retailMaxShares}</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{formatCurrency(retailMaxAmount)}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-3">S-HNI Minimum</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{maxRetailLots + 1}</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{sHniMinShares}</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{formatCurrency(sHniMinAmount)}</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-200 px-4 py-3">B-HNI Minimum</td>
              <td className="border border-gray-200 px-4 py-3 text-center">68</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{bHniMinShares}</td>
              <td className="border border-gray-200 px-4 py-3 text-center">{formatCurrency(bHniMinAmount)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
