# FOR OF

O laço **for...of** é uma maneira conveniente de iterar sobre elementos iteráveis, como arrays, strings, mapas, conjuntos, e assim por diante. A sintaxe básica é a seguinte:

```js
for (let elemento of iteravel) {
  // bloco de código a ser executado para cada elemento no iterável
}
```

Aqui estão os principais pontos sobre o **for...of**:

- `Iterável`: Qualquer objeto que possua uma propriedade [Symbol.iterator] é considerado iterável. Exemplos comuns incluem arrays, strings, mapas e conjuntos.

- `Elemento`: A cada iteração, a variável especificada (elemento no exemplo acima) assume o valor do próximo elemento no iterável.

- `Não há necessidade de índices`: Ao contrário do for...in que itera sobre índices, o **for...of** itera diretamente sobre os valores, eliminando a necessidade de acessar elementos usando índices.

Aqui está um exemplo usando o **for...of** para iterar sobre os elementos de um array:

```js
let frutas = ['maçã', 'banana', 'laranja'];

for (let fruta of frutas) {
  console.log(fruta);
}
```

Neste exemplo, o código percorre o array frutas e imprime cada elemento no console.

O **for...of** é particularmente útil quando você precisa realizar operações em cada elemento de um iterável, pois oferece uma sintaxe mais limpa e legível em comparação com o for tradicional ou o forEach.

Por favor, sinta-se à vontade para fazer mais perguntas ou pedir esclarecimentos adicionais!
