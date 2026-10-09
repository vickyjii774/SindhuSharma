import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundState from "./components/NotFoundState";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

// Route-level code splitting keeps the Home bundle small
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const ExperienceDetail = lazy(() => import("./pages/ExperienceDetail"));
const Events = lazy(() => import("./pages/Events"));
const EventCategory = lazy(() => import("./pages/EventCategory"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Contact = lazy(() => import("./pages/Contact"));




const Loading = () => (
  <div
    className="min-h-[60vh] flex flex-col items-center justify-center gap-3"
    role="status"
    aria-label="Loading page"
  >
    <div className="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
    <span className="text-xs uppercase tracking-widest text-ink-muted">Loading...</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-ink font-sans selection:bg-brand-light selection:text-brand-dark">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-sm focus:shadow-lg focus:outline-none"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:category" element={<EventCategory />} />
            <Route path="/events/:category/:id" element={<EventDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <NotFoundState
                  title="Page Not Found"
                  text="The page you are looking for doesn't exist."
                  backTo="/"
                  backLabel="Back to Home"
                />
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
