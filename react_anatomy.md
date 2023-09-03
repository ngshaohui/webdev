# ReactJS

React with Create React App (deprecated)

## Setting up your react project

```bash
npx create-react-app learn-react
```

(TODO: double check) If this is your first time running this command, you will be prompted to install `create-react-app` first. Key in `y` for yes and press enter to continue.

## Starting the project

```bash
npm start
```

It should automatically open the page `http://localhost:3000` in your browser.

If you encounter an error where `package.json` could not be read, it is likely that you are running the command in the wrong directory.

```
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path C:\Users\nsh8\Documents\webdev\package.json
npm ERR! errno -4058
npm ERR! enoent Could not read package.json: Error: ENOENT: no such file or directory, open 'C:\Users\nsh8\Documents\webdev\package.json'
npm ERR! enoent This is related to npm not being able to find a file.
```

## Stopping the project

At anytime we wish to stop running the development server, we can do so with

ctrl+c

On Windows, you will be further prompted if you wish to `Terminate batch job (Y/N)`.

Key in `y` for yes and press enter to continue in order to stop the development server.

### What is http://localhost:3000

`http` is the protocol we use to view websites.

`localhost` is the hostname. In this case, `localhost` means that we are accessing a resources locally on our own computer.

`:3000` is the port. The webserver that react has created will run on port 3000 by default, but other numbers may be used if port 3000 is not available.

## Looking at the files created

Let us start by taking a look at the `index.html` file.

`learn-react\public\index.html`

```html
<div id="root"></div>
<!--
  This HTML file is a template.
  If you open it directly in the browser, you will see an empty page.

  You can add webfonts, meta tags, or analytics to this file.
  The build step will place the bundled scripts into the <body> tag.

  To begin the development, run `npm start` or `yarn start`.
  To create a production bundle, use `npm run build` or `yarn build`.
-->
```

When we open the file, we will notice that none of the content that we see displayed on the webpage can be found there at all.

Instead, the place that we write code has been moved to the `App.js` file.

`learn-react\src\App.js`

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

All that `index.html` is responsible for is creating the root div `<div id="root"></div>`, which is used as a target to inject all the things we have written in `App.js`.

## Hot reloading

Make any changes to `App.js` and save the file.

This should cause the page to reload, and reflect the latest changes.

## Introduction to JSX

JSX is fundamentally a form of javascript that also allows us to return HTML elements.

Our browser cannot interprete the JSX code we have written.

When we write JSX code, it first needs to be transpiled to javascript before it can be run on the browser.

This is handled by Babel, which is part of the react toolkit we have set up as part of the React project during the `npx create-react-app` step.

### Anatomy of JSX file

`App.js`

Each `.jsx` file needs to export a default function.

By convention, the file and the function being exported will share the same name.

The default function needs to return exactly one JSX Element.

This can be in the form of a `<div></div>` or a react fragment `<></>`.

https://react.dev/reference/react/Fragment

### Evaluating within JSX

`App.js`

```jsx
import "./App.css";

function App() {
  const name = "Charles";
  return <section>Hello my name is {name}</section>;
}

export default App;
```

## Working with components

The idea behind React is to work with components.

`App.js` contains the root component of our React project.

Just like how HTML elements can nest other elements, components can also nest other components.

By working in components, React makes it much easier for us to reuse components.

Within `App.js` let us define another component `FormField` and use it within the `App` component.

`App.js`

```jsx
import "./App.css";

function Greet() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <section>
      <Greet />
      <Greet />
      <Greet />
    </section>
  );
}

export default App;
```

If we wish to use it multiple times, we can easily just repeat the declaration of the component, without having to write out the HTML code for it.

## Props

Similar to how javascript functions can take in arguments, React components can take in properties (props)

`App.js`

```jsx
import "./App.css";

function Greet(name) {
  return <h1>Hello {name}</h1>;
}

function App() {
  return (
    <section>
      <Greet name="Alice" />
      <Greet name="Bob" />
      <Greet name="Charles" />
    </section>
  );
}

export default App;
```

This is similar to how HTML elements take in attributes

```html
<input placeholder="Age" />
```

On top of strings, you can also pass in objects and lists.
