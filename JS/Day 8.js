const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d"); // Get the context from the cavas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//ctx is where we do all our drawing for our canvas
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
// for the color
let hue = 0;

let direction = true;

function draw(event) {
  if (!isDrawing) {
    return; // stops the function from running when they are not moused down
  } else {
    console.log(event);
  }
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  lastX = event.offsetX;
  lastY = event.offsetY;
  hue++;

  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// if the esc key is pressed, clear the screen
window.addEventListener("keydown", (msg) => {
  if (msg.key === "Escape") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
  }
});
