import React from "react"
import { motion } from "motion/react"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"

import type { RevealProps } from "./types"

// Pre-created at module scope so the `as` prop can pick a real motion element
const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  ul: motion.ul,
  li: motion.li,
} as const

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 24, as = "div" }) => {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    const Tag = as
    return <Tag>{children}</Tag>
  }

  const MotionTag = motionTags[as]

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
