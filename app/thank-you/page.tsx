import { Beaker02 } from "@/components/icons/beaker-02"
import { Container } from "@/components/icons/container"
import { Dataflow03 } from "@/components/icons/dataflow-03"
import { FaceContent } from "@/components/icons/face-content"
import { MarketeqWhite } from "@/components/icons/marketeq-white"
import { RefreshCw } from "@/components/icons/refresh-cw"
import { cn } from "@/lib/utils"
import { fromLength } from "@/utils/functions"
import { ChartBreakoutCircle, Lightning01 } from "@blend-metrics/icons"
import { Check } from "lucide-react"
import React from "react"
import review01 from "@/public/review-01.png"
import review02 from "@/public/review-02.png"
import review03 from "@/public/review-03.png"
import review04 from "@/public/review-04.png"
import review05 from "@/public/review-05.png"
import review06 from "@/public/review-06.png"
import review07 from "@/public/review-07.png"
import review08 from "@/public/review-08.png"
import review09 from "@/public/review-09.png"
import review10 from "@/public/review-10.png"
import review11 from "@/public/review-11.png"
import review12 from "@/public/review-12.png"
import review13 from "@/public/review-13.png"
import review14 from "@/public/review-14.png"
import review15 from "@/public/review-15.png"
import review16 from "@/public/review-16.png"
import review17 from "@/public/review-17.png"
import review18 from "@/public/review-18.png"
import review19 from "@/public/review-19.png"
import review20 from "@/public/review-20.png"
import review21 from "@/public/review-21.png"
import review22 from "@/public/review-22.png"
import review23 from "@/public/review-23.png"
import review24 from "@/public/review-24.png"
import review25 from "@/public/review-25.png"
import review26 from "@/public/review-26.png"
import Image from "next/image"

const CalendarCheck01 = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={cn("size-[51px]", className)}
    viewBox="0 0 40 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M39 17.75H.75m27.625-17v8.5m-17-8.5v8.5M13.5 30.5l4.25 4.25 9.563-9.562M10.95 43.25H28.8c3.57 0 5.356 0 6.72-.695a6.38 6.38 0 0 0 2.785-2.786C39 38.406 39 36.62 39 33.05V15.2c0-3.57 0-5.355-.695-6.72a6.38 6.38 0 0 0-2.786-2.785C34.156 5 32.37 5 28.8 5H10.95c-3.57 0-5.355 0-6.72.695A6.38 6.38 0 0 0 1.446 8.48C.75 9.845.75 11.63.75 15.2v17.85c0 3.57 0 5.356.695 6.72a6.38 6.38 0 0 0 2.786 2.785c1.364.695 3.149.695 6.719.695"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.49}
        y1={21.711}
        x2={38.868}
        y2={21.711}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1c4098" />
        <stop offset={1} stopColor="#306cfe" />
      </linearGradient>
    </defs>
  </svg>
)

const MessageSquare01 = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={cn("size-[51px]", className)}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.875 18.063H25.5M14.875 25.5h17M20.578 38.25h13.847c3.57 0 5.356 0 6.72-.695a6.38 6.38 0 0 0 2.785-2.786c.695-1.363.695-3.149.695-6.719V16.575c0-3.57 0-5.355-.695-6.72a6.38 6.38 0 0 0-2.786-2.785c-1.363-.695-3.148-.695-6.719-.695h-17.85c-3.57 0-5.355 0-6.719.695A6.38 6.38 0 0 0 7.07 9.856c-.695 1.364-.695 3.149-.695 6.719v26.638c0 1.132 0 1.698.232 1.99.202.252.508.4.832.399.372 0 .814-.354 1.698-1.062l5.07-4.055c1.035-.828 1.553-1.242 2.13-1.537a6.4 6.4 0 0 1 1.618-.568c.634-.13 1.297-.13 2.623-.13"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={6.115}
        y1={25.722}
        x2={44.493}
        y2={25.722}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1c4098" />
        <stop offset={1} stopColor="#306cfe" />
      </linearGradient>
    </defs>
  </svg>
)

const Monitor = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={cn("size-[51px]", className)}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 44.625h17m-8.5-8.5v8.5m-17-38.25h34a4.25 4.25 0 0 1 4.25 4.25v21.25a4.25 4.25 0 0 1-4.25 4.25h-34a4.25 4.25 0 0 1-4.25-4.25v-21.25a4.25 4.25 0 0 1 4.25-4.25"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.962}
        y1={25.24}
        x2={46.604}
        y2={25.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1c4098" />
        <stop offset={1} stopColor="#306cfe" />
      </linearGradient>
    </defs>
  </svg>
)

const MessageChatSquare = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={cn("size-[51px]", className)}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m21.248 31.875-6.535 6.617c-.912.922-1.367 1.384-1.76 1.416a1.06 1.06 0 0 1-.894-.367c-.256-.298-.256-.947-.256-2.244v-3.315c0-1.164-.953-2.006-2.104-2.174a6.375 6.375 0 0 1-5.384-5.384c-.067-.46-.067-1.008-.067-2.105V14.45c0-3.57 0-5.355.695-6.72a6.38 6.38 0 0 1 2.786-2.785c1.363-.695 3.148-.695 6.719-.695h15.725c3.57 0 5.355 0 6.719.695a6.38 6.38 0 0 1 2.786 2.786c.695 1.364.695 3.149.695 6.719v8.925m0 23.375-4.625-3.215c-.65-.452-.975-.678-1.329-.839a4.3 4.3 0 0 0-.983-.308c-.382-.07-.778-.07-1.57-.07h-3.818c-2.38 0-3.57 0-4.48-.463a4.25 4.25 0 0 1-1.857-1.858c-.463-.909-.463-2.099-.463-4.48v-5.342c0-2.38 0-3.57.463-4.48a4.25 4.25 0 0 1 1.857-1.857c.91-.463 2.1-.463 4.48-.463h11.9c2.38 0 3.57 0 4.48.463a4.25 4.25 0 0 1 1.857 1.857c.463.91.463 2.1.463 4.48v5.768c0 1.98 0 2.97-.324 3.751a4.25 4.25 0 0 1-2.3 2.3c-.78.324-1.77.324-3.751.324z"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.959}
        y1={25.211}
        x2={46.601}
        y2={25.211}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1c4098" />
        <stop offset={1} stopColor="#306cfe" />
      </linearGradient>
    </defs>
  </svg>
)

export default function ThankYou() {
  return (
    <main>
      <div className="bg-dark-blue-600 5xl:px-[300px] 4xl:py-0 4xl:px-[150px]">
        <div className="3xl:h-[72px] flex h-[47.04px] items-end justify-center">
          <MarketeqWhite className="3xl:h-[22px] 3xl:w-[149.72px] h-[17.04px] w-[116px] shrink-0" />
        </div>
        <div className="5xl:px-[126px] 4xl:px-[116px] 3xl:px-[200px] 3xl:pt-[50px] 3xl:pb-[100px] p-10 pt-[30px] lg:px-[100px] lg:pt-[30px] lg:pb-10">
          <div className="flex items-center justify-center">
            <div className="border-primary-500 3xl:h-11 3xl:px-5 3xl:py-3 flex h-8 shrink-0 items-center gap-x-[8.32px] rounded-full border-[1.66px] px-3 py-1.5">
              <Lightning01 className="text-primary-500 max-3xl:size-3.5" />
              <span className="3xl:text-base text-[10px] leading-5 font-bold text-white">
                UX/UI That Drives Growth
              </span>
            </div>
          </div>

          <div className="3xl:mt-6 mt-3">
            <h1 className="3xl:text-[54px] max-3xl:leading-tight text-center text-[26px] leading-none font-extrabold text-white">
              Congratulations Your Appointment Has{" "}
              <span className="block">Been Scheduled, But Not Confirmed!</span>
            </h1>

            <div className="3xl:mt-6 mt-3">
              <div className="4xl:max-w-[618px] 5xl:max-w-[638px] 3xl:max-w-[758px] mx-auto max-w-[588px]">
                <p className="3xl:text-lg text-center text-sm leading-none font-medium text-white">
                  We sent you a confirmation email with your call details to
                  your inbox, make sure to{" "}
                  <span className="font-extrabold">
                    (check your spam folder)
                  </span>{" "}
                  and add this appointment to your calendar right now.
                </p>
              </div>

              <div className="3xl:mt-[50px] mt-5">
                <p className="3xl:text-lg text-center text-sm leading-none font-medium text-white">
                  Please follow the steps below to{" "}
                  <span className="font-black uppercase">
                    confirm your appointment
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="5xl:px-[300px] 4xl:px-[150px] 4xl:py-[100px] 3xl:p-[100px] px-5 py-10 md:p-10 lg:px-[100px] lg:py-[50px]">
        <div>
          <div className="flex items-center justify-center">
            <span className="3xl:text-base bg-[linear-gradient(91.85deg,rgba(34,55,107,1)_0%,rgba(48,108,254,1)_99.34%)] bg-clip-text text-xs leading-none font-semibold text-transparent uppercase">
              getting ready
            </span>
          </div>
          <div className="3xl:max-w-[636px] 3xl:mt-5 mx-auto mt-3 max-w-[253px]">
            <h1 className="text-dark-blue-400 3xl:text-[52px] text-center text-[22px] leading-[1.125] font-bold">
              Make sure you’re prepared for the call...
            </h1>
          </div>

          <div className="3xl:max-w-[912px] 3xl:mt-5 mx-auto mt-3 max-w-[580px]">
            <p className="text-dark-blue-400 3xl:text-lg text-center text-sm leading-[1.6]">
              Thanks for booking your strategy session.{" "}
              <span className="font-bold">This isn’t a sales pitch</span>, it’s
              a focused session designed to uncover{" "}
              <span className="font-bold">how your product performs</span>{" "}
              against the <span className="font-bold">top competitors</span> in
              your market and where you’re leaving opportunities on the table.
              To make sure everything goes smoothly,{" "}
              <span className="font-bold">please follow the steps below:</span>
            </p>
          </div>

          <div className="3xl:space-y-6 mt-[50px] space-y-3.5">
            <article className="3xl:p-7 3xl:gap-x-5 3xl:rounded-[25px] flex flex-col items-start gap-3.5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] md:flex-row">
              <div className="shrink-0">
                <CalendarCheck01 />
              </div>
              <div className="3xl:py-4 py-3.5">
                <h1 className="text-dark-blue-400 3xl:text-2xl text-lg leading-none font-extrabold">
                  Step 1: Add the Appointment to Your Calendar
                </h1>

                <div className="mt-5">
                  <p className="text-dark-blue-400 3xl:text-lg text-base leading-none font-medium">
                    Google recently changed how it handles external invites, and
                    these appointments won’t automatically appear on your
                    calendar.
                  </p>
                </div>

                <div className="mt-5">
                  <span className="text-dark-blue-400 3xl:text-xl text-base leading-none font-semibold">
                    Please do the following to avoid confusion:
                  </span>
                </div>

                <div className="mt-5">
                  <ul className="space-y-5">
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        <span className="block">
                          Click the button above labeled{" "}
                          <span className="font-bold">“Add to Calendar.”</span>
                        </span>
                        <span className="block">
                          This will open your Google Calendar so you can
                          manually add your confirmed time.
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        <span className="block">
                          Then, check your email inbox for an event invite, it
                          may appear from an unknown sender.
                        </span>
                        <span className="block">
                          Click{" "}
                          <span className="font-bold">
                            “I know this sender”
                          </span>{" "}
                          and then{" "}
                          <span className="font-bold">“Accept Invite.”</span>
                        </span>
                      </span>
                    </li>
                  </ul>

                  <div className="mt-5">
                    <span className="text-dark-blue-400 3xl:text-lg text-sm leading-none font-medium">
                      Once you do both, the appointment will show up properly on
                      your calendar with the meeting link.
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article className="3xl:p-7 3xl:gap-x-5 3xl:rounded-[25px] flex flex-col items-start gap-3.5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] md:flex-row">
              <div className="shrink-0">
                <MessageSquare01 />
              </div>
              <div className="3xl:py-4 py-3.5">
                <h1 className="text-dark-blue-400 3xl:text-2xl text-lg leading-none font-extrabold">
                  Step 2: Look Out for a Personal Confirmation
                </h1>

                <div className="mt-5">
                  <p className="text-dark-blue-400 3xl:text-lg text-base leading-none font-medium">
                    Because spam appointments are common, a member from our team
                    will reach out to confirm your spot.
                  </p>
                </div>

                <div className="mt-5">
                  <span className="text-dark-blue-400 3xl:text-xl text-base leading-none font-semibold">
                    You’ll get a quick text from one of our team members (yes, a
                    real human) just verifying:
                  </span>
                </div>

                <div className="mt-5">
                  <ul className="space-y-5">
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        That you’re confirmed for the time you selected
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        That you’ve received your meeting link
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        And that you know what to expect on the call
                      </span>
                    </li>
                  </ul>

                  <div className="mt-5">
                    <span className="text-dark-blue-400 3xl:text-lg text-sm leading-none font-medium">
                      If you don’t respond to confirm the call, your appointment
                      may be released to another business waiting for that spot.
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article className="3xl:p-7 3xl:gap-x-5 3xl:rounded-[25px] flex flex-col items-start gap-3.5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] md:flex-row">
              <div className="shrink-0">
                <Monitor />
              </div>
              <div className="3xl:py-4 py-3.5">
                <h1 className="text-dark-blue-400 3xl:text-2xl text-lg leading-none font-extrabold">
                  Step 3: Show Up on a Desktop or Laptop Computer
                </h1>

                <div className="mt-5">
                  <p className="text-dark-blue-400 3xl:text-lg text-base leading-tight font-medium">
                    Please plan to join the meeting on a computer, not a mobile
                    phone.{" "}
                    <span className="block">
                      Joining from mobile makes it nearly impossible to follow
                      along effectively.
                    </span>
                  </p>
                </div>

                <div className="mt-5">
                  <span className="text-dark-blue-400 3xl:text-xl text-base leading-none font-semibold">
                    We’ll be sharing visuals, competitive data, and UX
                    benchmarks during the session.
                  </span>
                </div>

                <div className="mt-5">
                  <ul className="space-y-5">
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        Make sure{" "}
                        <span className="font-bold uppercase">
                          all decision makers
                        </span>{" "}
                        are present on the call, if not we may have to
                        reschedule
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        Join the call from a quiet place that’s free of any
                        noise or distractions
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        Don’t join the call from your car, airport, or outdoor
                        location
                      </span>
                    </li>
                  </ul>

                  <div className="mt-5">
                    <span className="text-dark-blue-400 3xl:text-lg text-sm leading-none font-medium">
                      If you are more than 10 minutes late to the call, we will
                      unfortunately have to cancel your appointment. So please
                      try to be on time. Thank you for understanding!
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article className="3xl:p-7 3xl:gap-x-5 3xl:rounded-[25px] flex flex-col items-start gap-3.5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] md:flex-row">
              <div className="shrink-0">
                <MessageChatSquare />
              </div>
              <div className="3xl:py-4 py-3.5">
                <h1 className="text-dark-blue-400 3xl:text-2xl text-lg leading-none font-extrabold">
                  Step 4: Be Ready to Discuss
                </h1>

                <div className="mt-5">
                  <span className="text-dark-blue-400 3xl:text-lg text-base leading-none font-medium">
                    To make the session productive, please come prepared with:
                  </span>
                </div>

                <div className="mt-5">
                  <ul className="space-y-5">
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        Access to your product or key user flows (if applicable)
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        Any recent metrics on conversion, retention, or
                        engagement
                      </span>
                    </li>
                    <li className="flex items-start gap-x-3">
                      <Check className="text-primary-500 size-5 shrink-0" />
                      <span className="text-dark-blue-400 3xl:text-xl block text-sm leading-tight font-medium">
                        Questions about your biggest UX or growth challenges
                      </span>
                    </li>
                  </ul>

                  <div className="mt-5">
                    <span className="text-dark-blue-400 3xl:text-lg text-sm leading-none font-medium">
                      Our goal is to give you a clear picture of how your
                      product stacks up, and what to do next.
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="5xl:px-[300px] 4xl:px-[150px] 4xl:pt-[50px] 4xl:pb-[100px] 3xl:p-[100px] 3xl:pt-[50px] p-5 pb-10 md:p-10 lg:px-[100px] lg:py-[50px]">
        <div className="flex items-center justify-center">
          <span className="3xl:text-base bg-[linear-gradient(91.85deg,rgba(34,55,107,1)_0%,rgba(48,108,254,1)_99.34%)] bg-clip-text text-sm leading-none font-semibold text-transparent uppercase">
            Our Core Advantage
          </span>
        </div>
        <div className="max-3xl:max-w-[428px] max-3xl:mx-auto 3xl:mt-5 mt-3">
          <h1 className="text-dark-blue-400 3xl:text-[52px] text-center text-[22px] leading-none font-bold">
            Why companies choose Marketeq over traditional design agencies
          </h1>
        </div>

        <div className="3xl:mt-5 max-3xl:max-w-[456px] max-3xl:mx-auto mt-3 text-center text-lg leading-[1.6] text-gray-500">
          <span className="block">
            We don’t just “design better interfaces.”
          </span>{" "}
          We install proven, research-driven systems that improve how your
          product performs in the market, not just how it looks.
        </div>

        <div className="3xl:mt-[50px] 3xl:gap-5 3xl:grid-cols-3 mt-[30px] grid gap-3.5 md:grid-cols-2">
          <article className="3xl:p-7 3xl:rounded-[25px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <RefreshCw className="size-[29px]" />
            </div>

            <div className="3xl:mt-[50px] mt-[30px]">
              <h3 className="text-dark-blue-400 3xl:text-[22px] text-lg leading-none font-bold">
                Higher conversion & activation
              </h3>
              <p className="3xl:text-base mt-2.5 text-sm leading-[1.6] text-gray-500">
                Every design decision is tested and refined to boost engagement,
                streamline flows, and drive measurable growth.
              </p>
            </div>
          </article>
          <article className="3xl:p-7 3xl:rounded-[25px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <FaceContent className="size-[29px]" />
            </div>

            <div className="3xl:mt-[50px] mt-[30px]">
              <h3 className="text-dark-blue-400 3xl:text-[22px] text-lg leading-none font-bold">
                Faster paths to “Aha!” moments
              </h3>
              <p className="3xl:text-base mt-2.5 text-sm leading-[1.6] text-gray-500">
                We reduce friction so users reach success faster, turning first
                impressions into lasting engagement and retention.
              </p>
            </div>
          </article>
          <article className="3xl:p-7 3xl:rounded-[25px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <Dataflow03 className="size-[29px]" />
            </div>

            <div className="3xl:mt-[50px] mt-[30px]">
              <h3 className="text-dark-blue-400 3xl:text-[22px] text-lg leading-none font-bold">
                Clearer flows = fewer support tickets
              </h3>
              <p className="3xl:text-base mt-2.5 text-sm leading-[1.6] text-gray-500">
                Simplified interfaces help users navigate solutions quickly,
                lowering confusion and reducing support overhead across
                products.
              </p>
            </div>
          </article>
          <article className="3xl:p-7 3xl:rounded-[25px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <Container className="size-[29px]" />
            </div>

            <div className="3xl:mt-[50px] mt-[30px]">
              <h3 className="text-dark-blue-400 3xl:text-[22px] text-lg leading-none font-bold">
                Consistent, dev-ready design system
              </h3>
              <p className="3xl:text-base mt-2.5 text-sm leading-[1.6] text-gray-500">
                Reusable components and clean documentation ensure seamless
                developer handoff and consistent product experiences.
              </p>
            </div>
          </article>
          <article className="3xl:p-7 3xl:rounded-[25px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <Beaker02 className="size-[29px]" />
            </div>

            <div className="3xl:mt-[50px] mt-[30px]">
              <h3 className="text-dark-blue-400 3xl:text-[22px] text-lg leading-none font-bold">
                Insight from user testing (not guesswork)
              </h3>
              <p className="3xl:text-base mt-2.5 text-sm leading-[1.6] text-gray-500">
                Real feedback guides every iteration, our designs evolve through
                measurable user data, not assumptions or opinions.
              </p>
            </div>
          </article>
          <article className="3xl:p-7 3xl:rounded-[25px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <ChartBreakoutCircle className="size-[29px]" />
            </div>

            <div className="3xl:mt-[50px] mt-[30px]">
              <h3 className="text-dark-blue-400 3xl:text-[22px] text-lg leading-none font-bold">
                Designed with awareness of your market
              </h3>
              <p className="3xl:text-base mt-2.5 text-sm leading-[1.6] text-gray-500">
                We heavily analyze your competitors to create experiences that
                feel familiar yet distinctly ahead of the curve.
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="5xl:px-[300px] 4xl:px-[150px] 4xl:py-[100px] 3xl:p-[100px] bg-[linear-gradient(180deg,rgba(225,234,250,0.2)_0%,rgba(255,255,255,0.2)_70.7%,rgba(255,255,255,0.04)_75.12%,rgba(255,255,255,0.2)_89.72%)] px-5 py-10 md:p-10 lg:px-[100px] lg:py-[50px]">
        <div className="flex items-center justify-center">
          <span className="3xl:text-base bg-[linear-gradient(91.85deg,rgba(34,55,107,1)_0%,rgba(48,108,254,1)_99.34%)] bg-clip-text text-xs leading-none font-semibold text-transparent uppercase">
            Pricing Overview
          </span>
        </div>

        <div className="3xl:mt-5 3xl:max-w-[828px] mx-auto mt-3 max-w-[352px]">
          <h1 className="text-dark-blue-400 3xl:text-[52px] text-center text-[22px] leading-none font-bold">
            Flexible, tiered pricing designed for long-term growth
          </h1>
        </div>

        <div className="3xl:mt-5 3xl:text-lg max-3xl:max-w-[460px] max-3xl:mx-auto mt-3 text-center text-sm leading-[1.6] text-gray-500">
          <span className="block">
            Our pricing is structured to match your business stage and
            performance goals, while keeping incentives aligned on both sides.
          </span>{" "}
          We don’t sell “packages”, we build partnerships designed for scale.
        </div>

        <div className="3xl:mt-[50px] 3xl:gap-5 3xl:grid-cols-3 mt-[30px] grid gap-3.5 md:grid-cols-2">
          {fromLength(3).map((key) => (
            <article
              key={key}
              className="3xl:rounded-[25px] 3xl:p-[25px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]"
            >
              <h1 className="text-dark-blue-400 3xl:text-[22px] text-center text-lg leading-none font-bold">
                Growth Foundation
              </h1>

              <h1 className="text-dark-blue-400 3xl:mt-4 3xl:text-[32px] mt-3 text-center text-[22px] leading-none font-extrabold">
                $10,000
                <span className="3xl:text-[22px] text-sm font-light">/mo</span>
              </h1>

              <div className="3xl:mt-4 mt-3">
                <p className="3xl:text-base text-center text-sm leading-none text-gray-500">
                  Perfect for early-stage or mid-market teams ready to redesign
                  a few key product flows and establish scalable UX systems that
                  build consistent structure to every future release.
                </p>
              </div>

              <div className="3xl:mt-4 mt-3">
                <h3 className="text-dark-blue-400 3xl:text-lg text-center text-sm leading-none font-extrabold">
                  80 design hrs
                  <span className="3xl:text-sm text-xs font-light">/month</span>
                </h3>
                <p className="3xl:mt-4 3xl:text-base mt-3 text-center text-sm leading-none text-gray-500">
                  Redesign of 1 major flow at a time (onboarding, checkout,
                  etc.) + usability tests
                </p>
              </div>

              <div className="3xl:my-7 my-[30px] h-px bg-gray-200" />

              <ul className="space-y-5">
                <li className="flex items-start gap-x-3">
                  <Check className="text-primary-500 size-5 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                      UX Audit & Competitive Analysis
                    </h3>
                    <p className="text-sm leading-none text-gray-500">
                      Identify experience gaps and benchmark your product
                      against top competitors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-3">
                  <Check className="text-primary-500 size-5 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                      UX Audit & Competitive Analysis
                    </h3>
                    <p className="text-sm leading-none text-gray-500">
                      Identify experience gaps and benchmark your product
                      against top competitors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-3">
                  <Check className="text-primary-500 size-5 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                      UX Audit & Competitive Analysis
                    </h3>
                    <p className="text-sm leading-none text-gray-500">
                      Identify experience gaps and benchmark your product
                      against top competitors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-3">
                  <Check className="text-primary-500 size-5 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                      UX Audit & Competitive Analysis
                    </h3>
                    <p className="text-sm leading-none text-gray-500">
                      Identify experience gaps and benchmark your product
                      against top competitors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-3">
                  <Check className="text-primary-500 size-5 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                      UX Audit & Competitive Analysis
                    </h3>
                    <p className="text-sm leading-none text-gray-500">
                      Identify experience gaps and benchmark your product
                      against top competitors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-x-3">
                  <Check className="text-primary-500 size-5 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                      UX Audit & Competitive Analysis
                    </h3>
                    <p className="text-sm leading-none text-gray-500">
                      Identify experience gaps and benchmark your product
                      against top competitors.
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          ))}
        </div>

        <div className="bg-gray-25 3xl:grid-cols-2 3xl:divide-x 3xl:rounded-[25px] 3xl:p-7 3xl:mt-[50px] mt-3.5 grid divide-y divide-gray-200 rounded-[18px] border border-gray-200 p-5 pb-10 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
          <div className="3xl:pr-[50px] 3xl:py-[11.5px] pb-[30px]">
            <h3 className="text-dark-blue-400 3xl:text-[22px] text-lg leading-none font-bold">
              UX/UI Essentials
            </h3>

            <h1 className="text-dark-blue-400 3xl:mt-4 3xl:text-[32px] mt-3 text-[22px] leading-none font-black">
              $5,000
              <span className="3xl:text-[22px] text-sm font-light">/mo</span>
            </h1>

            <p className="3xl:mt-4 3xl:text-base mt-3 text-sm leading-none text-gray-500">
              Perfect for early-stage teams ready to redesign one core product
              flow and start building scalable UX systems that bring structure
              and direction to future releases.
            </p>

            <h3 className="text-dark-blue-400 3xl:mt-4 3xl:text-lg mt-3 text-sm leading-none font-black">
              40 design{" "}
              <span className="3xl:text-sm text-xs font-light">hrs/month</span>
            </h3>

            <p className="3xl:mt-4 3xl:text-base mt-3 text-sm leading-none text-gray-500">
              Perfect for early-stage teams ready to redesign one core product
              flow and start building scalable UX systems that bring structure
              and direction to future releases.
            </p>
          </div>
          <div className="3xl:pl-[50px] pt-[30px]">
            <ul className="space-y-5">
              <li className="flex items-start gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                    Initial UX Audit
                  </h3>
                  <p className="text-sm leading-none text-gray-500">
                    Identify top usability issues and prioritize one key area
                    per month.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                    UX/UI Redesign of One Core Product Flow
                  </h3>
                  <p className="text-sm leading-none text-gray-400">
                    One single, high-impact user journey to improve usability
                    and conversion.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                    Basic Design System Setup
                  </h3>
                  <p className="text-sm leading-none text-gray-400">
                    Create foundational visual and component consistency.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                    Bi-Weekly Strategy Calls
                  </h3>
                  <p className="text-sm leading-none text-gray-400">
                    Two short strategy sessions for alignment and next-step
                    planning.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />
                <div className="space-y-1">
                  <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                    Competitive UX Insight
                  </h3>
                  <p className="text-sm leading-none text-gray-400">
                    Light research to position your product against key
                    competitors.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="3xl:rounded-[25px] 3xl:mt-[50px] 3xl:p-7 3xl:pb-[50px] mt-3.5 rounded-[18px] border border-gray-200 bg-white p-5 pb-10 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
          <h1 className="text-dark-blue-400 3xl:text-[24px] text-lg leading-none font-extrabold">
            Performance-Based Pricing
          </h1>

          <p className="3xl:text-lg mt-5 text-sm leading-[1.6] text-gray-500">
            Before we ever talk about design, our goal is to help you maximize
            your earning potential, turning better user experiences into
            measurable business growth.
            <span className="3xl:mt-5 mt-3 block">
              We offer a simple, transparent model that aligns us with your
              growth initiatives and incentivizes us to maximize your profit
              potential, with quarterly bonuses based on your improvements in
              monthly revenue, not just design output.
            </span>
            <span className="3xl:mt-5 mt-3 block">
              You’ll always keep your predictable monthly retainer, which covers
              ongoing design and strategy work, and pay a bonus only for revenue
              growth beyond your past 90-day projections based on last year’s
              revenue.
            </span>
          </p>

          <div className="mt-8">
            <h1 className="text-dark-blue-400 3xl:text-xl text-base leading-none font-semibold">
              How it works:
            </h1>

            <ul className="mt-5 space-y-5">
              <div className="flex items-center gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />{" "}
                <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                  Performance is based only on{" "}
                  <span className="font-bold">verified revenue growth,</span>{" "}
                  not other KPIs.
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />{" "}
                <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                  We calculate performance{" "}
                  <span className="font-bold">quarterly</span>, using{" "}
                  <span className="font-bold">
                    this year’s revenue compared to the same revenue you earned
                    last year.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />{" "}
                <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                  The 10% applies to the{" "}
                  <span className="font-bold">difference in revenue</span>,
                  measured only after our engagement begins.
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />{" "}
                <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                  If your revenue was already projected to grow, and you can
                  show you’ve been on track for those projections, performance
                  pay applies{" "}
                  <span className="font-bold">
                    only to revenue beyond that projection.
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />{" "}
                <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                  If the 10% growth share is less than your monthly retainer,
                  you simply pay the retainer instead.
                </span>
              </div>
              <div className="flex items-center gap-x-3">
                <Check className="text-primary-500 size-5 shrink-0" />{" "}
                <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                  If the 10% exceeds your retainer, you pay the performance
                  amount instead, <span className="font-bold">never both.</span>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="5xl:px-[300px] 4xl:px-[150px] 4xl:py-[100px] 3xl:p-[100px] px-5 py-10 md:p-10 lg:px-[100px] lg:py-[50px]">
        <h1 className="text-dark-blue-400 3xl:text-[52px] text-center text-[22px] leading-none font-bold">
          Our clients love us, see for yourself!
        </h1>

        <div className="3xl:mt-[50px] 3xl:gap-x-8 mt-[30px] grid gap-x-3.5 md:grid-cols-2">
          <div className="3xl:space-y-8 space-y-3">
            <Image className="w-full" src={review01} alt="Review" />
            <Image className="w-full" src={review02} alt="Review" />
            <Image className="w-full" src={review03} alt="Review" />
            <Image className="w-full" src={review04} alt="Review" />
            <Image className="w-full" src={review05} alt="Review" />
            <Image className="w-full" src={review06} alt="Review" />
            <Image className="w-full" src={review07} alt="Review" />
            <Image className="w-full" src={review08} alt="Review" />
            <Image className="w-full" src={review09} alt="Review" />
            <Image className="w-full" src={review10} alt="Review" />
            <Image className="w-full" src={review11} alt="Review" />
            <Image className="w-full" src={review12} alt="Review" />
            <Image className="w-full" src={review13} alt="Review" />
          </div>
          <div className="3xl:space-y-8 space-y-3">
            <Image className="w-full" src={review14} alt="Review" />
            <Image className="w-full" src={review15} alt="Review" />
            <Image className="w-full" src={review16} alt="Review" />
            <Image className="w-full" src={review17} alt="Review" />
            <Image className="w-full" src={review18} alt="Review" />
            <Image className="w-full" src={review19} alt="Review" />
            <Image className="w-full" src={review20} alt="Review" />
            <Image className="w-full" src={review21} alt="Review" />
            <Image className="w-full" src={review22} alt="Review" />
            <Image className="w-full" src={review23} alt="Review" />
            <Image className="w-full" src={review24} alt="Review" />
            <Image className="w-full" src={review25} alt="Review" />
            <Image className="w-full" src={review26} alt="Review" />
          </div>
        </div>
      </div>
    </main>
  )
}
