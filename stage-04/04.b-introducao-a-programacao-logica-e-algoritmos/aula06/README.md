# CALCULANDO A MÉDIA DE UM ESTUDANTE

Em JavaScript, a estrutura condicional if/else é utilizada para executar diferentes blocos de código com base em uma condição. Essa estrutura é fundamental para controlar o fluxo de execução do programa. Vamos criar um exemplo simples utilizando o cálculo da média de um estudante.

```js
// Exemplo: Cálculo da média de um estudante

// Suponha que as notas sejam as seguintes:
var nota1 = 7.5;
var nota2 = 8.0;

// Calculando a média
var media = (nota1 + nota2) / 2;

// Definindo um limite mínimo de aprovação
var limiteAprovacao = 7.0;

// Utilizando a estrutura if/else para decidir se o estudante foi aprovado ou reprovado
if (media >= limiteAprovacao) {
  console.log('Parabéns! Você foi aprovado com média ' + media.toFixed(2));
} else {
  console.log('Infelizmente, você foi reprovado com média ' + media.toFixed(2));
}
```

Neste exemplo, o código calcula a média das notas nota1 e nota2 e, em seguida, verifica se a média é maior ou igual ao limiteAprovacao. Se a condição for verdadeira, uma mensagem parabenizando o estudante pela aprovação é exibida. Caso contrário, uma mensagem informando sobre a reprovação é exibida.

A estrutura if/else é fundamental para lidar com diferentes situações em um programa, permitindo que o código tome decisões com base nas condições especificadas.
