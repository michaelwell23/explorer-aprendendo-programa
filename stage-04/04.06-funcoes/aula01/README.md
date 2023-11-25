# Introdução A funções

As funções são um componente fundamental em JavaScript, desempenhando um paple crucial na organização e modulação do código. Uma função é um bloco de código reutilizável que pode ser definido e chamado em diferentes partes do programa. Elas são essenciais para dividir tarefas complexas em partes menores e mais gerenciáveis, promovendo a reutilização de código e facilitando a manutenção.

---

## SINTAXE BÁSICA

```js
function nomeDaFuncao(parametro1, parametro2) {
  // Código a ser executado
  return resultado; // Opcional
}
```

- **function**: Palavra-chave que indica a criação de uma função.
- **nomeDaFuncao**: Identificador que representa o nome da função.
- **parametro1, parametro2**: Parâmetros que a função pode aceitar. São opcionais.
- **{}**: Bloco de código que contém as instruções a serem executadas.

---

## CHAMANDO UMA FUNÇÃO

```js
nomeDaFuncao(argumento1, argumento2);
```

- **argumento1, argumento2**: Valores reais passados para a função quando ela é chamada.

## RETORNO DE VALORES

```js
function soma(a, b) {
  return a + b;
}

let resultadoSoma = soma(2, 3);
console.log(resultadoSoma); // Saída: 5
```

A palavra-chave `return` é usada para retornar um valor da função.

---

## ESCOPO DE VARIÁVEIS

Variáveis declaradas dentro de uma função têm escopo local, o que significa que não podem ser acessadas fora da função. Variáveis fora de uma função têm escopo global.

```js
let variavelGlobal = 'Eu sou global';

function exemploEscopo() {
  let variavelLocal = 'Eu sou local';
  console.log(variavelGlobal); // Acesso a variável global
  console.log(variavelLocal); // Acesso a variável local
}

exemploEscopo();
// console.log(variavelLocal); // Isso resultaria em erro, pois variavelLocal é local à função
```

Essa introdução abrange conceitos básicos de funções em JavaScript, mas o tema é vasto e inclui tópicos como funções anônimas, funções de flecha, closures, e callbacks. À medida que você explora mais sobre JavaScript, você descobrirá como as funções desempenham um papel fundamental no desenvolvimento de aplicações web dinâmicas e interativas.
