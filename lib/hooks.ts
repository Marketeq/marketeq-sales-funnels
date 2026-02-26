import * as React from "react"

export const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect

export const useWindowScroll = () => {
  const [dimensions, setDimensions] = React.useState({ x: 0, y: 0 })

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      setDimensions({
        x: window.scrollX,
        y: window.scrollY,
      })
    }
    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return dimensions
}

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  return isMounted
}

export const useForceUpdate = () => {
  const [, setState] = React.useState(0)

  return React.useCallback(() => setState((prev) => prev + 1), [])
}

export const useCallbackRef = <TFn extends (...args: any[]) => any>(
  fn?: TFn,
) => {
  const ref = React.useRef(fn)

  React.useEffect(() => {
    ref.current = fn
  })

  return React.useMemo(
    () =>
      (...args: Parameters<TFn>): ReturnType<TFn> =>
        ref.current?.(...args),
    [],
  )
}

export const useAsync = <TValue extends Promise<any>, TError = Error>(
  fn: () => TValue,
) => {
  const [state, setState] = React.useState<
    | {
        status: "ideal" | "pending"
        data: undefined
        error: undefined
      }
    | {
        status: "success"
        data: Awaited<TValue>
        error: undefined
      }
    | {
        status: "error"
        data: undefined
        error: TError
      }
  >({
    status: "ideal",
    data: undefined,
    error: undefined,
  })
  const func = useCallbackRef(fn)

  React.useEffect(() => {
    const executable = async () => {
      setState({ status: "pending", data: undefined, error: undefined })

      try {
        const data = await func()
        setState({ status: "success", data, error: undefined })
      } catch (error) {
        setState({ status: "error", data: undefined, error: error as TError })
      }
    }

    executable()
  }, [func])

  return state
}
