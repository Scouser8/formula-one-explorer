import { useEffect, useState, lazy } from "react";
import "./App.css";
import Layout from "./components/layout";

const Seasons = lazy(() => import("./components/seasons/Seasons"));

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
