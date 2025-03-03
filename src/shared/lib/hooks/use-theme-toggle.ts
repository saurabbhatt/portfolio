import { useState, useEffect } from 'react'
import { DefaultTheme } from 'styled-components'
import { theme } from '../../ui/styles/theme'

/**
 * Return type for the useThemeToggle hook
 */
type UseThemeToggleReturn = {
  isDark: boolean
  toggleTheme: () => void
  currentTheme: DefaultTheme
}

/**
 * Custom hook for managing theme toggle functionality
 * 
 * Provides:
 * - Current theme state (dark/light)
 * - Toggle function
 * - Current theme object for styled-components
 */
export const useThemeToggle = (): UseThemeToggleReturn => {
  // Initialize theme from localStorage or default to light theme
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  // Persist theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  // Function to toggle between light and dark themes
  const toggleTheme = () => setIsDark(!isDark)

  // Get the current theme object based on dark/light preference with type assertion
  const currentTheme = (isDark ? theme.dark : theme.light) as DefaultTheme

  return { isDark, toggleTheme, currentTheme }
} 