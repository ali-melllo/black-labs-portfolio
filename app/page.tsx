"use client"

import dynamic from "next/dynamic";

import { StripedPattern } from "@/components/magicui/striped-pattern";
import { HeroSection } from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import ScaleSection from "@/components/ui/scale-section";


import { TEMPLATES } from "@/lib/utils";


// Below-the-fold sections are code-split via next/dynamic. `ssr` stays on
// (the default) so the server still renders full HTML for each of these —
// nothing about what's visible or when it appears changes. The only effect
// is that each chunk's JS is split out of the main bundle instead of all
// being parsed/executed up front, which is what actually speeds up the
// initial load.
const FeaturesCards = dynamic(() => import("@/components/ui/features-cards"));
const TemplateDemo = dynamic(() => import("@/components/ui/template-demo"));
const CompaniesLogos = dynamic(() => import("@/components/ui/companies-logos"));
const IntegrationCards = dynamic(() => import("@/components/ui/integration-cards"));
const FeaturesGrid = dynamic(() => import("@/components/ui/features-grid"));
const AiIntegration = dynamic(() => import("@/components/ui/ai-integration"));
const Reviews = dynamic(() => import("@/components/ui/reviews"));
const EffortlessScheduling = dynamic(() => import("@/components/ui/schedule"));
const FooterPreview = dynamic(() => import("@/components/ui/footer"));

export default function Page() {
  return (

    <div className="flex flex-col z-20  min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto relative">
      <div className="hidden md:flex h-full w-3 absolute inset-y-0 z-30 -left-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="right" className="fill-muted" />
      </div>
      <div className=" hidden md:flex h-full w-3 absolute inset-y-0 z-30 -right-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="left" className="fill-muted" />
      </div>

      <HeroSection />

      <section className="-mt-50 z-40">
        <CompaniesLogos />
      </section>

      <section className="mt-40">
        <ScaleSection />
      </section>

      <section className="mt-48">
        <FeaturesSection />
      </section>

      <section className="mt-20">
        <FeaturesCards />
      </section>

      <TemplateDemo templates={TEMPLATES} />

      <section>
        <IntegrationCards />
      </section>

      <section className="mt-120 md:mt-10 px-10">
        <FeaturesGrid />
      </section>

      <section className="mt-20 ">
        <AiIntegration />
      </section>

      <section className="mt-20 md:mt-40 mb-20 md:mb-60 ">
        <Reviews />
      </section>


      <EffortlessScheduling />

      <FooterPreview />
    </div >

  )
}