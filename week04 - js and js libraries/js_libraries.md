# JS libraries

Libraries exist in every language, which contains pre-defined functions we can tap on.

This allows us to focus on other things like business logic, saving us immense amounts of time.

## Benefits to using libraries in general

Libraries

### Increase developer productivity

Since we do not need to reimplement code, we simply need to identify where to apply it.

Many libraries also come with tests written, so we know they are reliable to a certain extent (bugs can still exist).

### Code optimisation

We may also adopt libraries that we know are more performant.

This can be in the form of time the space and time required by the code to run, or even the file size added to our programs.

### Consistent development experience

If we have already used a library before, we can understand new codebases using the same library much faster.

## JS build-in objects

JS itself does not have a standard library like other languages.

Instead, it provides built-in objects with various methods which essentially functions as libraries.

One such object is `Math` which contains methods used for mathematical calculations.

```js
console.log(Math.PI); // 3.141592653589793
console.log(Math.max(27, 42, 7)); // 42
```

However, it has a very rich and robust ecosystem of user created libraries, plenty of which are open source.

## Using external libraries

We can either choose to include the library's URI in the `src` attribute, or download it and include it locally.

The scripts can be loaded in the `<head>` or at the end of the `<body>`.

Make sure to consult the library's installation guide when adding them.

### Load online resource

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Load online resource</title>
  </head>
  <body>
    <h1>content</h1>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  </body>
</html>
```

### Download library and include locally

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Include library locally</title>
  </head>
  <body>
    <h1>content</h1>
    <script src="assets/js/jquery-3.7.1.min.js"></script>
  </body>
</html>
```

For example, NP chooses to include their own jQuery library locally.

## Content Delivery Network

A Content Delivery Network (CDN) is a service that helps speed up content delivery.

Many web resources are hosted by

https://www.cloudflare.com/learning/cdn/what-is-a-cdn/

## Topics

- creating your own libraries, reusing code you have written
- how to use libraries

# Appendix

## Learning objectives

- why are libraries being used
- how to load JS libraries
- where to find JS libraries in a HTML document
