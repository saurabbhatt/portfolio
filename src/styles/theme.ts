import { Theme } from '../types/theme-types'

export const theme: Theme = {
  light: {
    colors: {
      primary: '#0A2647',
      secondary: '#144272',
      accent: '#2C74B3',
      highlight: '#205295',
      background: '#ffffff',
      text: '#0A2647',
      overlay: 'rgba(10, 38, 71, 0.85)',
      card: {
        background: '#f8f9fa',
        hover: '#e9ecef'
      },
      skill: {
        background: '#0A2647',
        text: '#ffffff',
        hover: '#144272'
      }
    }
  },
  dark: {
    colors: {
      primary: '#89CFF0',
      secondary: '#7AB7D0',
      accent: '#5DA7C5',
      highlight: '#4B97B5',
      background: '#0A1929',
      text: '#E9ECEF',
      overlay: 'rgba(10, 25, 41, 0.85)',
      card: {
        background: '#0F2337',
        hover: '#142B42'
      },
      skill: {
        background: '#89CFF0',
        text: '#0A1929',
        hover: '#7AB7D0'
      }
    }
  },
  fonts: {
    main: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'SF Pro Display', sans-serif"
  },
  maxWidth: '1200px',
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease-in-out'
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.1)',
    large: '0 8px 16px rgba(0,0,0,0.1)'
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px'
  }
} 