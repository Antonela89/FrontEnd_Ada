# Guía Definitiva de Selectores CSS para Desarrolladores Trainee

¡Hola! Si estás comenzando en el mundo del desarrollo front-end, dominar los selectores de CSS es uno de los superpoderes más importantes que puedes adquirir. Son las reglas que le dicen al navegador a qué elementos HTML aplicarles tus increíbles estilos.

Esta guía resume los selectores desde los más básicos hasta los más modernos y potentes.

## 1. Selectores Básicos

Son la base de todo. Los usarás todos los días.

| Selector | Descripción | Cómo funciona | Ejemplo |
| :--- | :--- | :--- | :--- |
| **Universal (`*`)** | Selecciona **todos** los elementos de la página. | Es útil para aplicar estilos globales o "resets". | `* { box-sizing: border-box; }` |
| **De Tipo/Etiqueta** | Selecciona todos los elementos con una etiqueta HTML específica. | Escribes el nombre de la etiqueta. | `p { line-height: 1.6; }` |
| **De Clase (`.`)** | Selecciona elementos que tienen un atributo `class` específico. | Se prefija con un punto (`.`). Es el más versátil y reutilizable. | `.boton-primario { background-color: blue; }` |
| **De ID (`#`)** | Selecciona **un único** elemento con un atributo `id` específico. | Se prefija con una almohadilla (`#`). El ID debe ser único en la página. | `#encabezado-principal { padding: 20px; }` |

## 2. Selectores de Atributo

Permiten seleccionar elementos basándose en sus atributos HTML. Muy útil para formularios o elementos con atributos específicos.

*   **Descripción:** Seleccionan elementos que tienen un atributo o incluso un valor específico dentro de ese atributo.
*   **Cómo funcionan:** Se escriben entre corchetes `[]`.
*   **Ejemplo:** Quieres dar estilo a todos los enlaces que se abren en una nueva pestaña.
    ```css
    /* Selecciona todas las etiquetas <a> que tengan el atributo target="_blank" */
    a[target="_blank"] {
      background-image: url('external-link.svg');
      background-repeat: no-repeat;
      background-position: right center;
      padding-right: 15px;
    }
    ```

## 3. Combinadores (Selectores Relativos)

Estos selectores son clave para entender la estructura. Definen una relación entre elementos.

| Combinador | Descripción | Cómo funciona | Ejemplo |
| :--- | :--- | :--- | :--- |
| **Descendente (` `)** | Selecciona un elemento que está **dentro** de otro (sin importar la profundidad). | Un espacio entre dos selectores. | `article p { color: #333; }` |
| **Hijo Directo (`>`)** | Selecciona un elemento que es **hijo inmediato** de otro. | El símbolo `>`. | `ul > li { list-style-type: none; }` |
| **Hermano Adyacente (`+`)** | Selecciona el elemento que viene **justo después** de otro, al mismo nivel. | El símbolo `+`. | `h1 + p { margin-top: 0; }` |
| **Hermano General (`~`)** | Selecciona **todos** los hermanos que vienen después de un elemento, al mismo nivel. | El símbolo `~`. | `h2 ~ p { text-indent: 20px; }` |

## 4. Pseudoclases

Son palabras clave que se añaden a los selectores para especificar un estado especial o una posición estructural. Se escriben con dos puntos (`:`).

### Pseudoclases de Estado y UI

Responden a la interacción del usuario.

*   **Descripción:** Aplican estilos cuando un elemento está en un estado particular (como pasar el ratón por encima).
*   **Cómo funcionan:** Se añaden al final del selector principal.
*   **Ejemplo:** Cambiar el color de un botón al pasar el cursor sobre él y hacerlo visible cuando se navega con el teclado.
    ```css
    button:hover {
      background-color: #555;
    }

    button:focus-visible {
      outline: 2px solid blue;
    }
    ```

### Pseudoclases Estructurales y Relacionales

Seleccionan elementos basándose en su posición en el árbol HTML.

*   **Descripción:** Permiten seleccionar elementos como "el primer hijo", "las filas pares" o "el último de su tipo".
*   **Cómo funcionan:** Son increíblemente potentes para estilizar listas, tablas y contenido dinámico sin necesidad de añadir clases extra.
*   **Ejemplo:** Estilizar una tabla para que las filas pares tengan un fondo diferente.
    ```css
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    ```

## 5. Pseudoelementos

Permiten dar estilo a una parte específica de un elemento, como la primera letra o una viñeta. Se escriben con dos puntos dobles (`::`).

*   **Descripción:** Actúan como si añadieran un nuevo elemento "falso" al HTML para que puedas estilizarlo.
*   **Cómo funcionan:** Los más comunes son `::before` y `::after` para añadir contenido decorativo, y `::marker` para estilizar las viñetas de las listas.
*   **Ejemplo:** Personalizar las viñetas de los elementos de una lista.
    ```css
    li::marker {
      color: #6a0dad;
      content: "✓ ";
    }
    ```

## 6. Los Selectores Modernos que Debes Dominar

Estos selectores han cambiado las reglas del juego. Aprenderlos te pondrá por delante.

### `:is()` y `:where()` - Agrupadores

*   **Descripción:** Simplifican listas de selectores largas y repetitivas.
*   **Cómo funcionan:** Ambos agrupan selectores, pero tienen una diferencia clave:
    *   `:is()`: La especificidad de la regla es la del selector más específico dentro de la lista.
    *   `:where()`: La especificidad de la regla **siempre es cero**, lo que la hace perfecta para estilos base que necesiten ser sobrescritos fácilmente.
*   **Ejemplo:** En lugar de escribir `header a, nav a, footer a`, puedes escribir:
    ```css
    /* :is() es ideal para simplificar el código del día a día */
    :is(header, nav, footer) a {
      text-decoration: none;
    }

    /* :where() es perfecto para resets o librerías */
    :where(h1, h2, h3) {
      margin-top: 0;
    }
    ```

### `:has()` - El Selector de Padre

*   **Descripción:** ¡El selector que siempre quisimos! Selecciona un elemento **si contiene** a otros elementos que coincidan con la condición.
*   **Cómo funciona:** Se le conoce como el "selector de padre" porque permite estilizar un elemento basándose en sus hijos.
*   **Ejemplo:** Añadir un borde a una tarjeta solo si contiene una imagen.
    ```css
    /* Selecciona el div con la clase .card SÓLO SI tiene un <img> en su interior */
    .card:has(img) {
      border: 1px solid #ccc;
      padding: 0;
    }
    ```

## 7. Nueva Sintaxis: Anidamiento (Nesting)

*   **Descripción:** No es un selector, sino una nueva forma de escribir CSS que te permite anidar reglas dentro de otras, igual que en SASS/LESS.
*   **Cómo funciona:** Mejora drásticamente la legibilidad y el mantenimiento. El símbolo `&` se refiere al selector padre.
*   **Ejemplo:**
    ```css
    .menu {
      list-style: none;

      & .item {
        padding: 10px;

        &:hover {
          background-color: #eee;
        }
      }
    }
    ```

## Tabla Resumen de Selectores

| Categoría | Selector | Nombre | Descripción Breve |
| :--- | :--- | :--- | :--- |
| **Básicos** | `*` | Universal | Selecciona todos los elementos. |
| | `h1` | De Tipo | Selecciona por etiqueta HTML. |
| | `.clase` | De Clase | Selecciona por el atributo `class`. |
| | `#id` | De ID | Selecciona por el atributo `id` (único). |
| **Atributo** | `[attr]` | De Atributo | Selecciona si el atributo existe. |
| | `[attr="val"]` | De Atributo por Valor | Selecciona por un valor exacto de atributo. |
| **Combinadores** | `A B` | Descendente | `B` está dentro de `A`. |
| | `A > B` | Hijo Directo | `B` es hijo inmediato de `A`. |
| | `A + B` | Hermano Adyacente | `B` está justo después de `A`. |
| | `A ~ B` | Hermano General | `B` está después de `A` (no necesariamente junto). |
| **Pseudoclases** | `:hover` | De Estado | El cursor está sobre el elemento. |
| | `:focus` | De Estado | El elemento tiene el foco (clic o teclado). |
| | `:focus-visible`| De Estado | El foco es visible (usualmente por teclado). |
| | `:focus-within`| Relacional | Un descendiente del elemento tiene el foco. |
| | `:nth-child(n)`| Estructural | Selecciona hijos por su posición. |
| | `:first-child` | Estructural | El primer hijo de su padre. |
| | `:last-of-type`| Estructural | El último elemento de esa etiqueta. |
| | `:valid` / `:invalid`| De UI | El campo de formulario es válido/inválido. |
| **Pseudoelementos** | `::before` | De Contenido | Inserta contenido antes del elemento. |
| | `::after` | De Contenido | Inserta contenido después del elemento. |
| | `::first-line` | De Contenido | La primera línea de un bloque de texto. |
| | `::marker` | De Contenido | La viñeta o número de un `<li>`. |
| **Modernos** | `:is(A, B)` | Lógico | Coincide si el elemento es `A` o `B` (con especificidad). |
| | `:where(A, B)` | Lógico | Coincide si el elemento es `A` o `B` (especificidad cero). |
| | `:not(A)` | Lógico | Coincide si el elemento NO es `A`. |
| | `:has(A)` | Relacional | Coincide si el elemento CONTIENE un descendiente `A`. |