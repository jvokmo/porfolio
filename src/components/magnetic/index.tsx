import React, { useRef, useCallback } from "react"
import { motion, useSpring } from "motion/react"

import type { MagneticProps } from "./types"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"

const isTouchDevice = (): boolean =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches

const SPRING_CONFIG = { stiffness: 180, damping: 18, mass: 0.6 }

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.25 }) => {
  const reducedMotion = usePrefersReducedMotion()
  const x = useSpring(0, SPRING_CONFIG)
  const y = useSpring(0, SPRING_CONFIG)

  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      x.set((e.clientX - cx) * strength)
      y.set((e.clientY - cy) * strength)
    },
    [x, y, strength]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  if (reducedMotion || isTouchDevice()) {
    return <>{children}</>
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
