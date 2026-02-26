import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("overflow-x-hidden scroll-smooth", inter.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
