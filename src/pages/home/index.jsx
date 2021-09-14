// HERO.JSX

import { useState } from "react";
import Hero from "./hero";

export default function Home() {
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
    <div id="home">
      <h2>Home from summer</h2>
      <p>Counter: @{counter}@</p>
      <button onClick={onIncrease}>Increase counter</button>
      <button onClick={onDecrease}>Decrease counter</button>
      <Hero />
    </div>
  );
}
