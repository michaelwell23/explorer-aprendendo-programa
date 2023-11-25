// As callback functions, ou funções de retorno de chamada em português, são funções em JavaScript que são passadas como argumentos para outras funções. Essas funções são chamadas de volta (callback) após a conclusão de uma determinada tarefa ou evento assíncrono. As callbacks são uma parte fundamental do estilo de programação assíncrona em JavaScript.

// Função que recebe uma função de retorno de chamada como argumento
function realizarOperacao(x, y, operacaoCallback) {
  // Realiza uma operação e chama a função de retorno de chamada
  const resultado = x + y;
  operacaoCallback(resultado);
}

// Função de retorno de chamada que apenas imprime o resultado no console
function imprimirResultado(resultado) {
  console.log('O resultado é: ' + resultado);
}

// Chamando a função principal com a função de retorno de chamada
realizarOperacao(5, 3, imprimirResultado);

/*
Neste exemplo, a função realizarOperacao recebe dois números e uma função de retorno de chamada (operacaoCallback). Ela realiza uma operação simples (adição neste caso) e chama a função de retorno de chamada com o resultado.

A função imprimirResultado é uma função de retorno de chamada que simplesmente imprime o resultado no console usando console.log. Essa função é passada como argumento para realizarOperacao.

Quando realizarOperacao é chamada, ela executa a operação e, em seguida, chama a função de retorno de chamada fornecida (imprimirResultado), que imprime o resultado no console.
*/
