import Image from "next/image"

interface BlogFeaturedImageProps {
  src: string
  alt: string
}

export default function BlogFeaturedImage({ src, alt }: BlogFeaturedImageProps) {
  return (
    <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={800}
        height={400}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  )
}
