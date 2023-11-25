/**
 * O hoisting em JavaScript é um comportamento que ocorre durante a fase de compilação, na qual as declarações de variáveis e funções são movidas para o topo de seus respectivos escopos antes da execução real do código. No caso de funções, isso significa que você pode chamar uma função antes mesmo de ela ser declarada no código. No entanto, é importante notar que apenas a declaração da função é elevada, não a atribuição de valor (caso haja).
 */

// Chamando a função antes da declaração
hoistingExemplo();

// Declaração da função
function hoistingExemplo() {
  console.log('Exemplo de Hoisting de Função');
}

/**
 * Mesmo que estejamos chamando a função hoistingExemplo() antes da sua declaração, o código funcionará corretamente devido ao hoisting. Durante a fase de compilação, a declaração da função é movida para o topo do escopo, permitindo que a chamada seja feita em qualquer ponto dentro desse escopo.

Agora, considere o exemplo com uma atribuição de valor:
 */

// Tentando chamar a função antes da declaração com atribuição
hoistingComAtribuicao(); // Isso gerará um erro!

// Declaração da função com atribuição
var hoistingComAtribuicao = function () {
  console.log('Exemplo de Hoisting com Atribuição');
};

/**
 * Neste caso, ocorrerá um erro, pois apenas a declaração da variável hoistingComAtribuicao é elevada, não a atribuição da função. Portanto, na chamada da função antes da atribuição, hoistingComAtribuicao será undefined e tentar chamar uma função a partir de undefined resultará em um erro.

Em resumo, ao lidar com hoisting de funções, é importante ter em mente que apenas a declaração da função é elevada, não a atribuição de valor. Esse comportamento pode ser útil, mas também pode levar a resultados inesperados se não for compreendido corretamente.
 */
