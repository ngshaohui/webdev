# Week 7 hands-on

## Viewing this hands-on worksheet

To preview this hands-on worksheet in VSCode, do the following:

1. Open this file in VSCode

2. Press ctrl+shift+v to open the preview of this document

## Activity 1: Complete the implementation

We will be working with the `counter` project in the hands_on folder.

### Activity prerequisites

Before you start working on the hands-on activities, ensure that you have done the following:

1. Open the `counter` folder within VSCode

2. Open a terminal within the `counter` folder and run `npm run dev` to start the development server

### Task 1: attempting to run the project

Attempt to run the command `npm run dev`.

You should see an error similar to the following:

```
> counter@1.0.0 dev
> next dev

'next' is not recognized as an internal or external command,
operable program or batch file.
```

![npm run dev error](./hands_on_ss/npm_run_dev_error.png)

When seeing this error, it is likely that the `package.json` script we have run contains an error.

Referencing the `scripts` property of `package.json`, we see the following script:

`"dev": "next dev",`

This corresponds to the error we saw, about `next` not being recognized.

### Task 2: resolving the error

The error happens since `next` is a program that comes from our dependencies, which has not yet been installed.

To resolve this, we need to install the required packages listed within `package.json`:

```bash
npm install
```

This will generate the `node_modules/` folder.

### Task 3: running the development server

Other than the `node_modules/` folder, the `.next/` folder is also missing.

Start the development server:

```bash
npm run dev
```

This should generate the `.next/` folder, and start the development server on `http://localhost:3000`.

### Task 4: view the app

Go to [http://localhost:3000](http://localhost:3000) and view the application.

## Activity 2: Creating a multi-page application

We will continue working on the Next.js application `my-app` which we also worked with last week.

### Activity prerequisites

Before you start working on the hands-on activities, ensure that you have done the following:

1. Open the `my-app` folder within VSCode

2. Open a terminal within the `my-app` folder and run `npm run dev` to start the development server

### Task 1: create a second page

Create a new folder `app/about/`.

Within that folder, create a `page.jsx`.

Make sure that `app/about/page.jsx` has one default export.

![project structure](./hands_on_ss/about.png)

## Activity 3: Create an interactive search

We will continue working on the Next.js application `my-app` which we also worked with last week.

### Activity prerequisites

Before you start working on the hands-on activities, ensure that you have done the following:

1. Open the `my-app` folder within VSCode

2. Open a terminal within the `my-app` folder and run `npm run dev` to start the development server

### Task 1: Creating the template

Create a new page for this activity `app/namelist/page.jsx`.

Update your `Navbar` component from Activity 2 to include a link to this page.

```jsx
export default function App() {
  return (
    <div>
      <input />
    </div>
  );
}
```

View your page on the browser.

This should have created a page with an input element.

### Task 2: get input value

We want to add add an event listener for `keyup` to get our user's text input.

```jsx
export default function App() {
  function handleKeyUp(event) {
    const query = event.target.value;
    console.log(query);
  }
  return (
    <div>
      <input onKeyUp={handleKeyUp} />
    </div>
  );
}
```

Open the console and type something into the input field.

It should echo your input accordingly.

![input being logged in console](./hands_on_ss/echo.png)

### Task 3: rendering a list of names

Let us add some names to be rendered as a list.

```jsx
const NAMES = [
  "Andrea",
  "Billie",
  "Clara",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Katherine",
  "Leo",
  "Mia",
  "Nathan",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Samuel",
  "Taylor",
  "Ursula",
  "Victor",
  "Wendy",
  "Xander",
  "Yvonne",
  "Zachary",
];

export default function App() {
  function handleKeyUp(event) {
    const query = event.target.value;
    console.log(query);
  }
  return (
    <div>
      <input onKeyUp={handleKeyUp} />
      <ul>
        {NAMES.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
```

### Task 4: adding state

We can add state to our component, to store a subset of names to display on our application.

This will require us to use the `"use client"` directive in our component, since we are using a React hook.

In order to use the `useState` hook, we will need to import it from the `"react"` library.

We will also change the reference array from which we render the list of names.

```jsx
"use client";

import { useState } from "react";

// names omitted

export default function App() {
  const [filteredNames, setFilteredNames] = useState(NAMES);
  function handleKeyUp(event) {
    const query = event.target.value;
    console.log(query);
  }
  return (
    <div>
      <input onKeyUp={handleKeyUp} />
      <ul>
        {filteredNames.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
}
```

View your app on the browser and make sure that it doesn't contain any errors.

### Task 5: filtering our query

```jsx
function handleKeyUp(event) {
  const query = event.target.value;
  setFilteredNames(NAMES.filter((name) => name.includes(query)));
}
```

Try out our application, it should filter the list of names rendered below.

![names being filtered based on input](./hands_on_ss/filter.png)

### (Bonus) Task 6: case sensitivity

Try making the search case insensitive.

![names being filtered based on input but case insensitive](./hands_on_ss/filter_insensitive.png)

### (Bonus) Task 7: throttle

A consideration for UX designers is to wait for a user to stop typing before updating a display.

We can wait (e.g. 200ms) for the user to stop typing, before displaying the results.

This is one of the ways which we can prevent the display from overwhelming the user with the number of changes.

Add a throttle to the event handler, so that it throttles the display update.

Hint: explore the `setTimeout` function

Hint: alternatively, lodash has a relevant function to handle this

### (Bonus) Task 8: efficient transition

Adding and removing DOM elements are actually more computational expensive and undesired if we just want to update what shows in our list.

Use CSS to hide the elements being filtered, instead of changing what the DOM renders.

Hint: `display: none;`

Hint: CSS classes can be changed conditionally

```jsx
<li className={shouldShow ? styles.hide : styles.show}>Charlie Tan</li>
```

## Submission

Submit your `my-app` folder which should contain activites 2 and 3.

The tasks marked (bonus) are optional to submit.

Follow the submission criteria from week 7:

1. The `.next/` and `node_modules/` folder should not be included
2. Make sure to name the zip file with your class, student id, and name
3. Do not submit unnecessary files such as the powerpoint slides
