import * as fs from "node:fs"
import KeystaticApp from "./keystatic"
import path from "node:path"
import { fetchEventTypes } from "@/lib/fetch-event-types"
import { fileURLToPath } from "node:url"

export default async function Layout() {
  const eventTypes = await fetchEventTypes()

  if (process.env.NODE_ENV === "development") {
    const filename = fileURLToPath(import.meta.url)

    const destinationDirname = path.join(
      path.dirname(filename),
      ".../../assets",
    )
    const destinationPath = path.join(destinationDirname, "event-types.json")

    await fs.promises.mkdir(destinationDirname, { recursive: true })
    await fs.promises.writeFile(
      destinationPath,
      JSON.stringify(eventTypes, null, 2),
      "utf-8",
    )
  }

  return <KeystaticApp />
}
