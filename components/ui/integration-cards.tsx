"use client"

import IntegrationDemo from "./integration-demo";
import EverythingElseCard from "./everything-else";
import { DottedMap } from "./dotted-map";
import AnalyticsCard from "./analytics-demo";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function IntegrationCards() {

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
      const controls = animate(color, COLORS_TOP, {
          ease: "easeInOut",
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
      });

      return () => controls.stop();
  }, [color]);

  const aurora = useMotionTemplate`
    radial-gradient(
      160% 160% at 50% 0%,
      transparent 35%,
      ${color}
    )
  `;

  return (
    <>
      <motion.section className="relative min-h-[50vh] mt-30 w-full z-20 overflow-hidden bg-background">
        <motion.div
          aria-hidden
          style={{
            backgroundImage: aurora,
          }}
          className="absolute inset-0"
        />
      </motion.section>

      <motion.section className="relative min-h-[50vh] rotate-180 w-full z-30 bg-background">
        <motion.div
          aria-hidden
          style={{
            backgroundImage: aurora,
          }}
          className="absolute inset-0"
        />

        <div className="rotate-180 w-full px-10 -bottom-100 gap-5 absolute z-40 flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-5 justify-center w-full">

            <div className="w-full md:w-8/12 flex p-6 justify-center items-center overflow-hidden md:h-96 rounded-3xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl">
              <IntegrationDemo />
            </div>

            <div className="w-full md:w-4/12 h-96 flex flex-col overflow-hidden relative justify-center items-center rounded-3xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl">
              <EverythingElseCard />
            </div>

          </div>
          <div className="flex flex-col md:flex-row-reverse  items-center gap-5 justify-center w-full">

            <div className="w-full md:w-8/12 mt-3 md:mt-0 overflow-hidden h-96 flex flex-col relative rounded-3xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl">
              <h3 className="text-lg z-30 px-5 pt-5 font-semibold text-foreground ">No Matter Where You Are</h3>
              <p className="text-xs z-30 p-5 pt-2 font-normal text-neutral-400 max-w-sm">
                With our WorldWide developer team you can access to our services and support from anywhere in the world.
              </p>
              <DottedMap className="z-10 mask-[radial-gradient(50%_60%_at_50%_50%,white_0%,transparent_100%)]" />
              {/* <div className="absolute z-20 rounded-r-2xl h-full right-0 inset-y-0 w-90 bg-linear-to-l from-background to-transparent" />
                            <div className="absolute z-20 rounded-l-2xl h-full left-0  inset-y-0 w-90 bg-linear-to-r from-background to-transparent" />
                            <div className="absolute z-20 rounded-b-3xl h-30 bottom-0 w-full bg-linear-to-t from-background to-transparent" />
                            <div className="absolute z-20 rounded-t-2xl h-100 top-0 w-full bg-linear-to-b from-background to-transparent" /> */}

            </div>

            <div className="w-full hidden md:block mt-3 md:mt-0 md:w-4/12 h-96 rounded-3xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-2xl">
              <AnalyticsCard />
            </div>

          </div>
        </div>

      </motion.section>

    </>
  )
}
