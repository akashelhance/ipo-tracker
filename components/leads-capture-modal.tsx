"use client"

import { useState } from "react"
import { X, Bell, Mail, ShieldCheck, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LeadsCaptureModalProps {
    isOpen: boolean
    onClose: () => void
}

export function LeadsCaptureModal({ isOpen, onClose }: LeadsCaptureModalProps) {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            // Reset after showing success shortly, or keep it open? 
            // Let's keep success state until closed or auto-close after a few seconds.
            setTimeout(() => {
                onClose()
                setIsSuccess(false)
                setEmail("")
            }, 3000)
        }, 1500)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 to-purple-600" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 text-white rounded-full transition-colors z-10"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="relative px-6 pt-12 pb-8">
                    {/* Icon Wrapper */}
                    <div className="mx-auto w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 transform -rotate-3">
                        {isSuccess ? (
                            <ShieldCheck className="h-10 w-10 text-green-500" />
                        ) : (
                            <Bell className="h-10 w-10 text-blue-600" />
                        )}
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {isSuccess ? "You're on the list!" : "Never Miss an Opportunity"}
                        </h2>
                        <p className="text-gray-600">
                            {isSuccess
                                ? "Thanks for subscribing. Keep an eye on your inbox for the latest market updates."
                                : "Get instant notifications for GMP updates, IPO allotments, and subscription statuses."
                            }
                        </p>
                    </div>

                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="pl-10 h-12 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                                <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <div className="text-xs text-blue-800 text-left">
                                    <span className="font-semibold block mb-0.5">Why do we need your email?</span>
                                    We use your email solely to send you critical market alerts. We respect your privacy and will never share your data or spam you.
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Subscribing...
                                    </>
                                ) : (
                                    <>
                                        Get Instant Alerts
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center">
                            <Button
                                onClick={onClose}
                                variant="outline"
                                className="w-full h-12 rounded-xl border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                            >
                                Close
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
