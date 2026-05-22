import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AppThemeProvider } from "@contexts/theme-context"
import { LanguageProvider } from "@contexts/language-context"
import GlobalStyles from "@styles/global-styles"
import ErrorBoundary from "@components/error-boundary"
import ApplicationRoutes from "./routes"

import "@styles/fonts.css"

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <LanguageProvider>
        <GlobalStyles />
        <ErrorBoundary>
          <BrowserRouter>
            <ApplicationRoutes />
          </BrowserRouter>
        </ErrorBoundary>
      </LanguageProvider>
    </AppThemeProvider>
  )
}

export default App
