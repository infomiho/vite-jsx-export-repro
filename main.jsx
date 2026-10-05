import { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return <output data-state="error">{String(this.state.error)}</output>
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <ErrorBoundary><App /></ErrorBoundary>,
)
