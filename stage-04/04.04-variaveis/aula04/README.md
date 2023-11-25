# ESCOPO DE LET E CONTS

## Bloco de Código com let e const

let e const têm escopo de bloco: Isso significa que essas variáveis são acessíveis apenas dentro do bloco onde foram declaradas.

Não sofrem hoisting da mesma forma que var: Enquanto var é hoisted (movido para o topo do escopo), let e const não são inicializadas até a linha onde foram declaradas. Portanto, tentar acessá-las antes da declaração resultará em um erro.

## Considerações sobre let e const

let é reatribuível, const não é: Você pode reatribuir valores a variáveis declaradas com let, mas não pode reatribuir valores a variáveis declaradas com const.

```js
let x = 10;
x = 20; // Isso é permitido

const y = 30;
y = 40; // Erro: Assignment to constant variable
```

const requer uma atribuição imediata: Ao contrário de let, uma variável declarada com const deve ser atribuída imediatamente.

```js
const z;  // Erro: Missing initializer in const declaration
```

Ambos têm escopo de bloco: let e const são limitadas ao bloco onde são declaradas, o que pode ajudar a evitar problemas relacionados ao escopo inadvertido.

Em resumo, ao usar let e const, você tem uma abordagem mais segura e previsível para lidar com o escopo em JavaScript, especialmente em comparação com var. Essas declarações são mais modernas e alinham-se melhor com boas práticas de desenvolvimento.
