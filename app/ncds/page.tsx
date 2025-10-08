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
  Shield,
  Percent,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface NCD {
  id: string
  companyName: string
  slug: string
  issueSize: string
  interestRate: string
  tenure: string
  rating: string
  minInvestment: string
  issueOpenDate: string
  issueCloseDate: string
  status: "Open" | "Upcoming" | "Closed"
  category: string
}

interface PageProps {
  searchParams: { search?: string }
}

// Revalidate every 30 minutes for NCD updates
export const revalidate = 1800

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NCD Issues 2025 – Non-Convertible Debentures List | Interest Rates & Ratings",
    description:
      "Check the latest NCD issues in 2025 with interest rates, credit ratings, tenure, and minimum investment. Track open and upcoming Non-Convertible Debenture offerings.",
    keywords:
      "NCD 2025, non-convertible debentures, NCD issues, NCD interest rates, NCD investment, corporate bonds, fixed income securities, NCD ratings",
    authors: [{ name: "NCD Team" }],
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
      title: "NCD Issues 2025 – Non-Convertible Debentures List",
      description:
        "Track the latest NCD issues in 2025 with interest rates, credit ratings, tenure, and minimum investment details.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/ncds",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/ncd-og.jpg",
          width: 1200,
          height: 630,
          alt: "NCD Issues 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "NCD Issues 2025",
      description: "Track the latest Non-Convertible Debenture issues with interest rates and credit ratings.",
      images: ["https://yoursite.com/images/ncd-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/ncds",
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

async function fetchNCDs(): Promise<NCD[]> {
  // Sample data - replace with actual API call
  return [
    {
      id: "1",
      companyName: "Bajaj Finance Ltd",
      slug: "bajaj-finance-ncd",
      issueSize: "₹5,000 Crores",
      interestRate: "8.25% - 8.85%",
      tenure: "36-60 Months",
      rating: "CRISIL AAA",
      minInvestment: "₹25,000",
      issueOpenDate: "2025-01-15",
      issueCloseDate: "2025-02-15",
      status: "Open",
      category: "NBFC",
    },
    {
      id: "2",
      companyName: "Shriram Finance Ltd",
      slug: "shriram-finance-ncd",
      issueSize: "₹3,500 Crores",
      interestRate: "8.50% - 9.10%",
      tenure: "24-48 Months",
      rating: "CARE AA+",
      minInvestment: "₹10,000",
      issueOpenDate: "2025-02-01",
      issueCloseDate: "2025-02-28",
      status: "Upcoming",
      category: "NBFC",
    },
  ]
}

export default async function NCDsPage({ searchParams }: PageProps) {
  const search = searchParams?.search || ""

  const ncds = await fetchNCDs()

  const filteredNCDs = search
    ? ncds.filter((ncd) => ncd.companyName.toLowerCase().includes(search.toLowerCase()))
    : ncds

  const openNCDs = filteredNCDs.filter((n) => n.status === "Open").length
  const upcomingNCDs = filteredNCDs.filter((n) => n.status === "Upcoming").length

  const faqs = [
    {
      q: "What are Non-Convertible Debentures (NCDs)?",
      a: "NCDs are fixed-income instruments issued by companies to raise long-term capital. They offer fixed interest rates and cannot be converted into equity shares. They are typically listed on stock exchanges for liquidity.",
    },
    {
      q: "What is the minimum investment in NCDs?",
      a: "The minimum investment varies by issuer but typically ranges from ₹10,000 to ₹25,000 per debenture. Some NCDs may have different minimum application amounts for retail and institutional investors.",
    },
    {
      q: "Are NCDs safe investments?",
      a: "NCDs carry credit risk based on the issuer's creditworthiness. Always check the credit rating from agencies like CRISIL, CARE, or ICRA. Higher-rated NCDs (AAA, AA) are considered safer but may offer lower returns.",
    },
    {
      q: "How is NCD interest paid?",
      a: "NCDs offer different interest payment options including monthly, quarterly, annual, or cumulative (paid at maturity). Choose the option that suits your cash flow requirements.",
    },
    {
      q: "Can I sell NCDs before maturity?",
      a: "Yes, listed NCDs can be sold on stock exchanges before maturity. However, you may get a price higher or lower than your purchase price depending on interest rate movements and market conditions.",
    },
    {
      q: "What is the tax treatment of NCD income?",
      a: "Interest income from NCDs is taxable as per your income tax slab. If you sell NCDs after holding for more than 12 months, capital gains are taxed at 10% without indexation or 20% with indexation.",
    },
    {
      q: "What are secured vs unsecured NCDs?",
      a: "Secured NCDs are backed by the company's assets, providing an additional layer of security. Unsecured NCDs have no such backing and rely solely on the issuer's creditworthiness. Secured NCDs typically offer lower interest rates.",
    },
    {
      q: "How to apply for NCDs?",
      a: "You can apply for NCDs through your broker's trading platform, banks, or directly through the company's registrar. You need a demat account and bank account to apply.",
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
            name: "NCD Issues 2025",
            description:
              "Complete list of Non-Convertible Debenture issues in 2025 with interest rates, credit ratings, and tenure details.",
            url: "https://yoursite.com/ncds",
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
                  name: "NCDs",
                  item: "https://yoursite.com/ncds",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-purple-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Shield className="h-4 w-4 mr-2" />
                Fixed Income Securities
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Non-Convertible Debentures 2025
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Invest in high-rated NCDs with attractive fixed interest rates. Track open and upcoming NCD issues.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{filteredNCDs.length}</div>
              </div>
              <div className="text-indigo-100 text-lg font-medium">Total NCDs</div>
              <div className="text-indigo-200 text-sm mt-1">Fixed income options</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{openNCDs}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Open Now</div>
              <div className="text-green-200 text-sm mt-1">Ready to invest</div>
            </div>

            <div className="group bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{upcomingNCDs}</div>
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
            <div className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">NCD Issues 2025</h2>
                  <p className="text-gray-600">Track fixed income investment opportunities</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              {filteredNCDs.length > 0 ? (
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
                        Interest Rate
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Tenure
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Rating
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Min Investment
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Issue Dates
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {filteredNCDs.map((ncd) => (
                      <tr
                        key={ncd.id}
                        className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 group"
                      >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {ncd.companyName.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <Link
                              href={`/ncds/${ncd.slug}`}
                              className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors group-hover:text-indigo-700"
                            >
                              {ncd.companyName}
                              <ArrowRight className="inline h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <div className="text-sm text-gray-500">{ncd.category}</div>
                          </div>
                        </div>
                      </td>
                        <td className="px-6 py-6">
                          <div className="text-lg font-bold text-gray-900">{ncd.issueSize}</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center">
                            <Percent className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-lg font-bold text-green-600">{ncd.interestRate}</span>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="text-gray-700 font-medium">{ncd.tenure}</div>
                        </td>
                        <td className="px-6 py-6">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800">
                            {ncd.rating}
                          </span>
                        </td>
                        <td className="px-6 py-6">
                          <div className="text-lg font-bold text-purple-600">{ncd.minInvestment}</div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="font-medium text-gray-600">Open:</span>{" "}
                              <span className="text-green-600 font-semibold">{formatDate(ncd.issueOpenDate)}</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium text-gray-600">Close:</span>{" "}
                              <span className="text-red-600 font-semibold">{formatDate(ncd.issueCloseDate)}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">{getStatusBadge(ncd.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="text-gray-500 text-xl mb-2">No NCD issues found</div>
                  <p className="text-gray-400">
                    {search ? `No NCDs match "${search}"` : "No NCD issues available at the moment"}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-indigo-600" />
                What are Non-Convertible Debentures (NCDs)?
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Non-Convertible Debentures (NCDs) are fixed-income instruments issued by companies to raise long-term
                  capital from the public. Unlike convertible debentures, NCDs cannot be converted into equity shares of
                  the issuing company. They offer fixed interest rates and are typically listed on stock exchanges,
                  providing liquidity to investors.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
                    <Building2 className="h-6 w-6 mr-3" />
                    Understanding NCDs
                  </h3>
                  <p className="text-indigo-800 leading-relaxed">
                    NCDs are debt instruments that companies use to raise funds for business expansion, working capital,
                    or refinancing existing debt. They come with a fixed tenure (typically 1-10 years) and offer regular
                    interest payments. The interest rate is usually higher than bank fixed deposits, making them
                    attractive for investors seeking better returns.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                      <Shield className="h-6 w-6 mr-3" />
                      Secured NCDs
                    </h4>
                    <p className="text-green-800 leading-relaxed">
                      Secured NCDs are backed by the company's assets, providing an additional layer of security to
                      investors. In case of default, investors have a claim on the company's assets. These typically offer
                      lower interest rates compared to unsecured NCDs due to lower risk.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                      <TrendingUp className="h-6 w-6 mr-3" />
                      Unsecured NCDs
                    </h4>
                    <p className="text-orange-800 leading-relaxed">
                      Unsecured NCDs are not backed by any collateral and rely solely on the issuer's creditworthiness.
                      They carry higher risk but offer higher interest rates to compensate. Investors should carefully
                      evaluate the credit rating before investing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Start investing in NCDs with India's largest broker</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 border border-indigo-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-indigo-600" />
              Key Benefits of NCD Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-indigo-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-indigo-900">Fixed Returns</h4>
                <p className="leading-relaxed">
                  NCDs offer predictable fixed interest returns, making them ideal for investors seeking stable income.
                  Interest can be received monthly, quarterly, annually, or at maturity.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-indigo-900">Higher Interest Rates</h4>
                <p className="leading-relaxed">
                  NCDs typically offer higher interest rates compared to traditional bank fixed deposits, providing better
                  returns on your investment over the tenure.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-indigo-900">Listed on Exchanges</h4>
                <p className="leading-relaxed">
                  Most NCDs are listed on stock exchanges, providing liquidity. Investors can sell them before maturity if
                  they need funds, though prices may vary based on market conditions.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-indigo-900">Credit Rating</h4>
                <p className="leading-relaxed">
                  NCDs come with credit ratings from agencies like CRISIL, CARE, and ICRA, helping investors assess the
                  creditworthiness and risk profile of the issuer.
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

