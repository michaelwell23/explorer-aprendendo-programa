# THROW & TRY / CATCH

## throw

Em programação, erros inevitavemente ocorrem. O `throw` é uma instrução que permite criar e lançar as próprias exceções. Issp é útil quando precisamos de uma condição inesperada ou inválida durante a execução do programa.

```js
function dividir(dividendo, divisor) {
  if (divisor === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }

  return dividendo / divisor;
}

try {
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (erro) {
  console.error('Erro:', erro.message);
}
```

No exemplo, a função dividir lança uma exceção se o divisor for zero. A declaração try permite que você execute um bloco de código e capture qualquer exceção lançada dentro dele.

## Utilizando try/catch

A instrução try envolve o bloco de código que pode gerar uma exceção. Se uma exceção é lançada, o controle é transferido para o bloco catch corresponden

```js
try {
  // Código que pode gerar uma exceção
} catch (erro) {
  // Bloco que trata a exceção
  console.error('Ocorreu um erro:', erro.message);
} finally {
  // Bloco opcional que sempre é executado, com ou sem exceção
  console.log('Esta parte é sempre executada.');
}
```

O bloco finally é opcional e é utilizado para executar código, independentemente de uma exceção ter sido lançada ou não.

### Personalizando Exceções

Você pode criar exceções personalizadas estendendo a classe Error. Isso permite fornecer informações adicionais sobre o erro.

```js
class ValorNegativoError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ValorNegativoError';
  }
}

function validarValor(valor) {
  if (valor < 0) {
    throw new ValorNegativoError('O valor não pode ser negativo.');
  }
}

try {
  validarValor(-5);
} catch (erro) {
  console.error(erro.name, ':', erro.message);
}
```

## Conclusão

A compreensão de como lidar com exceções é crucial para a construção de código robusto. O `throw` e o `try/catch` são ferramentas poderosas que nos permitem gerenciar situações inesperadas de forma elegante.
