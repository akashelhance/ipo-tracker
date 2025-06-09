import type { Metadata } from "next"
import BlogSearch from "@/components/blog-search"
import BlogSidebar from "@/components/blog-sidebar"
import BlogCard from "@/components/blog-card"
import { getAllBlogs } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "IPO & Stock Market Blog | Latest Financial Insights",
  description:
    "Explore our blog for the latest insights on IPOs, stock market trends, financial news, and investment strategies from industry experts.",
  keywords: "IPO blog, stock market blog, financial news, investment blog, capital market insights",
}

export default function BlogPage() {
  const blogs = getAllBlogs()

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">IPO & Stock Market Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Stay updated with the latest insights, analysis, and news on IPOs, stock markets, and financial trends.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <BlogSearch />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile by default */}
          <div className="w-full lg:w-1/4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <BlogSidebar />
            </div>
          </div>

          {/* Blog Listing */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination - For future implementation */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2" aria-label="Pagination">
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  3
                </a>
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
                  ...
                </span>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  8
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  9
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Next
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
