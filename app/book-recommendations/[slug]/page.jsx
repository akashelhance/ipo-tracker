import { notFound } from "next/navigation"
import { keywords, slugify, toTitleCase } from "../data"

export function generateStaticParams() {
  return keywords.map(k => ({ slug: slugify(k) }))
}

export async function generateMetadata({ params }) {
  const keyword = keywords.find(k => slugify(k) === params.slug)
  if (!keyword) return {}
  return {
    title: `${toTitleCase(keyword)} — Best Resources, PDFs & Guides`,
    description: `Handpicked books and resources for ${toTitleCase(keyword)}.`,
  }
}

export default function BookKeywordPage({ params }) {
  const keyword = keywords.find(k => slugify(k) === params.slug)
  if (!keyword) return notFound()

  return (
    <main className="min-h-screen relative py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-20 -right-10 w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full" />
      </div>

      <section className="relative container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {toTitleCase(keyword)}
          </h1>
          <p className="text-purple-100 mb-8">
            Curated recommendations, summaries, and links for <strong>{toTitleCase(keyword)}</strong>.
          </p>

          {/* Replace with your real list/resources */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/90">• Top beginner book</div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/90">• Intermediate/Trading pick</div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/90">• Free PDF or summary (if any)</div>
          </div>
        </div>
      </section>
    </main>
  )
}
