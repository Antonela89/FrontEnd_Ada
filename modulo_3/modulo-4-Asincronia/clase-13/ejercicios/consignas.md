# Actividades Clase Numero 13

---

### Actividad 1: Identificar Problemas de CORS

**Objetivo:** Reconocer errores de CORS en la consola del navegador.

**1. Consigna:**
*   Abre una página HTML vacía con un script que intente hacer un `fetch` a una API que no permita CORS (ej: `https://api.ejemplo-sin-cors.com/data`).
*   Inspecciona la consola del navegador y anota:
    *   El mensaje de error que aparece.
    *   Qué parte del error indica que es un problema de CORS.
*   Explica por qué ocurre esto y qué necesitarías para solucionarlo (sin escribir código).

---

### Actividad 2: Consumir una API Pública con Fetch

**Objetivo:** Practicar peticiones GET a una API que permita CORS.

**2. Consigna:**
*   Usa la API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para mostrar una lista de posts en una página HTML.
*   Crea un `<ul>` donde cada `<li>` sea el título de un post.
*   Agrega un mensaje de "Cargando..." mientras se espera la respuesta.
*   Si la API falla, muestra un mensaje de error en pantalla.

---

### Actividad 3: Enviar Datos con POST

**Objetivo:** Aprender a enviar datos a una API simulada.

**3. Consigna:**
*   Crea un formulario con campos para `title` y `body` (simulando un post).
*   Al enviarlo, usa `fetch` para hacer un POST a `https://jsonplaceholder.typicode.com/posts`.
*   Muestra un mensaje de "Enviando..." durante la petición.
*   Si la respuesta es exitosa, muestra "¡Post creado!" (aunque no se guarde realmente).
*   Si hay un error, muestra "Error al enviar".

---

### Actividad 4: Manejo de Errores con Catch

**Objetivo:** Practicar el manejo de errores en peticiones HTTP.

**4. Consigna:**
*   Haz un `fetch` a una URL incorrecta (ej: `https://jsonplaceholder.typicode.com/INVALIDO`).
*   Usa `.catch()` para mostrar un mensaje de error en el HTML (ej: "No se pudieron cargar los datos").
*   **Extra:** Agrega un botón de "Reintentar" que vuelva a hacer la petición.

---

### Actividad 5: Validar Respuestas del Servidor

**Objetivo:** Aprender a verificar el estado de la respuesta (status code).

**5. Consigna:**
*   Haz un `fetch` a `https://jsonplaceholder.typicode.com/posts/9999` (un post que no existe).
*   Verifica si el `status` de la respuesta es 404 (no encontrado).
*   Si es 404, muestra "Post no encontrado" en el HTML.
*   Si es 200, muestra el título del post.

---

### Requerimientos Generales:

*   **Entregables:**
    *   Cada actividad debe ser un archivo HTML + JS separado.
    *   Incluir comentarios breves explicando el flujo de cada ejercicio.

*   **Evaluación:**
    *   Correcto uso de `fetch`, `.then()`, y `.catch()`.
    *   Manejo visual de estados (carga, éxito, error).
    *   Identificación clara de problemas de CORS.

¡Manos a la obra! Estas actividades les ayudarán a dominar peticiones HTTP y manejo de errores en el front end. ☀️
```