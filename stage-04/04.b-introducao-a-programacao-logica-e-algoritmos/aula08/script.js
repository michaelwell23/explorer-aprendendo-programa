/**
 * Jogo da advinhação
 *
 * Apresente a mensagem ao usuário: "Adivinhe o número que estou pensando? Está entre 0 e 10"
 *
 * Crie uma lógica para gerar um número aleatório e verificar se o numero digitado é o mesmo que o
 * aleatório gerado pelo sistema.
 *
 * Enquanto o usuário não adivinha o número, mostra a mensagem: "Errou, tente novamente!"
 *
 * Caso o usuário acerte o número, apresenta a mensagem: "Parabéns! Você advinhou o número em x tentativas!" Substituindo o X da mensagme, pelo número de tentativas.
 *
 */

let count = 0;
let result = prompt('Adivinhe o número que estou pensando? Está entre 0e 10');
const numberThinking = Math.round(Math.random() * 10);

while (Number(result) != numberThinking) {
  result = prompt('Erro, tente novamente!');
  count++;
}

alert(`Parabéns! Você advinhou o número em ${count} tentativas!`);
