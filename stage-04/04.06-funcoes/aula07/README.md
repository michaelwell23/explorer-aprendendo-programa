# ARROW FUNCTIONS

**Arrow Functions (Funções seta)** são uma forma mais concisa de escrever funções em JavaScript, introduzidas no ECMAScript 6, elas oferecem uma sintaxe mais curta e clara em comparação com as funções tradicionais. Aqui estão algumas características e informações importantes sobre a`rrow functions`:

- **SINTAXE**: A sintaxe básica de uma arrow function é:

```js
const minhaFuncao = (param1, param2) => {
  // Corpo da função
  return resultado;
};
```

- **Parâmetros**:
  - Arrow Functions podem ter zero ou mais parâmetros;
  - Se houver apenas um parâmetro, os parênteses em torno dos parâmetros são opcionais;
  - Se não houver parâmetros, devemos incluir parênteses vazios [`()`];

```js
const funcaoComParametro = (param) => {
  /* corpo */
};
const funcaoSemParametro = () => {
  /* corpo */
};
```

- **Corpo de função**:
  - Se o corpo da função tiver apenas uma expressão, podemos omitir as chaves `{}` e a instrução `return`;
  - Se houver mais de uma expressão ou precisamos de declarações adicionais, as chaves e a instrução `return` são necessárias;

```js
const funcaoComUmaExpressao = (x) => x * 2;
const funcaoComMaisExpressoes = (x, y) => {
  const soma = x + y;
  return soma;
};
```

- **Não Possuem as Propriedades arguments**: Funções arrow não têm a variável especial arguments.

```js
const minhaFuncao = () => {
  console.log(arguments); // Isso resultará em um erro
};
```

- **Compactas e Concisas**: Funções arrow são frequentemente usadas para expressões curtas e operações simples, tornando o código mais conciso.

```js
const numeros = [1, 2, 3];
const quadrados = numeros.map((num) => num ** 2);
```
