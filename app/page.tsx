"use client"

import dynamic from "next/dynamic";
import { TEMPLATES } from "@/lib/utils";
import { Header } from "@/components/ui/header";
import { useEffect, useState } from "react";
import LoadingLayout from "@/components/ui/Loading-layout";


const FeaturesCards = dynamic(() => import("@/components/ui/features-cards"));
const TemplateDemo = dynamic(() => import("@/components/ui/template-demo"));
const CompaniesLogos = dynamic(() => import("@/components/ui/companies-logos"));
const IntegrationCards = dynamic(() => import("@/components/ui/integration-cards"));
const FeaturesGrid = dynamic(() => import("@/components/ui/features-grid"));
const AiIntegration = dynamic(() => import("@/components/ui/ai-integration"));
const Reviews = dynamic(() => import("@/components/ui/reviews"));
const EffortlessScheduling = dynamic(() => import("@/components/ui/schedule"));
const FooterPreview = dynamic(() => import("@/components/ui/footer"));
const ScaleSection = dynamic(() => import("@/components/ui/scale-section"));
const FeaturesSection = dynamic(() => import("@/components/ui/features-section"));
const HeroSection = dynamic(() => import("@/components/ui/hero-section"));
const StripedPattern = dynamic(() => import("@/components/magicui/striped-pattern"));



export default function Page() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingLayout />

  return (<>
    <Header />

    <div className="flex flex-col z-20  min-h-svh md:max-w-7xl 2xl:max-w-[90em] mx-auto relative">
      <div className="hidden md:flex h-full w-3 absolute inset-y-0 z-30 -left-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="right" className="fill-muted" />
      </div>
      <div className=" hidden md:flex h-full w-3 absolute inset-y-0 z-30 -right-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
        <StripedPattern direction="left" className="fill-muted" />
      </div>

      <HeroSection />

      <section className="-mt-50 z-40 relative">
        <CompaniesLogos />
        <div className="pointer-events-none block absolute h-28 bottom-0 left-0 w-6/12 bg-linear-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none block absolute h-28 bottom-0 right-0 w-6/12 bg-linear-to-l from-white dark:from-background"></div>
      </section>

      <section className="mt-40">
        <ScaleSection />
      </section>

      <section className="mt-40">
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
  </>
  )
}