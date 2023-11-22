# INTRODUÇÃO AO CSS

O CSS é uma linguagem de estilo utilizada para controlar a apresentação visual de páginas web. Enquanto o HTML define a estrutura e o conteúdo de uma página, o CSS permite que você aplique estilos e layout, proporcionando uma experiência visual atraente para os usuários.

## Seletores: Identificando elementos HTML

Os seletores CSS são utilizados para identificar os elementos HTML aos quais você deseja aplicar estilos. Eles podem ser tão simples quanto o nome de uma tag HTML, como `p` para parágrafos, ou mais complexos, envolvendo classes e IDs para maior especificidade.

```css
/* Exemplo de seletores */
p {
  color: blue;
}

#titulo {
  font-size: 24px;
}

.nome-classe {
  background-color: #eaeaea;
}
```

## Propriedades e Valores: Definindo Estilos

As propriedades CSS determinam como um elemento será estilizado, equanto os valores especificam as caracteristicas exatas. Por exemplo: a propriedade `color` define a cor do texto, e o valor `blue` indica que o texto terá a cor azul.

```css
/* Exemplo de propriedades e valores */
p {
  color: blue;
  font-size: 16px;
  margin-bottom: 10px;
}
```

## Box Model: Compreendendo o Layout

O modelo de caixa (Box Model) é fundamental para entender o layout no CSS. Cada elemento HTML é representado como uma caixa retangular, composta por margens, bordas, preenchimento e o próprio conteúdo. Manipular esses componentes permite controlar o espaçamento e a aparência dos elementos na página.

```css
/* Exemplo de Box Model */
div {
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
}
```

Esses são conceitos básicos para começar a explorar e aplicar estilos em páginas web usando CSS. À medida que você avança, pode explorar tópicos mais avançados, como flexbox, grid layout, animações e muito mais para criar designs web mais complexos e interativos.
