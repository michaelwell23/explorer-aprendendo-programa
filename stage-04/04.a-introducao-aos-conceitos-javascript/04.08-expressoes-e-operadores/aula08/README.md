# OPERADORES DE COMPARAÇÃO MAIOR, MENOR, MAIOR IGUAL A E MENOR IGUAL A

Os operadores de comparação em JavaScript são fundamentais para realizar comparações entre valores. Ele retorna valores booleanos (verdadeiro ou falso) com base na condição comparativa.

## Operador Maior que '>'

O operador > verifica se o valor à esquerda é maior que o valor à direita.

```js
let x = 5;
let y = 3;

console.log(x > y); // Saída: true
```

## Operador Menor que '<'

O operador < verifica se o valor é menor ou mais valor à extrema.

```js
let a = 8;
let b = 12;

console.log(a < b); // Saída: true
```

## Operador maior ou igual a '>='

O operador >= verifica se o valor é maior ou igual a valor a direita.

```js
let p = 10;
let q = 10;

console.log(p >= q); // Saída: true
```

## Operador manor ou igual a '<='

O operador <= verifica se o valor é menor ou igual a valor a extrema.

```js
let m = 15;
let n = 20;

console.log(m <= n); // Saída: true
```

## Dicas adicionais

### Comparações com cordas

- Quando você compara strings, o JavaScript compara caractere por caractere na ordem lexicográfica (, de dicionário ).

```js
let str1 = 'abc';
let str2 = 'def';

console.log(str1 < str2); // Saída: true
```

### Comparações com Tipos Diferentes

- O JavaScript tenta converter automaticamente os operandos para o mesmo tipo antes de fazer uma comparação.

```js
let num = 5;
let str = '5';

console.log(num == str); // Saída: true (devido à conversão automática)
```

- Usar === para comparar valor e tipo estrito.

```js
console.log(num === str); // Saída: false
```
