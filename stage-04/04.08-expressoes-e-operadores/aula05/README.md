# GROUPING OPERATION

Em JavaScript, a ordem de execução das operações é determinada pela ordem de precedência e associatividade dos operadores. Quando várias operações estão presentes em uma expressão, é importante entender como essas operações são agrupadas e executadas. Aqui está um guia sobre o agrupamento de operações e a ordem de precedência em JavaScript:

## 2. Agrupamento com Parênteses

Os parênteses () podem ser usados para forçar uma ordem específica de execução. Qualquer expressão dentro de parênteses é avaliada antes de outras partes da expressão.

```js
let result = (2 + 3) * 4; // Aqui, a adição é realizada antes da multiplicação
```

## 3. Associatividade

Quando dois operadores têm a mesma precedência, a associatividade determina a ordem de execução. A maioria dos operadores em JavaScript é da esquerda para a direita, o que significa que eles são avaliados da esquerda para a direita.

```js
let result = (2 * 3) / 2; // A multiplicação é realizada antes da divisão
```

## 4. Exemplos Práticos

```js
let x = 2 + 3 * 4; // Aqui, a multiplicação tem maior precedência
let y = (2 + 3) * 4; // Usando parênteses para alterar a ordem de execução
```

## 5. Considerações Adicionais

- Conhecer a ordem de precedência e associatividade é fundamental para evitar resultados inesperados e escrever código claro e legível.
- É sempre uma boa prática usar parênteses para tornar o código mais explícito, especialmente quando há expressões complexas.

Lembre-se de consultar a documentação oficial do JavaScript para obter informações atualizadas sobre a ordem de precedência e associatividade dos operadores, pois ela pode ser alterada nas versões mais recentes da linguagem.
