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

## Common properties

- `color`
- `background-color`
- `font-size`
- `font-family`
- `text-align`
- `border`
- `padding`
- `margin`

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

## Combining selectors

We can chain multiple CSS specifiers to obtain a higher specifier score to target elements more precisely.

### Reuse ruleset for multiple selectors

If we want to repeat a ruleset for multiple selectors, we can list the selectors we want to do this for, separated with commas.

This ruleset has a specificer score of 0-0-1, as it does not construct a more specific rule.

```css
h5,
p {
  text-transform: capitalize;
}
```

This ruleset targets both `h5` elements and `p` elements.

Do note that the newline after the comma is not mandatory, but has been added for legibility (`h5, p {/* Selector */}` is also okay).

### Chaining multiple selectors

We can chain multiple selectors from different specifier categories.

This ruleset has a specifier score of 1-0-1.

```css
h5#analysis {
  background-color: yellow;
}
```

This ruleset targets `h5` elements with an `id` of `#analysis`.

`<h5 id="analysis">Poem analysis</h5>`

### Adjacent sibling selector

The `+` operator selects an adjacent **sibling** element.

An element is a sibling, if it immediately follows the specified element.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

In the above example, `<li>Two</li>` is the adjacent sibling of `<li>One</li>`.

`<li>Three</li>` is the adjacent sibling of both `<li>Two</li>` and `<li>One</li>`.

Each `+ element` specified will increase the score by 0-0-1.

This ruleset has a specifier score of 0-0-2.

```css
p + p {
  background-color: yellow;
}
```

This ruleset has a specifier score of 0-0-5.

```css
p + p + p + p + p {
  background-color: yellow;
}
```

### Child element selector

A child element is an element that has been nested within another element `<parent><child></parent>`.

We can specify child elements by having specifying elements separated with a space.

```html
<style>
  section p {
    background-color: yellow;
  }
</style>
<section>
  <div>
    <p>Hi</p>
  </div>
  <p>Hello</p>
</section>
```

Both of the <p> elements are considered

### Immediate children selector

The `>` operator selects elements that are its **immediate** children.

Each `> element` used will raise the specifier score by 0-0-1.

This ruleset has a specifier score of 0-0-3.

```css
section > section > p {
  text-transform: capitalize;
}
```

### Pseudo class selector

A pseudo class selector specifies a special state of the element being selected.

Each pseudo class selector raises the specifier score by 0-1-0.

```css
.stanza:nth-child(even) {
  background-color: yellow;
}
```

```css
.stanza:hover {
  color: blue;
}
```

```css
/* selects a section element that does not have an id attribute */
section:not([id]) {
  border: 1px solid black;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

## Box model

We are able to specify an element's height and width using CSS.

```html
<style>
  div {
    height: 200px;
    width: 200px;
  }
</style>
<div></div>
```

The size of an element depends on the size of its **content**.

However, we have seen that the `p` element appears to have some space around it, compared if we were to use a `div` element.

```html
<p>Two roads diverged in a yellow wood,</p>
<p>And sorry I could not travel both</p>
<div>And be one traveler, long I stood</div>
<div>And looked down one as far as I could</div>
```

This is done by drawing an empty margin at its top and bottom.

There are 3 other properties that can help to add space around an element (in this particular order):

1. `padding`
2. `border`
3. `margin`

Together with the element, they makes up the CSS box model.

These properties makes it easier to read, as well as distinguish different elements from each other.

`box-model.html`

```html
<style>
  .container {
    border: dotted #333 3px;
    background-color: mistyrose;
  }
  .box {
    width: 200px;
    height: 200px;
    padding: 20px;
    border: solid black 5px;
    margin: 20px;
  }
  #box1 {
    background-color: lightgreen;
  }
  #box2 {
    background-color: lightsalmon;
  }
</style>
<div class="container">
  <div id="box1" class="box"></div>
  <div id="box2" class="box"></div>
</div>
```

### `padding`

The `padding` of an element surrounds the area immediately around the content.

It is used to give space between the current element from the surrounding ones.

### `border`

The `border` of an element comes after the padding.

As the name suggests, it is used to apply a border around the element, after the padding has been applied.

### `margin`

Similar to `padding`, the `margin` property is also used to give space between the current element from the surrounding ones.

However, the margin of an element will overlap with the surrounding element's margin.

### Specific direction

When specifying any of the 3 box properties, it applies it on all 4 surrounding directions.

As we have seen in the case of the `p` element, we can choose to apply box properties in a specific direction.

We may also give a specific direction where we want the property.

```css
div {
  padding: 10px 40px; /* top and bottom | left and right (shorthand property) */
  border-bottom: 10px;
  margin: 20px 30px 40px 50px; /* top, right, bottom, left */
}
```

## Inline style

On top of using stylesheets, it is possible to do inline styling within the HTML element itself.

The inline style will override any of the rulesets in the stylesheets, disregarding their specificity.

```html
<style>
  section {
    text-align: center;
  }
  p.stanza {
    font-size: 16px;
  }
</style>
<section>
  <h1 id="title">The Road Not Taken</h1>
  <h5 id="author">By Robert Frost</h5>
  <p class="stanza">Two roads diverged in a yellow wood,</p>
  <p class="stanza" style="font-size: 24px">
    And sorry I could not travel both
  </p>
  <p class="stanza">And be one traveler, long I stood</p>
  <p class="stanza">And looked down one as far as I could</p>
  <p class="stanza">To where it bent in the undergrowth;</p>
</section>
```

While all the elements with `class="stanza"` should have their `font-size` set to `16px`, the second stanza has its `font-size` set to `24px`.

## Linking external stylesheets

So far, the styles we've written are inside a `style` element contained within the HTML document itself.

Such styles are known as an internal stylesheets.

The CSS we write can also be separated onto a different file, known as an external stylesheet.

`external-stylesheets.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
    <link href="main.css" rel="stylesheet" />
    <link href="folder/poem.css" rel="stylesheet" />
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

`folder/poem.css`

```css
p {
  font-size: 24px;
}
```

Having the CSS on a different style allows us to separate our concerns, only touching a specific file to change either the content or the style.

It is also possible to load multiple stylesheets, which tends to be common practice.

Do note that if any styles are conflicting, the one loaded last will overide those preceding it.

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

# Appendix

## Choosing colors

While the artistic design of webpages is out of scope for this module, we can generally rely on a number of color palette generation sites as a starting point.

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
    color: #fff;
  }

  .btn[data-colo="primary"] {
    background-color: #0d6efd;
  }

  .btn[data-colo="danger"] {
    background-color: #dc3545;
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

## Fetching external data with CSS

TODO better example, include example with actual url

Besides specifying colors, it is possible to include a URL to link to an external resource.

```html
<style>
  div {
    height: 200px;
    width: 200px;
  }
  div#first {
    background: no-repeat left
      url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAANQTFRFf39/kMobIwAAABNJREFUGBljGAWjYBSMglFAVwAABXgAAdxFAhsAAAAASUVORK5CYII=");
  }
  div#second {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAANQTFRFf39/kMobIwAAABNJREFUGBljGAWjYBSMglFAVwAABXgAAdxFAhsAAAAASUVORK5CYII=");
  }
</style>
<div></div>
<div></div>
<img
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAANQTFRFf39/kMobIwAAABNJREFUGBljGAWjYBSMglFAVwAABXgAAdxFAhsAAAAASUVORK5CYII="
/>
```

The above example uses a base64 encoded image as its background.

https://developer.mozilla.org/en-US/docs/Web/CSS/url

## Further reading

### CSS variables

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

### Media queries for responsive design

https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries

### Flexbox for aligning content

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox

### Grid for aligning content

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
