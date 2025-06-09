import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Blog } from "@/lib/blog-data"

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  // Function to get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Capital Market": "bg-blue-100 text-blue-800",
      "Bonus Issue": "bg-green-100 text-green-800",
      Trading: "bg-purple-100 text-purple-800",
      "Block Deal": "bg-orange-100 text-orange-800",
      "Financial News": "bg-red-100 text-red-800",
      "Grey Market Premium": "bg-indigo-100 text-indigo-800",
      "Listing Gains": "bg-emerald-100 text-emerald-800",
      "QIB/NII/Retail Updates": "bg-amber-100 text-amber-800",
      "SME IPOs": "bg-cyan-100 text-cyan-800",
      Regulations: "bg-gray-100 text-gray-800",
    }

    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(blog.category)}`}
          >
            {blog.category}
          </span>
          <span className="text-xs text-gray-500 ml-auto">{blog.date}</span>
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
            {blog.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">By {blog.author}</span>

          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
