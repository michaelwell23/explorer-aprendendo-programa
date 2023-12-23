export function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
  resetControls,
}) {
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function reset() {
    updateTimerDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function countDown() {
    timerTimeout = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0) {
        resetControls();
        return;
      }

      if (seconds <= 0) {
        seconds = 2;

        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  return {
    countDown,
    reset,
    updateDisplay,
  };
}
