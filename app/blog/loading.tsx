export default function BlogLoading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-3/4 bg-gray-200 rounded-md animate-pulse mb-4"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="mb-8">
          <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <div className="w-full lg:w-1/4 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-8 w-1/2 bg-gray-200 rounded-md animate-pulse mb-6"></div>
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-6 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
              ))}
            </div>
          </div>

          {/* Blog Cards Skeleton */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="h-5 w-1/3 bg-gray-200 rounded-md animate-pulse"></div>
                      <div className="h-10 w-1/3 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
