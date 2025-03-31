import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

const StyledButton = styled.button<Omit<ButtonProps, "isLoading">>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  ${({ variant = "primary", theme }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            background-color: ${theme.colors.secondary};
          }
        `;
      case "secondary":
        return `
          background-color: ${theme.colors.secondary};
          color: white;
          &:hover {
            background-color: ${theme.colors.primary};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          border: 2px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `;
    }
  }}

  ${({ size = "medium", theme }) => {
    switch (size) {
      case "small":
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.fontSize.sm};
        `;
      case "medium":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.base};
        `;
      case "large":
        return `
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.typography.fontSize.lg};
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </StyledButton>
  );
};
