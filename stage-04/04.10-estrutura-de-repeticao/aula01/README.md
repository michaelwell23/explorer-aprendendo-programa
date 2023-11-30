# FOR

O laço de repetição **"for"** em JavaScript é uma estrutura de controle que permite executar um bloco de código várias vezes. Ele é especialmente útil quando você sabe antecipadamente quantas vezes deseja que o código seja repetido. A sintaxe básica do laço "for" é a seguinte:

```js
for (inicialização; condição; incremento / decremento) {
  // bloco de código a ser repetido
}
```

- **Inicialização**: É onde você inicializa a variável de controle do loop. Geralmente, você declara e atribui um valor à variável nesta parte.

- **Condição**: A execução do bloco de código continuará enquanto esta condição for verdadeira. Se a condição se tornar falsa, o loop é encerrado.

- **Incremento/Decremento**: Aqui, você especifica como a variável de controle do loop deve ser modificada após cada iteração. Isso pode ser um incremento (i++) ou decremento (i--), por exemplo.

O exemplo a seguir ilustra um simples loop "for" que imprime os números de 1 a 5 no console:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Este código inicializa a variável i com 1, executa o loop enquanto i for menor ou igual a 5 e incrementa i em 1 após cada iteração.

Os loops "for" são amplamente utilizados em JavaScript para percorrer arrays, realizar operações repetitivas e automatizar tarefas que exigem repetição controlada. Eles oferecem uma maneira eficiente de lidar com iterações em seu código.
