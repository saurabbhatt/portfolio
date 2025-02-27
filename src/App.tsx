import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global-styles'
import { Layout } from './components/layout/layout'
import Work from './pages/work/work'
import About from './pages/about/about'
import SapImplementation from './pages/projects/sap-implementation/sap-implementation'
import SecurityHeaders from './components/security-headers/security-headers'
import { theme } from './styles/theme'
import { useThemeToggle } from './hooks/use-theme-toggle'
import { ErrorBoundary } from './components/error-boundary/error-boundary'

const App: React.FC = () => {
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

export default App 