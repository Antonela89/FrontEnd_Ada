# Resumen Clase 15: Profundizando en API REST

Esta clase se centra en los conceptos fundamentales para interactuar con una API REST desde el Front End, detallando la estructura de recursos, endpoints, parámetros y autenticación.

## 1. Recursos (Resources)

El **recurso** es el concepto central de la arquitectura REST.
*   **Definición:** Cualquier entidad que puede ser accedida o manipulada a través de una URI (Uniform Resource Identifier).
*   **Representación:** No se transfiere el archivo físico o la fila de la base de datos, sino una **representación** de los datos, usualmente en formato **JSON**.

### Características Principales:
1.  **Identificables:** Cada recurso tiene una URI única (ej. `/productos/12`).
2.  **Manipulables:** Se gestionan usando métodos HTTP (GET, POST, PUT, DELETE).
3.  **Relacionados:** Los recursos pueden tener vínculos entre sí.
    *   *Ejemplo:* `/usuarios/45/ordenes` (Accede a las órdenes pertenecientes al usuario 45).

---

## 2. Endpoints

Un **endpoint** es el punto final de comunicación; una dirección exacta donde ocurre una acción en la API.
*   **Fórmula:** `URI` + `Método HTTP`.
*   **Función:** Es la "puerta de entrada" para acceder a un recurso o realizar una acción.

### Estructura y Buenas Prácticas
1.  **Semánticos y Consistentes:** Deben tener nombres lógicos.
2.  **Sustantivos, no Verbos:** La acción la define el método HTTP, no la URL.
    *   ✅ Correcto: `GET /usuarios`
    *   ❌ Incorrecto: `GET /getUsuarios`
3.  **Jerarquías Claras:** Reflejan la relación de los datos (ej. `/usuarios/7/direcciones`).

| Método | Endpoint | Acción |
| :--- | :--- | :--- |
| **GET** | `/posts` | Listar publicaciones |
| **GET** | `/posts/8` | Obtener la publicación 8 |
| **POST** | `/posts` | Crear nueva publicación |
| **PUT** | `/posts/8` | Actualizar la publicación 8 |
| **DELETE** | `/posts/8` | Eliminar la publicación 8 |

---

## 3. Tipos de Parámetros

Para interactuar dinámicamente con la API, utilizamos dos tipos principales de parámetros en la URL:

### A. Parámetros de Ruta (Path Parameters)
Son valores dinámicos dentro de la URL que identifican un **recurso específico**. Son obligatorios para esa ruta.
*   **Sintaxis API:** `/recurso/:id`
*   **Uso real:** `/usuarios/12`
*   **Uso en JS:**
    ```javascript
    const userId = 12;
    fetch(`https://api.ejemplo.com/usuarios/${userId}`);
    ```

### B. Parámetros de Búsqueda (Query Parameters)
Son pares `clave=valor` al final de la URI usados para **filtrar, ordenar o paginar**. No cambian el recurso, sino cómo se presenta. Son opcionales.
*   **Sintaxis:** `/recurso?clave=valor&otraClave=otroValor`
*   **Ejemplos comunes:** `limit`, `page`, `sort`, `filter`, `q` (búsqueda).
*   **Uso en JS:**
    ```javascript
    const categoria = 'tecnologia';
    fetch(`https://api.tienda.com/productos?categoria=${categoria}&orden=precio_asc`);
    ```

---

## 4. Estructura de un Pedido HTTP (Request)

Cuando hacemos una petición (por ejemplo, con `fetch`), enviamos un mensaje HTTP con la siguiente estructura:

1.  **Método:** La intención (GET, POST, etc.).
2.  **URL (Endpoint):** La dirección del recurso.
3.  **Headers (Encabezados):** Metadatos de la solicitud.
    *   `Content-Type: application/json` (Indica qué enviamos).
    *   `Authorization` (Para credenciales).
4.  **Body (Cuerpo):** Los datos a enviar (Solo en POST, PUT, PATCH). Usualmente un JSON string.

### Ejemplo de código (`fetch`)
```javascript
fetch('https://api.tienda.com/productos', {
    method: 'POST', // 1. Método
    headers: {      // 3. Headers
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify({ // 4. Body
        nombre: 'Remera',
        precio: 2500
    })
});
```

---

## 5. Autenticación con API Keys

Para que el servidor sepa quién hace la solicitud y si tiene permisos, se utilizan métodos de autenticación. Uno de los más simples es la **API Key**.

*   **¿Qué es?** Una cadena única (string aleatorio) que identifica a la aplicación cliente.
*   **¿Cómo se envía?**
    1.  **En Headers (Recomendado/Seguro):** `Authorization: Bearer TU_API_KEY`.
    2.  **En URL (Inseguro):** `?apikey=TU_API_KEY` (Visible en historiales).

### Seguridad en el Front End
*   **No exponer claves privadas:** Si una API Key permite borrar o editar datos sensibles, no debe estar en el código del Front End.
*   **Uso de `.env`:** Utilizar variables de entorno durante el desarrollo.
*   **APIs Públicas:** Es seguro usar keys en el Front End solo para APIs de lectura (como mapas o clima) diseñadas para ser públicas.