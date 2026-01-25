"use strict";

window.onload = function () {
  const appendMilliseonds = document.getElementById("milli-seconds");
  const appendSeconds = document.getElementById("seconds");
  const appendMinutes = document.getElementById("minutes");

  const buttonStart = document.getElementById("button-start");
  const buttonsPause = document.getElementById("button-pause");
  const buttonRestart = document.getElementById("button-restart");

  let milliSeconds = 0;
  let seconds = 0;
  let minutes = 0;
  let Interval = null;

  function startTimer() {
    milliSeconds++;

    appendMilliseonds.innerHTML =
      milliSeconds < 10 ? `0${milliSeconds}` : milliSeconds;

    if (milliSeconds > 99) {
      milliSeconds = 0;
      seconds++;

      appendMilliseonds.innerHTML = "00";
      appendSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }

    if (seconds > 59) {
      seconds = 0;
      minutes++;

      appendSeconds.innerHTML = "00";
      appendMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    }
  }

  buttonStart.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  });

  buttonsPause.addEventListener("click", () => {
    clearInterval(Interval);
  });

  buttonRestart.addEventListener("click", () => {
    clearInterval(Interval);

    milliSeconds = 0;
    seconds = 0;
    minutes = 0;

    appendMilliseonds.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
  });
};
