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
  Target,
  DollarSign,
  Award,
  Percent,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface BankFDRate {
  bankName: string
  category: string
  generalRate: string
  seniorCitizenRate: string
  tenure: string
  minDeposit: string
  lastUpdated: string
}

// Revalidate every 1 hour for bank rate updates (change less frequently)
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bank FD Interest Rates 2025 – Fixed Deposit Rates Comparison | Best FD Rates in India",
    description:
      "Compare bank FD interest rates 2025 for all major banks in India. Check latest fixed deposit rates for general and senior citizens with tenure and minimum deposit details.",
    keywords:
      "FD interest rates 2025, fixed deposit rates, bank FD rates, FD rates comparison, best FD rates, senior citizen FD rates, highest FD rates",
    authors: [{ name: "Bank FD Rates Team" }],
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
      title: "Bank FD Interest Rates 2025 – Fixed Deposit Rates Comparison",
      description:
        "Compare bank FD interest rates 2025 for all major banks in India. Find the best fixed deposit rates.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/bank-fd-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/bank-fd-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "Bank FD Interest Rates 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bank FD Interest Rates 2025",
      description: "Compare bank FD interest rates for all major banks in India.",
      images: ["https://yoursite.com/images/bank-fd-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/bank-fd-rates",
    },
  }
}

async function fetchBankFDRates(): Promise<BankFDRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      bankName: "State Bank of India",
      category: "Public Sector",
      generalRate: "6.50% - 7.10%",
      seniorCitizenRate: "7.00% - 7.60%",
      tenure: "1 year - 10 years",
      minDeposit: "₹1,000",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "HDFC Bank",
      category: "Private Sector",
      generalRate: "7.00% - 7.40%",
      seniorCitizenRate: "7.50% - 7.90%",
      tenure: "1 year - 10 years",
      minDeposit: "₹5,000",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "ICICI Bank",
      category: "Private Sector",
      generalRate: "7.00% - 7.20%",
      seniorCitizenRate: "7.50% - 7.75%",
      tenure: "1 year - 10 years",
      minDeposit: "₹5,000",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "Axis Bank",
      category: "Private Sector",
      generalRate: "7.10% - 7.60%",
      seniorCitizenRate: "7.60% - 8.10%",
      tenure: "1 year - 10 years",
      minDeposit: "₹5,000",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "Punjab National Bank",
      category: "Public Sector",
      generalRate: "6.50% - 7.25%",
      seniorCitizenRate: "7.00% - 7.75%",
      tenure: "1 year - 10 years",
      minDeposit: "₹1,000",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "Bank of Baroda",
      category: "Public Sector",
      generalRate: "6.50% - 7.15%",
      seniorCitizenRate: "7.00% - 7.65%",
      tenure: "1 year - 10 years",
      minDeposit: "₹1,000",
      lastUpdated: new Date().toISOString(),
    },
  ]
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default async function BankFDRatesPage() {
  const fdRates = await fetchBankFDRates()

  const publicSectorBanks = fdRates.filter((b) => b.category === "Public Sector").length
  const privateSectorBanks = fdRates.filter((b) => b.category === "Private Sector").length

  const faqs = [
    {
      q: "What is a Fixed Deposit (FD)?",
      a: "A Fixed Deposit is a financial instrument offered by banks where you deposit a lump sum amount for a fixed tenure at a predetermined interest rate. The principal and interest are paid back at maturity.",
    },
    {
      q: "What is the minimum tenure for a Fixed Deposit?",
      a: "The minimum tenure for FD varies by bank but typically ranges from 7 days to 10 years. Most banks offer FDs starting from 1 month with higher interest rates for longer tenures.",
    },
    {
      q: "Is FD interest taxable?",
      a: "Yes, FD interest is taxable as per your income tax slab. Banks deduct TDS (Tax Deducted at Source) if annual interest exceeds ₹40,000 for general citizens and ₹50,000 for senior citizens.",
    },
    {
      q: "What is the difference between cumulative and non-cumulative FD?",
      a: "In cumulative FD, interest is compounded and paid at maturity along with principal. In non-cumulative FD, interest is paid out at regular intervals (monthly, quarterly, or annually) while principal remains invested.",
    },
    {
      q: "Can I break my FD before maturity?",
      a: "Yes, you can prematurely close your FD before maturity. However, banks charge a penalty (typically 0.5-1% lower than the contracted rate) and you receive interest for the period the deposit was held.",
    },
    {
      q: "What is the interest rate for senior citizens on FD?",
      a: "Most banks offer additional interest of 0.25% to 0.75% on FDs for senior citizens (above 60 years). Some banks offer even higher rates, making FDs attractive for senior citizens.",
    },
    {
      q: "Are Fixed Deposits safe?",
      a: "Yes, bank FDs are considered one of the safest investment options. Deposits up to ₹5 lakh per depositor per bank are insured by the Deposit Insurance and Credit Guarantee Corporation (DICGC).",
    },
    {
      q: "Can I take a loan against my FD?",
      a: "Yes, most banks offer loans against FDs typically up to 90-95% of the deposit value. Interest rates on such loans are usually 1-2% above the FD interest rate, and your FD remains intact.",
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
            name: "Bank FD Interest Rates 2025",
            description: "Compare bank FD interest rates for all major banks in India with tenure and minimum deposit details.",
            url: "https://yoursite.com/bank-fd-rates",
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
                  name: "Bank FD Rates",
                  item: "https://yoursite.com/bank-fd-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Award className="h-4 w-4 mr-2" />
                Safe Investment Option
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Bank FD Interest Rates 2025
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Compare fixed deposit interest rates from all major banks. Find the best FD rates for your investment.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{fdRates.length}</div>
              </div>
              <div className="text-blue-100 text-lg font-medium">Total Banks</div>
              <div className="text-blue-200 text-sm mt-1">FD options available</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{publicSectorBanks}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Public Sector</div>
              <div className="text-green-200 text-sm mt-1">Government banks</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{privateSectorBanks}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">Private Sector</div>
              <div className="text-purple-200 text-sm mt-1">Private banks</div>
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
                Open Savings Account
              </Link>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Bank-wise FD Interest Rates</h2>
                  <p className="text-gray-600">Compare fixed deposit rates across major banks</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(fdRates[0].lastUpdated)}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Bank Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      General Rate
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Senior Citizen Rate
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Tenure
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Min Deposit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {fdRates.map((rate, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {rate.bankName.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <Link
                              href={`/bank-fd-rates/${rate.bankName.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors group-hover:text-blue-700"
                            >
                              {rate.bankName}
                              <ArrowRight className="inline h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                          {rate.category}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <Percent className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-lg font-bold text-green-600">{rate.generalRate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <Percent className="h-4 w-4 text-purple-600 mr-2" />
                          <span className="text-lg font-bold text-purple-600">{rate.seniorCitizenRate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-gray-700 font-medium">{rate.tenure}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-lg font-bold text-blue-600">{rate.minDeposit}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-blue-600" />
                Understanding Fixed Deposits
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Fixed Deposits (FDs) are one of the safest investment options offered by banks where you deposit a lump
                  sum amount for a fixed period at a predetermined interest rate. FDs offer guaranteed returns and are
                  ideal for risk-averse investors seeking stable income. Interest rates vary based on the deposit amount,
                  tenure, and bank policies.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <Building2 className="h-6 w-6 mr-3" />
                    Types of Fixed Deposits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                    <div>
                      <h4 className="font-bold mb-2">Regular FD</h4>
                      <p className="text-sm">Standard FD with fixed tenure and interest rate. Suitable for general investors.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Tax-Saver FD</h4>
                      <p className="text-sm">5-year lock-in period with tax deduction benefits under Section 80C (up to ₹1.5 lakh).</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Senior Citizen FD</h4>
                      <p className="text-sm">Higher interest rates (0.25-0.75% extra) for individuals above 60 years of age.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Flexi FD</h4>
                      <p className="text-sm">Linked to savings account with automatic sweep-in/out facility for better returns.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-4">Advantages</h4>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li>✓ Guaranteed fixed returns</li>
                      <li>✓ No market risk exposure</li>
                      <li>✓ Deposit insurance up to ₹5 lakh</li>
                      <li>✓ Loan facility against FD</li>
                      <li>✓ Flexible tenure options</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-4">Things to Consider</h4>
                    <ul className="text-orange-800 space-y-2 text-sm">
                      <li>• Interest is fully taxable</li>
                      <li>• Returns may not beat inflation</li>
                      <li>• Premature withdrawal penalty</li>
                      <li>• Lock-in period in tax-saver FDs</li>
                      <li>• Lower returns vs market-linked products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Open a savings account and start investing in FDs</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-blue-600" />
              Tips for Choosing the Best FD
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Compare Interest Rates</h4>
                <p className="leading-relaxed">
                  Compare FD rates across multiple banks. Small private banks and NBFCs often offer higher rates but check
                  their credit ratings and safety.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Ladder Your FDs</h4>
                <p className="leading-relaxed">
                  Spread your investment across multiple FDs with different maturity dates. This provides regular liquidity
                  and allows you to benefit from rising interest rates.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Consider Tax Implications</h4>
                <p className="leading-relaxed">
                  FD interest is fully taxable. If you're in a high tax bracket, consider tax-free bonds or equity mutual
                  funds for better post-tax returns.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Check Premature Withdrawal Terms</h4>
                <p className="leading-relaxed">
                  Understand the penalty charges for premature withdrawal before investing. Some banks offer more flexible
                  terms than others.
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

