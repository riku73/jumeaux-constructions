"use client";

import { Component, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

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
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center bg-background">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Une erreur est survenue
            </h2>
            <p className="text-muted-foreground mb-6">
              Nous nous excusons pour ce désagrément. Veuillez rafraîchir la page ou réessayer plus tard.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Rafraîchir la page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
