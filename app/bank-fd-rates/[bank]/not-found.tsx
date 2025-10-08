import Link from "next/link"
import { ArrowLeft, Building } from "lucide-react"

export default function BankFDNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <Building className="h-24 w-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bank Not Found</h1>
        <p className="text-gray-600 mb-8">We don't have FD rate data for this bank yet.</p>
        <Link
          href="/bank-fd-rates"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Banks
        </Link>
      </div>
    </div>
  )
}

