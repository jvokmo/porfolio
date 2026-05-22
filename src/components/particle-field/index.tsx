import React, { useRef, useEffect, useCallback } from "react"
import { useTheme } from "styled-components"
import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"
import type { ParticleFieldProps } from "./types"

// ------------------------------------------------------------
// Constants
// ------------------------------------------------------------

const MAX_DPR = 1.5
const BASE_COUNT = 90
const NOISE_SCALE = 0.003
const NOISE_TIME_SCALE = 0.00012
const SPEED_BASE = 0.38
const ACCENT_RATIO = 0.2 // fraction of particles using accent tint

// ------------------------------------------------------------
// Cheap smooth 2-D value noise (no dependency)
// ------------------------------------------------------------

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function lerp(a: number, b: number, t: number): number {
  return a + t * (b - a)
}

// Deterministic hash → [0, 1)
function hash2(ix: number, iy: number): number {
  let h = (ix * 1619 + iy * 31337) ^ (ix * iy)
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b)
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b)
  h ^= h >>> 16
  return (h >>> 0) / 0x100000000
}

// Value noise — returns [-1, 1]
function valueNoise(x: number, y: number): number {
  const ix = Math.floor(x)
  const iy = Math.floor(y)
  const fx = x - ix
  const fy = y - iy
  const ux = fade(fx)
  const uy = fade(fy)
  return lerp(
    lerp(hash2(ix, iy), hash2(ix + 1, iy), ux),
    lerp(hash2(ix, iy + 1), hash2(ix + 1, iy + 1), ux),
    uy,
  ) * 2 - 1
}

// Flow-field angle at (x, y, t): two noise samples, offset in space
function flowAngle(x: number, y: number, t: number): number {
  const nx = valueNoise(x + t, y)
  const ny = valueNoise(x, y + t + 5.3)
  return Math.atan2(ny, nx) * Math.PI * 2
}

// ------------------------------------------------------------
// Particle type
// ------------------------------------------------------------

type Particle = {
  x: number
  y: number
  size: number
  useAccent: boolean
}

function initParticle(w: number, h: number, useAccent: boolean): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: 0.6 + Math.random() * 1.1,
    useAccent,
  }
}

// ------------------------------------------------------------
// Parse hex to r,g,b integers
// ------------------------------------------------------------

function hexToRgb(hex: string): [number, number, number] {
  const c = hex.startsWith("#") ? hex.slice(1) : hex
  const full = c.length === 3 ? c.split("").map((ch) => ch + ch).join("") : c
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ]
}

// ------------------------------------------------------------
// Component
// ------------------------------------------------------------

const ParticleField: React.FC<ParticleFieldProps> = ({
  density = 1,
  speed = 1,
  className,
  style,
}) => {
  const theme = useTheme()
  const reducedMotion = usePrefersReducedMotion()

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const isVisibleRef = useRef<boolean>(true)
  const mountedRef = useRef<boolean>(true)

  const speedRef = useRef(speed)
  const densityRef = useRef(density)
  const inkRef = useRef<[number, number, number]>(hexToRgb(theme.colors.ink))
  const accentRef = useRef<[number, number, number]>(hexToRgb(theme.colors.accent))
  // Pointer influence (canvas-space coordinates, null when outside)
  const pointerRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    speedRef.current = speed
    densityRef.current = density
  }, [speed, density])

  useEffect(() => {
    inkRef.current = hexToRgb(theme.colors.ink)
    accentRef.current = hexToRgb(theme.colors.accent)
  }, [theme.colors.ink, theme.colors.accent])

  const init = useCallback((): (() => void) | undefined => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext("2d")
    if (!ctx) return undefined

    let particles: Particle[] = []
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)

      const area = w * h
      const count = Math.round(
        Math.max(30, Math.min(BASE_COUNT, (area / (1920 * 1080)) * BASE_COUNT * densityRef.current))
      )
      particles = Array.from({ length: count }, (_, i) =>
        initParticle(w, h, i / count < ACCENT_RATIO)
      )
    }

    resize()
    const resizeObs = new ResizeObserver(resize)
    resizeObs.observe(canvas)

    const t0 = performance.now()

    const drawFrame = (elapsed: number) => {
      ctx.clearRect(0, 0, w, h)

      const [ir, ig, ib] = inkRef.current
      const [ar, ag, ab] = accentRef.current
      const speedMul = speedRef.current * SPEED_BASE

      for (const p of particles) {
        // Flow-field drift
        const nx = p.x * NOISE_SCALE
        const ny = p.y * NOISE_SCALE
        const nt = elapsed * NOISE_TIME_SCALE
        const angle = flowAngle(nx, ny, nt)
        let vx = Math.cos(angle) * speedMul
        let vy = Math.sin(angle) * speedMul

        // Gentle pointer influence — only within ~120px
        const ptr = pointerRef.current
        if (ptr !== null) {
          const dx = p.x - ptr.x
          const dy = p.y - ptr.y
          const dist2 = dx * dx + dy * dy
          const radius = 120
          if (dist2 < radius * radius && dist2 > 0.001) {
            const dist = Math.sqrt(dist2)
            const influence = (1 - dist / radius) * 0.28
            vx += (dx / dist) * influence
            vy += (dy / dist) * influence
          }
        }

        p.x += vx
        p.y += vy

        // Wrap edges
        if (p.x < -2) p.x = w + 2
        else if (p.x > w + 2) p.x = -2
        if (p.y < -2) p.y = h + 2
        else if (p.y > h + 2) p.y = -2

        // Draw
        const [r, g, b] = p.useAccent ? [ar, ag, ab] : [ir, ig, ib]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},0.18)`
        ctx.fill()
      }
    }

    if (reducedMotion) {
      drawFrame(0)
    } else {
      const loop = () => {
        if (!mountedRef.current) return
        if (isVisibleRef.current) {
          drawFrame(performance.now() - t0)
        }
        rafRef.current = requestAnimationFrame(loop)
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    return () => {
      resizeObs.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [reducedMotion])

  // Main lifecycle
  useEffect(() => {
    mountedRef.current = true
    const cleanup = init()
    return () => {
      mountedRef.current = false
      cleanup?.()
    }
  }, [init])

  // IntersectionObserver — pause RAF when offscreen
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(canvas)
    return () => observer.disconnect()
  }, [reducedMotion])

  // Pointer tracking — canvas-space coords
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return undefined

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { pointerRef.current = null }

    // Listen on the parent section rather than the canvas (canvas is pointer-events: none)
    const parent = canvas.parentElement?.parentElement ?? document
    parent.addEventListener("pointermove", onMove as EventListener)
    parent.addEventListener("pointerleave", onLeave)
    return () => {
      parent.removeEventListener("pointermove", onMove as EventListener)
      parent.removeEventListener("pointerleave", onLeave)
    }
  }, [reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block", ...style }}
    />
  )
}

export default ParticleField
