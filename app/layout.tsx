import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";
import PageLoadingIndicator from "@/components/ui/PageLoadingIndicator";
import { Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: 'device-width',
  maximumScale: 2.0,
  minimumScale: 1.0
}

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", notoSans.variable)}
    >
      <body className="overflow-x-hidden relative">
        <ThemeProvider>
          <PageLoadingIndicator />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
