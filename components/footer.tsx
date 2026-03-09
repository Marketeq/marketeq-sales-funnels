import { reader } from "@/utils/reader"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MarketeqWhite } from "./icons/marketeq-white"
import { Copyrights } from "./copyrights"

export const Footer = async ({ destination }: { destination: string }) => {
  const footer = await reader.singletons.footer.read()

  if (!footer) notFound()

  return (
    <footer className="5xl:px-[300px] bg-dark-blue-600 4xl:px-[250px] 3xl:px-[200px] self-end p-5 md:p-10 lg:px-[150px] lg:py-[50px]">
      <div className="flex items-center justify-between">
        <div className="3xl:flex-none 3xl:justify-start 3xl:gap-x-[50px] flex flex-auto flex-col items-center gap-y-5 md:flex-row md:justify-between">
          <Link className="focus-visible:outline-none" href={destination}>
            <MarketeqWhite className="xs:max-3xl:w-[129px] xs:max-3xl:h-[18.95px]" />
          </Link>

          <span className="3xl:text-sm text-xs leading-none text-white">
            <Copyrights>{footer.copyright}</Copyrights>
          </span>
        </div>

        <div className="3xl:flex hidden items-center gap-x-5">
          {footer.links.map((link, index) => (
            <Link
              href={link.to}
              key={index}
              target="_blank"
              className="cursor-pointer text-sm leading-5 font-semibold text-white transition duration-300 hover:underline focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="3xl:mt-[50px] mt-5">
        <span className="3xl:text-sm block text-center text-xs leading-none text-white">
          {footer.title}
        </span>
        <span className="3xl:text-sm mt-5 block text-center text-xs text-white">
          {footer.description}
        </span>
      </div>

      <div className="3xl:hidden mt-5 flex items-center justify-center gap-x-5">
        {footer.links.map((link, index) => (
          <Link
            href={link.to}
            key={index}
            target="_blank"
            className="cursor-pointer text-[10px] leading-5 font-semibold text-white transition duration-300 hover:underline focus-visible:outline-none md:text-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  )
}
