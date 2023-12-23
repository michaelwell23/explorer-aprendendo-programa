import { Controls } from './controls.js';
import { Timer } from './timer.js';

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

const controls = Controls({
  buttonPause,
  buttonStop,
  buttonṔlay,
  buttonSet,
  minutes,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
  resetControls: controls.reset,
});

buttonṔlay.addEventListener('click', () => {
  controls.play();
  timer.countDown();
});

buttonPause.addEventListener('click', () => {
  controls.pause();
  clearTimeout(timerTimeout);
});

buttonStop.addEventListener('click', () => {
  controls.reset();
  timer.reset();
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
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  minutes = newMinutes;

  timer.updateDisplay(minutes, 0);
});
