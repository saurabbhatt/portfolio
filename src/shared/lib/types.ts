import { DefaultTheme } from 'styled-components';

// Project types
export type Project = {
  id: string
  slug?: string
  title: string
  subtitle?: string
  image: string
  category: string
  description: string
}

// Theme types
export type ColorScheme = {
  primary: string
  secondary: string
  accent: string
  highlight: string
  background: string
  text: string
  overlay: string
  card: {
    background: string
    hover: string
  }
  skill: {
    background: string
    text: string
    hover: string
  }
}

// Theme container type used in our application
export type ThemeContainer = {
  light: any
  dark: any
}

// Remove the duplicate Theme interface entirely as it's already defined in styled.d.ts 