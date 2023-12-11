# AULA 08: JOGO DA ADIVINHAÇÃO

O controle de fluxo refere-se à maneira como o programa decide eecutar instruções combase em condições especificas. Em JavaScript, existem várias estruturas de controle de fluxo, e uma delas é a estrutura de repetição `while`

## While

A estrutura de repetição `while` permite que um bloco de código seja repetido enquanto uma condição especifica for verdadeira. O loop abaixo imprimirá os números de 0 a 4, já que o código dentro do loop é executado enquanto a condição contador < 5 for verdadeira.

```js
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
```

## Função Math

A biblioteca Math em JavaScript fornece várias funções matemáticas. Algumas delas incluem:

**Math.round(x)**: Arredonda um número para o inteiro mais próximo.
**Math.ceil(x)**: Arredonda para cima, para o próximo inteiro.
**Math.floor(x)**: Arredonda para baixo, para o inteiro anterior.
**Math.random()**: Gera um número decimal pseudoaleatório entre 0 (inclusive) e 1 (exclusive).

```js
let numero = 5.67;

console.log(Math.round(numero)); // Saída: 6
console.log(Math.ceil(numero)); // Saída: 6
console.log(Math.floor(numero)); // Saída: 5
console.log(Math.random()); // Gera um número aleatório entre 0 e 1
```

## Tipo de Dado NaN:

NaN representa "Not a Number" e é um valor especial em JavaScript que indica uma operação matemática inválida. Por exemplo, se você tentar realizar uma operação de divisão por zero, o resultado será NaN.

```js
let resultado = 10 / 0;
console.log(resultado); // Saída: NaN
```

## Tipo de Erro SyntaxError:

SyntaxError é um tipo de erro que ocorre quando há um erro de sintaxe no código. Pode ser causado por parênteses ausentes, ponto e vírgula, chaves não fechadas, etc.

```js
// Exemplo de SyntaxError
console.log('Hello, world!';)
// Vai gerar um erro porque há um ponto e vírgula fora de lugar

```

## Função console:

O objeto console em JavaScript fornece métodos para interagir com o console do navegador ou ambiente de execução. O método console.log() é comumente usado para exibir mensagens de log.

```js
console.log('Mensagem de log');
```

## Template Literals:

Os template literals são uma forma de criar strings mais legíveis e flexíveis em JavaScript, permitindo a incorporação de expressões e variáveis diretamente nas strings.

```js
let nome = 'João';
let idade = 25;

let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem);
```

Os template literals são definidos usando crases (``) e as expressões são envolvidas em ${}.

Esses são alguns conceitos básicos em JavaScript relacionados ao controle de fluxo, estrutura de repetição, funções matemáticas, tipos de dados, erros, uso do console e template literals.
