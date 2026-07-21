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
import { AuroraText } from "./aurora-text";
import { Code, Computer } from "lucide-react";
import { OrbitingCircles } from "./orbiting-circles";
import { Icons } from "@/lib/icons/icons";
import { Globe } from "./globe";
import { MessageDemo } from "./chat-room";
import { Keyboard } from "./keyboard";
import { FlickeringGrid } from "./flickering-grid";
import { Iphone } from "./iphone";
import ImageAnimate from "./image-animate";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const HeroSection = () => {
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
                        className="size-full md:size-auto"
                        size={0.5}
                        color={resolvedTheme === "light" ? "#000000" : "#ffffff"}
                    />
                </div>

                <div className="size-full flex flex-col gap-5 md:gap-10 mt-5 md:mt-20 items-center">
                    <div
                        className={cn(
                            "flex z-30 h-10 text-nowrap items-center justify-center rounded-full border border-black/5 bg-neutral-100 text-sm! text-white transition-all hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}>
                        <AnimatedShinyText className="mx-auto px-5 py-2 text-xs md:text-base font-bold transition hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>Modern Website Designs Related To your Business</span>
                        </AnimatedShinyText>
                    </div>

                    <h1 className="text-2xl font-bold bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent md:mt-10 tracking-tighter md:text-5xl lg:text-7xl">
                        Order <AuroraText>Modern</AuroraText> Applications
                    </h1>

                    <p className="max-w-11/12 text-xs md:text-base md:max-w-6/12 text-muted-foreground font-semibold text-center">
                        Turn your vision into a premium digital experience that captivates every visitor.
                        Custom-designed websites built for speed, performance, and measurable results.
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
                        <button className={"bg-background w-56 md:w-64 rounded-2xl hover:scale-105 transition-all duration-300 text-foreground h-12 flex justify-center items-center gap-2 text-base p-3 z-30 font-bold [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"}>
                            <Computer size={22} />
                            Browse Templates
                        </button>
                        <button className={"bg-primary w-56 md:w-64 rounded-2xl hover:scale-105 transition-all duration-300 text-background h-12 flex justify-center items-center gap-2 text-base p-3 z-30 font-bold [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl"}>
                            <Code size={22} />
                            Order A Project
                        </button>
                    </div>
                </div>




                <div className="absolute z-20 -bottom-5 h-[25em] md:h-[30em] 2xl:h-[40em] pt-10 w-full overflow-hidden ">
                    <div className="relative h-full w-full flex-1">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="h-full w-full"
                        />
                    </div>
                </div>

                <div
                    className={cn(
                        " absolute -bottom-16 md:-bottom-10 flex z-30 h-14 text-nowrap items-center justify-center rounded-full border text-sm! transition-all hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className="mx-auto px-5 py-2 text-xs md:text-base font-bold text-muted-foreground transition hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>Related to your needs with our developers</span>
                    </AnimatedShinyText>
                </div>
            </motion.section>

            <motion.section className="relative min-h-[50vh] w-full z-10 rotate-180 overflow-hidden bg-background">
                <motion.div
                    aria-hidden
                    style={{
                        backgroundImage: aurora,
                    }}
                    className="absolute inset-0"
                />
            </motion.section>


            <div className="flex flex-col z-30 items-center gap-10 -mt-64 md:-mt-80 px-5 md:px-10">
                <h1 className="text-2xl font-bold bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent md:mt-10 tracking-tighter md:text-5xl lg:text-7xl">
                    Every Feature Needed
                </h1>

                <p className="max-w-11/12 text-xs md:text-base md:max-w-6/12 text-muted-foreground font-semibold text-center">
                    Add Every Feature that is Required or Related To your Application Based on your needs
                </p>


                <div className="h-[53em] w-full flex flex-col md:flex-row gap-5 mt-10">
                    <div className="h-full w-full md:w-4/12 flex flex-col gap-5">

                        {/* Top Right Section */}
                        <div className="h-[30em] md:h-6/12  flex flex-col w-full bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
                            <h1 className="text-xl z-20 px-5 pt-5 font-extrabold bg-opacity-50 bg-linear-to-t from-neutral-300 to-neutral-800  dark:from-neutral-200 dark:to-neutral-600 bg-clip-text! text-transparent  tracking-tighter">
                                Every Plugins Required With Your App
                            </h1>
                            <p className="text-muted-foreground px-5 font-medium text-xs w-10/12 z-20 mt-2">Our Developers Team will Integrate any third party libraries or individuals to your platform </p>

                            <div className="relative grayscale scale-75 flex h-full w-full flex-col items-center justify-center">
                                <OrbitingCircles iconSize={40}>
                                    <Icons.whatsapp />
                                    <Icons.notion />
                                    <Icons.openai />
                                    <Icons.googleDrive />
                                    <Icons.gitHub />
                                </OrbitingCircles>
                                <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                                    <Icons.whatsapp />
                                    <Icons.notion />
                                    <Icons.openai />
                                    <Icons.googleDrive />
                                </OrbitingCircles>
                                <OrbitingCircles iconSize={30} radius={50} speed={2}>
                                    <Icons.whatsapp />
                                    <Icons.openai />
                                    <Icons.googleDrive />
                                </OrbitingCircles>
                            </div>
                            <div className="absolute rounded-r-2xl h-full right-0 w-64 bg-linear-to-l from-background to-transparent" />
                            <div className="absolute z-10 rounded-l-2xl h-full left-0 w-64 bg-linear-to-r from-background to-transparent" />
                            <div className="absolute rounded-b-2xl h-28 bottom-0 w-full bg-linear-to-t from-background to-transparent" />

                        </div>



                        {/* Bottom Right Section */}
                        <div className="h-[30em] md:h-6/12 relative overflow-hidden w-full bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
                            <h1 className="text-xl px-5 pt-5 font-bold bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent  tracking-tighter">
                                World Wide Access To Your Application
                            </h1>
                            <p className="text-muted-foreground px-5 font-medium text-xs w-10/12 z-20 mt-2">With our edge network, we host your website by going into each city by ourselves.</p>

                            <div className="relative flex size-full  items-center justify-center overflow-hidden ">
                                <Globe />
                            </div>

                            <div className="absolute rounded-r-2xl h-full right-0 w-64 bg-linear-to-l from-background to-transparent" />
                            <div className="absolute z-10 rounded-l-2xl h-full left-0 w-64 bg-linear-to-r from-background to-transparent" />
                            <div className="absolute rounded-b-2xl h-40 bottom-0 w-full bg-linear-to-t from-background to-transparent" />
                        </div>
                    </div>


                    {/* Middle Section */}

                    <div className="h-full w-full md:w-4/12 flex flex-col bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
                        <h1 className="text-xl font-bold z-20 px-5 pt-5 bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent  tracking-tighter">
                            Ai Chat Or Agents With any Model
                        </h1>
                        <p className="text-muted-foreground px-5 font-medium text-xs w-10/12 z-20 mt-2">Connect with your Favorite Model. AI-powered insights help you work smarter together.</p>

                        <div className="px-6 z-20">
                            <MessageDemo />
                        </div>

                        <div className="px-5 w-full overflow-hidden rounded-b-2xl">
                            <Keyboard />
                        </div>


                        <div className="absolute rounded-r-2xl h-full right-0 w-28 bg-linear-to-l from-background to-transparent" />
                        <div className="absolute z-10 rounded-l-2xl h-full left-0 w-28 bg-linear-to-r from-background to-transparent" />
                        <div className="absolute rounded-b-2xl h-20 bottom-0 w-full bg-linear-to-t from-background to-transparent" />
                    </div>



                    <div className="h-full w-full md:w-4/12 flex flex-col gap-5">

                        {/* Top Right Section */}
                        <div className="h-6/12 flex flex-col w-full relative overflow-hidden bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
                            <h1 className="text-xl font-bold z-20 px-5 pt-5 bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent  tracking-tighter">
                                Supporting Around All Devices
                            </h1>
                            <p className="text-muted-foreground px-5 font-medium text-xs w-10/12 z-20 mt-2">Developing Multi cross Platforms around any existing devices from logic to design </p>

                            <div className="bg-background mt-5 relative h-125 w-full overflow-hidden z-0">
                                <FlickeringGrid
                                    className="absolute inset-0 z-0 size-full"
                                    squareSize={4}
                                    gridGap={6}
                                    color="#6B7280"
                                    maxOpacity={0.5}
                                    flickerChance={0.1}
                                    height={800}
                                    width={800}
                                />

                                <div className="absolute z-20 rounded-r-2xl h-full right-0 w-20 bg-linear-to-l from-background to-transparent" />
                                <div className="absolute z-20 rounded-l-2xl h-full left-0 w-20 bg-linear-to-r from-background to-transparent" />
                                <div className="absolute h-28 top-0 w-full bg-linear-to-b from-background to-transparent" />

                                <div className="mt-10 mx-auto bottom-0 z-0 w-6/12 h-3/6">
                                    <Iphone className="mx-auto" />
                                </div>

                            </div>

                            <div className="absolute rounded-b-2xl h-40 bottom-0 w-full bg-linear-to-t from-background to-transparent" />
                        </div>


                        <div className="h-6/12 w-full overflow-hidden bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">

                            <h1 className="text-xl font-bold z-30 px-5 pt-5 bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent  tracking-tighter">
                                Bring Your Ideas To Real life Code
                            </h1>
                            <p className="text-muted-foreground px-5 font-medium text-xs w-10/12 z-30 mt-2">Our Team will make your visions turn into reality of your business & Application</p>

                            <div className="z-0 mt-5 relative h-full w-full">
                                <ImageAnimate />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};