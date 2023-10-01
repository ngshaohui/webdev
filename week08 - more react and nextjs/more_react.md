# More React.js

## Rendering lists

A common way to render a list of elements from a list of values is using the `map` array method.

This produces a list of elements, that resemble `[<li></li>, <li></li>, <li></li>]`.

```jsx
const classList = ["Alice", "Bob", "Charlie"];

export default function App() {
  const listItems = classList.map((person) => {
    return <li key={person}>{person}</li>;
  });
  return <ul>{listItems}</ul>;
}
const listItems = [
  <li key="Alice">Alice</li>,
  <li key="Bob">Bob</li>,
  <li key="Charlie">Charlie</li>,
];
```

https://react.dev/learn/rendering-lists

### Rendering without `map`

If we do not wish to use `map`, we can also create a list iteratively with loops.

```jsx
const classList = ["Alice", "Bob", "Charlie"];

function App() {
  const listItems = [];
  for (let person of classList) {
    listItems.append(<li key={person}>{person}</li>);
  }
  return <ul>{listItems}</ul>;
}
```

### `key` attribute

When rendering a list of elements, we need to supply a `key` attribute.

The key should be a unique string such as an object ID, which is guaranteed not to change.

This allows React to minimise re-renders when an item is inserted or deleted from the list.

https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

## Component state

### Naive way to keep track of state (does not work)

```jsx
export default function App() {
  let clicks = 0;
  function increaseVal() {
    alert(`clicked ${clicks}`);
    clicks++;
  }
  return <div onClick={increaseVal}>clicks: {clicks}</div>;
}
```

Note that each time we click on the `div`, the value of `clicks` appears to increment but the value shown on the page remains the same.

This is because React does not know that we want to update the DOM, even when `clicks` changes.

### `useState` to trigger re-renders

In order to tell React to update the DOM when a value changes, we need to use a React hook `useState`.

`CounterSimple.jsx`

```jsx
import { useState } from "react";

export default function App() {
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
```

Since we pass the value `0` to `useState`, the initial value of `clicks` will be set to 0.

The function `useState` returns an array containing 2 items.

`clicks` is the variable that contains the current state.

`setClicks` is a function that is used to set the value of the variable `clicks`.

The `setState` function can either take in a value or a function.

### Isolated component states

Each component maintains its own independent state.

`CounterRepeated.jsx`

```jsx
import { useState } from "react";

function Clicker() {
  const [clicks, setClicks] = useState(0); // set initial value to 0
  function increaseVal() {
    setClicks((prev) => prev + 1);
  }
  return <button onClick={increaseVal}>clicks: {clicks}</button>;
}

export default function App() {
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
```

There are 3 components above, the `App` component, as well as 2 `Clicker` components.

When the individual components are clicked, their click count increases independently of the other.

# Appendix

## Update state based on previous state

Both methods below are able to increment the `clicks` counter by 1.

```jsx
setClicks((prev) => prev + 1);
setClicks(clicks + 1);
```

However, we are not able to call `setClicks(clicks + 1)` sequentially in the same function to increment its value.

```jsx
function incrementThrice() { // does not work
  setClicks(clicks + 1); // setClicks(0 + 1)
  setClicks(clicks + 1); // setClicks(0 + 1)
  setClicks(clicks + 1); // setClicks(0 + 1)
}
```

Each time `incrementThrice` is called, it will only increment the value once.

When a `setValue` function is being called, React will only execute this at the end `incrementThrice`, before it does its next render.

This means that each time `clicks` was being referenced within `incrementThrice`, it referred to the same value.

Whenever we want to rely on a previous state, we should use a function as the argument instead.

```jsx
function incrementThrice() { // does not work
  setClicks((prev) => prev + 1); // setClicks(0 + 1)
  setClicks((prev) => prev + 1); // setClicks(1 + 1)
  setClicks((prev) => prev + 1); // setClicks(2 + 1)
}
```

These functions specify that it wants React to calculate the next state based on the previous state.

https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
