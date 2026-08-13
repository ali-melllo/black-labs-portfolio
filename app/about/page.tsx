"use client"

import { CinematicHero } from '@/components/ui/cinematic'
import { Header } from '@/components/ui/header'

export default function page() {
    return (
        <>
            <Header />

            <div className='h-[300vh]'>
                <CinematicHero />
            </div>
        </>
    )
}
