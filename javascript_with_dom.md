# Javascript and the DOM

JS helps us achieve dynamic behaviour to webpages, by allowing us to add complex logic and functionality.

It allows us to update the webpage on the fly, based on our user's interactions.

## Topics

- Using JS to modify the DOM
- Event listeners

(TODO: first time using the word DOM, need to look at introducing it earlier)
JS's capability of making pages update dynamically stems from its ability to manipulate the DOM elements.

### Changing content of DOM elements

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
  </body>
</html>
```

Run the following JS code snippet in the browser's console.

```js
const myHeading = document.querySelector("h1");
myHeading.textContent = "Bye everyone!";
```

###

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
    <script>
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

      btn.addEventListener("click", function () {
        // change webpage's background to a random color
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
      });
    </script>
  </body>
</html>
```

## `querySelector`

Traditionally, there are a number of element selectors we can use:

- getElementById()
- getElementsByClassName()
- getElementsByName()
- getElementsByTagName()
- getElementsByTagNameNS()

While these are still functional and can be used, there is a much newer and elaborate Selector API `querySelector` we can leverage which allows mixed querying.

```js
// selecting the paragraph element
const pElement = document.querySelector("p");

// selecting an element with the class warning
const warningClassElement = document.querySelector(".warning");

// selecting an element with Id
const menuBarElement = document.querySelector("#menuBar");
```

### Compound queries

The real advantage of the querySelector is in being able to make compound queries with multiple selection criteria.

```html
<div class="user-panel main">
  <h1>Dashboard</h1>
</div>
<div class="user-panel sidebar">
  <h1>Options</h1>
</div>
```

```js
// selecting the h1 element that is nested within a div with classes user-panel and sidebar
const sidebarHeader = document.querySelector("div.user-panel.sidebar h1");
```

### Selecting multiple elements

As the name would suggest, `querySelectorAll` would select all elements fulfilling a criteria.

```js
// selecting all the paragraph elements
const pElements = document.querySelectorAll("p");
```

## Event listeners

Whenever something changes on the browser, an `event` is generated.

This can be from user interactions such as mouse clicks, moving the mouse, window resizing, etc.

We can listen to specific events, allowing our webpage to respond dynamically to the user.

### Attaching event listeners to elements

For example, we have seen how to add a `click` event listener to a button to make it interactable.

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  // change webpage's background to a random color
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

The anatomy of adding an event listener is as follows:

`<TARGET>.addEventListener(<EVENT>, <CALLBACK_FUNCTION>)`

For our example of having a `button` that listens to the `click` event:

Target: `btn`
Event: `"click"`
Callback Function:

```
function() {
  // change webpage's background to a random color
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
```

The supplied callback function does not execute until the event is fired.

### Listening to browser events

Let us try to separate the JS we have written into a separate file, and load it in the header.

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
    <script src="color.js"></script>
  </head>

  <body>
    <section>
      <button>Change color</button>
    </section>
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

btn.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

However, opening the browser console reveals the following error:

```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at color.js:13:5
```

`addEventListener` cannot be found in `null`, which means the `btn` is currently `null`.

This happens because HTML is loaded sequentially from top to bottom.

When the script `color.js` is loaded, the `button` element has not been loaded onto the DOM yet so it does not exist.

We can resolve this by listening to the `DOMContentLoaded` event, which is fired by the browser when the entire DOM has loaded.

Instead of using an existing element as our target, we should attach the event listener to the webpage's `document`.

The `document` object serves as an entry point into the DOM tree, so it already exists before the DOM is even loaded.

`color.js`

```js
document.addEventListener("DOMContentLoaded", function (event) {
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

  btn.addEventListener("click", function () {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  });
});
```

Alternatively, this issue with loading order can be resolved by having JS located at the bottom of the `body` as per the original example.

### Attaching listeners in the HTML element

We can also attach event listeners in the HTML element, rather than first selecting them with the `querySelector` and adding listeners with `addEventListener`.

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
    <script src="main.js"></script>
  </head>
  <body>
    <section>
      <button onclick="alert('Spam')">Spam</button>
      <button onclick="eggs()">Eggs</button>
    </section>
  </body>
</html>
```

`main.js`

```js
function eggs() {
  alert("Eggs");
}
```
