import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Theme } from '../types/theme-types'

export const useTheme = () => {
  const theme = useContext(ThemeContext) as Theme
  return theme
} 