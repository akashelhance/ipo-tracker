import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, BarChart2, Award, Users, BookOpen, Shield, Gift, Calculator } from "lucide-react"
import { siteConfig } from "@/config/config"

export const metadata: Metadata = {
  title: `Sitemap | ${siteConfig.siteName}`,
  description:
    `Navigate through all sections and pages of ${siteConfig.siteName}. Find information about IPOs, buybacks, subscription status, calculators, and more.`,
}

export default function SitemapPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your way around {siteConfig.siteName} with our comprehensive sitemap. Explore all sections and pages to access the
            information you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IPO Services */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold">IPO Services</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/upcoming-ipo-calendar" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Upcoming IPO Calendar
                </Link>
              </li>
              <li>
                <Link href="/sme-ipo-calendar" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  SME IPO Calendar
                </Link>
              </li>
              <li>
                <Link href="/ipo-grey-market-premium" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  IPO Grey Market Premium
                </Link>
              </li>
              <li>
                <Link href="/ipo-subscription-status" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  IPO Subscription Status
                </Link>
              </li>
              <li>
                <Link href="/allotment-status" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Allotment Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Investment Calculators */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Calculator className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold">Investment Calculators</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/calculators" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  All Calculators
                </Link>
              </li>
              <li>
                <Link href="/calculators/sip" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/lumpsum" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Lumpsum Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/fd" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  FD Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/ppf" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  PPF Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/rd" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  RD Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/nps" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  NPS Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/swp" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  SWP Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/retirement" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Retirement Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/goal-based" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Goal Based Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/elss" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  ELSS Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/tax-saving" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Tax Saving Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Buyback Services */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <BarChart2 className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold">Buyback Services</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/share-buyback-offers" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Share Buyback Offers
                </Link>
              </li>
              <li>
                <Link href="/buyback-calculator" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Buyback Calculator
                </Link>
              </li>
              <li>
                <Link href="/buyback-acceptance-ratio" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Acceptance Ratio History
                </Link>
              </li>
            </ul>
          </div>

          {/* Broker Services */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-xl font-bold">Broker Services</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/stock-brokers-comparison" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Stock Brokers Comparison
                </Link>
              </li>
              <li>
                <Link href="/compare-brokers" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Compare Brokers
                </Link>
              </li>
              <li>
                <Link href="/discount-brokers" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Discount Brokers
                </Link>
              </li>
              <li>
                <Link href="/full-service-brokers" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Full-Service Brokers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Blog */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                <BookOpen className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold">Resources & Blog</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/book-recommendations" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Book Recommendations
                </Link>
              </li>
              <li>
                <Link href="/drhp-rhp-documents" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  DRHP & RHP Documents
                </Link>
              </li>
              <li>
                <Link href="/ipo-glossary" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  IPO Glossary
                </Link>
              </li>
              <li>
                <Link href="/ipo-faqs" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  IPO FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <Gift className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold">Our Products</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/our-products" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  All Products
                </Link>
              </li>
              <li>
                <a
                  href="https://cardrecommend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  CardRecommend
                </a>
              </li>
              <li>
                <a
                  href="https://readrecommend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  ReadRecommend
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <Award className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold">Company</h2>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-blue-600 hover:underline flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-3">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-gray-600" />
              </div>
              <h2 className="text-xl font-bold">Legal & Sitemap</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link href="/privacy-policy" className="text-blue-600 hover:underline flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-blue-600 hover:underline flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-blue-600 hover:underline flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Disclaimer
              </Link>
              <Link href="/sitemap" className="text-blue-600 hover:underline flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Can't find what you're looking for?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>{" "}
            for assistance.
          </p>
        </div>
      </div>
    </main>
  )
}
