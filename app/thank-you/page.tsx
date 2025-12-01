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

export default function ThankYou() {
  return (
    <main>
      <div className="bg-dark-blue-600 px-[300px]">
        <div className="flex h-[72px] items-end justify-center">
          <MarketeqWhite className="h-[22px] w-[149.72px] shrink-0" />
        </div>
        <div className="px-[126px] pt-[50px] pb-[100px]">
          <div className="flex items-center justify-center">
            <div className="border-primary-500 flex h-11 shrink-0 items-center gap-x-[8.32px] rounded-full border-[1.66px] px-5 py-3">
              <Lightning01 className="text-primary-500 max-3xl:size-3.5" />
              <span className="text-base leading-5 font-bold text-white">
                UX/UI That Drives Growth
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-center text-[54px] leading-none font-extrabold text-white">
              Congratulations your appointment has been scheduled, But Not
              Confirmed!
            </h1>

            <div className="mt-6">
              <div className="mx-auto max-w-[638px]">
                <p className="text-center text-lg leading-none font-medium text-white">
                  We sent you a confirmation email with your call details to
                  your inbox, make sure to{" "}
                  <span className="font-extrabold">
                    (check your spam folder)
                  </span>{" "}
                  and add this appointment to your calendar right now.
                </p>
              </div>

              <div className="mt-[50px]">
                <p className="text-center text-lg leading-none font-medium text-white">
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

      <div className="px-[300px] py-[100px]">
        <div>
          <div className="flex items-center justify-center">
            <span className="bg-[linear-gradient(91.85deg,rgba(34,55,107,1)_0%,rgba(48,108,254,1)_99.34%)] bg-clip-text text-base leading-none font-semibold text-transparent uppercase">
              getting ready
            </span>
          </div>
          <div className="mx-auto mt-5 max-w-[636px]">
            <h1 className="text-dark-blue-400 text-center text-[52px] leading-[1.125] font-bold">
              Make sure you’re prepared for the call...
            </h1>
          </div>

          <div className="mx-auto mt-5 max-w-[912px]">
            <p className="text-dark-blue-400 text-center text-lg leading-[1.6]">
              Thanks for booking your strategy session.{" "}
              <span className="font-bold">This isn’t a sales pitch</span>, it’s
              a focused session designed to uncover{" "}
              <span className="font-bold">how your product performs</span>
              against the <span className="font-bold">top competitors</span> in
              your market and where you’re leaving opportunities on the table.
              To make sure everything goes smoothly,{" "}
              <span className="font-bold">please follow the steps below:</span>
            </p>
          </div>

          <div className="mt-[50px] space-y-6">
            {fromLength(4).map((key) => (
              <article
                key={key}
                className="flex items-start gap-x-5 rounded-[25px] border border-gray-200 bg-white p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]"
              >
                <div className="shrink-0">
                  <CalendarCheck01 />
                </div>
                <div className="py-4">
                  <h1 className="text-dark-blue-400 text-4xl leading-none font-extrabold">
                    Step 1: Add the Appointment to Your Calendar
                  </h1>

                  <div className="mt-5">
                    <span className="text-dark-blue-400 text-lg leading-none font-medium">
                      Google recently changed how it handles external invites,
                      and these appointments won’t automatically appear on your
                      calendar.
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-dark-blue-400 text-xl leading-none font-semibold">
                      Google recently changed how it handles external invites,
                      and these appointments won’t automatically appear on your
                      calendar.
                    </span>
                  </div>

                  <div className="mt-5">
                    <ul className="space-y-5">
                      <li className="flex items-start gap-x-3">
                        <Check className="text-primary-500 size-5 shrink-0" />
                        <span className="text-dark-blue-400 block text-xl leading-none font-medium">
                          <span className="block">
                            Click the button above labeled{" "}
                            <span className="font-bold">
                              “Add to Calendar.”
                            </span>
                          </span>
                          <span className="block">
                            This will open your Google Calendar so you can
                            manually add your confirmed time.
                          </span>
                        </span>
                      </li>
                      <li className="flex items-start gap-x-3">
                        <Check className="text-primary-500 size-5 shrink-0" />
                        <span className="text-dark-blue-400 block text-xl leading-none font-medium">
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
                      <span className="text-dark-blue-400 text-lg leading-none font-medium">
                        Once you do both, the appointment will show up properly
                        on your calendar with the meeting link.
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[300px] pt-[50px] pb-[100px]">
        <div className="flex items-center justify-center">
          <span className="bg-[linear-gradient(91.85deg,rgba(34,55,107,1)_0%,rgba(48,108,254,1)_99.34%)] bg-clip-text text-base leading-none font-semibold text-transparent uppercase">
            Our Core Advantage
          </span>
        </div>
        <h1 className="text-dark-blue-400 mt-5 text-center text-[52px] leading-none font-bold">
          Why companies choose Marketeq over traditional design agencies
        </h1>

        <div className="mt-5 text-center text-lg leading-[1.6] text-gray-500">
          <span className="block">
            We don’t just “design better interfaces.”
          </span>{" "}
          We install proven, research-driven systems that improve how your
          product performs in the market, not just how it looks.
        </div>

        <div className="mt-[50px] grid grid-cols-3 gap-5">
          <article className="rounded-[25px] border border-gray-200 bg-white p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <RefreshCw className="size-[29px]" />
            </div>

            <div className="mt-[50px]">
              <h3 className="text-dark-blue-400 text-[22px] leading-none font-bold">
                Higher conversion & activation
              </h3>
              <p className="mt-2.5 text-base leading-[1.6] text-gray-500">
                Every design decision is tested and refined to boost engagement,
                streamline flows, and drive measurable growth.
              </p>
            </div>
          </article>
          <article className="rounded-[25px] border border-gray-200 bg-white p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <FaceContent className="size-[29px]" />
            </div>

            <div className="mt-[50px]">
              <h3 className="text-dark-blue-400 text-[22px] leading-none font-bold">
                Faster paths to “Aha!” moments
              </h3>
              <p className="mt-2.5 text-base leading-[1.6] text-gray-500">
                We reduce friction so users reach success faster, turning first
                impressions into lasting engagement and retention.
              </p>
            </div>
          </article>
          <article className="rounded-[25px] border border-gray-200 bg-white p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <Dataflow03 className="size-[29px]" />
            </div>

            <div className="mt-[50px]">
              <h3 className="text-dark-blue-400 text-[22px] leading-none font-bold">
                Clearer flows = fewer support tickets
              </h3>
              <p className="mt-2.5 text-base leading-[1.6] text-gray-500">
                Simplified interfaces help users navigate solutions quickly,
                lowering confusion and reducing support overhead across
                products.
              </p>
            </div>
          </article>
          <article className="rounded-[25px] border border-gray-200 bg-white p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <Container className="size-[29px]" />
            </div>

            <div className="mt-[50px]">
              <h3 className="text-dark-blue-400 text-[22px] leading-none font-bold">
                Consistent, dev-ready design system
              </h3>
              <p className="mt-2.5 text-base leading-[1.6] text-gray-500">
                Reusable components and clean documentation ensure seamless
                developer handoff and consistent product experiences.
              </p>
            </div>
          </article>
          <article className="rounded-[25px] border border-gray-200 bg-white p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <Beaker02 className="size-[29px]" />
            </div>

            <div className="mt-[50px]">
              <h3 className="text-dark-blue-400 text-[22px] leading-none font-bold">
                Insight from user testing (not guesswork)
              </h3>
              <p className="mt-2.5 text-base leading-[1.6] text-gray-500">
                Real feedback guides every iteration, our designs evolve through
                measurable user data, not assumptions or opinions.
              </p>
            </div>
          </article>
          <article className="rounded-[25px] border border-gray-200 bg-white p-7 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]">
            <div className="bg-primary-25 text-primary-500 inline-flex size-[50px] shrink-0 items-center justify-center rounded-full">
              <ChartBreakoutCircle className="size-[29px]" />
            </div>

            <div className="mt-[50px]">
              <h3 className="text-dark-blue-400 text-[22px] leading-none font-bold">
                Designed with awareness of your market
              </h3>
              <p className="mt-2.5 text-base leading-[1.6] text-gray-500">
                We heavily analyze your competitors to create experiences that
                feel familiar yet distinctly ahead of the curve.
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,rgba(225,234,250,0.2)_0%,rgba(255,255,255,0.2)_70.7%,rgba(255,255,255,0.04)_75.12%,rgba(255,255,255,0.2)_89.72%)] px-[300px] pt-[50px] pb-[100px]">
        <div className="flex items-center justify-center">
          <span className="bg-[linear-gradient(91.85deg,rgba(34,55,107,1)_0%,rgba(48,108,254,1)_99.34%)] bg-clip-text text-base leading-none font-semibold text-transparent uppercase">
            Pricing Overview
          </span>
        </div>

        <div className="mx-auto mt-5 max-w-[828px]">
          <h1 className="text-dark-blue-400 text-center text-[52px] leading-none font-bold">
            Flexible, tiered pricing designed for long-term growth
          </h1>
        </div>

        <div className="mt-5 text-center text-lg leading-[1.6] text-gray-500">
          <span className="block">
            Our pricing is structured to match your business stage and
            performance goals, while keeping incentives aligned on both sides.
          </span>{" "}
          We don’t sell “packages”, we build partnerships designed for scale.
        </div>

        <div className="mt-[50px] grid grid-cols-3 gap-5">
          {fromLength(3).map((key) => (
            <article
              key={key}
              className="border border-gray-200 bg-white p-[25px] shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)]"
            >
              <h1 className="text-dark-blue-400 text-center text-[22px] leading-none font-bold">
                Growth Foundation
              </h1>

              <h1 className="text-dark-blue-400 mt-4 text-center text-[32px] leading-none font-extrabold">
                $10,000<span className="text-[22px] font-light">/mo</span>
              </h1>

              <div className="mt-4">
                <p className="text-center text-base leading-none text-gray-500">
                  Perfect for early-stage or mid-market teams ready to redesign
                  a few key product flows and establish scalable UX systems that
                  build consistent structure to every future release.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-dark-blue-400 text-center text-lg leading-none">
                  80 design hrs
                  <span className="text-sm font-light">/month</span>
                </h3>
                <p className="mt-4 text-center text-base leading-none text-gray-500">
                  Redesign of 1 major flow at a time (onboarding, checkout,
                  etc.) + usability tests
                </p>
              </div>

              <div className="my-7 h-px bg-gray-200" />

              <ul className="space-y-5">
                <li className="flex items-start gap-x-3">
                  <Check className="text-primary-500 size-5 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-dark-blue-400 text-sm leading-none font-bold">
                      UX Audit & Competitive Analysis
                    </h3>
                    <p className="text-sm leading-none text-gray-400">
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
                    <p className="text-sm leading-none text-gray-400">
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
                    <p className="text-sm leading-none text-gray-400">
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
                    <p className="text-sm leading-none text-gray-400">
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
                    <p className="text-sm leading-none text-gray-400">
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
                    <p className="text-sm leading-none text-gray-400">
                      Identify experience gaps and benchmark your product
                      against top competitors.
                    </p>
                  </div>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
