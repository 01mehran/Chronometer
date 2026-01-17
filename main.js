"use strict";

window.onload = function () {
  const appendMilliseonds = document.getElementById("milli-seconds");
  const appendSeconds = document.getElementById("seconds");
  const buttonStart = document.getElementById("button-start");
  const buttonsPause = document.getElementById("button-pause");
  const buttonRestart = document.getElementById("button-restart");

  let seconds = "00";
  let milliSeconds = "00";
  let Interval;

  function startTimer() {
    milliSeconds++;

    milliSeconds = milliSeconds <= 9 ? `0${milliSeconds}` : milliSeconds;

    if (milliSeconds > 9) {
      appendMilliseonds.innerHTML = milliSeconds;
    }

    if (milliSeconds > 99) {
      seconds++;
      appendSeconds.innerHTML = `0${seconds}`;
      milliSeconds = 0;
      appendMilliseonds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
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
    milliSeconds = "00";
    seconds = "00";
    appendMilliseonds.innerHTML = milliSeconds;
    appendSeconds.innerHTML = seconds;
  });
};
