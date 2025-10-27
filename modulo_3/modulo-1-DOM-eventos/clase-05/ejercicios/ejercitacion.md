# Carrera Front End

## Actividades Clase Numero 5:

---

### Actividad 1: Crear un Collapse para un FAQ

**Consigna:**
Crea una sección de preguntas frecuentes (FAQ) donde cada pregunta tenga una respuesta que se muestre u oculte al hacer clic en la pregunta.

**Pasos:**
 
1.  **Estructura HTML:**
    *   Crea un contenedor para las preguntas y respuestas.
    *   Usa un botón o enlace para cada pregunta.
    *   Añade un bloque de contenido (por ejemplo, un div) para la respuesta.

2.  **Estilos CSS:**
    *   Oculta el contenido de las respuestas inicialmente usando `display: none;`.

3.  **Interacción con JavaScript:**
    *   Usa el evento `click` en el botón o enlace para alternar la visibilidad del contenido.
    *   Cambia el valor de `display` entre `none` (oculto) y `block` (visible) cuando se hace clic.

**Pistas:**
*   Piensa en cómo puedes seleccionar el contenido asociado a cada pregunta.
*   Recuerda que puedes usar `nextElementSibling` para acceder al elemento siguiente en el DOM.

---

### Actividad 2: Implementar un Sidebar Navegable

**Consigna:**
Crea un menú lateral (sidebar) que se abra y cierre al hacer clic en un botón. El sidebar debe contener enlaces de navegación (por ejemplo, Inicio, Acerca de, Contacto).

**Pasos:**

1.  **Estructura HTML:**
    *   Crea un botón para abrir/cerrar el sidebar.
    *   Añade un div para el sidebar y coloca los enlaces de navegación dentro.

2.  **Estilos CSS:**
    *   Define el ancho inicial del sidebar como `0` para que esté oculto.
    *   Usa `position: fixed` para que el sidebar esté siempre visible en la pantalla.
    *   Aplica `transition` para suavizar la animación de apertura/cierre.

3.  **Interacción con JavaScript:**
    *   Usa el evento `click` en el botón para cambiar el ancho del sidebar.
    *   Alterna entre un ancho de `0` (cerrado) y un ancho específico (por ejemplo, `250px`) cuando se abre.

**Pistas:**
*   Piensa en cómo puedes animar el cambio de ancho usando CSS.
*   Considera cómo manejar el cierre del sidebar si el usuario hace clic fuera de él.

---

### Actividad 3: Crear un Modal de Confirmación

**Consigna:**
Crea una ventana emergente (modal) que se muestre al hacer clic en un botón. El modal debe tener un mensaje y un botón para cerrarlo.

**Pasos:**

1.  **Estructura HTML:**
    *   Crea un botón para abrir el modal.
    *   Añade un div para el modal y otro para el fondo oscuro (overlay).
    *   Coloca un mensaje y un botón de cierre dentro del modal.

2.  **Estilos CSS:**
    *   Oculta el modal inicialmente usando `display: none;`.
    *   Usa `position: fixed` para que el modal esté centrado en la pantalla.
    *   Aplica un fondo oscuro (rgba) para el overlay.

3.  **Interacción con JavaScript:**
    *   Usa el evento `click` en el botón para mostrar el modal.
    *   Cierra el modal al hacer clic en el botón de cierre o fuera del modal.

**Pistas:**
*   Piensa en cómo puedes detectar si el usuario hace clic fuera del modal.
*   Considera cómo manejar la superposición del modal sobre el contenido principal.

---

### Actividad 4: Implementar un Toggle para Cambiar el Tema

**Consigna:**
Crea un interruptor (toggle) que permita cambiar entre el modo claro y oscuro de una página.

**Pasos:**

1.  **Estructura HTML:**
    *   Crea un botón para alternar entre los modos.

2.  **Estilos CSS:**
    *   Define clases CSS para el modo claro y oscuro (por ejemplo, colores de fondo y texto).

3.  **Interacción con JavaScript:**
    *   Usa el evento `click` en el botón para alternar entre las clases CSS.
    *   Cambia el texto del botón para reflejar el estado actual (por ejemplo, "Modo Oscuro" o "Modo Claro").

**Pistas:**
*   Piensa en cómo puedes usar `classList.toggle` para alternar entre clases.
*   Considera cómo actualizar el texto del botón dinámicamente.

---

### Actividad 5: Crear un Acordeón con Collapse

**Consigna:**
Crea un acordeón donde cada sección tenga un título y un contenido colapsable. Al hacer clic en el título, el contenido debe expandirse o contraerse.

**Pasos:**

1.  **Estructura HTML:**
    *   Crea un contenedor para el acordeón.
    *   Añade secciones con un título (por ejemplo, un botón) y un contenido (por ejemplo, un div).

2.  **Estilos CSS:**
    *   Oculta el contenido de las secciones inicialmente usando `display: none;`.

3.  **Interacción con JavaScript:**
    *   Usa el evento `click` en el título para alternar la visibilidad del contenido.
    *   Cambia el valor de `display` entre `none` (oculto) y `block` (visible) cuando se hace clic.

**Pistas:**
*   Piensa en cómo puedes manejar múltiples secciones de manera independiente.
*   Considera cómo puedes mejorar la experiencia del usuario con animaciones suaves.