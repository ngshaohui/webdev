# CSS

Cascading Style Sheets (CSS) is responsible for applying extra visual effects to HTML elements in order to build a better user experience.

We may style HTML elements by specifying properties like the font, colours, layouts, animations.

This allows websites to adopt a unique branding with custom colour schemes, as well as better interactability with responsive layouts.

## Styling elements

```html
<style>
  section {
    text-align: center;
    border: 1px solid black;
  }
  p {
    color: blue;
  }
</style>
<section>
  <h1>The Road Not Taken</h1>
  <h5>By Robert Frost</h5>
  <p>Two roads diverged in a yellow wood,</p>
  <p>And sorry I could not travel both</p>
  <p>And be one traveler, long I stood</p>
  <p>And looked down one as far as I could</p>
  <p>To where it bent in the undergrowth;</p>
</section>
```

CSS code is written in the form of rulesets.

Each ruleset consists of the selector, with one or more properties declared within the {curly braces}.

For each property, we specify the name of the property followed by a colon `:` and the property value we want to assign.

Lastly, each declaration within the ruleset should be terminated with a semicolon `;`.

## Different types of selectors

```html
<style>
  section {
    text-align: center;
  }
  .stanza {
    font-size: 16px;
  }
  #title {
    font-weight: 900;
  }
  #author {
    color: gray;
  }
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
</style>
<section>
  <h1 id="title">The Road Not Taken</h1>
  <h5 id="author">By Robert Frost</h5>
  <p class="stanza">Two roads diverged in a yellow wood,</p>
  <p class="stanza">And sorry I could not travel both</p>
  <p class="stanza">And be one traveler, long I stood</p>
  <p class="stanza">And looked down one as far as I could</p>
  <p class="stanza">To where it bent in the undergrowth;</p>
</section>
```

In order to target specific HTML element, we may make use of the `id` and `class` attributes.

## Combining selectors

TODO: Have an example on how to chain and combine multiple CSS selectors

## Conflicts

Like HTML, CSS is also read from top to bottom.

```css
p {
  color: red;
}
p {
  color: blue;
}
```

In the event of a repeated style that targets the exact same elements, a style defined later will overwrite an earlier style.

## Specificity

CSS selectors are given a weight score according to the ID-CLASS-TYPE.

This ruleset has a specificity score of 1-0-0 as it targets the `id`.

```css
#title {
  font-weight: 900;
}
```

This ruleset has a specificity score of 0-1-0 as it targets the `class`.

```css
.stanza {
  font-size: 16px;
}
```

This ruleset has a specificity score of 0-0-1 as it targets the element type.

```css
section {
  text-align: center;
}
```

Lastly, the universal selector `*` has a specificity score of 0-0-0 though it targets all elements.

```css
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

## Linking external styles

The CSS we write can be separated onto a different file.

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
    <link href="main.css" rel="stylesheet" />
  </head>
  <body>
    <section>
      <h1>The Road Not Taken</h1>
      <h5>By Robert Frost</h5>
      <p>Two roads diverged in a yellow wood,</p>
      <p>And sorry I could not travel both</p>
      <p>And be one traveler, long I stood</p>
      <p>And looked down one as far as I could</p>
      <p>To where it bent in the undergrowth;</p>
    </section>
  </body>
</html>
```

`main.css`

```css
section {
  text-align: center;
}
```

### Linking fonts from the internet

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
    <link href="main.css" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans"
      rel="stylesheet"
    />
  </head>
  <body>
    <section>
      <h1>The Road Not Taken</h1>
      <h5>By Robert Frost</h5>
      <p>Two roads diverged in a yellow wood,</p>
      <p>And sorry I could not travel both</p>
      <p>And be one traveler, long I stood</p>
      <p>And looked down one as far as I could</p>
      <p>To where it bent in the undergrowth;</p>
    </section>
  </body>
</html>
```

`main.css`

```css
section {
  text-align: center;
  font-family: "Open Sans";
}
```

# Appendix

## Choosing colors

While the artistic design of webpages is out of scope for this course, we can generally rely on a number of color palette generation sites as a starting point.

One such site is Color Hunt, a free website that offers a number of curated color palettes that can be themed around a particular color.

https://colorhunt.co/

Another website is Coolers, a site that also has color palette generation capabilities for free, but also comes with a number of paywalled features.

https://coolors.co/

This saves us the time of having to think about what colors go together, saving us from overly plain websites or clashing color schemes.

## Data attributes

HTML elements can be extended with the use of custom data attributes.

Custom attributes need to be prefixed with the keyword `data-` followed by a lowercase hyphen-separated string.

```html
<img
  src="images/bear.png"
  class="product-image"
  data-product-id="TOY34120"
  data-size="large"
/>
```

This allows us to create more extensible CSS specifiers for our elements.

```html
<style>
  .btn {
    border: 1px solid;
    padding: 16px;
    border-radius: 24px;
  }

  .btn[data-colo="primary"] {
    background-color: #0d6efd;
    color: #fff;
  }

  .btn[data-colo="danger"] {
    background-color: #dc3545;
    color: #fff;
  }

  .btn[data-size="medium"] {
    font-size: 16px;
  }

  .btn[data-size="large"] {
    font-size: 24px;
  }
</style>
<button class="btn" data-colo="primary" data-size="large">Submit</button>
<button class="btn" data-colo="danger" data-size="medium">Delete</button>
```

The alternative to using data attributes will be to compose multiple CSS class names in a single element.

```html
<button class="btn btn-danger btn-medium" type="button">Danger</button>
```

Both methods will work, but feel free to use one over the other if it conveys better clarity.

https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
