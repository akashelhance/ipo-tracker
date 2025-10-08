import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="h-4 w-4">⚡</span>
              India's Most Trusted IPO Platform
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Master the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                IPO Market
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Get real-time IPO data, Grey Market Premium insights, share buyback alerts, and expert analysis to make
              informed investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                <Link href="/upcoming-ipo-calendar">
                  Explore IPOs <span className="ml-2">→</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300"
              >
                <Link href="/ipo-grey-market-premium">Check Live GMP</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">IPOs Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">1M+</div>
                <div className="text-sm text-gray-600">Monthly Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Live Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Market Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live Market Updates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay ahead with real-time IPO and market data</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trending IPOs */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="!p-0">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg px-6 py-4">
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl leading-none bg-white/20 p-1.5 rounded-md">📈</span>
                    <span className="text-lg font-semibold">Trending IPOs</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Oswal Pumps</div>
                      <div className="text-sm text-gray-600">₹32-34 | Mainboard</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">+15% GMP</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Tech Innovations</div>
                      <div className="text-sm text-gray-600">₹45-48 | SME</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">+8% GMP</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Green Energy Ltd</div>
                      <div className="text-sm text-gray-600">₹120-125 | Mainboard</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">+22% GMP</Badge>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/ipo-grey-market-premium">View All GMP</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Active Buybacks */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="!p-0">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg px-6 py-4">
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl leading-none bg-white/20 p-1.5 rounded-md">💰</span>
                    <span className="text-lg font-semibold">Active Buybacks</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Infosys Ltd</div>
                      <div className="text-sm text-gray-600">Record: 15 Jan 2025</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">₹9,300 Cr</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">TCS</div>
                      <div className="text-sm text-gray-600">Record: 20 Jan 2025</div>
                    </div>
                    <Badge className="bg-pink-100 text-pink-800">₹7,500 Cr</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Wipro</div>
                      <div className="text-sm text-gray-600">Record: 25 Jan 2025</div>
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-800">₹4,200 Cr</Badge>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/share-buyback-offers">View All Buybacks</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="!p-0">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg px-6 py-4">
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl leading-none bg-white/20 p-1.5 rounded-md">📊</span>
                    <span className="text-lg font-semibold">Market Insights</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-600 text-xl leading-none">📈</span>
                      <span className="font-semibold text-gray-900">IPO Market Bullish</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      15 new IPOs expected this month with strong investor interest.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-blue-600 text-xl leading-none">📊</span>
                      <span className="font-semibold text-gray-900">High Subscription</span>
                    </div>
                    <p className="text-sm text-gray-600">Average subscription rate increased by 40% this quarter.</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-600 text-xl leading-none">🎯</span>
                      <span className="font-semibold text-gray-900">SME Segment Hot</span>
                    </div>
                    <p className="text-sm text-gray-600">SME IPOs showing exceptional listing gains this year.</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/blog">Read More Insights</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Calculators Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Calculators</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plan your financial future with our comprehensive suite of investment calculators
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SIP Calculator */}
            <Link href="/calculators/sip" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <span className="text-xl">📈</span>
                    </div>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Free</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white/90 transition-colors">SIP Calculator</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Calculate returns on your Systematic Investment Plan investments
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      Calculate Now
                    </span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Lumpsum Calculator */}
            <Link href="/calculators/lumpsum" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <span className="text-xl">💰</span>
                    </div>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Free</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white/90 transition-colors">
                    Lumpsum Calculator
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Calculate returns on your one-time lump sum investments
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      Calculate Now
                    </span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* FD Calculator */}
            <Link href="/calculators/fd" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <span className="text-xl">🏦</span>
                    </div>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Free</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white/90 transition-colors">FD Calculator</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Calculate maturity amount and interest on Fixed Deposits
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      Calculate Now
                    </span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* PPF Calculator */}
            <Link href="/calculators/ppf" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <div className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Free</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white/90 transition-colors">PPF Calculator</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Calculate returns on Public Provident Fund with tax benefits
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      Calculate Now
                    </span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
    <div className="text-center mt-8">
  <Button
    asChild
    size="lg"
    variant="outline"
    className="px-8 py-3 text-gray-800 border-gray-300 hover:bg-gray-100"
  >
       <Link
      href="/calculators"
      className="inline-flex items-center px-6 py-3 rounded-xl border border-gray-300 bg-white shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-200 ease-in-out text-gray-800 font-medium text-lg"
    >
      View All Calculators
      <span className="ml-2 text-xl transform transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  </Button>
</div>

   
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Market Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with expert analysis, market trends, and investment strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl">📊</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Grey Market Premium</Badge>
                  <span className="text-xs text-gray-500 ml-auto">June 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Understanding IPO Grey Market Premium: Complete Guide for 2025
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Explore the concept of Grey Market Premium in IPOs and how it impacts listing day performance and
                  investor decisions in the current market scenario.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By Rahul Sharma</span>
                  <Link
                    href="/blog/understanding-ipo-grey-market-premium"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                  >
                    Read More{" "}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

          
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-white text-4xl">🚀</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className="bg-green-100 text-green-800 text-xs">SME IPOs</Badge>
                  <span className="text-xs text-gray-500 ml-auto">June 8, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Top 10 SME IPOs to Watch in 2025: High Growth Potential
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Discover the most promising Small and Medium Enterprise IPOs coming to the market this year with
                  potential for significant returns and growth.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By Priya Patel</span>
                  <Link
                    href="/blog/top-sme-ipos-2025"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                  >
                    Read More{" "}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

         
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-white text-4xl">📈</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className="bg-orange-100 text-orange-800 text-xs">Market Analysis</Badge>
                  <span className="text-xs text-gray-500 ml-auto">June 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  Q2 2025 IPO Market Outlook: Trends and Predictions
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Expert analysis on emerging trends in the Indian IPO market for Q2 2025, including sector-wise
                  performance and investor sentiment analysis.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By Vikram Malhotra</span>
                  <Link
                    href="/blog/q2-2025-ipo-market-outlook"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                  >
                    Read More{" "}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

         <div className="text-center mt-8">
  <Button
    asChild
    size="lg"
    variant="outline"
    className="px-8 py-3 text-gray-800 border-gray-300 hover:bg-gray-100 hover:text-black"
  >
    <Link href="/blog">
      View All Articles <span className="ml-2">→</span>
    </Link>
  </Button>
</div>

        </div>
      </section> */}

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and data for smart IPO investments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">📅</span>
                </div>
                <CardTitle className="text-xl">IPO Calendar</CardTitle>
                <CardDescription className="text-base">
                  Complete schedule of upcoming IPOs with subscription dates, listing dates, and price bands.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Real-time updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Mainboard & SME IPOs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Calendar integration
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/upcoming-ipo-calendar">View Calendar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">📈</span>
                </div>
                <CardTitle className="text-xl">Grey Market Premium</CardTitle>
                <CardDescription className="text-base">
                  Live GMP data, historical trends, and market sentiment analysis for informed decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Live GMP tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Historical charts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Price alerts
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ipo-grey-market-premium">Check GMP</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">💰</span>
                </div>
                <CardTitle className="text-xl">Share Buybacks</CardTitle>
                <CardDescription className="text-base">
                  Track buyback offers, record dates, acceptance ratios, and calculate potential returns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Buyback calculator
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Record date alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Ratio analysis
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/share-buyback-offers">View Buybacks</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-orange-600 text-xl">📊</span>
                </div>
                <CardTitle className="text-xl">Subscription Status</CardTitle>
                <CardDescription className="text-base">
                  Live subscription data with category-wise breakdown and real-time updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Live subscription data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Category breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Historical trends
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ipo-subscription-status">View Status</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl">👥</span>
                </div>
                <CardTitle className="text-xl">Broker Comparison</CardTitle>
                <CardDescription className="text-base">
                  Compare brokers, charges, features, and user reviews to find the best fit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Detailed comparison
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    User reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Charge calculator
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/stock-brokers-comparison">Compare Brokers</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-xl">📝</span>
                </div>
                <CardTitle className="text-xl">Expert Analysis</CardTitle>
                <CardDescription className="text-base">
                  In-depth market analysis, IPO reviews, and investment strategies from experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Expert reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Market insights
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Investment tips
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog">Read Analysis</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose IPO Tracker?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Trusted by over 1 million investors across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Data</h3>
              <p className="text-gray-600">Verified information from official sources with 99.9% accuracy guarantee.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Live data updates every minute to keep you ahead of the market.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Analysis</h3>
              <p className="text-gray-600">Professional insights and recommendations from market experts.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Lightning-fast platform with 99.9% uptime and instant notifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Join thousands of successful investors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "IPO Tracker helped me make informed decisions. The GMP data is incredibly accurate and the analysis
                  is spot-on."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">RK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                    <div className="text-sm text-gray-600">Retail Investor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The buyback alerts saved me from missing important dates. This platform is a game-changer for serious
                  investors."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">PS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Priya Sharma</div>
                    <div className="text-sm text-gray-600">Portfolio Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Best IPO tracking platform in India. The subscription status updates are real-time and very helpful
                  for timing entries."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">AM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Amit Mehta</div>
                    <div className="text-sm text-gray-600">Day Trader</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
