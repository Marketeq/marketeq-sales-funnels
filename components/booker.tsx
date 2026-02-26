"use client"

import { BookerEmbed } from "@calcom/atoms"

// You might need to define or import BookerProps depending on your setup
type BookerProps = {
  eventTypeSlug: string
  calUsername: string /* other props */
}

export default function Booker(props: BookerProps) {
  return (
    <>
      <BookerEmbed
        // Use the parsed username and event slug from calLink
        eventSlug={props.eventTypeSlug}
        // layout can be of three types: COLUMN_VIEW, MONTH_VIEW or WEEK_VIEW,
        // you can choose whichever you prefer
        view="MONTH_VIEW"
        username={props.calUsername}
      />
    </>
  )
}
