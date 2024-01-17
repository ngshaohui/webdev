# Environment variables

In general, we should avoid embedding sensitive information within our source code.

Some examples of sensitive information are

- user credentials
- API keys

The convention is to locate these variables within the `.env.*` files instead, to be loaded into the environment variables.

## `.env.*` files

When developing locally, the convention is to put the environment variables within `.env.local` file.

This file is then loaded into the env variables of the process.

The glob `.env.*` is usually added to the `.gitignore` file so that it is not committed to the remote repository.

## `.env.*.example`

On the other hand, the glob `!.env.*.example` is used to specify that the example env files should still be committed to the remote repositories.

## Next.js environment variables

https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables

If a `env.local` file is present in the project's folder (on the same level as the app/ folder), this will be automatically loaded into the env variables of the process.

### Reading environment variables

`.env.local`

```
SENSITIVE_API_KEY=4NU4F
```

`route.js`

```js
export async function GET(req) {
  const res = await fetch(URL, {
    headers: {
      AccountKey: process.env.SENSITIVE_API_KEY,
    },
  });
  const data = await res.json();
  return Response.json(data);
}
```

# Appendix

## Non-sensitive environment variables

TODO talk about moving domains to the env to deploy values for different apps.
