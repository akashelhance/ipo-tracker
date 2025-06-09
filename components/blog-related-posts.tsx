import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { ArrowRight } from "lucide-react"

interface RelatedPost {
  title: string
  slug: string
  image: string
  publishedDate: string
}

interface BlogRelatedPostsProps {
  posts: RelatedPost[]
}

export default function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video relative">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <time className="text-xs text-gray-500 mb-2 block">
                {format(new Date(post.publishedDate), "MMM dd, yyyy")}
              </time>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center text-blue-600 text-sm font-medium">
                Read more
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
