import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { ReactNode } from "react"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HexChess",
  description: "Hexagonal chess",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
