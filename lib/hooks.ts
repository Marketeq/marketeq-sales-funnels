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
