'use client';

import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  resetErrorBoundary = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5efe6]">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-2xl font-bold text-[#e25c3d] mb-4">Something went wrong</h2>
            <p className="text-[#e25c3d]/80 mb-4">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={this.resetErrorBoundary}
                className="px-4 py-2 bg-[#e25c3d] text-white rounded-md hover:bg-[#c04a30] transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 border border-[#e25c3d] text-[#e25c3d] bg-transparent rounded-md hover:bg-[#f8e1d5] transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
