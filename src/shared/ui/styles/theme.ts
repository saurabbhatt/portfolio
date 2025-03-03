import { DefaultTheme } from 'styled-components';

// Base theme with all required properties
const baseTheme = {
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
    heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
    monospace: 'Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.2,
    code: 1.6,
  },
  space: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.12)',
    large: '0 8px 16px rgba(0, 0, 0, 0.14)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease',
    fast: '0.15s ease',
  },
  maxWidth: '1200px',
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
};

// Light theme colors
const lightColors = {
  primary: '#1a1a1a',
  secondary: '#2a2a2a',
  accent: '#404040',
  background: '#ffffff',
  text: '#1a1a1a',
  border: '#e0e0e0',
  error: '#e63946',
  success: '#2a9d8f',
  card: {
    background: '#ffffff',
    hover: '#f8f9fa',
  },
  button: {
    primary: {
      background: '#1a1a1a',
      text: '#ffffff',
    },
    secondary: {
      background: 'transparent',
      text: '#1a1a1a',
    },
  },
  skill: {
    background: '#f5f5f5',
    text: '#1a1a1a',
    hover: '#e8e8e8',
  },
};

// Dark theme colors
const darkColors = {
  primary: '#ffffff',
  secondary: '#e0e0e0',
  accent: '#cccccc',
  background: '#121212',
  text: '#ffffff',
  border: '#333333',
  error: '#ff6b6b',
  success: '#4ade80',
  card: {
    background: '#1a1a1a',
    hover: '#2a2a2a',
  },
  button: {
    primary: {
      background: '#ffffff',
      text: '#121212',
    },
    secondary: {
      background: 'transparent',
      text: '#ffffff',
    },
  },
  skill: {
    background: '#1a1a1a',
    text: '#ffffff',
    hover: '#2a2a2a',
  },
};

// Create full theme objects with type assertions to bypass inference issues
const lightTheme = {
  ...baseTheme,
  colors: lightColors
} as DefaultTheme;

const darkTheme = {
  ...baseTheme,
  colors: darkColors
} as DefaultTheme;

// Export the theme object
export const theme = {
  light: lightTheme,
  dark: darkTheme
}; 