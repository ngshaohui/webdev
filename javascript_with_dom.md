# Javascript and the DOM

## Topics

- Using JS to modify the DOM
- Event listeners

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

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
  </head>
  <body>
    <section>
      <button>Change color</button>
    </section>
    <script src="color.js"></script>
  </body>
</html>
```

`color.js`
```js
const btn = document.querySelector("button");

/**
 * Returns a random number from 0 to the given upper limit
 *
 * @param {number} upperLimit The maximum range
 * @return {number} The randomly selected number
 */
function random(upperLimit) {
  return Math.floor(Math.random() * (upperLimit + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```
