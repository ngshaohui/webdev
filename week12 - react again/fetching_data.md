# Fetching data

Javascript allows us to have dynamic content by fetching resources over the internet on demand.

Rather than fetching a new page from the server each time to show a different piece of information, we can choose to fetch a specific resource and update just update a small portion of the existing page instead.

Since we are choosing specific resources to fetch instead of a whole page, this greatly speeds up the user's ability to interact with the page.

## fetch

### await

```html
<h1></h1>
<script type="module">
  const response = await fetch("https://freeipapi.com/api/json/");
  if (response.status === 200) {
    const ipData = await response.json();
    document.querySelector("h1").textContent = ipData.ipAddress;
  } else {
    console.error("Failed to fetch IP data");
  }
</script>
```

When using vanilla JS, we will need to declare our JS script as a module.

### Importing JS as modules

We can import JS as modules by indicating `type="module"` in our import.

```js
// script.js
console.log("hello from imported JS module");
```

```html
<!-- index.html -->
<body>
  <script type="module">
    console.log("hello from inline JS module");
  </script>
  <script type="module" src="script.js"></script>
</body>
```

## JSON

JavaScript Object Notation (JSON) derives from JS objects, and is the most popular format for API requests and responses to pass data.

When viewing the headers for the response, it has the header `Content-Type: application/json`.

The body of the response is as follows:

```json
{
  "area_metadata": [
    {
      "name": "Ang Mo Kio",
      "label_location": { "latitude": 1.375, "longitude": 103.839 }
    }
  ],
  "api_info": { "status": "healthy" },
  "items": [
    {
      "update_timestamp": "2023-08-17T00:43:52+08:00",
      "timestamp": "2023-08-17T00:30:00+08:00",
      "valid_period": {
        "start": "2023-08-17T00:30:00+08:00",
        "end": "2023-08-17T02:30:00+08:00"
      },
      "forecasts": [
        { "area": "Ang Mo Kio", "forecast": "Partly Cloudy (Night)" }
      ]
    }
  ]
}
```

(do note that the rest of the regions other than Ang Mo Kio have been omitted for brevity)

TODO: explain how similar JSON and JS Objects are, how to convert them

### JSON Deserialization

```js
const json = '{"message": "Hello world", "errors": []}';
const obj = JSON.parse(json);
```

TODO explain JSON as strings

### XML

Another popular format to receive data is in XML, which is what the X in AJAX stands for.

```xml
<student>
  <name>
    Bob
  </name>
  <id>
    34120
  </id>
</student>
```

However, it has since declined in popularity with developers preferring to work with the JSON format.

## Fetch

The `fetch` API is a much more modern way to fetch data.

https://developer.mozilla.org/en-US/docs/Web/API/fetch

# Appendix

## Demonstration on page load vs resource load

Open the network tab to show the size of a typical webpage, compared to the size of an API response.

Can take the chance to teach them about Round Trip Time (RTT).

## 2-hour Weather Forecast by NEA

https://api.data.gov.sg/v1/environment/2-hour-weather-forecast
https://beta.data.gov.sg/datasets/1456/view

## Free IP API

https://docs.freeipapi.com/request.html

## Promise based fetch

```js
fetch("https://freeipapi.com/api/json/").then((response) => {
  if (response.status === 200) {
    response.json().then((ipData) => {
      document.querySelector("h1").textContent = ipData.ipAddress;
    });
  } else {
    console.error("Failed to fetch IP data");
  }
});
```

## AJAX

Asynchronous JavaScript and XML

AJAX refers to an approach where a website uses **asynchronous** javascript to fetch resources using the `XMLHttpRequest` object.

### `XMLHttpRequest` object

```js
const httpRequest = new XMLHttpRequest();
```

The `XMLHttpRequest` object contains all the necessary methods to handle data fetching.

Before we send out our request, we need to decide what to do with the response we will receive.

To do this, we will need to supply another function which will run after the response has been received, also known as a callback function.

```js
function handler() {
  // Process the server response here.
  const resData = JSON.parse(httpRequest.responseText);
  console.log(resData);
}

httpRequest.onreadystatechange = handler;
```

Once the `onreadystatechange` method has been specified, we can proceed to issue our request.

```js
httpRequest.open(
  "GET",
  "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
  true
);
httpRequest.send();
```

https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX
