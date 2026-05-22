import React from "react"
import { AnimatePresence, motion } from "motion/react"

import * as S from "./styles"
import { useThemeMode } from "@contexts/theme-context"
import { useLanguage } from "@contexts/language-context"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"

import SunIcon from "@assets/icons/general/sun-icon.svg?react"
import MoonIcon from "@assets/icons/general/moon-icon.svg?react"

const ThemeToggle: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion()
  const { mode, toggleMode } = useThemeMode()
  const { t } = useLanguage()

  const isDark = mode === "dark"

  return (
    <S.Button onClick={toggleMode} aria-label={t("a11y.themeToggle")}>
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={reducedMotion ? false : { opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 30, scale: 0.8 }}
            transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <MoonIcon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={reducedMotion ? false : { opacity: 0, rotate: 30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -30, scale: 0.8 }}
            transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <SunIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </S.Button>
  )
}

export default ThemeToggle
