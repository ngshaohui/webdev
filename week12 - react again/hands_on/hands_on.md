# Week 12 hands on: fetching data

## Activity 1: Viewing network activity in devtools

### Task 1: Network activity in devtools

Open the devtools and navigate to the network activity tab.

### Task 2: View the network activity for Google Maps

Visit Google Maps.

https://maps.app.goo.gl/TjDJcuFJTnfGFWBh7

![network tab with img filter turned on](./hands_on_ss/network_filter_img.png)

Scroll around the map, and see what requests are being made.

### Task 3: View network activity for Reddit

Visit https://www.reddit.com/r/Jokes/

Change the filter to Fetch/XHR.

Scroll to the bottom of the page, and observe the new requests that are being made as new posts are loaded.

### Task 4: View network activity for Youtube

Visit https://www.youtube.com/

Scroll to the bottom of the page, and observe the new requests that are being made as new videos are loaded.

### Task 5: View network activity for NP's website

Visit https://www.np.edu.sg/

Scroll the page, do you observe any new requests being made?

### Debrief

Not all data being returned from APIs are JSON.

The data being fetched from Reddit's API is from a GrahQL backend.

Static pages (NP's website) also do not fetch new data unlike dynamic pages.

## Activity 2: fetching with the SWR library in React

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

For this activity, we will be fetching data from https://freeipapi.com/

```jsx
import useSWR from "swr";

// use vanilla fetch as fetcher
// deserialize the fetched data as json
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const IP_API_URL = "https://freeipapi.com/api/json/";
  const { data, error, isLoading } = useSWR(IP_API_URL, fetcher);

  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  // render data
  return <div>Your IP is {data.ipAddress}</div>;
}
```

### Task 3: Fetching our IP information

https://docs.freeipapi.com/response.html

Refer to the docs to display more properties in the JSON data being returned:

1. City name
2. Continent
3. Time zone

## Activity 3: Bootstrap component library

TODO

## (Bonus) Activity 4: Using fetch API to fetch data in React

Without using the SWR library, use only the vanilla `fetch` browser API and React's `useEffect` hook to accomplish activity 2.
