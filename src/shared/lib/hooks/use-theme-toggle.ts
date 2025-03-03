import { useState, useEffect } from 'react'
import { Theme } from '../types'
import { theme } from '../../ui/styles/theme'

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

  const currentTheme = isDark ? theme.dark : theme.light

  return { isDark, toggleTheme, currentTheme }
} 