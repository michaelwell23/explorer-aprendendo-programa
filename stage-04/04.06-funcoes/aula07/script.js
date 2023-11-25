// Arrow functions, ou funções de seta, são uma maneira concisa de escrever funções em JavaScript. Elas foram introduzidas no ECMAScript 6 (ES6) e oferecem uma sintaxe mais curta e algumas diferenças em relação às funções tradicionais.

// funcção
function soma(a, b) {
  return a + b;
}

// arrow function
const soma = (a, b) => a + b;

/**
  Principais características das arrow functions:

  Sintaxe concisa: Se a função tiver apenas uma expressão, você pode omitir as chaves {} e a palavra-chave return. A expressão será automaticamente retornada.

  this lexical: O valor de this em uma arrow function é determinado pelo contexto no qual a função é criada. Isso significa que ela não possui seu próprio this; em vez disso, ela "herda" o this do escopo em que foi criada.

  Sem arguments: Arrow functions não têm a variável arguments, que está presente em funções tradicionais. Se você precisar acessar os argumentos, deve usar o rest parameter (...).
*
*/

// UTILIZANDO PARAMETROS

// Função tradicional
const quadradoTradicional = function (x) {
  return x * x;
};

// Arrow function equivalente

// No caso de um unico parâmetro podemos remover os parenteses e também as chaves para deixar a função ainda mais curta.
const quadradoArrow = (x) => x * x;
