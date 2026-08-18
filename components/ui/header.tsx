"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import useScroll from "@/hooks/use-scroll"
import { ModeToggle } from "./mode-toggle"
import { RequestProjectModal } from "./request-project"
import { Icons } from "@/lib/icons/icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export function Header() {
  const scrolled = useScroll(15);
  const { theme } = useTheme();

  return <header
    className={cn(
      "fixed inset-x-0 z-50 mx-auto flex max-w-full transform-gpu animate-slide-down-fade justify-center items-center overflow-hidden  border border-transparent  p-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",

      scrolled
        ? "backdrop-blur-nav rounded-4xl rounded-t-none md:mt-2 md:rounded-t-4xl md:max-w-[79.5em] 2xl:max-w-[89.5em] bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black"
        : "bg-transparent backdrop-blur-3xl shadow-xl shadow-black/5",
    )}
  >
    <div className="w-full md:my-auto">
      <div className="relative flex  items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-x-2 "
          aria-label="Home"
        >
          <span className="sr-only">Company logo</span>

          <div className="size-12 rounded-full">
            <Icons.main fill={theme === "light" ? "#000000" : "#ffffff"} />
          </div>

          <span className="md:mt-1 text-nowrap text-sm md:text-base font-bold">Black Labs</span>
        </Link>
        <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
          <div className="flex items-center gap-10 font-medium">

            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50 font-semibold"
              href={"/projects"}
            >
              Projects
            </Link>

            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50 font-semibold"
              href={"/blogs"}
            >
              Blogs
            </Link>

            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50 font-semibold"
              href={"contactUs"}
            >
              Contact Us
            </Link>
            <Link
              className="px-2 py-1 text-gray-900 dark:text-gray-50 font-semibold"
              href={"/about"}
            >
              About
            </Link>
          </div>

        </nav>

        <div className="hidden md:flex gap-x-2 items-center">
          {/* <LanguageSwitcher /> */}

          <ModeToggle />

          <RequestProjectModal
            TEXT="Request Project"
            TRIGGER_CLASSNAME="px-5 py-2 shadow font-extrabold bg-linear-to-br from-blue-500 to-indigo-500 text-white text-sm rounded-xl" />
        </div>

        <div className="flex md:hidden gap-2 items-center">

          <RequestProjectModal
            TEXT="Request Project"
            TRIGGER_CLASSNAME="px-2 md:px-5 py-1.5 md:py-2 shadow font-extrabold bg-linear-to-br from-blue-500 to-indigo-500 text-white text-xs md:text-sm rounded-xl"
          />

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" className={"flex rounded-xl justify-center items-center px-3 py-4"} >
                  <Menu />
                </Button>
              }>
              Open
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"pb-0"}>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    className=" py-1 font-semibold"
                    href={"/projects"}
                  >
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className=" py-1 font-semibold"
                    href={"/about"}
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className=" py-1 font-semibold"
                    href={"/blogs"}
                  >
                    Blogs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="py-1 font-semibold"
                    href={"/contactUs"}
                  >
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className={"mb-0"}/>

                <DropdownMenuItem className={"font-semibold py-0 pr-5"}>
                  Theme
                  <ModeToggle />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>

    </div>
  </header>

}
