"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Minus } from "@blend-metrics/icons"

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
        "group/item data-[state=open]:bg-primary-50 data-[state=open]:border-primary-100 rounded-[14px] border border-gray-200 bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]",
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
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "text-dark-blue-400 3xl:px-7 3xl:py-5 3xl:text-xl flex flex-1 items-center justify-between p-5 pb-3 text-left text-base font-bold focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <Plus className="size-5 shrink-0 text-gray-500 group-data-[state=open]/item:hidden" />
        <Minus className="size-5 shrink-0 text-gray-500 group-data-[state=closed]/item:hidden" />
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
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "3xl:px-7 3xl:pb-7 3xl:text-lg px-5 pb-5 text-sm leading-[1.6] text-gray-500",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
