import type { DefaultTheme } from "styled-components"

const sharedFonts = {
  display: "'Bricolage Grotesque', sans-serif",
  body: "'Hanken Grotesk', sans-serif",
  mono: "'JetBrains Mono', monospace",
}

const sharedText = {
  display: "64px",
  xxlarge: "40px",
  xlarge: "28px",
  large: "22px",
  regular: "16px",
  small: "14px",
  xsmall: "12px",
}

const sharedRadius = {
  small: "6px",
  default: "10px",
  large: "18px",
}

const sharedBreakpoints = {
  mobile: 620,
  tablet: 992,
  desktop: 1440,
}

const hexToRgba = (hex: string, opacity: number): string => {
  let c = hex.startsWith("#") ? hex.slice(1) : hex
  if (c.length === 3)
    c = c
      .split("")
      .map((char) => char + char)
      .join("")
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

const lightColors: DefaultTheme["colors"] = {
  background: "#F4F2ED",
  "background-soft": "#FBFAF7",
  ink: "#16140F",
  text: "#6B6457",
  "text-soft": "#9A9488",
  accent: "#9A6B3D",
  "accent-strong": "#80572F",
  border: "#E0DCD2",
  card: "#FFFFFF",
  "ink-rgb": "22,20,15",
  "accent-rgb": "154,107,61",
  danger: "#CB2A2F",
  "danger-rgb": "203,42,47",
}

const darkColors: DefaultTheme["colors"] = {
  background: "#14130F",
  "background-soft": "#1C1B16",
  ink: "#F4F2ED",
  text: "#A8A296",
  "text-soft": "#6F6A60",
  accent: "#C99060",
  "accent-strong": "#E0A877",
  border: "#2E2C25",
  card: "#1C1B16",
  "ink-rgb": "244,242,237",
  "accent-rgb": "201,144,96",
  danger: "#FF6B6F",
  "danger-rgb": "255,107,111",
}

export const lightTheme: DefaultTheme = {
  mode: "light",
  colors: lightColors,
  fonts: sharedFonts,
  text: sharedText,
  shadow: {
    small: "0px 2px 8px rgba(0,0,0,0.06)",
    default: "0px 4px 16px rgba(0,0,0,0.10)",
    large: "0 12px 40px rgba(0,0,0,0.14)",
  },
  breakpoints: sharedBreakpoints,
  radius: sharedRadius,
  opacity: (color, opacity) => {
    const selectedColor = lightColors[color as keyof typeof lightColors] as string
    if (!selectedColor) return `rgba(0,0,0,${opacity})`
    if (selectedColor.includes("rgba")) return selectedColor
    return hexToRgba(selectedColor, opacity)
  },
}

export const darkTheme: DefaultTheme = {
  mode: "dark",
  colors: darkColors,
  fonts: sharedFonts,
  text: sharedText,
  shadow: {
    small: "0px 2px 8px rgba(0,0,0,0.20)",
    default: "0px 4px 16px rgba(0,0,0,0.32)",
    large: "0 12px 40px rgba(0,0,0,0.48)",
  },
  breakpoints: sharedBreakpoints,
  radius: sharedRadius,
  opacity: (color, opacity) => {
    const selectedColor = darkColors[color as keyof typeof darkColors] as string
    if (!selectedColor) return `rgba(0,0,0,${opacity})`
    if (selectedColor.includes("rgba")) return selectedColor
    return hexToRgba(selectedColor, opacity)
  },
}
