// constants declaration
const videoScreen = document.querySelector(".viewer");
const playerSkipMinusTenButton = document.querySelector(
  `.player__button[data-skip="-10"]`
);
const playerSkipPlusTenButton = document.querySelector(
  `.player__button[data-skip="10"]`
);
const playPauseButton = document.querySelector(".player__button.toggle");
const volumeSlider = document.querySelector(`.player__slider[name="volume"]`);
const playBackRateSlider = document.querySelector(
  `.player__slider[name="playbackRate"]`
);
const progressBar = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");

// Progress bar growth rate function
function progressBarGrowth(event) {
  const percentage = (videoScreen.currentTime / videoScreen.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

//Changing the play back rate of the main video
function changeplayBackRate(event) {
  videoScreen.playbackRate = playBackRateSlider.value;
}

// Changing the volume of the main video
function changeVolume(event) {
  videoScreen.volume = volumeSlider.value;
}

// For the playing and pausing the video
function togglePlayPauseButton(event) {
  if (this.innerHTML == `<i class="fas fa-play"></i>`) {
    //play
    this.innerHTML = `<i class="fas fa-pause"></i>`;
    videoScreen.play();
  } else {
    //pause
    this.innerHTML = `<i class="fas fa-play"></i>`;
    videoScreen.pause();
  }
}

function togglePausePlay(event) {
  if (playPauseButton.innerHTML == `<i class="fas fa-play"></i>`) {
    //play
    playPauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
    videoScreen.play();
  } else {
    //pause
    playPauseButton.innerHTML = `<i class="fas fa-play"></i>`;
    videoScreen.pause();
  }
}

// Going back 10 seconds
function skipTimeMinusTen(event) {
  videoScreen.currentTime -= 10;
}

// Going forwards 10 seconds
function skipTimePlusTen(event) {
  videoScreen.currentTime += 10;
}

// switches the point of time where the media is being played function
function switchPoint(event) {
  const switchTime =
    (event.offsetX / progress.offsetWidth) * videoScreen.duration;
  videoScreen.currentTime = switchTime;
}

playerSkipMinusTenButton.addEventListener("click", skipTimeMinusTen);
playerSkipPlusTenButton.addEventListener("click", skipTimePlusTen);
playPauseButton.addEventListener("click", togglePlayPauseButton);
volumeSlider.addEventListener("click", changeVolume);
playBackRateSlider.addEventListener("click", changeplayBackRate);
videoScreen.addEventListener("timeupdate", progressBarGrowth);

videoScreen.addEventListener("click", togglePausePlay);

let mousedown = false;
progress.addEventListener("click", switchPoint);
progress.addEventListener("mousemove", (e) => mousedown && switchPoint(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
