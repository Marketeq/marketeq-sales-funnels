"use client"

import { Clock, Download, Target03 } from "@blend-metrics/icons"
import { GoogleMeet2Brand } from "@blend-metrics/icons/brands"
import Image from "next/image"
import Link from "next/link"
import { formatInTimeZone } from "date-fns-tz"
import { parseISO } from "date-fns"
import { fetchCalendarLinks } from "@/lib/fetch-calendar-links"
import { fetchBooking } from "@/lib/fetch-booking"
import { useSearchParams } from "next/navigation"
import { useAsync } from "@/lib/hooks"
import { first } from "@/utils/functions"

const CalendarTrigger = ({ id, link }: { id: string; link: string }) => {
  switch (id) {
    case "ics":
      return (
        <Link
          href={link}
          download="event.ics"
          className="text-dark-blue-400 inline-flex h-[35px] shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-[5px] border border-gray-300 bg-white px-2.5 text-sm leading-none font-medium shadow-[0px_0.67px_2.69px_0px_rgba(0,0,0,.03)] hover:bg-gray-100"
        >
          <Download className="size-[15px] text-gray-500" /> Download Event
        </Link>
      )

    default:
      return null
  }
}

export const BookingConfirmation = () => {
  const searchParams = useSearchParams()
  const uid = searchParams.get("uid") || ""
  const { status, data: booking } = useAsync(() => fetchBooking(uid))
  const { status: state, data: calendarLinks } = useAsync(() =>
    fetchCalendarLinks(uid),
  )

  if (status !== "success" || state !== "success") return null

  const hostName = first(booking.data.hosts).name
  const start = booking.data.start
  const end = booking.data.end
  const links = calendarLinks.data
  const timeZone = first(booking.data.attendees).timeZone

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
                {formatInTimeZone(
                  parseISO(start),
                  timeZone,
                  "EEEE, MMM d, yyyy",
                )}
              </h3>
              <h3 className="text-dark-blue-400 text-right text-base leading-none font-semibold">
                {formatInTimeZone(parseISO(start), timeZone, "hh:mm a")} -{" "}
                {formatInTimeZone(parseISO(end), timeZone, "hh:mm a")} (
                {timeZone})
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
          Please confirm this event on your calendar
        </span>
        <div className="inline-flex items-center gap-x-3">
          {links.map(({ id, link }) => (
            <CalendarTrigger key={id} id={id} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}
