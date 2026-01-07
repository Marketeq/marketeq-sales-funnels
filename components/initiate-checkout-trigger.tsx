"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

declare global {
  interface Window {
    fbq?: (arg1: string, arg2: string) => void
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
    window.fbq?.("track", "InitiateCheckout")
  }

  return <Comp onClick={handleClick} {...props} />
}
