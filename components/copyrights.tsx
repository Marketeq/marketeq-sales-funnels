"use client"

export const Copyrights = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      © 2011 - {new Date().getFullYear()} {children}
    </>
  )
}
