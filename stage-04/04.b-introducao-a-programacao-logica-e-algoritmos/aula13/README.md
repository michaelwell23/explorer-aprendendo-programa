# CALCULANDO O IMC DOS PACIENTES COM FUNÇÕES

Nesta aula fiz a revisão de alguns conceitos em JavaScrip, o primeiro foi continuar trabalhando com objetos, são uma maneira de estrutura dados, por isso utilizei o objeto da aula anterior:

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

Também revisei os conceitos de funções. As funções são blocos de código reutilizáveis que podem ser definidos e chamados em diferentes partes do programa. Elas são fundamentais para a estruturação e modularização do código, permitindo a divisão do programa em tarefas mais pequenas e gerenciáveis. Na aula utilizei para extrutura o calculo do IMC.

```js
// Calculo do IMC do Paciente (BMI = Tradução de IMC)
function calculatesPatientsBMI(patient) {
  return `Paciente ${patient.name} possui o IMC de ${(
    patient.weight /
    (patient.height / 100) ** 2
  ).toFixed(2)}`;
}
```

E por fim, revisei a estrutura de repetição for of. Eu a utilizei para pegar os dados do objeto e assim poder retornar o IMC de todos os pacientes.

```js
for (patient of patients) {
  alert(calculatesPatientsBMI(patient));
}
```
