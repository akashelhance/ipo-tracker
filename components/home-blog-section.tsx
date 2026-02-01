"use client"

import { useState } from "react"
import { getAllBlogs, categories } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeBlogSection() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const allBlogs = getAllBlogs()

    // Get top 6 most popular categories for the filter bar
    const popularCategories = ["All", ...categories.sort((a, b) => b.count - a.count).slice(0, 5).map(c => c.name)]

    const filteredBlogs = selectedCategory === "All"
        ? allBlogs
        : allBlogs.filter(blog => blog.category === selectedCategory)

    // Show only first 3 blogs on homepage
    const displayBlogs = filteredBlogs.slice(0, 3)

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Market Insights</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with expert analysis, market trends, and investment strategies
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {popularCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                    <Link
                        href="/blog"
                        className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all duration-200"
                    >
                        More Categories...
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayBlogs.length > 0 ? (
                        displayBlogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
                            <p className="text-gray-500">No articles found in this category.</p>
                            <Button
                                variant="link"
                                onClick={() => setSelectedCategory("All")}
                                className="mt-2 text-blue-600"
                            >
                                View all articles
                            </Button>
                        </div>
                    )}
                </div>

                <div className="text-center mt-12">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="group px-8 py-3 text-gray-800 border-gray-300 hover:bg-gray-100 hover:text-black"
                    >
                        <Link href="/blog">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
