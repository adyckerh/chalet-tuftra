
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Section, Container } from '@/components/ui/Layout';
import { H2, BodyBase } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Section background="secondary">
          <Container>
            <div className="text-center py-16">
              <H2 className="mb-6 text-red-700">Something went wrong</H2>
              <BodyBase className="mb-8 max-w-2xl mx-auto">
                We apologize for the inconvenience. An unexpected error has occurred. 
                Please try refreshing the page or contact us if the problem persists.
              </BodyBase>
              <div className="space-x-4">
                <Button onClick={this.handleReload} className="bg-emerald-900 hover:bg-emerald-800">
                  Refresh Page
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/'}
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Go Home
                </Button>
              </div>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-8 text-left bg-red-50 p-4 rounded-lg">
                  <summary className="cursor-pointer font-semibold text-red-700">
                    Error Details (Development Only)
                  </summary>
                  <pre className="mt-2 text-sm text-red-600 overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </Container>
        </Section>
      );
    }

    return this.props.children;
  }
}
