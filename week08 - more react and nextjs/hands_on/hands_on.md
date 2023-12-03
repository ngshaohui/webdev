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

Referring to the `scripts` property of `package.json`, we see the following script:

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

We will continue working on the Next.js application `my-app` which we initialized during the previous week.

### Activity prerequisites

Before you start working on the hands-on activities, ensure that you have done the following:

1. Open the `my-app` folder within VSCode

2. Open a terminal within the `my-app` folder and run `npm run dev` to start the development server

### Task 1: create a second page

Create a new folder `app/about/`.

Within that folder, create a `page.jsx`.

Make sure that `app/about/page.jsx` has one default export.

![project structure](./hands_on_ss/about.png)
