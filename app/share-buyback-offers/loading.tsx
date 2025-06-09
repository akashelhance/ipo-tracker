export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          {/* Table skeleton */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
