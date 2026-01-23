"use client"

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export const InitializeCal = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "ux-strategy-call" })
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#306CFE" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      })
    })()
  }, [])

  return null
}
