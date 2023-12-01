# CASAS DECIMAIS

toFixed e replace são métodos úteis em JavaScript, mas é importante notar que toFixed é um método aplicável a números, enquanto replace é um método aplicável a strings. Vamos discutir cada um separadamente e, em seguida, combiná-los em um exemplo.

## Método toFixed()

O método toFixed() é usado para formatar um número com um número específico de casas decimais e retorna uma string representando esse número formatado.

```js
numero.toFixed(digitos);
```

- numero: O número que você deseja formatar.
- digitos: O número de casas decimais a serem exibidas.

```js
var numero = 3.14159;
var numeroFormatado = numero.toFixed(2);

console.log(numeroFormatado); // Saída: "3.14"
```

O método toFixed() não modifica o número original, mas retorna uma nova string representando o número com o número desejado de casas decimais.

## Método replace

O método replace é utilizado em strings para substituir parte da string por outra string.

```js
var frase = 'Eu gosto de programar em JavaScript.';
var novaFrase = frase.replace('JavaScript', 'Python');

console.log(novaFrase); // Saída: "Eu gosto de programar em Python."

// Neste exemplo, o método replace é usado para substituir a palavra "JavaScript" por "Python" na string.
```

## Exemplo Combinado - Usando toFixed e replace

Vamos agora criar um exemplo onde toFixed é utilizado em conjunto com replace. Suponha que queremos formatar um número para duas casas decimais e, em seguida, substituir o ponto decimal por uma vírgula.

```js
var numero = 3.14159;
var numeroFormatado = numero.toFixed(2); // Formata para duas casas decimais
var numeroFormatadoComVirgula = numeroFormatado.replace('.', ','); // Substitui ponto por vírgula

console.log(numeroFormatadoComVirgula); // Saída: "3,14"

// O exemplo acima, toFixed(2) é usado para formatar numero para duas casas decimais, e em seguida, replace(".", ",") é usado para substituir o ponto decimal por uma vírgula na string resultante.
```

Lembre-se de que o método toFixed retorna uma string, então é possível aplicar métodos de string subsequentemente, como o replace. Essa combinação de métodos é comum ao lidar com formatação de números em situações específicas.
