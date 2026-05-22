import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.06em;
  line-height: 1;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.text.xxlarge};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.xlarge};
  }
`

export const Emphasis = styled.span`
  font-weight: 800;
  position: relative;
  display: inline-block;
`

export const UnderlineSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 6px;
  overflow: visible;
`
