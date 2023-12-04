var nota1 = 7.5;
var nota2 = 8.0;

// Calculando a média
var media = (nota1 + nota2) / 2;

// Definindo um limite mínimo de aprovação
var limiteAprovacao = 7.0;

// Utilizando a estrutura if/else para decidir se o estudante foi aprovado ou reprovado
if (media >= limiteAprovacao) {
  console.log('Parabéns! Você foi aprovado com média ' + media.toFixed(2));
} else {
  console.log('Infelizmente, você foi reprovado com média ' + media.toFixed(2));
}
