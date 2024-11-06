import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>DARK MODE</button>
      <Example1 />
      <Example2 />
    </>
  );
}

export default App;
