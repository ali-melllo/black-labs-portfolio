"use client"

import { IMac } from "@/components/ui/imac";
import { Iphone } from "@/components/ui/iphone";
import { MacbookPro } from "@/components/ui/macbook-demo";
import { DollarSignIcon, Eye, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { CompaniesList } from "./companies-list";
import { LogoCloud } from "./collabration";

type Items = {
    srcDesktop: string;
    srcMobile: string;
    url: string;
    title: string
    description: string;
    tags: string[]
}[]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function TemplateDemo({ templates }: { templates: Items }) {


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
        <div className="flex flex-col items-center mt-48 w-full overflow-hidden">
            <h1 className="text-3xl font-bold bg-opacity-50 bg-linear-to-t from-neutral-400 to-neutral-900  dark:from-neutral-50 dark:to-neutral-400 bg-clip-text! text-transparent md:mt-10 tracking-tighter md:text-5xl lg:text-7xl">
                Our Projects & Templates
            </h1>

            <p className="max-w-11/12 mt-10 text-xs md:text-base  text-muted-foreground font-semibold text-center">
                Browse In What We have Made so Far and choose On Your Own preference to your needs
            </p>

            {templates.map((template, i) => {
                const isReversed = i % 2 !== 0;

                return (
                    <div
                        key={`template-${i}`}
                        className={cn(
                            "flex flex-col md:flex-row w-full items-center md:h-[30em] justify-between px-10 md:mt-20",
                            isReversed && " flex-col md:flex-row-reverse"
                        )}
                    >
                        <div className={`w-full md:w-6/12 relative h-80 md:h-full flex`}>
                            <IMac
                                src={template.srcDesktop}
                                className={`w-6/12 absolute h-40 md:h-80 scale-120 z-10 ${isReversed ? "left-2 md:left-22" : "left-2 md:left-7"} bottom-0  md:bottom-10`} />
                            <MacbookPro
                                src={template.srcDesktop}
                                className={`w-6/12 absolute h-32 md:h-60 z-10  ${isReversed ? "left-38 md:left-72 2xl:left-78" : "left-38 md:left-63"} -bottom-5 md:bottom-0`}
                            />
                            <div className={`w-20 md:w-40 absolute  ${isReversed ? "left-[19em] md:left-[28em] 2xl:left-[33em]" : "left-[19em] md:left-[28em]"} top-10 md:top-24 z-0`}>
                                <Iphone src={template.srcMobile} />
                            </div>
                        </div>

                        <div className="w-full md:w-5/12 gap-5 h-full items-center md:justify-center flex flex-col">
                            <h1 className="mt-10 md:mt-24 text-left w-full font-bold text-lg md:text-3xl">{template.title}</h1>
                            <p className="text-left md:w-10/12 mr-auto text-xs md:text-sm">{template.description}</p>
                            <div className="flex items-center mr-auto gap-2">
                                {template.tags.map((tag, i) => (
                                    <span key={`tag-template-${i}`} className="rounded-4xl text-nowrap px-2 py-1 font-medium text-xs bg-background flex justify-center items-center [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl">{tag}</span>
                                ))}
                            </div>

                            <div className="flex mt-10 items-center mr-auto w-full gap-5 justify-between">
                                <Link href={template.url} target="blank" className="cursor-pointer bg-foreground text-sm w-6/12 font-medium text-background rounded-xl flex gap-2 hover:scale-105 transition-all duration-300 justify-center items-center h-10 ">
                                    <Eye />
                                    Show Preview
                                </Link>
                                <button className=" text-sm md:text-base w-6/12 font-bold text-white rounded-xl flex gap-2 hover:scale-105 transition-all duration-300 justify-center items-center h-10  bg-linear-to-br from-blue-400 to-blue-600  shadow-xl">
                                    <DollarSignIcon size={15} />
                                    Order Template
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

            <motion.section className="relative min-h-[50vh] w-full z-20 overflow- bg-background">
                <motion.div
                    aria-hidden
                    style={{
                        backgroundImage: aurora,
                    }}
                    className="absolute inset-0"
                />
                <div className="w-full relative flex justify-center items-center md:mt-20">
                    <button

                        className={`text-sm md:text-base w-full mx-10 md:w-80 font-bold text-background rounded-xl flex gap-2 hover:scale-105 transition-all duration-300 justify-center items-center h-12  bg-foreground  shadow-xl`}>
                        <Search size={15} />
                        Browse All Projects
                    </button>



                </div>

                <div className="absolute top-70 2xl:top-96 z-60 w-full h-80">
                    <CompaniesList className="rotate- bg-transparent! top-80" />
                </div>


            </motion.section>
            <motion.section className="relative min-h-[50vh] rotate-180 w-full z-10 overflow-hidden bg-background">
                <motion.div
                    aria-hidden
                    style={{
                        backgroundImage: aurora,
                    }}
                    className="absolute inset-0"
                />


            </motion.section>
            <div className="h-full -mt-80 z-30 w-full place-content-center relative px-4">
                <section className=" mx-auto grid max-w-3xl">
                    <h2 className="mb-6 text-center font-bold text-lg text-muted-foreground tracking-tight md:text-4xl">
                        Companies we{" "}
                        <span className="font-semibold text-primary">collaborate</span> with.
                    </h2>

                    <LogoCloud className="mt-20" />


                </section>

                <div className="absolute z-50 h-60 right-0 top-55 w-64 bg-linear-to-l from-background to-transparent" />
                <div className="absolute z-50 h-60 left-0 top-55 w-64 bg-linear-to-r from-background to-transparent" />


            </div>
        </div>
    )
}