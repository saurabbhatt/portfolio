import { DefaultTheme } from 'styled-components';

// Shared theme properties
const baseTheme = {
  fonts: {
    main: "'Inter', sans-serif",
    heading: "'Inter', sans-serif"
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease'  // Add the missing slow property
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px'
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)'
  },
  maxWidth: '1200px'
};

// Light theme colors
const lightColors = {
  background: '#FFFFFF',
  text: '#333333',
  primary: '#0A2647',
  secondary: '#144272',
  accent: '#2C74B3',
  card: {
    background: '#F8F9FA',
    hover: '#E9ECEF'
  },
  skill: {
    background: '#E9ECEF',
    text: '#495057',
    hover: '#DEE2E6'
  }
};

// Dark theme colors
const darkColors = {
  background: '#121212',
  text: '#E0E0E0',
  primary: '#90CAF9',
  secondary: '#64B5F6',
  accent: '#42A5F5',
  card: {
    background: '#1E1E1E',
    hover: '#2D2D2D'
  },
  skill: {
    background: '#2D2D2D',
    text: '#B0B0B0',
    hover: '#3D3D3D'
  }
};

// Complete themes
export const theme = {
  light: {
    ...baseTheme,
    colors: lightColors
  } as DefaultTheme,
  dark: {
    ...baseTheme,
    colors: darkColors
  } as DefaultTheme
}; 