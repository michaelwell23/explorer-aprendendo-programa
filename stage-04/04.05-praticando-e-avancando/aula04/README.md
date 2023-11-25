# OBJETOS

Para obter valores de um objeto e usar interpolação de variáveis, você pode acessar as propriedades do objeto e incorporar esses valores em uma string usando template strings. Aqui está um exemplo simples:

```js
// Objeto com informações do usuário
var usuario = {
  nome: 'Ana',
  idade: 28,
  cidade: 'São Paulo',
};

// Interpolação de variáveis usando template strings
var mensagemUsuario = `Olá, meu nome é ${usuario.nome}, tenho ${usuario.idade} anos e moro em ${usuario.cidade}.`;
console.log(mensagemUsuario);
// Saída: Olá, meu nome é Ana, tenho 28 anos e moro em São Paulo.
```

Neste exemplo, as propriedades do objeto usuario (nome, idade e cidade) são acessadas e interpoladas diretamente na string usando template strings.

Se as propriedades do objeto forem dinâmicas ou dependerem de variáveis, você pode fazer algo como:

```js
// Objeto com informações do produto
var produto = {
  nome: 'Notebook',
  preco: 1500,
};

// Variável dinâmica para a propriedade a ser acessada
var propriedade = 'preco';

// Interpolação de variáveis usando template strings
var mensagemProduto = `O ${produto.nome} custa $${produto[propriedade]}.`;
console.log(mensagemProduto);
// Saída: O Notebook custa $1500.
```

Neste exemplo, a variável propriedade é usada para acessar dinamicamente uma propriedade do objeto produto. Essa abordagem é útil quando você precisa acessar propriedades de forma dinâmica.

Lembre-se de que a interpolação de variáveis usando template strings é uma característica introduzida no ECMAScript 6 (ES6) e versões posteriores do JavaScript. Portanto, certifique-se de estar usando uma versão do JavaScript que suporte essa funcionalidade.
