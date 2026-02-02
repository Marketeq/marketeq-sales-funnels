"use client"

import * as v from "valibot"
import { Clock, Download, Target03 } from "@blend-metrics/icons"
import {
  GoogleBrand,
  GoogleMeet2Brand,
  MsOutlookBrand,
} from "@blend-metrics/icons/brands"
import { format, parseISO } from "date-fns"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { atcb_action } from "add-to-calendar-button-react"
import * as React from "react"
import { Apple } from "./icons/apple"

type First<T extends unknown[]> = T extends [infer First, ...unknown[]]
  ? First
  : never

type Config = First<Parameters<typeof atcb_action>>

const SearchParamsSchema = v.object({
  isSuccessBookingPage: v.literal("true"),
  hostName: v.pipe(v.string(), v.nonEmpty()),
  attendeeName: v.pipe(v.string(), v.nonEmpty()),
  startTime: v.pipe(v.string(), v.isoTimestamp()),
  endTime: v.pipe(v.string(), v.isoTimestamp()),
  title: v.pipe(v.string(), v.nonEmpty()),
})

export const BookingConfirmation = () => {
  const searchParams = useSearchParams()
  const { output, issues } = v.safeParse(SearchParamsSchema, {
    isSuccessBookingPage: searchParams.get("isSuccessBookingPage"),
    hostName: searchParams.get("hostName"),
    attendeeName: searchParams.get("attendeeName"),
    startTime: searchParams.get("startTime"),
    endTime: searchParams.get("endTime"),
    title: searchParams.get("title"),
  })

  if (issues) return null

  return <BookingConfirmationCard searchParams={output} />
}

type SearchParams = v.InferOutput<typeof SearchParamsSchema>

const BookingConfirmationCard = ({
  searchParams,
}: {
  searchParams: SearchParams
}) => {
  const { attendeeName, endTime, hostName, startTime, title } = searchParams

  const googleCalConfig: Config = React.useMemo(
    () => ({
      name: `Meeting between ${hostName} and ${attendeeName}`,
      description: title,
      startDate: format(startTime, "yyyy-MM-dd"),
      endDate: format(endTime, "yyyy-MM-dd"),
      startTime: format(startTime, "HH:mma"),
      endTime: format(endTime, "HH:mma"),
      timeZone: "UTC",
      options: ["Google"],
    }),
    [title, startTime, endTime, hostName, attendeeName],
  )

  const msOutLookConfig: Config = React.useMemo(
    () => ({ ...googleCalConfig, options: ["Outlook.com"] }),
    [googleCalConfig],
  )
  const appleCalConfig: Config = React.useMemo(
    () => ({ ...googleCalConfig, options: ["Apple"] }),
    [googleCalConfig],
  )

  return (
    <div className="mx-auto max-w-[560px] rounded-[10px] border border-gray-200 bg-white p-[30px] shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
      <div className="border-success-300 bg-success-25 rounded-[5px] border px-4 py-2.5">
        <span className="text-success-600 text-base leading-5">
          <span className="font-bold">Email Sent.</span> Check your inbox for an
          email with all the details.
        </span>
      </div>

      <div className="mt-[24.5px] flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-dark-blue-400 text-base leading-none font-medium">
            Your meeting is scheduled with:
          </h3>
          <h1 className="text-dark-blue-400 text-xl leading-none font-semibold">
            {hostName}
          </h1>
        </div>

        <div className="relative size-12 overflow-hidden rounded-full border border-gray-300 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
          <Image
            className="object-cover"
            src="/marketeq.png"
            height={48}
            width={48}
            alt="Marketeq"
          />
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-x-3">
              <Clock className="text-dark-blue-400 size-[22px]" />
              <span className="text-dark-blue-400 text-base leading-none font-semibold">
                Time
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-dark-blue-400 text-right text-base leading-none font-semibold">
                {format(parseISO(startTime), "EEEE, MMM d, yyyy")}
              </h3>
              <h3 className="text-dark-blue-400 text-right text-base leading-none font-semibold">
                {format(parseISO(startTime), "hh:mm a")} -{" "}
                {format(parseISO(endTime), "hh:mm a")} (
                {Intl.DateTimeFormat().resolvedOptions().timeZone} Time)
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-x-3">
              <Target03 className="text-dark-blue-400 size-[22px]" />
              <span className="text-dark-blue-400 text-base leading-none font-semibold">
                Location
              </span>
            </div>

            <div className="inline-flex items-center gap-x-1.5">
              <GoogleMeet2Brand className="size-8" />
              <h3 className="text-dark-blue-400 text-base leading-none font-semibold">
                Google Meet
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-3 border-t border-gray-200 pt-6">
        <span className="text-dark-blue-400 text-sm leading-none font-medium">
          Add to calendar
        </span>
        <div className="inline-flex items-center gap-x-3">
          <button
            onClick={() => atcb_action(googleCalConfig)}
            className="inline-flex size-[35px] shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-gray-300 bg-white text-gray-500 shadow-[0px_0.67px_2.69px_0px_rgba(0,0,0,.03)] hover:bg-gray-100"
          >
            <GoogleBrand className="size-[21.54px]" />
          </button>
          <button
            onClick={() => atcb_action(msOutLookConfig)}
            className="inline-flex size-[35px] shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-gray-300 bg-white text-gray-500 shadow-[0px_0.67px_2.69px_0px_rgba(0,0,0,.03)] hover:bg-gray-100"
          >
            <MsOutlookBrand className="size-[21.54px]" />
          </button>
          <button
            onClick={() => atcb_action(appleCalConfig)}
            className="inline-flex size-[35px] shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-gray-300 bg-white text-gray-500 shadow-[0px_0.67px_2.69px_0px_rgba(0,0,0,.03)] hover:bg-gray-100"
          >
            <Apple />
          </button>
          <button
            onClick={() => atcb_action(appleCalConfig)}
            className="inline-flex size-[35px] shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-gray-300 bg-white text-gray-500 shadow-[0px_0.67px_2.69px_0px_rgba(0,0,0,.03)] hover:bg-gray-100"
          >
            <Download className="size-[15px]" />
          </button>
        </div>
      </div>
    </div>
  )
}
