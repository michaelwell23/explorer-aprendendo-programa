# TYPEOF & DELETE

Em JavaScript, os operadores typeof e delete são ferramentas úteis para avaliar tipos de dados e remover propriedades de objetos, respectivamente. Neste guia, exploraremos o uso desses operadores para entender melhor como eles funcionam e como podem ser aplicados em diferentes situações.

## Typeof

O operador typeof é usado para obter o tipo de um valor ou expressão. Ele retorna uma string indicando o tipo do operando.

```js
let numero = 42;
let texto = 'Olá, mundo!';
let array = [1, 2, 3];
let objeto = { chave: 'valor' };

console.log(typeof numero); // Saída: "number"
console.log(typeof texto); // Saída: "string"
console.log(typeof array); // Saída: "object"
console.log(typeof objeto); // Saída: "object"
```

O operador typeof é especialmente útil ao lidar com diferentes tipos de dados para evitar erros inesperados durante a execução do código.

## Delete

O operador `delete` é utilizado para remover uma propriedade de um objeto.

```js
let pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'São Paulo',
};

console.log(pessoa); // Saída: { nome: 'João', idade: 25, cidade: 'São Paulo' }

// Removendo a propriedade 'idade' do objeto pessoa
delete pessoa.idade;

console.log(pessoa); // Saída: { nome: 'João', cidade: 'São Paulo' }
```

É importante notar que o `delete` remove a propriedade, mas não afeta a estrutura do objeto em termos de índices em arrays ou tamanho de objetos. Ele apenas remove a associação entre o objeto e a propriedade.

### Uso com arrays

```js
let meuArray = [1, 2, 3, 4, 5];

console.log(meuArray); // Saída: [1, 2, 3, 4, 5]

// Removendo o elemento de índice 2 do array
delete meuArray[2];

console.log(meuArray); // Saída: [1, 2, <1 empty item>, 4, 5]
```

## Conclusão

Os operadores typeof e delete são ferramentas valiosas para trabalhar com tipos de dados e manipular objetos em JavaScript. Ao entender como esses operadores funcionam, você ganha mais controle sobre seu código e pode lidar eficientemente com diferentes situações durante o desenvolvimento. Pratique o uso desses operadores em diferentes contextos para consolidar seu conhecimento.
