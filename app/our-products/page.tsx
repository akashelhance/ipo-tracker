import type { Metadata } from "next"
import {
  CreditCard,
  BookOpen,
  Star,
  Users,
  Shield,
  Zap,
  Award,
  CheckCircle,
  ExternalLink,
  Gift,
  Target,
  Heart,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Products - CardRecommend & ReadRecommend | IPOTracker",
  description:
    "Discover our suite of products: CardRecommend for smart credit card recommendations and ReadRecommend for curated book suggestions. Empowering your financial and personal growth journey.",
  keywords: "CardRecommend, ReadRecommend, credit cards, book recommendations, financial products, reading suggestions",
  openGraph: {
    title: "Our Products - CardRecommend & ReadRecommend",
    description: "Discover our suite of products for financial and personal growth",
    type: "website",
  },
}

export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <Gift className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empowering your financial and personal growth journey with innovative solutions designed for modern
              consumers
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-500" />
                100K+ Happy Users
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                4.8/5 Rating
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-500" />
                Trusted & Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* CardRecommend */}
            <div className="group">
              <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    CardRecommend
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-4">
                    Smart Credit Card Recommendations Tailored for You
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Description */}
                  <div className="text-center">
                    <p className="text-gray-700 leading-relaxed">
                      CardRecommend is your intelligent credit card advisor that analyzes your spending patterns,
                      financial goals, and lifestyle to recommend the perfect credit cards. Get personalized suggestions
                      that maximize your rewards, minimize fees, and align with your financial objectives.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2 text-blue-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Personalized card recommendations based on spending habits
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Real-time comparison of rewards, fees, and benefits
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Credit score impact analysis for each application
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Exclusive offers and cashback opportunities
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Expert reviews and user ratings
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-xs text-gray-500">Cards Listed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50K+</div>
                      <div className="text-xs text-gray-500">Users Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">₹2Cr+</div>
                      <div className="text-xs text-gray-500">Savings Generated</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold group"
                    >
                      <a href="https://cardrecommend.com" target="_blank" rel="noopener noreferrer">
                        Explore CardRecommend
                        <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      Free to use • No hidden charges • Instant recommendations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ReadRecommend */}
            <div className="group">
              <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ReadRecommend
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-4">
                    Curated Book Recommendations for Every Reader
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Description */}
                  <div className="text-center">
                    <p className="text-gray-700 leading-relaxed">
                      ReadRecommend is your personal book curator that discovers your next favorite read. Using advanced
                      algorithms and expert curation, we recommend books based on your reading history, preferences, and
                      mood to ensure every book is a perfect match.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-purple-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        AI-powered book recommendations based on your taste
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Curated lists by genre, mood, and reading level
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Expert reviews and community ratings
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Reading progress tracking and goals
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        Book club discussions and social features
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">10K+</div>
                      <div className="text-xs text-gray-500">Books Curated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">25K+</div>
                      <div className="text-xs text-gray-500">Active Readers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">1M+</div>
                      <div className="text-xs text-gray-500">Books Recommended</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold group"
                    >
                      <a href="https://readrecommend.com" target="_blank" rel="noopener noreferrer">
                        Explore ReadRecommend
                        <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      Free to join • Unlimited recommendations • Community driven
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Products?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technology and user-centric design to deliver exceptional experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get instant recommendations powered by advanced algorithms</p>
            </div>

            <div className="text-center group">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Highly Accurate</h3>
              <p className="text-gray-600">Precision recommendations based on your unique preferences</p>
            </div>

            <div className="text-center group">
              <div className="p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security</p>
            </div>

            <div className="text-center group">
              <div className="p-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for innovation and user satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Experience?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied users who have discovered smarter ways to choose credit cards and find their
            next favorite books
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              asChild
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 py-6 px-8 text-lg font-semibold"
            >
              <a href="https://cardrecommend.com" target="_blank" rel="noopener noreferrer">
                Try CardRecommend
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 py-6 px-8 text-lg font-semibold"
            >
              <a href="https://readrecommend.com" target="_blank" rel="noopener noreferrer">
                Try ReadRecommend
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
