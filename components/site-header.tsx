import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, ChevronDown, X, TrendingUp, Calendar, Users, FileText } from "lucide-react"

export function SiteHeader() {
  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">🔥 New IPO Alert: Oswal Pumps IPO opens tomorrow!</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Free IPO Alerts & GMP Updates</span>
            <Button
              size="sm"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 h-7 px-3 text-xs font-medium"
            >
              Subscribe Now
            </Button>
          </div>
          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 h-6 w-6 p-0 md:hidden">
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-sm">IPO</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  IPOTracker
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">Your IPO Investment Guide</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
              >
                Home
              </Link>

              {/* IPO Dropdown */}
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200">
                  IPOs
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/upcoming-ipo-calendar"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Calendar className="mr-3 h-4 w-4" />
                      Upcoming IPOs
                    </Link>
                    <Link
                      href="/sme-ipo-calendar"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      SME IPOs
                    </Link>
                    <Link
                      href="/ipo-grey-market-premium"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      IPO GMP
                    </Link>
                    <Link
                      href="/ipo-subscription-status"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Users className="mr-3 h-4 w-4" />
                      Subscription Status
                    </Link>
                  </div>
                </div>
              </div>

              {/* Calculators Dropdown */}
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200">
                  Calculators
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/calculators"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      All Calculators
                    </Link>
                    <Link
                      href="/calculators/sip"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      SIP Calculator
                    </Link>
                    <Link
                      href="/calculators/lumpsum"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      Lumpsum Calculator
                    </Link>
                    <Link
                      href="/calculators/fd"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      FD Calculator
                    </Link>
                    <Link
                      href="/calculators/ppf"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      PPF Calculator
                    </Link>
                    <Link
                      href="/calculators/rd"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      RD Calculator
                    </Link>
                    <Link
                      href="/calculators/nps"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <TrendingUp className="mr-3 h-4 w-4" />
                      NPS Calculator
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/share-buyback-offers"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
              >
                Buybacks
              </Link>

              <Link
                href="/stock-brokers-comparison"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
              >
                Brokers
              </Link>

              <Link
                href="/blog"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
              >
                <FileText className="mr-1 h-4 w-4" />
                Blog
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search IPOs, companies..."
                  className="pl-10 pr-4 py-2 w-64 text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                Get Alerts
              </Button>
            </div>

            {/* Mobile Menu Button - Made More Visible */}
            <label
              htmlFor="mobile-menu-toggle"
              className="lg:hidden cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </label>
          </div>
        </div>

        {/* Mobile Navigation - Auto-close on link click */}
        <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
        <div className="lg:hidden peer-checked:block hidden border-t bg-white/95 backdrop-blur">
          {/* Mobile Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search IPOs, companies..." className="pl-10 pr-4 py-2 w-full text-sm" />
            </div>
          </div>

          {/* Mobile Menu Items */}
          <nav className="py-4 space-y-1" aria-label="Mobile navigation">
            {/* Home Link - Auto close menu */}
            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </label>

            {/* Mobile IPO Section with Accordion */}
            <div className="px-4 py-2">
              <input type="checkbox" id="mobile-ipo-toggle" className="hidden peer" />
              <label
                htmlFor="mobile-ipo-toggle"
                className="flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-800 cursor-pointer hover:text-blue-600 bg-gray-50 hover:bg-blue-50 px-3 rounded-lg transition-all duration-200"
              >
                <span className="flex items-center">
                  <TrendingUp className="mr-3 h-5 w-5 text-blue-600" />
                  IPO Services
                </span>
                <ChevronDown className="h-5 w-5 text-blue-600 transition-transform peer-checked:rotate-180" />
              </label>
              <div className="hidden peer-checked:block ml-4 mt-2 space-y-1">
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/upcoming-ipo-calendar"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <Calendar className="mr-3 h-4 w-4" />
                    Upcoming IPOs
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/sme-ipo-calendar"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    SME IPOs
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/ipo-grey-market-premium"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    IPO GMP
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/ipo-subscription-status"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <Users className="mr-3 h-4 w-4" />
                    Subscription Status
                  </Link>
                </label>
              </div>
            </div>

            {/* Mobile Calculators Section with Accordion */}
            <div className="px-4 py-2">
              <input type="checkbox" id="mobile-calculators-toggle" className="hidden peer" />
              <label
                htmlFor="mobile-calculators-toggle"
                className="flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-800 cursor-pointer hover:text-blue-600 bg-gray-50 hover:bg-blue-50 px-3 rounded-lg transition-all duration-200"
              >
                <span className="flex items-center">
                  <TrendingUp className="mr-3 h-5 w-5 text-blue-600" />
                  Calculators
                </span>
                <ChevronDown className="h-5 w-5 text-blue-600 transition-transform peer-checked:rotate-180" />
              </label>
              <div className="hidden peer-checked:block ml-4 mt-2 space-y-1">
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/calculators"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    All Calculators
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/calculators/sip"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    SIP Calculator
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/calculators/lumpsum"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    Lumpsum Calculator
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/calculators/fd"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    FD Calculator
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/calculators/ppf"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    PPF Calculator
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/calculators/rd"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    RD Calculator
                  </Link>
                </label>
                <label htmlFor="mobile-menu-toggle" className="block">
                  <Link
                    href="/calculators/nps"
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    <TrendingUp className="mr-3 h-4 w-4" />
                    NPS Calculator
                  </Link>
                </label>
              </div>
            </div>

            {/* Direct Links - Auto close menu */}
            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                href="/share-buyback-offers"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Buybacks
              </Link>
            </label>

            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                href="/stock-brokers-comparison"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Brokers
              </Link>
            </label>

            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                href="/blog"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <FileText className="mr-3 h-4 w-4" />
                Blog
              </Link>
            </label>

            {/* Mobile CTA */}
            <div className="px-4 pt-4 border-t">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Free IPO Alerts
              </Button>
            </div>
          </nav>

          {/* Close button for mobile menu */}
          <div className="px-4 pb-4">
            <label
              htmlFor="mobile-menu-toggle"
              className="flex items-center justify-center w-full py-3 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer font-medium transition-colors"
            >
              <X className="mr-2 h-4 w-4" />
              Close Menu
            </label>
          </div>
        </div>
      </header>
    </>
  )
}
