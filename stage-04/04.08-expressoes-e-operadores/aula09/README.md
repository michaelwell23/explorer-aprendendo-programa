# OPERADORES DE ATRIBUIÇÃO

Os operadores de atribuição em JavaScript são utilizados para atribuir valores a variáveis. Eles são fundamentais para manipular dados e realizar operações de forma eficiente. Vamos explorar o que são e como utilizá-los.

## 1. Operador de Atribuição Simples (=)

O operador de atribuição simples (=) é utilizado para atribuir um valor a uma variável.

```js
let numero = 42;
let nome = 'João';

console.log(numero); // Saída: 42
console.log(nome); // Saída: João
```

## 2. Operadores de Atribuição Combinados

Além do operador simples, existem operadores combinados que realizam uma operação e atribuem o resultado à variável.

### Operador de Adição e Atribuição (`+=`)

```js
let a = 5;
a += 3; // Equivalente a: a = a + 3;
console.log(a); // Saída: 8
```

### Operador de Subtração e Atribuição (`-=`)

```js
let b = 10;
b -= 4; // Equivalente a: b = b - 4;
console.log(b); // Saída: 6
```

### Operador de Multiplicação e Atribuição (`*=`)

```js
let c = 3;
c *= 2; // Equivalente a: c = c * 2;
console.log(c); // Saída: 6
```

### Operador de Divisão e Atribuição (`/=`)

```js
let d = 20;
d /= 4; // Equivalente a: d = d / 4;
console.log(d); // Saída: 5
```

## Dica Adicional

- Ordem de Avaliação
  - Os operadores de atribuição combinados são avaliados da direita para a esquerda.

```js
let resultado = 2;
resultado += 5 * 3;
console.log(resultado); // Saída: 17 (5 * 3 = 15; 15 + 2 = 17)
```
