import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, DollarSign, Building2, TrendingUp, Target, Users, Star } from 'lucide-react'
import { CTAButton } from "@/components/cta-button"
import { IpoFinancialReport } from "@/components/ipo-financial-report"
import { IpoValuationSection } from "@/components/ipo-valuation-section"
import { PeerGroupComparison } from "@/components/peer-group-comparison"
import { ObjectsOfTheIssue } from "@/components/objects-of-the-issue"
import { IpoReviewSources } from "@/components/ipo-review-sources"
import { IpoRegistrarDetails } from "@/components/ipo-registrar-details"
import { IpoLeadManagers } from "@/components/ipo-lead-managers"
import { CompanyAddress } from "@/components/company-address"
import { IpoDetailsSection } from "@/components/ipo-details-section"
import { IpoMarketLotTable } from "@/components/ipo-market-lot-table"

// ---------- helpers ----------
const API_URL = process.env.NEXT_PUBLIC_API_URL
console.log("Backend API URL:", API_URL)

function pickFirstDoc(json) {
  return json?.docs?.[0] ?? null
}
function toINDate(dateISO) {
  if (!dateISO) return "-"
  const d = new Date(dateISO)
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })
}
function parseFirstNumber(str) {
  if (!str) return null
  const m = String(str).replaceAll(",", "").match(/-?\d+(\.\d+)?/)
  return m ? Number(m[0]) : null
}
function parseTwoNumbers(str) {
  if (!str) return [null, null]
  const nums = String(str).replaceAll(",", "").match(/-?\d+(\.\d+)?/g) || []
  return [nums[0] ? Number(nums[0]) : null, nums[1] ? Number(nums[1]) : null]
}
function joinUnique(arr) {
  return Array.from(new Set((arr || []).filter(Boolean))).join(", ")
}
function stripLexicalToText(node) {
  try {
    const visit = (n) => {
      if (!n) return ""
      if (n.type === "text") return n.text || ""
      if (n.type === "linebreak") return "\n"
      const kids = (n.children || []).map(visit).join("")
      return kids
    }
    return visit(node?.root) || ""
  } catch {
    return ""
  }
}

// ---------- data fetchers ----------
async function fetchIPO(slug) {
  const url = `${API_URL}/ipos/by-slug/${encodeURIComponent(slug)}`
  const res = await fetch(url, { next: { revalidate: 600 } })

  if (!res.ok) {
    throw new Error(`API ${res.status}`)
  }

  const doc = await res.json()
  return doc
}


// Map API doc -> UI shape you already use
function mapDocToUI(doc) {
  const listing = doc?.listing || []
  const exchangePlatform = joinUnique(listing)
  const issueType = doc?.issue_type || "-"
  const priceBandText = doc?.price_band_text
  const [pbLow, pbHigh] = parseTwoNumbers(priceBandText)
  const lotSizeText = doc?.lot_size_text
  const marketLotFromText = parseFirstNumber(lotSizeText)

  // timeline
  const tl = doc?.timeline || {}
  const openDate = tl?.open_date || doc?.published_on || null
  const closeDate = tl?.close_date || null
  const allotmentDate = tl?.allotment_date || null
  const refundsDate = tl?.refunds_date || null
  const creditDate = tl?.credit_to_demat_date || null
  const listingDate = tl?.listing_date || null

  // docs/links
  const links = doc?.docs_links || {}
  const drhpLink = links?.drhp_url && links.drhp_url !== "Click Here" ? links.drhp_url : ""
  const rhpLink = links?.rhp_url && links.rhp_url !== "Click Here" ? links.rhp_url : ""
  const anchorLink = links?.anchor_investors_url && links.anchor_investors_url !== "Click Here" ? links.anchor_investors_url : ""

  // company
  const companyName =
    (doc?.company?.name || doc?.title || "").replace(/\s+IPO.*$/i, "").trim() || "Company"
  const companyDesc = stripLexicalToText(doc?.company?.description)

  // amounts
  const issueSizeText = doc?.issue_size_text || ""
  const freshIssueText = doc?.fresh_issue_text || ""
  const ofsText = doc?.ofs_text || ""

  // financials
  const fin = doc?.financial_report || []
  const financials = {
    summary: companyDesc || `${companyName} has shared recent financials as below.`,
    table: fin.map((r) => ({
      period: String(r?.period ?? "-").trim(),
      revenue: (r?.revenue_text ?? "-").toString().trim(),
      expense: (r?.expense_text ?? "-").toString().trim(),
      profitAfterTax: (r?.pat_text ?? "-").toString().trim(),
      assets: (r?.assets_text ?? "-").toString().trim(),
    })),
  }

  // valuation
  const v = doc?.valuation_kpis || {}
  const valuation = {
    roe: v?.roe || "—",
    roce: v?.roce || "—",
    ebitdaMargin: v?.ebitda_margin || "—",
    patMargin: v?.pat_margin || "—",
    debtToEquity: v?.debt_to_equity || "—",
    eps: v?.eps_basic || v?.eps_diluted || "—",
    peRatio: v?.pe_ratio || "—",
    ronw: v?.ronw || "—",
    nav: v?.nav || "—",
  }

  // peers
  const peers = (doc?.peers || []).map((p) => ({
    name: p?.company || "-",
    eps: p?.eps || "—",
    peRatio: p?.pe_ratio || "—",
    ronw: p?.ronw || "—",
    nav: p?.nav || "—",
    income: p?.income || "—",
  }))

  // objects of issue
  const objects = (doc?.objects_of_issue || [])
    .map((o) => o?.objective)
    .filter(Boolean)

  // reviews -> simple strings
  const reviews = (doc?.broker_reviews || [])
    .map((r) => (r?.broker || "").trim())
    .filter(Boolean)

  // registrar / leads / address
  const registrar = {
    name: doc?.registrar?.name || "-",
    phone: doc?.registrar?.phone || "",
    email: doc?.registrar?.email || "",
    website: doc?.registrar?.website || "",
  }
  const leadManagers = (doc?.lead_managers || []).map((m) => m?.name).filter(Boolean)
  const companyContact = {
    name: companyName,
    address: (doc?.company?.address || "").trim(),
    phone: (doc?.company?.phone || "").trim(),
    email: (doc?.company?.email || "").trim(),
    website: (doc?.company?.website || "").trim(),
  }

  // market lot table
  const lotPrice = pbHigh ? pbHigh : null
  const retailMaxLots =
    parseFirstNumber(
      (doc?.market_lot || []).find((x) => /Retail Maximum/i.test(x?.applicant_type || ""))?.lots_text
    ) || 13
  const marketLot =
    marketLotFromText ||
    parseFirstNumber(
      (doc?.market_lot || []).find((x) => /Retail Minimum/i.test(x?.applicant_type || ""))?.shares_text
    ) ||
    parseFirstNumber(
      (doc?.market_lot || []).find((x) => /Retail Minimum/i.test(x?.applicant_type || ""))?.lots_text
    ) ||
    1

  return {
    companyName,
    exchangePlatform,
    ipoType: issueType,
    priceBandLow: pbLow,
    priceBandHigh: pbHigh,
    openDate,
    closeDate,
    allotmentDate,
    refundsDate,
    creditDate,
    listingDate,
    drhpLink,
    rhpLink,
    anchorLink,
    ipoSize: issueSizeText || "-",
    freshIssue: freshIssueText || "-",
    ofs: ofsText || "-",
    financials,
    valuation,
    peers,
    objects,
    reviews,
    registrar,
    leadManagers,
    companyContact,
    marketLot,
    lotPrice,
    retailMaxLots,
  }
}

// ---------- Metadata ----------
export async function generateMetadata({ params }) {
  // Await params before using its properties (Next.js App Router requirement)
  const { slug } = await params
  const doc = await fetchIPO(slug).catch(() => null)
  if (!doc) return { title: "IPO Not Found" }

  const ui = mapDocToUI(doc)
  const low = ui.priceBandLow ? `₹${ui.priceBandLow}` : "Price"
  const high = ui.priceBandHigh ? `₹${ui.priceBandHigh}` : "Band"
  const open = ui.openDate ? toINDate(ui.openDate) : "TBA"
  const close = ui.closeDate ? toINDate(ui.closeDate) : "TBA"

  return {
    title: `${ui.companyName} IPO Date, Review, Price, Allotment Details 2025 – Price Band ${low}-${high} | Dates & Review`,
    description: `Get complete details about ${ui.companyName} IPO including price band ${low}-${high}, issue dates ${open} to ${close}, lot size ${ui.marketLot} shares, and ${ui.exchangePlatform} listing.`,
  }
}

// ---------- Page ----------
export default async function IPODetailsPage({ params }) {
  // Await params before using its properties (Next.js App Router requirement)
  const { slug } = await params
  const doc = await fetchIPO(slug).catch(() => null)
  if (!doc) notFound()

  const ipo = mapDocToUI(doc)

  // JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: `${ipo.companyName} IPO`,
    description: `${ipo.companyName} Initial Public Offering with price band ${
      ipo.priceBandLow ? "₹" + ipo.priceBandLow : "TBA"
    }-${ipo.priceBandHigh ? "₹" + ipo.priceBandHigh : "TBA"}`,
    provider: { "@type": "Organization", name: ipo.companyName },
    offers: {
      "@type": "Offer",
      price: `${ipo.priceBandLow || ""}${ipo.priceBandLow ? "-" : ""}${ipo.priceBandHigh || ""}`,
      priceCurrency: "INR",
      validFrom: ipo.openDate || "",
      validThrough: ipo.closeDate || "",
    },
  }

  const detailsForSection = {
    openDate: ipo.openDate ? toINDate(ipo.openDate) : "TBA",
    closeDate: ipo.closeDate ? toINDate(ipo.closeDate) : "TBA",
    allotmentDate: ipo.allotmentDate ? toINDate(ipo.allotmentDate) : "TBA",
    listingDate: ipo.listingDate ? toINDate(ipo.listingDate) : "TBA",
    faceValue: "₹10 per share", // TODO: move to CMS if needed
    priceBand:
      ipo.priceBandLow && ipo.priceBandHigh
        ? `₹${ipo.priceBandLow} to ₹${ipo.priceBandHigh} per share`
        : (doc?.price_band_text || "TBA"),
    issueSize: ipo.ipoSize,
    freshIssue: ipo.freshIssue,
    offerForSale: ipo.ofs,
    issueType: ipo.ipoType || "—",
    listing: ipo.exchangePlatform || "—",
    retailQuota: doc?.quotas?.retail || "—",
    qibQuota: doc?.quotas?.qib || "—",
    niiQuota: doc?.quotas?.nii || "—",
    drhpLink: ipo.drhpLink,
    rhpLink: ipo.rhpLink,
    anchorLink: ipo.anchorLink,
    revenueFY23: ipo.financials?.table?.find((r) => /2023/i.test(r.period))?.revenue || "",
    revenueFY24: ipo.financials?.table?.find((r) => /2024/i.test(r.period))?.revenue || "",
    profitFY23: ipo.financials?.table?.find((r) => /2023/i.test(r.period))?.profitAfterTax || "",
    profitFY24: ipo.financials?.table?.find((r) => /2024/i.test(r.period))?.profitAfterTax || "",
  }

  const faqsFromApi = (doc?.faqs || [])
    .map((f) => ({ q: f?.question || "", a: stripLexicalToText(f?.answer) }))
    .filter((x) => x.q && x.a)

  const faqs = faqsFromApi.length
    ? faqsFromApi
    : [{ q: "How do I apply for this IPO?", a: "Apply via your broker using ASBA/UPI with a demat account." }]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>

        <div className="relative container mx-auto px-4 py-12">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/upcoming-ipo-calendar"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to IPO Calendar
            </Link>
          </div>

          {/* Header */}
          <div className="text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-2xl border border-white/20">
                    {ipo.companyName.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{ipo.companyName}</h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-medium mb-4">
                      IPO Date, Review, Price, Allotment Details
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/15 backdrop-blur-md text-white border border-white/20">
                        {ipo.ipoType}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 backdrop-blur-md text-emerald-100 border border-emerald-400/30">
                        {ipo.exchangePlatform || "—"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-white mb-2">{ipo.ipoSize || "-"}</div>
                <div className="text-blue-200 text-lg">IPO Size</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* IPO Details Section (from API) */}
        <div className="mb-12">
          <IpoDetailsSection {...detailsForSection} />
        </div>

        {/* Market Lot Table */}
        <IpoMarketLotTable
          marketLot={Number.isFinite(ipo.marketLot) ? ipo.marketLot : 1}
          lotPrice={Number.isFinite(ipo.lotPrice) ? ipo.lotPrice : 0}
          maxRetailLots={Number.isFinite(ipo.retailMaxLots) ? ipo.retailMaxLots : 13}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Key Details */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                Price Information
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Price Band</span>
                  <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {ipo.priceBandLow && ipo.priceBandHigh ? `₹${ipo.priceBandLow} - ₹${ipo.priceBandHigh}` : (doc?.price_band_text || "TBA")}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Market Lot</span>
                  <span className="font-bold text-xl text-gray-900">
                    {Number.isFinite(ipo.marketLot) ? `${ipo.marketLot} shares` : (doc?.lot_size_text || "—")}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-600 font-medium">Minimum Investment</span>
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {ipo.priceBandHigh && ipo.marketLot ? `₹${(ipo.priceBandHigh * ipo.marketLot).toLocaleString("en-IN")}` : "—"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                IPO Information
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">IPO Type</span>
                  <span className="font-bold text-lg text-gray-900">{ipo.ipoType}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Exchange Platform</span>
                  <span className="font-bold text-lg text-gray-900">{ipo.exchangePlatform || "—"}</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-600 font-medium">Issue Size</span>
                  <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {ipo.ipoSize || "—"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                IPO Timeline
              </h2>
              <div className="relative space-y-8">
                <div className="absolute left-3 top-6 bottom-6 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 via-orange-500 to-purple-500" />
                {/* IPO Opens */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">IPO Opens</div>
                    <div className="text-2xl font-bold text-green-600 mb-2">{ipo.openDate ? toINDate(ipo.openDate) : "TBA"}</div>
                    <div className="text-sm text-gray-500 bg-green-50 px-3 py-1 rounded-full inline-block">Subscription begins</div>
                  </div>
                </div>
                {/* IPO Closes */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">IPO Closes</div>
                    <div className="text-2xl font-bold text-red-600 mb-2">{ipo.closeDate ? toINDate(ipo.closeDate) : "TBA"}</div>
                    <div className="text-sm text-gray-500 bg-red-50 px-3 py-1 rounded-full inline-block">Last date to apply</div>
                  </div>
                </div>
                {/* Basis of Allotment */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Basis of Allotment</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{ipo.allotmentDate ? toINDate(ipo.allotmentDate) : "TBA"}</div>
                    <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full inline-block">Allotment results announced</div>
                  </div>
                </div>
                {/* Refunds */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Refunds</div>
                    <div className="text-2xl font-bold text-orange-600 mb-2">{ipo.refundsDate ? toINDate(ipo.refundsDate) : "TBA"}</div>
                    <div className="text-sm text-gray-500 bg-orange-50 px-3 py-1 rounded-full inline-block">Refund processing</div>
                  </div>
                </div>
                {/* Credit to Demat Account */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Credit to Demat Account</div>
                    <div className="text-2xl font-bold text-teal-600 mb-2">{ipo.creditDate ? toINDate(ipo.creditDate) : "TBA"}</div>
                    <div className="text-sm text-gray-500 bg-teal-50 px-3 py-1 rounded-full inline-block">Shares credited</div>
                  </div>
                </div>
                {/* IPO Listing Date */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">IPO Listing Date</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{ipo.listingDate ? toINDate(ipo.listingDate) : "TBA"}</div>
                    <div className="text-sm text-gray-500 bg-purple-50 px-3 py-1 rounded-full inline-block">Trading begins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Report Section */}
        <div className="mt-12">
          <IpoFinancialReport financials={ipo.financials} />
        </div>

        {/* Valuation Section */}
        <div className="mt-8">
          <IpoValuationSection valuation={ipo.valuation} />
        </div>

        {/* New Components Section */}
        <div className="space-y-8 mt-8">
          <PeerGroupComparison companies={ipo.peers} />
          <ObjectsOfTheIssue points={ipo.objects} />
          <IpoReviewSources sources={ipo.reviews} />
          <IpoRegistrarDetails
            name={ipo.registrar.name}
            phone={ipo.registrar.phone}
            email={ipo.registrar.email}
            website={ipo.registrar.website}
          />
          <IpoLeadManagers managers={ipo.leadManagers} />
          <CompanyAddress
            name={ipo.companyContact.name}
            address={ipo.companyContact.address}
            phone={ipo.companyContact.phone}
            email={ipo.companyContact.email}
            website={ipo.companyContact.website}
          />
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Ready to Invest in {ipo.companyName}?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {"Make sure to do your research and consult with financial advisors before investing. Check the company's fundamentals and market conditions."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/upcoming-ipo-calendar"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                View All IPOs
              </Link>
              <CTAButton variant="secondary" className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl border border-gray-200 p-8 mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Investment Tools</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href="/upcoming-ipo-calendar" className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPO Calendar</h4>
              <p className="text-sm text-gray-600">Upcoming IPOs</p>
            </Link>
            <Link href="/ipo-subscription-status" className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Subscription Status</h4>
              <p className="text-sm text-gray-600">Live IPO Data</p>
            </Link>
            <Link href="/ipo-grey-market-premium" className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPO GMP</h4>
              <p className="text-sm text-gray-600">Grey Market Premium</p>
            </Link>
            <Link href="/share-buyback-offers" className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Buyback Offers</h4>
              <p className="text-sm text-gray-600">Share Buybacks</p>
            </Link>
            <Link href="/stock-brokers-comparison" className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Broker Comparison</h4>
              <p className="text-sm text-gray-600">Compare Brokers</p>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">Frequently Asked Questions</h2>
            {faqs.map((faq, idx) => (
              <details key={idx} className="mb-4 rounded-md bg-gray-50 p-4 shadow">
                <summary className="cursor-pointer font-medium text-lg text-blue-700">{faq.q}</summary>
                <p className="mt-2 text-gray-700 whitespace-pre-line">{faq.a}</p>
              </details>
            ))}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          </section>
        )}
      </div>
    </div>
  )
}
