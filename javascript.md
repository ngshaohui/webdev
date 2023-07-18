# Javascript

Javascript (JS) is an interpreted language. Unlike languages like C where code is first compiled into machine code before execution, JS does not need to be compiled and should be run using an interpreter instead. This is similar to interpreted languages like Python.

The simplest way to evaluate javascript is through your browser's console.

## Variables

```js
const foo = 27
const bar = 'literal'
const baz = true
```

## `console.log`

The `console.log` function prints an output to the console. This is synonymous to the `print` function in Python or the `printf` function in `C` programming.

## Comments

We can denote comments in javascript using `//`.

When the interpreter encounters `//`, its contents will be ignored.

## Array

Arrays in javascript are denoted with square brackets `[]`

```js
const xs = [1, 2, 3]
```

We may append additional elements with the `push` method

```js
const xs = [1, 2, 3]
xs.push(4)  // adds an element at the back of the list
console.log(xs)  // [1, 2, 3, 4]
```
