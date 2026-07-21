"use client"

import { StripedPattern } from "@/components/magicui/striped-pattern";
import { GridBeam } from "@/components/ui/grid-beam";
import { HeroSection } from "@/components/ui/hero-section";

export default function Page() {
  return (
    <>
    
      <div className="flex bg-background justify-start min-h-svh md:max-w-7xl pb-96 2xl:max-w-[90em] mx-auto relative">
        <div className="hidden md:flex h-full w-3 absolute inset-y-0 z-30 -left-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
          <StripedPattern direction="right" className="fill-muted" />
        </div>
        <div className=" hidden md:flex h-full w-3 absolute inset-y-0 z-30 -right-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
          <StripedPattern direction="left" className="fill-muted" />
        </div>

        <HeroSection />
      </div>
      </>
  )
}
