import type React from "react"

export type RevealTag = "div" | "section" | "article" | "span" | "ul" | "li"

export type RevealProps = {
  children: React.ReactNode
  delay?: number
  y?: number
  as?: RevealTag
}
