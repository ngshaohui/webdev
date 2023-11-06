function handleClick(event) {
  // display cursor coordinates
  document.querySelector("#x").textContent = event.offsetX;
  document.querySelector("#y").textContent = event.offsetY;
}
document.querySelector("#img").addEventListener("click", handleClick);
