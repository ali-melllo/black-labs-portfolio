"use client"

import { Marquee } from './marquee'
import { LOGOS } from '@/lib/utils'
import Image from 'next/image'

export default function CompaniesLogos() {
    return (

        <div className="relative w-full  max-w-svw mx-auto flex flex-col items-center justify-center overflow-hidden bg-transparent">
            <h1 className="text-lg md:text-3xl font-extrabold text-muted-foreground">See Which Companies Trusted US</h1>
            <Marquee reverse className="[--duration:20s] mt-20">
                {LOGOS.map((review) => (
                    <Image
                        alt={review.alt}
                        className="w-20 h-20 object-cover rounded-xl mx-2 grayscale-100 opacity-40"
                        src={review.img}
                        key={review.img}
                        width={100}
                        height={100}
                    />
                ))}
            </Marquee>
        </div>
    )
}
