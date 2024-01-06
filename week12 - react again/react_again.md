# React

## `useEffect`

`useEffect` is a hook that is used to introduce side effects into our components.

`SideEffect.jsx`

```jsx
export default function App() {
  [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>;
}
```

### `useEffect` anatomy

```jsx
useEffect(<SETUP_FUNCTION>, <DEPENDENCY_ARRAY>)
```

The hook takes 2 arguments, a function as well as an array.

The array contains a list of variables to be "watched" for changes.

Everytime one of the variables has a new value, the function supplied will be executed.

https://react.dev/reference/react/useEffect#usage

#### `<SETUP_FUNCTION>` return value

Whenever possible, the setup function should return a cleanup function.

This will be actions such as disconnecting from active server connections made in our `useEffect` hook, or removing an event listener we no longer need, such as calling `clearTimeout` after calling `setTimeout`.

Since these workflows are not covered in this module, we may omit the cleanup code for simplicity's sake for now.

However, students are strongly encouraged to include cleanup code whenever possible.

### Dependencies

All reactive values referenced in the function supplied to `useEffect` needs to be part of its dependency array.

## Data fetching

TODO

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

## Further reading

https://react.dev/learn/you-might-not-need-an-effect

The "You Might Not Need an Effect" article from the official React docs is an excellent read to clarify some common component design misconceptions.

Do note that this article would not be useful until you have had some experience writing React components that handle user events.

I felt that hooks are one of the topics that invites a lot of low quality blogposts about that regurgitate the same content, one of which is how you "should always have fetch calls in useEffect".

The misconception of fetch calls always having to be in useEffect is clarified in the article, which states how we will not need useEffect to trigger fetch calls from user events.
