import styled, { css } from "styled-components"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

// ─── Page shell ──────────────────────────────────────────────────────────────

export const Page = styled.div`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 20px;
  }
`

// ─── Cover section ───────────────────────────────────────────────────────────

export const CoverSection = styled.section`
  padding: 64px 0 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 40px 0 56px;
  }
`

export const CoverMeta = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`

export const CoverYear = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.06em;
`

export const CoverRole = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.04em;
`

export const CoverTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(${({ theme }) => theme.text.xxlarge}, 5vw, 72px);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.04em;
  line-height: 1.04;
  margin: 0 0 20px;
`

export const CoverTagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.large};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  margin: 0 0 28px;
  max-width: 680px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.regular};
  }
`

export const CoverTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
`

export const CoverTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 4px 10px;
  letter-spacing: 0.04em;
`

export const CoverLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
`

type CoverLinkButtonProps = {
  $variant?: "primary" | "ghost"
}

export const CoverLinkButton = styled.a<CoverLinkButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 600;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.default};
  padding: 10px 20px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.ink};
  border: 1px solid ${({ theme }) => theme.colors.ink};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  ${({ $variant, theme }) => {
    if ($variant !== "ghost") return
    return css`
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.border};
      background: transparent;

      &:hover {
        border-color: ${theme.colors.accent};
        color: ${theme.colors.accent};
      }
    `
  }}

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    &:active {
      transform: none;
    }
  }
`

// Cover image

export const CoverImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radius.large};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors["background-soft"]};
`

export const CoverImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
`

export const CoverPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme }) => theme.colors["background-soft"]};
`

export const PlaceholderInitial = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(64px, 8vw, 120px);
  font-weight: 800;
  color: ${({ theme }) => theme.opacity("ink", 0.07)};
  line-height: 1;
  letter-spacing: -0.04em;
  user-select: none;
`

export const PlaceholderNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.opacity("text", 0.35)};
  letter-spacing: 0.06em;
`

// ─── Generic content section ──────────────────────────────────────────────────

export const ContentSection = styled.section`
  padding: 72px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 48px 0;
  }
`

export const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 28px;
`

export const SectionBody = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.large};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin: 0;
  max-width: 800px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.regular};
  }
`

// ─── Overview section ─────────────────────────────────────────────────────────

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 64px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const MetaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.default};
  background: ${({ theme }) => theme.colors["background-soft"]};
`

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const MetaLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const MetaValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.small};
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.4;
`

export const StackChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const StackChip = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  color: ${({ theme }) => theme.colors["text-soft"]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 3px 8px;
  letter-spacing: 0.04em;
`

// ─── Process section ─────────────────────────────────────────────────────────

export const ProcessList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 800px;
`

export const ProcessItem = styled(motion.li)`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 24px;
  align-items: start;
  padding: 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 40px 1fr;
    gap: 16px;
    padding: 24px 0;
  }
`

export const ProcessNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.06em;
  padding-top: 4px;
`

export const ProcessText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.65;
  margin: 0;
`

// ─── Pager section ───────────────────────────────────────────────────────────

export const PagerSection = styled.nav`
  padding: 64px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 48px 0;
  }
`

export const PagerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`

export const PagerBackLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: center;
    order: -1;
  }
`

export const PagerNeighbors = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-content: space-between;
  }
`

export const PagerLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.default};
  min-width: 180px;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.opacity("accent", 0.04)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-width: 0;
    flex: 1;
  }
`

type PagerLinkDirectionProps = {
  $align?: "left" | "right"
}

export const PagerLinkDirection = styled.span<PagerLinkDirectionProps>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: left;

  ${({ $align }) => {
    if ($align !== "right") return
    return css`
      text-align: right;
    `
  }}
`

export const PagerLinkTitle = styled.span<PagerLinkDirectionProps>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.3;
  text-align: left;

  ${({ $align }) => {
    if ($align !== "right") return
    return css`
      text-align: right;
    `
  }}

  ${PagerLink}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`
