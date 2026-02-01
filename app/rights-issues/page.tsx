import type { Metadata } from "next"
import Link from "next/link"
import { CTAButton } from "@/components/cta-button"
import {
  TrendingUp,
  Calendar,
  Building2,
  Star,
  ArrowRight,
  Info,
  Users,
  FileText,
  Target,
  DollarSign,
  Award,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface RightsIssue {
  id: string
  companyName: string
  slug: string
  issueSize: string
  rightsRatio: string
  issuePrice: string
  recordDate: string
  issueOpenDate: string
  issueCloseDate: string
  marketPrice: string
  discount: string
  status: "Open" | "Upcoming" | "Closed"
  exchange: string[]
}

interface PageProps {
  searchParams: Promise<{ search?: string }>
}

// Revalidate every 30 minutes for rights issue updates
export const revalidate = 1800

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rights Issues 2025 – Rights Entitlement List | Record Dates & Pricing",
    description:
      "Check the latest rights issues in 2025 with record dates, issue price, rights ratio, and market discount. Track open and upcoming rights entitlements.",
    keywords:
      "rights issue 2025, rights entitlement, rights shares, record date, rights ratio, rights pricing, equity dilution",
    authors: [{ name: "Rights Issues Team" }],
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
      title: "Rights Issues 2025 – Rights Entitlement List",
      description:
        "Track the latest rights issues in 2025 with record dates, issue price, rights ratio, and market discount details.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/rights-issues",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/rights-issues-og.jpg",
          width: 1200,
          height: 630,
          alt: "Rights Issues 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Rights Issues 2025",
      description: "Track the latest rights issues with record dates and issue pricing.",
      images: ["https://yoursite.com/images/rights-issues-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/rights-issues",
    },
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

function getStatusBadge(status: string) {
  const statusStyles = {
    Open: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg",
    Upcoming: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg",
    Closed: "bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg",
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${statusStyles[status as keyof typeof statusStyles]}`}
    >
      {status}
    </span>
  )
}

async function fetchRightsIssues(): Promise<RightsIssue[]> {
  // Sample data - replace with actual API call
  return [
    {
      id: "1",
      companyName: "Reliance Industries Ltd",
      slug: "reliance-industries-rights",
      issueSize: "₹15,000 Crores",
      rightsRatio: "1:10",
      issuePrice: "₹1,250",
      recordDate: "2025-01-20",
      issueOpenDate: "2025-02-01",
      issueCloseDate: "2025-02-15",
      marketPrice: "₹1,450",
      discount: "13.8%",
      status: "Upcoming",
      exchange: ["NSE", "BSE"],
    },
    {
      id: "2",
      companyName: "Tata Steel Ltd",
      slug: "tata-steel-rights",
      issueSize: "₹8,500 Crores",
      rightsRatio: "1:15",
      issuePrice: "₹105",
      recordDate: "2025-01-10",
      issueOpenDate: "2025-01-20",
      issueCloseDate: "2025-02-05",
      marketPrice: "₹125",
      discount: "16.0%",
      status: "Open",
      exchange: ["NSE", "BSE"],
    },
  ]
}

export default async function RightsIssuesPage({ searchParams }: PageProps) {
  const { search = "" } = await searchParams

  const rightsIssues = await fetchRightsIssues()

  const filteredIssues = search
    ? rightsIssues.filter((issue) => issue.companyName.toLowerCase().includes(search.toLowerCase()))
    : rightsIssues

  const openIssues = filteredIssues.filter((i) => i.status === "Open").length
  const upcomingIssues = filteredIssues.filter((i) => i.status === "Upcoming").length

  const faqs = [
    {
      q: "What is a Rights Issue?",
      a: "A rights issue is when a company offers additional shares to its existing shareholders in proportion to their current holdings. Shareholders receive the right to buy these shares at a discounted price before the company offers them to the general public.",
    },
    {
      q: "What is a Rights Ratio?",
      a: "Rights ratio (e.g., 1:10) indicates how many new shares a shareholder can buy for each share they already own. A 1:10 ratio means you can buy 1 new share for every 10 shares you hold.",
    },
    {
      q: "What is the Record Date?",
      a: "The record date is the cut-off date set by the company to determine which shareholders are eligible to participate in the rights issue. You must hold shares before this date to receive rights entitlement.",
    },
    {
      q: "Can I sell my rights entitlement?",
      a: "Yes, rights entitlements are tradable on stock exchanges. If you don't wish to subscribe, you can sell your rights (called Rights Entitlement or RE) in the market during the trading period.",
    },
    {
      q: "What happens if I don't apply for rights shares?",
      a: "If you don't apply, your rights will lapse, and you'll lose the opportunity to buy shares at a discounted price. Your shareholding percentage in the company will also get diluted.",
    },
    {
      q: "Are rights issues good or bad for investors?",
      a: "Rights issues can be positive if the company uses the funds for growth and expansion. However, they cause dilution of existing shareholding. Investors should evaluate the company's purpose for raising funds and future prospects.",
    },
    {
      q: "How to apply for rights shares?",
      a: "You can apply for rights shares through your broker's trading platform, ASBA facility, or UPI-enabled applications. You need to have the shares before the record date to be eligible.",
    },
    {
      q: "What is the difference between rights issue and IPO?",
      a: "Rights issues are offered only to existing shareholders at a discounted price, while IPOs are offered to the general public at market-determined prices. Rights issues don't change the company's shareholder base significantly.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Rights Issues 2025",
            description:
              "Complete list of rights issues in 2025 with record dates, issue price, rights ratio, and discount details.",
            url: "https://yoursite.com/rights-issues",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://yoursite.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Rights Issues",
                  item: "https://yoursite.com/rights-issues",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-rose-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(219,39,119,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Award className="h-4 w-4 mr-2" />
                Shareholder Benefits
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Rights Issues 2025</h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Track rights entitlements and subscribe to discounted shares. Never miss your shareholder benefits.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{filteredIssues.length}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">Total Rights Issues</div>
              <div className="text-purple-200 text-sm mt-1">Active opportunities</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{openIssues}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Open Now</div>
              <div className="text-green-200 text-sm mt-1">Ready to subscribe</div>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{upcomingIssues}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">Upcoming</div>
              <div className="text-blue-200 text-sm mt-1">Coming soon</div>
            </div>

            <div className="group bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4 inline-flex items-center">
                <DollarSign className="h-6 w-6 text-white mr-2" />
              </div>
              <Link
                href="https://zerodha.com/?c=QT4498&s=CONSOLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-100 text-lg font-medium hover:underline inline-block"
              >
                Open Demat with Zerodha
              </Link>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Rights Issues 2025</h2>
                  <p className="text-gray-600">Track shareholder entitlements and discounted opportunities</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              {filteredIssues.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Company Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Issue Size
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Rights Ratio
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Pricing
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Record Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Issue Dates
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Exchange
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {filteredIssues.map((issue) => (
                      <tr
                        key={issue.id}
                        className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
                      >
                        <td className="px-6 py-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                              {issue.companyName.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <Link
                                href={`/rights-issues/${issue.slug}`}
                                className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors group-hover:text-purple-700"
                              >
                                {issue.companyName}
                                <ArrowRight className="inline h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="text-lg font-bold text-gray-900">{issue.issueSize}</div>
                        </td>
                        <td className="px-6 py-6">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                            {issue.rightsRatio}
                          </span>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div>
                              <span className="text-sm text-gray-500">Issue: </span>
                              <span className="text-lg font-bold text-gray-900">{issue.issuePrice}</span>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">Market: </span>
                              <span className="text-sm font-medium text-gray-700">{issue.marketPrice}</span>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-green-600">Discount: {issue.discount}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="text-lg font-semibold text-purple-600">{formatDate(issue.recordDate)}</div>
                          <div className="text-sm text-gray-500">Eligibility date</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="font-medium text-gray-600">Open:</span>{" "}
                              <span className="text-green-600 font-semibold">{formatDate(issue.issueOpenDate)}</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium text-gray-600">Close:</span>{" "}
                              <span className="text-red-600 font-semibold">{formatDate(issue.issueCloseDate)}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <span className="inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200">
                            <Building2 className="h-4 w-4 mr-1" />
                            {issue.exchange.join(", ")}
                          </span>
                        </td>
                        <td className="px-6 py-6">{getStatusBadge(issue.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="text-gray-500 text-xl mb-2">No rights issues found</div>
                  <p className="text-gray-400">
                    {search ? `No issues match "${search}"` : "No rights issues available at the moment"}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-purple-600" />
                What is a Rights Issue?
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  A rights issue is a way for a company to raise additional capital by offering new shares to its existing
                  shareholders. These shares are offered in proportion to their current holdings and at a price that is
                  typically at a discount to the current market price. This gives existing shareholders the preferential
                  right to buy additional shares before the company offers them to the general public.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
                    <Building2 className="h-6 w-6 mr-3" />
                    Understanding Rights Issues
                  </h3>
                  <p className="text-purple-800 leading-relaxed">
                    Rights issues allow companies to raise funds for various purposes such as business expansion, debt
                    reduction, or working capital requirements. The rights ratio (e.g., 1:5) determines how many new shares
                    a shareholder can buy for each share they currently own. Rights are tradable, meaning shareholders who
                    don't wish to subscribe can sell their entitlements in the market.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 mr-3" />
                      Benefits for Shareholders
                    </h4>
                    <p className="text-green-800 leading-relaxed">
                      Rights issues allow existing shareholders to maintain their ownership percentage and buy shares at a
                      discount. They also have the option to sell their rights entitlement if they don't want to subscribe,
                      potentially generating additional value.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                      <FileText className="h-6 w-6 mr-3" />
                      Rights Issue Process
                    </h4>
                    <p className="text-orange-800 leading-relaxed">
                      The company announces the record date, rights ratio, and issue price. Eligible shareholders receive
                      rights entitlements which can be exercised, sold, or allowed to lapse. The application process is
                      similar to IPO applications through brokers or UPI platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Subscribe to rights issues with India's largest broker</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 border border-purple-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-purple-600" />
              Key Points About Rights Issues
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-purple-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-purple-900">Discounted Pricing</h4>
                <p className="leading-relaxed">
                  Rights shares are typically offered at a discount to the current market price, providing existing
                  shareholders an opportunity to buy shares at a lower price.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-purple-900">Maintain Ownership</h4>
                <p className="leading-relaxed">
                  Subscribing to rights issues allows you to maintain your ownership percentage in the company, preventing
                  dilution of your stake.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-purple-900">Tradable Rights</h4>
                <p className="leading-relaxed">
                  Rights entitlements (RE) are tradable on stock exchanges. If you don't want to subscribe, you can sell
                  your rights to other investors.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-purple-900">Record Date Eligibility</h4>
                <p className="leading-relaxed">
                  You must be a shareholder before the record date to be eligible for the rights issue. Check the record
                  date and buy shares accordingly.
                </p>
              </div>
            </div>
          </div>

          <OtherInvestmentOptionWithDemat />
        </div>

        {faqs.length > 0 && (
          <section className="mt-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
                Frequently Asked Questions
              </h2>

              {faqs.map((faq, idx) => (
                <details key={idx} className="mb-4 rounded-md bg-gray-50 p-4 shadow">
                  <summary className="cursor-pointer font-medium text-lg text-blue-700">{faq.q}</summary>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
                </details>
              ))}

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.q,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.a,
                      },
                    })),
                  }),
                }}
              />
            </div>
          </section>
        )}
      </div>
    </>
  )
}

