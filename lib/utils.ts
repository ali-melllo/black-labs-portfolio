import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const TEMPLATES = [
  {
    srcDesktop: "/assets/images/templates/movies-template-desktop.webp",
    srcMobile: "/assets/images/templates/movies-template-mobile.webp",
    url: "https://movies-orcin-chi-71.vercel.app/",
    title: "Movies And series Real Time Updated Platform",
    description: "A next js , tailwind project configured with shadcn and modern components supporting PWA connected to global movie database which provides updated and all existing movies and series with features like trailer watch , actors , seasons check , reviews & more ...",
    tags: ["Next Js", "Tailwind", "Shadcn", "MovieDB", "Redux"]
  },
  {
    srcDesktop: "/assets/images/templates/movies-template-desktop.webp",
    srcMobile: "/assets/images/templates/movies-template-mobile.webp",
    url: "https://movies-orcin-chi-71.vercel.app/",
    title: "Movies And series Real Time Updated Platform",
    description: "A next js , tailwind project configured with shadcn and modern components supporting PWA connected to global movie database which provides updated and all existing movies and series with features like trailer watch , actors , seasons check , reviews & more ...",
    tags: ["Next Js", "Tailwind", "Shadcn", "MovieDB", "Redux"]
  }
]