const buttonṔlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttoSoundOn = document.querySelector('.sound-on');
const buttoSoundOff = document.querySelector('.sound-off');

let minutes;
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

function countDown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutesTime = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = String(seconds - 1).padStart(2, 0);

    if (minutesTime <= 0) {
      buttonPause.classList.add('hide');
      buttonStop.classList.add('hide');
      buttonṔlay.classList.remove('hide');
      buttonSet.classList.remove('hide');

      return;
    }

    if (seconds <= 0) {
      seconds = 2;

      minutesDisplay.textContent = String(minutesTime - 1).padStart(2, 0);
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, 0);

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
});

buttonStop.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonStop.classList.add('hide');
  buttonṔlay.classList.remove('hide');
  buttonSet.classList.remove('hide');
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
  minutes = prompt('Quantos minutos?');
  minutesDisplay.textContent = String(minutes).padStart(2, 0);
});
