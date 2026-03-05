import { Ellipse } from "@/components/ellipse"
import { MarketeqLogo } from "@/components/marketeq-logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Lightning01 } from "@blend-metrics/icons"
import Image from "next/image"
import { WistiaPlayer } from "@wistia/wistia-player-react"
import Link from "next/link"
import { reader } from "@/utils/reader"
import { DocumentRenderer } from "@/components/document-renderer"
import { CalCalendar } from "@/components/cal-calendar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const landing = await reader.collections.landings.readOrThrow(slug)
  return {
    title: landing.metadata.title,
    description: landing.metadata.description,
  }
}

export async function generateStaticParams() {
  const slugs = await reader.collections.landings.list()

  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function Landing({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const landing = await reader.collections.landings.readOrThrow(slug)

  const faqs = await Promise.all(
    landing.faqs.items.map(async (item) => ({
      ...item,
      answer: await item.answer(),
    })),
  )
  const midIdx = Math.ceil((landing.reviews.pictures.length - 1) / 2)
  const pics = await Promise.all(
    landing.reviews.pictures.map(
      async (picture) => await reader.collections.images.readOrThrow(picture),
    ),
  )
  const { eventType } = landing.booking
  const calLinkDataAttr = `${process.env.CAL_USERNAME}/${eventType}`

  return (
    <div className="relative">
      <Ellipse className="absolute top-0 left-1/2 -translate-x-1/2" />
      <div className="relative">
        <div className="3xl:px-[100px] 3xl:py-[50px] flex items-center justify-center px-5 py-5 md:justify-between md:px-10">
          <Link className="focus-visible:outline-none" href={`/${slug}`}>
            <MarketeqLogo className="xs:max-3xl:w-[46.98px] xs:max-3xl:h-[26.94px] shrink-0" />
          </Link>

          <button
            data-cal-link={calLinkDataAttr}
            data-cal-config='{"layout":"month_view","theme":"light"}'
            className="bg-primary-500 3xl:h-10 3xl:px-5 3xl:text-sm hover:bg-primary-600 hidden h-9 shrink-0 cursor-pointer items-center justify-center rounded-lg px-3.5 text-xs leading-none font-semibold whitespace-nowrap text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,.05)] hover:scale-[1.025] focus-visible:outline-none md:inline-flex"
          >
            {landing.actionable}
          </button>
        </div>

        <div className="5xl:px-[300px] 4xl:px-[250px] 3xl:px-[200px] px-5 pb-10 md:pt-0 md:pb-10 lg:px-[150px] lg:pb-[100px]">
          <div className="mx-auto max-w-[1320px]">
            <div className="flex justify-center">
              <div className="border-primary-500 3xl:h-11 3xl:gap-x-[8.32px] 3xl:border-[1.6] 3xl:px-5 3xl:text-base inline-flex h-[30.15px] shrink-0 items-center gap-x-[5.6px] rounded-full border-[1.12px] px-[13.46px] text-[10px] leading-2.5 font-bold whitespace-nowrap text-white uppercase">
                <Lightning01 className="text-primary-500 3xl:size-5 size-[13.46px]" />{" "}
                {landing.highlight}
              </div>
            </div>

            <div className="prose-h1:3xl:text-[57px] prose-base prose-h1:text-lg prose-h1:leading-none prose-h1:md:text-[36px] prose-h1:lg:text-[40px] mt-6 text-center text-white">
              <DocumentRenderer document={await landing.headline()} />
            </div>

            <div className="mt-[60px] lg:mt-[75px]">
              <div className="3xl:gap-x-6 flex flex-col items-center gap-3 md:flex-row md:justify-center">
                <h3 className="3xl:text-[22px] text-base leading-none font-bold text-white underline">
                  {landing.helptextPrefix}
                </h3>
                <p className="3xl:text-lg text-sm leading-none font-medium text-white">
                  {landing.helptext}
                </p>
              </div>

              <div className="mt-10 lg:mt-[50px]">
                <div className="border-primary-500 3xl:w-[1041px] 4xl:w-[1100px] 5xl:w-[1320px] xs:max-3xl:aspect-video 3xl:rounded-[20px] rounded-xl border-[2.06px] p-3 md:rounded-[14px] md:p-5 lg:p-6">
                  <WistiaPlayer mediaId={landing.videoId} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking */}
        <div className="5xl:px-[300px] 4xl:px-[250px] 3xl:px-[200px] px-5 pb-10 md:pt-0 md:pb-10 lg:px-[150px] lg:pb-[100px]">
          <div className="mx-auto max-w-[1320px]">
            <div className="3xl:gap-x-6 flex flex-col items-center gap-3 md:flex-row md:items-start md:justify-center">
              <h3 className="3xl:text-[22px] text-base leading-none font-bold whitespace-nowrap text-white underline">
                {landing.booking.helptextPrefix}
              </h3>
              <p className="3xl:text-lg 3xl:max-w-[579px] text-center text-sm leading-none font-medium text-white md:text-left">
                {landing.booking.helptext}
              </p>
            </div>

            <div className="mt-10 lg:mt-[50px]">
              <CalCalendar calLink={calLinkDataAttr} />
            </div>

            <div className="mt-5 lg:mt-6">
              <span className="block text-center text-sm leading-[1.6] font-semibold text-white">
                {landing.booking.caption}
              </span>
            </div>
          </div>
        </div>

        {/* Faq's */}
        <div className="5xl:px-[300px] 4xl:px-[250px] 3xl:px-[200px] px-5 pb-10 md:pt-0 md:pb-10 lg:px-[150px] lg:pb-[100px]">
          <div className="mx-auto max-w-[1320px]">
            <span className="block text-center text-xs leading-[1.6] font-semibold text-white uppercase lg:text-sm">
              {landing.faqs.tagline}
            </span>

            <div className="mx-auto mt-3 max-w-[612px] lg:mt-5">
              <h1 className="3xl:text-[52px] text-center text-[28px] leading-none font-bold text-white lg:text-[48px]">
                {landing.faqs.title}
              </h1>
            </div>

            <div className="3xl:max-w-[690px] 4xl:max-w-[750px] 5xl:max-w-[970px] mx-auto mt-3 max-w-[261px] text-center text-sm leading-[1.6] font-semibold text-white md:max-w-[428px] lg:mt-5 lg:max-w-[502px] lg:text-lg">
              {landing.faqs.description}
            </div>

            <Accordion
              type="single"
              defaultValue="item-0"
              className="mt-10 lg:mt-[50px]"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="prose-base prose-p:first-of-type:mt-0">
                    <DocumentRenderer document={faq.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Reviews */}
        <div className="5xl:px-[300px] 4xl:px-[250px] 3xl:px-[200px] px-5 py-10 md:pt-0 md:pb-10 lg:px-[150px] lg:pb-[100px]">
          <div className="mx-auto max-w-[1320px]">
            <h1 className="3xl:text-[40px] text-center text-[28px] leading-none font-bold text-white lg:text-[32px]">
              {landing.reviews.title}
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
            <div className="3xl:mt-[75px] mt-10 flex flex-col items-center gap-y-11 lg:mt-[50px] lg:gap-y-14">
              <button
                data-cal-link={calLinkDataAttr}
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="neon-pulse bg-primary-500 3xl:rounded-xl 3xl:px-12 3xl:py-[21px] hover:bg-primary-600 relative inline-flex cursor-pointer flex-col items-start gap-y-px rounded-[15px] px-[34px] py-[15.89px] shadow-[0px_1px_2px_0px_rgba(16,24,40,.05)] transition duration-300 hover:scale-[1.025] hover:drop-shadow-[0px_0px_9.9px_0px_rgba(48,108,254,1)] focus-visible:outline-none active:drop-shadow-[0px_0px_14.6px_2px_rgba(48,108,254,1)]"
              >
                <span className="flex items-center gap-x-3">
                  <span className="3xl:text-[33.76px] 3xl:leading-[47.26px] inline-block text-[19.86px] leading-[27.8px] font-semibold whitespace-nowrap text-white">
                    {landing.reviews.actionableTitle}
                  </span>
                  <ArrowRight className="3xl:size-[30.38px] size-[17.87px] text-white" />
                </span>
                <span className="3xl:text-[18.67px] text-xs leading-none whitespace-nowrap text-white">
                  {landing.reviews.actionableSubtitle}
                </span>
              </button>

              <span className="text-xs leading-none text-white lg:text-base">
                {landing.reviews.actionableHelptext}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer destination={`/${slug}`} />
    </div>
  )
}
