import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CTAButton } from "@/components/cta-button"
import {
  ArrowLeft,
  Calendar,
  Building2,
  Shield,
  Percent,
  Info,
  Target,
  Award,
  TrendingUp,
  FileText,
  Users,
  DollarSign,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface NCDDetail {
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
  description: string
  objectives: string[]
  features: string[]
  riskFactors: string[]
  securityDetails: string
  issueDetails: {
    faceValue: string
    issuePrice: string
    minimumApplication: string
    allotmentDate: string
    listingDate: string
  }
  creditRating: {
    agency: string
    rating: string
    outlook: string
  }
  interestPayment: string
  redemption: string
}

async function fetchNCDDetail(slug: string): Promise<NCDDetail | null> {
  // Sample data - replace with actual API call
  const sampleNCDs: NCDDetail[] = [
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
      description: "Bajaj Finance Limited, a leading non-banking financial company (NBFC) in India, is issuing Non-Convertible Debentures to raise funds for its business operations and expansion plans. The company has a strong track record of timely payments and maintains high credit ratings.",
      objectives: [
        "To finance the growth of lending business",
        "To meet the funding requirements for on-lending activities",
        "To refinance existing borrowings",
        "To strengthen capital base for future business expansion",
      ],
      features: [
        "High credit rating ensuring safety of investment",
        "Attractive interest rates competitive with market",
        "Flexible tenure options from 36 to 60 months",
        "Listed on stock exchanges for liquidity",
        "Option for monthly, quarterly, or annual interest payment",
        "Secured by charge on receivables",
      ],
      riskFactors: [
        "Credit risk associated with the company's ability to service debt",
        "Interest rate risk - Fixed returns may be impacted by market rate changes",
        "Liquidity risk - May not be able to sell before maturity at desired price",
        "Market risk - Secondary market prices may fluctuate",
        "Regulatory risk - Changes in RBI/SEBI regulations may impact operations",
      ],
      securityDetails: "Secured by way of first pari-passu charge on the Standard Receivables of the Company.",
      issueDetails: {
        faceValue: "₹1,000 per NCD",
        issuePrice: "₹1,000 per NCD",
        minimumApplication: "25 NCDs (₹25,000)",
        allotmentDate: "2025-02-20",
        listingDate: "2025-02-25",
      },
      creditRating: {
        agency: "CRISIL",
        rating: "CRISIL AAA/Stable",
        outlook: "Stable",
      },
      interestPayment: "Monthly / Quarterly / Annual / Cumulative options available",
      redemption: "On maturity at face value",
    },
  ]

  return sampleNCDs.find((ncd) => ncd.slug === slug) || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ncd = await fetchNCDDetail(params.slug)

  if (!ncd) {
    return {
      title: "NCD Not Found",
    }
  }

  return {
    title: `${ncd.companyName} NCD ${new Date().getFullYear()} - Interest Rate, Tenure & Details`,
    description: `${ncd.companyName} NCD offering ${ncd.interestRate} interest for ${ncd.tenure}. Credit rating: ${ncd.rating}. Check complete details, features, and how to apply.`,
    keywords: `${ncd.companyName} NCD, ${ncd.companyName} bonds, NCD interest rate, ${ncd.category} NCD`,
    openGraph: {
      title: `${ncd.companyName} NCD ${new Date().getFullYear()}`,
      description: `Interest Rate: ${ncd.interestRate} | Tenure: ${ncd.tenure} | Rating: ${ncd.rating}`,
      type: "website",
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

export default async function NCDDetailPage({ params }: { params: { slug: string } }) {
  const ncd = await fetchNCDDetail(params.slug)

  if (!ncd) {
    notFound()
  }

  const faqs = [
    {
      q: `What is the interest rate for ${ncd.companyName} NCD?`,
      a: `${ncd.companyName} is offering interest rates ranging from ${ncd.interestRate} depending on the tenure selected. Higher tenure options typically offer higher interest rates.`,
    },
    {
      q: `Is ${ncd.companyName} NCD safe to invest?`,
      a: `${ncd.companyName} NCD has a credit rating of ${ncd.rating}, which indicates high credit quality and low credit risk. The NCDs are also ${ncd.securityDetails}`,
    },
    {
      q: "How to apply for this NCD?",
      a: `You can apply through your broker's trading platform, banks, or directly through the company's registrar. You need a demat account, PAN card, and bank account to apply.`,
    },
    {
      q: "What is the minimum investment required?",
      a: `The minimum investment is ${ncd.minInvestment} which corresponds to ${ncd.issueDetails.minimumApplication}.`,
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            name: `${ncd.companyName} NCD`,
            description: ncd.description,
            provider: {
              "@type": "Organization",
              name: ncd.companyName,
            },
            offers: {
              "@type": "Offer",
              price: ncd.minInvestment,
              priceCurrency: "INR",
              availability: ncd.status === "Open" ? "InStock" : "PreOrder",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-12">
            <Link
              href="/ncds"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All NCDs
            </Link>

            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4 mr-2" />
                {ncd.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{ncd.companyName} NCD 2025</h1>
              <p className="text-xl text-blue-100 mb-6">{ncd.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-blue-200 text-sm mb-1">Interest Rate</div>
                  <div className="text-2xl font-bold">{ncd.interestRate}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-blue-200 text-sm mb-1">Tenure</div>
                  <div className="text-2xl font-bold">{ncd.tenure}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-blue-200 text-sm mb-1">Credit Rating</div>
                  <div className="text-2xl font-bold">{ncd.rating}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-blue-200 text-sm mb-1">Min Investment</div>
                  <div className="text-2xl font-bold">{ncd.minInvestment}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Issue Timeline */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-indigo-600" />
              Issue Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-2">Issue Opens</div>
                <div className="text-lg font-bold text-green-600">{formatDate(ncd.issueOpenDate)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-2">Issue Closes</div>
                <div className="text-lg font-bold text-red-600">{formatDate(ncd.issueCloseDate)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-2">Status</div>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                    ncd.status === "Open"
                      ? "bg-green-100 text-green-800"
                      : ncd.status === "Upcoming"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {ncd.status}
                </span>
              </div>
            </div>
          </div>

          {/* Issue Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-indigo-600" />
              Issue Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Face Value</span>
                <span className="font-semibold">{ncd.issueDetails.faceValue}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Issue Price</span>
                <span className="font-semibold">{ncd.issueDetails.issuePrice}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Issue Size</span>
                <span className="font-semibold">{ncd.issueSize}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Minimum Application</span>
                <span className="font-semibold">{ncd.issueDetails.minimumApplication}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Allotment Date</span>
                <span className="font-semibold">{formatDate(ncd.issueDetails.allotmentDate)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Listing Date</span>
                <span className="font-semibold">{formatDate(ncd.issueDetails.listingDate)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Interest Payment</span>
                <span className="font-semibold">{ncd.interestPayment}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Redemption</span>
                <span className="font-semibold">{ncd.redemption}</span>
              </div>
            </div>
          </div>

          {/* Credit Rating */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-indigo-600" />
              Credit Rating
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Rating Agency</div>
                  <div className="text-xl font-bold text-gray-900">{ncd.creditRating.agency}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2">Rating</div>
                  <div className="text-xl font-bold text-yellow-600">{ncd.creditRating.rating}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2">Outlook</div>
                  <div className="text-xl font-bold text-green-600">{ncd.creditRating.outlook}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-indigo-600" />
              Security Details
            </h2>
            <p className="text-gray-700">{ncd.securityDetails}</p>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 mr-3 text-indigo-600" />
              Objectives of the Issue
            </h2>
            <ul className="space-y-3">
              {ncd.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-indigo-600" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ncd.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4">
                  <Percent className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Factors */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 mr-3 text-red-600" />
              Risk Factors
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <ul className="space-y-3">
                {ncd.riskFactors.map((risk, index) => (
                  <li key={index} className="flex items-start text-red-800">
                    <span className="mr-3">⚠️</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Open a demat account to apply for this NCD</p>
          </div>

          <OtherInvestmentOptionWithDemat />
        </div>

        {/* FAQ Section */}
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

