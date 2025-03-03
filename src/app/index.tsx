import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../shared/ui/styles/global-styles'
import { Layout } from '../widgets/layout'
import { Work } from '../pages/work'
import { About } from '../pages/about'
import { SapImplementation } from '../pages/projects/sap-implementation'
import { SecurityHeaders } from '../shared/ui/components/security-headers'
import { useThemeToggle } from '../shared/lib/hooks/use-theme-toggle'
import { ErrorBoundary } from '../shared/ui/components/error-boundary'

export const App: React.FC = () => {
  const { isDark, toggleTheme, currentTheme } = useThemeToggle()

  return (
    <ThemeProvider theme={currentTheme}>
      <SecurityHeaders />
      <GlobalStyles />
      <Router>
        <Layout toggleTheme={toggleTheme} isDark={isDark}>
          <Routes>
            <Route path="/" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/sap-implementation" element={<SapImplementation />} />
            <Route 
              path="/projects/proj-1" 
              element={<Navigate to="/projects/sap-implementation" replace />} 
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
} 