# Javascript

Javascript (JS) is an interpreted language. Unlike languages like C where code is first compiled into machine code before execution, JS does not need to be compiled and should be run using an interpreter instead. This is similar to interpreted languages like Python.

The simplest way to evaluate JS is through your browser's console.

Each browser comes with a JS engine to allow a webpage to execute Javascript.

## Variables

For the duration of this course, we shall avoid using `var` to declare variables and opt to use `let` and `const` instead.

```js
const foo = 27;
const bar = "literal";
const baz = true;
```

### `const`

We can use the `const` keyword to declare constant variables.

These variables cannot be reassigned, and should be used for constant values wherever possible.

```js
const foo = "hello";
foo = "bye"; // Uncaught TypeError: Assignment to constant variable.
```

### `let`

The `let` keyword declares a reassignable variable.

These variables can be reassigned

```js
let foo = "hello";
foo = "bye";
console.log(foo); // bye
```

## `console.log`

The `console.log` function prints an output to the console. This is synonymous to the `print` function in Python or the `printf` function in `C` programming.

## Equality

When checking for equality between 2 values, always use the triple equals `===` to compare them instead of double equals `==`.

Since JS is a weakly typed language, we need to ensure that we always use strict equality checks to prevent unwarranted type conversions.

## Comments

We can denote comments in javascript using `//`.

When the interpreter encounters `//`, its contents will be ignored.

## Primitives

There are 7 primitives data types in JS.

These are the 5 most frequently encountered data types we will need to work with.

| Type      | typeof return value | Object wrapper |
| --------- | ------------------- | -------------- |
| null      | "object"            | N/A            |
| undefined | "undefined"         | N/A            |
| boolean   | "boolean"           | Boolean        |
| number    | "number"            | Number         |
| string    | "string"            | String         |

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

## Objects (part 1)

Objects in JS are denoted with curly braces `{}`.

It is used to store a collection of related data, known as properties.

Each of the object's properties are stored as key-value pairs.

This is similar to how dictionaries work in Python.

```js
const car = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

### Accessing properties

To access a property in an object, we need to use the key value.

#### Bracket notation

```js
console.log(car["make"]); // "Ford"
```

The bracket notation is also similar to the way Python retrieves values from its dictionaries, but it is less commonly encountered.

#### Dot notation

```js
console.log(car.make); // "Ford"
```

The dot notation of accessing property values is much more commonly used in most cases, since it is simpler to write.

### Key restrictions

Unlike Python, object keys in JS need can only be strings.

These 2 object declarations are synonymous:

<!-- prettier-ignore -->
```js
car = {
  "make": "Ford",
};
```

```js
car = {
  make: "Ford",
};
```

In the second declaration, JS will automatically convert `make` to a string `"make"`.

Since strings can be used as object keys, it is possible to use a string containing numbers and symbols.

```js
const car = {
  "foo-bar-7": "foo",
  "7-foo-bar": "bar",
};
```

When accessing the value, it is not possible to use the dot notation for such complicated keys.

```js
console.log(car.foo-bar-7);
// ReferenceError: bar is not defined
console.log(car.7-foo-bar);
// SyntaxError: Unexpected number
```

We can only rely on the bracket notation to retrieve the corresponding value.

```js
console.log(car["foo-bar-7"]); // "foo"
console.log(car["7-foo-bar"]); // "bar"
```

### Setting object properties

We can also add new properties to an existing object, after we have declared it.

```js
const car = {};
car.make = "Ford";
car["model"] = "Mustang";

console.log(person.name); // "Billy Mays"
console.log(person["model"]); // "Mustang"
```

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

## Array

Arrays in JS are denoted with square brackets `[]`.

```js
const xs = [1, 2, 3];
```

### Mutating the array

We may append additional elements to the back with the `push` method

```js
const xs = [1, 2, 3];
xs.push(4); // adds an element at the back of the list
console.log(xs); // [1, 2, 3, 4]
```

We may also insert elements to the front with the `unshift` method

```js
const xs = [1, 2, 3];
xs.unshift(4); // adds an element to the front of the list
console.log(xs); // [4, 1, 2, 3]
```

Alternatively, we can simply create a new array and use that instead

```js
const xs = [1, 2, 3];
const ys = [...xs, 4];
```

## Functions

```js
function identity(x) {
  return x;
}
identity(27);
```

Alternatively, we may also use ES6 arrow functions as well.

```js
const identity = (x) => {
  return x;
};
identity(42);
```

## Objects (part 2)

Object values can also be other objects, as well as functions.

```js
const person = {
  name: "Billy Mays",
  products: ["OxiClean", "Orange Glo", "Kaboom", "Zorbeez"],
  catchphrase: function () {
    return "Hi, Billy Mays here with another fantastic product";
  },
};

console.log(person.products[1]); // "Orange Glo"
console.log(person.catchphrase()); // "Hi, Billy Mays here with another fantastic product"
```

It is also common to see dictionaries nested within other dictionaries.

```js
const report = {
  data: {
    id: "1337",
    type: "report",
    attributes: {
      title: "XSS in login form",
      state: "new",
    },
  },
};

console.log(report.data.attributes.title); // "XSS in login form"
```

# Appendix

## Semicolons `;`

Do note that semicolons are optional.

You are encouraged to place them at the end of each line, but omitting them is acceptable.

## Variable and function naming

You are encouraged to adopt camelCase convetion as much as possible, but other styles are acceptable as long as you are consistent.

## Usage of `this`

This course shall avoid the use of `this` as much as possible since OOP is still being taught.

## Nested objects

Can demonstrate accessing object properties on VSCode with autocompletion.

## Autoboxing

Primitive values are not supposed to have any methods, but it is still possible to access their associated properties.

```js
const st = "this is a string primitive";

console.log(st.charAt(1)); // "h"
```

A `String` wrapper object will be created first, which contains the `charAt` method belonging to the `String` class.

Primitives are preferred over their class counterparts, as the latter incurs some overhead.

As much as possible, we can simply declare primitives, relying on autoboxing to do the heavy lifting for us.

https://stackoverflow.com/a/17256419
