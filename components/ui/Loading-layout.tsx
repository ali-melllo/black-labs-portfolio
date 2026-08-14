"use client"

import StripedPattern from "../magicui/striped-pattern"
import { Skeleton } from "./skeleton"

export default function LoadingLayout() {
    return (
        <div className="h-svh w-full relative md:max-w-7xl 2xl:max-w-[90em] mx-auto">
            <div className="hidden md:flex h-full w-3 absolute inset-y-0 z-30 -left-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
                <StripedPattern direction="right" className="fill-muted" />
            </div>
            <div className=" hidden md:flex h-full w-3 absolute inset-y-0 z-30 -right-3 shadow-2xl border flex-col items-center justify-center overflow-hidden">
                <StripedPattern direction="left" className="fill-muted" />
            </div>

            <div className="h-20 fixed top-0 inset-x-0 z-40 flex items-center px-5 bg-background w-full [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl">
                <div className="w-2/12 flex items-center">
                    <Skeleton className="size-14 rounded-full" />
                    <Skeleton className="h-5 w-20 rounded-4xl ml-3" />
                </div>
                <div className="w-8/12 flex items-center justify-center gap-13">
                    <Skeleton className="h-5 w-15 rounded-4xl" />
                    <Skeleton className="h-5 w-15 rounded-4xl" />
                    <Skeleton className="h-5 w-15 rounded-4xl" />
                    <Skeleton className="h-5 w-15 rounded-4xl" />
                </div>
                <div className="w-2/12 flex items-center gap-6 justify-end">
                    <Skeleton className="h-7 w-10 rounded-4xl" />
                    <Skeleton className="h-10 w-40 rounded-2xl" />
                </div>
            </div>

            <div className="flex flex-col items-center mt-20 md:max-w-7xl 2xl:max-w-[90em] mx-auto">
                <Skeleton className="h-8 w-100 rounded-4xl mt-28" />
                <Skeleton className="h-20 w-250 rounded-[3em] mt-20" />
                <Skeleton className="h-4 w-170 rounded-4xl mt-10" />
                <Skeleton className="h-4 w-150 rounded-4xl mt-3" />
                <div className="flex w-full justify-center gap-10 items-center">
                    <Skeleton className="h-12 w-60 rounded-4xl mt-10" />
                    <Skeleton className="h-12 w-60 rounded-4xl mt-10" />
                </div>
            </div>
        </div>
    )
}
