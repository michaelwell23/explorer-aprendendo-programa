export function Controls({
  buttonPause,
  buttonStop,
  buttonṔlay,
  buttonSet,
  minutes,
}) {
  function play() {
    buttonṔlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  function pause() {
    buttonPause.classList.add('hide');
    buttonṔlay.classList.remove('hide');
  }

  function reset() {
    buttonPause.classList.add('hide');
    buttonStop.classList.add('hide');
    buttonṔlay.classList.remove('hide');
    buttonSet.classList.remove('hide');
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?');

    if (!newMinutes) {
      return false;
    }

    minutes = newMinutes;

    timer.updateDisplay(minutes, 0);
  }

  return {
    play,
    reset,
    pause,
    getMinutes,
  };
}
