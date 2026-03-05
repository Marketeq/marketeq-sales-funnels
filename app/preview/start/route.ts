import { redirect } from "next/navigation"
import { draftMode, cookies } from "next/headers"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const params = url.searchParams
  const branch = params.get("branch")
  const to = params.get("to")
  if (!to) {
    return new Response("Missing the 'to' param", { status: 400 })
  }
  const draft = await draftMode()
  draft.enable()
  const cookiesStore = await cookies()
  if (branch) {
    cookiesStore.set("ks-branch", branch)
  }
  const toUrl = new URL(to, url.origin)
  toUrl.protocol = url.protocol
  toUrl.host = url.host
  redirect(toUrl.toString())
}
