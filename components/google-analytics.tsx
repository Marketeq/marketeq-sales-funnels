"use client"

import Script from "next/script"

export const GoogleAnalytics = () => {
  return (
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-1017877798"
      onLoad={() => {
        const dataLayer = window.dataLayer || []
        function gtag(...args: unknown[]) {
          dataLayer.push(args)
        }
        gtag("js", new Date())
        gtag("config", "AW-1017877798")
      }}
    />
  )
}
