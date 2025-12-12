# Actividades Clase Numero 16

---

### Actividad 1: Exploración de Documentación de APIs

**Objetivo:** Familiarizarse con la estructura de documentación de APIs.

**1. Consigna:**
*   Elige una API pública (ej: [JSONPlaceholder](https://jsonplaceholder.typicode.com/), [PokeAPI](https://pokeapi.co/), o [OpenWeatherMap](https://openweathermap.org/api)).
*   Revisa su documentación y responde:
    *   ¿Qué endpoints ofrece para obtener colecciones?
    *   ¿Qué métodos HTTP soporta cada endpoint?
    *   ¿Qué parámetros de búsqueda (filtros, ordenamiento, paginado) permite?
*   Diseña una tabla resumen con esta información.

---

### Actividad 2: Obtención de Colecciones vs. Recursos Individuales

**Objetivo:** Diferenciar entre colecciones y recursos únicos.

**2. Consigna:**
*   Usando la API elegida en la Actividad 1:
    *   Realiza una petición para obtener una colección completa (ej: todos los posts).
    *   Luego, realiza otra petición para obtener un recurso específico (ej: el post con ID 5).
*   Compara las respuestas en la consola y anota las diferencias clave (estructura, tamaño, etc.).

---

### Actividad 3: Construcción de URLs Dinámicas con `searchParams`

**Objetivo:** Practicar el uso de parámetros de búsqueda.

**3. Consigna:**
*   Crea una interfaz con un campo de texto y un botón de búsqueda.
*   Al hacer clic, construye una URL dinámica con `searchParams` para filtrar recursos (ej: buscar posts de un usuario específico).
*   Muestra los resultados filtrados en una lista.

---

### Actividad 4: Implementación de Filtros Múltiples

**Objetivo:** Aplicar filtros combinados.

**4. Consigna:**
*   Extiende la Actividad 3 para permitir múltiples filtros (ej: posts de un usuario + ordenados por título).
*   Usa parámetros como `userId`, `_sort`, y `_order` (según soporte la API).
*   Explica cómo afecta cada filtro a los resultados.

---

### Actividad 5: Simulacón de Paginado en Front End

**Objetivo:** Manejar grandes conjuntos de datos.

**5. Consigna:**
*   Descarga una colección completa (ej: 100 posts).
*   Implementa botones "Anterior" y "Siguiente" para mostrar bloques de 10 elementos.
*   Calcula los índices necesarios para simular el paginado (ej: `posts.slice(0, 10)`).

---

### Actividad 6: Visualización de Metadatos

**Objetivo:** Entender respuestas enriquecidas de APIs.

**6. Consigna:**
*   Si la API lo permite (ej: GitHub API), realiza una petición que incluya metadatos (como `total_pages` o `next_page`).
*   Muestra esta información en la interfaz (ej: "Mostrando 10 de 100 resultados").

---

### Requerimientos Generales:

*   **Entregables:**
    *   Cada actividad debe incluir un archivo HTML con la interfaz básica y un JS separado.
    *   Documentar en un README.md los endpoints y parámetros usados.

*   **Evaluación:**
    *   Correcto uso de `fetch` y manejo de respuestas.
    *   Claridad en la manipulación de URLs dinámicas.
    *   Creatividad en la presentación de datos (listas, cards, etc.).

¡Manos a la obra! Estas actividades integran todo lo necesario para consumir APIs profesionales. 🌐