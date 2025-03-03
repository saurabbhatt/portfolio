import React, { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

const ErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text};
`

const ErrorTitle = styled.h1`
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`

const ErrorMessage = styled.pre`
  margin-top: 1rem;
  padding: 1rem;
  background: ${props => props.theme.colors.card.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: auto;
`

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <p>Please try refreshing the page</p>
          {this.state.error && (
            <ErrorMessage>
              {this.state.error.toString()}
            </ErrorMessage>
          )}
        </ErrorContainer>
      )
    }

    return this.props.children
  }
} 