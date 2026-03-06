import { MarketeqLogo } from "@/components/marketeq-logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, Lightning01 } from "@blend-metrics/icons"
import { WistiaPlayer } from "@wistia/wistia-player-react"
import Image from "next/image"
import { reader } from "@/utils/reader"
import { DocumentRenderer } from "@/components/document-renderer"
import { Entry } from "@keystatic/core/reader"
import keystaticConfig from "@/keystatic.config"
import { BookingConfirmation } from "@/components/booking-confirmation"
import { Suspense } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Metadata } from "next"

export async function generateStaticParams() {
  const slugs = await reader.collections.confirmations.list()

  return slugs.map((slug) => ({
    slug,
  }))
}

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const confirmation = await reader.collections.confirmations.readOrThrow(slug)
  return {
    title: confirmation.metadata.title,
    description: confirmation.metadata.description,
  }
}

export default async function ThankYou({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const confirmation = await reader.collections.confirmations.readOrThrow(slug)
  const pics = await Promise.all(
    confirmation.testimonials.pictures.map(
      async (picture) => await reader.collections.images.readOrThrow(picture),
    ),
  )
  const midIdx = Math.ceil((pics.length - 1) / 2)
  const explorables = await Promise.all(
    confirmation.calDetails.explorables.map(async (explorable) => {
      const icon = await reader.collections.icons.readOrThrow(
        explorable.indicator,
      )
      return {
        ...explorable,
        icon,
      }
    }),
  )
  const faqs = await Promise.all(
    confirmation.faqs.items.map(async (item) => ({
      ...item,
      answer: await item.answer(),
    })),
  )

  return (
    <>
      <div className="bg-dark-blue-600 min-h-screen">
        <div className="3xl:px-[100px] 4xl:px-[200px] 5xl:px-[300px] 3xl:py-[50px] flex items-center justify-center px-5 py-5 md:px-10">
          <Link
            href={`/thank-you/${slug}`}
            className="focus-visible:outline-none"
          >
            <MarketeqLogo className="xs:max-lg:w-[46.97px] xs:max-lg:h-[26.94px]" />
          </Link>
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

              <div className="3xl:mt-[50px] mt-6">
                <Suspense fallback={null}>
                  <BookingConfirmation />
                </Suspense>
              </div>

              <div className="prose-base prose-h1:3xl:text-[54px] prose-h1:mb-0 3xl:mt-6 prose-h1:text-center prose-h1:text-[21px] prose-h1:leading-tight prose-h1:font-extrabold prose-h1:text-white mt-[30px] md:mt-10 lg:mt-[50px] lg:text-[42px]">
                <DocumentRenderer document={await confirmation.title()} />
              </div>

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
                {explorables.map((explorable, index) => (
                  <article
                    key={index}
                    className="bg-dark-blue-500 border-dark-blue-400 rounded-[25px] border p-5 shadow-[0px_1px_4px_0px_rgba(0,0,0,.03)] lg:p-7"
                  >
                    <div className="bg-primary-500/10 inline-flex size-[50px] flex-none items-center justify-center rounded-[20px]">
                      <Image
                        className="text-primary-500"
                        src={explorable.icon.asset}
                        alt={explorable.icon.name}
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
                ))}
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
                {faqs.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent className="prose-base prose-p:first-of-type:mt-0">
                      <DocumentRenderer document={item.answer} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
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
      <Footer destination={`/thank-you/${slug}`} />
    </>
  )
}
