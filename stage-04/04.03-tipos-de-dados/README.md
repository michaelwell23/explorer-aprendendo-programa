# TIPOS DE DADOS

## STRING

Em JavaScript, uma string é um tipo de dado que representa uma sequência de caracteres. As strings são utilizadas para armazenar e manipular texto. Elas podem conter letras, números, símbolos, espaços e outros caracteres.

A criação de uma string em JavaScript pode ser feita de diversas maneiras. Você pode usar aspas simples ('), aspas duplas ("), ou acentos graves (`` ) para delimitar uma string:

```js
let str1 = 'Isso é uma string usando aspas simples.';
let str2 = 'Isso é uma string usando aspas duplas.';
let str3 = `Isso é uma string usando acentos graves.`;
```

As string são imutáveis, o que significa que uma vez que uma string é criada, ela não pode ser alterada. No entanto, podemos criar uma nova string com base na original realizando operações de manipulação de string:

```js
let original = 'Olá, mundo!';
let novaString = original.toUpperCase(); // Converte para maiúsculas
console.log(novaString); // Saída: OLÁ, MUNDO!
```

Existem várias propriedades e métodos disponíveis para manipulação de strings em JavaScript. Alguns exemplos incluem:

- **length**: Retorna o número de caracteres em uma string

```js
let nome = 'João';
console.log(nome.length); // Saída: 4
```

- **charAt(index)**: Retorna o caractere na posição especificada.

```js
let palavra = 'JavaScript';
console.log(palavra.charAt(0)); // Saída: J
```

- **concat(str1, str2, ...)**: Concatena duas ou mais strings.

```js
let primeiraParte = 'Olá, ';
let segundaParte = 'mundo!';
let saudacao = primeiraParte.concat(segundaParte);
console.log(saudacao); // Saída: Olá, mundo!
```

- **indexOf(substring)**: Retorna o índice da primeira ocorrência da substring na string, ou -1 se não for encontrada.

```js
let texto = 'A programação é divertida!';
console.log(texto.indexOf('divertida')); // Saída: 16
```

Estes são apenas alguns exemplos, e há muitos outros métodos e propriedades que podem ser usados para manipular strings em JavaScript. O conhecimento dessas ferramentas é útil para trabalhar eficientemente com dados de texto em seus programas JavaScript.

---

## NUMBER

Em JavaScript, o tipo de dado `number` é utilizado para representar valores numéricos, sejam eles inteiros ou de ponto flutuante (número decimais).

```js
let inteiro = 42; // Um número inteiro
let decimal = 3.14; // Um número de ponto flutuante
let notacaoCientifica = 2.5e6; // Notação científica: 2.5 * 10^6

let hexadecimal = 0x1a; // Representação hexadecimal
let binario = 0b101010; // Representação binária
let octal = 0o52; // Representação octal
```

Os numeros em JavaScript são de precisão dupla de 64 bist, sguindo o padrão IEEE754. Isso significa que eles podem representar uma ampla gama de valores, mas existem limitações na precisão para números muito grandes ou muito pequenos. Operações matemáticas basicas, como adição, subtração, multiplicação e divisão, podem ser realizadas com números em JavaScript:

```js
let a = 5;
let b = 2;

let soma = a + b; // Soma: 7
let diferenca = a - b; // Diferença: 3
let produto = a * b; // Produto: 10
let quociente = a / b; // Quociente: 2.5
```

É importante notar que números em JavaScript também podem representar valores especiais, como `Infinity` (infinito) e `NaN` (Not a Number):

```js
let infinitoPositivo = Infinity;
let infinitoNegativo = -Infinity;
let naoEhUmNumero = NaN;
```

A verificação de igualdade com números de ponto flutuante pode ser um desafio devido à representação imprecisa de alguns valores.

```js
console.log(0.1 + 0.2 === 0.3); // Pode resultar em false devido à imprecisão de representação
```

Para lidar com comparações de ponto flutuante, muitas vezes é recomendável usar uma tolerância para diferenças pequenas.

Além disso, JavaScript fornece objetos e funções embutidas relacionadas a números, como Math para operações matemáticas mais avançadas:

```js
let raizQuadrada = Math.sqrt(16); // Raiz quadrada: 4
let seno = Math.sin(Math.PI / 2); // Seno de 90 graus: 1
let aleatorio = Math.random(); // Número aleatório entre 0 e 1
```

Entender como os números são representados e como realizar operações matemáticas ajuda a escrever código eficiente e preciso ao lidar com cálculos numéricos.

---

## BOOLEAN

O tipo de dado boolean em JavaScript representa um valor lógico e tem apenas dois valores possíveis: `true` (verdadeiro) ou `false` (falso). Os valores booleanos são frequentemente usados em expressões lógicas e condicionais para tomar decisões no código:

```js
let verdadeiro = true;
let falso = false;

// Exemplo de expressão lógica usando um operador de comparação
let resultadoComparacao = 5 > 3; // true, porque 5 é maior que 3

// Exemplo de expressão condicional usando um if statement
if (resultadoComparacao) {
  console.log('A condição é verdadeira.');
} else {
  console.log('A condição é falsa.');
}
```

Operadores lógicos, como && (e), || (ou) e ! (não), são comumente usados para combinar ou negar valores booleanos:

```js
let valor1 = true;
let valor2 = false;

let resultadoE = valor1 && valor2; // false, porque ambos os valores precisam ser verdadeiros
let resultadoOu = valor1 || valor2; // true, porque apenas um dos valores precisa ser verdadeiro
let resultadoNao = !valor1; // false, negando o valor1
```

Além disso, valores não booleanos podem ser avaliados como booleanos em contextos booleanos. Qualquer valor pode ser convertido para um booleano usando a função Boolean() ou implicitamente em contextos que esperam um valor booleano, como em uma instrução `if`.

```js
let valorNaoBooleano = 'Olá, mundo!';

let valorConvertido = Boolean(valorNaoBooleano); // true, porque qualquer valor não vazio é considerado verdadeiro

if (valorNaoBooleano) {
  console.log('Este bloco será executado, pois o valor é verdadeiro.');
} else {
  console.log('Este bloco não será executado.');
}
```

Os valores booleanos são fundamentais para a lógica de controle de fluxo em programação. Eles são usados em declarações condicionais, loops e muitas outras situações onde decisões baseadas em lógica precisam ser tomadas

---

## UNDEFINED VS NULL

`Undefined` e `null` são dois valores especiais em JavaScript que indicam a ausência de um valor. Embora eles sejam semelhantes em alguns aspectos, há diferenças importantes entre eles.

- **Undefined**: Indica que uma variável foi declarada, mas ainda não foi atribuida a ela nenhum valor. Também é o valor retornado por uma função que não possui uma declaração `return`. Além disso, ao acessar uma propriedade de objeto que não existe, o valor retornado é `undefined`.

```js
let variavelIndefinida;
console.log(variavelIndefinida); // Saída: undefined

function funcaoSemReturn() {
  // Sem declaração return, a função retorna undefined
}

let objeto = {};
console.log(objeto.propriedadeInexistente); // Saída: undefined
```

- **null**: Indica a ausência intencional de qualquer objeto ou valor. Diferente de `undefined`, `null` é atribuido explicitamente para indicar a ausência de valor:

```js
let variavelNula = null;
console.log(variavelNula); // Saída: null
```

Em resumo, enquanto undefined é geralmente usado para indicar uma variável não inicializada ou a ausência de retorno de uma função, null é usado para indicar uma ausência intencional de valor. Ambos são valores primitivos em JavaScript e são considerados "falsy" quando usados em contextos booleanos. Isso significa que, em uma expressão booleana, eles são tratados como false.

```js
if (undefined) {
  console.log('Isso não será executado.'); // Não será executado
}

if (null) {
  console.log('Isso não será executado.'); // Não será executado
}
```

É importante notar que, em comparações estritas (===), undefined e null são diferentes entre si e também diferentes de outros valores, como false ou uma string vazia.

---

## OBJECT

Em JavaScript, objetos são estruturas de dados fundamentais que permitem armazenar e organizar dados de forma mais complexa do que tipos de dados simples, como números ou strings. Os objetos são coleções de pares chave-valor, onde cada chave é uma string (ou símbolo) que identifica exclusivamente um valor associado a ela. Aqui estão alguns conceitos fundamentais sobre objetos em JavaScript:

### 1. Sintaxe de Objeto Literal

A forma mais comum de criar objetos em JavaScript é usando a sintaxe de objeto literal:

```js
let pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Desenvolvedor',
};
```

exemplo, nome, idade, e profissao são as chaves, e 'João', 30, e 'Desenvolvedor' são os valores associados a essas chaves.

### 2. Acesso a Propriedades

As propriedades de um objeto podem ser acessadas usando a notação de ponto (objeto.propriedade) ou a notação de colchetes (objeto['propriedade'])

```js
console.log(pessoa.nome); // Saída: João
console.log(pessoa['idade']); // Saída: 30
```

### 3. Adição e Atualização de Propriedades

Você pode adicionar novas propriedades a um objeto ou atualizar os valores de propriedades existentes:

```js
pessoa.email = 'joao@example.com'; // Adicionando uma nova propriedade
pessoa.idade = 31; // Atualizando o valor de uma propriedade
```

### 4. Métodos

Objetos em JavaScript também podem conter funções, que são chamadas de métodos quando são associadas a objetos. Os métodos são definidos como pares chave-valor, onde a chave é o nome do método e o valor é a função associada.

```js
let carro = {
  modelo: 'Civic',
  ano: 2022,
  ligar: function () {
    console.log('O carro está ligado.');
  },
};

carro.ligar(); // Saída: O carro está ligado.
```

### 5. Remoção de Propriedades

Você pode remover uma propriedade de um objeto usando o operador delete:

```js
delete pessoa.profissao; // Remove a propriedade 'profissao' do objeto pessoa
```

### 6. Iteração sobre Propriedades

Para iterar sobre as propriedades de um objeto, você pode usar loops ou métodos específicos, como for...in:

```js
for (let chave in pessoa) {
  console.log(chave + ': ' + pessoa[chave]);
}
```

### 7. Objetos como Referências

Em JavaScript, objetos são passados por referência. Isso significa que, ao atribuir um objeto a outra variável, ambas as variáveis referenciam o mesmo objeto na memória.

```js
let pessoa1 = { nome: 'Maria' };
let pessoa2 = pessoa1; // pessoa2 agora referencia o mesmo objeto que pessoa1

pessoa2.nome = 'Mariana';
console.log(pessoa1.nome); // Saída: Mariana
```

Esses são apenas alguns conceitos básicos sobre objetos em JavaScript. Eles são fundamentais para a linguagem, e muitos recursos e padrões de programação em JavaScript são baseados no uso eficaz de objetos.

---

## ARRAY

Em JavaScript, arrays são estruturas de dados que permitem armazenar vários valores em uma única variável. Os valores em um array podem ser de qualquer tipo de dado, incluindo números, strings, objetos e até mesmo outros arrays. Aqui estão alguns conceitos importantes sobre arrays em JavaScript:

### 1. Criação de Arrays

Você pode criar um array usando a notação de colchetes ([]) e incluindo os valores separados por vírgulas:

```js
let frutas = ['Maçã', 'Banana', 'Morango'];
```

### 2. Acesso a Elementos

Os elementos em um array são acessados por meio de um índice, começando do índice 0 para o primeiro elemento. A notação de colchetes é usada para acessar os elementos:

```js
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[1]); // Saída: Banana
```

### 3. Comprimento do Array

Você pode obter o comprimento (número de elementos) de um array usando a propriedade length:

```js
console.log(frutas.length); // Saída: 3
```

### 4. Adição e Remoção de Elementos

Arrays são dinâmicos em JavaScript, o que significa que você pode adicionar ou remover elementos durante a execução do programa.

**Adição no Final**:

```js
frutas.push('Abacaxi'); // Adiciona 'Abacaxi' ao final do array
```

**Remoção do Final**:

```js
let ultimoElemento = frutas.pop(); // Remove e retorna o último elemento do array
```

**Adição no Início**:

```js
frutas.unshift('Pera'); // Adiciona 'Pera' no início do array
```

**Remoção do Início**:

```js
let primeiroElemento = frutas.shift(); // Remove e retorna o primeiro elemento do array
```

### 5. Iteração sobre Elementos

Você pode usar loops, como for ou for...of, para iterar sobre os elementos de um array:

```js
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Ou usando for...of
for (let fruta of frutas) {
  console.log(fruta);
}
```

### 6. Métodos de Array

JavaScript fornece uma variedade de métodos embutidos para manipulação de arrays, como map, filter, e reduce, que facilitam a realização de operações em todos os elementos do array.

### 7. Arrays como Objetos

Em JavaScript, os arrays são objetos especiais com métodos e propriedades específicos para manipulação de listas de valores.

### 8. Arrays Aninhados

Arrays podem conter outros arrays, criando estruturas de dados mais complexas e multidimensionais.

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

Esses são alguns conceitos básicos sobre arrays em JavaScript. Eles são fundamentais para muitos aspectos da programação JavaScript e são amplamente utilizados em várias situações.
