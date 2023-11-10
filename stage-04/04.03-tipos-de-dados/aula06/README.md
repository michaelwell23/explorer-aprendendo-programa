# OBJECT

Em JavaScript, o tipo de dado `object` é uma estrutura de dados fundamental e versátil que permite armazenar e organizar dados de várias formas. Os objetos são coleções de pares chave-valor, onde cada chave é uma string, e o valor pode ser de qualquer tipo de dado, incluindo outros objetos.

Aqui está uma introdução aos objetos em JavaScript:

## Criando um Objeto:

Você pode criar um objeto de várias maneiras, mas uma das formas mais comuns é usando a sintaxe de chaves {}. Dentro das chaves, você especifica as propriedades e seus valores.

```js
var pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'Exemploville',
  estaEstudando: true,
};
```

## Acessando Propriedades:

Você pode acessar as propriedades de um objeto usando a notação de ponto (objeto.propriedade) ou a notação de colchetes (objeto['propriedade']).

```js
console.log(pessoa.nome); // João
console.log(pessoa['idade']); // 30
```

## Adicionando e Modificando Propriedades:

Você pode adicionar novas propriedades ou modificar propriedades existentes em um objeto.

```js
pessoa.profissao = 'Desenvolvedor';
pessoa.idade = 31;

console.log(pessoa.profissao); // Desenvolvedor
console.log(pessoa.idade); // 31
```

## Métodos em Objetos:

Propriedades de objetos também podem conter funções, chamadas de métodos.

```js
var carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ligar: function () {
    console.log('O carro está ligado.');
  },
};

carro.ligar(); // O carro está ligado.
```

Os objetos em JavaScript são fundamentais para a linguagem e são amplamente utilizados em programação. Eles são a base para estruturas de dados mais complexas, como arrays, e são usados para representar uma variedade de conceitos, desde entidades do mundo real até estruturas de controle de aplicativos.
