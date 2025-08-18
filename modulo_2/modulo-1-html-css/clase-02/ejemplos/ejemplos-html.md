Claro, aquí tienes ejemplos de código de diferentes diseños para Single Page Applications (SPA) utilizando HTML semántico. En una SPA, el contenido principal a menudo se carga y cambia dinámicamente con JavaScript, pero la estructura HTML inicial debe ser semántica y robusta para proporcionar una base sólida para la accesibilidad y el SEO.

### 1. SPA con Diseño de Panel de Control (Dashboard)

Este diseño es común en aplicaciones de análisis, herramientas de gestión de proyectos o perfiles de usuario. La estructura semántica ayuda a los lectores de pantalla a navegar por las diferentes secciones de información y controles.

**Características del diseño:**
*   Una barra de navegación lateral o superior persistente.
*   Un área de contenido principal que se actualiza para mostrar diferentes "vistas" o paneles.
*   Uso de `<main>` para el contenido cambiante y `<nav>` para la navegación fija.

**Ejemplo de Código HTML:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Control - Mi Aplicación</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Mi Aplicación</h1>
        <!-- Podría incluir notificaciones o perfil de usuario -->
        <div class="user-profile">
            <img src="avatar.png" alt="Avatar del usuario">
            <span>Nombre Usuario</span>
        </div>
    </header>

    <div class="dashboard-layout">
        <aside>
            <nav aria-label="Navegación principal del panel">
                <ul>
                    <li><a href="/dashboard" class="active">Resumen</a></li>
                    <li><a href="/analytics">Estadísticas</a></li>
                    <li><a href="/settings">Configuración</a></li>
                    <li><a href="/logout">Cerrar Sesión</a></li>
                </ul>
            </nav>
        </aside>

        <!-- El contenido dentro de <main> será reemplazado dinámicamente por JavaScript -->
        <main id="main-content" role="main" aria-live="polite">
            <!-- Contenido inicial o de carga -->
            <section aria-labelledby="section-title">
                <h2 id="section-title">Resumen General</h2>
                <div class="widget">
                    <h3>Ventas del Mes</h3>
                    <p>€1,234.56</p>
                </div>
                <div class="widget">
                    <h3>Nuevos Usuarios</h3>
                    <p>89</p>
                </div>
            </section>
        </main>
    </div>

</body>
</html>
```

**Notas Semánticas y de Accesibilidad:**
*   **`<aside>`:** Perfecto para la barra lateral de navegación, ya que su contenido está relacionado con el contenido principal pero puede considerarse separado.
*   **`aria-label`:** Proporciona un nombre accesible a la `<nav>` para que los usuarios de lectores de pantalla sepan su propósito.
*   **`<main>`:** Es el contenedor del contenido principal que cambia. Es crucial para que las tecnologías de asistencia puedan "saltar" directamente al contenido relevante.
*   **`aria-live="polite"`:** En el contenedor `<main>`, este atributo ARIA informa a los lectores de pantalla que el contenido de esta región puede cambiar. "Polite" significa que el lector esperará a que el usuario haga una pausa antes de anunciar el cambio.

### 2. SPA con Diseño de Asistente o Formulario Multi-paso (Wizard)

Este diseño guía al usuario a través de una secuencia de pasos, como un proceso de registro, una encuesta o un flujo de compra.

**Características del diseño:**
*   Indicadores de progreso que muestran el paso actual.
*   Un área de contenido que muestra el formulario del paso actual.
*   Botones de navegación "Anterior" y "Siguiente".

**Ejemplo de Código HTML:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proceso de Registro - Mi Servicio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Crear una Cuenta Nueva</h1>
    </header>

    <main>
        <div class="wizard-container">
            <!-- Los indicadores de progreso son una lista ordenada, ya que la secuencia importa -->
            <nav aria-label="Pasos del proceso de registro">
                <ol class="progress-indicator">
                    <li class="active" aria-current="step">Paso 1: Datos Personales</li>
                    <li>Paso 2: Preferencias</li>
                    <li>Paso 3: Confirmación</li>
                </ol>
            </nav>

            <!-- El <form> envuelve toda la sección que cambiará -->
            <form id="wizard-form">
                <!-- El contenido de esta sección será reemplazado por JavaScript para cada paso -->
                <section id="step-content" role="group" aria-labelledby="step-title">
                    <h2 id="step-title">Paso 1: Datos Personales</h2>
                    
                    <p>
                        <label for="name">Nombre completo:</label>
                        <input type="text" id="name" name="name" required>
                    </p>
                    <p>
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required>
                    </p>
                </section>

                <div class="navigation-buttons">
                    <button type="button" id="prev-btn" style="display: none;">Anterior</button>
                    <button type="button" id="next-btn">Siguiente</button>
                    <button type="submit" id="submit-btn" style="display: none;">Finalizar</button>
                </div>
            </form>
        </div>
    </main>

    <footer>
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
    </footer>

</body>
</html>
```

**Notas Semánticas y de Accesibilidad:**
*   **`<ol>` para el progreso:** Una lista ordenada es semánticamente correcta para los indicadores de paso, ya que reflejan una secuencia.
*   **`aria-current="step"`:** Este atributo en el `<li>` activo indica claramente a los usuarios de tecnologías de asistencia cuál es el paso actual.
*   **`<section>` para cada paso:** Cada paso del formulario es una sección lógica de contenido.
*   **`role="group"`:** Ayuda a agrupar los campos de un paso como una unidad lógica.
*   **`<label for="...">`:** Esencial para la accesibilidad de los formularios.

### 3. SPA con Diseño de Feed de Contenido (Estilo Red Social)

Este diseño es típico de plataformas como Twitter, Instagram o blogs, donde el contenido principal es una lista de publicaciones que se actualiza continuamente.

**Características del diseño:**
*   Un área principal que contiene una lista de elementos (posts, artículos, etc.).
*   A menudo incluye una columna lateral con tendencias, sugerencias o información adicional.
*   Capacidad de "cargar más" contenido dinámicamente.

**Ejemplo de Código HTML:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Feed de Noticias</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <nav aria-label="Navegación principal del sitio">
            <!-- Logo, búsqueda, enlaces de navegación -->
        </nav>
    </header>

    <div class="feed-layout">
        <!-- El contenido de <main> es el feed que se actualiza -->
        <main id="feed-container">
            <h1>Últimas Publicaciones</h1>

            <!-- Cada publicación es un <article> porque es un contenido independiente y autocontenido -->
            <article class="post" aria-labelledby="post-title-1">
                <header>
                    <h2 id="post-title-1"><a href="/posts/1">Un Viaje Inesperado</a></h2>
                    <p>Publicado por <a href="/users/juan">Juan Pérez</a> el <time datetime="2025-08-04">4 de agosto de 2025</time></p>
                </header>
                <p>El primer día de nuestro viaje comenzó con una sorpresa...</p>
                <footer>
                    <button>Me gusta</button>
                    <button>Comentar</button>
                </footer>
            </article>

            <article class="post" aria-labelledby="post-title-2">
                <header>
                    <h2 id="post-title-2"><a href="/posts/2">Receta de Cocina Fácil</a></h2>
                    <p>Publicado por <a href="/users/ana">Ana Gómez</a> el <time datetime="2025-08-03">3 de agosto de 2025</time></p>
                </header>
                <p>Hoy os traigo una receta que os salvará de cualquier apuro...</p>
                <footer>
                    <button>Me gusta</button>
                    <button>Comentar</button>
                </footer>
            </article>

            <!-- Este botón cargaría más artículos con JavaScript -->
            <button id="load-more">Cargar más</button>
        </main>

        <aside>
            <section aria-labelledby="trending-title">
                <h2 id="trending-title">Tendencias</h2>
                <ul>
                    <li><a href="/tags/viajes">#viajes</a></li>
                    <li><a href="/tags/cocina">#cocina</a></li>
                </ul>
            </section>
        </aside>
    </div>

</body>
</html>
```

**Notas Semánticas y de Accesibilidad:**
*   **`<article>`:** La etiqueta perfecta para cada publicación en un feed. Si esta publicación se mostrara sola en una página (como en un lector RSS), seguiría teniendo sentido.
*   **`header` y `footer` dentro de `<article>`:** Un artículo puede tener su propia cabecera (con el título, autor, fecha) y su propio pie (con botones de acción).
*   **`<time datetime="...">`:** Especifica la fecha y hora en un formato legible por máquinas, lo que es útil para los motores de búsqueda y las tecnologías de asistencia.
*   **`aria-labelledby`:** En el `<article>`, se asocia con el `id` del título `<h2>`. Esto asegura que los lectores de pantalla anuncien el título como el nombre del artículo, proporcionando un contexto claro.