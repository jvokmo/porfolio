import styled from "styled-components"

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.background};
  padding: 48px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 40px 20px;
  }
`

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const LinksRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 20px;
  }
`

export const FooterLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.background};
  opacity: 0.7;
  transition: opacity 0.2s ease;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.background};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &:hover {
    opacity: 1;

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.background};
    outline-offset: 3px;
    border-radius: 2px;
    opacity: 1;
  }
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.opacity("background", 0.15)};
`

export const Rights = styled.p`
  font-size: ${({ theme }) => theme.text.xsmall};
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.background};
  opacity: 0.4;
`

export const Wordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.background};
  opacity: 0.6;
  letter-spacing: -0.02em;
`
