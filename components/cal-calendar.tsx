"use client"

import Cal from "@calcom/embed-react"

export const CalCalendar = () => {
  return (
    <Cal
      namespace="sales-offer-engine-call"
      calLink="marketeq/sales-offer-engine-call"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      }}
    />
  )
}
