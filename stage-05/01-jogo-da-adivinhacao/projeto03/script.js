const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

function toggleScreen() {
  screen1.classList.toggle('hiden');
  screen2.classList.toggle('hiden');
}

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${xAttempts} tentativas!`;
  }

  inputNumber.value = '';
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 0;
  document.location.reload();
}

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
