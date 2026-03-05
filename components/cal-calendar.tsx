"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import * as React from "react"

export const CalCalendar = ({ calLink }: { calLink: string }) => {
  React.useEffect(() => {
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

  return (
    <Cal
      namespace={calLink.split("/").at(-1)}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      }}
    />
  )
}
