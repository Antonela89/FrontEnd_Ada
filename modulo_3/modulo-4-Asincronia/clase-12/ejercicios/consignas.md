# Actividades Clase Numero 12:

### Actividad 1: Simulación de Event Loop con Temporizadores

**Objetivo:** Entender cómo el Event Loop maneja tareas síncronas y asíncronas.

1.  **Consigna:**
    *   Crea una página HTML con un botón.
    *   Al hacer clic en el botón, programa:
        *   Un `console.log("Inicio")` (síncrono).
        *   Un `setTimeout(() => console.log("Timeout"), 0)` (asíncrono).
        *   Un `console.log("Fin")` (síncrono).
    *   Observa el orden de los mensajes en la consola y explica por qué ocurre así.

***

### Actividad 2: Carga de Datos con Fetch y Promesas

**Objetivo:** Practicar el consumo de APIs y manejo de promesas.

2.  **Consigna:**
    *   Usa la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com) para cargar una lista de posts.
    *   Muestra los títulos de los posts en una lista (`<ul>`) en el HTML.
    *   Agrega un mensaje de "Cargando..." mientras se espera la respuesta.
    *   Si hay un error (simula una URL incorrecta), muestra un mensaje de error en pantalla.

***

### Actividad 3: Async/Await en un Formulario

**Objetivo:** Aplicar async/await para enviar datos.

3.  **Consigna:**
    *   Crea un formulario con campos para título y contenido (simulando un post).
    *   Al enviar el formulario:
        *   Usa fetch con async/await para simular un POST a JSONPlaceholder (no se guardará realmente, pero la API responderá como éxito).
        *   Muestra un mensaje de "Enviando..." durante la espera.
        *   Si la respuesta es exitosa, muestra "¡Post creado!" en pantalla.

***

### Actividad 4: Temporizador con Interacción de Usuario

**Objetivo:** Combinar eventos del DOM con asincronía.

4.  **Consigna:**
    *   Crea un botón que, al hacer clic:
        *   Deshabilite el botón y muestre "Espere 3 segundos...".
        *   Use `setTimeout` para esperar 3 segundos.
        *   Pasado el tiempo, habilite el botón y muestre "¡Listo!".

***

### Actividad 5: Manejo de Errores con Try/Catch

**Objetivo:** Practicar el manejo de errores en operaciones asíncronas.

5.  **Consigna:**
    *   Intenta cargar datos de una URL incorrecta (ej: `https://jsonplaceholder.typicode.com/INVALIDO`).
    *   Usa try/catch con async/await para capturar el error.
    *   Muestra un mensaje amigable en el HTML como: "No se pudieron cargar los datos. Intente más tarde."

***

## Requerimientos Generales:

*   **Entregables:**
    *   Cada actividad debe estar en un archivo HTML + JS separado.
    *   Incluir comentarios breves explicando el flujo asíncrono en cada caso.

*   **Evaluación:**
    *   Claridad en el manejo de la asincronía.
    *   Interacción con el DOM (mensajes, botones, etc.).
    *   Correcto uso de fetch, setTimeout, async/await, y manejo de errores.

**¡Manos a la obra!** Estas actividades les ayudarán a dominar la asincronía, clave para aplicaciones web modernas. 🌟