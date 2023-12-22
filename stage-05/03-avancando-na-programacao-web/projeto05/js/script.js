const buttonṔlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttoSoundOn = document.querySelector('.sound-on');
const buttoSoundOff = document.querySelector('.sound-off');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = Number(minutesDisplay.textContent);
let timerTimeout;

function resetControls() {
  buttonPause.classList.add('hide');
  buttonStop.classList.add('hide');
  buttonṔlay.classList.remove('hide');
  buttonSet.classList.remove('hide');
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeout);
}

function countDown() {
  timerTimeout = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;

      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));

    countDown();
  }, 1000);
}

buttonṔlay.addEventListener('click', () => {
  buttonṔlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  countDown();
});

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonṔlay.classList.remove('hide');
  clearTimeout(timerTimeout);
});

buttonStop.addEventListener('click', () => {
  resetControls();
  resetTimer();
});

buttoSoundOn.addEventListener('click', () => {
  buttoSoundOn.classList.add('hide');
  buttoSoundOff.classList.remove('hide');
});

buttoSoundOff.addEventListener('click', () => {
  buttoSoundOn.classList.remove('hide');
  buttoSoundOff.classList.add('hide');
});

buttonSet.addEventListener('click', () => {
  let newMinutes = prompt('Quantos minutos?');

  if (!newMinutes) {
    resetTimer();
    return;
  }

  minutes = newMinutes;

  updateTimerDisplay(minutes, 0);
});
