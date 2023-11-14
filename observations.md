# Observations

Observation of student behaviour and clarifications for them.

## Deprecated elements and attributes

We should avoid using deprecated features.

One way to identify deprecated features is when VSCode highlights the text in bright red, indicating that something is wrong.

For example, one of the deprecated HTML elements is `<center>`, which centers the content inside it horizontally.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#deprecated_attributes

It has been deprecated since HTML 4, since `text-align` was added to CSS to replicate this behaviour. This also allowed a clearer distinction between using HTML for structure and content, while CSS would contain everything related to styling.

These deprecation notices can be found on the MDN documentation, as a way of maintaining legacy documentation in case anyone might still need to reference them, but we should avoid using it completely.

In some cases, the deprecated feature might still appear to work in the browser. However since this is deprecated, the browser manufacturer will not provide any support for the feature in the future when it eventually stops working.

This concept extends over to any software and programming languages, where old features are occasionally pruned in favour of newer and more efficient ones.

## Broken images

When linking to any media using a file path, use the relative path instead of the absolute path.

An example of an absolute file path will be:

`C:/Users/nsh8/Documents/css_week1/images/cat.jpg`

We should use `images/cat.jpg` as the file path instead.

However, do also ensure that both your HTML file and the `images` folder exist in the same directory when using relative file paths.
