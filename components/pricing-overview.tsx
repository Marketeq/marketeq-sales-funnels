import { fromLength } from "@/utils/functions"
import { Check } from "@blend-metrics/icons"

export const PricingOverview = () => {
  return (
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
          Our pricing is structured to match your business stage and performance
          goals, while keeping incentives aligned on both sides.
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
                Perfect for early-stage or mid-market teams ready to redesign a
                few key product flows and establish scalable UX systems that
                build consistent structure to every future release.
              </p>
            </div>

            <div className="3xl:mt-4 mt-3">
              <h3 className="text-dark-blue-400 3xl:text-lg text-center text-sm leading-none font-extrabold">
                80 design hrs
                <span className="3xl:text-sm text-xs font-light">/month</span>
              </h3>
              <p className="3xl:mt-4 3xl:text-base mt-3 text-center text-sm leading-none text-gray-500">
                Redesign of 1 major flow at a time (onboarding, checkout, etc.)
                + usability tests
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
                    Identify experience gaps and benchmark your product against
                    top competitors.
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
                    Identify experience gaps and benchmark your product against
                    top competitors.
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
                    Identify experience gaps and benchmark your product against
                    top competitors.
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
                    Identify experience gaps and benchmark your product against
                    top competitors.
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
                    Identify experience gaps and benchmark your product against
                    top competitors.
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
                    Identify experience gaps and benchmark your product against
                    top competitors.
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
            flow and start building scalable UX systems that bring structure and
            direction to future releases.
          </p>

          <h3 className="text-dark-blue-400 3xl:mt-4 3xl:text-lg mt-3 text-sm leading-none font-black">
            40 design{" "}
            <span className="3xl:text-sm text-xs font-light">hrs/month</span>
          </h3>

          <p className="3xl:mt-4 3xl:text-base mt-3 text-sm leading-none text-gray-500">
            Perfect for early-stage teams ready to redesign one core product
            flow and start building scalable UX systems that bring structure and
            direction to future releases.
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
                  Identify top usability issues and prioritize one key area per
                  month.
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
                  One single, high-impact user journey to improve usability and
                  conversion.
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
            We offer a simple, transparent model that aligns us with your growth
            initiatives and incentivizes us to maximize your profit potential,
            with quarterly bonuses based on your improvements in monthly
            revenue, not just design output.
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
                <span className="font-bold">verified revenue growth,</span> not
                other KPIs.
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
                If your revenue was already projected to grow, and you can show
                you’ve been on track for those projections, performance pay
                applies{" "}
                <span className="font-bold">
                  only to revenue beyond that projection.
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <Check className="text-primary-500 size-5 shrink-0" />{" "}
              <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                If the 10% growth share is less than your monthly retainer, you
                simply pay the retainer instead.
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <Check className="text-primary-500 size-5 shrink-0" />{" "}
              <span className="text-dark-blue-400 3xl:text-lg text-sm leading-tight font-medium">
                If the 10% exceeds your retainer, you pay the performance amount
                instead, <span className="font-bold">never both.</span>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
