const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  // audio for the tick tock sound
  let audioOne = new Audio("../files/sounds/1.wav");
  let audioTwo = new Audio("../files/sounds/2.wav");

  // Getting the seconds, minutes and hours of the current time.
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Converting the obtained seconds, minutes and hours into degrees
  const secondsDegrees = seconds * 6;
  const minutesDegrees = minutes * 6;
  const hoursDegrees = hours * 15;

  console.log(secondsDegrees, minutesDegrees, hoursDegrees);

  // Getting the hours, seconds and minutes hands to rotate into
  // the calculated degrees
  secondHand.style.transform = `rotate(${secondsDegrees + 90}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees + 90}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees - 45}deg)`;

  if (seconds % 2 == 0) {
    audioOne.play();
  } else {
    audioTwo.play();
  }
}

setInterval(setDate, 1000);
