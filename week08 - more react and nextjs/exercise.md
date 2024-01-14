# Week 8 Exercise

TODO consider putting this on week 12. Week 9 is common test week so it's undesirable to have a deadline, but could perhaps make the deadline week 11 but release it before they go on common test (so week 8).

TODO can also do one for API routes

## Activity 1

Given the following files, create it within your `my-app` application and check if the Create URL can be visited.

### Task 1

Create the following file located in the directory

`app/page.jsx`

```jsx
export default function Page() {
  return <h1>hi</h1>;
}
```

Is it possible to visit the page on

`http://localhost:3000/`

### Task 2

Create the following file located in the directory

`app/fruits/page.jsx`

```jsx
export default function Banana() {
  return <>Papaya</>;
}
```

Is it possible to visit the page on

`http://localhost:3000/fruits/`

### Task 3

Create the following file located in the directory

`app/games/index.jsx`

```jsx
// !! note that this file is called index.js
export default function App() {
  return <div>Fortnite</div>;
}
```

Is it possible to visit the page on

`http://localhost:3000/games`

### Task 4

Create the following files located in the directory

`app/animals/page.jsx`

```jsx
export default function App() {
  return <strong>Fauna</strong>;
}
```

`app/animals/deer/page.jsx`

```jsx
export default function App() {
  return <p>Has branches on their head</p>;
}
```

Is it possible to visit the pages on

`http://localhost:3000/animals`

`http://localhost:3000/animals/deer`

### Task 5

Create the following file located in the directory

`app/Show.jsx`

```jsx
// !! note that this file is called index.js
export default function Show() {
  return <div>Alegria</div>;
}
```

Is it possible to visit the page on

`http://localhost:3000/Show`

### Task 6

Create the following file located in the directory

`app/text/uppercase/page.jsx`

```jsx
export default function App() {
  return <div>TEXT</div>;
}
```

Is it possible to visit the page on

`http://localhost:3000/text/UPPERCASE`

### Task 7

Create the following file located in the directory

`app/countries/page.jsx`

```jsx
export default function Malaysia() {
  return <strong>Boleh</strong>;
}
```

Is it possible to visit the page on

`http://localhost:3000/countries/page.jsx`
