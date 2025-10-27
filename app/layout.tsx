import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Inter({ subsets: ["latin"] })
const _geistMono = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Philosopher Oracle",
  description: "A Farcaster Oracle that offers timeless wisdom.",
  generator: "v0.app",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${process.env.NEXT_PUBLIC_APP_URL}/oracle-frame.png`,
    "fc:frame:post_url": `${process.env.NEXT_PUBLIC_APP_URL}/api/frame`,
    "fc:frame:input:text": "Ask the Oracle your question...",
    "fc:frame:button:1": "Seek Wisdom",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
