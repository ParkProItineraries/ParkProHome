import React from 'react';
import styled from 'styled-components';
import { CTAButton } from './CTAButton';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
  background: #f8fafc;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ef4444;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  font-family: "Urbanist", sans-serif;
`;

const ErrorMessage = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
`;

const ErrorDetails = styled.details`
  margin: 1rem 0;
  padding: 1rem;
  background: #f1f5f9;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  max-width: 600px;
  width: 100%;
`;

const ErrorSummary = styled.summary`
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

const ErrorText = styled.pre`
  font-size: 0.875rem;
  color: #6b7280;
  background: #ffffff;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
          </ErrorMessage>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CTAButton 
              onClick={() => window.location.reload()} 
              variant="primary"
            >
              Refresh Page
            </CTAButton>
            <CTAButton 
              to="/" 
              variant="secondary"
            >
              Go Home
            </CTAButton>
          </div>

          {import.meta.env.DEV && this.state.error && (
            <ErrorDetails>
              <ErrorSummary>Error Details (Development Only)</ErrorSummary>
              <ErrorText>
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </ErrorText>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
