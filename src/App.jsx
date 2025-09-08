import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components for better performance
const Home = React.lazy(() => import("./pages/Home"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Features = React.lazy(() => import("./pages/Features"));
const About = React.lazy(() => import("./pages/About"));
const Demo = React.lazy(() => import("./pages/Demo"));
const DemoItinerary = React.lazy(() => import("./pages/DemoItinerary"));
const RequestAccess = React.lazy(() => import("./pages/RequestAccess"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Signup = React.lazy(() => import("./pages/Signup"));
const DisneyPlanningSoftware = React.lazy(() => import("./pages/DisneyPlanningSoftware"));
const TravelAgentSoftware = React.lazy(() => import("./pages/TravelAgentSoftware"));
const FAQ = React.lazy(() => import("./pages/FAQ"));

// Business Pages
const TermsOfService = React.lazy(() => import("./pages/business/TermsOfService"));
const PrivacyPolicy = React.lazy(() => import("./pages/business/PrivacyPolicy"));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.2rem',
    color: '#6B7280'
  }}>
    Loading...
  </div>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <GlobalStyle />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Standalone itinerary page without navbar/footer */}
              <Route path="/demo-itinerary" element={<DemoItinerary />} />
              
              {/* Regular pages with navbar and footer */}
              <Route path="/*" element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/request-access" element={<RequestAccess />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/disney-planning-software" element={<DisneyPlanningSoftware />} />
                    <Route path="/travel-agent-software" element={<TravelAgentSoftware />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/business/terms-of-service" element={<TermsOfService />} />
                    <Route path="/business/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </>
              } />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;