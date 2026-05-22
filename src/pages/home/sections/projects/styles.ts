import styled, { css } from "styled-components"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

// ─── Section wrapper ─────────────────────────────────────────────────────────

export const Section = styled.section`
  padding: 120px 0 160px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 88px 0 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 64px 0 88px;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 0 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
  }
`

export const Heading = styled.div`
  margin-bottom: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 56px;
  }
`

// ─── Gallery list ─────────────────────────────────────────────────────────────

export const Gallery = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`

// ─── Block — one per project ──────────────────────────────────────────────────

export const Block = styled(motion.li)`
  padding: 72px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 56px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 40px 0;
  }
`

// ─── Inner grid ───────────────────────────────────────────────────────────────

interface GridProps {
  $reversed: boolean
}

export const BlockGrid = styled.div<GridProps>`
  display: grid;
  gap: 64px;
  align-items: center;

  grid-template-columns: 1.45fr 1fr;
  grid-template-areas: "cover info";

  ${({ $reversed }) => {
    if (!$reversed) return
    return css`
      grid-template-columns: 1fr 1.45fr;
      grid-template-areas: "info cover";
    `
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "cover"
      "info";
    gap: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 28px;
  }
`

// ─── Cover area ───────────────────────────────────────────────────────────────

export const CoverLink = styled(Link)`
  display: block;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.large};
`

export const CoverWrap = styled(motion.div)`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radius.large};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors["background-soft"]};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.opacity("ink", 0.03)};
    transition: background 0.4s ease;
    pointer-events: none;
    border-radius: inherit;
  }

  &:hover::after {
    background: ${({ theme }) => theme.opacity("ink", 0)};
  }
`

export const CoverImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${CoverWrap}:hover & {
    transform: scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${CoverWrap}:hover & {
      transform: none;
    }
  }
`

// ─── Placeholder (beautiful, not broken) ─────────────────────────────────────

export const CoverPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: ${({ theme }) => theme.colors["background-soft"]};
  overflow: hidden;

  /* Gradient mesh using theme colors */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 70% 60% at 20% 30%,
        ${({ theme }) => theme.opacity("accent", 0.1)} 0%,
        transparent 70%
      ),
      radial-gradient(
        ellipse 60% 70% at 80% 70%,
        ${({ theme }) => theme.opacity("ink", 0.05)} 0%,
        transparent 70%
      );
    pointer-events: none;
  }

  /* Subtle dot grid texture */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      circle,
      ${({ theme }) => theme.opacity("accent", 0.12)} 1px,
      transparent 1px
    );
    background-size: 28px 28px;
    pointer-events: none;
  }
`

export const PlaceholderInitial = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(80px, 14vw, 140px);
  font-weight: 800;
  color: ${({ theme }) => theme.opacity("ink", 0.07)};
  line-height: 1;
  letter-spacing: -0.06em;
  position: relative;
  z-index: 1;
  user-select: none;
  transition: color 0.4s ease;

  ${CoverWrap}:hover & {
    color: ${({ theme }) => theme.opacity("accent", 0.14)};
  }
`

export const PlaceholderNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.opacity("text", 0.45)};
  letter-spacing: 0.06em;
  position: relative;
  z-index: 1;
  user-select: none;
`

// ─── Info panel ───────────────────────────────────────────────────────────────

export const InfoPanel = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ProjectNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: block;
  transition: letter-spacing 0.3s ease;
`

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0;
  transition: color 0.25s ease;
`

export const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin: 0;
  max-width: 480px;
`

// ─── Meta (duration · year) ───────────────────────────────────────────────────

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const MetaSep = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors.border};
`

export const MetaValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.04em;
`

// ─── Tag chips ────────────────────────────────────────────────────────────────

export const TagChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const TagChip = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors["text-soft"]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 4px 10px;
  letter-spacing: 0.05em;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.opacity("accent", 0.35)};
    background: ${({ theme }) => theme.opacity("accent", 0.05)};
  }
`

// ─── CTA ─────────────────────────────────────────────────────────────────────

export const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`

export const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.opacity("accent", 0.35)};
  border-radius: ${({ theme }) => theme.radius.default};
  background: ${({ theme }) => theme.opacity("accent", 0.04)};

  &:hover {
    color: ${({ theme }) => theme.colors["accent-strong"]};
    border-color: ${({ theme }) => theme.opacity("accent", 0.6)};
    background: ${({ theme }) => theme.opacity("accent", 0.09)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`

export const Arrow = styled(motion.span)`
  font-size: 16px;
  display: inline-block;
  line-height: 1;
`
