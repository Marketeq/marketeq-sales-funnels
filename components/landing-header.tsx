"use client"

import Link from "next/link"
import { MarketeqWhite } from "./icons/marketeq-white"
import { useWindowScroll } from "@/lib/hooks"
import { MarketeqBlue } from "./icons/marketeq-blue"

export const LandingHeader = () => {
  const { y } = useWindowScroll()
  const shouldBeWhite = y > 0

  return (
    <header
      data-scrolled={shouldBeWhite}
      className="group/header bg-dark-blue-600 5xl:px-[150px] 3xl:h-16 sticky top-0 z-10 h-14 px-5 py-3 transition duration-300 data-[scrolled=true]:bg-white lg:px-[100px]"
    >
      <nav className="3xl:px-0 flex items-center justify-between lg:px-5">
        <Link href="/" className="focus-visible:outline-none">
          <MarketeqWhite className="max-3xl:h-[17.04px] max-3xl:w-[116px] shrink-0 group-data-[scrolled=true]/header:hidden" />
          <MarketeqBlue className="max-3xl:h-[17.04px] max-3xl:w-[116px] shrink-0 group-data-[scrolled=false]/header:hidden" />
        </Link>

        <div className="3xl:inline-flex hidden gap-x-[50px] pt-[3px]">
          <Link
            href="#problem"
            className="group-data-[scrolled=true]/header:text-dark-blue-400 inline-block cursor-pointer text-[15px] leading-none font-medium text-white transition duration-300 hover:underline focus-visible:outline-none"
          >
            Problem
          </Link>
          <Link
            href="#advantage"
            className="group-data-[scrolled=true]/header:text-dark-blue-400 inline-block cursor-pointer text-[15px] leading-none font-medium text-white transition duration-300 hover:underline focus-visible:outline-none"
          >
            Advantage
          </Link>
          <Link
            href="#services"
            className="group-data-[scrolled=true]/header:text-dark-blue-400 inline-block cursor-pointer text-[15px] leading-none font-medium text-white transition duration-300 hover:underline focus-visible:outline-none"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="group-data-[scrolled=true]/header:text-dark-blue-400 inline-block cursor-pointer text-[15px] leading-none font-medium text-white transition duration-300 hover:underline focus-visible:outline-none"
          >
            Process
          </Link>
          <Link
            href="#deliverables"
            className="group-data-[scrolled=true]/header:text-dark-blue-400 inline-block cursor-pointer text-[15px] leading-none font-medium text-white transition duration-300 hover:underline focus-visible:outline-none"
          >
            Deliverables
          </Link>
          <Link
            href="#results"
            className="group-data-[scrolled=true]/header:text-dark-blue-400 inline-block cursor-pointer text-[15px] leading-none font-medium text-white transition duration-300 hover:underline focus-visible:outline-none"
          >
            Results
          </Link>
        </div>

        <button
          data-iclosed-link="https://app.iclosed.io/e/marketeq/ux-strategy-call"
          data-embed-type="popup"
          className="bg-primary-500 3xl:h-10 3xl:px-5 3xl:text-sm hover:bg-primary-600 inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg px-3 text-[10px] leading-5 font-semibold whitespace-nowrap text-white transition duration-300 focus-visible:outline-none"
        >
          Book a Call
        </button>
      </nav>
    </header>
  )
}
