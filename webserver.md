# Webserver

In the context of webpages, a `server` refers to a software whose responsibility is to "serve" up webpages requested by a client.

In our case, the client would refer to a web browser.

## Python `http.server`

Python3 comes with a webserver we can use for development purposes.

```bash
python -m http.server
```

This will run a HTTP server on port 8000 by default.

We can access the webpages served by navigating to `http://localhost:8000/` on our browser.

## Serving pages

### `index.html`

By default, requesting for the root address `/` will cause the webserver to serve the `index.html` file.

If no such file is present, it will list the directory's contents instead.

### Other pages

To request for other webpages, we can specify the file path for it.
