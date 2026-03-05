export interface EventTypes {
  status: string
  data: EventType[]
}

export interface EventType {
  id: number
  lengthInMinutes: number
  title: string
  slug: string
  hidden: boolean
  isInstantEvent: boolean
  scheduleId: number
}

export const fetchEventTypes = async (): Promise<EventTypes> => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      "cal-api-version": "2024-06-14",
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
    },
  }
  const response = await fetch("https://api.cal.com/v2/event-types", options)
  const eventTypes = await response.json()
  return eventTypes
}
