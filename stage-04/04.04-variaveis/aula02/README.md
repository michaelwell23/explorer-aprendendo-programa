# TIPOS DINÂMICOS

JavaScript é uma linguagem de programação tipada dinamicamente. Essa característica influencia a maneira como as variáveis são tratadas em tempo de execução. Vamos entender esses conceitos:

## Tipagem Dinâmica:

**Dinâmica**: Isso significa que o tipo de uma variável é determinado em tempo de execução, não em tempo de compilação. Você pode reatribuir variáveis para conter diferentes tipos de dados durante a execução do programa

```js
let variavel = 10; // 'variavel' é do tipo número
console.log(variavel);

variavel = 'Texto'; // Agora 'variavel' é do tipo string
console.log(variavel);
```

O exemplo acima a variável variavel começa como um número e, em seguida, é reatribuída como uma string.

## Tipagem Fraca:

**Fraca**: Isso significa que a linguagem pode realizar conversões automáticas entre tipos de dados sem a necessidade de intervenção explícita do programador.

```js
let numero = 42;
let texto = '10';

let resultado = numero + texto; // JavaScript converte 'numero' para string e realiza concatenação
console.log(resultado); // Saída: "4210"
```

Aqui, a adição é possível porque JavaScript converte automaticamente o número em uma string para realizar a concatenação.

## Vantagens e Desvantagens:

### Vantagens da Tipagem Dinâmica:

- **Flexibilidade**: Permite uma maior flexibilidade durante o desenvolvimento, pois você não precisa se preocupar tanto com a declaração de tipos.

- **Menos código boilerplate**: Não é necessário declarar explicitamente os tipos de variáveis, o que pode reduzir a quantidade de código.

### Desvantagens da Tipagem Dinâmica:

- **Erros em tempo de execução**: Como os tipos são verificados em tempo de execução, erros de tipo podem passar despercebidos até que o código seja executado.

- _Menos otimização em tempo de compilação_: A falta de informações de tipo em tempo de compilação pode levar a menos otimizações por parte do compilador, o que pode afetar o desempenho em algumas situações.

## Considerações Finais:

A tipagem dinâmica pode ser uma característica poderosa em JavaScript, permitindo uma maior flexibilidade no desenvolvimento. No entanto, é importante ter cuidado para evitar erros de tipo que podem ocorrer durante a execução do programa. Testes adequados e boas práticas de programação ajudam a mitigar esses riscos.
