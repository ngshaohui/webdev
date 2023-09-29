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

```jsx
import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0); // set initial value to 0
  function increaseVal() {
    setClicks((prev) => prev + 1);
  }
  return <div onClick={increaseVal}>clicks: {val}</div>;
}
```

The function `useState` returns an array containing 2 items.

`clicks` is the variable that contains the current state, and `setClicks` is a function that is used to set the value of the variable `clicks`.

Since we pass the value `0` to `useState`, the initial value of `clicks` will be set to 0.

# Appendix

## Functional programming

In computing, a function is pure when it does not result in any side effects.

```js
// impure, side effects
const xs = [1, 2, 3];
function multiply2(ls) {
  for (let i = 0; i < ls.length; i++) {
    ls[i] = ls[i] * 2;
  }
}
multiply2(xs);
console.log(xs); // [2, 4, 6]

// pure, no side effects
const xs = [1, 2, 3];
function multiply2(ls) {
  return ls.map((num) => num * 2);
}
const ys = multiply2(xs);
console.log(xs); // [1, 2, 3]
console.log(ys); // [2, 4, 6]

// pure, same input always produces same output
const squareNum = (num) => num * num;
const isEven = (num) => num % 2 == 0;
const identity = (input) => input;

// impure, same input might produce different output
const randomNum = (maxNum) => Math.random() * maxNum;
```

### Functional components

A component is pure if it does not contain any hooks.
