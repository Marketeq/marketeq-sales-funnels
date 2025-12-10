"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

declare global {
  interface Window {
    dataLayer: unknown[][]
  }
}

export const GoogleAnalytics = () => {
  const pathname = usePathname()
  const shouldEnable = pathname === "/thank-you"

  return (
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-1017877798"
      onLoad={() => {
        window.dataLayer = window.dataLayer || []

        function gtag(...args: unknown[]) {
          window.dataLayer.push(args)
        }

        gtag("js", new Date())
        gtag("config", "AW-1017877798")

        if (shouldEnable) {
          gtag("event", "conversion", {
            send_to: "AW-1017877798/0QveCJq70AIQpqqu5QM",
            value: 1.0,
            currency: "USD",
          })
        }
      }}
    />
  )
}
