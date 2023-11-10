# UNDEFINED VS NULL

Em JavaScript, `undefined` e `null` são dois valores especiais que representam a ausência de valor ou a falta de um valor atribuído a uma variável.

`undefined` é um valor primitivo que uma variável pode ter se não foi atribuído um valor a ela. Se você declara uma variável, mas não a inicializa com um valor, ela terá o valor undefined. Também pode ser o valor de retorno de uma função que não retorna explicitamente um valor. Além disso, se você acessar uma propriedade de um objeto que não existe, o resultado será undefined.

```js
var variavelNaoInicializada;
console.log(variavelNaoInicializada); // undefined

function semRetorno() {
  // Esta função não tem uma declaração de retorno, então implicitamente retorna undefined.
}

var objeto = {};
console.log(objeto.propriedadeInexistente); // undefined
```

`null` é um valor especial que representa a ausência intencional de qualquer objeto ou valor. Você pode atribuir explicitamente null a uma variável para indicar que ela não possui um valor válido. É frequentemente utilizado para redefinir o valor de uma variável ou propriedade de objeto para nenhum valor.

```js
var variavelNula = null;
console.log(variavelNula); // null

var objetoComPropriedadeNula = { propriedade: null };
console.log(objetoComPropriedadeNula.propriedade); // null
```

Diferenças:

- `undefined` geralmente indica uma falta de valor ou ausência de inicialização, enquanto `null` é frequentemente usado para indicar intencionalmente a ausência de valor ou a reinicialização de uma variável.
- `undefined` é um valor primitivo, enquanto `null` é um valor especial que representa a ausência de um objeto ou valor.
- Quando você declara uma variável sem atribuir um valor, ela inicialmente terá o valor `undefined`, não `null`.

Em muitos casos, `undefined` e `null` são tratados de maneira intercambiável, mas é uma prática comum usar `null` quando você deseja indicar intencionalmente a ausência de um valor específico. Em geral, `undefined` é mais associado à falta de valor, enquanto `null` é mais associado à ausência intencional de valor.
