/// <reference types="jest" />
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Navigation } from './navigation'
import { theme } from '../../shared/ui/styles/theme'

function renderNavigation(props = {}) {
  const defaultProps = {
    toggleTheme: jest.fn(),
    isDark: false
  }
  
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme.light}>
        <Navigation {...defaultProps} {...props} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

describe('Navigation', () => {
  const defaultProps = {
    toggleTheme: jest.fn(),
    isDark: false
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