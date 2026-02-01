"use client"

import { useState } from "react"
import { Check, Search, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for IPOs
const activeIPOs = [
    { id: "oswal-pumps", name: "Oswal Pumps Ltd", registrar: "Link Intime" },
    { id: "tech-innovations", name: "Tech Innovations Ltd", registrar: "KFintech" },
    { id: "green-energy", name: "Green Energy Sol Ltd", registrar: "Bigshare" },
    { id: "future-retail", name: "Future Retail Tech", registrar: "Link Intime" },
    { id: "sme-digital", name: "Digital Solutions (SME)", registrar: "Maashitla" },
]

export function AllotmentWidget() {
    const [selectedIPO, setSelectedIPO] = useState("")
    const [pan, setPan] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<{ status: "success" | "failure" | "pending"; message: string } | null>(null)

    const handleCheck = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedIPO || !pan) return

        setLoading(true)
        setResult(null)

        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            // Randomly simulate success or not found for demo purposes
            const isAllotted = Math.random() > 0.5

            if (isAllotted) {
                setResult({
                    status: "success",
                    message: `Congratulations! You have been allotted 50 shares of ${activeIPOs.find(i => i.id === selectedIPO)?.name}.`
                })
            } else {
                setResult({
                    status: "failure",
                    message: "Sorry, no allotment found for this PAN number. Please verify your details or check with the registrar."
                })
            }
        }, 2000)
    }

    return (
        <Card className="w-full h-full border-0 shadow-lg bg-white overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">IPO Allotment Checker</h3>
                <p className="text-blue-100 text-sm">Check your application status instantly</p>
            </div>

            <CardContent className="p-6">
                <form onSubmit={handleCheck} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="ipo-select">Select IPO</Label>
                        <div className="relative">
                            <select
                                id="ipo-select"
                                value={selectedIPO}
                                onChange={(e) => setSelectedIPO(e.target.value)}
                                className="flex h-12 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="" disabled>Choose an active IPO</option>
                                {activeIPOs.map((ipo) => (
                                    <option key={ipo.id} value={ipo.id}>
                                        {ipo.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="pan-input">PAN Number</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input
                                id="pan-input"
                                placeholder="Ex. ABCDE1234F"
                                value={pan}
                                onChange={(e) => setPan(e.target.value.toUpperCase())}
                                className="pl-10 h-12 border-gray-300 uppercase font-medium"
                                maxLength={10}
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                        disabled={loading || !selectedIPO || !pan}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Checking Status...
                            </>
                        ) : (
                            "Check Now"
                        )}
                    </Button>
                </form>

                {result && (
                    <div className={`mt-6 p-4 rounded-lg animation-fade-in ${result.status === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                        <div className="flex items-start gap-3">
                            {result.status === "success" ? (
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="h-4 w-4 text-green-600" />
                                </div>
                            ) : (
                                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <AlertCircle className="h-4 w-4 text-red-600" />
                                </div>
                            )}
                            <div>
                                <h4 className={`font-semibold mb-1 ${result.status === "success" ? "text-green-800" : "text-red-800"}`}>
                                    {result.status === "success" ? "Alloted!" : "Not Alloted"}
                                </h4>
                                <p className={`text-sm ${result.status === "success" ? "text-green-700" : "text-red-700"}`}>
                                    {result.message}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
