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

## Adventures into innerHTML and textContent

Turns out you can't set script elements using innerHTML which is per its design spec.

However, HTML elements can still be added with `innerHTML` so we can trigger `onerror` to run javascript.

## Counter app example to illustrate HTML/CSS/JS

Given a simple app built with HTML/CSS/JS it is possible to illustrate what are the core functions of each component.

This can be demonstrated by removing either or both the CSS and JS components, and demonstrating how the page looks/functions.

The components can be removed by deleting the code locally and refreshing the page.

For CSS, it can be deleted via the element inspector as well.

For JS, it needs us to open the chrome devtools and then the command menu to get the option to disable javascript.

Ultimately, this should show that the HTML is the indespensible one in the stack.

Can further illustrate this concept by demonstrating the removal of CSS/JS on the NP webpage.

## Instagram example to illustrate img elements

Can use the images linked at the bottom of NP's website which are linked to the instagram posts.

These posts are not trivially possible to save, right clicking on them does not give us a "save image" option.

We need to open the element inspector, and open the encapsulating div to see the `img` tag inside it.

Once we have access to the `img` tag, we can find the url to the image via the `src` attribute.

Note that this image is hosted on facebook's CDN.

An alternative method will be to open the network tab, and check what media are being loaded.

However, the image is probably a scaled (progressive) version of the original.

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes

By looking at the `srcset` attribute, we can see that they also serve smaller versions of the image that have better compression.

We can take the highest resolution image, which should be the one that they are using in the `src` attribute.

https://www.instagram.com/p/CeDByWyAaQa/
