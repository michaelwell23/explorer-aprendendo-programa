/**
 * DADA UMA LISTA DE PACIENTES, DESCUBRA O IMC DE CADA PACIENTE E IMPRIMA
 * "PACIENTES X POSSUI O IMC DE: Y"
 * ONDE X É O NOME DO PACIENTE E Y É O IMC DESSE PACIENTE
 * CRIE UMA FUNÇÃO PARA FAZER O CÁLCULO.
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

// Calculo do IMC do Paciente (BMI = Tradução de IMC)
function calculatesPatientsBMI(patient) {
  return `Paciente ${patient.name} possui o IMC de ${(
    patient.weight /
    (patient.height / 100) ** 2
  ).toFixed(2)}`;
}

// calculatesPatientsBMI(patients[0])
// calculatesPatientsBMI(patients[1])
// calculatesPatientsBMI(patients[2])

for (patient of patients) {
  alert(calculatesPatientsBMI(patient));
}
