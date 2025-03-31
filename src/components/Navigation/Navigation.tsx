import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #2563eb;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  text-decoration: none;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  letter-spacing: 0.5px;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
`;

export const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Kikimora</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/about">Developers</NavLink>
          <NavLink to="/about">Blog</NavLink>
          <NavLink to="/about">Documentation</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
