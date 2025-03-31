import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer";
// Create a client
const queryClient = new QueryClient();

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const MainContent = styled.main`
  min-height: calc(100vh - 64px); // Subtract navigation height
`;

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppContainer>
            <Navigation />
            <MainContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </MainContent>
            <Footer />
          </AppContainer>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
