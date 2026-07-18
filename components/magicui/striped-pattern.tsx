import React, { useId } from "react"

import { cn } from "@/lib/utils"

interface StripedPatternProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right"
}

export function StripedPattern({
  direction = "left",
  className,
  width = 10,
  height = 10,
  ...props
}: StripedPatternProps) {
  const id = useId()
  const w = Number(width)
  const h = Number(height)

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-10 h-full w-full stroke-[0.5] ",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <pattern id={id} width={w} height={h} patternUnits="userSpaceOnUse">
          {direction === "left" ? (
            <>
              <line x1="0" y1={h} x2={w} y2="0"  className="stroke-muted-foreground/40" />
              <line x1={-w} y1={h} x2="0" y2="0"  className="stroke-muted-foreground/40" />
              <line x1={w} y1={h} x2={w * 2} y2="0" className="stroke-muted-foreground/40" />
            </>
          ) : (
            <>
              <line x1="0" y1="0" x2={w} y2={h} className="stroke-muted-foreground/40" />
              <line x1={-w} y1="0" x2="0" y2={h} className="stroke-muted-foreground/40" />
              <line x1={w} y1="0" x2={w * 2} y2={h} className="stroke-muted-foreground/40" />
            </>
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" className="stroke-muted-foreground/40 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black" fill={`url(#${id})`} />
    </svg>
  )
}
