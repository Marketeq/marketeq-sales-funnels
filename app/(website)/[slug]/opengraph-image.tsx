import { MarketeqLogo } from "@/components/marketeq-logo"
import { reader } from "@/utils/reader"
import { ImageResponse } from "next/og"
import path from "node:path"
import fs from "node:fs"

export const alt = "Service"

export const size = { width: 1200, height: 630 }

export const contentType = "image/png"

export async function generateStaticParams() {
  const slugs = await reader.collections.landings.list()

  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const landing = await reader.collections.landings.readOrThrow(slug)

  const interBold = await fs.promises.readFile(
    path.join(process.cwd(), "assets/fonts/inter-28pt-bold.ttf"),
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          width: "100%",
          height: "100%",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 0,
              left: -28,
              right: -28,
              borderTopWidth: 1,
              borderStyle: "dashed",
              borderColor: "#D0D5DD",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: 0,
              left: -28,
              right: -28,
              borderBottomWidth: 1,
              borderStyle: "dashed",
              borderColor: "#D0D5DD",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: -28,
              bottom: -28,
              left: 0,
              borderLeftWidth: 1,
              borderStyle: "dashed",
              borderColor: "#D0D5DD",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: -28,
              bottom: -28,
              right: 0,
              borderRightWidth: 1,
              borderStyle: "dashed",
              borderColor: "#D0D5DD",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "auto",
                borderTopWidth: 1,
                borderStyle: "dashed",
                borderColor: "#D0D5DD",
              }}
            />
            <div
              style={{
                display: "flex",
                flex: "none",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#D0D5DD",
                height: 240,
                width: 240,
              }}
            >
              <MarketeqLogo style={{ height: 88, width: 153.2 }} />
            </div>
            <div
              style={{
                display: "flex",
                flex: "auto",
                borderTopWidth: 1,
                borderStyle: "dashed",
                borderColor: "#D0D5DD",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 32,
              borderTopWidth: 1,
              borderStyle: "dashed",
              borderColor: "#D0D5DD",
            }}
          >
            <span
              style={{
                fontSize: 64,
                lineHeight: 1.1275,
                fontWeight: 700,
                color: "#2459DB",
                display: "block",
                lineClamp: 3,
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              {landing.title}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  )
}
