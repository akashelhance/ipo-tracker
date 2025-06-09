export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="mb-8">
            <div className="h-12 bg-gray-200 rounded w-1/2 mb-4 mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>

          {/* Intro skeleton */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          {/* Table skeleton */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
