import Link from "next/link"
import { TrendingUp, Calendar, Building2, Star, ArrowRight, Info, Users, FileText, Target, DollarSign, BookOpen, Award, Sparkles } from 'lucide-react'

const keywords = [
  "stock market books in hindi",
  "stock market books for beginners",
  "stock market books pdf",
  "indian stock market books pdf",
  "what is book value in stock market",
  "book value in stock market",
  "stock market books in hindi pdf",
  "best book to learn stock market",
  "best stock market books for beginners",
  "basic books for stock market",
  "basics of stock market books",
  "stock market books india",
  "stock market books in bengali",
  "stock market trading books",
  "top 5 stock market books for beginners",
  "best books on indian stock market",
  "stock market learning books",
  "stock market books in telugu",
  "best books on stock market investing",
  "top 10 books for stock market beginners",
  "best book for stock market beginners in india",
  "best book for trading in stock market",
  "best stock market books for beginners in india",
  "stock market books pdf free download",
  "stock market related books",
  "top stock market books",
  "what is profit booking in stock market",
]

// Function to convert to Title Case
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export const metadata = {
  title: "Best Stock Market Books & Recommendations",
  description:
    "Discover the best stock market books for beginners, traders, and investors in multiple languages including Hindi, Bengali, and Telugu. Find PDFs, guides, and more.",
}

export default function BookRecommendations() {
  return (
    <>
      {/* <CHANGE> Redesigned hero section with sophisticated styling and better color palette */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.08),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-20 relative">
          {/* <CHANGE> Enhanced hero section with better typography and visual hierarchy */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Curated Collection
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-amber-800 to-orange-700 bg-clip-text text-transparent mb-6 leading-tight">
              Master the Markets
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the most comprehensive collection of stock market books, carefully selected to accelerate your investment journey from beginner to expert.
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-600" />
                <span>{keywords.length}+ Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>Multiple Languages</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-600" />
                <span>Expert Curated</span>
              </div>
            </div>
          </div>

          {/* <CHANGE> Redesigned cards grid with sophisticated styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {keywords.map((keyword, idx) => (
              <div
                key={idx}
                className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 hover:-translate-y-2 hover:border-amber-200"
              >
                {/* <CHANGE> Enhanced icon design with better colors */}
                <div className="relative mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* <CHANGE> Improved typography and content hierarchy */}
                <h2 className="font-semibold text-slate-900 text-lg mb-3 leading-snug group-hover:text-amber-800 transition-colors">
                  {toTitleCase(keyword)}
                </h2>
                
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Comprehensive guides and insights for "{toTitleCase(keyword)}" with expert recommendations.
                </p>

                {/* <CHANGE> Enhanced call-to-action button */}
                <button className="flex items-center text-sm font-medium text-amber-700 group-hover:text-amber-800 transition-colors">
                  Explore Resources
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* <CHANGE> Subtle hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <CHANGE> Redesigned tools section with consistent styling */}
    
    </>
  )
}
