# FUNÇÕES CONTRUTORAS

AS funções contrutoras são uma forma especial de criar objetos em JavaScript. Elas são usadas para criar múltiplas instâncias de objetos com base em um apsrão comum. Aqui estão alguns pontos importantes sobre funções construtoras:

## Definição básica

- Uma função construtora é uma função comum que é chamada usando palavras-chaves `new`;
- Ela é usada para criar e inicializar objetos com propriedades e métodos específicos;

```js
functions Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

const meuCarro = new Carro('Toyota', 'Supra', 1995)
```

---

## this e o novo objeto

- Dentr de uma função construtora, a apalavra-chave `this` refere-se ao novo objeto que está sendo criado;
- Propriedades são atributos ao objeto usando `this.propriedade`;

```js
function Livro(titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
}

const meuLivro = new Livro(
  'Padrões JavaScript',
  'Stoyan Stefanov,
  240
);

```

## Múltiplas Instâncias

- As funções construtoras permitem criar várias instâncias de objetos com base no mesmo modelo.
- Cada instância tem suas próprias cópias das propriedades da função construtora.

```js
const outroLivro = new Livro('Eloquent JavaScript', 'Marijn Haverbeke');
```

## Protótipo e Herança

- Funções construtoras em JavaScript têm uma propriedade especial chamada prototype.
- Propriedades e métodos definidos no prototype são compartilhados por todas as instâncias criadas pela função construtora, permitindo a implementação de herança.

```js
Livro.prototype.obterDetalhes = function () {
  return `${this.titulo} por ${this.autor}`;
};

console.log(meuLivro.obterDetalhes());
```

## Convenção de Nomeação

- Por convenção, funções construtoras são nomeadas com a primeira letra em maiúsculo para distinguir de funções regulares.

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa1 = new Pessoa('Alice', 25);
```

## instanceof para Verificação de Tipo

- A palavra-chave instanceof é usada para verificar se um objeto foi criado por uma determinada função construtora.

```js
console.log(pessoa1 instanceof Pessoa); // true
```

## Uso de new

- É crucial usar a palavra-chave new ao chamar uma função construtora para garantir que um novo objeto seja criado.

```js
const objetoIncorreto = Carro('Honda', 'Civic', 2023); // Isso resultará em um erro
```

exemplo correto:

```js
const carroCorreto = new Carro('Honda', 'Civic', 2023); // Correto
```

As funções construtoras são uma parte fundamental da programação orientada a objetos em JavaScript, permitindo a criação eficiente e organizada de objetos com propriedades e métodos específicos.
