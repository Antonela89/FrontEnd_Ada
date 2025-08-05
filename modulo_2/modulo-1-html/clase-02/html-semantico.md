
## El Corazón de la Web: Un Vistazo al HTML Semántico, la Accesibilidad y su Estructura

El HTML (HyperText Markup Language) es el esqueleto de toda página web, pero su poder va más allá de la simple presentación visual. El uso de HTML semántico, junto con un enfoque en la accesibilidad y una estructura bien definida, es fundamental para crear sitios web robustos, comprensibles y accesibles para todos.

### HTML Semántico: Dotando de Significado al Contenido

El HTML semántico consiste en utilizar las etiquetas de HTML para reflejar el significado y la estructura del contenido, en lugar de centrarse únicamente en su apariencia. Esto implica elegir la etiqueta más apropiada para cada elemento.

**Ejemplo No Semántico vs. Semántico:**

Imagina que estás construyendo un blog. Una aproximación no semántica podría verse así:

```html
<!-- NO SEMÁNTICO -->
<div id="header">
  <h1>El Título de mi Blog</h1>
  <div id="nav">
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
    <a href="#">Contacto</a>
  </div>
</div>
<div class="main-content">
  <div class="post">
    <h2>Título del Artículo</h2>
    <p>Este es el contenido de mi primer artículo...</p>
  </div>
</div>
<div id="footer">
  <p>Copyright 2025</p>
</div>
```

Ahora, veamos la misma estructura utilizando etiquetas semánticas de HTML5. El código no solo es más limpio, sino que su propósito es inmediatamente claro para los navegadores, motores de búsqueda y lectores de pantalla.

```html
<!-- SEMÁNTICO -->
<header>
  <h1>El Título de mi Blog</h1>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
    <a href="#">Contacto</a>
  </nav>
</header>
<main>
  <article>
    <h2>Título del Artículo</h2>
    <p>Este es el contenido de mi primer artículo...</p>
  </article>
</main>
<footer>
  <p>Copyright 2025</p>
</footer>
```

**Etiquetas Semánticas Clave:**

*   `<header>`: Define la cabecera de un documento o una sección.
*   `<nav>`: Representa una sección de navegación.
*   `<main>`: Indica el contenido principal del cuerpo de un documento.
*   `<article>`: Representa contenido independiente y autocontenido.
*   `<section>`: Define una sección dentro de un documento.
*   `<aside>`: Se utiliza para contenido relacionado pero secundario, como una barra lateral.
*   `<footer>`: Representa el pie de página de un documento o una sección.
*   `<figure>` y `<figcaption>`: Se usan para agrupar una imagen con su respectiva descripción.

### Accesibilidad Web: Una Web para Todos

La accesibilidad web (A11y) tiene como objetivo que los sitios web sean utilizables por todas las personas, independientemente de sus capacidades.

**Prácticas Clave de Accesibilidad en HTML:**

*   **Texto alternativo en imágenes (`alt`):** Esencial para que los lectores de pantalla describan las imágenes a usuarios con discapacidad visual.

    ```html
    <!-- Correcto -->
    <img src="logo-google.png" alt="Logo de Google con colores brillantes">

    <!-- Incorrecto (falta alt o está vacío para una imagen importante) -->
    <img src="logo-google.png">
    ```

*   **Formularios accesibles (`<label>`):** La etiqueta `<label>` asocia un texto descriptivo a un campo del formulario, permitiendo que los usuarios de lectores de pantalla sepan qué información deben introducir y facilitando el clic en el área del texto para enfocar el campo.

    ```html
    <!-- Correcto -->
    <label for="nombreUsuario">Nombre de usuario:</label>
    <input type="text" id="nombreUsuario" name="username">

    <!-- Incorrecto (sin label) -->
    <p>Nombre de usuario:</p>
    <input type="text" name="username">
    ```

*   **WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications):** Los atributos ARIA pueden añadir contexto a elementos que lo necesiten. Por ejemplo, definir explícitamente el rol de una barra de navegación.

    ```html
    <nav role="navigation" aria-label="Navegación principal">
      <!-- enlaces de navegación -->
    </nav>
    ```

### Atributos HTML: Añadiendo Información Adicional

Los atributos proporcionan información extra sobre los elementos HTML. Se especifican siempre en la etiqueta de apertura.

**Atributos Comunes y Globales:**

*   **`id`**: Asigna un identificador único.
*   **`class`**: Asigna una o más clases para aplicar estilos o para la manipulación con JavaScript.
*   **`title`**: Muestra información adicional en un tooltip.
*   **`lang`**: Especifica el idioma del contenido del elemento.

```html
<p id="parrafo-introduccion" class="texto-destacado" lang="es" title="Este es un párrafo importante">
  Este párrafo tiene un ID único, una clase para estilos, un atributo de idioma y un título emergente.
</p>
```

### La Estructura Fundamental de un Archivo HTML

Todo documento HTML sigue una estructura básica y jerárquica que el navegador interpreta para renderizar la página.

A continuación se muestra una plantilla HTML completa y bien estructurada que integra todos los conceptos mencionados:

```html
<!DOCTYPE html> <!-- Define la versión de HTML (HTML5) -->
<html lang="es"> <!-- Elemento raíz, especifica el idioma principal de la página -->

<head>
    <!-- Contiene metadatos y enlaces a recursos, no es visible en la página -->
    <meta charset="UTF-8"> <!-- Define la codificación de caracteres, esencial para mostrar acentos y símbolos -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Asegura que la página se vea bien en dispositivos móviles -->
    <meta name="description" content="Un resumen sobre HTML semántico y accesibilidad."> <!-- Descripción para motores de búsqueda -->

    <title>Resumen de HTML</title> <!-- Título que aparece en la pestaña del navegador -->

    <link rel="stylesheet" href="styles.css"> <!-- Enlaza una hoja de estilos externa (CSS) -->
</head>

<body>
    <!-- Contiene todo el contenido visible de la página web -->

    <header>
        <h1>Mi Página Web Accesible</h1>
        <nav role="navigation" aria-label="Navegación principal">
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca-de">Acerca de</a></li>
            </ul>
        </nav>
    </header>

    <main id="inicio">
        <article>
            <h2>¿Qué es HTML Semántico?</h2>
            <p>Es la práctica de usar etiquetas HTML para su propósito real...</p>
            <figure>
                <img src="imagen.jpg" alt="Un desarrollador escribiendo código en un portátil.">
                <figcaption>El código semántico mejora la claridad y el mantenimiento.</figcaption>
            </figure>
        </article>
    </main>

    <footer id="acerca-de">
        <p>&copy; 2025 - Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>

</body>

</html>
```
