import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { brokers } from "@/lib/broker-data"
import { Star, Filter, TrendingUp, Building2, Users } from "lucide-react"

interface PageProps {
  searchParams: Promise<{ filter?: string }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Stock Brokers in India 2025 – Compare Demat & Brokerage Charges",
    description:
      "Compare India's top stock brokers including discount and full-service brokers. Check demat account charges, brokerage fees, features and open accounts easily.",
    keywords:
      "best stock brokers India, discount brokers, full service brokers, demat account charges, brokerage comparison, trading account, broker reviews",
    authors: [{ name: "Broker Comparison Team" }],
    creator: "IPO Calendar",
    publisher: "IPO Calendar",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: "Best Stock Brokers in India 2025 – Compare Demat & Brokerage Charges",
      description:
        "Compare India's top stock brokers. Filter by Discount or Full-Service brokers. See charges, features, and open demat accounts easily.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/stock-brokers-comparison",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/brokers-comparison-og.jpg",
          width: 1200,
          height: 630,
          alt: "Best Stock Brokers in India 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Stock Brokers in India 2025",
      description: "Compare India's top stock brokers with detailed charges and features comparison.",
      images: ["https://yoursite.com/images/brokers-comparison-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/stock-brokers-comparison",
    },
  }
}

function FilterButton({
  href,
  isActive,
  children,
  count,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
  count: number
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
          : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200 hover:border-blue-300"
      }`}
    >
      {children}
      <span
        className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
          isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
        }`}
      >
        {count}
      </span>
    </Link>
  )
}

function BrokerCard({ broker }: { broker: (typeof brokers)[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02]">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:via-purple-50/30 group-hover:to-indigo-50/50 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-indigo-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-indigo-400/20 transition-all duration-500 -m-0.5 -z-10"></div>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 p-6 border-b border-gray-100 transition-all duration-300 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-200 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Image
                src={broker.logo || "/placeholder.svg"}
                alt={`${broker.name} logo`}
                width={48}
                height={48}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                {broker.name}
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 transform group-hover:scale-105 ${
                    broker.type === "Discount"
                      ? "bg-green-100 text-green-700 group-hover:bg-green-200 group-hover:shadow-md"
                      : "bg-blue-100 text-blue-700 group-hover:bg-blue-200 group-hover:shadow-md"
                  }`}
                >
                  {broker.type}
                </span>
                <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full group-hover:bg-yellow-200 group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                  <Star className="h-3 w-3 text-yellow-500 fill-current mr-1 group-hover:animate-pulse" />
                  <span className="text-xs font-semibold text-yellow-700">{broker.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2">
            <Link
              href={`/broker/${broker.slug}`}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md group-hover:bg-gray-200"
            >
              View Details
            </Link>
            <a
              href={broker.openAccountUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg group-hover:bg-blue-700 group-hover:shadow-lg"
            >
              Open Account
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {broker.description}
        </p>

        {/* Charges Section */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
            Charges & Fees
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-blue-100 group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
              <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                {broker.accountOpeningCharge}
              </div>
              <div className="text-xs text-blue-600 font-medium">Account Opening</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100 group-hover:bg-purple-100 group-hover:border-purple-200 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
              <div className="text-2xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                {broker.accountMaintenanceCharge}
              </div>
              <div className="text-xs text-purple-600 font-medium">Annual Maintenance</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100 group-hover:bg-green-100 group-hover:border-green-200 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
              <div className="text-2xl font-bold text-green-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                {broker.equityDeliveryBrokerage}
              </div>
              <div className="text-xs text-green-600 font-medium">Delivery Brokerage</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100 group-hover:bg-orange-100 group-hover:border-orange-200 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
              <div className="text-2xl font-bold text-orange-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                {broker.equityIntradayBrokerage}
              </div>
              <div className="text-xs text-orange-600 font-medium">Intraday Brokerage</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
            Key Features
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {broker.features.slice(0, 6).map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Action Buttons */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          <Link
            href={`/broker/${broker.slug}`}
            className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-all duration-300 text-center transform hover:scale-105 hover:shadow-md"
          >
            View Details
          </Link>
          <a
            href={broker.openAccountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg"
          >
            Open Account
          </a>
        </div>
      </div>

      {/* Floating action indicator */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 animate-pulse"></div>
    </div>
  )
}

export default async function StockBrokersComparisonPage({ searchParams }: PageProps) {
  const { filter } = await searchParams

  // Filter brokers based on the filter parameter
  const filteredBrokers =
    filter && filter !== "all"
      ? brokers.filter((broker) => broker.type.toLowerCase() === filter.toLowerCase())
      : brokers

  // Calculate statistics
  const discountBrokers = brokers.filter((broker) => broker.type === "Discount")
  const fullServiceBrokers = brokers.filter((broker) => broker.type === "Full-Service")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
              <TrendingUp className="h-4 w-4 mr-2" />
              Compare Top Brokers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Best Stock Brokers in India</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Compare charges, features, and services of India's leading stock brokers. Find the perfect broker for your
              trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">{brokers.length}</div>
                <div className="text-blue-200">Total Brokers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">{discountBrokers.length}</div>
                <div className="text-blue-200">Discount Brokers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">{fullServiceBrokers.length}</div>
                <div className="text-blue-200">Full-Service</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <Filter className="h-6 w-6 mr-3 text-blue-600" />
                  Filter Brokers
                </h2>
                <p className="text-gray-600">Choose broker type to compare</p>
              </div>
              <div className="text-sm text-gray-500">
                Showing {filteredBrokers.length} of {brokers.length} brokers
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <FilterButton
                href="/stock-brokers-comparison"
                isActive={!filter || filter === "all"}
                count={brokers.length}
              >
                All Brokers
              </FilterButton>
              <FilterButton
                href="/stock-brokers-comparison?filter=discount"
                isActive={filter === "discount"}
                count={discountBrokers.length}
              >
                Discount Brokers
              </FilterButton>
              <FilterButton
                href="/stock-brokers-comparison?filter=full-service"
                isActive={filter === "full-service"}
                count={fullServiceBrokers.length}
              >
                Full-Service Brokers
              </FilterButton>
            </div>
          </div>
        </div>

        {/* Brokers List */}
        <div className="space-y-6 mb-12">
          {filteredBrokers.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>

        {/* Information Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Broker Types</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                <Users className="h-6 w-6 mr-3" />
                Discount Brokers
              </h3>
              <p className="text-green-800 leading-relaxed mb-4">
                Discount brokers offer low-cost trading with minimal fees. They focus on execution rather than advisory
                services, making them ideal for self-directed investors who prefer to make their own investment
                decisions.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• Low or zero brokerage charges</li>
                <li>• Minimal account maintenance fees</li>
                <li>• Technology-focused platforms</li>
                <li>• Self-service model</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                <Building2 className="h-6 w-6 mr-3" />
                Full-Service Brokers
              </h3>
              <p className="text-blue-800 leading-relaxed mb-4">
                Full-service brokers provide comprehensive investment services including research, advisory, and wealth
                management. They charge higher fees but offer personalized guidance and extensive support.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• Research reports and recommendations</li>
                <li>• Personal relationship managers</li>
                <li>• Investment advisory services</li>
                <li>• Comprehensive wealth management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Investment Tools</h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/ipo-grey-market-premium"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPO GMP</h4>
              <p className="text-sm text-gray-600">Grey Market Premium</p>
            </Link>

            <Link
              href="/upcoming-ipo-calendar"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPO Calendar</h4>
              <p className="text-sm text-gray-600">Upcoming IPOs</p>
            </Link>

            <Link
              href="/ipo-subscription-status"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Subscription Status</h4>
              <p className="text-sm text-gray-600">Live IPO Data</p>
            </Link>

            <Link
              href="/share-buyback-offers"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Buyback Offers</h4>
              <p className="text-sm text-gray-600">Share Buybacks</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
