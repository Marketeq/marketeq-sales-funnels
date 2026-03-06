import { config } from "@/config/markdoc"
import Markdoc, { Node as MarkdocNode } from "@markdoc/markdoc"

export function renderableFrom(options: { node: MarkdocNode }) {
  const { node } = options
  const errors = Markdoc.validate(node, config)

  console.log({ errors })

  if (errors.length) {
    console.log(errors)

    throw new Error("Invalid content")
  }

  return Markdoc.transform(node, config)
}
