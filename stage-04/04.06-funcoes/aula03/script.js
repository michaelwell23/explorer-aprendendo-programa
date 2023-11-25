// podemos criar funções dentro de variáveis, ela é chamada de função anônima ou em inglês function expression
const sum = function (number1, number2) {
  let total = number1 + number2;
  return total;
};

let number1 = 34;
let number2 = 25;
sum(2, 3);

console.log(`o numero 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);

console.log(`A soma é ${sum(number1, number2)}`);
