# TYPE CONVERSION E TYPE COERSION

Type Conversion e Type Coersion são conceitos importantes em JavaScript relacionados à maneira como os valores são convertidos entre diferentes tipos de dados.

## Type Conversion

**Type Conversion**, ou conversão de tipo, ocorre explicitamente convertemos um valor de um tipo para outro. Isso pode feito usando funções ou métodos específicos de conversão.

### String para Número

```js
var numeroString = '42';
var numero = Number(numeroString);
console.log(numero); // Saída: 42
```

### Numero para string

```js
var numero = 42;
var numeroString = String(numero);
console.log(numeroString); // Saída: "42"
```

### Boolean para numeros

```js
var booleano = true;
var numero = Number(booleano);
console.log(numero); // Saída: 1
```

### Arrays para string

```js
var meuArray = [1, 2, 3];
var stringArray = meuArray.toString();
console.log(stringArray); // Saída: "1,2,3"
```

---

## Type Coercion

**Type Coercion** ou coeção de tipo, refere-se à conversão automática de tipos durante a avaliação de expreção. Isso ocorre quando operadores esperam operadors de um tipo específico e os operadores fornecidos são de outro tipo.

### Operador de adição (+)

```js
//Neste exemplo, a string "42" é convertida implicitamente para número durante a operação de adição.

var stringNumero = '42';
var numero = 10;
var resultado = stringNumero + numero;
console.log(resultado); // Saída: "4210" (a string é concatenada)
```

### Operador de igualdade (==)

```js
//Aqui, ocorre coerção de tipo durante a comparação, resultando em igualdade mesmo sendo tipos diferentes.

var numero = 42;
var stringNumero = '42';
console.log(numero == stringNumero); // Saída: true
```

### Operador de subtração (-)

```js
// O operador de subtração força a coerção de tipo, convertendo a string "42" para o número 42.

var stringNumero = '42';
var numero = 10;
var resultado = stringNumero - numero;
console.log(resultado); // Saída: 32 (a string é convertida para número)
```

---

## Diferenças entre Type Coversion e Type Coercion

- Type Conversion é uma conversão explícita realizada pelo desenvolvedor usando funções ou métodos, enquanto Type Coercion é uma conversão implícita que ocorre automaticamente durante a avaliação de expressões.

- Type Conversion é controlado pelo desenvolvedor e é explícito, o que significa que você escolhe quando e como converter um tipo para outro. Por outro lado, Type Coercion é implícito e muitas vezes ocorre automaticamente em operações.

- Type Conversion é geralmente mais seguro e fácil de entender, pois você tem controle total sobre as conversões. Type Coercion, por outro lado, pode levar a resultados inesperados se não for compreendido corretamente.

É importante estar ciente desses conceitos ao trabalhar com JavaScript, pois o entendimento correto da conversão de tipos é crucial para evitar comportamentos inesperados em seu código.
