import styled from "styled-components"

export const Section = styled.section.attrs({ id: "skills" })`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors["background-soft"]};

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
  gap: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 24px;
    gap: 40px;
  }
`

export const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const GroupTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.text.xsmall};
  font-weight: 500;
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1;
`

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Chip = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 6px 12px;
  line-height: 1.2;
  white-space: nowrap;
`
