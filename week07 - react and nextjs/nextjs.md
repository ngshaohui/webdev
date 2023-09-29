# NextJS

This module shall be using Next.js 13.

## Agenda

- have a in-class setting up tutorial and live coding demonstration to generate components
- let students try the setting up themselves
- can go through codesandbox in a subsequent lesson

## Setting up

```bash
npx create-next-app@latest my-app --js --use-npm --eslint --app --no-src-dir --no-tailwind
```

https://nextjs.org/docs/app/api-reference/create-next-app#non-interactive

When prompted to install `create-next-app`, press enter to continue.

```
C:\Users\nsh8\Documents>npx create-next-app@latest my-app --js --use-npm --eslint --app --no-src-dir --no-tailwind --no-import-alias
Need to install the following packages:
  create-next-app@13.5.3
Ok to proceed? (y)
? Would you like to customize the default import alias? » No / Yes
```

When prompted to customize the default import alias, press enter to select `no` as the default.

Note that there is no option to select an option for `import-alias` from the terminal, as referenced from the source code.

### `create-next-app` bootstrapping tool

Bootstrapping tools are tools that help us create a ready-made application, instead of having to assemble everything together by ourselves.

For instance, it comes with a preconfigured `package.json` file and installs the required dependencies on our behalf.

It also populates `app/page.js` with placeholder content, so we can see examples of how to work with Next.js features.

The alternative would be to manually add the required packages via `npm`, and add the scripts required to run Next.js scripts.

```bash
npm install next@latest react@latest react-dom@latest
```

Doing this would also mean we need to create our own entrypoint file `app/page.js`, which is desirable if we already know what we want to start with and do not want to spend time removing unwanted code.

## Project structure

Upon initialising the project, it should have the following project structure:

```
my-app/
├─ .next/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ page.module.css
├─ node_modules/
├─ public/
│  ├─ next.svg
│  ├─ vercel.svg
├─ .eslintrc.json
├─ .gitignore
├─ jsconfig.json
├─ next.config.json
├─ package-locak.json
├─ package.json
├─ README.md
```

### Rename JSX files from `.js` to `.jsx`

Rename the file at `my-app/app/page.js` to `my-app/app/page.jsx`, changing the file extension.

Do the same for `my-app/app/layout.js`, renaming it to `my-app/app/layout.jsx`.

While it is possible to have a JSX component in a file with a `.js` extension, we should opt to use `.jsx` whenever possible.

This gives us better clarity in the purpose of the file, to know at a glance that it exports a JSX component.

## Running in development mode

Use `npm run dev` to start the development server.

```bash
npm run dev
```

By default, Next.js will attempt to start a dev server on port 3000.

We can visit http://localhost:3000 on our browser to view our web app.

```
C:\Users\nsh8\Documents\webdev\temp\my-app>npm run dev

> my-app@0.1.0 dev
> next dev

  ▲ Next.js 13.5.3
  - Local:        http://localhost:3000
```

### Hot module reloading

After making any changes, remember to save the file that you are editing.

The changes be reflected without having to refresh the page, or restarting the development server.

## Entrypoint

```
my-app/
├─ app/
│  ├─ page.jsx
```

To start making changes to the app, edit the file `my-app/app/page.jsx`.

# Appendix

## Optional learning

Allows you to understand how React.js abstractions were derived, but it is not necessary to understand it to use React.

Foundations

- From JavaScript to React
