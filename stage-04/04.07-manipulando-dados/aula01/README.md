# PROTOTYPE

**Protótipos** ou **Prototypes** desempenham um papel crucial no sistema de herança e são fundamentais para entender como objetos compartilham propriedades e métodos. Para entender protótipos em JavaScript, é essencial compreender alguns conceitos-chaves, como objetos, funções contrutoras, caideias de protótipos e a propriedade **prototype**.

## Objetos em JavaScript

Em JavaScript, quase tudo é um objeto ou pde ser compartar como um objeto. Um objeto é uma conleção de pares chave-valor, onde as chaves são strings e os valores podem ser de qualquer tipo de dado.

```js
var pessoa = {
  nome: 'João',
  idade: 30,
  saudacao: function () {
    console.log('Olá, meu nome é ' + this.nome);
  },
};
```

## Funções contrutoras

Funções contrutoras são usadas para criar objetos. Elas são chamadas como o operado `new` e, quando chamadas assim, criam um novo objeto. O protótipo desse objeto é definido pela propriedade **prototype** da função construtora.

```js
function Carro(marca, modelo, ano, cor) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.cor = cor;
}

let Supra = new Carro('Toyota', 'Supra', '1995', 'Branco');
```

## A propriedade **prototype**

Cada função em JavaScript tem uma propriedade especial chamada **prototype**. Esta propriedade é um objeto que se torna o protótipo de qualquer objeto criado usando essa função cmo contrutor.

```js
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.dizerNome = function () {
  console.log(`Meu nome é ${this.nome}`);
};

var meuAnimal = new Animal('Carpeado');
meuAnimal.dizerNome(); //Saíde: "Meu nome é Carpeado"
```

## Cadeia de protótipos

Quando acessamos uma propriedade ou métodoem um objeto, o JavaScript procura na própria instância do objeto. Se não encontrar, ele procura no protótipo desse objeto. Essa busca continua na cadeia de protótipos até chegar ao objeto `Object.prototype`, que é o ultimo elo da cadeia.

```js
console.log(meuAnimal.hasOwnProperty('nome')); // true
console.log(meuAnimal.hasOwnProperty('dizerNome')); //false
```

## Herança prototípica

JavaScript não possui classes no sentido tradicional, mas sim herança baseada em protótipos.Isso significa que você pode estender um objeto existente ao usar seu protótipo como base para um novo objeto.

```js
function Cachorro(nome, raca) {
  Animal.call(this, nome);
  this.raca = raca;
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function () {
  console.log('Au au!');
};

var meuCachorro = new Cachorro('Bolt', 'Vira-lata');
meuCachorro.dizerNome(); // Saída: "Meu nome é Bolt"
meuCachorro.latir(); // Saída: "Au au!"

// No exemplo acima, `Cachorro` herda de `Animal` usando `Object.create(Animal.prototype)`. O `constructor` também é ajustado para apontar a função correta. Assim, `meuCachorro` tem acesso tanto aos métoos de `Cachorro` quanto aos de `Animal`;
```

Compreender o sistema de protótipos em JavaScript é crucial para desenvolver código eficiente e entender como a herança funciona na linguagem. Essa abordagem única de herança pode parecer diferente de outras linguagens, mas é poderosa e flexível.
