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

## Objects

In JS, anything that is not a primitive data type is an object.

Objects in JS are denoted with curly braces `{}`.

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

# Appendix

## Semicolons `;`

Do note that semicolons are optional.

You are encouraged to place them at the end of each line, but omitting them is acceptable.
