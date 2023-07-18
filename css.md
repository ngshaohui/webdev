# CSS

Cascading Style Sheets (CSS) is responsible for applying extra visual effects to HTML elements in order to build a better user experience.

We may style HTML elements by specifying properties like the font, colours, layouts, animations. This allows websites to adopt a unique branding with custom colour schemes, as well as better interactability with responsive layouts.

## Styling elements

```html
<style>
    section {
        text-align: center;
    }
    p {
        color: blue;
    }
</style>
<section>
    <p>The Road Not Taken</p>
    <p>By Robert Frost</p>
    <p>Two roads diverged in a yellow wood,</p>
    <p>And sorry I could not travel both</p>
    <p>And be one traveler, long I stood</p>
    <p>And looked down one as far as I could</p>
    <p>To where it bent in the undergrowth;</p>
</section>
```

## Targeting specific elements

```html
<style>
    section {
        text-align: center;
    }
</style>
<section>
    <p id="title">The Road Not Taken</p>
    <p id="author">By Robert Frost</p>
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


