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

We can use `/* */` to write multiline comments.

```js
// comment

/*
multi-line
comment
*/
```

## Primitives

There are 7 primitive data types in JS.

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

Unlike Python, object keys in JS need can only be strings or numbers.

Since strings can be used as object keys, it is possible to use a string containing numbers and symbols.

```js
const obj = {
  foo: "foo",
  0: "bar",
  "foo-bar-27": "baz",
  "27-foo-bar": "foobar",
};
```

When using a number, JS will automatically convert the number `0` to a string `"0"`.

```js
console.log(obj[0]); // "bar"
console.log(obj["0"]); // "bar"
```

When accessing a key with symbols, it is not possible to use the dot notation.

```js
console.log(obj.foo-bar-27);
// ReferenceError: bar is not defined
console.log(obj.27-foo-bar);
// SyntaxError: Unexpected number
```

We can only rely on the bracket notation to retrieve the corresponding value.

```js
console.log(obj["foo-bar-27"]); // "baz"
console.log(obj["27-foo-bar"]); // "foobar"
```

### Setting object properties

We can also add new properties to an existing object, after we have declared it.

```js
const car = {};
car.make = "Ford";
car["model"] = "Mustang";

console.log(car.make); // "Ford"
console.log(car.model); // "Mustang"
```

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

## Array

Arrays in JS are denoted with square brackets `[]`.

```js
const xs = [1, 2, 3];
console.log(xs[1]); // 2
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
xs.unshift(0); // adds an element to the front of the list
console.log(xs); // [0, 1, 2, 3]
```

We can use `concat` to merge arrays.

It does not mutate the existing array, and returns a new array instead.

```js
const xs = [1, 2, 3];
console.log(xs.concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(xs); // [1, 2, 3]
```

This allows us to create a new array and use that instead, while maintaining the original value of `xs`.

```js
const xs = [1, 2, 3];
const ys = xs.concat(4);
console.log(xs); // [1, 2, 3]
console.log(ys); // [1, 2, 3, 4]
```

## Functions

```js
function identity(x) {
  return x;
}
identity(27); // 27
```

Another way to declare functions is to use ES6 arrow functions.

```js
const identity = (x) => {
  return x;
};
identity(42); // 42
```

Both syntax are equally common, and often used in conjunction with each other.

However, do note that arrow functions are not hoisted.

## Strings

Strings are denoted with single `'` or double `"` inverted commas.

Similar to arrays, we can reference characters at a specific position.

```js
const st = "Hello world";
console.log(st[1]); // e
```

Unlike arrays they are immutable.

```js
const st = "Hello world";
st[1] = "p";
console.log(st[1]); // Hello world
// st remains unchanged
```

### Template literals

We can also declare strings using backticks `` ` `` to create a template literal.

```js
const st = `Hello world`;
```

When declaring a string using backticks `` ` ``, it is possible to evaluate JS expressions.

```js
const product = "apples";
const quantity = 27;
const st = `There are ${quantity * 2} ${product}`;
console.log(st); // There are 54 apples
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

## Control flow: `if else`

`if` and `else` statements can be used to alter the control flow of code.

```js
const foo = 27;
if (foo == 7) {
  console.log("foo is 7");
} else if (foo == 42) {
  console.log("foo is 42");
} else {
  console.log(`foo is ${foo}`);
}
```

### Ternary operator

The ternary operator can be used as a shorter form of `if else` statements.

It is best used in place of conditions involving only `if` and `else` statements (no `else if`).

```js
const foo = 27;
if (foo == 7) {
  console.log("foo is 7");
} else {
  console.log(`foo is ${foo}`);
}
```

The equivalent for the above would be:

```js
const foo = 27;
foo == 7 ? console.log("foo is 7") : console.log(`foo is ${foo}`);
```

It is possible to use the ternary operator for more complicated statements, but it risks becoming unreadable.

```js
if (foo == 7) {
  console.log("foo is 7");
} else if (foo == 42) {
  console.log("foo is 42");
} else {
  console.log(`foo is ${foo}`);
}

foo == 7
  ? console.log("foo is 7")
  : foo == 42
  ? console.log("foo is 42")
  : console.log(`foo is ${foo}`);
```

### Usage with template literals

Since template literals can take JS expressions, it is possible to use ternary operators there.

```js
function greet(name = "") {
  return `Hello ${name !== "" ? name : "somebody"}`;
}
greet("bob"); // Hello bob
greet(); // Hello somebody
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

# Appendix

## `console` is an object

Since `console` is an object, it is possible to use the brackets notation to call its methods.

```js
console["log"]("Hello world");
```

## Spread operator `...`

For objects `{}` and arrays `[]`, we may use the spread operator `...` to destructure them.

This is used for quickly passing multiple values into a function or object that expects multiple arguments.

It works by expanding the array into its constituting elements.

### Usage with arrays

When declaring arrays, we can specify the elements we want to initialise it with.

```js
const xs = [1, 2, 3];
```

If we want to create another array based off an existing one, we can use the spread operator to accomplish it.

```js
const xs = [1, 2, 3];
const ys = [...xs];
console.log(ys); // [1, 2, 3]
```

This would be synonymous to specifying that we want the new array `ys` to use all the elements of `xs`.

```js
// synonymous form
const xs = [1, 2, 3];
const ys = [xs[0], xs[1], xs[2]];
```

This makes it easier to prepend or append elements to the array.

```js
const xs = [1, 2, 3];
const ys = [...xs, 4, 5]; // append to the back
console.log(ys); // [1, 2, 3, 4, 5]
const zs = [0, ...xs];
console.log(zs); // [0, 1, 2, 3]
```

We can also concatenate multiple arrays.

```js
const xs = [1, 2, 3];
const ys = [4, 5, 6];
const zs = [...xs, ...ys];
console.log(zs); // [1, 2, 3, 4, 5, 6]
```

### Usage with objects

Similar to arrays, we can create new objects based off existing ones.

```js
const obj1 = {
  foo: 27,
  bar: 42,
};
const obj2 = { ...obj1 };
```

With the spread operator, we can choose to replace specific properties.

```js
const obj1 = {
  foo: 27,
  bar: 42,
};
const obj2 = { ...obj1, foo: 7 };
console.log(obj2); // {foo: 7, bar: 42}
```

Do note that the object being referenced has to be the first argument in the new object, as we need to destructure it first before overwriting its properties.

```js
const obj1 = {
  foo: 27,
  bar: 42,
};
const obj2 = { foo: 7, ...obj1 }; // this will NOT overwrite property foo
console.log(obj2); // {foo: 27, bar: 42}
```

We can also merge multiple objects.

```js
const obj1 = {
  foo: 27,
  bar: 42,
};
const obj2 = {
  spam: 7,
  bar: 99,
};
const obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3); // {foo: 27, bar: 99, spam: 7}
```

### Usage with functions

We can use the spread operator to pass in multiple arguments.

```js
let ls = [27, 42, 7];
Math.max(...ls); // 42
// this is the same as writing add(ls[0], ls[1], ls[2])
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

It is possible to have a function that takes in an indefinite number of arguments.

```js
function indefiniteArgs(first, ...remainder) {
  console.log(`The first argument is: ${first}`);
  console.log(`The rest of the arguments are: ${remainder}`);
}
indefiniteArgs(1, 2, 3, 4, 5);
// The first argument is: 1
// The rest of the arguments are: 2,3,4,5
```

### Iterables

Objects and lists are not the only data structures that can be destructured.

Any iterable object can also be destructured.

```js
const st = "apple"; // string
const ls = [...st];
console.log(ls); // ['a', 'p', 'p', 'l', 'e']
```

## Destructuring objects and lists

An object can be destructured and have its properties assigned to variables.

```js
const car = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
const { carModel: model, year } = car;
console.log(carModel); // "Mustang"
console.log(year); // 1969
```

`const { carModel: model }` declares a `const` variable named `carModel`, assigning it to the value of `car.model`.

`const { year }` is a shorthand for declaring a `const` variable named `year`, assigning it to the value of `car.year`.

The same can be done for lists.

```js
const ls = [0, 1, 2];
const [first, second, third] = ls;
console.log(second); // 1
```

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

## Control flow: `for`

### `for...of`

```js
const foodList = ["spam", "eggs", "bacon"];
for (item of foodList) {
  console.log(item);
}
```

### `for` ... `let`

```js
for (let i = 0; i < 10; i++) {
  console.log(`Iteration number ${i}`);
}
```

[x] functions and arrow functions
[x] objects
[ ] arrays and array methods
[x] destructuring
[x] template literals
[x] ternary operators
[ ] modules and import/export
