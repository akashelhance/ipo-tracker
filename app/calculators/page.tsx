import type { Metadata } from "next"
import Link from "next/link"
import {
  Calculator,
  TrendingUp,
  PiggyBank,
  Wallet,
  Shield,
  Repeat,
  Target,
  Calendar,
  Trophy,
  DollarSign,
  Receipt,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Investment Calculators Hub - SIP, FD, PPF, NPS & More | Financial Planning Tools",
  description:
    "Free online investment calculators for SIP, Lumpsum, FD, PPF, NPS, Retirement planning and more. Calculate returns, plan your investments and achieve your financial goals.",
  keywords:
    "investment calculator, SIP calculator, FD calculator, PPF calculator, NPS calculator, retirement calculator, financial planning tools, AllCalcify",
  openGraph: {
    title: "Investment Calculators Hub - Free Financial Planning Tools",
    description:
      "Calculate returns for SIP, FD, PPF, NPS and more. Plan your investments with our comprehensive calculator suite.",
    type: "website",
  },
}

const calculators = [
  {
    id: "sip",
    title: "SIP Calculator",
    description: "Calculate returns on your Systematic Investment Plan (SIP) investments with compound growth.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    href: "/calculators/sip",
  },
  {
    id: "lumpsum",
    title: "Lumpsum Calculator",
    description: "Calculate returns on your one-time lump sum investments over different time periods.",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-500",
    href: "/calculators/lumpsum",
  },
  {
    id: "swp",
    title: "SWP Calculator",
    description: "Plan your Systematic Withdrawal Plan to generate regular income from investments.",
    icon: Repeat,
    gradient: "from-purple-500 to-pink-500",
    href: "/calculators/swp",
  },
  {
    id: "fd",
    title: "FD Calculator",
    description: "Calculate maturity amount and interest earned on Fixed Deposit investments.",
    icon: PiggyBank,
    gradient: "from-orange-500 to-red-500",
    href: "/calculators/fd",
  },
  {
    id: "ppf",
    title: "PPF Calculator",
    description: "Calculate returns on Public Provident Fund with 15-year lock-in and tax benefits.",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500",
    href: "/calculators/ppf",
  },
  {
    id: "rd",
    title: "RD Calculator",
    description: "Calculate maturity amount for Recurring Deposit with monthly contributions.",
    icon: Calendar,
    gradient: "from-teal-500 to-cyan-500",
    href: "/calculators/rd",
  },
  {
    id: "nps",
    title: "NPS Calculator",
    description: "Calculate pension corpus and monthly pension from National Pension System.",
    icon: Wallet,
    gradient: "from-rose-500 to-pink-500",
    href: "/calculators/nps",
  },
  {
    id: "retirement",
    title: "Retirement Calculator",
    description: "Plan your retirement corpus and calculate how much you need to invest monthly.",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-500",
    href: "/calculators/retirement",
  },
  {
    id: "goal-based",
    title: "Goal-Based Calculator",
    description: "Calculate investment required to achieve specific financial goals like home, car, education.",
    icon: Target,
    gradient: "from-lime-500 to-green-500",
    href: "/calculators/goal-based",
  },
  {
    id: "elss",
    title: "ELSS Calculator",
    description: "Calculate returns on Equity Linked Savings Scheme with tax benefits under 80C.",
    icon: TrendingUp,
    gradient: "from-violet-500 to-purple-500",
    href: "/calculators/elss",
  },
  {
    id: "tax-saving",
    title: "Tax-Saving Calculator",
    description: "Calculate tax savings and returns from various tax-saving investment options.",
    icon: Receipt,
    gradient: "from-sky-500 to-blue-500",
    href: "/calculators/tax-saving",
  },
]

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Calculator className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Investment Calculators Hub
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Plan your financial future with our comprehensive suite of investment calculators. Calculate returns, plan
              investments, and achieve your financial goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">✨ Free to Use</div>
              <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">📊 Accurate Calculations</div>
              <div className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">🎯 Goal Planning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculators Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Calculator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our range of financial calculators to plan your investments and achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {calculators.map((calculator) => {
            const IconComponent = calculator.icon
            return (
              <Link key={calculator.id} href={calculator.href} className="group block">
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${calculator.gradient} p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1`}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Free</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white/90 transition-colors">
                      {calculator.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">{calculator.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        Calculate Now
                      </span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Our Calculators?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our website{" "}
              <Link
                href="https://www.allcalcify.com"
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                AllCalcify.com
              </Link>{" "}
              is our own platform, built to provide accurate, fast, and user-friendly calculators for finance, health,
              fitness, math, and everyday needs. From SIP and FD returns to BMI and unit conversions, AllCalcify is
              designed to help you save time, make informed decisions, and plan with confidence — all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">
                Precise mathematical formulas ensure accurate results for all your financial planning needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal-Oriented</h3>
              <p className="text-gray-600">
                Plan your investments based on specific financial goals and time horizons.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Tracking</h3>
              <p className="text-gray-600">
                Visualize how your investments will grow over time with compound interest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Planning Your Financial Future Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Use our calculators to make informed investment decisions and achieve your financial goals faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/upcoming-ipo-calendar"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore IPOs
            </Link>
            <Link
              href="/ipo-grey-market-premium"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Check GMP
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
