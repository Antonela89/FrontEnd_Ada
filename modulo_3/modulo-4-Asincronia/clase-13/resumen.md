# Resumen de Clase 13: Asincronía y Peticiones HTTP

Esta clase se centra en cómo JavaScript interactúa con servidores externos, cómo manejar la seguridad en el navegador (CORS) y cómo gestionar el flujo de datos asíncrono mediante Promesas.

## 1. CORS (Cross-Origin Resource Sharing)

### ¿Qué es?
**CORS** (Intercambio de Recursos de Origen Cruzado) es una política de seguridad fundamental implementada por los navegadores web. Su función es proteger a los usuarios impidiendo que un sitio web solicite datos a otro sitio web sin permiso explícito.

*   **Objetivo:** Evitar que sitios maliciosos roben información (como datos de sesión) haciendo peticiones a otros servicios donde el usuario ya está logueado.
*   **Definición de "Origen":** Para el navegador, un origen se define por la combinación de tres elementos:
    1.  Protocolo (ej: `http` o `https`)
    2.  Dominio (ej: `tusitio.com`)
    3.  Puerto (ej: `:3000`)
    Si alguno cambia, se considera un **origen distinto**.

### El Problema de CORS
Cuando intentas hacer una petición (`fetch`) desde tu Front End a una API que está en otro dominio, el navegador bloqueará la respuesta si el servidor no autoriza tu origen.
*   **Error típico en consola:** `Access to fetch at '...' from origin '...' has been blocked by CORS policy`.
*   **Solución:** Este error **NO** se soluciona en el Front End. Debe ser solucionado por el dueño del servidor (Back End) agregando encabezados de permisos, como:
    *   `Access-Control-Allow-Origin: *` (Permite a todos).
    *   `Access-Control-Allow-Origin: https://tusitio.com` (Permite solo a tu sitio).

---

## 2. Fetch API

`fetch` es una función nativa de JavaScript (ES6) que permite realizar peticiones HTTP asíncronas a servidores (APIs) sin recargar la página y sin bloquear el navegador.

### Características
*   Puede traer datos en formato **JSON** (lo más común), texto, archivos, etc.
*   Es asíncrono porque la respuesta del servidor tarda un tiempo indeterminado en llegar.

### Uso Básico (GET)
Por defecto, `fetch` realiza una petición GET (pedir datos).

```javascript
fetch("https://api.ejemplo.com/datos")
  .then((respuesta) => respuesta.json()) // 1. Convierte la respuesta cruda a objeto JS
  .then((datos) => console.log(datos));  // 2. Usa los datos procesados
```

### Uso Avanzado (POST)
Para enviar datos al servidor, se debe configurar un segundo parámetro con opciones:
1.  **method:** "POST".
2.  **headers:** Especificar el tipo de contenido (`"Content-Type": "application/json"`).
3.  **body:** Los datos a enviar convertidos a texto (`JSON.stringify()`).

```javascript
fetch("https://api.ejemplo.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ titulo: "Nuevo Post", userId: 1 })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## 3. Manejo de Promesas: `.then()` y `.catch()`

`fetch` devuelve una **Promesa**, un objeto que representa una tarea que aún no terminó pero que tendrá un resultado futuro (éxito o fracaso).

### El método `.then()` (Éxito)
Se ejecuta cuando la promesa se resuelve correctamente.
*   Sirve para trabajar ordenadamente con operaciones asíncronas.
*   Permite el **encadenamiento**: El resultado de un `.then()` pasa al siguiente, evitando la anidación excesiva ("callback hell").

### El método `.catch()` (Error)
Se ejecuta si la promesa es rechazada (falla). Es similar a un bloque `try...catch`.
*   Captura errores de red (servidor caído, DNS error).
*   Captura errores de código dentro de los `.then()` anteriores.

```javascript
fetch(url)
  .then(response => response.json())
  .catch(error => console.error("Algo salió mal:", error));
```

### Validación manual de errores HTTP
**Importante:** `fetch` no considera un error técnico si el servidor responde con un estado **404 (No encontrado)** o **500 (Error de servidor)**. Para `fetch`, eso es una petición completada.
Por lo tanto, no entra automáticamente al `.catch()`. Debemos verificarlo manualmente:

```javascript
fetch("url/api")
  .then((respuesta) => {
    if (!respuesta.ok) { // Si el estado no es exitoso (200-299)
      throw new Error("Error HTTP: " + respuesta.status); // Forzamos el error
    }
    return respuesta.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Error capturado:", err.message)); // Ahora sí captura el 404/500
```

---

## Resumen de Errores Comunes
1.  Olvidar convertir la respuesta con `.json()`.
2.  No usar `.catch()` para manejar fallos.
3.  Olvidar los `headers` al hacer una petición POST.
4.  Escribir mal las URLs o puertos.