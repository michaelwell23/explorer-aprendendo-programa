# OPERADORES PARA STRING

## Operador de Comparação Igual (==)

O operador de comparação igual (==) em JavaScript é usado para comparar valores quanto à igualdade. No entanto, ele não leva em consideração o tipo de dado, o que pode resultar em comparações inesperadas.

```js
let numero = 5;
let texto = '5';

console.log(numero == texto); // Saída: true
```

## 2. Operador de Adição (+) em Strings

O operador de adição (+) em JavaScript é usado para concatenar strings. Quando pelo menos um dos operandos é uma string, o operador + concatena os valores.

```js
let nome = 'John';
let sobrenome = 'Doe';

let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto); // Saída: "John Doe"
```

## Diferenças Importantes

- 1. Comparação com ==:
  - O operador == compara valores após a conversão automática de tipos, o que pode levar a resultados inesperados.
  - Recomenda-se usar o operador estrito de igualdade (===) que compara valores e tipos estritamente.

```js
let numero = 5;
let texto = '5';

console.log(numero === texto); // Saída: false
```

- 2. Concatenação com + em Strings:
  - O operador + em strings é usado para unir (concatenar) duas ou mais strings.
  - Se pelo menos um operando for uma string, a concatenação ocorre.

## Dicas adicionais

`Template Strings`: Em versões mais recentes do JavaScript, você pode usar template strings para criar strings mais legíveis e interpoladas.

```js
let nome = 'Alice';
let idade = 30;

let descricao = `A pessoa é ${nome} e tem ${idade} anos.`;
console.log(descricao);
// Saída: "A pessoa é Alice e tem 30 anos."
```

`Coerção de Tipo`: Esteja ciente da coerção de tipo ao usar o operador ==. Se precisar comparar valor e tipo estritamente, use ===.
