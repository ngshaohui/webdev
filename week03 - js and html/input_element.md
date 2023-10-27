# Input element

The `input` element is a way for users to perform interactions which requires them to provide data.

```html
<label for="name">Name (4 to 8 characters):</label>
<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10"
/>
```

## Types of input

Besides text, the `input` element also supports handling other common types of data provisioned by users.

### Selection

- radio
- checkbox

These input types help us guide the user to make a single or multiple selections.

### Specific text type

- email
- password
- number

When handling text input, specifying the type of input can also allow devices to handle them better.

For example, the `password` type would ensure that the input characters are censored when displayed.

On the other hand, specifying `email` would prompt mobile devices to supply a keyboard with the `@` character, and `number` would display a fully numerical keyboard.

### Non-text types

- file
- color
- date

While it is common to see custom file upload libraries, this may be unnecessary since file uploads are natively supported.

Libraries are still being used since they might contain features such as drag-and-drop file uploads, or contain wrappers to support the web framework being used.

When requiring user inputs, it would be good to first check how the desired input is natively supported before introducing an external library.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types

## Obtaining input value

We may obtain the value from the input element from its `value` property.

```js
const inputVal = document.querySelector("#name").value;
```

# Appendix

## Client-side validation

If a specific type of input is needed, we can add client-side validation to help guide the user give the desired input.

```html
<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10"
/>
```

For our input element above, `required`, `minlength`, and `maxlength` are attributes which enable client-side validation.

If validation is not fulfilled, this will cause input fields in `form` elements to display a warning, and prevent the form from submitting.

However, do note that these attributes may be removed using the devtools, bypassing "validation".

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#client-side_validation

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
