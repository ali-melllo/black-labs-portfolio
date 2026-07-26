"use client"

import * as React from "react"
import { motion } from "motion/react"

// ---------------------------------------------------------------------------
// FlowLine — a static background stroke plus one (or two) glowing strokes
// that travel along the same path on a loop. The dash length is measured
// from the actual rendered path via getTotalLength(), not hardcoded — the
// original markup had these frozen at one instant of that measurement.
// ---------------------------------------------------------------------------

interface FlowLineProps {
    d: string
    gradientId: string
    dashLength?: number
    duration?: number
    delay?: number
    /** CSS filter applied to the single core stroke (e.g. a soft blur). */
    coreFilter?: string
    /** Render a second, wider, low-opacity stroke behind the core for glow. */
    halo?: boolean
    haloFilter?: string
}

function FlowLine({
    d,
    gradientId,
    dashLength = 60,
    duration = 3,
    delay = 0,
    coreFilter,
    halo = false,
    haloFilter,
}: FlowLineProps) {
    const pathRef = React.useRef<SVGPathElement>(null)
    const [length, setLength] = React.useState(0)

    React.useEffect(() => {
        if (pathRef.current) {
            setLength(pathRef.current.getTotalLength())
        }
    }, [d])

    const dashArray = length ? `${dashLength} ${length}` : undefined
    const loopDistance = length + dashLength

    return (
        <>
            <path d={d} stroke="#F2F2F2" strokeWidth={1.81208} fill="none" />

            {halo && length > 0 && (
                <motion.path
                    d={d}
                    stroke={`url(#${gradientId})`}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    fill="none"
                    opacity={0.3}
                    strokeDasharray={dashArray}
                    style={haloFilter ? { filter: haloFilter } : undefined}
                    animate={{ strokeDashoffset: [0, -loopDistance] }}
                    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
                />
            )}

            <motion.path
                ref={pathRef}
                d={d}
                stroke={`url(#${gradientId})`}
                strokeWidth={2.5}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={dashArray}
                style={coreFilter ? { filter: coreFilter } : undefined}
                animate={length > 0 ? { strokeDashoffset: [0, -loopDistance] } : undefined}
                transition={{ duration, repeat: Infinity, ease: "linear", delay }}
            />
        </>
    )
}

function TailGradientDefs({ id }: { id: string }) {
    return (
        <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FA9A63" stopOpacity="0" />
                <stop offset="50%" stopColor="#FA9A63" stopOpacity="1" />
                <stop offset="100%" stopColor="#FA9A63" stopOpacity="0" />
            </linearGradient>
        </defs>
    )
}

// ---------------------------------------------------------------------------
// The three scattered line clusters
// ---------------------------------------------------------------------------

function CornerLinesBottomLeft({ gradientId }: { gradientId: string }) {
    const paths = [
        "M12.427 165.594V126.58L32.3598 103.929H200.148",
        "M200.148 85.8084H27.8296L0.648438 113.896",
        "M0.648438 70.4057H200.148",
        "M200.148 50.4728H22.3934L0.648438 30.54",
        "M0.648438 0.640625L32.3598 32.352H200.148",
    ]

    return (
        <svg width="201" height="166" viewBox="0 0 201 166" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((d, i) => (
                <FlowLine
                    key={i}
                    d={d}
                    gradientId={gradientId}
                    dashLength={60}
                    coreFilter="blur(0.4px)"
                    delay={i * 0.15}
                />
            ))}
            <TailGradientDefs id={gradientId} />
        </svg>
    )
}

function CornerLinesTop({ gradientId }: { gradientId: string }) {
    const paths = [
        "M241.461 -19.625V7.85497L301.26 68.5597V123.375",
        "M284.045 123.375V77.6201L221.528 15.1033V-19.625",
        "M109.641 -20.625L152.669 26.8818H210.656L265.924 83.0563V123.375",
        "M247.803 122.875V91.2107L200.689 44.0966H79.2799L15.1406 -21.125",
        "M0.640625 -5.625L69.3134 62.2174H192.535L229.683 98.459V123.375",
    ]

    return (
        <svg width="303" height="124" viewBox="0 0 303 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((d, i) => (
                <FlowLine
                    key={i}
                    d={d}
                    gradientId={gradientId}
                    dashLength={30}
                    halo
                    haloFilter="drop-shadow(0 0 12px #FA9A63)"
                    delay={i * 0.15}
                />
            ))}
            <TailGradientDefs id={gradientId} />
        </svg>
    )
}

function CornerLinesBottomRight({ gradientId }: { gradientId: string }) {
    const paths = [
        "M118.875 0V64.2816L169.613 115.926V142",
        "M99.8516 0V76.966L144.664 121V142",
        "M82.6391 0V83.3087L30.1641 142.5M63.6122 0V74.2483L0.664062 142.5",
        "M136.094 0V51.5975L178.678 96.8995H296.463",
    ]

    return (
        // Original viewBox ("0 0 167 56") clipped almost the entire drawing —
        // the path coordinates run up to ~297x143. Corrected to match.
        <svg width="297" height="143" viewBox="0 0 297 143" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((d, i) => (
                <FlowLine key={i} d={d} gradientId={gradientId} dashLength={30} halo delay={i * 0.15} />
            ))}
            <TailGradientDefs id={gradientId} />
        </svg>
    )
}

// ---------------------------------------------------------------------------
// Decorative "chip" graphic (static, no animation needed)
// ---------------------------------------------------------------------------

function ChipGraphic() {
    return (
        <div className="absolute right-3 bottom-16">
            <div className="absolute -inset-3">
                <div className="absolute top-1/2 h-20 w-3 -translate-y-1/2">
                    {[0, 17, 34, 51, 68].map((top) => (
                        <div key={top} className="absolute left-0 h-1.5 w-3 bg-[#EEEEEE]" style={{ top }} />
                    ))}
                </div>
                <div className="absolute top-1/2 right-0 h-20 w-3 -translate-y-1/2">
                    {[0, 17, 34, 51, 68].map((top) => (
                        <div key={top} className="absolute right-0 h-1.5 w-3 bg-[#EEEEEE]" style={{ top }} />
                    ))}
                </div>
                <div className="absolute left-1/2 flex h-3 w-20 -translate-x-1/2 items-center gap-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-3 w-1.5 self-stretch bg-[#EEEEEE]" />
                    ))}
                </div>
                <div className="absolute bottom-0 left-1/2 flex h-3 w-20 -translate-x-1/2 items-center gap-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-3 w-1.5 self-stretch bg-[#EEEEEE]" />
                    ))}
                </div>
            </div>
            <div className="relative size-28 overflow-hidden rounded-3xl bg-[#FA9A63] shadow-[0px_3.200000047683716px_9.600000381469727px_0px_rgba(0,0,0,0.12)]">
                <div className="absolute top-[-25.60px] left-[26.80px] size-16 rounded-full bg-orange-200 blur-[48px]" />
                <div className="absolute top-[82.38px] left-[-47.20px] h-32 w-5 origin-top-left rotate-[-59.09deg] rounded-full bg-orange-200 blur-[48px]" />
                <div className="absolute top-[-35.30px] left-[113.80px] h-16 w-14 rounded-full bg-white blur-[48px]" />
                <div className="absolute top-[45.60px] left-[63.20px] h-44 w-36 rounded-full bg-orange-200/60 blur-[160px]" />
            </div>
        </div>
    )
}

// ---------------------------------------------------------------------------
// Assembled card
// ---------------------------------------------------------------------------

export default function EverythingElseCard() {
    const gradientBottomLeft = React.useId()
    const gradientTop = React.useId()
    const gradientBottomRight = React.useId()

    return (
        <div className="w-full min-h-full overflow-hidden rounded-2xl ">
            <h3 className="text-lg p-5 font-semibold text-foreground z-10">Performance & resources usage balanced</h3>
            <div className="relative">
                <div className="absolute inset-0">
                    <div className="relative ml-10 h-78.5 w-84 scale-110 overflow-hidden mask-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,1)_50%)] dark:mask-[radial-gradient(60%_40%_at_50%_50%,white_0%,transparent_100%)]">
                        <div className="absolute bottom-6.5 left-0">
                            <CornerLinesBottomLeft gradientId={gradientBottomLeft} />
                        </div>

                        <div className="absolute top-1 left-0">
                            <CornerLinesTop gradientId={gradientTop} />
                        </div>

                        <div className="absolute right-0.5 bottom-1">
                            <CornerLinesBottomRight gradientId={gradientBottomRight} />
                        </div>

                        <div className="absolute -bottom-48 left-12 -translate-x-full -translate-y-full">
                            <div className="absolute -top-3 right-8 h-3 w-1.5 bg-[#EEEEEE]" />
                            <div className="relative size-28 rounded-3xl bg-white/50 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.12)]" />
                        </div>

                        <ChipGraphic />
                    </div>
                </div>


            </div>
        </div>
    )
}