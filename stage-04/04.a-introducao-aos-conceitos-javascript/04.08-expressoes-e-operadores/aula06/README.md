# OPERADORES DE IGUALDADE (==) E NEGAÇÃO (!=)

## Operador de Igualdade (==)

O operador de igualdade (==) em JavaScript é usado para comparar dois valores quanto à igualdade. No entanto, ele não verifica o tipo dos valores, o que significa que pode realizar a chamada "coerção de tipo". Isso pode levar a resultados inesperados em algumas situações.

```js
let x = 5;
let y = '5';

console.log(x == y); // true - Coerção de tipo ocorre, valores são considerados iguais
```

No exemplo acima, o operador == compara x e y, mesmo que x seja um número e y seja uma string. A coerção de tipo é realizada, resultando em uma comparação que retorna true.

## Operador de Desigualdade (!=)

O operador de desigualdade (!=) é usado para verificar se dois valores são diferentes. Assim como o operador de igualdade, o operador de desigualdade também realiza coerção de tipo.

```js
let a = 10;
let b = '10';

console.log(a != b); // false - Coerção de tipo ocorre, valores são considerados iguais
```

No exemplo acima, o operador != retorna false porque os valores são considerados iguais após a coerção de tipo.

## Dicas Importantes

- Coerção de Tipo:

  - Esteja ciente de que == e != realizam coerção de tipo. Se você quiser comparar valores sem levar em conta o tipo, esses operadores podem ser úteis. Caso contrário, considere o uso de === e !== para comparações estritas de igualdade.

- Comparação Estrita:

  - Se você deseja comparar valores levando em conta o tipo, use os operadores de igualdade estrita (=== para igualdade e !== para desigualdade).

- Evite Coerção Não Intencional:
  - Se possível, evite a coerção de tipo não intencional. Isso pode levar a comportamentos inesperados e dificultar a manutenção do código.

### Resumo

`==`: Operador de igualdade que realiza coerção de tipo.
`!=`: Operador de desigualdade que realiza coerção de tipo.

Considere usar === e !== para comparações estritas de igualdade, levando em conta o tipo.
Ao entender como esses operadores funcionam, você poderá realizar comparações de igualdade de maneira eficaz, levando em consideração a coerção de tipo e tomando decisões informadas sobre a escolha dos operadores adequados para suas necessidades específicas.
