# Node Package Manager (npm)

## Topics

- Understanding Node and Google's V8 rendering engine
- node version manager (there's a windows one as well)
- open source libraries, can compare it with python's pip
- Supply chain attacks

## What is NodeJS

Browsers come with a JS engine, which allows JS to be run on web applications.

For example, Chrome comes with the V8 JS engine and Firefox comes with the SpiderMonkey JS engine.

NodeJS is a JS runtime which allows us to run JS outside of the browser, and is powered by the V8 JS engine.

It is primarily used for developers to write JS code to be run on server applications, instead of for just frontend.

Since NodeJS is not used for the frontend, it does not have a DOM to interface with since these are only exposed with the browser. However, it comes with features unavailable in the V8 engine, such as the ability to interface with the network (http) and also the filesystem.

https://nodejs.dev/en/learn/introduction-to-nodejs/

## Using NPM with NodeJS

Similar to how Python has a package manager PIP, NodeJS comes with a package manager NPM that allows users to install packages that have been published by other users. This can include official packages from big tech companies like Facebook for ReactJS, or independently published packages by developers for certain JS function libraries.

NPM is automatically bundled when installing NodeJS, since it grants us access to this huge array of JS libraries that can enhance our development process.

## Supply chain attacks

Depending on external libraries that we do not own will inadvertently increase the attack surface area of applications.

On the other hand, it is not feasible to write every single library by ourselves, nor can we ensure that the libraries we have written are free from bugs.

We should exercise caution when introducing dependencies, ensuring that they come from reputable sources and taking the time to audit the source code if possible.

Even so, this is complicated by how different versions of a library can be used, making it quite taxing to audit it each time. As such, projects might practice dependency pinning by specifying a SemVer, sometimes going as far as to maintaining their own cached copies of the required dependencies.

# Appendix

## Missing dependencies

Dependency is often described as a chain, since a single missing dependency can effectively break the entire chain upstream.

The most famous fiasco was caused by `left-pad`, when the developer abruptly removed his packages from `npm` causing major disruptions.

Countless packages such as React.js could not be installed since they depended on Babel, which had a direct dependency on `left-pad`.

<!-- prettier-ignore -->
```js
module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);

  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}
```

https://web.archive.org/web/20230828144115/https://www.theregister.com/2016/03/23/npm_left_pad_chaos/

The `left-pad` feature has since been incorporated as a built in function in JS called `padStart`.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
