/* eslint-disable @next/next/no-img-element */
"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Calendar, Clock, Share2, Sparkles, ThumbsUp } from "lucide-react"
import Footer from "@/components/ui/footer"
import { toast } from "@/components/ui/toast"
import { articles } from "@/lib/utils"


export default function BlogDetailPage() {
  const params = useParams()
  const blogId = params.blogId as string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blog : any = articles.find((x) => x.id === blogId) 


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
            className="max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <Link href="/blogs" className="bg-foreground text-background px-4 py-2 font-semibold rounded-4xl text-xs">
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
                    <CardTitle className="flex items-center gap-2 text-foreground font-semibold">
                      <Sparkles className="h-5 w-5" />
                      AI-Generated Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{blog.aiSummary}</p>
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
            </div>

            <div
              className="prose prose-gray dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <Separator className="mt-12" />

            
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
