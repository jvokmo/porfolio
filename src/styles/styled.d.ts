import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark"
    colors: {
      background: string
      "background-soft": string
      ink: string
      text: string
      "text-soft": string
      accent: string
      "accent-strong": string
      border: string
      card: string
      "ink-rgb": string
      "accent-rgb": string
      danger: string
      "danger-rgb": string
    }
    fonts: { display: string; body: string; mono: string }
    text: {
      display: string
      xxlarge: string
      xlarge: string
      large: string
      regular: string
      small: string
      xsmall: string
    }
    shadow: { small: string; default: string; large: string }
    breakpoints: { mobile: number; tablet: number; desktop: number }
    radius: { small: string; default: string; large: string }
    opacity: (color: string, opacity: number) => string
  }
}
