# CALLBACK FUNCTIONS

As funções de retorno de chamada, ou callback functions, são uma parte essencial do paradigma de programação assíncrona em JavaScript. Elas são suadas para lidar com operações que levam tempo, como operações de leitura/gravação de arqruivos, chamadas de API, eventos do usuários etc. Aqui estão alguns pontos importantes sobre as callbacks functions:

- **Definição Básica**:

  - Uma callback function é uma função que é passada como argumento para outra função.
  - A função que recebe a callback pode, então, invocá-la ou chamá-la de volta quando necessário.

```js
function operacaoAssincrona(arg1, callback) {
  // Alguma operação assíncrona acontece aqui
  callback(resultado);
}

operacaoAssincrona(valor, function (resultado) {
  // Faça algo com o resultado
});
```

- **Assincronicidade**:

  - Callbacks são frequentemente usadas para lidar com operações assíncronas, garantindo que o código continue a executar enquanto a operação está em andamento.

```js
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

- **Manuseio de Erros**:

  - Muitas callbacks têm uma convenção de usar o primeiro parâmetro para passar informações de erro (se houver) e o segundo para passar o resultado.

```js
function operacaoComErro(arg1, callback) {
  if (algumaCondicao) {
    callback(new Error('Algo deu errado'));
  } else {
    callback(null, resultado);
  }
}
```

- **Callbacks Aninhadas (Callback Hell)**:

  - O uso excessivo de callbacks pode levar a um padrão conhecido como "Callback Hell" (Inferno de Callback), onde o código se torna profundamente aninhado.

  ```js
  funcaoAssincrona1(function (resultado1) {
    funcaoAssincrona2(function (resultado2) {
      funcaoAssincrona3(function (resultado3) {
        // E assim por diante...
      });
    });
  });
  ```

- **Promises e async/await**:
  - Para mitigar o problema do "Callback Hell", foram introduzidas Promises e a sintaxe async/await em JavaScript.

```js
const minhaPromise = new Promise(function (resolve, reject) {
  // Resolva ou rejeite a Promise aqui
});

minhaPromise
  .then(function (resultado) {
    // Faça algo com o resultado
  })
  .catch(function (erro) {
    // Lidere com o erro
  });
```

Exemplo com async/await:

```js
async function minhaFuncaoAssincrona() {
  try {
    const resultado = await minhaPromise;
    // Faça algo com o resultado
  } catch (erro) {
    // Lidere com o erro
  }
}
```

As callback functions são uma peça fundamental em JavaScript para lidar com operações assíncronas, embora novas abordagens como Promises e async/await tenham sido introduzidas para melhorar a legibilidade e a manutenção do código.
