# Week 13 hands on: useEffect, storage

Start a Python http server within the `hands_on` folder to complete the first 2 activities.

```bash
python -m http.server
```

When you are done with the activities, you can kill the server with control+c.

## Activity 2: Local storage

We will be working with the following file for the activity.

`local-storage.html`

Since we are using Python's http server, we may access the page via http://localhost:8000/local-storage.html.

This application implements a dark mode view, which can be triggered by left-clicking anywhere on the page.

### Task 1: Viewing the browser storage

Open the Devtool's Application tab and select Local storage from side panel.

![Local storage](./hands_on_ss/localhost_localstorage.png)

### Task 2: Viewing changes to the stored value

Left-click anywhere on the page, and observe how stored value changes.

### Task 3: Manually changing stored value

Manually toggle the value between either true/false.

You may do this by double right clicking on the value and selecting "edit".

![Edit storage](./hands_on_ss/storage_edit.png)

Notice that the page's light/dark mode does not change when the stored value is toggled.

Try refreshing the page each time you manually modify the stored value.

Why does the page's light/dark mode not change immediately when the stored value is edited, and instead requires the page to be refreshed?

(Hint: when does JavaScript get loaded on a page? Which portion of the code has to do with loading the settings for dark mode?)

### (Bonus) Task 4

Put the page in dark mode, and attempt to do the following on the browser's local storage and observe if the page stays in dark mode.

- Delete the entry and refresh the page.
- Change the value of the entry to `{"darkMode": ""}` and refresh the page.
- Change the value of the entry to `{"darkMode": "false"}` and refresh the page.

## Activity 2: Session storage

We will be working with the following file for the activity.

`session-storage.html`

Since we are using Python's http server, we may access the page via http://localhost:8000/session-storage.html.

### Task 1: Populate fields

Try populating the form fields with some random data.

Delete the entry and refresh the page.

Change the value of the entry to `{}` and refresh the page. Do the form fields get populated after refreshing the page?

## Activity 3: Toggling cookie values on NP's website

Visit [NP's homepage](https://www.np.edu.sg).

![NP website with light mode (default)](./hands_on_ss/np_light_mode.png)

You may view the cookies being stored for the current domain on Google Chrome by going to Devtool's Application tab and selecting Cookies from the side panel.

![NP website with dark mode (default)](./hands_on_ss/np_dark_mode.png)

## Submission

Submit this hands-on worksheet. Ensure that you answer all the questions within it (they end with a question mark ?).
