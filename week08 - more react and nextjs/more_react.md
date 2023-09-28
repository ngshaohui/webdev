# More React.js

## Rendering lists

A common way to render a list of elements from a list of values is using the `map` array method.

This produces a list of elements, that resemble `[<li></li>, <li></li>, <li></li>]`.

```jsx
const classList = ["Alice", "Bob", "Charlie"];

function App() {
  const listItems = classList.map((person) => {
    return <li key={person}>{person}</li>;
  });
  return <ul>{listItems}</ul>;
}
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

TODO
