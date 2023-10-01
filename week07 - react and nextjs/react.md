# React.js

## JSX

When working with React.js, we will need to write `.jsx` files instead of `.html` files.

`.jsx` is a markup file that lets us write HTML within JS files.

This allows us to assign HTML elements to variables.

```jsx
const hello = <div>Hello!</div>;
```

However, the browser's JS engine is unable to understand JSX since it is invalid JS code.

In order to display a JSX markup in the browser, we will first need to transpile it to JS, which the browser can understand.

This can be handled by React frameworks such as Next.js, which comes with all the tools we need to transpile and deploy our React apps.

### Nuances

#### Closing tags

JSX requires all elements to have a closing tag.

Elements that only require a single tag will need to be self-closing.

<!-- prettier-ignore -->
```html
<div>
  <br>
  <img src="/images/cat.png">
</div>
```

```jsx
<div>
  <br />
  <img src="/images/cat.png" />
</div>
```

#### Component root element

Each component can only return a single root element.

If we need to return sibling elements, we can wrap them in a `<div>` or a React fragment `<>`.

```jsx
function FavouriteCat() {
  return (
    <>
      <h3>Mao mao</h3>
      <img src="/images/cat.png" />
    </>
  );
}
```

#### Custom component naming

Component names need to begin with a capital letter.

This allows us to differentiate custom components from in-built ones.

```jsx
function MyHomePage() {
  return (
    <>
      <h1>My pets</h1>
      <FavouriteCat />
      <NotSoFavouriteCat />
    </>
  );
}
```

## Minimal React.js page

```jsx
// page.jsx
export default function App() {
  return <div>Hello world!</div>;
}
```

TODO talk about export default

If we want the component to be used somewhere else, we need to export it.

## Components

Each component should be a logical grouping of HTML elements.

<!-- prettier-ignore -->
```jsx
function Footer() {
  return (
    <footer>
      <p>Released under the MIT License.</p>
      <p>Copyright &copy; 2023-present</p>
    </footer>
  );
}

function NavigationBar() {
  return (
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/topics">Topics</a></li>
    </ul>
  );
}
```

### Evaluate JS within components

We can evaluate JS expressions within the HTML element in our JSX components.

```jsx
function App() {
  return <div>7 * 7 is {7 * 7}</div>;
}
```

This is similar to how we can also evaluate JS expressions in template strings.

```js
const st = `7 * 7 is ${7 * 7}`;
```

## Component props

Components can take in properties (props), similar to how JS functions take arguments.

```jsx
function Greet({ name }) {
  return <h1>Hello {name}</h1>;
}

export default function App() {
  return (
    <section>
      <Greet name="Alice" />
      <Greet name="Bob" />
      <Greet name="Charles" />
    </section>
  );
}
```

This is similar to how HTML elements take in attributes.

```html
<input placeholder="Age" />
```

### Prop object

Any attributes that are passed to a component are done so as a single object.

```jsx
function Car(props) {
  return (
    <h1>
      {props.make} {props.model} {props.year}
    </h1>
  );
}

export default function App() {
  return (
    <section>
      <Greet make="Ford" model="Mustang" year={1969} />
    </section>
  );
}
```

A common pattern is to destructure the object, creating the corresponding named local variables.

```jsx
function Car(props) {
  const { make, model, year } = props;
  return (
    <h1>
      {make} {model} {year}
    </h1>
  );
}
```

We can streamline the destructuring process as follows.

```jsx
function Car({ make, model, year }) {
  return (
    <h1>
      {make} {model} {year}
    </h1>
  );
}
```

## Event listeners

Just like in vanilla HTML, the elements in JSX can also have event listeners attached.

```jsx
export default function App() {
  function handleClick() {
    alert("button was clicked");
  }
  return <button onClick={handleClick}>Click me</button>;
}
```

Unlike in HTML, the event listener is named using camelCase.

We will also need to supply a function instead of a function call to our listener.

```html
<button onclick="handleClick()">Click me</button>
<script>
  function handleClick() {
    alert("button was clicked");
  }
</script>
```

# Appendix

## `.js` vs `.jsx` for JSX files

In examples such as those on Next.js and React.dev, we can see JSX markup being used for files with `.js` extension.

This is possible as their tooling has been set up to expect JSX markup within `.js` files.

However, this support might not be universal and we will have to use `.jsx` with different tooling, such as the Vite bundler.

In this course, we will want our JSX markup to have the `.jsx` extension for clarity in the file's purpose.

## Hypothetical breakdown of NP homepage into components

```jsx
function SchoolHomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Content content={ictContent} />
    </>
  );
}

const hello = <div>Hello!</div>;
```
