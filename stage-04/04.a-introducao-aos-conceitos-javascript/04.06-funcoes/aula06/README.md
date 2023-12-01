# HOISTING EM FUNÇÕES

O hoisting em JavaScript é um comportamento que ocorre durante a fase de compilaçao do código, onde as declarações de variáveis e funções são movidas para o topo de seus escopos antes da execução real do código. Isso significa que você pode usar uma variável ou chamar uma função antes de sua declaração no código.

No entanto é importante notar que apenas as declarações são elevadas (hoisted), não as inicializações. Aqui estão algunmas informações sobre hoisting em funções.

## Funções declarativas

```js
// Exemplo de função declarativa
function exemplo() {
  console.log('Olá, mundo!');
}

// Chamar a função antes da declaração
exemplo(); // Funciona devido ao hoisting

// Declaração da função
function exemplo() {
  console.log('Olá, mundo!');
}
```

O exemplo acima, a função `exemplo`pode ser chamada antes da declaração real no código, pois a declaração é elevada para o topo.

## Expressões de funções

```js
// Exemplo de expressão de função
var exemplo = function () {
  console.log('Olá, mundo!');
};

// Chamar a função antes da declaração
exemplo(); // Erro: exemplo não está definido

// Declaração da expressão de função
var exemplo = function () {
  console.log('Olá, mundo!');
};
```

Nesse caso, apenas a declaração da variável `exemplo` é elevada, não a inicialização. Portanto, ao tentar chamar a função antes da declaração, ocorrerá um erro.

Em resumo, o hoisting em funções JavaScript permite que possamos usar funções antes de sua declaração no código. No entanto, é uma boa prática evitar depender muito do hoiting e sempre declarar funções antes de usá-las, para tornar o código mais legível e evitar comportamento inesperados.
