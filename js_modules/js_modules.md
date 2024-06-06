# JS Modules

JavaScript files traditionally do not support imports, but support was added in ES6.

As such, this requires us to declare our JS files as using modules

## Multiple files

Having modules allows us to split up our code into different files, co-locating code according to its responsibility or classification.

TODO use more realistic module names

```
app/
├─ index.html
├─ modules/
│  ├─ lib-a.js
│  ├─ lib-b.js
│  ├─ lib-c.js
```

## Imports and exports

`lib-a.js`

```js
export function hello() {
  console.log("hello from A");
}

function johnCena() {
  console.log("you can't see me");
}
```

`lib-b.js`

```js
import { hello } from "./lib-a";

hello(); // "hello from A"

import { johnCena } from "./lib-a.js"; // no such function
```

Values within a JS file need to be explicitly exported in order for other modules to import it.

## Serving HTML files with modules

TODO rephrase context - this only happens within the JS files that have relative imports.
If the `<script type="module">` is a inline JS it does not trigger this warning

```
Access to script at 'file:///C:/Users/shaohui/Documents/webdev/js_modules/main.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
```

Have to serve it with a webserver like python http server.

## Scopes

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Load JS module</title>
  </head>
  <body>
    <script type="module">
      function foo() {
        console.log("foo");
      }
    </script>
    <script>
      function bar() {
        console.log("bar");
      }
    </script>
  </body>
</html>
```

The function `bar` is available in the global scope but not `foo`.

Able to test this out by viewing the HTML files in the browser and trying to call the functions from the console.
