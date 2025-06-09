"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real implementation, this would navigate to a search results page
      // router.push(`/blog/search?q=${encodeURIComponent(searchQuery)}`)
      console.log(`Searching for: ${searchQuery}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles by title or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-4 pl-12 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  )
}
