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
import { articles } from "@/lib/utils"



export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = articles.filter(
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

            <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-6 gap-y-8 px-5">
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
                        <div className="flex items-center text-xs line-clamp-1 gap-1">
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
                      <Button  className="w-full group rounded-4xl cursor-pointer">
                        <Link href={`/blogs/${post.id}`} className="flex justify-center size-full cursor-pointer items-center">
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
