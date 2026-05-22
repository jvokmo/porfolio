import styled from "styled-components"
import { motion } from "motion/react"

export const Page = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 60px 24px;
  }
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  max-width: 560px;
  width: 100%;
`

export const Code = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(80px, 16vw, 160px);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.border};
  line-height: 1;
  letter-spacing: -0.06em;
  margin: 0;
  user-select: none;
`

export const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.text.xxlarge};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.xlarge};
  }
`

export const Body = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.regular};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin: 0;
`

export const Cta = styled(motion.div)`
  margin-top: 8px;
`

export const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.regular};
  font-weight: 600;
  color: ${({ theme }) => theme.colors["background-soft"]};
  background: ${({ theme }) => theme.colors.ink};
  padding: 14px 28px;
  border-radius: ${({ theme }) => theme.radius.default};
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`
