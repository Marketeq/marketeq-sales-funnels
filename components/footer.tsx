"use client"

import Link from "next/link"
import { Marketeq } from "./icons/marketeq"
import { usePathname } from "next/navigation"

export const Footer = () => {
  const pathname = usePathname()
  const isThankYouPage = pathname === "/thank-you"
  return (
    <footer className="5xl:px-[300px] 4xl:px-[150px] p-5 md:p-10 lg:px-[100px] lg:py-[50px]">
      <div className="3xl:flex 3xl:items-center 3xl:justify-between grid">
        <div className="3xl:gap-x-[50px] 3xl:justify-start flex flex-col items-center gap-y-5 md:flex-row md:justify-between">
          <Link
            href="/"
            className="focus-visible:outline-none"
            target={isThankYouPage ? "_blank" : undefined}
          >
            <Marketeq className="3xl:w-[149.72px] 3xl:h-[22px] h-[18.95px] w-[129px]" />
          </Link>

          <span className="text-dark-blue-400 3xl:text-sm inline-block text-center text-xs leading-none max-md:max-w-[205px] max-md:flex-auto md:text-left">
            © 2011 - {new Date().getFullYear()} Marketeq Digital Inc. All
            Rights Reserved.
          </span>
        </div>

        <div className="3xl:flex hidden items-center gap-x-5">
          <Link
            href="/terms-of-use"
            className="text-dark-blue-400 decoration-dark-blue-400/50 hover:decoration-dark-blue-400 cursor-pointer text-[10px] font-semibold underline transition duration-300 focus-visible:outline-none md:text-sm"
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy-policy"
            className="text-dark-blue-400 decoration-dark-blue-400/50 hover:decoration-dark-blue-400 cursor-pointer text-[10px] font-semibold underline transition duration-300 focus-visible:outline-none md:text-sm"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="3xl:mt-[50px] mt-5">
        <span className="text-dark-blue-400 3xl:text-sm inline-block text-center text-xs leading-none">
          This site is not a part of Google™ or Meta™, including Facebook™
          and Instagram™. It is not endorsed by Google™, Meta™, Facebook™,
          or Instagram™ in any way. All trademarks and brand names mentioned
          are the property of their respective owners.
        </span>
      </div>

      <div className="mt-5">
        <span className="text-dark-blue-400 3xl:text-sm inline-block text-center text-xs leading-none">
          DISCLAIMER: The results and performance metrics shared on this page
          and during our consultations represent the outcomes of our work and,
          in some cases, those of previous or current clients. Please understand
          that these results are not typical, and we are not implying that you
          will achieve the same results (or any results at all). The examples
          provided are for illustration purposes only. Your results may vary
          based on numerous factors, including but not limited to your business
          model, market conditions, background, experience, and dedication. All
          business initiatives involve risk, along with significant and
          consistent effort. If you are not ready to accept this, please DO NOT
          ENGAGE WITH MARKETEQ&apos;S SERVICES. Marketeq Digital is committed to
          delivering high-quality work in all our projects. However, we do not
          offer any performance, results, or outcome guarantees. Outcomes can
          vary widely and depend on numerous factors beyond our control, so no
          specific return on investment or success is promised.
        </span>
      </div>

      <div className="3xl:hidden mt-5 flex items-center justify-center gap-x-5">
        <Link
          href="/terms-of-use"
          className="text-dark-blue-400 decoration-dark-blue-400/30 hover:decoration-dark-blue-400 cursor-pointer text-[10px] font-semibold underline transition duration-300 focus-visible:outline-none md:text-sm"
        >
          Terms of Use
        </Link>
        <Link
          href="/privacy-policy"
          className="text-dark-blue-400 decoration-dark-blue-400/30 hover:decoration-dark-blue-400 cursor-pointer text-[10px] font-semibold underline transition duration-300 focus-visible:outline-none md:text-sm"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
