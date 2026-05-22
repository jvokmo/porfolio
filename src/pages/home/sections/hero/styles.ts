import styled, { css } from "styled-components"
import { motion } from "motion/react"

export const Section = styled.section`
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 100px 0 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-height: unset;
    padding: 80px 0 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 56px 0 64px;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
  }
`

export const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.opacity("accent", 0.06)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.03em;
  width: fit-content;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 28px;
  }
`

export const BadgeDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
  animation: badge-pulse 2.4s ease-in-out infinite;

  @keyframes badge-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const HeadlineWrapper = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(52px, 8vw, 96px);
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin: 0 0 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.16em;
  align-items: baseline;
`

export const NameSpan = styled(motion.span)`
  display: inline-block;
  font-weight: 800;
`

export const RoleLine = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: -0.01em;
  margin: 0 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.regular};
    margin-bottom: 28px;
  }
`

export const Intro = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.65;
  max-width: 540px;
  margin: 0 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.regular};
    margin-bottom: 36px;
  }
`

export const CtaRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 12px;
    margin-bottom: 40px;
  }
`

type CtaButtonProps = { $primary?: boolean }

export const CtaButton = styled.a<CtaButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 600;
  padding: 13px 26px;
  border-radius: ${({ theme }) => theme.radius.default};
  letter-spacing: -0.01em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  white-space: nowrap;

  ${({ $primary, theme }) => {
    if ($primary) {
      return css`
        color: ${theme.colors["background-soft"]};
        background: ${theme.colors.ink};
        border: 1px solid transparent;

        &:hover {
          background: ${theme.colors.accent};
          transform: translateY(-1px);
        }

        @media (prefers-reduced-motion: reduce) {
          &:hover {
            transform: none;
          }
        }
      `
    }
    return css`
      color: ${theme.colors.ink};
      background: transparent;
      border: 1px solid ${theme.colors.border};

      &:hover {
        border-color: ${theme.colors.accent};
        color: ${theme.colors.accent};
        transform: translateY(-1px);
      }

      @media (prefers-reduced-motion: reduce) {
        &:hover {
          transform: none;
        }
      }
    `
  }}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`

export const SocialRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 16px;
  }
`

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.04em;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }

  svg {
    flex-shrink: 0;
  }
`

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: default;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const ScrollLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 32px;
  background: ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: ${({ theme }) => theme.colors.accent};
    animation: scroll-line 1.8s ease-in-out infinite;
  }

  @keyframes scroll-line {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(200%); }
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      opacity: 0.5;
    }
  }
`

export const CanvasBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.7;

  /* Vignette so particles dissolve at edges — keeps text area crisp */
  -webkit-mask-image: radial-gradient(
    ellipse 110% 110% at 50% 50%,
    black 35%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 110% 110% at 50% 50%,
    black 35%,
    transparent 100%
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    opacity: 0.45;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 0.3;
  }
`
