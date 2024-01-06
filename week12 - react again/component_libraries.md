# Component libraries

Component libraries allow us to import ready-made ready-styled React components.

This is similar to how JS libraries provide pre-defined functions we can call, allowing us to apply them without having to implement them from scratch.

With component libraries, we can focus on where to put components instead of spending time to decide how to style them.

## Bootstrap / react-bootstrap

Bootstrap is a design library by Twitter (X).

`react-bootstrap` is a library of React components that have been styled using the Bootstrap design library.

### Installation

https://react-bootstrap.netlify.app/docs/getting-started/introduction#installation

```bash
npm install react-bootstrap bootstrap
```

At the top of `app/globals.css`, add the following:

```css
@import "bootstrap/dist/css/bootstrap.min.css";

// rest of globals.css file
```

At the top of `app/page.jsx`, ensure that the `"use client"` directive is present.

```jsx
"use client";

// rest of page.jsx
```

### Usage

To use the component library we have installed, we need to import the component and declare it in the component we want to use.

As an example, we can import the `Button` component as follows:

```jsx
import Button from "react-bootstrap/Button";

export default function App() {
  return <Button variant="primary">Primary</Button>;
}
```

In general, we should view `react-boostrap` documentation for the instructions on how to use the components.

https://react-bootstrap.netlify.app/docs/components/buttons

### Import from `"react-bootstrap"` vs `"react-bootstrap/Button"`

For bootstrap, we should prefer importing from `react-bootstrap/<COMPONENT>` as it enables tree shaking.

However since optimisations are out of scope for this module, it is acceptable to use `import { Button } from "react-bootstrap"`.

https://react-bootstrap.netlify.app/docs/getting-started/introduction#importing-components
