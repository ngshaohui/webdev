# Cookies and storage

A website can store data on a user's browser to allow users to get a consistent experience whenever they revisit it.

We can view what data is stored on the browser by on the "Application" tab of the browser's developer tools.

## Cookies

In order to access cookies, we need to serve our pages over a webserver.

Cookies are primarily used for session management.

The cookies initially sent from the server to the client via the `Set-Cookie` header, as part of its Response to a client's Request.

Each time the client issues a Request to the server, it will also send the cookies as part of its Request headers.

It contain data such as a client's session ID, so that the server can identify requests coming from the same client.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

### Example

- Session ID

## Storage API: `localStorage`

Local storage offers a way for a website to store persistent data.

```js
localStorage.setItem("key", "value");
const cat = localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
```

The `localStorage` object takes a key-value pair to be stored.

Both the key and value have to be strings.

### Storing non strings

If we need to store objects, we can opt to first serialize it with `JSON.stringify()` and then use `JSON.parse()` to convert it back to an object.

```js
const USER_SETTINGS_KEY = "userSettings";

// saving
const settings = { theme: "dark", volume: 0.5, mute: false };
localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(settings));

// retrieving
const savedSettingsStr = localStorage.getItem(USER_SETTINGS_KEY);
const savedSettings = JSON.parse(savedSettingsStr);
```

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

### Example

- User settings

## Storage API: `sessionStorage`

Compared to local storage, session storage is only stored until the end of a user's session.

When the web browser, or all tabs of a webpage are closed, this clears the objects stored in `sessionStorage`.

```js
sessionStorage.setItem("key", "value");
let data = sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
```

Note that, the API to interact with `sessionStorage` is completely the same as for `localStorage`.

https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

### Example

- Incomplete form fields

## Access to storage

The browser sandboxes the data that has been stored according to its origin.

This effectively means that website A cannot access data stored by website B.

## Lifespan of stored data

Do note that data stored on the browser may not always be persistent, so we should not always rely on it existing.

Users may choose to clear their browser data, or even edit it to contain invalid data.

The lifespan can also be dependent on the browser's implementation.

Apple's iOS Safari will clear storage data after 7 days if the user does not interact with the site before then.

https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/

# Appendix

## Cookies from other origins

Why do we see cookies from website B when we open the storage for website A?

TODO

## Offline usage

Another popular use case is to allow the website to be used even while the user is offline.

https://youtube.com/

https://devdocs.io/

### Incognito

When browsing in incognito mode, the cookies and storage data are only cleared when the incognito window has been closed.

## Other storage methods

Do note that other than the 3 types of data store we have explored, there are also newer storage methods such as indexedDB and Web SQL.

Each storage method exists to solve a specific use case, and it is common to see them being used in conjunction with each other.

## Demonstrate real world use of `localStorage`

On the browser, open the developer tools and navigate to the application tab to view stored data.

https://www.reddit.com/
cookies, local, and session storage

https://nextjs.org/learn/foundations/about-nextjs
cookies and local storage

## Learning objectives

- Understand how data is stored on the browser
- Understand what data is stored on the browser
- Understand how to retrieve data stored on the browser
- Understand different types of storage on the browser
