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
    srcDesktop: "/assets/images/templates/configurator-template-desktop.webp",
    srcMobile: "/assets/images/templates/configurator-template-mobile.webp",
    url: "https://configurator-gamma-opal.vercel.app/en/",
    title: "3D Configurator For Home Extensions",
    description: "A 3D Configurator Web Application using next js , tailwind project configured with shadcn and modern components to choose from 3D assets and manual selection for your house customization with real time pricing & multi language support and more ...",
    tags: ["Next Js", "Tailwind", "Shadcn", "I18n", "Redux" , "SMTP"]
  },
  {
    srcDesktop: "/assets/images/templates/nft-template-desktop.webp",
    srcMobile: "/assets/images/templates/nft-template-mobile.webp",
    url: "https://adesanya.vercel.app/",
    title: "NFT & Digital Assets Crypto Marketplace",
    description: "Web3 marketplace Application using next js , tailwind project configured with shadcn and modern components integrated with AI & Phantom wallet for payments supporting multi payments methods different assets types",
    tags: ["Next Js", "Tailwind", "Shadcn", "I18n", "RTK" , "Phantom" , " Web3"]
  }
]