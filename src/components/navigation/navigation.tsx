import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeToggle } from '../theme-toggle/theme-toggle'

export type NavigationProps = {
  toggleTheme: () => void
  isDark: boolean
}

export const Navigation: React.FC<NavigationProps> = React.memo(({ toggleTheme, isDark }) => {
  const location = useLocation()

  return (
    <NavContainer>
      <Nav>
        <Logo to="/">
          <span>Saurabh Bhatnagar</span>
        </Logo>
        <NavActions>
          <NavLinks>
            <NavLink to="/" $isActive={location.pathname === '/'}>
              🔥 Work
            </NavLink>
            <NavLink to="/about" $isActive={location.pathname === '/about'}>
              👨‍💻 About
            </NavLink>
          </NavLinks>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </NavActions>
      </Nav>
    </NavContainer>
  )
})

Navigation.displayName = 'Navigation'

const NavContainer = styled.div`
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  padding: 1rem 0; /* Add padding for better spacing */
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 1.5rem 2rem;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  opacity: ${props => (props.$isActive ? 1 : 0.7)};
  font-weight: ${props => (props.$isActive ? 600 : 400)};
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.accent};
    opacity: 1;
  }
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default Navigation; 