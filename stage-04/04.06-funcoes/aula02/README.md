# ARGUMENTOS E PARÂMETROS

Em JavaScript, os termos `parâmetros` e `argumentos` refere-se a valores que são passados para uma função, mas eles têm signifiados ligeiramente diferentes no contexto das funções.

## Parâmetros

São os identificadores listado na declaração de uma função. Eles são como variáves que agem como marcadores de posição para os valores que serão passados à função quando ela for chamada. Os parâmetros são partes da definição da função e estão presentes entre os parênteses na declaração da função.

```js
//Aqui `nome` é um parâmetro da função saudacao;
function saudacao(nome) {
  console.log('Olá, ' + nome + '!');
}
```

## Argumentos

São os valores reais que são passados para uma função quando ela é chamada. Os argumentos são os dados que preenchem os parâmetros durante a execução da função.

```js
saudacao('Maria');
```

No exemplo acima, "Maria" é o argumento passado para a função saudacao, e esse valor será atribuído ao parâmetro nome dentro da função durante a execução.

É importante nota que o número de argumentos passados durante a chamada de uma função deve corresponder ao número de parâmetros definidos na função. Se houver mais argumentos do que parâmentros, os argumentos extras serão ignorados. Se houver menos argumentos do que parâmetros, os parâmetros não fornecidos receberão o valor especial `undefined`.

```js
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3)); // Saída: 5
console.log(soma(2)); // Saída: NaN, porque 'b' é undefined
console.log(soma(2, 3, 4)); // Saída: 5, o terceiro argumento é ignorado
```

Em resumo, parâmetros são as variáveis listadas na declaração de uma função, enquanto argumentos são os valores reais fornecidos durante a chamada da função para preencher esses parâmetros. A compreensão adequada desses conceitos é fundamental para escrever funções flexíveis e reutilizáveis em JavaScript.
