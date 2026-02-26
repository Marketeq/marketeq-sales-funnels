"use client"

import { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export const InitializeCal = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "sales-offer-engine-call" })
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#306CFE" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return null
}
