import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  // FIZZBUZZ FIZZ = Multiple of 3 BUZZ= multiple of 5 FIZZBUZZ = multiple of 3 and 5

  function renderH2(){
    return <h2>This is an h2</h2>
  }


  return (
    <>
      {/* conditional rendering using ternary operator */}
      <h1>DARKMODE {darkMode ? "ON" : "OFF"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle DarkMode</button>

      {/* && operator this is also conditional rendering but we only render if it's true*/}
      {isLoggedIn && <button>Show profile</button>}


      {renderH2()}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
