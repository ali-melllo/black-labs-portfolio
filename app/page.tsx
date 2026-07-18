"use client"

import { StripedPattern } from "@/components/magicui/striped-pattern";
import { AuroraHero } from "@/components/ui/aurara-hero";

export default function Page() {
  return (
    <div className="flex min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto relative overflow-">
      <div className="hidden md:flex h-full w-3 absolute inset-y-0 z-30 -left-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="right" className="fill-muted" />
      </div>
      <div className=" hidden md:flex h-full w-3 absolute inset-y-0 z-30 -right-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="left" className="fill-muted" />
      </div>

      <AuroraHero />




    </div>
  )
}
