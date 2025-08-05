# Guía Completa de CSS: Especificidad, Propiedades Físicas y Lógicas

Este documento proporciona un resumen detallado de conceptos clave de CSS, ideal para programadores que buscan afianzar sus conocimientos. Cubre la especificidad, un listado completo de propiedades de CSS (tanto físicas como lógicas) y su funcionamiento.

---

## 1. Especificidad en CSS

La especificidad en CSS es el conjunto de reglas que utilizan los navegadores para determinar qué estilos se aplican a un elemento cuando existen múltiples declaraciones de CSS en conflicto. Esencialmente, es un sistema de puntuación o peso que se le asigna a cada selector de CSS para decidir cuál es el más relevante y, por lo tanto, cuál se debe aplicar.

### ¿Cómo funciona la especificidad?

Cuando un navegador interpreta el código HTML y CSS de una página, asigna un valor de especificidad a cada regla de estilo. Si varias reglas apuntan al mismo elemento, la que tenga el valor de especificidad más alto "ganará" y sus estilos serán los que se muestren. En caso de que la especificidad sea la misma, se aplicará la última regla declarada en la hoja de estilos.

### Jerarquía de la Especificidad:

La especificidad se calcula en base a la siguiente jerarquía de selectores, de mayor a menor importancia:

1.  **Estilos en línea (Inline Styles):** Son los estilos aplicados directamente a un elemento HTML a través del atributo `style`. Tienen la máxima prioridad.
2.  **Selectores de ID (`#id`):** Los selectores que utilizan un ID para apuntar a un elemento son los siguientes en la jerarquía.
3.  **Selectores de Clase (`.clase`), Atributos (`[type="radio"]`) y Pseudoclases (`:hover`):** Este grupo de selectores tiene el mismo peso en la especificidad.
4.  **Selectores de Tipo (o Etiqueta, como `h1`, `p`) y Pseudoelementos (`::before`):** Son los menos específicos en esta jerarquía.

El selector universal (`*`), los combinadores (`+`, `>`, `~`) y la pseudoclase de negación (`:not()`) no añaden especificidad por sí mismos, aunque los selectores dentro de `:not()` sí que la suman.

### La excepción `!important`

Existe una declaración especial, `!important`, que sobreescribe cualquier otra declaración de estilo, sin importar su especificidad. Si bien puede ser útil en casos puntuales, su uso excesivo puede hacer que el CSS sea difícil de mantener y depurar.

---

## 2. Atributos de CSS (Propiedades)

Los atributos de CSS, más comúnmente conocidos como **propiedades**, son las herramientas que nos permiten dar estilo a los elementos HTML. Se dividen principalmente en dos grandes grupos: propiedades físicas y propiedades lógicas.

### 2.1. Propiedades Lógicas: El Futuro del Diseño Adaptable

Las propiedades lógicas de CSS son una evolución de las propiedades físicas tradicionales. [3] En lugar de basarse en direcciones físicas (izquierda, derecha, arriba, abajo), se basan en la dirección del flujo del contenido, que viene determinada por el `writing-mode` (modo de escritura) del documento. [4]

**¿Por qué son importantes?**

Su principal ventaja es que facilitan la creación de sitios web **multilingües** y diseños que se adaptan a diferentes modos de escritura. [3, 13] Por ejemplo, el español se escribe de izquierda a derecha (`ltr`), pero el árabe o el hebreo se escriben de derecha a izquierda (`rtl`). [7, 10] Algunos idiomas asiáticos pueden incluso escribirse verticalmente. [2, 5]

Con las propiedades lógicas, un diseño se ajusta automáticamente sin necesidad de crear hojas de estilo separadas para cada dirección. [3]

**Terminología Clave:**

Las propiedades lógicas usan los términos `inline` y `block` para describir las direcciones relativas al flujo del texto. [7, 14]

*   **Eje `inline`**: Es el eje en el que fluye el texto dentro de una línea. En español (`horizontal-tb`), es el eje horizontal. [7]
*   **Eje `block`**: Es el eje en el que se apilan los bloques de contenido. En español (`horizontal-tb`), es el eje vertical. [7]

Por lo tanto:
*   **`inline-start`**: Es el inicio de la línea de texto (la izquierda en `ltr`, la derecha en `rtl`).
*   **`inline-end`**: Es el final de la línea de texto (la derecha en `ltr`, la izquierda en `rtl`).
*   **`block-start`**: Es el inicio del bloque (la parte superior en `horizontal-tb`).
*   **`block-end`**: Es el final del bloque (la parte inferior en `horizontal-tb`).

#### **Listado de Propiedades Lógicas Comunes y su Equivalente Físico (en `ltr`)**

| Propiedad Lógica | Equivalente Físico (`ltr`) | Descripción |
| :--- | :--- | :--- |
| `inline-size` | `width` | Define el tamaño en el eje en línea. |
| `block-size` | `height` | Define el tamaño en el eje de bloque. |
| `margin-inline-start` | `margin-left` | Margen al inicio del eje en línea. |
| `margin-inline-end` | `margin-right` | Margen al final del eje en línea. |
| `margin-block-start` | `margin-top` | Margen al inicio del eje de bloque. |
| `margin-block-end` | `margin-bottom`| Margen al final del eje de bloque. |
| `padding-inline-start`| `padding-left` | Relleno al inicio del eje en línea. |
| `padding-inline-end` | `padding-right`| Relleno al final del eje en línea. |
| `padding-block-start`| `padding-top` | Relleno al inicio del eje de bloque. |
| `padding-block-end` | `padding-bottom`| Relleno al final del eje de bloque. |
| `border-inline-start` | `border-left` | Borde al inicio del eje en línea. |
| `border-inline-end` | `border-right` | Borde al final del eje en línea. |
| `border-block-start` | `border-top` | Borde al inicio del eje de bloque. |
| `border-block-end` | `border-bottom` | Borde al final del eje de bloque. |
| `inset-inline-start` | `left` | Posición desde el inicio del eje en línea. |
| `inset-inline-end` | `right` | Posición desde el final del eje en línea. |
| `inset-block-start` | `top` | Posición desde el inicio del eje de bloque. |
| `inset-block-end` | `bottom` | Posición desde el final del eje de bloque. |
| `text-align` | `start` / `end` | Alinea el texto al inicio o final del eje en línea. |

**Propiedades abreviadas lógicas:**

También existen propiedades abreviadas muy útiles. [11]

*   `margin-inline`: `margin-inline-start` + `margin-inline-end`
*   `margin-block`: `margin-block-start` + `margin-block-end`
*   `padding-inline`: `padding-inline-start` + `padding-inline-end`
*   `padding-block`: `padding-block-start` + `padding-block-end`

---

### 2.2. Propiedades Físicas

Son las propiedades tradicionales de CSS que se basan en las dimensiones físicas de la pantalla (arriba, abajo, izquierda, derecha). [4]

#### **Propiedades de Texto y Tipografía**

*   `color`: Establece el color del texto.
*   `direction`: Especifica la dirección del texto.
*   `font`: Propiedad abreviada para `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height` y `font-family`.
*   `font-family`: Especifica una lista de fuentes.
*   `font-size`: Define el tamaño del texto.
*   `font-style`: Establece el estilo de la fuente (normal, itálica, etc.).
*   `font-variant`: Permite mostrar el texto en versalitas.
*   `font-weight`: Define el grosor de la fuente.
*   `letter-spacing`: Aumenta o disminuye el espacio entre caracteres.
*   `line-height`: Establece la altura de la línea.
*   `text-align`: Alinea el texto (`left`, `right`, `center`, `justify`).
*   `text-decoration`: Añade decoración como subrayado.
*   `text-indent`: Indenta la primera línea de texto.
*   `text-transform`: Controla las mayúsculas y minúsculas.
*   `white-space`: Maneja el espacio en blanco dentro de un elemento.
*   `word-spacing`: Aumenta o disminuye el espacio entre palabras.

#### **Modelo de Caja (Box Model)**

*   `width`, `height`: Ancho y alto del elemento.
*   `max-width`, `max-height`: Ancho y alto máximos.
*   `min-width`, `min-height`: Ancho y alto mínimos.
*   `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`: Define los márgenes.
*   `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`: Define el relleno.
*   `box-sizing`: Define cómo se calcula el ancho y alto total del elemento.

#### **Fondos y Bordes**

*   `background`, `background-color`, `background-image`, `background-repeat`, `background-position`: Personalizan el fondo.
*   `border`, `border-width`, `border-style`, `border-color`: Definen los bordes del elemento.
*   `border-radius`: Redondea las esquinas.
*   `box-shadow`: Añade una sombra.

#### **Posicionamiento y Visualización**

*   `display`: Especifica el comportamiento de visualización (`block`, `inline`, `grid`, `flex`, `none`).
*   `position`: Tipo de posicionamiento (`static`, `relative`, `absolute`, `fixed`, `sticky`).
*   `top`, `right`, `bottom`, `left`: Desplazan un elemento posicionado.
*   `float`: Permite que un elemento flote a la izquierda o derecha.
*   `clear`: Controla el comportamiento alrededor de elementos flotantes.
*   `z-index`: Orden de apilamiento de elementos posicionados.
*   `overflow`: Maneja el contenido que se desborda.
*   `visibility`: Muestra u oculta un elemento.

#### **Flexbox**

*   `flex-direction`: Dirección del eje principal.
*   `flex-wrap`: Si los elementos se ajustan en varias líneas.
*   `justify-content`: Alineación en el eje principal.
*   `align-items`: Alineación en el eje transversal.
*   `gap`, `row-gap`, `column-gap`: Espaciado entre elementos.
*   `order`: Orden de un elemento.
*   `flex-grow`, `flex-shrink`, `flex-basis`: Flexibilidad de los ítems.

#### **Grid**

*   `grid-template-columns`, `grid-template-rows`: Definen la estructura de la cuadrícula.
*   `grid-template-areas`: Define áreas nombradas en la cuadrícula.
*   `gap`, `row-gap`, `column-gap`: Espaciado entre celdas.
*   `grid-auto-columns`, `grid-auto-rows`: Tamaño de columnas/filas implícitas.
*   `grid-column`, `grid-row`: Ubicación de un ítem en la cuadrícula.

#### **Transiciones y Animaciones**

*   `transition`: Abreviatura para animar cambios de estado.
*   `animation`: Abreviatura para aplicar animaciones `@keyframes`.

#### **Misceláneos**

*   `opacity`: Nivel de transparencia de un elemento.
*   `cursor`: Forma del cursor del ratón.
*   `list-style`: Estilo de los marcadores en listas.
