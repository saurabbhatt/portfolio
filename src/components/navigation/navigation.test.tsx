import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Navigation } from './navigation'
import { theme } from '../../styles/theme'

const mockTheme = {
  ...theme,
  colors: theme.light.colors
}

describe('Navigation', () => {
  const defaultProps = {
    toggleTheme: jest.fn(),
    isDark: false
  }

  const renderNavigation = () => {
    return render(
      <BrowserRouter>
        <ThemeProvider theme={mockTheme}>
          <Navigation {...defaultProps} />
        </ThemeProvider>
      </BrowserRouter>
    )
  }

  it('renders navigation links', () => {
    renderNavigation()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders theme toggle', () => {
    renderNavigation()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
}) 