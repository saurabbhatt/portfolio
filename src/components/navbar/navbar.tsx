import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>MyPortfolio</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
