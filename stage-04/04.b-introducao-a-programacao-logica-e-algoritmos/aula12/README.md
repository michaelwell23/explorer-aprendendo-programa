# ESTRUTURANDO DADOS COM OBJETOS

Em JavaScript, um objeto é uma estrutura de dados que permite armazenar e organizar informações de maneira mais complexa do que simples variáveis. Um objeto literal é uma forma de criar objetos de maneira direta e concisa no código.

Quando crio um objeto literal em JavaScript, estou essencialmente definindo propriedades e valores diretamente no código, dentro de chaves {}.

```js
const patients = [
  {
    name: 'Tamara Gouth',
    age: 20,
    weight: 65,
    height: 168,
  },
  {
    name: 'Alice Medeiros',
    age: 32,
    weight: 78,
    height: 170,
  },
  {
    name: 'Cristina Garcia',
    age: 46,
    weight: 79,
    height: 174,
  },
];
```

Aqui, "pessoa" é um objeto literal que tem três propriedades: "nome", "idade" e "profissao". Cada propriedade tem um valor associado.

## O uso de "for" e "for...of" em JavaScript:

Quando eu preciso iterar sobre elementos em uma estrutura de dados, como um array ou objeto, geralmente uso loops. O "for" é um loop clássico que é amplamente utilizado.

```js
let patientsNames = [];

for (let index = 0; index < patients.length; index++) {
  patientsNames[index] = patients[index].name;
}
```

No exemplo acima, estou usando um loop "for" para iterar sobre o array de frutas e imprimir cada uma no console.

Já o "for...of" é uma forma mais moderna e concisa de iterar sobre elementos iteráveis, como arrays. Vamos modificar o exemplo anterior usando "for...of":

```js
let patientsNames = [];

for (let patient of patients) {
  patientsNames.push(patient.name);
}
```

Aqui, em vez de lidar com índices e acessar os elementos através deles, eu simplesmente declaro uma variável (fruta, no caso) que receberá cada elemento do array diretamente. O código fica mais limpo e fácil de entender.

Em resumo, objetos literais são uma maneira eficaz de representar dados complexos em JavaScript, enquanto "for" e "for...of" são ferramentas valiosas para percorrer esses dados, dependendo do contexto e da estrutura da informação.
