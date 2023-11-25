# ESCOPO DE VAR

Em JavaScript, o escopo refere-se à visibilidade e acessibilidade de variáveis em diferentes partes do código. Vamos explorar o conceito de escopo usando apenas um bloco de código e a declaração de variáveis com `var`, considerando também o conceito de hoisting.

## Utilizando var e Hoisting:

O hoisting é um comportamento em JavaScript no qual as declarações de variáveis e funções são movidas para o topo do seu contexto de execução durante a fase de compilação. Isso significa que você pode acessar e utilizar variáveis antes de sua declaração real no código.

```js
console.log(mensagem); // Saída: undefined

var mensagem = 'Olá, Mundo!';

console.log(mensagem); // Saída: Olá, Mundo!
```

Neste exemplo, a declaração da variável `mensagem` é movida para o topo, mas a atribuição permanece no lugar original. Portanto, ao tentar acessar a variável antes da atribuição, ela existe, mas seu valor é `undefined`.

## Bloco de Código:

Vamos criar um bloco de código para entender o escopo sem a utilização de funções, `if else`, ou `while`:

```js
{
  var x = 10;
  let y = 20;

  console.log(x); // Saída: 10
  console.log(y); // Erro: y is not defined (let tem escopo de bloco)
}

console.log(x); // Saída: 10
console.log(y); // Erro: y is not defined
```

No exemplo acima, var x tem escopo de função (ou global) e pode ser acessada fora do bloco. Por outro lado, let y tem escopo de bloco e não pode ser acessada fora do bloco.

## Considerações sobre Hoisting e var:

- **Hoisting com var**: A declaração de variáveis com var é movida para o topo do escopo durante a fase de compilação, mas a atribuição permanece no lugar original.

- **Escopo de Função ou Global**: Variáveis declaradas com var têm escopo de função (se estão dentro de uma função) ou escopo global (se estão fora de qualquer função).

- **Cuidados com Hoisting**: Enquanto o hoisting pode ser útil, também pode levar a comportamentos inesperados se não for compreendido corretamente. Recomenda-se usar let e const para declarações de variáveis, pois eles têm um comportamento de hoisting mais previsível e escopo de bloco.
