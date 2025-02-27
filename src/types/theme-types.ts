type ColorScheme = {
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

type Theme = {
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

export type { Theme, ColorScheme } 