import { MarketeqLogo } from "@/components/marketeq-logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Check,
  Clock,
  Download,
  Lightning01,
  Target03,
} from "@blend-metrics/icons"
import { GoogleMeet2Brand } from "@blend-metrics/icons/brands"
import { WistiaPlayer } from "@wistia/wistia-player-react"
import Image from "next/image"
import Link from "next/link"
import { formatInTimeZone } from "date-fns-tz"
import { parseISO } from "date-fns"
import { reader } from "@/utils/reader"
import { notFound } from "next/navigation"
import { DocumentRenderer } from "@/components/document-renderer"
import { Entry } from "@keystatic/core/reader"
import keystaticConfig from "@/keystatic.config"

async function ExplorableCard(
  props: Entry<
    (typeof keystaticConfig)["collections"]["confirmations"]
  >["explorables"][number],
) {
  const icon = await reader.collections.icons.readOrThrow(props.indicator)
  return (
    <div className="3xl:gap-y-5 flex flex-col items-center gap-y-3">
      <Image
        className="size-[51px] shrink-0 text-white"
        src={icon.asset}
        alt={icon.name}
        width={51}
        height={51}
      />

      <div className="prose-base prose-p:text-base prose-strong:3xl:text-xl prose-strong:text-lg prose-strong:font-bold text-center text-base text-white">
        <DocumentRenderer document={await props.title()} />
      </div>
    </div>
  )
}

async function ThankYou({
  bookingConfirmation,
  slug,
}: {
  bookingConfirmation: React.ReactNode
  slug: string
}) {
  const landing = await reader.collections.landings.read(slug)

  if (!landing) notFound()

  const confirmation = await reader.collections.confirmations.readOrThrow(
    landing.confirmation,
  )
  const pics = await Promise.all(
    confirmation.testimonials.pictures.map(
      async (picture) => await reader.collections.images.readOrThrow(picture),
    ),
  )
  const midIdx = Math.ceil((pics.length - 1) / 2)

  return (
    <div className="bg-dark-blue-600 min-h-screen">
      <div className="3xl:px-[100px] 4xl:px-[200px] 5xl:px-[300px] 3xl:py-[50px] flex items-center justify-center px-5 py-5 md:px-10">
        <MarketeqLogo className="xs:max-lg:w-[46.97px] xs:max-lg:h-[26.94px]" />
      </div>

      <div className="3xl:px-[200px] 4xl:px-[250px] 5xl:px-[300px] 3xl:pb-[100px] px-5 pb-10 md:px-10 lg:px-[100px]">
        <div className="mx-auto max-w-[1320px]">
          <div className="relative">
            <div className="flex justify-center">
              <div className="border-primary-500 3xl:h-11 3xl:gap-x-[8.32px] 3xl:border-[1.6] 3xl:px-5 3xl:text-base inline-flex h-[30.15px] shrink-0 items-center gap-x-[5.6px] rounded-full border-[1.12px] px-[13.46px] text-[10px] leading-2.5 font-bold whitespace-nowrap text-white">
                <Lightning01 className="text-primary-500 3xl:size-5 size-[13.46px]" />{" "}
                {confirmation.highlight}
              </div>
            </div>

            <div className="3xl:mt-[50px] mt-6">{bookingConfirmation}</div>

            <h1 className="prose-base prose-h1:3xl:text-[54px] prose-h1:mb-0 3xl:mt-6 prose-h1:text-center prose-h1:text-[21px] prose-h1:leading-tight prose-h1:font-extrabold prose-h1:text-white mt-[30px] md:mt-10 lg:mt-[50px] lg:text-[42px]">
              <DocumentRenderer document={await confirmation.title()} />
            </h1>

            <div className="3xl:max-w-[758px] 4xl:max-w-[818px] 5xl:max-w-[1038px] 3xl:mx-auto prose-base prose-p:3xl:text-lg prose-p:text-center prose-p:text-sm prose-p:leading-none prose-p:font-medium prose-p:text-white mt-3 md:mt-5 lg:mt-6">
              <DocumentRenderer document={await confirmation.description()} />
            </div>
          </div>

          <div className="mt-10 md:mt-20 lg:mt-[100px]">
            <div className="prose-base prose-p:3xl:text-lg prose-p:text-center prose-p:text-sm prose-p:leading-none prose-p:font-medium prose-p:text-white">
              <DocumentRenderer document={await confirmation.helptext()} />
            </div>

            <div className="mt-10 lg:mt-[50px]">
              <div className="border-primary-500 3xl:w-[1040px] 4xl:w-[1100px] 5xl:w-[1320px] 3xl:rounded-[20px] aspect-video rounded-[14px] border-[2.06px] p-3 md:p-5 lg:p-6">
                <WistiaPlayer mediaId={confirmation.videoId} />
              </div>
            </div>

            <div className="3xl:px-[100px] mt-[50px] grid gap-[50px] md:grid-cols-3 lg:px-5">
              {confirmation.explorables.map((explorable, index) => (
                <ExplorableCard key={index} {...explorable} />
              ))}
            </div>
          </div>

          <div className="mt-20 lg:mt-[100px]">
            <div className="prose-base prose-p:3xl:text-lg prose-p:text-center prose-p:text-sm prose-p:leading-none prose-p:font-medium prose-p:text-white">
              <DocumentRenderer
                document={await confirmation.brief.helptext()}
              />
            </div>

            <div className="mt-5 md:mt-10 lg:mt-[50px]">
              <div className="border-primary-500 3xl:w-[1040px] 4xl:w-[1100px] 5xl:w-[1320px] 3xl:rounded-[20px] aspect-video rounded-[14px] border-[2.06px] p-3 md:p-5 lg:p-6">
                <WistiaPlayer mediaId={confirmation.brief.videoId} />
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-20 lg:mt-[100px]">
            <h1 className="3xl:text-[52px] text-center text-[22px] leading-none font-bold text-white md:text-[26px] lg:text-[42px]">
              {confirmation.calDetails.title}
            </h1>

            <div className="mt-[30px] grid gap-5 md:grid-cols-3 lg:mt-[50px]">
              {await Promise.all(
                confirmation.calDetails.explorables.map(
                  async (explorable, index) => {
                    const icon = await reader.collections.icons.readOrThrow(
                      explorable.indicator,
                    )
                    return (
                      <article
                        key={index}
                        className="bg-dark-blue-500 border-dark-blue-400 rounded-[25px] border p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] lg:p-7"
                      >
                        <div className="bg-primary-500/10 inline-flex size-[50px] flex-none items-center justify-center rounded-[20px]">
                          <Image
                            className="text-primary-500"
                            src={icon.asset}
                            alt={icon.name}
                            height={29}
                            width={29}
                          />
                        </div>

                        <div className="mt-[30px] lg:mt-[50px]">
                          <h1 className="text-base leading-none font-bold text-white lg:text-[22px]">
                            {explorable.title}
                          </h1>
                          <p className="mt-2.5 text-sm leading-[1.6] text-white lg:text-base">
                            {explorable.subtitle}
                          </p>
                        </div>
                      </article>
                    )
                  },
                ),
              )}
            </div>
          </div>

          <div className="mt-20 space-y-10 md:space-y-[50px] lg:mt-[100px]">
            {confirmation.phases.map((phase, index) => (
              <div key={index} className="grid gap-y-5 md:grid-cols-2">
                <div className="border-primary-500 relative rounded-[10px] border-[1.08px] p-3 lg:p-5">
                  <WistiaPlayer mediaId={phase.videoId} />
                </div>
                <div className="3xl:pl-[75px] flex flex-col justify-center md:pl-[30px] lg:pl-[50px]">
                  <h1 className="3xl:text-[32px] text-lg leading-none font-bold text-white lg:text-[28px]">
                    {phase.title}
                  </h1>

                  <p className="3xl:mt-5 3xl:text-lg mt-3 text-sm leading-[1.6] text-white lg:text-base">
                    {phase.subtitle}
                  </p>

                  <ul className="3xl:mt-8 3xl:space-y-5 mt-5 space-y-3.5 lg:space-y-[14.5px]">
                    {phase.list.map((item, index) => (
                      <li className="flex items-center gap-x-3" key={index}>
                        <Check className="size-5 shrink-0 text-white" />
                        <span className="3xl:text-lg text-sm leading-[1.6] font-bold text-white lg:text-base">
                          {item.content}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 lg:mt-[100px]">
            <div className="3xl:max-w-[612px] mx-auto w-[428px]">
              <h1 className="3xl:text-[52px] text-center text-[28px] leading-none font-bold text-white lg:text-[48px]">
                {confirmation.faqs.title}
              </h1>
            </div>

            <div className="mx-auto mt-3 max-w-[476px]">
              <span className="3xl:text-sm block text-center text-sm leading-[1.6] font-semibold text-white lg:mt-5 lg:text-lg">
                {confirmation.faqs.description}
              </span>
            </div>

            <Accordion
              type="single"
              defaultValue="item-0"
              className="mt-10 lg:mt-[50px]"
            >
              {await Promise.all(
                confirmation.faqs.items.map(async (item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="prose-base prose-p:first-of-type:mt-0">
                      <DocumentRenderer document={await item.answer()} />
                    </AccordionContent>
                  </AccordionItem>
                )),
              )}
            </Accordion>
          </div>

          <div className="mt-20 lg:mt-[100px]">
            <h1 className="3xl:text-[40px] text-center text-[28px] leading-none font-bold text-white lg:text-[32px]">
              {confirmation.testimonials.title}
            </h1>

            <div className="3xl:gap-x-8 mt-10 grid gap-3.5 md:grid-cols-2 lg:mt-[50px]">
              <div className="3xl:gap-y-8 grid gap-y-3.5">
                {pics.slice(0, midIdx).map((pic, index) => (
                  <Image
                    key={index}
                    className="w-full"
                    src={pic.asset}
                    alt={pic.alt}
                    width={660}
                    height={660}
                  />
                ))}
              </div>
              <div className="3xl:gap-y-8 grid gap-y-3.5">
                {pics.slice(midIdx).map((pic, index) => (
                  <Image
                    key={index}
                    className="w-full"
                    src={pic.asset}
                    alt={pic.alt}
                    width={660}
                    height={660}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Booking {
  status: string
  data: {
    id: number
    uid: string
    title: string
    description: string
    hosts: Array<{
      id: number
      name: string
      email: string
      displayEmail: string
      username: string
      timeZone: string
    }>
    status: string
    start: string
    end: string
    duration: number
    eventTypeId: number
    eventType: {
      id: number
      slug: string
    }
    location: string
    absentHost: boolean
    createdAt: string
    updatedAt: string
    attendees: Array<{
      name: string
      email: string
      displayEmail: string
      timeZone: string
      absent: boolean
      language: string
      phoneNumber: string
    }>
    bookingFieldsResponses: Record<string, string>
    cancellationReason: string
    cancelledByEmail: string
    reschedulingReason: string
    rescheduledByEmail: string
    rescheduledFromUid: string
    rescheduledToUid: string
    meetingUrl: string
    metadata: Record<string, string>
    rating: number
    icsUid: string
    guests: string[]
  }
  error: Record<string, unknown>
}

const fetchBooking = async (
  uid: string | string[] | undefined,
): Promise<Booking> => {
  const options = {
    method: "GET",
    headers: {
      "cal-api-version": "2024-08-13",
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
    },
  }

  const response = await fetch(
    `https://api.cal.com/v2/bookings/${uid}`,
    options,
  )
  const booking = response.json()
  return booking
}

interface CalendarLinks {
  status: string
  data: Array<{
    label: string
    link: string
    id: string
  }>
}

const fetchCalendarLinks = async (
  uid: string | string[] | undefined,
): Promise<CalendarLinks> => {
  const options = {
    method: "GET",
    headers: {
      "cal-api-version": "2024-08-13",
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
    },
  }

  const response = await fetch(
    `https://api.cal.com/v2/bookings/${uid}/calendar-links`,
    options,
  )
  const links = response.json()
  return links
}

function first<T>(value: T[]) {
  return value[0]
}

export default async function ThankYouRoot({
  searchParams,
  params,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  params: Promise<{ slug: string }>
}) {
  const { uid } = await searchParams
  const { slug } = await params
  const booking = await fetchBooking(uid)
  const calendarLinks = await fetchCalendarLinks(uid)

  return (
    <ThankYou
      slug={slug}
      bookingConfirmation={
        booking.status === "success" ? (
          <BookingConfirmation
            hostName={first(booking.data.hosts).name}
            start={booking.data.start}
            end={booking.data.end}
            links={calendarLinks.data}
            timeZone={first(booking.data.attendees).timeZone}
          />
        ) : null
      }
    />
  )
}

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

const BookingConfirmation = ({
  links,
  end,
  start,
  hostName,
  timeZone,
}: {
  hostName: string
  start: string
  end: string
  links: CalendarLinks["data"]
  timeZone: string
}) => {
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
