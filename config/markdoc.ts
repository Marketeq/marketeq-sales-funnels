import { nodes, Config } from "@markdoc/markdoc"

export const config: Config = {
  nodes: {
    image: {
      ...nodes.image,
      render: "Image",
    },
  },
  tags: {
    Highlight: {
      render: "Highlight",
      attributes: {
        variant: {
          type: String,
          required: true,
        },
      },
    },
  },
}
