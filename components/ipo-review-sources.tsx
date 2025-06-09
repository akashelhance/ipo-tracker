interface IpoReviewSourcesProps {
  sources: string[]
}

export function IpoReviewSources({ sources }: IpoReviewSourcesProps) {
  if (!sources || sources.length === 0) {
    return null
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Oswal Pumps IPO Review</h2>

      <div className="space-y-3">
        {sources.map((source, index) => (
          <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            <p className="text-gray-700 font-medium">{source}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
