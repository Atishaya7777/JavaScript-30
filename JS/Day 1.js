window.addEventListener("keydown", (msg) => {
  const audio = document.querySelector(`audio[data-key="${msg.key}"`);
  const key = document.querySelector(`.key[data-key="${msg.key}"]`);
  if (!audio) {
    // stop the function from running all together
    return;
  }
  audio.currentTime = 0; // rewind to the start after pressing it again
  audio.play();
  console.log(key);
});
