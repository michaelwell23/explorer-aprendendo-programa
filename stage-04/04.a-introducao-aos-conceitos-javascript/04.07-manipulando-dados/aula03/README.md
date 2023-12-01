# A FUNÇÃO NUMBER

A função **Number** em JavaScript é um construtor de objetos numéricos, mas também é frequentemente utilizado como uma função para converter valores para o tipo de dado númerico. Quando utilizamos `Number(valor)`, ela tenta converter o valor fornecido para um número.

```js
var numero = Number(valor);
```

- Converter string em numero

```js
var numeroString = '42';
var numero = Number(numeroString);
console.log(numero); // Saída: 42
```

- Converter string com ponto flutuante para numero

```js
var numeroString = '3.14';
var numero = Number(numeroString);
console.log(numero); // Saída: 3.14
```

- Converter booleano para numero

```js
var booleano = true;
var numero = Number(booleano);
console.log(numero); // Saída: 1 (true é convertido para 1)
```

- Converter Array para Número (resulta em NaN - Not a Number):

```js
var meuArray = [1, 2, 3];
var numero = Number(meuArray);
console.log(numero); // Saída: NaN
```

- Converter Null e Undefined para Número (resulta em 0):

```js
var nulo = null;
var indefinido = undefined;
console.log(Number(nulo)); // Saída: 0
console.log(Number(indefinido)); // Saída: 0
```

## Comportamentos Importantes:

Quando a conversão não é possível, a função Number retorna NaN (Not a Number). Por exemplo, converter uma string que não representa um número válido resultará em NaN.

```js
var texto = 'abc';
var numero = Number(texto);
console.log(numero); // Saída: NaN
```

- A função Number também pode ser usada como um construtor para criar um objeto do tipo número, mas isso é menos comum em comparação com seu uso como uma função de conversão.

- Se a função Number for chamada sem argumentos ou com um argumento que não pode ser convertido para um número, ela retorna 0.

```js
console.log(Number()); // Saída: 0
```

A função Number é útil para converter valores para o tipo de dado número em JavaScript. No entanto, ao usá-la, é importante estar ciente de como ela lida com diferentes tipos de entrada e os possíveis resultados, incluindo NaN.
