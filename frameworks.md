# Frameworks (probably won't use)

Why are there so many competing frameworks?

Each framework might adhere to a particular design principle

Moving beyond JS libraries and onto web frameworks

We need to understand why JS libraries are insufficient and why web frameworks are gaining traction.

But first, we need to breakdown what is a web framework.

A web framework is just a collection of JS libraries, as well as various tools required to aid us in web development.

- compiler/transpiler
- development server (hot reload)
- linter
- router
- template generation?

## Compiler/transpiler and polyfill

With multiple competing browsers in the market, not all of them will support the same features.

In the past, it was also imperative to support Internet Explorer, which was the most used browser for a good amount of time.

Having transpiliers allowed developers to adopt modern features and paradigms in their development process, then being able to polyfill them for backwards or cross platform compatibility.

## Linters

Linting is done in the form of rules, to standardise the coding style across the codebase.
