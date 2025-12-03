import { MarketeqBlue } from "@/components/icons/marketeq-blue"
import Link from "next/link"

export default function AdditionalRouteGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <nav className="3xl:h-16 3xl:px-[100px] sticky top-0 flex h-14 items-center justify-between bg-white px-5">
        <Link href="/" className="focus-visible:outline-none">
          <MarketeqBlue className="3xl:h-[22px] 3xl:w-[149.72px] h-[17.04px] w-[116px] shrink-0" />
        </Link>

        <button
          data-iclosed-link="https://app.iclosed.io/e/marketeq/ux-strategy-call"
          data-embed-type="popup"
          className="bg-primary-500 3xl:h-10 3xl:px-5 3xl:text-sm hover:bg-primary-600 inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-3 rounded-lg px-3 text-[10px] leading-5 font-semibold whitespace-nowrap text-white transition duration-300 focus-visible:outline-none"
        >
          Book a Call
        </button>
      </nav>
      {children}
    </div>
  )
}
