"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  TrendingUp,
  Shield,
  Award,
  Users,
  Send,
  ExternalLink,
  Gift,
  Calculator,
  MoreHorizontal,
  Briefcase,
  DollarSign,
  Building2,
  Book,
  Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/config"
import gmpprovider from "@/config/gmpprovider"
import { LeadsCaptureModal } from "@/components/leads-capture-modal"

export function SiteFooter() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false)

  const openModal = () => setIsNewsletterModalOpen(true)

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-300 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Newsletter Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-blue-300">Join 50,000+ Smart Investors</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss an{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IPO Opportunity
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get instant alerts for new IPOs, GMP updates, and exclusive market insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 h-12"
              />
              <Button
                onClick={openModal}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-12 font-semibold"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe Free
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ✓ No spam, unsubscribe anytime ✓ 100% Free ✓ Trusted by 50K+ investors
            </p>
          </div>

          {/* Main Footer Grid - 4 Columns Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Column 1: Company & Mission */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {gmpprovider.websiteName}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {siteConfig.siteDescription}
                </p>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <Users className="h-5 w-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-white">{siteConfig.stats.totalUsers}</div>
                  <div className="text-xs text-gray-400">Users</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <Award className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-white">{siteConfig.stats.totalIPOs}</div>
                  <div className="text-xs text-gray-400">IPOs</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-blue-400" />
                <Link href={`mailto:${gmpprovider.contact.email}`}>{gmpprovider.contact.email}</Link>
              </div>
            </div>

            {/* Column 2: Markets & Investments */}
            <div className="space-y-8">
              {/* Markets */}
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                  IPO & Markets
                </h3>
                <nav className="space-y-2" aria-label="IPO services">
                  {[
                    { href: "/upcoming-ipo-calendar", label: "Upcoming IPOs" },
                    { href: "/sme-ipo-calendar", label: "SME IPOs" },
                    { href: "/ipo-grey-market-premium", label: "IPO GMP Today" },
                    { href: "/ipo-subscription-status", label: "Subscription Status" },
                    { href: "/market-holidays", label: "Market Holidays" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center text-sm text-gray-400 hover:text-blue-400 transition-all duration-200"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Investments */}
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center mb-4">
                  <Briefcase className="h-5 w-5 mr-2 text-purple-400" />
                  Investments
                </h3>
                <nav className="space-y-2" aria-label="Investment options">
                  {[
                    { href: "/ncds", label: "NCDs" },
                    { href: "/rights-issues", label: "Rights Issues" },
                    { href: "/share-buyback-offers", label: "Buyback Offers" },
                    { href: "/bank-fd-rates", label: "Bank FD Rates" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center text-sm text-gray-400 hover:text-purple-400 transition-all duration-200"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Column 3: Calculators & Tools */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center mb-4">
                <Calculator className="h-5 w-5 mr-2 text-teal-400" />
                Financial Calculators
              </h3>
              <nav className="space-y-2" aria-label="Financial calculators">
                {[
                  { href: "/calculators/sip", label: "SIP Calculator" },
                  { href: "/calculators/lumpsum", label: "Lumpsum Calculator" },
                  { href: "/calculators/fd", label: "FD Calculator" },
                  { href: "/calculators/ppf", label: "PPF Calculator" },
                  { href: "/calculators/rd", label: "RD Calculator" },
                  { href: "/calculators/nps", label: "NPS Calculator" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center text-sm text-gray-400 hover:text-teal-400 transition-all duration-200"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                  </Link>
                ))}
              </nav>
              <Link
                href="/calculators"
                className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors mt-2"
              >
                View All Calculators
                <MoreHorizontal className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Column 4: Resources & Rates */}
            <div className="space-y-8">
              {/* Rates */}
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center mb-4">
                  <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                  Live Rates
                </h3>
                <nav className="space-y-2" aria-label="Rates">
                  {[
                    { href: "/gold-rates", label: "Gold Rates" },
                    { href: "/silver-rates", label: "Silver Rates" },
                    { href: "/petrol-rates", label: "Petrol Rates" },
                    { href: "/diesel-rates", label: "Diesel Rates" },
                    { href: "/cng-rates", label: "CNG Rates" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center text-sm text-gray-400 hover:text-green-400 transition-all duration-200"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Other Resources */}
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center mb-4">
                  <Book className="h-5 w-5 mr-2 text-orange-400" />
                  Resources
                </h3>
                <nav className="space-y-2">
                  <Link
                    href="/stock-brokers-comparison"
                    className="group flex items-center text-sm text-gray-400 hover:text-orange-400 transition-all duration-200"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Broker Comparison</span>
                  </Link>
                  <Link
                    href="/blog"
                    className="group flex items-center text-sm text-gray-400 hover:text-orange-400 transition-all duration-200"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Market Blog</span>
                  </Link>
                  <Link
                    href="/glossary"
                    className="group flex items-center text-sm text-gray-400 hover:text-orange-400 transition-all duration-200"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Glossary</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Social Media & Products */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Social Media */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h3>
                <div className="flex justify-center lg:justify-start space-x-4">
                  {[
                    { href: gmpprovider.socialLinks.linkedin, icon: Linkedin, color: "hover:bg-blue-600/20 hover:text-blue-400" },
                    { href: gmpprovider.socialLinks.twitter, icon: Twitter, color: "hover:bg-blue-400/20 hover:text-blue-300" },
                    { href: gmpprovider.socialLinks.instagram, icon: Instagram, color: "hover:bg-pink-600/20 hover:text-pink-400" },
                    { href: gmpprovider.socialLinks.youtube, icon: Youtube, color: "hover:bg-red-600/20 hover:text-red-400" },
                  ].map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Our Products */}
              <div className="text-center lg:text-right">
                <Link href="/products">
                  <h3 className="text-lg font-semibold text-white mb-4 hover:text-yellow-400 transition-colors inline-flex items-center">
                    <Gift className="h-5 w-5 mr-2 text-yellow-400" />
                    Our Products
                  </h3>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                {[
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/terms-of-service", label: "Terms of Service" },
                  { href: "/disclaimer", label: "Disclaimer" },
                  { href: "/sitemap", label: "Sitemap" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm text-gray-400">© {new Date().getFullYear()} {gmpprovider.websiteName}. All rights reserved.</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center justify-center lg:justify-end">
                  Made with <span className="text-red-400 mx-1">❤</span> for Indian Investors
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <LeadsCaptureModal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)} />
    </>
  )
}
