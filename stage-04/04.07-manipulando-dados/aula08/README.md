# ENCONTRANDO PALAVRAS EM FRASES

## Método Includes

O método includes é uma função incorporada em arrays e strings em JavaScript que verifica se um determinado elemento ou substring está presente no array ou string.

- Sintaxe:
  - Para Arrays:

```js
array.includes(valor, [aPartirDe]);
```

Para Strings:

```js
string.includes(substring, [posiçãoInicial]);
```

- Parâmetros:

  - `valor` ou `substring`: O elemento ou substring a ser procurado.
  - `aPartirDe` ou `posiçãoInicial` (opcional): O índice a partir do qual a busca deve começar.

## Utilizando includes com Arrays:

Exemplo Básico:

```js
var numeros = [1, 2, 3, 4, 5];
var contemTres = numeros.includes(3);

console.log(contemTres); // Saída: true
```

Utilizando a Partir de uma Posição Específica:

```js
var numeros = [1, 2, 3, 4, 5];
var contemTres = numeros.includes(3, 2);
console.log(contemTres); // Saída: false (começando a busca a partir do índice 2)
```

## Utilizando includes com Strings:

Exemplo Básico:

```js
var frase = 'JavaScript é uma linguagem poderosa!';
var contemJava = frase.includes('Java');

console.log(contemJava); // Saída: true
```

Utilizando a Partir de uma Posição Específica:

```js
var frase = 'JavaScript é uma linguagem poderosa!';
var contemJava = frase.includes('Java', 5);

console.log(contemJava); // Saída: false (começando a busca a partir do índice 5)
```

## Considerações Adicionais:

- `Case-sensitive`: O método includes é case-sensitive, o que significa que "Java" e "java" são tratados como strings diferentes.

- `Retorno Booleano`: O método includes retorna um valor booleano (true ou false), indicando se o valor ou substring está presente.

- `Compatibilidade`: includes está disponível em ECMAScript 2016 (ES7) e versões mais recentes.

---

## EXERCÍCIO PRÁTICOS

Exercício 1: Crie uma função que verifica se uma palavra específica está presente em uma lista de palavras.

Exercício 2: Dada uma frase, crie uma função que conta quantas vezes uma determinada palavra aparece nela.

Exercício 3: Implemente uma função que verifica se um array contém todos os elementos de outro array.

### Aplicações Práticas

Pesquisa em Bancos de Dados: Use includes para buscar registros em uma base de dados que contenham determinadas palavras-chave.

Validação de Entrada do Usuário: Utilize includes para verificar se uma entrada do usuário contém caracteres ou palavras específicas.

Estes exercícios e aplicações práticas ajudarão a reforçar o entendimento e a utilização do método includes em contextos reais.
