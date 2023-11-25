let subject = 'create video';

function createThink(subject) {
  subject = 'study';
  return subject;
}

console.log(createThink(subject));
console.log(subject);

// O escopo de função, ou "function scope", em JavaScript refere-se à visibilidade das variáveis dentro de uma função. Quando você declara uma variável dentro de uma função, essa variável é acessível apenas dentro dessa função, e não fora dela.

// Variável global
var variavelGlobal = 'Eu sou global';

function exemploEscopo() {
  // Variável local à função
  var variavelLocal = 'Eu sou local';

  // Acessando variáveis dentro da função
  console.log(variavelLocal); // Saída: Eu sou local
  console.log(variavelGlobal); // Saída: Eu sou global
}

// Tentando acessar variável local fora da função (irá gerar um erro)
// console.log(variavelLocal);  // Comentado para evitar erro

// Acessando variável global fora da função
console.log(variavelGlobal); // Saída: Eu sou global

// Chamando a função
exemploEscopo();

/**
  * variavelGlobal é declarada fora da função e, portanto, é uma variável global. Ela é acessível em todo o escopo do programa.

  * variavelLocal é declarada dentro da função exemploEscopo. Isso a torna uma variável local, acessível apenas dentro dessa função.

  * Quando tentamos acessar variavelLocal fora da função, isso gerará um erro, pois ela não é visível fora do escopo da função.

  * O escopo de função ajuda a evitar conflitos de nomes de variáveis entre diferentes partes do código, promovendo a encapsulação e a organização do código. Lembre-se de que, a partir do ECMAScript 6 (ES6), você também pode usar let e const para declarar variáveis com escopo de bloco, o que oferece uma granularidade maior em comparação com o escopo de função proporcionado por var.
 */
