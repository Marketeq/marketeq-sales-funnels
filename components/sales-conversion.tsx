"use client"

import { sendGAEvent } from "@next/third-parties/google"
import { useEffect } from "react"

export const SalesConversion = () => {
  useEffect(() => {
    sendGAEvent("event", "conversion", {
      send_to: "AW-1017877798/0QveCJq70AIQpqqu5QM",
      value: 1.0,
      currency: "USD",
    })
  }, [])

  return null
}
