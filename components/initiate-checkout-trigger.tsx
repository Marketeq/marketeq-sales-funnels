"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

declare global {
  interface Window {
    fbq?: unknown
  }
}

export const InitiateCheckoutTrigger = ({
  asChild,
  onClick,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "button"

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)

    if ("fbq" in window && typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout")
    }
  }

  return <Comp onClick={handleClick} {...props} />
}
