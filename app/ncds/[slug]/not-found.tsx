import Link from "next/link"
import { ArrowLeft, FileQuestion } from "lucide-react"

export default function NCDNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <FileQuestion className="h-24 w-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">NCD Not Found</h1>
        <p className="text-gray-600 mb-8">The NCD you're looking for doesn't exist or has been removed.</p>
        <Link
          href="/ncds"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All NCDs
        </Link>
      </div>
    </div>
  )
}

