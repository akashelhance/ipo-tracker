interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border mb-8">
      <div
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}
