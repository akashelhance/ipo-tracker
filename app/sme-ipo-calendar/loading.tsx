import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section Skeleton */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="h-12 w-80 bg-white/20 rounded-lg mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 w-96 bg-white/20 rounded-lg mx-auto mb-8 animate-pulse"></div>
            <div className="flex justify-center gap-6">
              <div className="h-5 w-24 bg-white/20 rounded animate-pulse"></div>
              <div className="h-5 w-32 bg-white/20 rounded animate-pulse"></div>
              <div className="h-5 w-28 bg-white/20 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <div className="h-10 w-80 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 w-96 bg-gray-200 rounded-lg mx-auto mb-2 animate-pulse"></div>
            <div className="h-4 w-80 bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2">
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="col-span-2 space-y-2">
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>

                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
