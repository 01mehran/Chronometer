"use strict";

window.onload = function () {
  const appendMilliseonds = document.getElementById("milli-seconds");
  const appendSeconds = document.getElementById("seconds");
  const buttonStart = document.getElementById("button-start");

  let seconds = "00";
  let milliSeconds = "00";
  let Interval;

  // Start Timer;
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
};
