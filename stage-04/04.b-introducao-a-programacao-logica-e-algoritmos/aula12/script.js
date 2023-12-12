/**
 * Crie uma lista de pacientes
 *
 * Cada paciente dentro da lista deverá conter
   -> Nome
   -> Idade
   -> peso
   -> Altura

 Escreva uma litsa contendo o nome dos pacientes
 */

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

let patientsNames = [];
let patientsNames2 = [];

for (let index = 0; index < patients.length; index++) {
  patientsNames[
    index
  ] = `\n${patients[index].name} tem ${patients[index].age},pesa ${patients[index].weight}kg e sua altura é de ${patients[index].height}m`;
}

for (let patient of patients) {
  patientsNames2.push(patient.name);
}

alert(`Utilizando for: ${patientsNames}`);
alert(`Utilizando for of`, patientsNames2);
