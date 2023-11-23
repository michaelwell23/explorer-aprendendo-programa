# PRIMEIROS PASSOS COM JAVASCRIPT

## SINTAXE

Sintaxe em JavaScript refere-se às regras e estruturas que governam a forma como se escreve códigos na linguagem de programação. Abaixo há alguns exemplos dos principais elementos da sintaxe em JavaScript.

- **Variáveis**
  - Declaração de variáveis usando `var`, `let` e `const`;

```js
let idade = 25;
const nome = 'João';

var genero = 'masculino';
```

- **Tipos de dados**
  - Tipos primitivos incluem `number`, `string`, `boolean`, `undefined` e `symbol`;

```js
let numero = 42;
let texto = 'Olá, mundo!';
let verdadeiroOuFalso = true;
```

- **Operadores**
  - Operadores aritméticos (`+`, `-`, `*`, `/`, `%`);
  - Operadores de comparação (`==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`);
  - Operadores lógicos (`&&`, `||`, `!`).

```js
let resultado = 10 + 5 * (28 / 4);
let igualdade = a === b;
```

- **Estruturas de Controle de Fluxo**
  - Declaração `if`, `else` `if e else`.
  - Loop `for`, `while`, `do-while`.

```js
if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}
```

- **Funções**
  - Declaração de funções usando a palavra-chave `function`;

```js
function saudacao(nome) {
  return 'Olá, ' + nome + '!';
}
```

- **Arrays**
  - Criação de arrays para armazenar coleções de dados.

```js
let frutas = ['maçã', 'banana', 'laranja'];
```

- **Objetos**
  - Definição de objetos para representar estruturas de dados complexas.

```js
let pessoa = {
  nome: 'Maria',
  idade: 30,
  profissao: 'engenheira',
};
```

- **Métodos e Propriedades**
  - Uso de métodos (funções associadas a objetos) e propriedades (valores associados a objetos).

```js
let tamanhoTexto = texto.length;
let maiusculo = texto.toUpperCase();
```

Esses são apenas alguns aspectos fundamentais da sintaxe em JavaScript. À medida que você se aprofunda na linguagem, encontrará mais recursos e padrões de codificação que podem melhorar a legibilidade e a eficiência do seu código.

---

## MANEIRAS DE EXECUTAR O JAVASCRIPT

Existem várias maneiras de executar um arquivo JavaScript, dependendo do ambiente em que você está trabalhando. Abaixo estão algumas das maneiras mais comuns:

- **Navegador Web**
  - A execução de JavaScript no navegador é uma das formas mais comuns. Você pode incorporar scripts JavaScript diretamente em uma página HTML ou vincular um arquivo JavaScript externo usando a tag `<script>`.

```html
<script src="seuarquivo.js"></script>
```

- **Node.js**
  - Se você estiver trabalhando no ambiente de servidor com Node.js, pode executar arquivos JavaScript diretamente no terminal usando o comando node.

```bash
node seuArquivo.js
```

- **Console do Navegador**
  - Você pode executar código JavaScript diretamente no console do desenvolvedor do seu navegador. Pressione F12 ou clique com o botão direito na página e selecione "Inspecionar" para abrir o console.

```js
console.log('Olá, mundo!');
```

- **Ambiente de Desenvolvimento Integrado (IDE)**

  - Se você estiver usando um IDE, como Visual Studio Code, Atom ou Sublime Text, muitos deles têm suporte embutido para executar scripts JavaScript. Basta abrir o arquivo e executar a opção apropriada no IDE.

- **Aplicativos de Servidor**
  - Se você estiver construindo um aplicativo do lado do servidor usando JavaScript (por exemplo, com Express.js), você pode executar o servidor para lidar com solicitações HTTP e executar o código JavaScript associado.

```bash
node seuServidor.js
```

Lembre-se de que a escolha da abordagem depende do contexto em que você está trabalhando. Se estiver desenvolvendo para a web, a execução no navegador é comum. Se estiver desenvolvendo no lado do servidor, o Node.js é uma escolha popular.

---

## ADICIONANDO ARQUIVOS JS

Para adicionar arquivos JavaScript a um arquivo HTML, você pode usar a tag `<script>`. Aqui estão as maneiras comuns de incorporar scripts JavaScript em um documento HTML:

## Inline:

Você pode incluir código JavaScript diretamente no corpo do HTML usando a tag `<script>`. Isso é feito entre as tags `<script>` e `</script>`;

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exemplo</title>
</head>
<body>
    <h1>Meu Documento HTML</h1>
    <script>
        console.log("Olá, mundo!");
    </script>
</body>
</html>

```

### Arquivo Externo

Em vez de incluir o código diretamente no HTML, é comum criar arquivos JavaScript separados e referenciá-los no HTML usando o atributo src da tag `<script>`;

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exemplo</title>
</head>
<body>
    <h1>Meu Documento HTML</h1>
    <script src="meuScript.js"></script>
</body>
</html>

```

Certifique-se de que o arquivo JavaScript (meuScript.js, neste exemplo) esteja no mesmo diretório do seu arquivo HTML ou forneça o caminho correto usando o atributo src.

### Atributo defer e async

_defer_: Adia a execução do script até que o HTML seja completamente analisado;
_async_: Permite que o script seja baixado enquanto o HTML é analisado e, após o download, o script é executado imediatamente;

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exemplo</title>
    <script defer src="meuScript.js"></script>
</head>
<body>
    <h1>Meu Documento HTML</h1>
</body>
</html>

```

### Manipulação de eventos

Você também pode vincular scripts a eventos específicos usando atributos de eventos HTML, como `onclick`, `onload`.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exemplo</title>
</head>
<body>
    <h1 onclick="minhaFuncao()">Clique-me</h1>
    <script>
        function minhaFuncao() {
            alert("Você clicou!");
        }
    </script>
</body>
</html>

```

Essas são algumas maneiras comuns de adicionar arquivos JavaScript a um documento HTML. A escolha entre essas opções depende dos requisitos específicos do seu projeto.

---

## COMENTÁRIOS EM JAVASCRIPT

Comentários são trechos de texto no código fonte que são ignorados pelo interpretador ou compilador da linguagem, sendo usados apenas para fornecer informações aos programadores. Eles são essenciais para documentar o código, tornando-o mais compreensível para outros desenvolvedores (ou para o próprio desenvolvedor no futuro). Comentários também podem ser úteis para desativar temporariamente partes do código durante o desenvolvimento. Abaixo podemos ver as duas forma de como criar comentários em JavaScript:

```js
// Este é um comentário de linha única
let numero = 42; // Este comentário está na mesma linha do código

/*
Este é um comentário de múltiplas linhas.
Ele pode abranger várias linhas de código.
Útil para documentar seções extensas ou desativar blocos inteiros temporariamente.
*/
let resultado = 10 + 5;

//Combinando ambos os tipos:

// Esta função realiza uma soma
function somar(a, b) {
  /*
    Este comentário fornece informações adicionais
    sobre como a função de soma funciona.
    */
  return a + b;
}

// Exemplo de código com comentários
let valorTotal = somar(20, 30); // Chamando a função somar
console.log(valorTotal); // Exibindo o resultado no console
```
