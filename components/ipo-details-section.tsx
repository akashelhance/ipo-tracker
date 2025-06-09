interface IpoDetailsSectionProps {
  openDate: string
  closeDate: string
  allotmentDate?: string
  listingDate?: string
  faceValue: string
  priceBand: string
  issueSize: string
  freshIssue: string
  offerForSale: string
  issueType: string
  listing: string
  retailQuota: string
  qibQuota: string
  niiQuota: string
  drhpLink?: string
  rhpLink?: string
  anchorLink?: string
  revenueFY23?: string
  revenueFY24?: string
  profitFY23?: string
  profitFY24?: string
}

export function IpoDetailsSection({
  openDate,
  closeDate,
  allotmentDate,
  listingDate,
  faceValue,
  priceBand,
  issueSize,
  freshIssue,
  offerForSale,
  issueType,
  listing,
  retailQuota,
  qibQuota,
  niiQuota,
  drhpLink,
  rhpLink,
  anchorLink,
  revenueFY23,
  revenueFY24,
  profitFY23,
  profitFY24,
}: IpoDetailsSectionProps) {
  // Check if essential props are missing
  if (!openDate || !closeDate || !priceBand || !issueSize) {
    return null
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">IPO Details</h2>

      {/* Description paragraphs */}
      <div className="space-y-4 text-gray-700 mb-6">
        <p>
          Oswal Pumps IPO open date is {openDate} and the IPO will close on {closeDate}. Oswal Pumps IPO is a{" "}
          {issueType}. The company to raise around {issueSize} via IPO that comprises fresh issue of {freshIssue} and
          offer for sale up to {offerForSale} with face value of {faceValue}.
        </p>

        {(retailQuota || qibQuota || niiQuota) && (
          <p>
            Oswal Pumps IPO price band is {priceBand}.{" "}
            {retailQuota && qibQuota && niiQuota && (
              <>
                The retail quota is {retailQuota}, QIB is {qibQuota}, and HNI is {niiQuota}.
              </>
            )}{" "}
            {listing && listingDate && (
              <>
                Oswal Pumps IPO to list on {listing} on {listingDate}.
              </>
            )}{" "}
            {allotmentDate && <>The allotment of Oswal Pumps IPO date is {allotmentDate}.</>}
          </p>
        )}

        {revenueFY23 && revenueFY24 && profitFY23 && profitFY24 && (
          <p>
            The company reported revenue of {revenueFY24} in 2024 against {revenueFY23} in 2023. The company reported
            profit of {profitFY24} in 2024 against profit of {profitFY23} in 2023. As per the financials the IPO
            investors should apply the IPO for a long term.
          </p>
        )}
      </div>

      {/* Enhanced Details Table */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
          IPO Key Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">IPO Open Date</span>
                <span className="text-lg font-bold text-green-600">{openDate}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">IPO Close Date</span>
                <span className="text-lg font-bold text-red-600">{closeDate}</span>
              </div>
            </div>

            {allotmentDate && (
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Allotment Date</span>
                  <span className="text-lg font-bold text-blue-600">{allotmentDate}</span>
                </div>
              </div>
            )}

            {listingDate && (
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Listing Date</span>
                  <span className="text-lg font-bold text-purple-600">{listingDate}</span>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Face Value</span>
                <span className="text-lg font-bold text-gray-900">{faceValue}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">IPO Price Band</span>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {priceBand}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Issue Size</span>
                <span className="text-lg font-bold text-orange-600">{issueSize}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Fresh Issue</span>
                <span className="text-lg font-bold text-emerald-600">{freshIssue}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Offer for Sale</span>
                <span className="text-lg font-bold text-teal-600">{offerForSale}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Issue Type</span>
                <span className="text-lg font-bold text-indigo-600">{issueType}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">IPO Listing</span>
                <span className="text-lg font-bold text-violet-600">{listing}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Retail Quota</span>
                <span className="text-lg font-bold text-pink-600">{retailQuota}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">QIB Quota</span>
                <span className="text-lg font-bold text-cyan-600">{qibQuota}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">NII Quota</span>
                <span className="text-lg font-bold text-amber-600">{niiQuota}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Document Links Section */}
        {(drhpLink || rhpLink || anchorLink) && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
              Important Documents
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {drhpLink && (
                <a
                  href={drhpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  <div className="font-semibold mb-1">DRHP</div>
                  <div className="text-sm opacity-90">Draft Prospectus</div>
                </a>
              )}
              {rhpLink && (
                <a
                  href={rhpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  <div className="font-semibold mb-1">RHP</div>
                  <div className="text-sm opacity-90">Final Prospectus</div>
                </a>
              )}
              {anchorLink && (
                <a
                  href={anchorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  <div className="font-semibold mb-1">Anchor List</div>
                  <div className="text-sm opacity-90">Investor Details</div>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
