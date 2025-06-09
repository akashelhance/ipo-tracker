import Link from "next/link"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <AlertCircle className="h-16 w-16 text-gray-400 mx-auto" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">IPO Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          The IPO you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          href="/upcoming-ipo-calendar"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to IPO Calendar
        </Link>
      </div>
    </div>
  )
}
