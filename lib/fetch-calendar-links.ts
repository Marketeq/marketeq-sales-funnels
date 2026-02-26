interface CalendarLinks {
  status: string
  data: Array<{
    label: string
    link: string
    id: string
  }>
}

export const fetchCalendarLinks = async (
  uid: string | string[] | undefined,
): Promise<CalendarLinks> => {
  const options = {
    method: "GET",
    headers: {
      "cal-api-version": "2024-08-13",
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
    },
  }

  const response = await fetch(
    `https://api.cal.com/v2/bookings/${uid}/calendar-links`,
    options,
  )
  const links = response.json()
  return links
}
