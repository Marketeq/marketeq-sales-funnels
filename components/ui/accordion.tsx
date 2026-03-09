"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Minus, Plus } from "@blend-metrics/icons"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      className={cn("space-y-2.5", className)}
      data-slot="accordion"
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border-dark-blue-400 bg-dark-blue-500 data-[state=open]:bg-dark-blue-400 data-[state=open]:border-primary-500 data-[state=open]:ring-primary-500 rounded-[14px] border shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] data-[state=open]:ring-1",
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex p-5 lg:p-7">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 cursor-pointer items-center justify-between text-base leading-none font-bold text-white transition-all focus:outline-none disabled:pointer-events-none lg:text-xl",
          className,
        )}
        {...props}
      >
        {children}
        <Plus className="size-5 shrink-0 stroke-3 text-white group-data-[state=open]:hidden" />
        <Minus className="size-5 shrink-0 stroke-3 text-white group-data-[state=closed]:hidden" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden p-5 pt-0 text-sm leading-[1.6] text-white lg:p-7 lg:pt-0 lg:text-lg"
      {...props}
    >
      <div className={cn("pt-2 pb-0 lg:pt-5", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
