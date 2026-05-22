import styled, { css } from "styled-components"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors["background-soft"]};
  cursor: pointer;
  gap: 2px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.card};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`

type LabelProps = {
  $active: boolean
}

export const Label = styled.span<LabelProps>`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors["text-soft"]};
  letter-spacing: 0.04em;
  transition:
    color 0.2s ease,
    font-weight 0.2s ease;

  ${({ $active, theme }) => {
    if (!$active) return
    return css`
      font-weight: 600;
      color: ${theme.colors.accent};
    `
  }}
`

export const Divider = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.border};
  margin: 0 2px;
  user-select: none;
`
