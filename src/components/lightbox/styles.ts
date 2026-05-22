import styled, { css } from "styled-components"
import { motion } from "motion/react"

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.opacity("ink", 0.88)};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
`

export const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 92vw;
  max-height: 88vh;
`

export const Image = styled.img`
  display: block;
  max-width: 92vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radius.large};
  box-shadow: ${({ theme }) => theme.shadow.large};
`

export const Caption = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.opacity("ink", 0.55)};
  margin: 12px 0 0;
  text-align: center;
  max-width: 560px;
  line-height: 1.5;
  letter-spacing: 0.03em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 10px;
    max-width: 280px;
  }
`

type ControlButtonProps = {
  $placement: "close" | "prev" | "next"
}

const placementStyles = ({ $placement }: ControlButtonProps) => {
  if ($placement === "close") {
    return css`
      position: fixed;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      font-size: 18px;
    `
  }
  if ($placement === "prev") {
    return css`
      position: fixed;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    `
  }
  return css`
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  `
}

export const ControlButton = styled.button<ControlButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.opacity("card", 0.12)};
  border: 1px solid ${({ theme }) => theme.opacity("ink", 0.18)};
  border-radius: ${({ theme }) => theme.radius.default};
  color: ${({ theme }) => theme.opacity("ink", 0.7)};
  font-size: 20px;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  z-index: 1001;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.opacity("card", 0.22)};
    color: ${({ theme }) => theme.colors.ink};
    border-color: ${({ theme }) => theme.opacity("ink", 0.35)};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  ${placementStyles}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`

export const Counter = styled.span`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.opacity("ink", 0.5)};
  letter-spacing: 0.06em;
  z-index: 1001;
  user-select: none;
`
