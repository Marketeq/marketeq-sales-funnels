import { config, fields, collection, singleton } from "@keystatic/core"

const isProd = process.env.NODE_ENV === "production"

const localMode = () =>
  ({
    kind: "local",
  }) as const

const remoteMode = () => ({ kind: "cloud" }) as const

export default config({
  storage: isProd ? remoteMode() : localMode(),
  cloud: {
    project: "marketeq/sales-funnels",
  },
  collections: {
    landings: collection({
      label: "Landing pages",
      path: "content/landings/*",
      slugField: "title",
      previewUrl: "/?slug={slug}",
      schema: {
        actionable: fields.text({ label: "Actionable" }),
        highlight: fields.text({ label: "Highlight" }),
        title: fields.slug({ name: { label: "Title" } }),
        headline: fields.markdoc({
          label: "Headline",
          options: {
            heading: [1],
            orderedList: false,
            unorderedList: false,
            blockquote: false,
            code: false,
            codeBlock: false,
            divider: false,
            image: false,
            link: false,
            table: false,
          },
        }),
        helptextPrefix: fields.text({ label: "Help text prefix" }),
        helptext: fields.text({ label: "Helptext" }),
        videoId: fields.text({
          label: "Wistia video ID",
          validation: { isRequired: true },
        }),
        confirmation: fields.relationship({
          label: "'Thank You' page",
          collection: "confirmations",
          validation: { isRequired: true },
        }),
        booking: fields.object(
          {
            helptextPrefix: fields.text({ label: "Helptext prefix" }),
            helptext: fields.text({ label: "Helptext" }),
            caption: fields.text({ label: "Caption" }),
          },
          {
            label: "Booking",
            description: "The section where you can book a call",
          },
        ),
        faqs: fields.object(
          {
            tagline: fields.text({ label: "Tagline" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            items: fields.array(
              fields.object(
                {
                  question: fields.text({ label: "Question" }),
                  answer: fields.markdoc({
                    label: "Answer",
                    options: {
                      heading: false,
                      orderedList: false,
                      unorderedList: false,
                      blockquote: false,
                      code: false,
                      codeBlock: false,
                      divider: false,
                      image: false,
                      link: false,
                      table: false,
                    },
                  }),
                },
                { label: "Faq's" },
              ),
              {
                label: "Faq's",
                itemLabel: (item) => item.fields.question.value,
              },
            ),
          },
          {
            label: "Faq's",
            description:
              "The section where you can see various frequently ask questions",
          },
        ),
        reviews: fields.object(
          {
            title: fields.text({ label: "Title" }),
            pictures: fields.multiRelationship({
              label: "Pictures as reviews",
              collection: "images",
            }),
            actionableTitle: fields.text({ label: "Actionable title" }),
            actionableSubtitle: fields.text({ label: "Actionable subtitle" }),
            actionableHelptext: fields.text({ label: "Actionable help text" }),
          },
          {
            label: "Reviews",
            description:
              "The section where you see various reviews by your clients",
          },
        ),
      },
    }),
    images: collection({
      label: "Images",
      slugField: "alt",
      path: "content/images/*",
      schema: {
        asset: fields.image({
          label: "Asset",
          directory: "public/images",
          publicPath: "/images",
          validation: {
            isRequired: true,
          },
        }),
        alt: fields.slug({ name: { label: "Alt" } }),
      },
    }),
    icons: collection({
      label: "Icons",
      slugField: "name",
      path: "content/icons/*",
      schema: {
        asset: fields.image({
          label: "Asset",
          directory: "public/icons",
          publicPath: "/icons",
          validation: {
            isRequired: true,
          },
        }),
        name: fields.slug({ name: { label: "Name" } }),
      },
    }),
    confirmations: collection({
      label: "'Thank You' pages",
      slugField: "highlight",
      path: "content/confirmations/*",
      schema: {
        highlight: fields.slug({ name: { label: "Highlight" } }),
        title: fields.markdoc({
          label: "Title",
          options: {
            divider: false,
            blockquote: false,
            heading: [1],
            unorderedList: false,
            orderedList: false,
            table: false,
            image: false,
            link: false,
            codeBlock: false,
          },
        }),
        description: fields.markdoc({
          label: "Description",
          options: {
            divider: false,
            blockquote: false,
            heading: false,
            unorderedList: false,
            orderedList: false,
            table: false,
            image: false,
            link: false,
            codeBlock: false,
          },
        }),
        helptext: fields.markdoc({
          label: "Helptext",
          options: {
            divider: false,
            blockquote: false,
            heading: false,
            unorderedList: false,
            orderedList: false,
            table: false,
            image: false,
            link: false,
            codeBlock: false,
          },
        }),
        videoId: fields.text({
          label: "Wistia video ID",
          validation: { isRequired: true },
        }),
        explorables: fields.array(
          fields.object(
            {
              indicator: fields.relationship({
                label: "Icon",
                collection: "icons",
                validation: { isRequired: true },
              }),
              title: fields.markdoc({
                label: "Title",
                options: {
                  divider: false,
                  blockquote: false,
                  heading: false,
                  unorderedList: false,
                  orderedList: false,
                  table: false,
                  image: false,
                  link: false,
                  codeBlock: false,
                },
              }),
            },
            {
              label: "Explorable",
            },
          ),
          {
            label: "Explorables",
            itemLabel: (item) =>
              item.fields.indicator.value || "Please select an icon",
          },
        ),
        brief: fields.object(
          {
            helptext: fields.markdoc({
              label: "Helptext",
              options: {
                divider: false,
                blockquote: false,
                heading: false,
                unorderedList: false,
                orderedList: false,
                table: false,
                image: false,
                link: false,
                codeBlock: false,
              },
            }),
            videoId: fields.text({
              label: "Wistia video ID",
              validation: { isRequired: true },
            }),
          },
          {
            label: "Brief",
            description: "The section right after the main (hero)",
          },
        ),
        calDetails: fields.object(
          {
            title: fields.text({ label: "Title" }),
            explorables: fields.array(
              fields.object(
                {
                  indicator: fields.relationship({
                    label: "Icon",
                    collection: "icons",
                    validation: {
                      isRequired: true,
                    },
                  }),
                  title: fields.text({ label: "Title" }),
                  subtitle: fields.text({ label: "Subtitle", multiline: true }),
                },
                { label: "Explorable" },
              ),
              {
                label: "Explorables",
                itemLabel: (item) =>
                  item.fields.title.value || "Please enter a title",
              },
            ),
          },
          {
            label: "Cal details",
            description: "All the details about the cal",
          },
        ),
        phases: fields.array(
          fields.object({
            videoId: fields.text({
              label: "Wistia video ID",
              validation: { isRequired: true },
            }),
            title: fields.text({ label: "Title" }),
            subtitle: fields.text({ label: "Subtitle" }),
            list: fields.array(
              fields.object(
                { content: fields.text({ label: "Content" }) },
                { label: "Item" },
              ),
              {
                label: "List",
                itemLabel: (item) =>
                  item.fields.content.value || "Please provide content",
              },
            ),
          }),
          {
            label: "Phases",
            description: "All the phases involved in the process",
            itemLabel: (item) =>
              item.fields.title.value || "Please enter a title",
          },
        ),
        faqs: fields.object(
          {
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            items: fields.array(
              fields.object(
                {
                  question: fields.text({ label: "Question" }),
                  answer: fields.markdoc({
                    label: "Answer",
                    options: {
                      heading: false,
                      orderedList: false,
                      unorderedList: false,
                      blockquote: false,
                      code: false,
                      codeBlock: false,
                      divider: false,
                      image: false,
                      link: false,
                      table: false,
                    },
                  }),
                },
                { label: "Faq's" },
              ),
              {
                label: "Faq's",
                itemLabel: (item) => item.fields.question.value,
              },
            ),
          },
          {
            label: "Faq's",
            description:
              "The section where you can see various frequently ask questions",
          },
        ),
        testimonials: fields.object(
          {
            title: fields.text({ label: "Title" }),
            pictures: fields.multiRelationship({
              label: "Pictures as reviews",
              collection: "images",
            }),
          },
          {
            label: "Testimonials",
            description:
              "The section where you see various testimonials by your clients",
          },
        ),
      },
    }),
  },
  singletons: {
    footer: singleton({
      label: "Footer",
      path: "content/footer",
      schema: {
        copyright: fields.text({ label: "Copyright" }),
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            to: fields.text({ label: "To" }),
          }),
          {
            label: "Links",
            itemLabel: (item) =>
              item.fields.label.value || "Please enter a label",
          },
        ),
      },
    }),
    privacyPolicy: singleton({
      label: "Privacy Policy",
      path: "content/privacy-policy",
      schema: {
        content: fields.markdoc({ label: "Content" }),
      },
    }),
    termsOfUse: singleton({
      label: "Terms of Use",
      path: "content/terms-of-use",
      schema: {
        content: fields.markdoc({ label: "Content" }),
      },
    }),
    additionalNavigation: singleton({
      label: "'Additional' Navigation",
      path: "content/additional-navigation",
      schema: {
        actionable: fields.text({ label: "Actionable" }),
      },
    }),
  },
})
