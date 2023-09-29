import { useState } from "react";

function Clicker() {
  const [val, setVal] = useState(0); // set initial value to 0
  function increaseVal() {
    setVal((prev) => prev + 1);
  }
  return <button onClick={increaseVal}>clicks: {val}</button>;
}

export default function App() {
  const [val, setVal] = useState(0); // set initial value to 0
  function handleClick() {
    setVal((prev) => prev + 1);
  }
  return (
    <div onClick={handleClick}>
      <Clicker />
      <Clicker />
      Total clicks: {val}
    </div>
  );
}
