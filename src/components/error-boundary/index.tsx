import React from "react"

import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types"
import { Container, Title, Message, ReloadButton } from "./styles"

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Title>Something went wrong</Title>
          <Message>
            {this.state.error?.message ?? "An unexpected error occurred."}
          </Message>
          <ReloadButton onClick={this.handleReload}>Reload page</ReloadButton>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
