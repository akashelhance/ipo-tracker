"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Menu } from "lucide-react"
import { categories } from "@/lib/blog-data"

export default function BlogSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-6 py-4 bg-white rounded-xl shadow-sm"
        >
          <div className="flex items-center">
            <Menu className="h-5 w-5 mr-2 text-blue-600" />
            <span className="font-medium">Blog Categories</span>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${isOpen ? "block" : "hidden lg:block"}`}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Categories</h2>
          <nav className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{category.name}</span>
                <span className="bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 px-2 py-1 rounded-full text-xs font-medium transition-colors">
                  {category.count}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for the latest market insights.</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
