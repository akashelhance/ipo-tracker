interface BlogTitleProps {
  title: string
}

export default function BlogTitle({ title }: BlogTitleProps) {
  return <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">{title}</h1>
}
