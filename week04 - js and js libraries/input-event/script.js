// adapted from https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event#examples

const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", (event) => {
  const inputVal = event.target.value;
  log.textContent = inputVal.toUpperCase();
});
