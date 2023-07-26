## Accessibility

An often neglected area of websites is making them more accessible to people with disabilities.

The W3 consortium has a general guideline on the way we should implement things such as using high contrast color palettes, font sizes, labeled fields, etc.

https://www.w3.org/TR/WCAG21/

While it is unrealistic to implement everything, here are some good design principles to keep in mind:

### Using descriptive elements

```html
<button class="btn-primary" onclick="submit()">Button</button>

<div class="btn-primary" onclick="submit()">Also a button</div>
```

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<div class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
```

While it is possible to use the `div` element as the base element for a component, it can be confusing for anyone using accessiblity tools to navigate a webpage.

This is especially the case for buttons, where we might not be able to assume it's a button without knowing how the CSS is styling an element or what the JS might be doing.

### Using color palettes with good contrast

This can generally be accomplished by using a popular curated color palettes that already take this into account.

### Having alt description for images

Having the `alt` attribute for your images not only enables users who can't see the image to understand what it is, but also helps to serve as a fallback in the event that your image is unable to load.

## Calculating an accessibility score

There are also tools available that help us calculate an accessibility score.

### Chrome: Lighthouse

A quick way to get a benchmark for your webpage is to open Chrome's developer tools, and use the Lighthouse tool to generate a report.

The report lists the guidelines that could be better adhered to, as well as any elements within the DOM that might contravene them.
