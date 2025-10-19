### **Módulo: Introducción al Maquetado**

#### **Clase 1: Introducción a HTML**

*   **¿Qué es ser un desarrollador Front End?** Se define el rol del desarrollador frontend como el profesional que se encarga de construir la parte visible e interactiva de un sitio web, todo lo que el usuario ve y con lo que puede interactuar en su navegador.
*   **¿Qué es HTML (HyperText Markup Language)?** Es el lenguaje de marcado estándar para crear páginas web. No es un lenguaje de programación, sino un lenguaje que define la **estructura y el esqueleto** del contenido. Piensa en él como los cimientos y las paredes de una casa.
*   **Sintaxis y Estructura:** Se explica la base de HTML:
    *   **Etiquetas:** Son los comandos que le dicen al navegador cómo mostrar el contenido (ej: `<p>` para un párrafo, `<h1>` para un título). Existen etiquetas de apertura (`<p>`) y de cierre (`</p>`).
    *   **Atributos:** Proporcionan información adicional sobre una etiqueta (ej: en `<a href="https://google.com">`, `href` es un atributo que indica el destino del enlace).
    *   **Estructura Inicial:** Toda página HTML tiene una estructura básica: `<!DOCTYPE html>` (define la versión de HTML), `<html>` (la etiqueta raíz), `<head>` (contiene metadatos no visibles como el título o la vinculación a CSS) y `<body>` (contiene todo el contenido visible de la página).

#### **Clase 2: HTML Medio**

*   Se introducen las etiquetas más comunes para estructurar contenido:
    *   **Títulos (`<h1>` a `<h6>`):** Definen una jerarquía de títulos, siendo `<h1>` el más importante. Son cruciales para la organización del contenido y para el SEO (Optimización para Motores de Búsqueda).
    *   **Párrafo (`<p>`):** La etiqueta estándar para bloques de texto.
    *   **Contenedores genéricos (`<div>`, `<span>`):**
        *   `<div>`: Un contenedor de bloque, usado para agrupar secciones grandes de contenido y estructurar el layout.
        *   `<span>`: Un contenedor en línea, usado para agrupar o aplicar estilos a una pequeña porción de texto dentro de un bloque más grande.
    *   **Listas (`<ul>`, `<ol>`, `<li>`):**
        *   `<ul>` (Unordered List): Crea una lista con viñetas.
        *   `<ol>` (Ordered List): Crea una lista numerada.
        *   `<li>` (List Item): Representa cada elemento dentro de una lista.
    *   **Hipervínculos (`<a>`):** Permiten la navegación entre páginas. El atributo `href` especifica la URL de destino. El atributo `target="_blank"` hace que el enlace se abra en una nueva pestaña.
    *   **Imágenes (`<img>`):** Inserta una imagen. El atributo `src` define la ruta de la imagen y el atributo `alt` provee un texto alternativo (esencial para la accesibilidad).

#### **Clase 3: HTML Avanzado**

*   **Inspeccionando Elementos:** Se enseña a usar las herramientas de desarrollo del navegador (DevTools), una habilidad fundamental para depurar y entender cómo está construido un sitio web.
*   **Layout Semántico:** Se introducen etiquetas de HTML5 que describen el **significado** de su contenido, mejorando la accesibilidad y el SEO.
    *   `<header>`: Para la cabecera del sitio o de una sección.
    *   `<nav>`: Para el menú de navegación principal.
    *   `<main>`: Define el contenido principal y único de la página.
    *   `<section>`: Agrupa contenido temáticamente relacionado.
    *   `<article>`: Para contenido independiente y autocontenido (como un post de blog).
    *   `<footer>`: Para el pie de página.
*   **Imágenes semánticas (`<figure>`, `<figcaption>`):** Se usan para agrupar una imagen (`<img>`) con su respectiva leyenda o caption (`<figcaption>`).

---

### **Módulo: Cajas**

#### **Clase 4 y 5: Introducción a CSS (Parte 1 y 2)**

*   **¿Qué es CSS (Cascading Style Sheets)?** Es el lenguaje que se utiliza para dar **estilo y apariencia** a los documentos HTML. Es la "pintura" y la "decoración" de la casa que construimos con HTML.
*   **Vinculación:** Se explica cómo conectar un archivo CSS a un HTML usando la etiqueta `<link>` dentro del `<head>`.
*   **Selectores:** Son los patrones que usa CSS para "seleccionar" los elementos HTML a los que se les aplicará un estilo (ej: seleccionar todos los párrafos `p`, o un elemento con una clase específica `.mi-clase`).
*   **Colores (`color`, `background-color`):** Se enseña a aplicar color al texto y al fondo, y se explican los diferentes formatos de color: hexadecimal (`#FFFFFF`), RGB (`rgb(255, 255, 255)`) y RGBA (que añade un canal de transparencia).
*   **Tipografías:** Se cubren las propiedades para estilizar el texto:
    *   `font-family`: Define el tipo de letra.
    *   `font-size`: Define el tamaño del texto.
    *   `text-align`: Alinea el texto (izquierda, centro, derecha).
*   **Cascada:** Se explica el concepto fundamental de "cascada" en CSS: las reglas se aplican en orden, y los estilos más específicos tienen prioridad sobre los más generales.

#### **Clase 6: Modelo de Caja (Box Model)**

*   Este es el concepto más importante para entender el layout en CSS. Cada elemento HTML es tratado como una caja rectangular.
*   **Componentes de la Caja (de adentro hacia afuera):**
    *   **Content:** El contenido real (texto, imagen).
    *   **Padding:** El espacio de relleno transparente *dentro* del borde, entre el contenido y el borde.
    *   **Border:** La línea que rodea al padding y al contenido.
    *   **Margin:** El espacio transparente *fuera* del borde, que empuja a otras cajas.
*   **`box-sizing: border-box;`**: Una propiedad crucial que hace que el `width` y `height` de una caja incluyan el `padding` y el `border`, simplificando enormemente los cálculos de layout.
*   **`display` (`block`, `inline`, `inline-block`):**
    *   `block`: El elemento ocupa todo el ancho disponible y crea un salto de línea (ej: `<div>`, `<p>`).
    *   `inline`: El elemento solo ocupa el espacio necesario y fluye con el texto (ej: `<span>`, `<a>`).
    *   `inline-block`: Una mezcla de ambos, fluye como `inline` pero se le puede dar un ancho y alto fijos como a `block`.

#### **Clase 7: Flexbox**

*   **Flexbox:** Es un modelo de diseño unidimensional moderno y potente, diseñado para distribuir el espacio y alinear elementos dentro de un contenedor.
*   **Propiedades del Contenedor (el padre):**
    *   `display: flex;`: Activa Flexbox.
    *   `flex-direction`: Define el eje principal (fila o columna).
    *   `justify-content`: Alinea los ítems en el eje principal (ej: al centro, espaciados).
    *   `align-items`: Alinea los ítems en el eje secundario (ej: verticalmente en una fila).
*   **Centrando con Flexbox:** Se enseña el método simple y efectivo para centrar perfectamente un elemento: `display: flex; justify-content: center; align-items: center;`.
*   **SVG (Scalable Vector Graphics):** Se introduce el formato de imagen vectorial, ideal para iconos y logos porque se puede escalar a cualquier tamaño sin perder calidad.

---

### **Módulo: Diseño Responsivo**

#### **Clase 8 y 9: Diseño Responsivo**

*   **Diseño Responsivo vs. Adaptativo:** Se explica que el diseño responsivo se adapta fluidamente a cualquier tamaño de pantalla, mientras que el adaptativo tiene varios layouts fijos que se activan en tamaños específicos.
*   **Mobile First:** Es una estrategia de desarrollo que consiste en diseñar primero para pantallas pequeñas (móviles) y luego añadir complejidad y más elementos para pantallas más grandes. Es una práctica recomendada.
*   **Media Queries (`@media`):** La herramienta principal del diseño responsivo. Permiten aplicar bloques de código CSS solo si se cumplen ciertas condiciones, como que el ancho de la pantalla sea menor o mayor a un valor determinado (`breakpoints`).
*   **Unidades Relativas:** Se introducen unidades que son más flexibles que los píxeles (`px`):
    *   `%`: Porcentaje del tamaño del elemento padre.
    *   `em`: Relativo al tamaño de fuente del elemento actual.
    *   `rem`: Relativo al tamaño de fuente del elemento raíz (`html`). Muy útil para una escala consistente.
    *   `vw` / `vh`: Porcentaje del ancho (`vw`) o alto (`vh`) de la ventana del navegador.

---

### **Módulo: Maquetado Avanzado**

#### **Clase 10: Formularios**

*   Se enseñan las etiquetas HTML para crear formularios web:
    *   `<form>`: El contenedor de todo el formulario.
    *   `<label>`: Etiqueta de texto asociada a un campo de entrada, crucial para la accesibilidad.
    *   `<input>`: El campo de entrada principal, con muchos tipos (`text`, `email`, `password`, `checkbox`, `radio`).
    *   `<textarea>`: Para campos de texto de múltiples líneas.
    *   `<select>`: Para crear una lista desplegable de opciones.

#### **Clase 11 y 12: Selectores Avanzados y Pseudo-clases**

*   **Selectores Avanzados:** Se profundiza en selectores que permiten apuntar a elementos de forma más específica sin necesidad de añadir clases, como el selector de descendientes (`div p`) o el de hermano adyacente (`h1 + p`).
*   **Pseudo-clases:** Permiten dar estilo a los elementos basándose en su **estado** o **posición**.
    *   `:hover`: Cuando el ratón está encima del elemento.
    *   `:focus`: Cuando un elemento (como un input) está seleccionado.
    *   `:nth-child()`: Selecciona elementos basados en su orden (ej: `:nth-child(odd)` para las filas impares de una tabla).

#### **Clase 13: Sistema de posicionamiento en CSS**

*   Se explora la propiedad `position` para controlar la ubicación de los elementos de forma precisa.
    *   `static`: El posicionamiento por defecto, en el flujo normal del documento.
    *   `relative`: El elemento permanece en el flujo normal, pero se puede desplazar con `top`, `right`, `bottom`, `left` y sirve como ancla para elementos `absolute`.
    *   `absolute`: El elemento se saca del flujo normal y se posiciona con respecto a su ancestro posicionado más cercano.
    *   `fixed`: El elemento se saca del flujo normal y se posiciona con respecto a la ventana del navegador. No se mueve al hacer scroll.
*   **`z-index`:** Controla la superposición de elementos posicionados (qué elemento aparece por encima de otro).

#### **Clase 14: Transiciones y transformaciones**

*   **Transiciones (`transition`):** Permiten crear animaciones suaves cuando una propiedad CSS cambia de un estado a otro (ej: cambiar de color un botón al hacer `:hover`).
*   **Transformaciones (`transform`):** Modifican la apariencia visual de un elemento sin afectar el espacio que ocupa.
    *   `translate()`: Mueve el elemento.
    *   `rotate()`: Gira el elemento.
    *   `scale()`: Aumenta o disminuye el tamaño del elemento.

#### **Clase 15: Uso de Clases en CSS**

*   Esta clase se enfoca en escribir CSS limpio, mantenible y escalable. Se enseñan buenas prácticas como:
    *   Usar nombres de clases descriptivos en `kebab-case` (ej: `main-navigation-link`).
    *   Evitar selectores demasiado específicos o el uso de IDs para dar estilos.
    *   Crear clases reutilizables para estilos comunes.
    *   Organizar y comentar el código.

#### **Clase 16: Deployado**

*   **Deploy:** Es el proceso de subir tu sitio web a un servidor para que sea accesible públicamente en Internet.
*   **Servicios (Netlify):** Se presenta Netlify como un servicio popular y fácil de usar para "deployar" sitios estáticos (HTML, CSS, JS) de forma gratuita.
*   **Flujo de Trabajo con Github:** Se explica cómo conectar un repositorio de Github a Netlify para que cada vez que actualices tu código en Github, el sitio se despliegue automáticamente.
*   **Dominio y Favicon:** Se define qué es un dominio (la dirección de tu web) y un favicon (el pequeño icono en la pestaña del navegador).

#### **Clases 17 y 18: Práctica y Desafío Final**

*   Las últimas clases se dedican a la práctica intensiva de todos los conceptos aprendidos y a la presentación del proyecto final integrador, donde los estudiantes deben construir un sitio web completo desde cero.