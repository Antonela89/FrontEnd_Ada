
# Actividad Clase Numero 9: Guion del Docente

¡Hola, Profesor! ✨

¡Bienvenido/a al guion para la actividad práctica de diseño responsivo! 🚲

En este documento encontrarás una guía paso a paso 🐾 para ayudar a las alumnas a crear una **landing page** completamente **responsiva** 🌐. La actividad está estructurada de forma clara para que puedas seguir cada sección fácilmente y explicar los conceptos clave mientras se realiza la práctica.

### ¿Qué incluye el documento?
1.  **Descripción general de la actividad:** Una breve visión del objetivo y resultado esperado.
2.  **Pasos detallados:** Cada paso incluye las instrucciones específicas que debes seguir junto con las alumnas.
3.  **Conceptos aplicados:** Verás indicaciones sobre qué conceptos deben reforzar en cada sección (unidades relativas, media queries, etc.).
4.  **Sugerencias y recordatorios:** Consejos útiles para guiar a las alumnas durante el desarrollo.

### ¿Cómo usarlo?
1.  Lee cada paso antes de empezar con las alumnas para asegurarte de comprender los objetivos. 👩‍🏫
2.  Guía a las alumnas mientras trabajan, asegurándote de que prueben y ajusten el diseño en distintas pantallas. 📱💻
3.  Resuelve dudas y fomenta la experimentación para que internalicen mejor los conceptos. 🤔

¡Es hora de aplicar el diseño responsivo en acción! 🚀 ¡Sigue los pasos y crea con tus alumnas una landing page asombrosa! ✨

> **IMPORTANTE:** Recuerda que puedes modificar esta actividad a tu gusto, esto no es mas que un modelo ilustrativo que te ayude de guía para la clase. ¡Siempre puedes colocarle tu impronta personal y dejarlo mucho mejor!

---

## LA ACTIVIDAD – GUION DE LA MISMA:

### Actividad Práctica: Crear una Landing Page Responsiva
**Duración estimada:** 1 hora y 30 minutos
**Objetivo:** Aplicar los conceptos teóricos de diseño responsivo y adaptativo, unidades relativas, layout dinámico, imágenes responsivas y meta viewport en un proyecto práctico.

#### Introducción (5 minutos)
Explicación breve al inicio de la clase:
*   **Presentar el objetivo:** diseñar una landing page simple pero completamente responsiva.
*   **Recordar los conceptos básicos** y su relación con la actividad:
    *   Diseño responsivo vs adaptativo.
    *   Mobile First.
    *   Uso de unidades (%, vw, vh, em, rem).
    *   Media queries y breakpoints.
    *   Meta viewport.

#### Descripción de la Actividad
Crear una landing page con los siguientes componentes:
1.  **Header** con una imagen de fondo que ocupe toda la altura visible del dispositivo (100vh).
2.  **Sección principal** con un texto centrado, utilizando `rem` para el tamaño de la fuente.
3.  **Galería de imágenes** que se ajuste a diferentes tamaños de pantalla utilizando `grid`.
4.  **Footer** fijo en la parte inferior con información básica.

---

### Pasos de la Actividad

#### 1. Configuración inicial (10 minutos)
1.  Crear un archivo `index.html` y un archivo `styles.css`.
2.  En el archivo `index.html`, agregar la estructura base:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Landing Page</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header></header>
        <main>
            <section class="intro"></section>
            <section class="gallery"></section>
        </main>
        <footer></footer>
    </body>
    </html>
    ```
3.  En el archivo `styles.css`, configurar los estilos base:
    ```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
    }
    ```

#### 2. Diseño del Header (15 minutos)
1.  Añadir contenido al `header`:
    ```html
    <header>
        <h1>Bienvenidos</h1>
    </header>
    ```
2.  Estilizar en `styles.css`:
    ```css
    header {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('background.jpg') no-repeat center center/cover;
        color: white;
        text-align: center;
    }

    h1 {
        font-size: 3rem;
    }
    ```

#### 3. Sección principal: Introducción (10 minutos)
1.  Agregar contenido a la sección `.intro`:
    ```html
    <section class="intro">
        <p>Explora nuestra galería y descubre contenido único.</p>
    </section>
    ```
2.  Estilizar:
    ```css
    .intro {
        padding: 2rem;
        text-align: center;
        font-size: 1.25rem; /* Basado en rem */
    }
    ```

#### 4. Galería de imágenes con Grid (20 minutos)
1.  Agregar imágenes a la sección `.gallery`:
    ```html
    <section class="gallery">
        <img src="image1.jpg" alt="Imagen 1">
        <img src="image2.jpg" alt="Imagen 2">
        <img src="image3.jpg" alt="Imagen 3">
        <img src="image4.jpg" alt="Imagen 4">
    </section>
    ```
2.  Estilizar para diseño responsivo:
    ```css
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        padding: 2rem;
    }

    .gallery img {
        width: 100%; /* Ajuste automático */
        height: auto;
        border-radius: 8px;
    }
    ```

#### 5. Footer fijo y diseño final (10 minutos)
1.  Agregar contenido al `footer`:
    ```html
    <footer>
        <p>&copy; 2025. Mi Landing Page Responsiva.</p>
    </footer>
    ```
2.  Estilizar:
    ```css
    footer {
        text-align: center;
        padding: 1rem;
        background: #333;
        color: white;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    ```

#### 6. Implementar Media Queries (20 minutos)
1.  Ajustar diseño para pantallas pequeñas:
    ```css
    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }

        .intro {
            font-size: 1rem;
        }
    }
    ```

---

### Cierre y discusión (10 minutos)
*   Revisar el trabajo en conjunto.
*   Discutir:
    *   Cómo se usaron `vh`, `vw`, `rem`, y `%`.
    *   Diferencias entre diseño responsivo y adaptativo observadas en la práctica.
    *   Problemas encontrados y soluciones aplicadas.

### Archivos necesarios
*   `background.jpg` (para el header).
*   Cuatro imágenes genéricas (`image1.jpg`, `image2.jpg`, etc.).