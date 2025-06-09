interface BuybackOfferDetailsProps {
  companyName: string
  year: string
  offerAmount: string
  numberOfShares: string
  faceValue: string
  buybackPrice: string
  listing: string
  buybackType: string
  letterOfOfferLink?: string
}

export function BuybackOfferDetails({
  companyName,
  year,
  offerAmount,
  numberOfShares,
  faceValue,
  buybackPrice,
  listing,
  buybackType,
  letterOfOfferLink,
}: BuybackOfferDetailsProps) {
  // Don't render if essential props are missing
  if (!companyName || !year || !offerAmount || !numberOfShares) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        🧾 {companyName} Buyback {year} Offer Details
      </h2>

      {/* Summary Paragraph */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          {companyName} of {numberOfShares} equity shares at a price of {buybackPrice} per equity share. The buyback
          offers not to exceed {offerAmount} of the total buyback offer size.
        </p>
      </div>

      {/* Details Table */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
          Buyback Key Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Offer Amount</span>
              <span className="text-lg font-bold text-green-600">{offerAmount}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Number of Shares</span>
              <span className="text-lg font-bold text-blue-600">{numberOfShares}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Face Value</span>
              <span className="text-lg font-bold text-purple-600">{faceValue}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Buyback Price</span>
              <span className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {buybackPrice}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Listing</span>
              <span className="text-lg font-bold text-indigo-600">{listing}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Buyback Type</span>
              <span className="text-lg font-bold text-violet-600">{buybackType}</span>
            </div>
          </div>

          {letterOfOfferLink && (
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Letter of Offer</span>
                <a
                  href={letterOfOfferLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Click Here
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
