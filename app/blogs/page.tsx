/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react"
import FooterPreview from "@/components/ui/footer"

const blogPosts = [
  {
    id: "getting-started-with-nfts",
    title: "Getting Started with NFTs in Gaming",
    excerpt: "Learn how NFTs are revolutionizing the gaming industry and how you can start collecting game assets.",
    author: "Sarah Chen",
    date: "2024-01-20",
    readTime: "5 min",
    image: "/assets/images/morty.webp",
    tags: ["NFT", "Gaming", "Blockchain"],
    aiGenerated: true,
  },
  {
    id: "solana-vs-ethereum",
    title: "Solana vs Ethereum: Which is Better for NFTs?",
    excerpt: "A comprehensive comparison of Solana and Ethereum for NFT transactions and why we chose Solana.",
    author: "Mike Johnson",
    date: "2024-01-18",
    readTime: "8 min",
    image: "/assets/images/morty.webp",
    tags: ["Solana", "Ethereum", "Comparison"],
    aiGenerated: false,
  },
  {
    id: "creating-game-assets",
    title: "How to Create High-Quality Game Assets",
    excerpt: "Tips and techniques for creating professional game assets that sell on marketplaces.",
    author: "Alex Rivera",
    date: "2024-01-15",
    readTime: "10 min",
    image: "/assets/images/morty.webp",
    tags: ["Tutorial", "Design", "Game Dev"],
    aiGenerated: false,
  },
  {
    id: "marketplace-trends-2024",
    title: "2024 Game Asset Marketplace Trends",
    excerpt: "AI-generated summary of the latest trends in digital asset marketplaces and what to expect in 2024.",
    author: "Black Labs Team",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/assets/images/morty.webp",
    tags: ["Trends", "Market Analysis", "AI"],
    aiGenerated: true,
  },
  {
    id: "marketplace-trends-2023",
    title: "2024 Game Asset Marketplace Trends",
    excerpt: "AI-generated summary of the latest trends in digital asset marketplaces and what to expect in 2024.",
    author: "Black Labs Team",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/assets/images/morty.webp",
    tags: ["Trends", "Market Analysis", "AI"],
    aiGenerated: true,
  },
  {
    id: "marketplace-trends-2022",
    title: "2024 Game Asset Marketplace Trends",
    excerpt: "AI-generated summary of the latest trends in digital asset marketplaces and what to expect in 2024.",
    author: "Black Labs Team",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/assets/images/morty.webp",
    tags: ["Trends", "Market Analysis", "AI"],
    aiGenerated: true,
  },
  {
    id: "marketplace-trends-2025",
    title: "2024 Game Asset Marketplace Trends",
    excerpt: "AI-generated summary of the latest trends in digital asset marketplaces and what to expect in 2024.",
    author: "Black Labs Team",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/assets/images/morty.webp",
    tags: ["Trends", "Market Analysis", "AI"],
    aiGenerated: true,
  },
  {
    id: "marketplace-trends-2026",
    title: "2024 Game Asset Marketplace Trends",
    excerpt: "AI-generated summary of the latest trends in digital asset marketplaces and what to expect in 2024.",
    author: "Black Labs Team",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/assets/images/morty.webp",
    tags: ["Trends", "Market Analysis", "AI"],
    aiGenerated: true,
  },
]

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col z-20 pt-20 min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto relative">
      <main className="flex-1">
        <div className="px-4 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent md:mt-10 pb-3 tracking-tighter md:text-5xl lg:text-7xl">
                Blogs & Articles
            </h1>

            <p className="mt-7 text-xs bg md:text-base  text-muted-foreground font-semibold text-center">
            Insights, tutorials, and news from the world of Web Development & Modern applications 
            </p>
              
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-6 gap-y-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col pt-0 rounded-4xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden rounded-t-4xl">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                      {post.aiGenerated && (
                        <Badge className="absolute top-2 right-2 bg-foreground">
                          <Sparkles className="h-3 w-3 mr-1" />
                          AI Summary
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button  className="w-full group rounded-4xl">
                        <Link href={`/blogs/${post.id}`} className="flex justify-center items-center">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your search</p>
                <Button className="mt-4" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <FooterPreview/>
    </div>
  )
}
