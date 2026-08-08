import React from 'react'
import { OrbitingCircles } from "./orbiting-circles";
import { Icons } from "@/lib/icons/icons";
import { Globe } from "./globe";
import { MessageDemo } from "./chat-room";
import { Keyboard } from "./keyboard";
import { FlickeringGrid } from "./flickering-grid";
import ImageAnimate from "./image-animate";
import { FeaturesIphone } from "./features-iphone";

export default function FeaturesSection() {
  return (
    <div className="flex flex-col z-30 items-center gap-10 px-5 md:px-10">
    <h1 className="text-3xl font-bold bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent md:mt-10 tracking-tighter md:text-5xl lg:text-7xl">
        Every Feature Needed
    </h1>

    <p className="max-w-11/12 text-xs md:text-base md:max-w-6/12 text-muted-foreground font-semibold text-center">
        Add Every Feature that is Required or Related To your Application Based on your needs
    </p>


    <div className="md:h-[53em] w-full flex flex-col md:flex-row gap-5 mt-10">
        <div className="h-full w-full md:w-4/12 flex flex-col gap-5">

            {/* Top Right Section */}
            <div className="h-[28em] md:h-6/12  flex flex-col w-full bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
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
            <div className="h-[28em] md:h-6/12 relative overflow-hidden w-full bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 rounded-2xl">
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

                    <div className="mt-10 mx-auto bottom-0 z-0 w-7/12 h-3/6">
                        <FeaturesIphone className="mx-auto" />
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
  )
}
