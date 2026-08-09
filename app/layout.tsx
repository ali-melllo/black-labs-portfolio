import { Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Header } from "@/components/ui/header";
import { Toaster } from "@/components/ui/toast";
import PageLoadingIndicator from "@/components/ui/PageLoadingIndicator";

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
