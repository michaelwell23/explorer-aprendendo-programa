# MANIPULANDO ARRAYS

Os arrays em JavaScript são estruturas de dados flexíveis e poderosas, e a manipulação eficaz deles é crucial para muitos desenvolvedores. Neste guia, exploraremos alguns métodos fundamentais para manipulação de arrays, incluindo **push()**, **unshift()**, **shift()**, **slice()**, **splice()**, e **indexOf()**.

```js

```

## 1. Método push(): Adicionando Elementos no Final do Array

O método push() é usado para adicionar um ou mais elementos ao final de um array.

```js
let frutas = ['Maçã', 'Banana', 'Pera'];
frutas.push('Morango');
console.log(frutas); // Saída: ['Maçã', 'Banana', 'Pera', 'Morango']
```

## 2. Método unshift(): Adicionando Elementos no Início do Array

O método unshift() adiciona um ou mais elementos ao início de um array.

```js
let frutas = ['Maçã', 'Banana', 'Pera'];
frutas.unshift('Morango');
console.log(frutas); // Saída: ['Morango', 'Maçã', 'Banana', 'Pera']
```

## 3. Método shift(): Removendo o Primeiro Elemento do Array

O método shift() remove o primeiro elemento de um array e retorna esse elemento.

```js
let frutas = ['Maçã', 'Banana', 'Pera'];
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // Saída: 'Maçã'
console.log(frutas); // Saída: ['Banana', 'Pera']
```

## 4. Método slice(): Criando uma Fatia do Array

O método slice() retorna uma cópia de parte de um array, sem modificar o array original.

```js
let frutas = ['Maçã', 'Banana', 'Pera'];
frutas.splice(1, 0, 'Morango'); // Adiciona 'Morango' na posição 1
console.log(frutas); // Saída: ['Maçã', 'Morango', 'Banana', 'Pera']

frutas.splice(2, 1); // Remove 1 elemento da posição 2
console.log(frutas); // Saída: ['Maçã', 'Morango', 'Pera']
```

## 5. Método splice(): Modificando o Conteúdo do Array

O método splice() é utilizado para adicionar ou remover elementos de um array em uma posição específica

```js
let frutas = ['Maçã', 'Banana', 'Pera'];
frutas.splice(1, 0, 'Morango'); // Adiciona 'Morango' na posição 1
console.log(frutas); // Saída: ['Maçã', 'Morango', 'Banana', 'Pera']

frutas.splice(2, 1); // Remove 1 elemento da posição 2
console.log(frutas); // Saída: ['Maçã', 'Morango', 'Pera']
```

## 6. Método indexOf(): Encontrando a Posição de um Elemento

O método indexOf() retorna o primeiro índice em que um elemento específico é encontrado no array.

```js
let frutas = ['Maçã', 'Banana', 'Pera'];
let indiceBanana = frutas.indexOf('Banana');
console.log(indiceBanana); // Saída: 1
```
