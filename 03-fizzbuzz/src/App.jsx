import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const fizzBuzzNigel =
    count % 3 === 0 && count % 5 === 0
      ? "fizzBuzz"
      : count % 3 === 0
      ? "fizz"
      : count % 5 === 0
      ? "buzz"
      : count;

  const fizzBuzzNigel2 = () => {
    return count % 3 === 0 && count % 5 === 0
      ? "fizzBuzz"
      : count % 3 === 0
      ? "fizz"
      : count % 5 === 0
      ? "buzz"
      : count;
  };

  function fizzBuzzDani() {
    if (count === 0) {
      return <h1>{count}</h1>;
    } else if (count % 3 === 0 && count % 5 === 0) {
      return <h1>FizzBuzz</h1>;
    } else if (count % 3 === 0) {
      return <h1>Fizz</h1>;
    } else if (count % 5 === 0) {
      return <h1>Buzz</h1>;
    } else {
      return <h1>{count}</h1>;
    }
  }

  const fizzBuzzDiego = (num) => {
    if (num % 15 === 0) {
      return "fizzBuzz";
    }

    if (num % 3 === 0) {
      return "fizz";
    }

    if (num % 5 === 0) {
      return "buzz";
    }
  };

  return (
    <>
      <h2>Dani's approach</h2>
      {fizzBuzzDani()}
      <h2>Nigels's approach</h2>
      <h1>{fizzBuzzNigel2()}</h1>
      <h2>Diego's approach</h2>
      <h1>{fizzBuzzDiego(count)}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
