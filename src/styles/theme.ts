import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    background: "#FFFFFF",
    text: "#000000",
    error: "#FF3B30",
    success: "#34C759",
    warning: "#FF9500",
    gray: {
      100: "#F2F2F7",
      200: "#E5E5EA",
      300: "#D1D1D6",
      400: "#C7C7CC",
      500: "#AEAEB2",
      600: "#8E8E93",
      700: "#636366",
      800: "#48484A",
      900: "#3A3A3C",
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  typography: {
    fontFamily: {
      base: 'Orbitron, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      mono: "SF Mono, SFMono-Regular, ui-monospace, DejaVu Sans Mono, Menlo, Consolas, monospace",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "350ms ease",
  },
};
