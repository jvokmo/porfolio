import React, { lazy, Suspense } from "react"
import { Routes, Route, useLocation, Outlet } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import styled, { keyframes } from "styled-components"

import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"
import Header from "@components/header"
import Footer from "@components/footer"

const Home = lazy(() => import("@pages/home"))
const NotFound = lazy(() => import("@pages/not-found"))
const ProjectDetail = lazy(() => import("@pages/project-detail"))

const LayoutMain = styled.main`
  padding-top: 64px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-top: 56px;
  }
`

const pulseAnim = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
`

const FallbackDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulseAnim} 1.2s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.4;
  }
`

const FallbackWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PageFallback: React.FC = () => (
  <FallbackWrapper>
    <FallbackDot />
  </FallbackWrapper>
)

const Layout: React.FC = () => (
  <>
    <Header />
    <LayoutMain>
      <Outlet />
    </LayoutMain>
    <Footer />
  </>
)

type PageTransitionProps = {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  )
}

const ApplicationRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<PageFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="projetos/:slug"
              element={
                <PageTransition>
                  <ProjectDetail />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default ApplicationRoutes
