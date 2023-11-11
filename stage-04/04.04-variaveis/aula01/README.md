# VARIÁVEIS

Em JavaScript variáveis são utilizadas para armazenar e manipular dados. Elas são fundamentais em programação, pois permite que eu possa armazenar valores e os referenciar por meio de um nome simbólico.button

## Declarações de Variáveis

Posso declarar variáveis utilizando as palavras-chaves `var`, `let` ou `conts`;

- O `var` é uma forma tradicional de declarar variávei antes do ECMAScript 6 (ES6). Seu escopo é menos previsível do que `let` e `const`, e por conta disso, é geralmente evitado.

- O `let` foi introduzido no ES6, tem um escopo de bloco e permite que os valores contidos possam ser reatruibuidos outros valores.

- Já o `const` também foi introduzido no ES6, cria uma variável cujo valor não pode ser alterado após a sua atribuição. O escopo também é de bloco.

```js
var x = 10;
x = 20;
console.log(x);

let y = 20;
y = 10;
console.log(y);

const z = 30; // variável não pode ser alterada
console.log(z);
```
