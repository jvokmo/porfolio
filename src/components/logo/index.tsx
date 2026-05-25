import React from "react"

import { useThemeMode } from "@contexts/theme-context"

import LogoDark from "@assets/logo/jayvee-isotype-dark.svg?react"
import LogoLight from "@assets/logo/jayvee-isotype-light.svg?react"

type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const { mode } = useThemeMode()

  const Svg = mode === "dark" ? LogoDark : LogoLight

  return <Svg className={className} aria-hidden="true" />
}

export default Logo
