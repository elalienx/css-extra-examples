// NPM packages
import { useState } from "react";

// Project files

export default function Hero() {
  const [counter, setCounter] = useState(0);

  // Methods
  // this ones MAYBE? called: 0 times, 1 time, or ininite times...
  function onIncrease() {
    if (counter < 10) {
      setCounter(counter + 2);
    }
  }

  function onDecrease() {
    if (counter > 0) {
      setCounter(counter - 2);
    }
  }

  return (
    <div className="hero">
      <h1>Home from summer</h1>
      <p>Counter: @{counter}@</p>

      {/* Example of component imports */}
      <section>
        <p>The best course of the Spring 2022</p>
        <ul></ul>
        <button>Click here</button>
      </section>

      {/* Example of button counter */}
      <section className="cards">
        <button onClick={onIncrease}>Increase counter</button>
        <button onClick={onDecrease}>Decrease counter</button>
      </section>
    </div>
  );
}
