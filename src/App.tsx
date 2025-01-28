import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout";
import Error404 from "./components/Error404/Error404";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

// To Make sure the initial loading time is fast, so these components are lazy loaded on demand.
const Seasons = lazy(() => import("./components/seasons/Seasons"));
const Races = lazy(() => import("./components/races/Races"));
const Drivers = lazy(() => import("./components/drivers/Drivers"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback="...loading">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Seasons />} />
              <Route path="/season/:seasonYear/races" element={<Races />} />
              <Route
                path="/season/:seasonYear/round/:round"
                element={<Drivers />}
              />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
