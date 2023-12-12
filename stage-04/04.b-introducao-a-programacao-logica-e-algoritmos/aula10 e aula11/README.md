# INTERAGINDO COM UM MENU DE OPÇÕES

Nessa aula revi conceitos importantes do universo JavaScript, abaixo alguns conceitos importartantes forma revisto e para fins didáticos costumo escrever para melhor fixar o meu aprendizado:

## Loop While

O loop `while` em JavaScript é uma estrutura de controle de fluxo que executa um bloco de código equanto uma condição específica é verdadeira. No projeto dessa aula ele foi utilizado para fazer o looping do menu, que nos permite alternar entre a opção 1 e 2 até o programa ser encerrado ao digitar a opção 3.

```js
while (options != 3) {
  options = Number(
    prompt(`
  Olá usuário! Digite a opção desejada:
    1- Cadastrar um item na lista
    2- Mostrar itens cadastrados
    3- Sair do programa.`)
  );

  // AULA 10
  // if (options == 1) {
  //   let item = prompt('Digite o nome do item');
  //   items.push(item);
  // } else if (options == 2) {
  //   if (items.length == 0) {
  //     alert('Não existe itens cadastrados!');
  //   } else {
  //     alert(items);
  //   }
  // } else {
  //   alert('Programa encerrado! Tchau!');
  // }

  // AULA 11
  switch (options) {
    case 1:
      let item = prompt('Digite o nome do item');
      items.push(item);
      break;
    case 2:
      if (items.length == 0) {
        alert('Não existe itens cadastrados!');
      } else {
        alert(items);
      }
      break;
    case 3:
      alert('Programa encerrado! Tchau!');
      break;
    default:
      alert('Opção inválida!');
  }
```

## Arrays

Os arrays são estuturas de dados que armazenam elemento em uma ordem específica. Cada elemento tem um índice associado. No projeto de menu, ele foi utilizado para armazer os itens da opção 1. Quando ecolhemos essa opção, o programa entre nesse bloco de código onde ele nos pede para digitar um item, esse item é então adicionado ao array por meio da função `push`, que é utilizado para armazenar um item ao arrays.

```js
let items = []; // array vazio

// recebendo o item do usuário
let item = prompt('Digite o nome do item');

items.push(item); // adicionando item ao array
```

## Condicionais If/Else:

As condicionais if e else são utilizadas para tomar decisões no código com base em condições booleanas. Elas foram utilizadas para as condições do meu da aula 10, para criar uma iteração entre as opções de forma genérica.

```js
if (options == 1) {
  let item = prompt('Digite o nome do item');
  items.push(item);
} else if (options == 2) {
  if (items.length == 0) {
    alert('Não existe itens cadastrados!');
  } else {
    alert(items);
  }
} else {
  alert('Programa encerrado! Tchau!');
}
```

## Switch

Uma outra estrutura condicional é o `switch`, com ele podemos avaliar uma expressão em relação a vários casos. Ele é uma ótima opção quando se precisa lidar com muitas opções de caso. Ele foi utilizado no problema para substituir o if/else, que por ser uma opção genética, pode tornar o código inelegivel e de dificil compreenção.

```js
switch (options) {
  case 1:
    let item = prompt('Digite o nome do item');
    items.push(item);
    break;
  case 2:
    if (items.length == 0) {
      alert('Não existe itens cadastrados!');
    } else {
      alert(items);
    }
    break;
  case 3:
    alert('Programa encerrado! Tchau!');
    break;
  default:
    alert('Opção inválida!');
}
```
