import { EyeOff } from "@blend-metrics/icons"
import { cookies, draftMode } from "next/headers"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

export async function DisableDraftModeTrigger() {
  const { isEnabled } = await draftMode()
  const cookiesStore = await cookies()
  const cookie = cookiesStore.get("ks-branch")?.value

  return (
    <>
      {isEnabled && (
        <form
          className="fixed right-10 bottom-10 z-50"
          method="POST"
          action="/preview/end"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-700 bg-black text-gray-300 hover:text-white focus-visible:outline-none">
                <EyeOff className="size-6 shrink-0" />
              </TooltipTrigger>
              <TooltipContent>
                {cookie
                  ? `Disable the branch preview of '${cookie}'`
                  : "Disable draft mode"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </form>
      )}
    </>
  )
}
