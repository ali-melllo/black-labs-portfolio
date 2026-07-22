"use client"

import { StripedPattern } from "@/components/magicui/striped-pattern";
import { HeroSection } from "@/components/ui/hero-section";
import { IMac } from "@/components/ui/imac";
import { Iphone } from "@/components/ui/iphone";
import { MacbookPro } from "@/components/ui/macbook-demo";
import { ChartColumn, Code, DollarSignIcon, Eye, Puzzle, Zap } from "lucide-react";

export default function Page() {
  return (


    <div className="flex flex-col bg-background z-20 justify-start min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto pb-96 relative">
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



      <div className="flex w-full items-center h-[30em] justify-between px-10 mt-20">
        <div className="w-6/12 relative h-full flex">
          <IMac
            src={"/assets/images/morty.webp"}
            className="w-6/12 absolute h-80 scale-120 z-10 left-5 bottom-10" />
          <MacbookPro
            src={"/assets/images/morty.webp"}
            className="w-6/12 absolute h-60 z-10 left-60 bottom-0"
          />
          <div className="w-40 absolute left-[28em] top-24 z-0">
            <Iphone
              src={"/assets/images/morty.webp"} />
          </div>
        </div>

        <div className="w-5/12 gap-5 h-full items-center justify-start flex flex-col">
          <h1 className="mt-24 text-left w-full font-bold text-3xl">Movies And series Real Time Platform</h1>
          <p className="text-left w-10/12 mr-auto text-sm">A next js , tailwind project configured with shadcn and modern components supporting PWA connected to global movie database which provides updated and all existing movies and series with features like trailer watch , actors , seasons check , reviews & more ...</p>
          <div className="flex items-center mr-auto gap-2">
            <span className="rounded-4xl px-2 py-1 font-medium text-xs bg-background flex justify-center items-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"> Next Js</span>
            <span className="rounded-4xl px-2 py-1 font-medium text-xs bg-background flex justify-center items-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"> Tailwind</span>
            <span className="rounded-4xl px-2 py-1 font-medium text-xs bg-background flex justify-center items-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"> Shadcn</span>
            <span className="rounded-4xl px-2 py-1 font-medium text-xs bg-background flex justify-center items-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"> MovieDB</span>
            <span className="rounded-4xl px-2 py-1 font-medium text-xs bg-background flex justify-center items-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"> Redux</span>
          </div>

          <div className="flex mt-10 items-center mr-auto w-full gap-5 justify-between">
            <button className="bg-foreground text-sm w-6/12 font-medium text-background rounded-xl flex gap-2 hover:scale-105 transition-all duration-300 justify-center items-center h-10 ">
              <Eye />
              Show Preview
            </button>
            <button className=" text-base w-6/12 font-bold text-white rounded-xl flex gap-2 hover:scale-105 transition-all duration-300 justify-center items-center h-10  bg-linear-to-br from-blue-400 to-blue-600  shadow-xl">
              <DollarSignIcon size={15}/>
              Order Template
            </button>
          </div>

        </div>
      </div>



    </div>

  )
}
