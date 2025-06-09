import Image from "next/image"
import { Twitter, Linkedin } from "lucide-react"

interface Author {
  name: string
  bio: string
  avatar: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
  }
}

interface BlogAuthorInfoProps {
  author: Author
}

export default function BlogAuthorInfo({ author }: BlogAuthorInfoProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
      <div className="flex items-start space-x-4">
        <Image
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{author.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{author.bio}</p>
          {author.socialLinks && (
            <div className="flex space-x-3">
              {author.socialLinks.twitter && (
                <a
                  href={author.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              {author.socialLinks.linkedin && (
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
