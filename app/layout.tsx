import { Geist_Mono, Noto_Sans, Oxanium } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Header } from "@/components/ui/header";
import { bodyFont } from "./font";

const oxaniumHeading = Oxanium({ subsets: ['latin'], variable: '--font-heading' });

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["600", "700" , "800" ,"900"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable, oxaniumHeading.variable)}
    >
      <body className="mb-96">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
