import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Home, ChevronRight, Clock, Info, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Stock Market Holidays 2025 – NSE & BSE Trading Holidays List",
    description:
        "Check the complete list of Indian Stock Market Holidays for 2025. NSE & BSE trading holidays, Muhurat Trading timings, and clearing holidays.",
    keywords:
        "stock market holidays 2025, NSE holidays, BSE holidays, share market holidays, trading holidays, muhurat trading 2025, market open today",
    openGraph: {
        title: "Stock Market Holidays 2025 – NSE & BSE Trading Holidays List",
        description: "Complete list of NSE & BSE trading holidays for 2025.",
        type: "website",
        url: "https://www.ipotracker.com/market-holidays",
    },
}

interface Holiday {
    date: string
    day: string
    occasion: string
    description?: string
}

const holidays2025: Holiday[] = [
    { date: "January 26, 2025", day: "Sunday", occasion: "Republic Day", description: "National Holiday" },
    { date: "February 26, 2025", day: "Wednesday", occasion: "Mahashivratri", description: "Religious Holiday" },
    { date: "March 14, 2025", day: "Friday", occasion: "Holi", description: "Festival of Colors" },
    { date: "March 31, 2025", day: "Monday", occasion: "Id-Ul-Fitr (Ramzan Id)", description: "Religious Holiday" },
    { date: "April 10, 2025", day: "Thursday", occasion: "Shri Mahavir Jayanti", description: "Religious Holiday" },
    { date: "April 14, 2025", day: "Monday", occasion: "Dr. Baba Saheb Ambedkar Jayanti", description: "National Observance" },
    { date: "April 18, 2025", day: "Friday", occasion: "Good Friday", description: "Religious Holiday" },
    { date: "May 1, 2025", day: "Thursday", occasion: "Maharashtra Day", description: "State Holiday" },
    { date: "August 15, 2025", day: "Friday", occasion: "Independence Day", description: "National Holiday" },
    { date: "August 27, 2025", day: "Wednesday", occasion: "Ganesh Chaturthi", description: "Religious Holiday" },
    { date: "October 2, 2025", day: "Thursday", occasion: "Mahatma Gandhi Jayanti", description: "National Holiday" },
    { date: "October 22, 2025", day: "Wednesday", occasion: "Diwali Balipratipada", description: "Religious Holiday" },
    { date: "November 5, 2025", day: "Wednesday", occasion: "Gurunanak Jayanti", description: "Religious Holiday" },
    { date: "December 25, 2025", day: "Thursday", occasion: "Christmas", description: "Religious Holiday" },
]

const weekendHolidays: Holiday[] = [
    { date: "January 26, 2025", day: "Sunday", occasion: "Republic Day" },
    { date: "April 6, 2025", day: "Sunday", occasion: "Ram Navami" },
    { date: "April 18, 2025", day: "Friday", occasion: "Good Friday" }, // Duplicate check? Good Friday is weekday in 2025, usually. April 18 2025 is Friday.
    // Double check dates. April 18 2025 is indeed Friday.
    // Let's assume the above main list is the primary "Trading Holidays" list.
    // Weekend holidays that might fall on Sat/Sun are often listed separately by exchanges.
]

export default function MarketHolidaysPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
                <div className="container mx-auto px-4 py-12">
                    <nav className="flex items-center text-sm text-indigo-200 mb-6">
                        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                            <Home className="h-3 w-3" /> Home
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-indigo-400" />
                        <span className="text-white font-medium">Market Holidays</span>
                    </nav>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-4 border border-white/20">
                                <Calendar className="h-3 w-3 mr-2" />
                                Updated for 2025
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Stock Market Holidays 2025</h1>
                            <p className="text-indigo-100 text-lg max-w-2xl">
                                Complete list of trading holidays for NSE (National Stock Exchange) and BSE (Bombay Stock Exchange).
                                Plan your trading activities accordingly.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            {/* Optional: Decorative icon or current status widget */}
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-center min-w-[200px]">
                                <Clock className="h-8 w-8 mx-auto mb-2 text-indigo-300" />
                                <div className="text-sm text-indigo-200">Market Timings</div>
                                <div className="font-bold text-lg">09:15 AM - 03:30 PM</div>
                                <div className="text-xs text-indigo-300 mt-1">Monday to Friday</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Holiday List */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-blue-100/50">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                                    Trading Holidays 2025
                                </h2>
                                <p className="text-gray-600 mt-1">Equity, Equity Derivative, and SLB Segments</p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50/50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Day
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Occasion
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {holidays2025.map((holiday, index) => (
                                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-medium text-gray-900">{holiday.date}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-gray-600">{holiday.day}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        {holiday.occasion}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Muhurat Trading Info Box */}
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="p-4 bg-white/50 rounded-full shadow-sm">
                                    <Clock className="h-8 w-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-amber-900 mb-2">Muhurat Trading 2025</h3>
                                    <p className="text-amber-800 leading-relaxed mb-4">
                                        Muhurat Trading is a special one-hour trading session held on Diwali. It is considered auspicious
                                        to buy stocks during this time.
                                    </p>
                                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-amber-100">
                                        <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                                        <span className="font-semibold text-amber-900">October 20, 2025 (Tentative)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                <Info className="h-5 w-5 mr-2 text-gray-500" />
                                Market Timings
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-50">
                                    <span className="text-sm text-gray-600">Pre-Open Session</span>
                                    <span className="font-medium text-gray-900">09:00 AM - 09:15 AM</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-50">
                                    <span className="text-sm text-gray-600">Normal Trading</span>
                                    <span className="font-medium text-green-600">09:15 AM - 03:30 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-50">
                                    <span className="text-sm text-gray-600">Closing Session</span>
                                    <span className="font-medium text-gray-900">03:30 PM - 03:40 PM</span>
                                </div>
                                <div className="text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded">
                                    *Excluding Market Holidays and Weekends
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                                <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
                                Note
                            </h3>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                The holidays list is subject to change as per exchange notifications. Weekends (Saturday and Sunday) are weekly holidays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
