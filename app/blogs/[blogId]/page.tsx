/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Calendar, Clock, Share2, Sparkles, ThumbsUp, MessageCircle } from "lucide-react"
import FooterPreview from "@/components/ui/footer"
import { toast } from "@/components/ui/toast"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blogDetails: Record<string, any> = {
  "getting-started-with-nfts": {
    id: "getting-started-with-nfts",
    title: "Getting Started with NFTs in Gaming",
    content: `
      <h2>Introduction to NFTs in Gaming</h2>
      <p>Non-fungible tokens (NFTs) have revolutionized the gaming industry by introducing true ownership of in-game assets. Unlike traditional game items that are controlled by game developers, NFTs give players actual ownership that can be transferred, sold, or traded freely.</p>
      
      <h3>What Makes NFTs Special?</h3>
      <p>NFTs are unique digital assets stored on a blockchain. Each NFT has a distinct identifier that makes it different from any other token. This uniqueness is what gives NFTs their value and makes them perfect for representing rare or exclusive game items.</p>
      
      <h3>Getting Started</h3>
      <p>To start collecting NFT game assets, you'll need:</p>
      <ul>
        <li>A cryptocurrency wallet (like Phantom for Solana)</li>
        <li>Some cryptocurrency to make purchases</li>
        <li>An account on an NFT marketplace (like Black Labs!)</li>
      </ul>
      
      <h3>Benefits of NFT Game Assets</h3>
      <p>Owning NFT game assets provides several advantages:</p>
      <ul>
        <li><strong>True Ownership:</strong> You own the asset, not just a license to use it</li>
        <li><strong>Transferability:</strong> Sell or trade your assets anytime</li>
        <li><strong>Interoperability:</strong> Some assets can be used across multiple games</li>
        <li><strong>Scarcity:</strong> Limited edition items maintain their value</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>The future of gaming is being shaped by NFT technology. As more games adopt blockchain technology, the value and utility of NFT game assets will continue to grow.</p>
    `,
    author: "Sarah Chen",
    authorBio: "Blockchain gaming enthusiast and NFT collector",
    date: "2024-01-20",
    readTime: "5 min",
    image: "/assets/images/morty.webp",
    tags: ["NFT", "Gaming", "Blockchain"],
    aiGenerated: true,
    aiSummary:
      "This article introduces NFTs in gaming, explaining their unique properties, how to get started with collecting them, and the benefits they provide including true ownership, transferability, and scarcity.",
  },
}

export default function BlogDetailPage() {
  const params = useParams()
  const blogId = params.blogId as string
  const blog = blogDetails[blogId] || blogDetails["getting-started-with-nfts"]

  const [comments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Very informative.",
      date: "2024-01-21",
      likes: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Thanks for explaining this so clearly. I learned a lot!",
      date: "2024-01-22",
      likes: 3,
    },
  ])

  const handleShare = () => {
      toast.add({
        title: "Link copied",
        description: "Article link copied to clipboard",
      })
  }

 
  return (
    <div className="flex flex-col z-20 pt-20 min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto relative">
      <main className="flex-1">
        <article className="px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <Link href="/blogs" className=" bg-foreground text-background px-4 py-1 rounded-4xl text-sm">
                ← Back to Blog
              </Link>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{blog.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{blog.author}</p>
                    <p className="text-xs">{blog.authorBio}</p>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-10" />
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blog.readTime} read
                </div>
              </div>

              {blog.aiGenerated && blog.aiSummary && (
                <Card className="mb-6 bg-background rounded-4xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-900 dark:text-purple-100">
                      <Sparkles className="h-5 w-5" />
                      AI-Generated Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-800 dark:text-purple-200">{blog.aiSummary}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="aspect-video relative overflow-hidden rounded-4xl mb-8">
              <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="object-cover w-full h-full" />
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <MessageCircle className="inline h-4 w-4 mr-1" />
                {comments.length} comments
              </div>
            </div>

            <div
              className="prose prose-gray dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <Separator className="my-12" />

            
          </motion.div>
        </article>
      </main>
      <FooterPreview />
    </div>
  )
}
