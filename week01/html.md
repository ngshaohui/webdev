# HTML

When we talk about the web, we often talk about HTML/CSS/JS in tandem with each other.

HTML provides the structure and content

CSS provides the styles and colours

JS provides the logic and functionality

The HTML/CSS/JS code that we have needs to be run on a browser.

At a very minimum, we need the HTML document to exist in order to show anything to the user.

## Minimal HTML document

`index.html`

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

Save the file as `index.html` and view its contents in a browser.

### DOCTYPE

A HTML document is rendered by the browser from the top to the bottom.

`<!DOCTYPE html>` ensures that the browser knows how to correctly render the subsequent HTML document.

https://developer.mozilla.org/en-US/docs/Glossary/Doctype

(chances are that the HTML document will still be rendered correctly without it, but we should make it a good habit to include it since it's part of the specification)

### Elements

A HTML document is made up of elements.

An element comprises of (1) an opening tag, (2) content, (3) and a closing tag.

The content of an element can be text, or other elements.

Here, the `html` element contains a `head` and a `body` element, and the `head` element also contains a `title` element.

Putting elements inside other elements is described as "nesting", ie we can describe that the `title` element is `nested` within the `head` element.

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

## Rendering elements

When the browser encounters an element, it will render the element according to its HTML specification.

`poem.html`

(do note that the rest of the HTML elements have been omitted for brevity)

<!-- prettier-ignore -->
```html
<article>
  Two roads diverged in a yellow wood,
  And sorry I could not travel both
</article>
```

The 2 lines above appear as a single line despite us using a newline to separate it.

This is because the browser sees everything as part of the content of the `article` element, and the default behaviour is to display everything as a single line.

One way we can break up the lines is to use the line break element `br`.

```html
<article>
  Two roads diverged in a yellow wood,<br />
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
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- `a`
- `img`
- `input`
- `table`

## Headers

TODO

## Text formatters

TODO

## Lists

We can use lists to denote a series of items.

```html
<article>
  <h1>Courses available</h1>

  <ol>
    <li>Cybersecurity & Digital Forensics (CSF)</li>
    <li>Data Science</li>
    <li>Immersive Media</li>
    <li>Information Technology</li>
  </ol>
</article>
```

The list is indicated by the unordered list element `ul`, which nests several list items `li`.

Depending on our requirements, lists can be ordered or unordered.

## Anchor elements

In order to direct the user to another webpage, we may use the anchor element `a`.

This is usually rendered on the browser as a blue hyperlink, clicking on which would bring us to another webpage.

```html
<a href="https://www.np.edu.sg/">Ngee Ann Poly Homepage</a>
```

### Element attributes

An element can contain additional information in the form of attributes.

```html
<a href="https://www.np.edu.sg/" target="_blank">Ngee Ann Poly Homepage</a>
```

We may view what attributes an element contains by viewing its documentation.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes

Also listed in the documentation will be "Deprecated attributes", which are not to be used at all under any circumstances.

We should also note that each element also has "Global attributes", which are common attributes shared by all elements.

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes

Some examples are `id` and `class`, which allows us to specify a unique or group identifier for our elements to be selected with CSS and JS.

```html
<ol>
  <li id="csf" class="course-item">Cybersecurity & Digital Forensics (CSF)</li>
  <li id="ds" class="course-item">Data Science</li>
  <li id="im" class="course-item">Immersive Media</li>
  <li id="it" class="course-item">Information Technology</li>
</ol>
```

## Images

Images need the `src` attribute to specify where the image can be found.

<img src="images/cat.jpg">

They can also come with an `alt` attribute, which is a textual description of what the image is.

<img src="images/cat.jpg" alt="cat lying in the rain gutter">

We can also specify the `height` and `width` of our images via the attribute.

<img src="images/cat.jpg" alt="cat lying in the rain gutter" height="400" width="600">

### External sources

The `src` for an image can also point to an image hosted on a different server.

<img src="https://placekitten.com/g/200/300">

This is most often done via a Content Delivery Network (CDN) to host the image on an edge server to users to download images faster.

However, this is generally avoided if we do not own the external server as this means that malicious content could potentially be served.

## Iframe

An `iframe` allows us to link content from another website.

This saves the need for the user to be redirected to another page to view content or perform a particular interaction.

Social media sites might do this to allow them to share a post without having to go on the site itself, such as Facebook or Twitter.

Another example would be sites that want to provide widget functionalities.

### Google Maps

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7375391053556!2d103.77216097602195!3d1.3336435616255482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da107d87883dd1%3A0xc4d6ef954bf5163d!2sSchool%20of%20Infocomm%20Technology!5e0!3m2!1sen!2ssg!4v1691047013782!5m2!1sen!2ssg"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

### Youtube

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

TODO: talk about how youtube doesn't allow the embedded iframe to be served from the local file

## Void elements

Void elements are elements in HTML that do not need to contain any content.

Since they do not contain any content, they do not have any closing tags.

Void elements will consist of only a single tag.

```html
<input type="text" />
```

https://developer.mozilla.org/en-US/docs/Glossary/Void_element

## Comments

We can indicate a comment using the opening tag `<!--` and closing tag `-->`.

Everything between them will be not be rendered by the browser.

```html
<ol>
  <!-- List of courses -->
  <li>Cybersecurity & Digital Forensics (CSF)</li>
  <li>Data Science</li>
  <li>Immersive Media</li>
  <li>Information Technology</li>
</ol>
```

When using VSCode, we may turn the selected line(s) into a comment by pressing

(windows) - ctrl + /
(macOS) - cmd + /

# Appendix

These are things that are useful/cool to know but should not be covered without sufficient time

## Other forms of media

Other than images, various other forms of media can be embedded such as video and audio.

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content

## `index.html`

When a webserver serves files, it usually looks for a file named `index.html` and serves that first.

`https://example.com` -> `https://example.com/index.html`

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
<h1>
  Hello world!
  <h2>Bye</h2>
</h1>
```

### Mismatched case

<!-- prettier-ignore -->
```html
<H1>Hello world!</h1>
```

Some parts of the HTML documents do not conform to the HTML standard, but the browser will still try to render them. Since there is no specification on how to render them, the behaviour is non-deterministic and can vary across different browsers.

We may check the validity of HTML documents with W3C's HTML validator service

https://validator.w3.org/

https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fwww.tech.gov.sg%2F

https://validator.w3.org/nu/?doc=https%3A%2F%2Fwww.np.edu.sg%2F

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attributes
