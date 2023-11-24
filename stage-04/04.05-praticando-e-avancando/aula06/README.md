# EXERCÍCIOS

1 - Declare uma variáel de nome weight;

```js
let weight;
```

2 - Que tipo de dado é a variavel acima?

```js
console.log(typeof weight);
undefined;
```

3 - declare uma variavel e atribua a ela valore para cada um dos dados:

- name
- age
- stars: Number
- isSubscribed

```js
let name = 'Michael';
let age = 33;
let stars = 55;
let isSubscribed = true;
```

1 - A variável student abaixo é de que tipo de dados? Tipo array

4.1 - Atribua a ela as mesmas propriedades e valores do exerxio 3

4.2 - Mostre no console a seguinte mensage: `<name>` de idade `<age>` pesa `<weight>` kg".

```js
let student = {
  name: 'Michael',
  age: 33,
  weight: 68,
  isSubscribed: true,
};

console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg`
);
```

5 - Declare uma vaiável do tipo array, de nome students e atribua a ela nenum valor, ou seja somente o Array vazio

```js
studensts = [];
```

6 - Reatribua valor para a variavel acima, colocando dentro dela o objeto studant da questão 4. (Não copie e cole o objeto, mas use o objeto criado e insira ele no array)

```js
students = [student];
console.log(students);
```

7 - coloque no concole o valor da posição zero do array acima

```js
console.log(students[0]);
```

8 - crie um novo student e coloque na posição do array studensts

```js
let student1 = {
  name: 'Gabriella',
  age: 34,
  stars: 6,
  isSubscribed: true,
};

students = [student, student1];
console.log(students);
```

9 - sem rodar o código, diga qual a resposta do código a baixo e por que? após a sua resposta, rede o código e veja se você acertou.

O valor da variável é exibido por causa do hoisting que existe na variável var.

```js
console.log(a);
var a = 1;
```
