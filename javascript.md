# Javascript

Javascript (JS) is an interpreted language. Unlike languages like C where code is first compiled into machine code before execution, JS does not need to be compiled and should be run using an interpreter instead. This is similar to interpreted languages like Python.

The simplest way to evaluate javascript is through your browser's console.

## Variables

For the duration of this course, we shall avoid using `var` to declare variables and prefer to use `let` and `const` instead.

```js
const foo = 27;
const bar = 'literal';
const baz = true;
```

### `const`

We can use the `const` keyword to declare constant variables.

These variables cannot be reassigned, and should be used for constant values wherever possible.

```js
const foo = 'hello';
foo = 'bye';  // Uncaught TypeError: Assignment to constant variable.
```

### `let`

The `let` keyword declares a reassignable variable.

These variables can be reassigned

```js
let foo = 'hello';
foo = 'bye';
console.log(foo);  // bye
```

## `console.log`

The `console.log` function prints an output to the console. This is synonymous to the `print` function in Python or the `printf` function in `C` programming.

## Comments

We can denote comments in javascript using `//`.

When the interpreter encounters `//`, its contents will be ignored.

## Array

Arrays in javascript are denoted with square brackets `[]`

```js
const xs = [1, 2, 3];
```

### Mutating the array

We may append additional elements to the back with the `push` method

```js
const xs = [1, 2, 3];
xs.push(4);  // adds an element at the back of the list
console.log(xs);  // [1, 2, 3, 4]
```

We may also insert elements to the front with the `unshift` method

```js
const xs = [1, 2, 3];
xs.unshift(4);  // adds an element to the front of the list
console.log(xs);  // [4, 1, 2, 3]
```

Alternatively, we can simply create a new array and use that instead

```js
const xs = [1, 2, 3];
const ys = [...xs, 4];
```

## Functions

```js
function identity(x) {
    return x
}
identity(27);
```

Alternatively, we may also use ES6 arrow functions as well.

```js
const identity = (x) => {
    return x
}
identity(42);
```

## Modifying DOM elements

## Event listeners



# Appendix

## Semicolons `;`

Do note that semicolons are optional.

You are encouraged to place them at the end of each line, but omitting them will not be penalised.
