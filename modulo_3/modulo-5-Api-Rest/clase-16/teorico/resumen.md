# Resumen Clase 16: Conceptos Avanzados de API REST

Esta clase se enfoca en cómo interactuar profesionalmente con una API, diferenciando entre colecciones y recursos individuales, y cómo utilizar parámetros de búsqueda para filtrar, ordenar y paginar datos.

## 1. Leyendo la Documentación
Antes de escribir código, es fundamental leer la documentación oficial de la API. Esta nos indica:
*   **Recursos disponibles:** (ej. `/users`, `/posts`).
*   **Métodos HTTP permitidos:** (GET, POST, etc.).
*   **Formato de respuesta:** (JSON, XML).
*   **Parámetros:** Qué filtros o configuraciones acepta.
*   **Autenticación:** Si requiere tokens o API Keys.

---

## 2. Colecciones vs. Recursos
En una API REST, diferenciamos claramente entre pedir un listado de elementos o un elemento específico.

### A. Colección
*   **Definición:** Un conjunto de elementos (Array de objetos).
*   **Endpoint típico:** `/recurso` (ej. `/posts`).
*   **Uso:** Ideal para listados o tablas.

**Ejemplo de código:**
```javascript
// Obtener todos los posts (Colección)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("Es un array:", Array.isArray(data)); // true
    console.log("Cantidad:", data.length);
  });
```

### B. Recurso Individual
*   **Definición:** Un único objeto con propiedades específicas.
*   **Endpoint típico:** `/recurso/:id` (ej. `/posts/1`).
*   **Uso:** Ideal para vistas de detalle o perfiles.

**Ejemplo de código:**
```javascript
// Obtener el post con ID 1 (Recurso)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("Es un objeto único:", data.title);
  });
```

---

## 3. El Objeto URL y `searchParams`
Para evitar errores al concatenar strings manualmente (`"url" + "?" + "param"`), JavaScript ofrece el objeto **`URL`**. Esto facilita la construcción dinámica de direcciones.

**Ventajas:**
*   Evita errores de sintaxis.
*   Métodos fáciles para agregar (`append`), setear (`set`) o borrar (`delete`) parámetros.

**Ejemplo de uso:**
```javascript
const url = new URL("https://jsonplaceholder.typicode.com/posts");

// Agregamos parámetros dinámicamente
url.searchParams.append("userId", 2);
url.searchParams.append("_limit", 5);

console.log(url.toString()); 
// Salida: "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=5"

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 4. Parámetros de Búsqueda (Query Params)
Son pares `clave=valor` que van al final de la URL después del signo `?` y separados por `&`. No cambian *qué* recurso pedimos, sino *cómo* lo recibimos.

### A. Filtrado
Consiste en pedir a la API solo los elementos que cumplan ciertos criterios.
*   *Nota:* Los filtros dependen de lo que soporte la API (leer documentación).

**Ejemplo:**
```javascript
// Pedir posts solo del usuario con ID 1
// URL resultante: .../posts?userId=1
const url = new URL("https://jsonplaceholder.typicode.com/posts");
url.searchParams.append("userId", 1);
```

### B. Ordenamiento (Sorting)
Permite decidir el orden de los datos (ascendente, descendente, alfabético, por precio, etc.).
*   Parámetros comunes: `sort`, `order`, `orderby`.
*   Sintaxis común: `sort=-date` (descendente) o `sort=price&order=asc`.

**Ejemplo (Simulación en Frontend):**
*Si la API no soporta ordenamiento, lo hacemos en el código:*
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    // Ordenar descendente por ID
    const ordenados = data.sort((a, b) => b.id - a.id);
    console.log(ordenados);
  });
```

### C. Paginado (Pagination)
Para mejorar el rendimiento y reducir el uso de ancho de banda, las APIs no devuelven todos los datos juntos, sino por "páginas".

*   **Parámetros comunes:**
    *   `page`: Número de página actual.
    *   `limit` o `per_page`: Cantidad de items por página.
    *   `offset`: Cuántos items saltar antes de empezar a devolver.

**Ejemplo (Simulación con `slice`):**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    const page = 2;
    const limit = 10;
    
    // Lógica de paginado manual
    const start = (page - 1) * limit;
    const end = start + limit;
    
    const pagina2 = data.slice(start, end);
    console.log("Resultados página 2:", pagina2);
  });
```

### Respuesta con Metadatos
Una API real paginada suele devolver un objeto con información extra útil para el frontend:
```json
{
  "page": 3,
  "total_pages": 15,
  "total_items": 150,
  "data": [ ...array de resultados... ]
}
```