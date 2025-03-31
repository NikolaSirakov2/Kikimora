import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
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
  align-items: center;
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

const DemoButton = styled.button`
  background-color: #90ee90;
  color: black;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  letter-spacing: 1px;

  &:hover {
    background-color: #98fb98;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
          <DemoButton>Request Demo</DemoButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
