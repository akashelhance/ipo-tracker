import type { Metadata } from "next"
import { AllotmentWidget } from "@/components/allotment-widget"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import gmpprovider from "@/config/gmpprovider"
import { ChevronDown, ExternalLink, RefreshCw, AlertTriangle, Home, ChevronRight, BarChart3, Calendar } from "lucide-react"

export const metadata: Metadata = {
    title: `IPO Allotment Status Checker - ${gmpprovider.websiteName}`,
    description: "Check IPO allotment status live. Enter your PAN number to verify if you have received shares in the latest Mainboard and SME IPOs. Direct links to Link Intime, KFintech.",
    keywords: "IPO allotment status, check IPO allotment, IPO allotment status online, share allotment status, Link Intime allotment, KFintech allotment",
}

export default function AllotmentStatusPage() {
    const registrars = [
        { name: "Link Intime", url: "https://linkintime.co.in/MIPO/Ipoallotment.html", color: "bg-blue-50 text-blue-700 hover:border-blue-300" },
        { name: "KFin Technologies", url: "https://kosmic.kfintech.com/ipostatus/", color: "bg-indigo-50 text-indigo-700 hover:border-indigo-300" },
        { name: "Bigshare Services", url: "https://www.bigshareonline.com/ipo_Allotment.html", color: "bg-orange-50 text-orange-700 hover:border-orange-300" },
        { name: "Maashitla", url: "https://maashitla.com/public-issues", color: "bg-green-50 text-green-700 hover:border-green-300" },
    ]

    const recentAllotments = [
        { name: "Oswal Pumps Ltd", status: "Declared", date: "Today", type: "Mainboard" },
        { name: "Tech Innovations", status: "Declared", date: "Yesterday", type: "SME" },
        { name: "Green Energy Sol", status: "Pending", date: "Coming Soon", type: "Mainboard" },
        { name: "Future Retail", status: "Pending", date: "Coming Soon", type: "SME" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-8 pb-12 md:pt-10 md:pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
                <div className="container mx-auto px-4 relative z-10">

                    {/* Breadcrumb - Now inside Hero */}
                    <nav className="flex items-center justify-center text-sm text-blue-200 mb-8 md:mb-10">
                        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors"><Home className="h-3 w-3" /> Home</Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-blue-400" />
                        <span className="text-white font-medium">IPO Allotment Status</span>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">IPO Allotment Status Checker</h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6">
                            Instant updates for Mainboard & SME IPOs. Check your application status by PAN, Application No, or DP ID.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-blue-200">
                            <span className="flex items-center gap-1"><RefreshCw className="h-3 w-3" /> Real-time Updates</span>
                            <span className="flex items-center gap-1">•</span>
                            <span>All Registrars Covered</span>
                            <span className="flex items-center gap-1">•</span>
                            <span>Secure & Private</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Column: Widget & Sticky Sidebar */}
                        <div className="lg:col-span-4 order-1">
                            <div className="lg:sticky lg:top-24 space-y-6">
                                {/* The Widget */}
                                <div className="transform transition-all hover:scale-[1.01] duration-300">
                                    <AllotmentWidget />
                                </div>

                                {/* Internal Links Card */}
                                <Card className="border-0 shadow-sm bg-white overflow-hidden">
                                    <CardHeader className="pb-3 border-b border-gray-100 bg-gray-50">
                                        <CardTitle className="text-base font-semibold flex items-center gap-2">
                                            <BarChart3 className="h-4 w-4 text-blue-600" />
                                            Quick Market Links
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="flex flex-col">
                                            <Link href="/upcoming-ipo-calendar" className="flex items-center justify-between p-4 hover:bg-blue-50 transition-colors border-b border-gray-50 group">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors">
                                                        <Calendar className="h-4 w-4" />
                                                    </div>
                                                    <span className="font-medium text-gray-700 group-hover:text-blue-700">IPO Calendar</span>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500" />
                                            </Link>
                                            <Link href="/ipo-grey-market-premium" className="flex items-center justify-between p-4 hover:bg-green-50 transition-colors border-b border-gray-50 group">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors">
                                                        <BarChart3 className="h-4 w-4" />
                                                    </div>
                                                    <span className="font-medium text-gray-700 group-hover:text-green-700">Latest GMP</span>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-500" />
                                            </Link>
                                            <Link href="/ipo-subscription-status" className="flex items-center justify-between p-4 hover:bg-orange-50 transition-colors group">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors">
                                                        <RefreshCw className="h-4 w-4" />
                                                    </div>
                                                    <span className="font-medium text-gray-700 group-hover:text-orange-700">Subscription Status</span>
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-orange-500" />
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="lg:col-span-8 order-2 space-y-8">

                            {/* Recent Allotments Status */}
                            <Card className="border-0 shadow-sm overflow-hidden">
                                <CardHeader className="bg-white border-b border-gray-100">
                                    <CardTitle className="text-xl">Latest Allotment Announcements</CardTitle>
                                    <CardDescription>Track the allotment declaration status of recent IPOs</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-gray-50 text-gray-600 font-medium">
                                                <tr>
                                                    <th className="px-6 py-4">IPO Name</th>
                                                    <th className="px-6 py-4">Type</th>
                                                    <th className="px-6 py-4">Status</th>
                                                    <th className="px-6 py-4 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {recentAllotments.map((ipo, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="px-6 py-4 font-medium text-gray-900">{ipo.name}</td>
                                                        <td className="px-6 py-4 text-gray-500">{ipo.type}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${ipo.status === 'Declared' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                                {ipo.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                                                                Check Now
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Official Registrar Links */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <ExternalLink className="h-5 w-5 text-gray-500" />
                                    Official Registrar Links
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {registrars.map((reg) => (
                                        <a
                                            key={reg.name}
                                            href={reg.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 rounded-xl border border-transparent transition-all duration-300 hover:shadow-md flex items-center justify-between group ${reg.color}`}
                                        >
                                            <span className="font-semibold">{reg.name}</span>
                                            <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    *We provide these links for your convenience. You will be redirected to the official registrar website.
                                </p>
                            </div>

                            {/* Guide Section */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Guide to Check Allotment</h2>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Identify the Registrar</h3>
                                            <p className="text-gray-600 text-sm">Every IPO has an appointed registrar (e.g., Link Intime, KFintech). You need to check the status on their specific website or use our aggregated tool above.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Select the Company</h3>
                                            <p className="text-gray-600 text-sm">On the allotment page, look for the 'Company Name' dropdown. The name will only appear after the allotment is officially finalized.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Enter Your Details</h3>
                                            <p className="text-gray-600 text-sm">The most reliable method is using your PAN Number. You can also use your Application Number or Demat Account (DP Client ID).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Troubleshooting */}
                            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5" />
                                    Troubleshooting: Common Issues
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 text-amber-800 text-sm">
                                    <li><strong>Name not in dropdown?</strong> The allotment might not be declared yet. It typically happens late evening on the allotment date.</li>
                                    <li><strong>"Record Not Found"?</strong> Double-check your PAN/Application number. Make sure the IPO name is correctly selected.</li>
                                    <li><strong>Site not loading?</strong> Registrar websites often face heavy traffic during popular IPOs. Try refreshing after a few minutes.</li>
                                </ul>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 marker:content-none">
                                                <span>When is the exact time for IPO allotment?</span>
                                                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-gray-400" />
                                            </summary>
                                            <div className="mt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                                                There is no fixed time. However, registrars usually update the status between 8:00 PM and Midnight on the allotment date. Sometimes it can spill over to the next morning.
                                            </div>
                                        </details>
                                    </div>

                                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 marker:content-none">
                                                <span>How do I check allotment without PAN?</span>
                                                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-gray-400" />
                                            </summary>
                                            <div className="mt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                                                You can check using your IPO Application Number (found on your acknowledgement slip) or your Demat Account Number (DP ID + Client ID).
                                            </div>
                                        </details>
                                    </div>

                                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 marker:content-none">
                                                <span>What if I don't get the allotment?</span>
                                                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 text-gray-400" />
                                            </summary>
                                            <div className="mt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                                                If you are not allotted shares, your bank will revoke the mandate and unblock your funds. This usually happens within 1-2 working days after the allotment date.
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
