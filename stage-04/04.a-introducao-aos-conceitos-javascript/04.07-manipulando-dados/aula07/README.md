# SEPARANDO STRINGS

## Método split

O método **split** é usado para dividir uma string em um array das substrings com base em um delimitador.

```js
string.split(separador, [limite]);
```

- Parâmetros

  - separdor: Especifica o caractere ou expressão regular usada para separar a string;
  - limite (opcional): Limita o número de divisões;

- Dividir por espaços

```js
var frase = 'Olá, mundo!';
var palavras = frase.split(' ');
console.log(palavras); // Saída: ["Olá,", "mundo!"]
```

- Dividir por vírgula

```js
var lista = 'maçã,banana,uva,morango';
var frutas = lista.split(',');
console.log(frutas); // Saída: ["maçã", "banana", "uva", "morango"]
```

- Limitar o Número de Divisões

```js
var frase = 'JavaScript é uma linguagem incrível!';
var palavras = frase.split(' ', 3);
console.log(palavras); // Saída: ["JavaScript", "é", "uma"]
```

## Método join

O método **join** é usado para concatenar os elementos de um array em uma única string, usando um separador especificado.

```js
array.join(separador);
```

- Parâmetros

  - separador: Especifica o caractere ou string que será usado para separar os elementos do array na string resultante.

- Juntar com Vírgula

```js
var diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
var semana = diasDaSemana.join('');
console.log(semana); // Saída: "SegundaTerçaQuartaQuintaSexta"
```

- Juntar sem separador

```js
var letras = ['a', 'b', 'c', 'd'];
var palavra = letras.join('-');
console.log(palavra); // Saída: "a-b-c-d"
```

## Considerações finais

- `Uso Comum`: Ambos os métodos são frequentemente utilizados em conjunto para transformar strings em arrays usando split, realizar manipulações em array e, em seguida, unir os resultados novamente em uma string usando join.

- `Expressões Regulares`: O método split pode receber expressões regulares como separadores, permitindo uma maior flexibilidade.

- `Performance`: Tenha cuidado ao usar esses métodos em grandes conjuntos de dados, pois podem ter impacto na performance.

---
