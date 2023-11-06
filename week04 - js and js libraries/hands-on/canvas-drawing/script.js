const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function reset() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw(x, y) {
  ctx.beginPath(); // begin

  ctx.lineWidth = 15;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";

  ctx.moveTo(x, y); // from
  ctx.lineTo(x, y); // to

  ctx.stroke(); // draw
}

// add your js code here
// TODO make the canvas element listen to the "mousemove event"
// TODO call the draw function with the offsetX and offsetY properties as arguments

// TODO make the #reset button listen to the "click" event, supply the reset function as the event listener
