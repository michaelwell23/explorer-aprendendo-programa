# VARIÁVEIS

Em JavaScript, as variáveis são declaradas usando as palavras-chave var, let ou const. Cada uma dessas palavras-chave tem seu escopo e regras de atualização de valor. A escolha entre elas depende das necessidades específicas do código que está sendo escrito.

Além disso, em JavaScript, as variáveis são dinamicamente tipadas, o que significa que não é necessário declarar o tipo de dado que uma variável irá armazenar. Isso proporciona flexibilidade, mas também exige cuidado para evitar erros de tipo durante a execução do programa.

Ao longo do processo de aprendizagem sobre variáveis em JavaScript, o que foi explorado foi os conceitos como escopo, inicialização, reatribuição de valores e boas práticas de nomenclatura. Compreender o papel e o funcionamento das variáveis é essencial para criar scripts eficientes e compreender a lógica por trás das aplicações web dinâmicas. Vamos explorar esses conceitos mais a fundo para construir uma base sólida no desenvolvimento em JavaScript.

## Declarações de Variáveis

Posso declarar variáveis utilizando as palavras-chaves `var`, `let` ou `conts`;

- O `var` é uma forma tradicional de declarar variávei antes do ECMAScript 6 (ES6). Seu escopo é menos previsível do que `let` e `const`, e por conta disso, é geralmente evitado.

- O `let` foi introduzido no ES6, tem um escopo de bloco e permite que os valores contidos possam ser reatruibuidos outros valores.

- Já o `const` também foi introduzido no ES6, cria uma variável cujo valor não pode ser alterado após a sua atribuição. O escopo também é de bloco.

```js
var x = 10;
x = 20;
console.log(x);

let y = 20;
y = 10;
console.log(y);

const z = 30; // variável não pode ser alterada
console.log(z);
```
