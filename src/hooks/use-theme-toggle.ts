import { useState, useEffect } from 'react'
import { Theme } from '../types/theme-types'
import { theme } from '../styles/theme'

type UseThemeToggleReturn = {
  isDark: boolean
  toggleTheme: () => void
  currentTheme: Theme
}

export const useThemeToggle = (): UseThemeToggleReturn => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const currentTheme = {
    ...theme,
    colors: theme[isDark ? 'dark' : 'light'].colors,
    isDark
  }

  return { isDark, toggleTheme, currentTheme }
} 