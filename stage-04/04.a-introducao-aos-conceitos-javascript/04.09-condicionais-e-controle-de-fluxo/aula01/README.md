# CONTROLE DE FLUXO

O fluxo de controle em JavaScript refere-se à ordem em que as instruções são executadas em um programa. Em essência, o controle do programa é determinado por estruturas de controle de fluxo, como condicionais (if, else) e loops (for, while). Essas estruturas permitem que o código tome decisões com base em condições específicas e repita tarefas até que uma condição seja atendida.

No JavaScript, o fluxo de controle começa com a execução do código de cima para baixo. As instruções condicionais permitem que o programa escolha entre diferentes caminhos de execução com base em avaliações booleanas. Por exemplo, um bloco de código dentro de um "if" será executado apenas se a condição for verdadeira. Caso contrário, o bloco de código dentro de "else" (se existir) pode ser executado.

## Estruturas Condicionais

- **if**: A instrução if é usada para executar um bloco de código se uma condição especificada for verdadeira.

```js
if (condicao) {
  // código a ser executado se a condição for verdadeira
}
```

- **else if**: Pode ser utilizado para testar várias condições em sequência.

```js
if (condicao1) {
  // código se a condição1 for verdadeira
} else if (condicao2) {
  // código se a condição2 for verdadeira
} else {
  // código se nenhuma das condições anteriores for verdadeira
}
```

**switch**: Uma estrutura de controle de fluxo mais avançada para testar múltiplas condições.

```js
switch (expressao) {
  case valor1:
    // código a ser executado se a expressão for igual a valor1
    break;
  case valor2:
    // código a ser executado se a expressão for igual a valor2
    break;
  default:
  // código a ser executado se nenhum dos casos anteriores for correspondido
}
```

Os loops, por outro lado, permitem a repetição de um bloco de código até que uma condição seja falsa. Isso é útil para processar arrays, iterar sobre elementos ou realizar tarefas repetitivas. Os loops é algo que será abordado mais adiante.

Além disso, as funções desempenham um papel crucial no controle de fluxo, permitindo que o código seja modularizado e reutilizado. Ao chamar uma função, você pode transferir o controle para o bloco de código correspondente à função, e ao retornar, o controle volta para onde a função foi chamada.

Em resumo, o fluxo de controle em JavaScript é gerenciado por estruturas condicionais, loops e chamadas de função. Compreender como essas estruturas interagem é fundamental para criar programas eficientes e lógicos.
