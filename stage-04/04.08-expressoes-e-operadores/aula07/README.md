# OPERDADORES DE IGUALDADE ESTRITAMENTE IGUAL E ESTRITAMENTE DIFERENTE

## Operador de Igualdade Estrito (===)

O operador de igualdade estrito (===) em JavaScript compara dois valores quanto à igualdade, levando em consideração não apenas o valor, mas também o tipo de dado. Isso significa que ambos os valores devem ser do mesmo tipo e ter o mesmo valor para a comparação retornar true.

```js
let x = 5;
let y = '5';

console.log(x === y); // false - Tipos diferentes, mesmo valor, comparação estrita
```

No exemplo acima, o operador === retorna false porque x é um número e y é uma string, mesmo que ambos tenham o valor "5".

## Operador de Negação Estrita (!==)

O operador de negação estrita (!==) é o oposto do operador de igualdade estrito. Ele verifica se dois valores são diferentes em termos de valor e tipo.

```js
let a = 10;
let b = '10';

console.log(a !== b); // true - Tipos diferentes, valores diferentes, negação estrita
```

Neste exemplo, a !== b retorna true porque a é um número e b é uma string, e os valores são diferentes.

## Dicas Importantes

- Evite Coerção de Tipo Não Desejada:

  - Usar === e !== ajuda a evitar coerção de tipo não desejada. Esses operadores garantem que tanto o valor quanto o tipo sejam levados em consideração na comparação.

- Recomendação Padrão:

  - É uma prática recomendada preferir === e !== em vez de == e != na maioria dos casos. Isso contribui para um código mais seguro e menos propenso a erros inesperados.

- Comparações Estritas são Mais Precisas:
  - Se você deseja garantir que dois valores sejam idênticos em termos de valor e tipo, opte por === e !==. Essas comparações são mais precisas e fornecem resultados consistentes.

## Resumo

- `===`: Operador de igualdade estrito que compara valores e tipos.
- `!==`: Operador de negação estrita que verifica desigualdade em termos de valor e tipo.
- Use `===` e `!==` para comparações precisas que levem em consideração tanto o valor quanto o tipo.

Entender e aplicar esses operadores ajudará a criar comparações mais precisas em seus scripts JavaScript, evitando armadilhas relacionadas à coerção de tipo e garantindo que suas condições sejam avaliadas de maneira consistente.
