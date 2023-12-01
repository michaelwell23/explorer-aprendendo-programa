# RETORNADO VALORES DE DENTRO DA FUNÇÃO

O retorno de valores de dentro de uma função é feito usando a palavra-chave `return`. Essa palavra-chave indica o valor que a função deve produzir como resultado quando é chamada. Aqui está alguns pontos importantes sobre retorno de valores em funções JavaScript:

## Utilizando `return`

```js
function somar(a, b) {
  return a + b;
}

let resultado = somar(2, 3);
console.log(resultado); // Saída: 5
```

No exemplo, a função somar retorna a soma de `a` e `b`, e o valor retornado é armazenado na variável resultado.

## Múltiplos `return`

Uma função pode ter várias instruções `return`, mas a execução da função termina assim que uma delas é encontrada. Isso significa que apenas um dos `return` será executado em uma chamada específica da função.

```js
function verificarNumero(numero) {
  if (numero > 0) {
    return 'Positivo';
  } else if (numero < 0) {
    return 'Negativo';
  } else {
    return 'Zero';
  }
}

console.log(verificarNumero(5)); // Saída: Positivo
console.log(verificarNumero(-3)); // Saída: Negativo
console.log(verificarNumero(0)); // Saída: Zero
```

## Funções sem return:

Se uma função não possui uma instrução return ou a instrução está sem um valor, a função retornará undefined implicitamente.

```js
function saudacao(nome) {
  console.log('Olá, ' + nome + '!');
  // Não há uma instrução 'return', a função retorna implicitamente 'undefined'
}

let resultado = saudacao('Maria');
console.log(resultado); // Saída: undefined
```

## Utilizando o valor retornado diretamente:

O valor retornado por uma função pode ser usado diretamente em expressões ou atribuído a variáveis.

```js
function dobrar(numero) {
  return numero * 2;
}

console.log(dobrar(4) + 3); // Saída: 11
let resultadoDobro = dobrar(6);
console.log(resultadoDobro); // Saída: 12
```

O retorno de valores em funções é fundamental para obter resultados de operações realizadas dentro da função e pode ser usado para tomar decisões, realizar cálculos ou fornecer dados para outras partes do programa.
