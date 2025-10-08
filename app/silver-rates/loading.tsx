export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Skeleton */}
        <div className="text-center mb-16 animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg animate-pulse">
              <div className="h-12 bg-slate-100 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
          ))}
        </div>

        {/* Table Skeleton */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
          <div className="p-6">
            <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
            <div className="space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-50 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

