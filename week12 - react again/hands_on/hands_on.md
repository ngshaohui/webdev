# Week 12 hands on: fetching data

## Activity 1: fetching with the SWR library

Since React has a nuanced way of maintaining state within an application, we can opt to use a library to accomplish our data fetching together with the component state management.

https://swr.vercel.app/

> Note: tasks 1 and 2 references the Getting Started section of the SWR documentation.
>
> Feel free to skip the tasks and follow the official documentation instead for a much more comprehensive overview.
>
> https://swr.vercel.app/docs/getting-started
>
> You are strongly encouraged to practice reading and following official documentation, and feel free to approach your tutor for help if you encounter any difficulty along the way.
>
> Otherwise, you can simply follow the instructions in this task for a much more concise set of instructions on what's needed for our activity.

### Task 1: Setting up

**Ensure that you are within the right folder before you do the install**

We will need to install the SWR library with NPM

```bash
npm install swr
```

### Task 2: Using SWR to fetch data

```jsx
import useSWR from "swr";

function Profile() {
  const IP_API_URL = "https://docs.freeipapi.com/request.html";
  const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return <div>hello {data.name}!</div>;
}
```

### Task 3: Fetching our IP information

## Activity 2: Fetching in vanilla JS
