import { Suspense } from "react";
import { useState, lazy } from "react";

import { Link, Route, Routes } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorBoundary fallback={<div>❌Failed to load contact information.</div>}>
                <Contact />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
