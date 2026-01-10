"use client"

import { useEffect, useRef } from "react"

export const TriggerLead = () => {
  const intervalIdRef = useRef<ReturnType<typeof setInterval>>(undefined)
  const isNotTriggeredRef = useRef(true)

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      if (
        isNotTriggeredRef.current &&
        "fbq" in window &&
        typeof window.fbq === "function"
      ) {
        window.fbq("track", "Lead")
        isNotTriggeredRef.current = false
      }

      if (!isNotTriggeredRef.current) {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = undefined
      }
    })

    return () => {
      clearInterval(intervalIdRef.current)
    }
  }, [])

  return null
}
