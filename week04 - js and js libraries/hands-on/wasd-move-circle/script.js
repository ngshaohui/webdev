// adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events#events_2

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fill();
}

const coords = { x: 50, y: 50 };

function moveCircle(x, y) {
  coords.x += x;
  coords.y += y;
  drawCircle(coords.x, coords.y);
}

drawCircle(coords.x, coords.y); // draw initial circle

// add your JS code here

// TODO make document listen to the "keydown" event
// TODO event listener should check what is the current key being pressed
// TODO to move the circle up, call moveCircle(0, -1) to decrement the y coordinate (0, 0) is the top left of the canvas
