document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");

  /**
   * Returns a random number from 0 to the given upper limit
   *
   * @param {number} upperLimit The maximum range
   * @return {number} The randomly selected number
   */
  function random(upperLimit) {
    return Math.floor(Math.random() * (upperLimit + 1));
  }

  btn.addEventListener("click", function () {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  });
});
