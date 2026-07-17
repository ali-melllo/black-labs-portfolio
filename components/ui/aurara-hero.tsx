"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
} from "framer-motion";
import { Particles } from "./particles";
import { SplineScene } from "@/components/ui/3d-robot";
import { AnimatedShinyText } from "./animated-shiny-text";
import { cn } from "@/lib/utils";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
    const { resolvedTheme } = useTheme();

    const color = useMotionValue(COLORS_TOP[0]);
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        const controls = animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });

        return () => controls.stop();
    }, [color]);

    useEffect(() => {
        const styles = getComputedStyle(document.documentElement);

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBackgroundColor(
            styles.getPropertyValue("--foreground").trim()
        );
    }, [resolvedTheme]);

    const backgroundImage = useMotionTemplate`
    radial-gradient(
      125% 125% at 50% 0%,
      ${backgroundColor} 50%,
      ${color}
    )
  `;


    return (
        <div className="flex w-full flex-col">
            <motion.section
                style={{ backgroundImage }}
                className="relative min-h-screen z-20 flex w-full place-content-center bg-background py-24 text-foreground"
            >


                <div className="size-full absolute inset-0 z-0">
                    <Particles size={0.7} color={resolvedTheme === "light" ? "#000000" : "#ffffff"} />
                </div>

                <div className="w-full h-[36em] bg-transparent -bottom-5 border-none absolute overflow-hidden">
                    <div className="flex-1 w-full relative">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>

                <div
                    className={cn(
                        "group rounded-full absolute flex justify-center items-center -bottom-13 min-w-64 px-5 h-14 border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className="flex items-center justify-center px-4 py-2 transition font-bold! text-lg ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ برترین طراهی مناسب کسب و کار شما ✨</span>
                    </AnimatedShinyText>
                </div>

            </motion.section>

            <motion.section
                style={{ backgroundImage }}
                className="relative grid min-h-screen w-full rotate-180 place-content-center overflow-hidden bg-background py-24"
            />
        </div>
    );
};