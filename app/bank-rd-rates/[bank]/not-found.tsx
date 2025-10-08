import Link from "next/link"
import { ArrowLeft, Building } from "lucide-react"

export default function BankRDNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-100 flex items-center justify-center">
      <div className="text-center">
        <Building className="h-24 w-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bank Not Found</h1>
        <p className="text-gray-600 mb-8">We don't have RD rate data for this bank yet.</p>
        <Link
          href="/bank-rd-rates"
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Banks
        </Link>
      </div>
    </div>
  )
}

