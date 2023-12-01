# CASAS DECIMAIS

Parece que você mencionou "false", mas eu presumirei que você quis dizer "fale". Vamos discutir os métodos toUpperCase e toLowerCase em JavaScript.

## Método toUpperCase

O método toUpperCase é utilizado em strings para converter todos os caracteres da string em maiúsculas.

```js
var palavra = 'hello';
var palavraMaiuscula = palavra.toUpperCase();

console.log(palavraMaiuscula); // Saída: "HELLO"
```

## Método toLowerCase

O método toLowerCase é utilizado em strings para converter todos os caracteres da string em minúsculas.

```js
var palavra = 'WORLD';
var palavraMinuscula = palavra.toLowerCase();

console.log(palavraMinuscula); // Saída: "world"
```

Estes métodos são frequentemente utilizados quando você precisa comparar strings sem diferenciar maiúsculas de minúsculas, ou quando deseja garantir consistência no formato das strings.

O exemplo abaixo utiliza ambos os métodos em conjunto e garante que uma string esteja em um formato específico.

```js
var inputUsuario = 'ExEMPlo';

// Normalizar a entrada convertendo para minúsculas e, em seguida, capitalizando a primeira letra
var stringFormatada =
  inputUsuario.toLowerCase().charAt(0).toUpperCase() + inputUsuario.slice(1);

console.log(stringFormatada); // Saída: "Exemplo"

// toLowerCase é usado para garantir que todas as letras estejam em minúsculas, e toUpperCase é usado para capitalizar a primeira letra da string. Isso resulta em "Exemplo".
```

Esses métodos são úteis em situações onde você precisa manipular o caso das letras em strings para garantir a consistência ou para realizar comparações insensíveis a maiúsculas e minúsculas.
