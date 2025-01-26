import { useEffect, useState, lazy } from "react";
import "./App.css";
import Layout from "./components/Layout";

const Seasons = lazy(() => import("./components/Seasons"));

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <Layout>
      <Seasons />
    </Layout>
  );
}

export default App;
