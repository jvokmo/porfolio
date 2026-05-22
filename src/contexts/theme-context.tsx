import React, { createContext, useContext, useState, useCallback } from "react"
import { ThemeProvider } from "styled-components"

import { lightTheme, darkTheme } from "@styles/themes"

type ThemeMode = "light" | "dark"

type ThemeModeContextValue = {
  mode: ThemeMode
  toggleMode: () => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined)

const STORAGE_KEY = "jv.theme"

const getInitialMode = (): ThemeMode => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored
  // Dark is the default theme when the visitor has no saved preference
  return "dark"
}

type AppThemeProviderProps = {
  children: React.ReactNode
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode)

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light"
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const theme = mode === "dark" ? darkTheme : lightTheme

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = (): ThemeModeContextValue => {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error("useThemeMode must be used inside an AppThemeProvider")
  }
  return context
}
