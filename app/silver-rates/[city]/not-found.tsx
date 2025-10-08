import Link from "next/link"
import { ArrowLeft, MapPinOff } from "lucide-react"

export default function SilverRateCityNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 flex items-center justify-center">
      <div className="text-center">
        <MapPinOff className="h-24 w-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
        <p className="text-gray-600 mb-8">We don't have silver rate data for this city yet.</p>
        <Link
          href="/silver-rates"
          className="inline-flex items-center px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Cities
        </Link>
      </div>
    </div>
  )
}

