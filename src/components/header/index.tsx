import React, { useEffect, useState, useCallback, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { useTheme } from "styled-components"

import { useLanguage } from "@contexts/language-context"
import usePrefersReducedMotion from "@utils/hooks/use-prefers-reduced-motion"
import ThemeToggle from "@components/theme-toggle"
import LanguageToggle from "@components/language-toggle"
import type { NavItem } from "./types"
import * as S from "./styles"

const NAV_ITEMS: NavItem[] = [
  { hash: "projetos", labelKey: "nav.projects" },
  { hash: "sobre", labelKey: "nav.about" },
  { hash: "contato", labelKey: "nav.contact" },
]

const scrollToHash = (hash: string, reducedMotion: boolean) => {
  const el = document.getElementById(hash)
  if (!el) return
  el.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" })
}

const HamburgerIcon: React.FC<{ opened: boolean }> = ({ opened }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {opened ? (
      <>
        <line
          x1="3"
          y1="3"
          x2="13"
          y2="13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="3"
          x2="3"
          y2="13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <line
          x1="2"
          y1="5"
          x2="14"
          y2="5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="8"
          x2="14"
          y2="8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="11"
          x2="14"
          y2="11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    )}
  </svg>
)

type MobileMenuProps = {
  items: NavItem[]
  reducedMotion: boolean
  t: (k: string) => string
  onClose: () => void
  onNavClick: (hash: string) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, reducedMotion, t, onClose, onNavClick }) => (
  <motion.div
    key="mobile-panel"
    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
    transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeInOut" }}
    style={{ overflow: "hidden" }}
  >
    <S.MobilePanel>
      <S.MobileNav aria-label={t("a11y.primaryNav")}>
        {items.map((item) => (
          <S.MobileNavButton
            key={item.hash}
            onClick={() => {
              onClose()
              onNavClick(item.hash)
            }}
          >
            {t(item.labelKey)}
          </S.MobileNavButton>
        ))}
      </S.MobileNav>
    </S.MobilePanel>
  </motion.div>
)

const Header: React.FC = () => {
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const reducedMotion = usePrefersReducedMotion()
  const theme = useTheme()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pendingHashRef = useRef<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle initial-load hash (e.g. page loaded at /#projetos)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const tryScroll = () => {
        const el = document.getElementById(hash)
        if (el) {
          scrollToHash(hash, reducedMotion)
        } else {
          // Element may not be rendered yet — retry once after a short paint
          requestAnimationFrame(() => {
            scrollToHash(hash, reducedMotion)
          })
        }
      }
      tryScroll()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // After navigation to "/", scroll to pending hash
  useEffect(() => {
    if (location.pathname === "/" && pendingHashRef.current) {
      const hash = pendingHashRef.current
      pendingHashRef.current = null
      // Let the page paint before scrolling
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToHash(hash, reducedMotion)
        })
      })
    }
  }, [location.pathname, reducedMotion])

  const handleNavClick = useCallback(
    (hash: string) => {
      if (location.pathname === "/") {
        scrollToHash(hash, reducedMotion)
        window.history.replaceState(null, "", `/#${hash}`)
      } else {
        pendingHashRef.current = hash
        navigate(`/#${hash}`)
      }
    },
    [location.pathname, navigate, reducedMotion]
  )

  const handleWordmarkClick = useCallback(() => {
    const sameRoute = location.pathname === "/"
    window.scrollTo({
      top: 0,
      behavior: sameRoute && !reducedMotion ? "smooth" : "instant",
    })
  }, [location.pathname, reducedMotion])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((v) => !v)
  }, [])

  // Active state: home route with the matching hash
  const activeHash = location.pathname === "/" ? window.location.hash.replace("#", "") : null

  return (
    <S.Wrapper $scrolled={scrolled}>
      <S.Inner>
        <S.Wordmark to="/" onClick={handleWordmarkClick}>
          JV
        </S.Wordmark>

        <S.Nav aria-label={t("a11y.primaryNav")}>
          {NAV_ITEMS.map((item) => (
            <S.NavItemWrapper key={item.hash}>
              <S.NavButton
                $active={activeHash === item.hash}
                onClick={() => handleNavClick(item.hash)}
              >
                {t(item.labelKey)}
              </S.NavButton>

              {activeHash === item.hash && (
                <motion.span
                  layoutId="nav-underline"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 12,
                    right: 12,
                    height: 2,
                    borderRadius: 1,
                    backgroundColor: theme.colors.accent,
                  }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 400, damping: 40 }
                  }
                />
              )}
            </S.NavItemWrapper>
          ))}
        </S.Nav>

        <S.Controls>
          <ThemeToggle />
          <LanguageToggle />
          <S.MenuButton
            onClick={toggleMenu}
            aria-label={t("a11y.menu")}
            aria-expanded={menuOpen}
          >
            <HamburgerIcon opened={menuOpen} />
          </S.MenuButton>
        </S.Controls>
      </S.Inner>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            items={NAV_ITEMS}
            reducedMotion={reducedMotion}
            t={t}
            onClose={closeMenu}
            onNavClick={handleNavClick}
          />
        )}
      </AnimatePresence>
    </S.Wrapper>
  )
}

export default Header
