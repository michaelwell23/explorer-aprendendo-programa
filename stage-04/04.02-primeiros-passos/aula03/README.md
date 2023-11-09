# ADICIONANDO ARQUIVOS JS

- **Crie um arquivo JavaScript**:

  - Crie um arquivo com a extensão ".js" (por exemplo, seuScript.js) usando um editor de texto ou uma IDE.

- **Escolha onde incluir o arquivo**:

  - Decida se deseja incluir o arquivo JavaScript diretamente na página HTML ou referenciá-lo externamente.

- **Inclusão direta na página HTML**:

  - Dentro do elemento `<script>` na página HTML, adicione o caminho para o arquivo JavaScript no atributo "src" (source):

```js
<script src='seuScript.js'></script>
```

- **Referência externa em HTML**:

  - Inclua uma tag `<script>` no `<head>` ou no final do corpo da página HTML (antes do fechamento `</body>`), e insira o código JavaScript entre as tags `<script>`:

```html
<script src="caminho-para/seuScript.js"></script>
```

- **Execute o arquivo JavaScript**:

  - Abra a página HTML em um navegador da web. O código JavaScript no arquivo seuScript.js será executado automaticamente quando a página for carregada.

Certifique-se de que o caminho para o arquivo JavaScript está correto e que o arquivo contenha código JavaScript válido para que ele funcione conforme o esperado. Adicionar arquivos JavaScript dessa maneira permite que você separe o código JavaScript do HTML, facilitando a manutenção e o gerenciamento do seu código.
