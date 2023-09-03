# JS build tools: compilation/transpilation

JS transpilers are one of the many build tools in our JS ecosystem.

In programming, compilation refers to the process of transforming source code into a different form.

Transpilation is a more specific form of compilation, where we take source code and transform it into another form of source code.

This can be synonymous to taking text from a Shakespeare's play written in old English and transforming the words he uses into modern English (Where art thou -> Where are you), as in both scenarios the language remains as English.

In our case, we transpile JS to ensure that the code we have written are compatible across different browsers, as well as to compress it to reduce the overall file size.

Here are some of the functions of a JS transpilation tool:

- minification
- obfuscation
- tree shaking
- bundling

## Speedy Web Compiler (SWC)

Under the hood, Next.js relies on SWC to transpile its javascript from JSX to JS.

For this assignment, we shall try to use SWC to transpile JS.

## Set up

Create a folder called js-transpile and navigate to it in the terminal.

```bash
mkdir js-transpile
cd js-transpile
```

Initialise the folder as a npm repository.

```bash
npm init
```

Agree to the default options presented by pressing enter for each of the steps.

Install the SWC packages.

```bash
npm i -D @swc/cli @swc/core
```

Add a npm script to allow us to transpile our JS with the SWC tool.

```json
{
  ...
  "scripts": {
    "transpile": "swc ./src/test.js -o ./build/output.js"
  }
  ...
}
```

## Transpilation

TODO simple JS source code file

Run the transpilation process with the command we have written.

```bash
npm run transpile
```

This should produce a transpiled JS file in `./output/output.js`.

### Part 1: transpiling with minification

By default, SWC will only transpile the source code to ES5.

We will need to add a configuration file to enable minification.

`.swcrc`

```json
{
  "minify": true
}
```

Run the transpile script again and answer each of the questions below.

### Part 2: with mangling

`.swcrc`

```json
{
  "minify": true,
  "jsc": {
    "minify": {
      "mangle": true
    }
  }
}
```

Run the transpile script again and answer each of the questions below.

### Part 3: with unused

`.swcrc`

```json
{
  "minify": true,
  "jsc": {
    "minify": {
      "compress": {
        "unused": true
      },
      "mangle": true
    }
  }
}
```

Run the transpile script again and answer each of the questions below.

## Questions

Answer each of the following questions in less than 50 words.

What are some of the most immediate differences you notice between the source and transpiled files?

Are the comments still present after minification? Why?

Which variable and function names are retained after minification? Why?

Are all the variables and functions still present after minification? Why?

## Learning objectives

1. Hands-on experience with npm project
2. Hands-on experience with npm script
3. Understand how minification works
4. Understand how obfuscation of JS files are done
5. Understand that comments will be removed during minification
6. Understand that unused code can be removed from source file during minification
