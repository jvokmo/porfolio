import styled from "styled-components"

export const Section = styled.section.attrs({ id: "sobre" })`
  padding: 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 60px 0;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
    gap: 28px;
  }
`

export const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.large};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  max-width: 680px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.text.regular};
  }
`
