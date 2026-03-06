import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketeq",
  description: "Book calls for different services",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-dark-blue-600 isolate flex min-h-screen flex-col overflow-x-hidden">
      {children}
    </div>
  )
}
