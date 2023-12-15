# EVENTOS

Se o DOM é a estrutura que dá vida ao seu documento HTML, os eventos em JavaScript são as peças mágicas que transformam sua página em algo dinâmico e interativo. Vamos mergulhar nesse fascinante universo e descobrir como eventos podem ser manipulados para criar experiências web envolventes.

## Eventos: O Pulsar da Interatividade

Os eventos ocorrem quando algo notável acontece em um elemento HTML. Pode ser um clique do mouse, uma tecla pressionada, ou até mesmo o carregamento completo da página. JavaScript nos permite "escutar" esses eventos e responder a eles de maneira personalizada.

Clique do Mouse:

```js
var botao = document.getElementById('meuBotao');
botao.addEventListener('click', function () {
  alert('Botão clicado!');
});
```

Tecla Pressionada:

```js
document.addEventListener('keydown', function (event) {
  console.log('Tecla pressionada: ' + event.key);
});
```

Carregamento Completo da Página:

```js
window.addEventListener('load', function () {
  console.log('Página completamente carregada.');
});
```

## Manipulando Eventos: O Encanto do JavaScript

A manipulação de eventos permite que você crie interações ricas e responsivas em suas páginas. Vamos explorar algumas técnicas:

Removendo um Evento:

```js
function minhaFuncao() {
  alert('Evento acionado!');
}

var elemento = document.getElementById('meuElemento');
elemento.addEventListener('click', minhaFuncao);

// Removendo o evento após um tempo
setTimeout(function () {
  elemento.removeEventListener('click', minhaFuncao);
}, 5000);
```

Prevenindo o Comportamento Padrão:

```js
var link = document.getElementById('meuLink');
link.addEventListener('click', function (event) {
  event.preventDefault(); // Impede o comportamento padrão do link
  alert('Link clicado, mas a navegação foi impedida!');
});
```

Delegação de Eventos:

```js
var lista = document.getElementById('minhaLista');
lista.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    alert('Item da lista clicado!');
  }
});
```

## Conclusão: Transformando Estática em Dinâmica com Eventos

Ao entender como os eventos funcionam em JavaScript, você abre as portas para criar experiências web envolventes e interativas. Seja ao responder a cliques, teclas pressionadas ou outros eventos, a manipulação de eventos é a chave para dar vida à sua página. Experimente, teste e permita que seu código ganhe vida através da mágica dos eventos em JavaScript!
