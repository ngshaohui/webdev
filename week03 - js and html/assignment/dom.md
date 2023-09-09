# DOM interactions

```html
<body>
  <ol id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</body>
```

When the element `ol` is deleted, will its children remain in the DOM?

Get them to submid the code to delete the element (and adding a style element, and script element)

possible change to this question is to first querySelector("li") then ask if we can still read textContent after its parent has been deleted

## possible ideas

- select non existent element, does it result in error message?
- press button to delete element, press it again, what is the error message?
  - get the to understand that the element reference no longer exists once it is deleted
