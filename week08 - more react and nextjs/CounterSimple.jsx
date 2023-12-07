"use client";

import { useState } from "react";

export default function CounterSimple() {
  const [clicks, setClicks] = useState(0); // set initial value to 0
  function increaseVal() {
    setClicks((prev) => prev + 1);
  }
  function reset() {
    setClicks(0);
  }
  return (
    <div>
      <button onClick={increaseVal}>increment</button>
      <button onClick={reset}>reset</button>
      clicks: {clicks}
    </div>
  );
}
