import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog Post Not Found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
