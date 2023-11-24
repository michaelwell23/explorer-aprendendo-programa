# ARRAYS

Em JavaScript, as propriedades em arrays são referidas como "elementos" e são acessadas usando índices numéricos. Aqui está um exemplo simples de como você pode acessar elementos em um array:

```js
// Array de frutas
var frutas = ['Maçã', 'Banana', 'Morango'];

// Acessando elementos usando índices
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[1]); // Saída: Banana
console.log(frutas[2]); // Saída: Morango
```

No exemplo acima, o array `frutas` contém três elementos ("Maçã", "Banana", "Morango"). Cada elemento é acessado usando um índice numérico dentro de colchetes.

Lembre-se de que os índices de arrays em JavaScript são baseados em zero, o que significa que o primeiro elemento tem índice 0, o segundo elemento tem índice 1 e assim por diante.

Você também pode acessar e modificar elementos usando variáveis como índices:

```js
// Array de números
var numeros = [10, 20, 30, 40, 50];

// Variável como índice
var indice = 2;

// Acessando e modificando elementos usando variável como índice
console.log(numeros[indice]); // Saída: 30

numeros[indice] = 35;
console.log(numeros); // Saída: [10, 20, 35, 40, 50]
```

Neste exemplo, a variável indice é usada como índice para acessar e modificar o valor do terceiro elemento no array numeros.

Se você quiser acessar a última posição de um array, pode usar o índice `length - 1`, onde `length` é o comprimento do array:

```js
var ultimaPosicao = frutas[frutas.length - 1];
console.log(ultimaPosicao); // Saída: Morango
```

Lembre-se de que tentar acessar um índice que está fora dos limites do array resultará em `undefined`. Portanto, é sempre bom verificar se o índice está dentro dos limites antes de acessar o elemento.
