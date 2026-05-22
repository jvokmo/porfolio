import React, { createContext, useContext, useState, useCallback } from "react"

import { translations } from "@i18n/translations"
import type { Language } from "@i18n/types"

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "jv.language"

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem(STORAGE_KEY)
  const language: Language = stored === "pt-BR" || stored === "en" ? stored : "pt-BR"
  document.documentElement.lang = language
  return language
}

const resolvePath = (obj: unknown, path: string): string => {
  const parts = path.split(".")
  let current: unknown = obj
  let i = 0
  while (i < parts.length) {
    if (current === null || current === undefined || typeof current !== "object") {
      return path
    }
    const record = current as Record<string, unknown>
    let matched = false
    for (let end = parts.length; end > i; end--) {
      const key = parts.slice(i, end).join(".")
      if (key in record) {
        current = record[key]
        i = end
        matched = true
        break
      }
    }
    if (!matched) return path
  }
  if (typeof current === "string") return current
  return path
}

type LanguageProviderProps = {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "pt-BR" ? "en" : "pt-BR")
  }, [language, setLanguage])

  const t = useCallback(
    (path: string): string => {
      return resolvePath(translations[language], path)
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider")
  }
  return context
}
