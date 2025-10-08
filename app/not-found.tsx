import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/sitemap"
            className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200"
          >
            <Search className="w-5 h-5 mr-2" />
            View Sitemap
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/upcoming-ipo-calendar', label: 'IPO Calendar' },
              { href: '/gold-rates', label: 'Gold Rates' },
              { href: '/bank-fd-rates', label: 'FD Rates' },
              { href: '/ncds', label: 'NCDs' },
              { href: '/calculators', label: 'Calculators' },
              { href: '/blog', label: 'Blog' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

