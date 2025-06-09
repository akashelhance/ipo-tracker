"use client"

import { useEffect, useState } from "react"
import { List } from "lucide-react"

interface TocItem {
  id: string
  text: string
  level: number
}

interface BlogTableOfContentsProps {
  content: string
}

export default function BlogTableOfContents({ content }: BlogTableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /<h([2-6])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-6]>/gi
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        id: match[2],
        text: match[3].replace(/<[^>]*>/g, ""), // Remove HTML tags
        level: Number.parseInt(match[1]),
      })
    }

    setTocItems(headings)
  }, [content])

  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map((item) => document.getElementById(item.id)).filter(Boolean)

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        if (heading && heading.getBoundingClientRect().top <= 100) {
          setActiveId(heading.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [tocItems])

  if (tocItems.length < 2) {
    return null
  }

  return (
    <nav className="bg-white rounded-lg p-6 shadow-sm border sticky top-8 mb-6">
      <div className="flex items-center mb-4">
        <List className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="font-semibold text-gray-900">Table of Contents</h3>
      </div>
      <ul className="space-y-2">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors hover:text-blue-600 ${
                activeId === item.id ? "text-blue-600 font-medium" : "text-gray-600"
              }`}
              style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
