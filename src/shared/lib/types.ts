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

export type Theme = {
  light: {
    colors: ColorScheme
  }
  dark: {
    colors: ColorScheme
  }
  fonts: {
    main: string
    heading: string
  }
  maxWidth: string
  transitions: {
    default: string
    slow: string
  }
  shadows: {
    small: string
    medium: string
    large: string
  }
  borderRadius: {
    small: string
    medium: string
    large: string
  }
} 