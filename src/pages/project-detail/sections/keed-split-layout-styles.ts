import styled, { css } from "styled-components"
import { motion } from "motion/react"

// ─── Intro section ────────────────────────────────────────────────────────────

export const IntroSection = styled.section`
  padding: 72px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 48px 0;
  }
`

export const IntroLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 28px;
`

export const IntroBody = styled.p`
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

// ─── Product block shared ─────────────────────────────────────────────────────

export const ProductSection = styled.section`
  padding: 80px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 56px 0;
  }
`

export const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
`

export const ProductEyebrow = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const ProductName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(${({ theme }) => theme.text.xxlarge}, 3.5vw, 52px);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.035em;
  line-height: 1.06;
  margin: 0;
`

export const ProductDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin: 0;
  padding-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-top: 0;
  }
`

// ─── Sub-project stack tags ───────────────────────────────────────────────────

export const ProductStackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
`

export const ProductStackTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  color: ${({ theme }) => theme.colors["text-soft"]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 3px 8px;
  letter-spacing: 0.04em;
`

// ─── Mobile gallery (portrait 9:16, row) ─────────────────────────────────────

export const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    max-width: 360px;
    margin: 0 auto;
  }
`

export const MobileItem = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

type MobileImageWrapperProps = {
  $clickable?: boolean
}

export const MobileImageWrapper = styled.div<MobileImageWrapperProps>`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: ${({ theme }) => theme.radius.large};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors["background-soft"]};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  ${({ $clickable, theme }) => {
    if (!$clickable) return
    return css`
      cursor: pointer;

      &:hover {
        border-color: ${theme.colors.accent};
        box-shadow: ${theme.shadow.default};
      }
    `
  }}
`

export const MobileImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const MobilePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors["background-soft"]};
`

export const MobilePlaceholderInitial = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.opacity("ink", 0.07)};
  line-height: 1;
  user-select: none;
`

export const MobilePlaceholderNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 9px;
  color: ${({ theme }) => theme.opacity("text", 0.35)};
  letter-spacing: 0.04em;
`

export const MobileCaption = styled.figcaption`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  line-height: 1.45;
`

