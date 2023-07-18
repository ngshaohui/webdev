# HTML

When we talk about the web, we often talk about HTML/CSS/JS in tandem with each other.

HTML provides the structure and content

CSS provides the styles and colours

JS provides the logic and functionality

The HTML/CSS/JS code that we have needs to be run on a browser.

At a very minimum, we need the HTML document to exist in order to show anything to the user.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello world!</title>
    </head>
    <body>
        <p>My cat is very grumpy</p>
    </body>
</html>
```

## DOCTYPE

A HTML document is rendered by the browser from the top to the bottom.

`<!DOCTYPE html>` ensures that the browser knows how to correctly render the subsequent HTML document.

https://developer.mozilla.org/en-US/docs/Glossary/Doctype

(chances are that the HTML document will still be rendered correctly without it, but we should make it a good habit to include it since it's part of the specification)

## Elements

A HTML document is made up of elements.

An element comprises of (1) an opening tag, (2) content, (3) and a closing tag.

The content of an element can be text, or other elements.

Here, the `html` element contains a `head` and a `body` element, and the `head` element also contains a `title` element.

Putting elements inside other elements is described as "nesting", ie we can describe that the `title` element is `nested` within the `head` element.

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

## Rendering elements

When the browser encounters an element, it will render the element according to its HTML specification.

```html
<article>
    Two roads diverged in a yellow wood,
    And sorry I could not travel both
</article>
```

The 2 lines above appear as a single line despite us using a space to separate it.

This is because the browser sees everything as part of the content of the `article` element, and the default behaviour is to display everything as a single line.

One way we can break up the lines is to use the line break element `br`.

```html
<article>
    Two roads diverged in a yellow wood,<br>
    And sorry I could not travel both
</article>
```

When the `br` element is encountered, this causes the browser to render a blank line before rendering the remaining text.

Another way to achieve this separation is by using the division container `div`.

```html
<article>
    <div>Two roads diverged in a yellow wood,</div>
    <div>And sorry I could not travel both</div>
</article>
```

The division container is used to group elements together, 

Alternatively, we can encapsulate each line in the paragraph element `p`.

```html
<article>
    <p>Two roads diverged in a yellow wood,</p>
    <p>And sorry I could not travel both</p>
</article>
```

When the `p` element is used, the browser will render the content of the element on a newline.

As compared to the `div` and `br` methods above, you'll also notice that using the `p` element causes the text to have extra padding between them.

## Other HTML elements

Different HTML elements perform different functions.

Here are some commonly used elements you're likely to encounter:

- `ul`, `ol`
- `li`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `a`
- `img`
- `input`
- `table`

## Lists

We can use lists to denote a series of items.

Depending on our requirements, lists can be ordered or unordered.

```html
<p>Courses available</p>

<ol>
  <li>Cybersecurity & Digital Forensics (CSF)</li>
  <li>Data Science</li>
  <li>Immersive Media</li>
  <li>Information Technology</li>
</ol>
```

The list is indicated by the unordered list element `ul`, which nests several list items `li`.

## Anchor elements

In order to direct the user to another webpage, we may use the anchor element `a`.

This is usually rendered on the browser as a blue hyperlink, clicking on which would bring us to another webpage.

```html
<a href="https://www.np.edu.sg/">Ngee Ann Poly Homepage</a>
```

### Element attributes

An element can contain additional information in the form 

## Void elements

Void elements are elements in HTML that do not need to contain any content.

Since they do not contain any content, they do not have any closing tags.

Void elements will consist of only a single tag.

```html
<input type="text">
```

https://developer.mozilla.org/en-US/docs/Glossary/Void_element

# Appendix

These are things that are useful/cool to know but should not be covered without sufficient time

## Invalid HTML

Does it render?

### Missing doctype

```html
<html>
    <head>
        <title>Hello world!</title>
    </head>
    <body>
        <p>Hello world!</p>
    </body>
</html>
```

### Missing element tags

```html
Hello world!
```

### Missing closing tags

```html
<h1>Hello world!
<h2>Bye
```

These types of HTML documents do not conform to the HTML standard, but the browser will still try to render them. Since there is not specification on how to render them, the behaviour is non-deterministic and can vary across different browsers.
