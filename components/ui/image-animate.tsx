/* eslint-disable react-hooks/purity */
"use client"

import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

// Decorative fading tick marks along one edge of the frame — purely visual chrome.
function EdgeTicks({ side }: { side: "top" | "bottom" | "left" | "right" }) {
  const horizontal = side === "top" || side === "bottom"

  return (
    <div
      aria-hidden
      className={cn(
        "absolute z-20 [--color:var(--color-neutral-400)] bg-transparent dark:[--color:var(--color-neutral-600)]",
        horizontal
          ? "-left-25 h-px w-[calc(100%+200px)] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] bg-size-[5px_1px] mask-[linear-gradient(to_left,var(--bg)_90%,transparent),linear-gradient(to_right,var(--bg)_90%,transparent)] mask-intersect"
          : "-top-10 h-[calc(100%+80px)] w-px bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] bg-size-[1px_5px] mask-[linear-gradient(to_top,var(--bg)_90%,transparent),linear-gradient(to_bottom,var(--bg)_90%,transparent)] mask-intersect",
        side === "top" && "top-0",
        side === "bottom" && "top-auto bottom-0",
        side === "left" && "left-0",
        side === "right" && "right-0 left-auto",
      )}
    />
  )
}

interface ImageAnimateProps {
  /** Image shown grayscale-to-color. Both layers use the same source. */
  src?: string
  alt?: string
  /** Seconds for one full left-to-right sweep. */
  duration?: number
  sparkleCount?: number
  className?: string
}

export default function ImageAnimate({
  src = "/assets/images/morty.webp",
  alt = "Person",
  duration = 3,
  className,
}: ImageAnimateProps) {

  return (
    <div className="overflow-hidden flex justify-center items-center ">
      <div className="flex w-full items-center justify-center p-2 sm:p-10 ">
        <div
          className={cn(
            "relative h- w-52 rounded-lg bg-gray-200 p-4 dark:bg-neutral-800/50",
            className,
          )}
        >
          <EdgeTicks side="top" />
          <EdgeTicks side="bottom" />
          <EdgeTicks side="left" />
          <EdgeTicks side="right" />

          <div className="relative h-full w-full overflow-hidden rounded-lg bg-white shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800">
            {/* Base layer: always grayscale */}
            <img src={src} alt={alt} className="h-full w-full object-cover grayscale" />

            {/* Color layer: revealed left-to-right by an animated clip-path */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ clipPath: "inset(0px 100% 0px 0px)" }}
              animate={{ clipPath: ["inset(0px 100% 0px 0px)", "inset(0px 0% 0px 0px)"] }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <img src={src} alt={alt} className="h-full w-full object-cover" />
            </motion.div>

            {/* Glowing scan line, synced to the same sweep, with trailing sparkles */}
            <motion.div
              className="absolute top-0 bottom-0 z-20 w-px bg-gradient-to-b from-transparent via-sky-500 to-transparent"
              style={{
                boxShadow:
                  "0 0 20px rgba(59,130,246,0.9), 0 0 40px rgba(99,102,241,0.7), 0 0 60px rgba(139,92,246,0.5)",
              }}
              initial={{ left: "0%" }}
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}