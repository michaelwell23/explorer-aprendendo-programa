# SWITCH

O `switch`é uma alternativa ao `if/else` quando se trata de verificar múltiplas condições para uma única variável. Essa estrutura proporciona um código mais limpo e organizado em situações específicas.

## SIntaxe básica do switch

A sintaxe básica do switch é:

```js
let diaSemana = 3;
let mensagem = '';

switch (diaSemana) {
  case 1:
    mensagem = 'Segunda-feira';
    break;
  case 2:
    mensagem = 'Terça-feira';
    break;
  case 3:
    mensagem = 'Quarta-feira';
    break;
  // Adicione mais casos conforme necessário
  default:
    mensagem = 'Dia não reconhecido';
}
console.log(mensagem);
```

A variável `diaSemana` é verificada em relação a vários casos. O bloco de código associado ao caso correspondente é executado. Não se esqueça do `break` após cada caso para evitar a execução de outros casos.

## O uso do 'default'

O bloco default é opcional e é acionado quando nenhum dos casos corresponde ao valor da variável. É uma boa prática incluir um caso default para lidar com situações inesperadas.

## Casos agrupados

Às vezes, queremos que vários casos executem o mesmo bloco de código. Podemos fazer isso agrupando casos:

```js
let tipoFruta = 'Maçã';
let mensagem = '';

switch (tipoFruta) {
  case 'Maçã':
  case 'Pêra':
    mensagem = 'Esta é uma fruta verde.';
    break;
  case 'Banana':
    mensagem = 'Esta é uma fruta amarela.';
    break;
  default:
    mensagem = 'Não sei que fruta é essa.';
}
console.log(mensagem);
```

Aqui, se `tipoFruta` for "Maçã" ou "Pêra", o mesmo bloco de código será executado.

## Vantagens do switch

O switch é especialmente útil quando há muitos casos para verificar em uma única variável. Ele torna o código mais legível e fácil de entender, proporcionando uma estrutura mais eficiente.

## Conclusão

O switch é mais um instrumento valioso em nosso kit de desenvolvimento. À medida que avançamos, continuaremos a descobrir e aplicar técnicas que enriquecem nossa capacidade de criar código robusto e eficiente.
