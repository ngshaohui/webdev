# More Next.js

## Routing

### Pages in regular HTML

In regular HTML, we can create a new page by having another HTML page.

```
website/
├─ index.html
├─ about.html
```

The above folder structure will mean that the website has 2 pages:

- `/`
- `/about`

### Pages in Next.js

As we do not use HTML files in React.js, the routing needs to be handled by an external library.

Since we are using the Next.js framework, we can let it take care of the routing for us.

Routing for Next.js is handled by creating sub-directories under the `app/` directory, and having

To create a new page, we need to create a new directory within the `app/` directory.

```
my-app/
├─ app/
│  ├─ page.jsx
│  ├─ page.module.css
│  ├─ about/
│  │  ├─ page.jsx
```

- `app/page.jsx` is the UI for the `/` URL
- `app/about/page.jsx` is the UI for the `/about` URL

https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

## Shared layouts

A layout is UI that is shared between multiple pages.

```
my-app/
├─ app/
│  ├─ layout.jsx
│  ├─ page.jsx
│  ├─ about/
│  │  ├─ page.jsx
```

Since `app/` is the top level directory, `app/layout.js` is the root layout, which will be shared across all the pages in an application.

Common shared UI components:

- navbar
- sidebar
- header
- footer

https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

## CSS Modules

Next.js comes with CSS Modules.

https://github.com/css-modules/css-modules

CSS Modules ensures that the selectors defined in one file does not affect a different file, allowing us to repeat class names.

https://css-tricks.com/css-modules-part-1-need/

### Using CSS Modules

```
my-app/
├─ app/
│  ├─ page.jsx
│  ├─ page.module.css
```

`page.module.css`

```css
.main {
  display: flex;
  flex-direction: column;
}
```

CSS files should be named after the JSX file they are styling.

Since the JSX file is called `page.jsx`, the corresponding style is called `page.module.css`.

Likewise, if a JSX component's file is called `Navbar.jsx` the corresponding style will be called `Navbar.module.css`

`page.jsx`

```jsx
import styles from "./page.module.css";

export default function App() {
  return <main className={styles.main}></main>;
}
```

To use the style in a JSX file, the CSS module file needs to be imported.

We then use the `className` attribute in a component, and pass in the corresponding style according to how it is named in the stylesheet.

`styles.main` will select the `.main` selector we have defined in the CSS module file.

### Generated CSS

```html
<main class="page_main__nw1Wk"></main>
```

When inspecting the element in the DOM, we will see that the element's class name has been generated for us.

## Global styles

```
my-app/
├─ app/
│  ├─ globals.css
```

Any styles defined in `app/globals.css` will be applied to the elements globally.

The styles here will be applied first, before the styles defined in CSS Modules.

This means that styles applied using CSS Modules will take precedence, overriding styles we have defined in `globals.css`.

## Media

Media such as images should be put in the `public/` folder.

```
my-app/
├─ public/
│  ├─ images/
│  │  ├─ cat.jpg
```

For images, we should utilise the custom Next.js `<Image>` component to render it.

```jsx
<Image
  src="/images/cat.jpg" // Route of the image file
  height={400} // Desired size with correct aspect ratio
  width={600} // Desired size with correct aspect ratio
  alt="Gutter cat"
/>
```

The custom image component can handle things such as:

1. responsive - scales across different screen sizes
2. image optimization - give client the ideal image size for its viewport size
3. lazy loading - image is only loaded when it enters the viewport
