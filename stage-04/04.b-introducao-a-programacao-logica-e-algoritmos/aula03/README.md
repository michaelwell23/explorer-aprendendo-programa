# SOMANDO DOI NUMEROS

Em programação, realizar operações matemáticas simples, como a adição de dois números, é uma tarefa comum. NestA aula, explorei como usar as funções prompt e alert em conjunto para solicitar números ao usuário, realizar a soma e também entenderemos o uso do operador typeof para verificar os tipos de dados.

## Obtendo Números do Usuário com prompt

Começaremos solicitando dois números ao usuário usando o prompt e armazenando esses valores em variáveis:

```js
// Solicitando números ao usuário
var primeiroNumero = prompt('Digite o primeiro número:');
var segundoNumero = prompt('Digite o segundo número:');
```

É importante observar que mesmo que o usuário insira números, o prompt retorna os valores como strings. Vamos abordar isso mais adiante.

## Verificando os Tipos de Dados com typeof

Como os numeros retornados pelo **prompt** são do tipo string, o que ocorre é que ao tertarmos fazer a soma deles, eles serão concatenados ao invés de ser somados. Podemos utilizar o operador typeof para verificar os tipos de dados das variáveis envolvidas:

```js
// Verificando tipos de dados
console.log('Tipo de primeiroNumero:', typeof primeiroNumero);
console.log('Tipo de segundoNumero:', typeof segundoNumero);
console.log('Tipo de resultado:', typeof resultado);
```

## Convertendo Strings para Números

Antes de realizar a soma, precisamos garantir que os valores obtidos sejam tratados como números, não como strings. Podemos usar a função **Number**, **parseFloat** ou **parseInt** para converter as strings em números:

```js
// Convertendo strings para números
var primeiroNumero = Number(prompt('Digite o primeiro número:'));
var segundoNumero = Number(prompt('Digite o segundo número:'));

var primeiroNumero = parseFloat(prompt('Digite o primeiro número:'));
var segundoNumero = parseFloat(prompt('Digite o segundo número:'));

var primeiroNumero = parseInt(prompt('Digite o primeiro número:'));
var segundoNumero = parseInt(prompt('Digite o segundo número:'));
```

Ao usar **parseFloat**, permitimos a inclusão de números decimais. Se quisermos trabalhar apenas com números inteiros, podemos usar **parseInt** ou **Number**.

## Realizando a Soma

Agora que temos dois números, podemos realizar a soma e armazenar o resultado em uma variável:

```js
// Realizando a soma
var resultado = primeiroNumero + segundoNumero;
```

## Exibindo o Resultado com alert

Finalmente, exibiremos o resultado ao usuário usando a função alert:

```js
alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
```

## Conclusão:

Este capítulo demonstrou como realizar a soma de dois números, utilizando **prompt** para obter entrada do usuário, **Number** para converter strings em números, **alert** para exibir resultados e **typeof** para verificar tipos de dados. Essas técnicas são fundamentais ao lidar com interações de usuário e garantem a correta manipulação de dados em suas aplicações JavaScript. Experimente adaptar esses conceitos para criar operações mais complexas e interativas em seus projetos.
