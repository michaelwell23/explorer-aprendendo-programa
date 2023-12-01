# ESCOPO DE FUNÇÕES

O escopo de uma função em JavaScript refere-se à visibilidade e acessibilidade das variáveis dentro dessa função. Isso significa que as variáveis declaradas dentro de uma função podem ter um escopo local, sendo acessíveis apenas dentro da própria função, ou podem ter um escopo global, sendo acessíveis em qualquer lugar no código, dependendo de como são declaradas.

## 1. Escopo Local

Variáveis declaradas dentro de uma função têm escopo local, o que significa que elas são acessíveis apenas dentro dessa função. Isso é importante para evitar conflitos de nomes de variáveis e para encapsular o código.

```js
function exemploEscopoLocal() {
  let variavelLocal = 'Eu sou local';
  console.log(variavelLocal);
}

exemploEscopoLocal();
// console.log(variavelLocal); // Isso resultaria em um erro, pois variavelLocal é local à função
```

## 2. Escopo Global

Variáveis declaradas fora de qualquer função têm escopo global, o que significa que podem ser acessadas de qualquer lugar no código, incluindo dentro de funções.

```js
let variavelGlobal = 'Eu sou global';

function exemploEscopoGlobal() {
  console.log(variavelGlobal);
}

exemploEscopoGlobal(); // Saída: Eu sou global
console.log(variavelGlobal); // Saída: Eu sou global
```

## 3. Variáveis Locais e Parâmetros

Parâmetros de função também têm escopo local, ou seja, são visíveis apenas dentro da função onde são declarados.

```js
function exemploParametroLocal(parametro) {
  console.log(parametro);
}

exemploParametroLocal('Eu sou um parâmetro'); // Saída: Eu sou um parâmetro
// console.log(parametro); // Isso resultaria em um erro, pois 'parametro' é local à função
```

## 4. Evitando Conflitos de Nomes

O uso de variáveis com nomes iguais em diferentes escopos pode levar a erros difíceis de identificar. Usar o let ou const para declarar variáveis dentro de uma função garante que elas tenham escopo local.

```js
let variavelGlobal = 'Eu sou global';

function evitarConflitos() {
  let variavelLocal = 'Eu sou local';
  console.log(variavelLocal);
  console.log(variavelGlobal); // Acesso à variável global
}

evitarConflitos();
console.log(variavelLocal); // Isso resultaria em um erro, pois 'variavelLocal' é local à função
```

Entender o escopo de funções é crucial para evitar problemas de variáveis indefinidas, nomeação conflitante e para criar código mais modular e organizado. O escopo contribui para a encapsulação de dados e para a prevenção de interferências indesejadas entre diferentes partes do código.
