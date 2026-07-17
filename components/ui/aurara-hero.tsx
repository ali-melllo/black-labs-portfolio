"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "./animated-shiny-text";
import { Particles } from "./particles";
import { SplineScene } from "@/components/ui/3d-robot";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const { resolvedTheme } = useTheme();

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
      125% 125% at 50% 0%,
      transparent 35%,
      ${color}
    )
  `;

  return (
    <div className="flex w-full flex-col">
      <motion.section className="relative z-20 flex min-h-screen w-full items-center justify-center  bg-background py-24 text-foreground">
        {/* Aurora Overlay */}
        <motion.div
          aria-hidden
          style={{
            backgroundImage: aurora,
          }}
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 z-1">
          <Particles
            size={0.7}
            color={resolvedTheme === "light" ? "#000000" : "#ffffff"}
          />
        </div>

        <div className="absolute z-20 -bottom-5 h-[20em] md:h-[36em] w-full overflow-hidden bg-transparent">
          <div className="relative h-full w-full flex-1">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>

          <div
            className={cn(
              "group absolute -bottom-10 flex z-30 h-14 min-w-64 items-center justify-center rounded-full border border-black/5 bg-neutral-100 px-5 text-base text-white transition-all hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="px-4 py-2 md:text-lg font-bold transition hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ برترین طراحی مناسب کسب و کار شما ✨</span>
            </AnimatedShinyText>
          </div>
      </motion.section>

      <motion.section className="relative min-h-screen w-full rotate-180 overflow-hidden bg-background">
        <motion.div
          aria-hidden
          style={{
            backgroundImage: aurora,
          }}
          className="absolute inset-0"
        />
      </motion.section>
    </div>
  );
};