// q1: convert this function declaration to es6 function expression
// name the function fooEs6
function foo(a, b, c) {
  return a * b + c;
}

// q2: convert the es6 function expression to a standard function declaration
const barEs6 = () => {
  console.log("it works");
};

// q3: access the nested "value" property of the object using the
// (1) dot notation
// (2) bracket notation
const savedSettings = {
  userSettings: {
    adPreference: {
      showAds: {
        value: false,
      },
      lastUpdated: "2023-07-27",
    },
  },
  siteSettings: {
    theme: "dark",
  },
};

// q4: set the third element of the array to 27
const arr = [0, 1, 2, 3, 4, 5];

// q5: write a loop that prints out the numbers 5 to 15

// q6: convert the following if else statement to use the ternary operator
if (isGood(weather) && isSunday(day)) {
  console.log("beach day");
} else {
  console.log("stay home day");
}

// q7: use the push method to append the number 5 to the back of the array
const pushArr = [0, 1, 2, 3, 4];

// q8: use the concat method to create a new array with the element 5 at the back
// name the new array newConcatArr
const concatArr = [0, 1, 2, 3, 4];

// q9: for each of the snippets below, write down what they evaluate to

// [1, 2, 3] === [1, 2, 3]

// {foo: "bar"} === {foo: "bar"}

// "qwerty" === 'qwerty'

// 7 === "7"

// const obj = ['maybe']
// obj === obj

// (bonus) q10: write a function that takes in an array, and sets all the array's elements to 0
// name the function makeElements0

// (bonus) q11: write a function that checks if 2 arrays are equal
// you may assume that the array has a depth of 1 (does not contain any nesting), and only contains primitives (no objects)
// name the function isEqualArrays
