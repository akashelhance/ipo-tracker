"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface BlogFaqSectionProps {
  faqs: FAQ[]
}

export default function BlogFaqSection({ faqs }: BlogFaqSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border mb-8">
      <div className="flex items-center mb-6">
        <HelpCircle className="h-6 w-6 text-blue-600 mr-2" />
  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
  Frequently Asked Questions
</h2>

      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
