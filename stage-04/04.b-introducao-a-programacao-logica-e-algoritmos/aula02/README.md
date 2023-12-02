# PERGUNTANDO NOME E MOSTRANDO MENSAGENS

JavaScript é uma linguagem de programação versátil que permite interação dinâmica com o usuário por meio de caixas de diálogo, como o **alert** e o **prompt**. Nesta aula , explorei como usar essas ferramentas para criar uma experiência interativa, começando com a simples ação de perguntar o nome do usuário e exibir mensagens.

## Seção 1: O Básico do alert

O alert é uma função que exibe uma caixa de diálogo com uma mensagem para o usuário. Geralmente, é usado para fornecer informações simples ou alertas. Vamos começar com um exemplo básico:

```js
// Exemplo de alerta simples
alert('Hello World');
```

Este código exibirá um alerta contendo a mensagem "Hello World".

## Seção 2: Interagindo com o Usuário usando prompt

Ao contrário do alert, o **prompt** permite que você solicite ao usuário que insira dados.

```js
// Exemplo de prompt para obter o nome do usuário
var nomeUsuario = prompt('Por favor, digite seu nome:');
alert('Olá, ' + nomeUsuario + '! Bem-vindo ao nosso site.');
```

Neste exemplo, o prompt solicitará ao usuário que digite seu nome. O valor inserido será armazenado na variável nomeUsuario, que será usada para personalizar a mensagem de boas-vindas exibida no **alert**.

## Seção 3: Melhorando a Interatividade

Vamos levar a interatividade um passo adiante, combinando **alert** e **prompt** para criar uma conversa simples:

```js
// Exemplo de interação com o usuário
var nomeUsuario = prompt('Qual é o seu nome?');
alert('Olá, ' + nomeUsuario + '! Como você está hoje?');
var resposta = prompt('Me conte como foi o seu dia.');
alert('Obrigado por compartilhar, ' + nomeUsuario + '! Tenha um ótimo dia!');
```

Neste exemplo, estamos criando uma conversa com o usuário, usando _prompt_ para obter informações e alert para responder de maneira personalizada.

## Conclusão

A utilização de **alert** e **prompt** em conjunto permite a criação de interações dinâmicas e personalizadas com os usuários. Essas funções são úteis para coletar dados, fornecer feedback instantâneo e melhorar a experiência do usuário em aplicações web. Experimente incorporar esses conceitos em seus próprios projetos para criar interfaces mais envolventes e interativas.
