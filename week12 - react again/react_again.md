# React

## `useEffect`

`useEffect`

https://react.dev/reference/react/useEffect#usage

### Dependencies

All reactive values referenced in the function supplied to `useEffect` needs to be part of its dependency array.

## Component libraries

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

```jsx
// functional component
function Greet({ name }) {
  return <h1>Hello {name}</h1>;
}

// functional component
export default function App() {
  return (
    <section>
      <Greet name="Alice" />
      <Greet name="Bob" />
    </section>
  );
}
```

Each time a component is supplied with the same arguments, it will always render the same output.
