import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Vadanagra Sonal - Creative Technologist",
  description: "Building beautiful interfaces powered by rock-solid logic.",
  keywords: ["developer", "portfolio", "full-stack", "creative technologist"],
  authors: [{ name: "Vadanagra Sonal" }],
  openGraph: {
    title: "Vadanagra Sonal - Creative Technologist",
    description: "Building beautiful interfaces powered by rock-solid logic.",
    type: "website",
  },
    generator: 'senotron'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
