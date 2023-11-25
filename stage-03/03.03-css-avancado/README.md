# CSS AVANÇADO

## VARIÁVEIS E CORES HSL NO CSS

No CSS (Cascading Style Sheets), você pode usar variáveis e o formato de cores HSL (Hue, Saturation, Lightness) para definir estilos de maneira mais flexível e dinâmica. Vamos abordar cada um desses conceitos:

### Variáveis no CSS:

As variáveis no CSS começam com dois traços (--) e podem armazenar valores que podem ser reutilizados em diferentes partes do seu código. Elas são definidas no seletor :root para que estejam disponíveis globalmente.

```css
:root {
  --cor-primaria: #3498db;
  --cor-secundaria: #e74c3c;
}

body {
  background-color: var(--cor-primaria);
  color: var(--cor-secundaria);
}
```

### Cores HSL no CSS

O modelo de cor HSL representa cores usando três valores: Matriz (Hue), Saturação (Saturation) e Luminosidade (Lightness).

- **Hue (Matiz)**: Representa a tonalidade da cor, variando de 0 a 360 graus (0 e 360 representam o vermelho, 120 é verde, 240 é azul).
- **Saturation (Saturação)**: Representa a intensidade ou pureza da cor, variando de 0% (cinza) a 100% (cor pura).
- **Lightness (Luminosidade)**: Representa a luminosidade da cor, variando de 0% (preto) a 100% (branco).

```css
div {
  background-color: hsl(120, 100%, 50%); /* Verde puro */
  color: hsl(0, 100%, 50%); /* Vermelho puro */
}
```

Você também pode combinar variáveis com cores HSL para criar estilos mais dinâmicos:

```css
:root {
  --matiz-primaria: 120; /* Verde */
  --saturacao-primaria: 100%;
  --luminosidade-primaria: 50%;
}

body {
  background-color: hsl(
    var(--matiz-primaria),
    var(--saturacao-primaria),
    var(--luminosidade-primaria)
  );
  color: hsl(0, 100%, 50%); /* Vermelho puro */
}
```

sso permite que você ajuste a cor principal do seu site apenas alterando os valores das variáveis.

A compatibilidade do navegador é importante ao usar esses recursos, especialmente se estiver criando algo destinado a ser visualizado em uma variedade de navegadores. Variáveis CSS e cores HSL são amplamente suportadas nos navegadores modernos.

---
