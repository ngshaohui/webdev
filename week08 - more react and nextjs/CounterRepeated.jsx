"use client";

import { useState } from "react";

function Clicker() {
  const [clicks, setClicks] = useState(0); // set initial value to 0
  function increaseVal() {
    setClicks((prev) => prev + 1);
  }
  return <button onClick={increaseVal}>clicks: {clicks}</button>;
}

export default function CounterRepeated() {
  const [clicks, setClicks] = useState(0); // set initial value to 0
  function handleClick() {
    setClicks((prev) => prev + 1);
  }
  return (
    <div onClick={handleClick}>
      <Clicker />
      <Clicker />
      Total clicks: {clicks}
    </div>
  );
}
