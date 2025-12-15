"use client"

import { sendGTMEvent } from "@next/third-parties/google"
import { useEffect } from "react"

export const SalesConversion = () => {
  useEffect(() => {
    sendGTMEvent({
      event: "conversion",
      send_to: "AW-1017877798/0QveCJq70AIQpqqu5QM",
      value: 1.0,
      currency: "USD",
    })
  }, [])

  return null
}
