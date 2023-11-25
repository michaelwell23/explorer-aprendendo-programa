# INTRODUÇÃO AO HTML

## O que é html?

HTML é a sigla para **Hypertext Markup Language (Linguagem de Marcação de Hipertexto)**, é a espinha dorrsal do World Wide Web. É uma linguagemm de marcação utilizada para criar e estruturar documentos na web. Desenvilvido inicialmente por Tim Berners-Lee na década de 1990, o HTML desenpenhou um papel fundamental na evolução da internet, permitindo a criação de páginas web interativas e conectadas.

- **Elementos HTML**

  - Um elemento HTML geralmente consiste em uma tag de abertura, seguido do conteúdo e uma tag de fechamento. Para forma uma tag de abertura é preciso utilizar o sinal de menor `(<)` seguido do nome da tag, e fechado com o sinal de maior `(>)`. Já a tag de fechamento adicionamos uma barra `(/)` entre o sinal de menos e o nome da tag, como mostra abaixo:

  ```html
  <tag>CONTEÚDO</tag>
  ```

  - Algumas tags, como a tag de imagem, pode ser autocontidas e elas não possuem tag de fechamento separada. Ex: `<img />`.

- **Tags de Abertura e Fechamanto**

  - A maioria das tags HTML tem uma versão de abertura (`<tag>`) e uma versão de fechamento (`</tag>`). O conteúdo é colocado entre essas duas tags.

- **Atributos**
  - As tags podem ter atributos que fornecem informações adicionais sobre o elemento. Os atributos são geralmente incluídos na tag de abertura e têm a forma nome="valor".

```html
<a href="https://www.exemplo.com">Link</a>
```

- **Estrutura Básica de um Documento HTML:**
  - Um documento HTML típico começa com uma declaração do tipo de documento (`<!DOCTYPE html>`) seguida pela tag `<html>` que contém as tags `<head>` e `<body>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Metadados, como título, metatags, etc. -->
    <title>Minha Página</title>
  </head>
  <body>
    <!-- Conteúdo da página -->
  </body>
</html>
```

- **Comentários**
  - Comentários em HTML são delimitados por `<!--` e `-->`. Eles são usados para fornecer anotações no código, mas não são exibidos no navegador.

```html
<!-- Este é um comentário em HTML -->
```

- **Exemplos de Elementos Comuns:**

`<p>`: Parágrafo
`<h1>, <h2>, ..., <h6>`: Títulos de diferentes níveis
`<a>`: Link
`<img>`: Imagem
`<ul>, <ol>, <li>`: Listas não ordenadas e ordenadas
`<div>`: Bloco de divisão (usado para agrupar outros elementos)

Estes são apenas conceitos básicos. A medida que você se aprofunda, você encontrará mais elementos e atributos que podem ser usados para criar páginas web mais complexas. Lembre-se de que a sintaxe HTML é bastante flexível, mas a consistência e o uso correto são importantes para garantir que as páginas sejam exibidas corretamente nos navegadores.
