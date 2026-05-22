import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 16px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.ink};
  font-family: ${({ theme }) => theme.fonts.body};
  text-align: center;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.text.xlarge};
  color: ${({ theme }) => theme.colors.ink};
  font-weight: 600;
`

export const Message = styled.p`
  font-size: ${({ theme }) => theme.text.regular};
  color: ${({ theme }) => theme.colors.text};
  max-width: 480px;
`

export const ReloadButton = styled.button`
  cursor: pointer;
  padding: 10px 24px;
  border-radius: ${({ theme }) => theme.radius.default};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.text.regular};
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors["accent-strong"]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`
