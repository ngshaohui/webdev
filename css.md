# CSS

Cascading Style Sheets (CSS) is responsible for applying extra visual effects to HTML elements in order to build a better user experience.

We may style HTML elements by specifying properties like the font, colours, layouts, animations. This allows websites to adopt a unique branding with custom colour schemes, as well as better interactability with responsive layouts.

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

CSS selectors are given a weight score

ID-CLASS-TYPE

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

## Linking external styles

The CSS we write can be separated onto a different file.

`index.html`
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello world!</title>
        <link href="main.css" rel="stylesheet">
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
        <link href="main.css" rel="stylesheet">
        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet" />
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
