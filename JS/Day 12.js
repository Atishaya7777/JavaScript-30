const bodyBackground = document.querySelector("body");

const konamiCodeArray = [];
const secretCode = "godisgood"; // 9 characters
let attemptedCode = "";
let counterVariable = 0;

function keysPressed(event) {
  konamiCodeArray.push(event.key);
  counterVariable += 1;
  if (counterVariable > secretCode.length) {
    konamiCodeArray.shift();
  }
  attemptedCode = konamiCodeArray.join("");
  console.log(attemptedCode);

  if (attemptedCode == secretCode) {
    bodyBackground.style.backgroundImage =
      "url('https://image.shutterstock.com/image-vector/you-did-on-radial-stripes-260nw-1677866461.jpg')";
    bodyBackground.style.backgroundSize = "100vw 100vh";
  } else {
    bodyBackground.style.backgroundImage = "none";
  }
}

window.addEventListener("keyup", keysPressed);
