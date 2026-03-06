import { renderableFrom } from "@/lib/renderable-from"
import { cn } from "@/lib/utils"
import Markdoc from "@markdoc/markdoc"
import Image from "next/image"
import * as React from "react"

type Component = React.ComponentType<any>

export function DocumentRenderer(props: {
  document: Parameters<typeof renderableFrom>[number]
  componentBlocks?: Record<string, Component> | ((string: string) => Component)
}) {
  const {
    document,
    componentBlocks = { Image: ImageRenderer, Highlight: HighlightRenderer },
  } = props
  const renderable = renderableFrom(document)

  return Markdoc.renderers.react(renderable, React, {
    components: componentBlocks,
  })
}

export const ImageRenderer = ({
  alt,
  ...props
}: React.ComponentProps<typeof Image>) => {
  return <Image {...props} width={1400} alt={alt} height={700} />
}

export const HighlightRenderer = ({
  children,
  variant,
  className,
  ...props
}: React.ComponentProps<"span"> & { variant: string }) => {
  return (
    <span
      className={cn(
        "",
        {
          "text-primary-500": variant === "primary",
        },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
