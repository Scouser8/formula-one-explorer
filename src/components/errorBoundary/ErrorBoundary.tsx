import { Component, ReactNode, ErrorInfo } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode; // Optional fallback UI
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service if needed
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return (
        fallback || (
          <div className="p-4 bg-red-100 text-red-800 rounded-lg">
            <h2 className="text-lg font-semibold">Something went wrong</h2>
            <p>{error?.message}</p>
          </div>
        )
      );
    }

    return children;
  }
}

export default ErrorBoundary;
