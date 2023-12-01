# OPERADOR CONDICIONAL TERNÁRIO

O operador condicional ternário, também conhecido como operador ternário, é uma forma concisa de escrever instruções condicionais em JavaScript. Ele é frequentemente usado para simplificar declarações `if-else` em uma única linha. Vamos explorar o que é e como utilizá-lo.

## SINTAXE

```js
condição ? expressão_se_verdadeiro : expressão_se_falso;
```

Exemplo

```js
let idade = 20;

let mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(mensagem);
// Saída: "Maior de idade"
```

## Utilização em Atribuições

O operador ternário pode ser usado para atribuir valores com base em uma condição.

```js
let pontuacao = 75;
let resultado = pontuacao >= 70 ? 'Aprovado' : 'Reprovado';
console.log(resultado);
// Saída: "Aprovado"
```

## Aninhamento de Operadores Ternários

É possível aninhar operadores ternários, mas é importante manter a clareza para evitar códigos difíceis de ler.

```js
let numero = 10;
let paridade =
  numero % 2 === 0
    ? 'Par'
    : numero % 2 === 1
    ? 'Ímpar'
    : 'Não é um número inteiro';
console.log(paridade);
// Saída: "Par"
```

## Vantagens do Operador Ternário

- Concisão de Código: Reduz a necessidade de escrever estruturas if-else mais extensas.
- Facilidade de Leitura: Em situações simples, o operador ternário pode tornar o código mais fácil de entender.

## Cuidados ao Usar o Operador Ternário

- Não Abuse da Complexidade: Evite aninhar muitos operadores ternários para não comprometer a legibilidade.
- Use em Casos Simples: O operador ternário é mais apropriado para situações simples; para casos mais complexos, é melhor utilizar instruções if-else tradicionais.
