# CONCATENANDO E INTERPOLANDO VARIÁVEIS

Em JavaScript, concatenação e a interpolação são duas técnidas utilizadas para combinar strings e variáveis em uma única string. Ambas são maneiras de construir strings mais complexas a partir de partes menores.

## Concatenação

A concatenação é o processo de combinar duas ou mais strings em uma única string. Em javaScript, isso é feito usando o operador `+` para unir valores das strings.

```js
var nome = 'João';
var sobrenome = 'Silva';

// Concatenação usando o operador '+'
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto); // Saída: João Silva
```

No exemplo acima, as avariáveis nome e sobrenome são concatenadas e atribuidas uma outra variável nomeCompleto.

## INTERPOLAÇÃO

A interpolação de variáveis é uma técnica mais moderna e legível, indroduzida no ECMAScript 6. Ela permite que possamos inserir valores diretamente em uma string usando a sintaxe de template string.

```js
var nome = 'Maria';
var idade = 25;

// Interpolação de variáveis usando template strings
var mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem);
// Saída: Olá, meu nome é Maria e eu tenho 25 anos.
```

No exemplo acima, as variáveis nome e idade são diretamente incorporadas à string usando ${} dentro da template string. Esse método é mais conciso e legível, especialmente quando você lida com várias variáveis ou expressões.

A interpolação de variáveis também suporta expressões e pode abranger múltiplas linhas:

```js
var preco = 50;
var desconto = 0.2;

// Interpolação com expressões e múltiplas linhas
var mensagemPreco = `O preço com desconto é $${preco * (1 - desconto)}.
                    O desconto aplicado foi de ${desconto * 100}%.`;
console.log(mensagemPreco);
/*
Saída:
O preço com desconto é $40.
O desconto aplicado foi de 20%.
*/
```

Em resumo, tanto a concatenação quanto a interpolação são técnicas válidas para manipular strings em JavaScript. A escolha entre elas muitas vezes se resume a preferências pessoais ou conveniências específicas do código que você está escrevendo. No entanto, a interpolação de variáveis oferece uma sintaxe mais limpa e é geralmente preferida em cenários modernos
