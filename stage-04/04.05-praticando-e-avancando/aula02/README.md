# AGRUPANDO DECLARAÇÕES

Uma das coisas que podemos fazer em JavaScript é agrupar as variáveis para que elas possam ser exibidas uma única vez quando utilizamos o `console.log`.

```js
let name = 'Michael';
let age = 33; //number
let isHUman = true; //boolean

let age2, isHuman2;
age = 18;
isHUman = true;

console.log(name, age, isHUman);
```

Isso no ajuda a deixar o código mais simples e também a reutilizar códigos, que no caso é o `console.log`, para a exibição das variáveis no console.
