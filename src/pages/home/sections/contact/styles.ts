import styled from "styled-components"

export const Section = styled.section`
  padding: 100px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 64px 0;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
  }
`

export const Heading = styled.div`
  margin-bottom: 16px;
`

export const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.65;
  max-width: 480px;
  margin: 0 0 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-bottom: 40px;
  }
`

export const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const LinkItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  gap: 16px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px 0;
  }
`

export const LinkLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.text.xxlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.03em;
  transition: color 0.2s ease;

  ${ContactLink}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.text.xlarge};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.large};
  }
`

export const LinkArrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.text.xlarge};
  color: ${({ theme }) => theme.colors["text-soft"]};
  flex-shrink: 0;
  transition: color 0.2s ease, transform 0.2s ease;

  ${ContactLink}:hover & {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateX(4px) rotate(-45deg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 0.2s ease;

    ${ContactLink}:hover & {
      transform: none;
    }
  }
`

export const LinkMeta = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.04em;
  flex: 1;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`
