const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// const modalWrapper = document.querySelector('.modal-wrapper');
// const modalMessage = document.querySelector('.modal .title span');
// const modalBtnClose = document.querySelector('.modal button.close');

function imcCalculate(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open(modalAttribute) {
    modalAttribute.classList.add('open');
  },
  close(modalAttribute) {
    modalAttribute.classList.remove('open');
  },
};

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = imcCalculate(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerHTML = message;
  Modal.open(Modal.wrapper);
};

Modal.buttonClose.onclick = () => {
  Modal.close(Modal.wrapper);
  inputWeight.value = '';
  inputHeight.value = '';
};
