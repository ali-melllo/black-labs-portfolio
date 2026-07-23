"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import useScroll from "@/hooks/use-scroll"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const scrolled = useScroll(15);

  const [open, setOpen] = useState(false)

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);



  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
    const handleMediaQueryChange = () => {
      setOpen(false)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    handleMediaQueryChange()

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  if (!mounted) return <div className="w-full h-screen bg-transparent"></div>;

  return <header
    className={cn(
      "fixed inset-x-0 z-50 mx-auto flex max-w-full transform-gpu animate-slide-down-fade justify-center items-center overflow-hidden  border border-transparent  p-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
      open === true ? "h-52" : "h-20",
      scrolled || open === true
        ? "backdrop-blur-nav rounded-4xl rounded-t-none md:mt-2 md:rounded-t-4xl md:max-w-[79em] 2xl:max-w-[89em] bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black"
        : "bg-transparent backdrop-blur-3xl",
    )}
  >
    <div className="w-full md:my-auto">
      <div className="relative flex  items-center justify-between">
        <Link
          href={"#"}
          className="flex items-center gap-x-2 "
          aria-label="Home">
          <span className="sr-only">Company logo</span>

          <div className="size-8 min-w-8 md:size-12 rounded-full">
            <Image
              width={50}
              height={50}
              src={"/assets/images/logo.jpg"}
              alt={"Black Labs"}
              className=" w-full h-full rounded-full"
            />
          </div>

          <span className="mt-1">Black Labs</span>
        </Link>
        <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
          <div className="flex items-center gap-10 font-medium">


            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50"
              href={"#"}
            >
              Projects
            </Link>

            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50"
              href={"#"}
            >
              Blogs
            </Link>

            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50"
              href={"#"}
            >
              Contact Us
            </Link>
            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50"
              href={"#"}
            >
              About Us
            </Link>
          </div>

        </nav>

        <div className="hidden md:flex gap-x-2 items-center">
          <LanguageSwitcher />


          <ModeToggle />
          <Link
            className="px-5 py-2 shadow font-bold bg-linear-to-br from-blue-500 to-indigo-500 text-white text-sm rounded-xl"
            href={"#"}
          >
            Purchase Project
          </Link>

        </div>

        <div className="flex gap-x-2 md:hidden">
          <ModeToggle />
        </div>
      </div>

      <nav
        className={cn(
          "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
          open ? "" : "hidden",
        )}
      >
        <ul className="space-y-4 font-medium">
          <li onClick={() => setOpen(false)}>
            <Link
              href={"/"}
            >Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

}
