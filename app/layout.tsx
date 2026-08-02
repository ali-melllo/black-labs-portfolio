import { Geist_Mono, Noto_Sans, Oxanium } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/ui/header";
import { Toaster } from "@/components/ui/toast";
import PageLoadingIndicator from "@/components/ui/PageLoadingIndicator";

const oxaniumHeading = Oxanium({ subsets: ['latin'], variable: '--font-heading' });

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["600", "700", "800", "900"]
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
      <body className="overflow-x-hidden flex relative">
        <ThemeProvider>
          <PageLoadingIndicator />
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
