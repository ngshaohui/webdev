# Week 14 Exercise

TODO explore more possible tasks

## Activity 1

Given the following files, create it within your `my-app` application and check if the URL exists for the route handler.

### Task 1

Create the following file located in the directory

`app/api/hello/route.js`

```jsx
export async function GET(request) {
  // returns the string "Hello world!"
  return new Response("Hello world!");
}
```

Is it possible to access the route by making a request to

`GET http://localhost:3000/api/hello`
