import { Marquee } from './marquee'
import { LOGOS } from '@/lib/utils'
import Image from 'next/image'

export default function CompaniesLogos() {
    return (

        <div className="relative w-8/12! mx-auto mt-50 flex flex-col items-center justify-center overflow-hidden bg-background">
            <h1 className="text-3xl font-extrabold text-muted-foreground">See Which Companies Trusted US</h1>
            <Marquee reverse className="[--duration:20s] mt-20">
                {LOGOS.map((review) => (
                    <Image
                        alt={review.alt}
                        className="w-20 h-20 rounded-xl mx-5 grayscale-100 opacity-50"
                        src={review.img}
                        key={review.img}
                        width={100}
                        height={100}
                    />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-background"></div>
        </div>
    )
}
