"use client"

import { StripedPattern } from "@/components/magicui/striped-pattern";
import { HeroSection } from "@/components/ui/hero-section";
import TemplateDemo from "@/components/ui/template-demo";
import { TEMPLATES } from "@/lib/utils";

import { ChartColumn, Puzzle, Zap } from "lucide-react";

export default function Page() {
  return (

    <div className="flex flex-col z-20 justify- min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto pb-96 relative">
      <div className="hidden md:flex h-full w-3 absolute inset-y-0 z-30 -left-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="right" className="fill-muted" />
      </div>
      <div className=" hidden md:flex h-full w-3 absolute inset-y-0 z-30 -right-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="left" className="fill-muted" />
      </div>

      <HeroSection />

      <div className="w-full flex px-5 md:px-10 flex-col md:flex-row gap-5 mt-20">
        <div className="h-44 md:w-4/12 bg-background gap-5 p-5 flex flex-col [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
          <Zap className="stroke-blue-500" />
          <h2 className="font-semibold">Lightning-fast deployments </h2>
          <p className="text-muted-foreground text-sm">Push to production in seconds. Our CI/CD pipeline handles builds, tests, and rollbacks automatically.</p>
        </div>
        <div className="h-44 md:w-4/12 bg-background gap-5 p-5 flex flex-col [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
          <ChartColumn className="stroke-blue-500" />
          <h2 className="font-semibold">Built-in analytics </h2>
          <p className="text-muted-foreground text-sm">Track user behavior, monitor performance, and gain actionable insights without third-party tools.</p>
        </div>
        <div className="h-44 md:w-4/12 bg-background gap-5 p-5 flex flex-col [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
          <Puzzle className="stroke-blue-500" />
          <h2 className="font-semibold">Seamless integrations </h2>
          <p className="text-muted-foreground text-sm">Connect with your existing stack. Slack, GitHub, Jira, and 100+ integrations out of the box.</p>
        </div>
      </div>

    <TemplateDemo templates={TEMPLATES}/>

    </div>

  )
}
