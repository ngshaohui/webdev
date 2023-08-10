# Scratchpad

Scratchpad contains ideas to be incorporated into the lessons, but not sure where to park them under yet.

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

## Assignment for CSS

Calculate CSS specifiers score

## Frontend XSS

## `innerHTML`

### Accessing `innerHTML`

During our chapter on HTML, we learnt the following:

> The content of an element can be text, or other elements.

The contents of a HTML element may be accessed via the `innerHTML` property.

`innerHtml.html`

```html
<div>
  <button>Click me</button>
  <span>text</span>
</div>
<script>
  const divElement = document.querySelector("div");
  console.log(divElement.innerHTML);
  const buttonElement = document.querySelector("button");
  console.log(buttonElement.innerHTML);
</script>
```

```

  <button>Click me</button>
  <span>text</span>
Click me
```

The space empty line at the start of div contents is caused by us having no content right after the `<div>` opening tag.

Notice that this has no effect on how the browser renders the element.

### Setting `innerHTML`

We can reassign the value of an element's `innerHTML`.

```html
<div>
  <button>Click me</button>
</div>
<script>
  const btnElement = document.querySelector("button");
  btnElement.addEventListener("click", function () {
    btnElement.innerHTML = "Do not click";
  });
</script>
```

In the above example, we have reassigned the text value of the button from `Click me` to `Do not click`.

It is also possible to add HTML elements with `innerHTML`.

```html
<div>
  <button>Click me</button>
</div>
<script>
  const btnElement = document.querySelector("button");
  btnElement.addEventListener("click", function () {
    const divElement = document.querySelector("div");
    divElement.innerHTML = "<h1>hello</h1>";
  });
</script>
```

Here, we have replaced the contents of the `div` element with a header element instead.

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#replacing_the_contents_of_an_element

### Attack surface if `innerHTML`

The MDN documentation specifies that using `innerHTML` can be a security risk when used with malicious content.

```html
<textarea rows="4" cols="42"></textarea>
<button>submit</button>
<div>output</div>
<script>
  const input = document.querySelector("textarea");
  const button = document.querySelector("button");
  const output = document.querySelector("div");

  button.addEventListener("click", function () {
    output.innerHTML = input.value;
  });
</script>
```

Payloads

```html
<!-- header -->
<h1>Hello</h1>

<!-- style -->
<style>
  * {
    background-color: darkgray;
  }
</style>

<!-- script -->
<script>
  alert("document.domain");
</script>

<!-- img -->
<img src="" onerror="javascript:alert(document.domain);" />

<!-- anchor -->
<a href="javascript:alert(document.domain);">Click me</a>
```

As a rule of thumb, we should not allow user inputs to go unsanitized.

An alternative proposed in MDN's documentation is to use the `textContent` property instead, as the value set will not be parsed as HTML.

#### `script` payload does not execute

TODO talk about `<script>` element being ignored.

> HTML specifies that a `<script>` tag inserted with innerHTML should not execute.

https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0

### Using `append` to insert `script` and execute elements

It is still possible to execute script elements we add to the DOM, but we have to be explicit about it.

```html
<button>Add script</button>
<div>output</div>
<script>
  const input = document.querySelector("textarea");
  const button = document.querySelector("button");
  const output = document.querySelector("div");

  button.addEventListener("click", function () {
    const scriptElement = document.createElement("script");
    scriptElement.append("alert(1);");
    output.append(scriptElement);
  });
</script>
```

In order to use `append`, we need to first create the corresponding HTML element with `createElement`.

Since `createElement` requires an explicit declaration for the type of element we are creating, it acts as a safeguard against malicious `script` elements being executed.

## React createElement (TODO content, cleanup, better title)

Is it possible to get XSS from user supplied strings in React?
(should be an assignment for them to do experimentation)
https://stackoverflow.com/a/51852579

It mainly boils down to just setinnerhtml and user supplied urls to anchor elements

How does react create elements?

```jsx
import { createElement } from "react";

function Greeting({ name }) {
  return createElement("h1", { className: "greeting" }, "Hello");
}
```

https://react.dev/reference/react/createElement

This resembles the appendChild method in JS

https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

Since we are forced to declare the type of elements we want to create, we are effectively removing protections built in place for us against XSS.

### How can we achieve XSS?

https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html

```jsx
import { useState } from "react";

export default function App() {
  const [postContent, setPostContent] = useState("Enter HTML here");
  return (
    <>
      <label>
        Enter some HTML:
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </label>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </>
  );
}
```

Payloads

```html
<style>
  * {
    background-color: #333;
  }
</style>
<img src="" onerror="alert(`Domain: ${document.domain}`)" />
```

This is similar to achieving XSS in `appendElement`.

## Going further

### Typescript

### Server side rendering

## What else can the browser do

(can be discussed when talking about what NodeJS is)

V8 engine is not just capable of running JavaScript, it also runs WebAssembly

https://v8.dev/features

The V8 engine is just one aspect of the browser.

Other than handling HTML, CSS, JS, it also contains codecs to play media files such as mp3, mp4, pdf.

It also has things like password managers and even the ability to sync user session across different devices.

Browsers have evolved to accomplish more than just browsing, capable of accomodating fully featured web applications.
