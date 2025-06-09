"use client"

import { Share2, Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { useState } from "react"

interface BlogSocialSharingProps {
  title: string
  slug: string
}

export default function BlogSocialSharing({ title, slug }: BlogSocialSharingProps) {
  const [copied, setCopied] = useState(false)

  const url = `https://ipocalendar.com/blog/${slug}`
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center mb-4">
        <Share2 className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="font-semibold text-gray-900">Share this article</h3>
      </div>
      <div className="space-y-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
        >
          <Twitter className="h-4 w-4 mr-3" />
          Share on Twitter
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
        >
          <Facebook className="h-4 w-4 mr-3" />
          Share on Facebook
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
        >
          <Linkedin className="h-4 w-4 mr-3" />
          Share on LinkedIn
        </a>
        <button
          onClick={copyToClipboard}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
        >
          <LinkIcon className="h-4 w-4 mr-3" />
          {copied ? "Link copied!" : "Copy link"}
        </button>
      </div>
    </div>
  )
}
