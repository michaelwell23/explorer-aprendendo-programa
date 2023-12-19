# ES6 MODULES

O ECMAScript 6 (também conhecido como ES6 ou ECMAScript 2015) introduziu uma série de melhorias significativas para a linguagem JavaScript, incluindo o suporte nativo a módulos. Antes do ES6, os desenvolvedores dependiam de padrões e convenções específicos, como o CommonJS ou o AMD, para organizar e modularizar o código JavaScript. Com os módulos ES6, a linguagem passou a oferecer uma solução padrão para modularização.

Aqui está um exemplo simples de como usar módulos ES6 em conjunto com HTML:

Suponha que você tenha dois arquivos JavaScript: `main.js` e `module.js`.

module.js:

```js
// module.js
export const soma = (a, b) => a + b;
export const subtracao = (a, b) => a - b;
```

main.js:

```js
// main.js
import { soma, subtracao } from './module.js';

console.log(soma(5, 3)); // Saída: 8
console.log(subtracao(8, 3)); // Saída: 5
```

Aqui está o que está acontecendo:

1. `module.js`: Define duas funções (soma e subtracao) e as exporta usando a palavra-chave export.

2. `main.js`: Importa as funções específicas de module.js usando a palavra-chave import. O caminho do arquivo ('./module.js') é relativo ao local do arquivo main.js.

No HTML, você pode usar esses scripts assim:

index.html:

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Modules</title>
</head>
<body>
    <script type="module" src="main.js"></script>
</body>
</html>

```

Observe o atributo type="module" na tag `<script>`. Isso indica ao navegador que o arquivo JavaScript deve ser tratado como um módulo ES6.

Ao abrir o arquivo index.html em um navegador compatível com ES6, como a maioria dos navegadores modernos, você poderá ver a saída no console. Este é apenas um exemplo básico; os módulos ES6 oferecem funcionalidades mais avançadas, como a capacidade de exportar/importar classes, funções padrão, etc.
