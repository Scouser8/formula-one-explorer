import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <p>Formula One App</p>
    </Layout>
  );
}

export default App;
