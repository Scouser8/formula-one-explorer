import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout";
import Error404 from "./components/Error404/Error404";

const Seasons = lazy(() => import("./components/seasons/Seasons"));
const Races = lazy(() => import("./components/races/Races"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Seasons />} />
          <Route path="/season/:seasonYear/races" element={<Races />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
