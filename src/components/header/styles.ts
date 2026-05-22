import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

type WrapperProps = {
  $scrolled: boolean
}

export const Wrapper = styled.header<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  backdrop-filter: none;
  border-bottom: 1px solid transparent;
  transition:
    background 0.3s ease,
    backdrop-filter 0.3s ease,
    border-color 0.3s ease;

  ${({ $scrolled, theme }) => {
    if (!$scrolled) return
    return css`
      background: ${theme.opacity("ink", 0.04)};
      backdrop-filter: blur(12px);
      border-bottom-color: ${theme.colors.border};
    `
  }}
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 0 20px;
    height: 56px;
  }
`

export const Wordmark = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.ink};
  flex-shrink: 0;
  transition: color 0.2s ease;
  border-radius: ${({ theme }) => theme.radius.small};

  svg {
    height: 26px;
    width: auto;
    display: block;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`

export const NavItemWrapper = styled.div`
  position: relative;
`

type NavButtonProps = { $active?: boolean }

export const NavButton = styled.button<NavButtonProps>`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radius.small};

  ${({ $active, theme }) => {
    if (!$active) return
    return css`
      color: ${theme.colors.ink};
    `
  }}

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors["background-soft"]};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
  }
`

export const MobilePanel = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors["background-soft"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile + 1}px) {
    display: none;
  }
`

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 8px 20px 16px;
  gap: 2px;
`

export const MobileNavButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px 0;
  font-size: ${({ theme }) => theme.text.regular};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`
