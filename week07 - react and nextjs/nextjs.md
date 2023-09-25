# NextJS

## Agenda

- have a in-class setting up tutorial and live coding demonstration to generate components
- let students try the setting up themselves
- can go through codesandbox in a subsequent lesson

## Setting up

```bash
npx create-next-app@latest my-app --js --use-npm --eslint --app --no-src-dir --no-tailwind --no-import-alias
```

TODO figure out why `--no-import-alias` does not work

https://nextjs.org/docs/app/api-reference/create-next-app#non-interactive

## Running in development mode

```bash
npm run dev
```

### `create-next-app` bootstrapping tool

Bootstrapping tools are tools that help us create a ready-made application, instead of having to assemble everything together by ourselves.

For instance, it comes with a preconfigured `package.json` file and installs the required dependencies on our behalf.

It also populates `app/page.js` with placeholder content, so we can see examples of how to work with Next.js features.

The alternative would be to manually add the required packages via `npm`, and add the scripts required to run Next.js scripts.

```bash
npm install next@latest react@latest react-dom@latest
```

Doing this would also mean we need to create our own entrypoint file `app/page.js`, which is desirable if we already know what we want to start with and do not want to spend time removing unwanted code.

# Appendix

## Optional learning

Allows you to understand how React.js abstractions were derived, but it is not necessary to understand it to use React.

Foundations

- From JavaScript to React
