# Javascript and the DOM

(TODO: first time using the word DOM, need to look at introducing it earlier)
Javascript's capability of powering the web stems from its ability to manipulate the DOM elements.

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
  </head>
  <body>
    <section>
      <h1>Hello world!</h1>
    </section>
    <script src="main.js"></script>
  </body>
</html>
```

`main.js`
```js
const myHeading = document.querySelector("h1");
myHeading.textContent = "Bye everyone!";
```
