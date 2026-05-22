import styled, { css } from "styled-components"
import { motion } from "motion/react"

// ─── Root ─────────────────────────────────────────────────────────────────────

type OrientationProps = {
  $orientation: "landscape" | "portrait"
}

export const Root = styled.div<OrientationProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0;

  ${({ $orientation }) => {
    if ($orientation !== "portrait") return
    return css`
      max-width: 340px;
      margin: 0 auto;
    `
  }}
`

// ─── Stage: the slide frame + prev/next buttons row ──────────────────────────

export const Stage = styled.div<OrientationProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0;

  ${({ $orientation }) => {
    if ($orientation !== "portrait") return
    return css`
      justify-content: center;
    `
  }}
`

// ─── Slide frame ─────────────────────────────────────────────────────────────

export const SlideFrame = styled.div<OrientationProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors["background-soft"]};
  flex: 1;

  ${({ $orientation }) => {
    if ($orientation === "portrait") {
      return css`
        flex: none;
        width: 240px;
        aspect-ratio: 9 / 16;
        max-height: 70vh;

        @media (max-width: ${({ theme }: { theme: import("styled-components").DefaultTheme }) => theme.breakpoints.mobile}px) {
          width: 180px;
        }
      `
    }
    return css`
      aspect-ratio: 16 / 9;
      width: 100%;
    `
  }}
`

// ─── Slides clip area (clips overflow during transition) ─────────────────────

export const SlidesClip = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

// ─── Single slide ─────────────────────────────────────────────────────────────

type SlideProps = {
  $clickable?: boolean
}

export const Slide = styled(motion.div)<SlideProps>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $clickable }) => {
    if (!$clickable) return
    return css`
      cursor: pointer;

      &:hover img {
        opacity: 0.9;
      }
    `
  }}
`

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`

// ─── Placeholder ─────────────────────────────────────────────────────────────

export const SlidePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors["background-soft"]};
`

export const PlaceholderInitial = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.opacity("ink", 0.07)};
  line-height: 1;
  user-select: none;
`

export const PlaceholderNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 8px;
  color: ${({ theme }) => theme.opacity("text", 0.35)};
  letter-spacing: 0.04em;
`

// ─── Navigation buttons ───────────────────────────────────────────────────────

type NavButtonProps = {
  $orientation: "landscape" | "portrait"
}

export const NavButton = styled.button<NavButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors["background-soft"]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 16px;
  color: ${({ theme }) => theme.colors["text-soft"]};
  transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
  z-index: 1;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.opacity("accent", 0.06)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  ${({ $orientation }) => {
    if ($orientation === "portrait") {
      return css`
        position: static;
        margin: 0 8px;
      `
    }
    return css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &[data-dir="prev"] {
        left: -52px;
      }

      &[data-dir="next"] {
        right: -52px;
      }

      @media (max-width: ${({ theme }: { theme: import("styled-components").DefaultTheme }) => theme.breakpoints.tablet}px) {
        position: static;
        transform: none;
        margin: 0;
      }
    `
  }}
`

// ─── Landscape outer wrapper to accommodate outside buttons ──────────────────

export const LandscapeOuter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet + 1}px) {
    padding: 0 52px;
  }
`

// ─── Footer: caption + indicator ─────────────────────────────────────────────

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 10px 2px 0;
  min-height: 28px;
`

export const Caption = styled.figcaption`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  line-height: 1.45;
  flex: 1;
`

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`

export const Counter = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.04em;
  white-space: nowrap;
`

export const Dots = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

type DotProps = {
  $active: boolean
}

export const Dot = styled.button<DotProps>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.opacity("ink", 0.15)};
  transform: ${({ $active }) => ($active ? "scale(1.3)" : "scale(1)")};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`
