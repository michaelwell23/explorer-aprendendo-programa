// Função construtora para criar objetos Pessoa
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Criando instâncias de Pessoa usando a função construtora
const pessoa1 = new Pessoa('João', 25);
const pessoa2 = new Pessoa('Maria', 30);

// Exibindo as instâncias no console
console.log('Pessoa 1:', pessoa1);
console.log('Pessoa 2:', pessoa2);

// Adicionando um método à função construtora
Pessoa.prototype.apresentar = function () {
  console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
};

// Chamando o método da instância pessoa1
pessoa1.apresentar();

/**
  Neste exemplo, Pessoa é uma função construtora que aceita parâmetros nome e idade e atribui esses valores às propriedades do objeto criado (this.nome e this.idade). Em seguida, são criadas duas instâncias de Pessoa usando new Pessoa().

  Os objetos resultantes (pessoa1 e pessoa2) são exibidos no console usando console.log.

  Além disso, é adicionado um método apresentar ao protótipo da função construtora Pessoa, que imprime uma mensagem de apresentação no console. O método é então chamado na instância pessoa1.

  Esse é um exemplo básico de como você pode usar uma função construtora para criar objetos em JavaScript, com console.log utilizado para exibir informações relevantes.
 */
