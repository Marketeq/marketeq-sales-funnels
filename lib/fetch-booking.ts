interface Booking {
  status: string
  data: {
    id: number
    uid: string
    title: string
    description: string
    hosts: Array<{
      id: number
      name: string
      email: string
      displayEmail: string
      username: string
      timeZone: string
    }>
    status: string
    start: string
    end: string
    duration: number
    eventTypeId: number
    eventType: {
      id: number
      slug: string
    }
    location: string
    absentHost: boolean
    createdAt: string
    updatedAt: string
    attendees: Array<{
      name: string
      email: string
      displayEmail: string
      timeZone: string
      absent: boolean
      language: string
      phoneNumber: string
    }>
    bookingFieldsResponses: Record<string, string>
    cancellationReason: string
    cancelledByEmail: string
    reschedulingReason: string
    rescheduledByEmail: string
    rescheduledFromUid: string
    rescheduledToUid: string
    meetingUrl: string
    metadata: Record<string, string>
    rating: number
    icsUid: string
    guests: string[]
  }
  error: Record<string, unknown>
}

export const fetchBooking = async (
  uid: string | string[] | undefined,
): Promise<Booking> => {
  const options = {
    method: "GET",
    headers: {
      "cal-api-version": "2024-08-13",
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
    },
  }

  const response = await fetch(
    `https://api.cal.com/v2/bookings/${uid}`,
    options,
  )
  const booking = response.json()
  return booking
}
