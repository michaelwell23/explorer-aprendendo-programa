# OPERADORES LÓGICOS

Os operadores lógicos em JavaScript são essenciais para realizar avaliações condicionais e controlar o fluxo do seu código. Vamos explorar o que são e como utilizá-los.

## 1. Operador Lógico AND (&&)

O operador lógico AND (&&) retorna verdadeiro (true) se ambos os operandos forem verdadeiros.

```js
let temperatura = 25;
let diaEnsolarado = true;

if (temperatura > 20 && diaEnsolarado) {
  console.log('Vamos à praia!');
} else {
  console.log('Fique em casa.');
}
```

## 2. Operador Lógico OR (||)

O operador lógico OR (||) retorna verdadeiro (true) se pelo menos um dos operandos for verdadeiro.

```js
let chovendo = true;
let guardaChuva = false;

if (chovendo || guardaChuva) {
  console.log('Leve um guarda-chuva!');
} else {
  console.log('Bom tempo, sem necessidade de guarda-chuva.');
}
```

## 3. Operador Lógico NOT (!)

O operador lógico NOT (!) inverte o valor de verdadeiro para falso e vice-versa.

```js
let usuarioLogado = false;

if (!usuarioLogado) {
  console.log('Faça o login para acessar.');
} else {
  console.log('Bem-vindo!');
}
```

## 4. Combinação de Operadores Lógicos

É possível combinar operadores lógicos para criar expressões mais complexas.

```js
let idade = 25;
let possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
  console.log('Pode dirigir!');
} else {
  console.log('Não pode dirigir.');
}
```

## 5. Precedência de Operadores Lógicos

É importante entender a precedência dos operadores lógicos para evitar ambiguidades. A ordem padrão é NOT (!), AND (&&), OR (||).

```js
let x = true;
let y = false;
let z = true;

if (x || (y && !z)) {
  console.log('Condição verdadeira.');
} else {
  console.log('Condição falsa.');
}
// Saída: Condição falsa (devido à precedência dos operadores)
```
