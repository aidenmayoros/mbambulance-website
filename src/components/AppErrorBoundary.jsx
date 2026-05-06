import { Component } from "react";

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App crashed during render.", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-red-500/30 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
              Runtime Error
            </p>
            <h1 className="text-2xl font-semibold text-white">
              The app hit an error while rendering.
            </h1>
            <p className="text-sm leading-7 text-slate-300">
              Refresh the page after changes, or check the browser console for
              the full stack trace.
            </p>
            <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-6 text-red-200">
              {this.state.error?.message || "Unknown error"}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
