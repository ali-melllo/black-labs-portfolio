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
import { Iphone } from "./iphone";
import { Safari } from "./safari";
import { IMac } from "./imac";
import { AuroraText } from "./aurora-text";
import { Button } from "./button";
import { Code, Computer, File, Phone } from "lucide-react";

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
      160% 160% at 50% 0%,
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
                        size={0.5}
                        color={resolvedTheme === "light" ? "#000000" : "#ffffff"}
                    />
                </div>

                <div className="size-full flex flex-col gap-10 mt-20 items-center">
                    <div
                        className={cn(
                            "flex z-30 h-10 text-nowrap items-center justify-center rounded-full border border-black/5 bg-neutral-100 text-sm! text-white transition-all hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}>
                        <AnimatedShinyText className="mx-auto px-5 py-2 text-base font-bold transition hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>Modern Website Designs Related To your Business</span>
                        </AnimatedShinyText>
                    </div>

                    <h1 className="text-4xl font-bold mt-10 tracking-tighter md:text-5xl lg:text-7xl">
                        Order <AuroraText>Modern</AuroraText> Applications
                    </h1>

                    <p className="max-w-6/12 text-muted-foreground font-semibold text-center">
                        Turn your vision into a premium digital experience that captivates every visitor.
                        Custom-designed websites built for speed, performance, and measurable results.
                    </p>

                    <div className="flex justify-between items-center gap-10">
                        <button className={"bg-background w-64 rounded-2xl hover:scale-105 transition-all duration-300 text-foreground h-12 flex justify-center items-center gap-2 text-base p-3 z-30 font-bold [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"}>
                            <Computer size={22}/>
                            Browse Templates
                        </button>
                        <button className={"bg-primary w-64 rounded-2xl hover:scale-105 transition-all duration-300 text-background h-12 flex justify-center items-center gap-2 text-base p-3 z-30 font-bold [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"}>
                            <Code size={22}/>
                            Order A Project
                        </button>
                    </div>
                </div>




                <div className="absolute z-20 -bottom-5 h-[20em] md:h-[40em] pt-10 w-full overflow-hidden ">
                    <div className="relative h-full w-full flex-1">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="h-full w-full"
                        />
                    </div>
                </div>

                <div
                    className={cn(
                        " absolute -bottom-10 flex z-30 h-14 text-nowrap items-center justify-center rounded-full border text-sm! transition-all hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className="mx-auto px-5 py-2 text-base font-bold text-muted-foreground transition hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>Related to your needs with our developers</span>
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