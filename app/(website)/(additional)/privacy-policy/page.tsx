import { DocumentRenderer } from "@/components/document-renderer"
import { Footer } from "@/components/footer"
import { reader } from "@/utils/reader"
import { notFound } from "next/navigation"

export default async function PrivacyPolicy() {
  const privacyPolicy = await reader.singletons.privacyPolicy.read()

  if (!privacyPolicy) notFound()

  return (
    <>
      <div className="3xl:scroll-mt-16 scroll-mt-14 bg-white">
        <div className="3xl:px-[200px] 4xl:px-[300px] 5xl:px-[400px] 3xl:py-[100px] prose-lg prose-headings:text-dark-blue-400 px-5 py-10 text-gray-500 md:p-10 lg:p-[50px]">
          <DocumentRenderer document={await privacyPolicy.content()} />
        </div>
      </div>
      <Footer destination="/" />
    </>
  )
}
