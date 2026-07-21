"use client"

import * as React from "react"
import { useAnimationFrame } from "motion/react"
import { cn } from "@/lib/utils"

const PATH_D = "M 0 100 L 150 100 L 200 30 L 400 30 L 450 100 L 600 100"
const SWEEP_DURATION_MS = 2500
const WINDOW_WIDTH = 300 // width of the moving highlight window, in path units

export default function HighTechBeams(props :  {className : string}) {
  const gradientRef = React.useRef<SVGLinearGradientElement>(null)
  const startRef = React.useRef<number | null>(null)

  // Slide the beamFadeGradient along the path continuously: from fully
  // off-screen left to fully off-screen right, then loop. This is what
  // produces the traveling light effect — the captured markup only had
  // one frozen instant of this (stops fixed at 51.8%–71.8%).
  useAnimationFrame((time) => {
    if (startRef.current === null) startRef.current = time
    const elapsed = (time - startRef.current) % SWEEP_DURATION_MS
    const progress = elapsed / SWEEP_DURATION_MS
    const translateX = -WINDOW_WIDTH + progress * (WINDOW_WIDTH + 600)
    gradientRef.current?.setAttribute("gradientTransform", `translate(${translateX} 0)`)
  })

  return (
    <div
      className={cn("flex  items-center justify-center [--beam-color-1:var(--color-blue-500)] [--beam-color-2:var(--color-indigo-400)] [--beam-color-3:var(--color-violet-500)] [--path-color:var(--color-neutral-400)] dark:[--beam-color-1:var(--color-blue-500)] dark:[--beam-color-2:var(--color-violet-400)] dark:[--beam-color-3:var(--color-cyan-500)] dark:[--path-color:var(--color-neutral-600)]" , props.className)}
    >
      <svg width="600" height="130" viewBox="0 0 600 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" />
            <stop offset="10%" stopColor="white" />
            <stop offset="90%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>

          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="var(--beam-color-1)" />
            <stop offset="50%" stopColor="var(--beam-color-2)" />
            <stop offset="70%" stopColor="var(--beam-color-3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <mask id="fadeEndsMask">
            <rect x="0" y="0" width="600" height="130" fill="url(#fadeMask)" />
          </mask>

          {/* This gradient's position is driven every frame by the ref above */}
          <linearGradient
            ref={gradientRef}
            id="beamFadeGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={WINDOW_WIDTH}
            y2="0"
          >
            <stop offset="0%" stopColor="black" />
            <stop offset="35%" stopColor="white" />
            <stop offset="65%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>

          <mask id="beamMask">
            <path
              d={PATH_D}
              stroke="url(#beamFadeGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </mask>
        </defs>

        <g mask="url(#fadeEndsMask)">
          <path
            d={PATH_D}
            stroke="var(--path-color)"
            strokeWidth="2"
            strokeDasharray="1 6"
            strokeLinecap="round"
            fill="none"
          />
          <g filter="url(#glow)">
            <path
              d={PATH_D}
              stroke="url(#beamGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 6"
              fill="none"
              mask="url(#beamMask)"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}