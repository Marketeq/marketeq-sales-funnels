import { renderableFrom } from "@/lib/renderable-from"
import Markdoc from "@markdoc/markdoc"
import Image from "next/image"
import * as React from "react"

type Component = React.ComponentType<any>

export function DocumentRenderer(props: {
  document: Parameters<typeof renderableFrom>[number]
  componentBlocks?: Record<string, Component> | ((string: string) => Component)
}) {
  const { document, componentBlocks = { Image: ImageRenderer } } = props
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
