# DECLARATION ASSIGNMENT VAR

Em JavaScript, a declaração de variáveis utilizando `var` é uma das formas mais antigas de declarar variáveis. No entanto, é importante notar que, a partir do ECMAScript 6, foram introduzidas as palavras-chaves `let` e `const`, que têm um comportamento mais previsível em comparação com o `var`.

## DECLARAÇÃO DE VARIÁVEIS

```js
// Declaração de variável
var x;
console.log(x); // undefined

// Atribuição de valor
x = 10;
console.log(x); // 10

// Reatribuição de valor
x = 'Hello, JavaScript!';
console.log(x); // Hello, JavaScript!
```

Ao usar var, a variável é elevada ("hoisted") para o topo do seu contexto de execução. Isso significa que você pode acessar e atribuir valores à variável mesmo antes de ela ser declarada no código.

## ESCOPO DE VARIÁVEIS COM VAR

```js
function exemploVar() {
  if (true) {
    var y = 20;
    console.log(y); // 20
  }

  console.log(y); // 20
}

exemploVar();
```

Variáveis declaradas com var têm escopo de função ou escopo global, mas não têm escopo de bloco. No exemplo acima, a variável y é acessível tanto dentro quanto fora do bloco if.

## PROBLEMAS DE VAR

```js
// Problema de hoisting
console.log(z); // undefined
var z = 30;

// Problema de redeclaração
var z = 40;
console.log(z); // 40
```

O hoisting pode levar a comportamentos inesperados, como no exemplo acima. Além disso, você pode redeclarar variáveis com var, o que pode causar confusão e bugs no código.

É importante notar que, em projetos modernos, é recomendável usar let e const em vez de var para evitar esses problemas e ter um código mais previsível e seguro.
