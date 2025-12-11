# Clase 14: Introducción a API Rest

## 1. ¿Qué es una API?

**API** (Application Programming Interface) es un conjunto de reglas y herramientas que permite la comunicación entre diferentes sistemas de software.

*   **Analogía del Restaurante:**
    *   **Cliente:** Tú (haces una solicitud/pedido).
    *   **Mesero (API):** Lleva el pedido a la cocina y trae la comida.
    *   **Cocina (Servidor):** Prepara la comida (procesa la solicitud).
    *   **Comida:** La respuesta.

**Usos principales:**
*   Comunicación entre sistemas.
*   Acceso a datos de servicios externos (Clima, Mapas, Pagos).
*   Integración de servicios sin conocer su implementación interna.

**Tipos generales:**
*   **Locales:** Entre partes de un mismo software.
*   **Web:** Conectan aplicaciones a través de internet.
*   **Hardware:** Interactúan con dispositivos físicos.

---

## 2. Tipos de APIs Web y Evolución

Existen diversos tipos de APIs según la necesidad tecnológica:

| Tipo | Descripción | Caso de uso típico |
| :--- | :--- | :--- |
| **REST** | Arquitectura basada en recursos (HTTP). | Web apps, móviles (CRUD). |
| **GraphQL** | Lenguaje de consulta, pide datos específicos. | Apps complejas, evitar *over-fetching*. |
| **SOAP** | Protocolo rígido basado en XML. | Empresarial, bancario, legacy. |
| **gRPC** | Alto rendimiento, usa Protocol Buffers. | Microservicios. |
| **WebSocket** | Conexión persistente bidireccional. | Chats, juegos, tiempo real. |

---

## 3. REST API

**REST** (Representational State Transfer) es un estilo arquitectónico para diseñar servicios web. Es el estándar para conectar Frontend y Backend.

**Características principales:**
*   **Cliente-Servidor:** Están separados.
*   **Sin Estado (Stateless):** Cada petición es independiente.
*   **Cachéable:** Permite almacenar respuestas para mejorar velocidad.
*   **Interfaz Uniforme:** Todos los endpoints siguen el mismo formato.

**¿Por qué usar REST?**
*   Simple y basado en HTTP.
*   Independiente del lenguaje de programación.
*   Alta interoperabilidad.

---

## 4. Métodos HTTP (Verbos)

Definen la acción a realizar sobre un recurso. Se alinean con las operaciones CRUD.

| Método | Acción | CRUD | Uso típico |
| :--- | :--- | :--- | :--- |
| **GET** | Obtener datos | Read | Consultar listas o un recurso. |
| **POST** | Crear recurso | Create | Enviar formularios, crear registros. |
| **PUT** | Reemplazar recurso | Update | Editar un recurso completamente. |
| **PATCH** | Modificar parcial | Update | Cambiar solo un campo. |
| **DELETE** | Eliminar recurso | Delete | Borrar un dato. |

### Ejemplos de código (Fetch)

**GET (Obtener datos):**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(posts => mostrarLista(posts));
```

**POST (Enviar datos):**
```javascript
fetch('https://api.blog.com/comentarios', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ contenido: '¡Muy bueno!', autor: 'Luna' })
});
```

---

## 5. Códigos de Status HTTP

Indican si la solicitud fue exitosa o si hubo un error.

*   **1xx (Informativos):** Procesos en curso.
*   **2xx (Éxito):** Solicitud procesada correctamente.
    *   `200 OK`: Todo salió bien.
    *   `201 Created`: Recurso creado (POST).
    *   `204 No Content`: Éxito sin datos a devolver (DELETE).
*   **3xx (Redirecciones):** Requiere otra acción.
*   **4xx (Error del Cliente):** Problema en el pedido.
    *   `400 Bad Request`: Datos mal formados.
    *   `401 Unauthorized`: Falta autenticación.
    *   `403 Forbidden`: Sin permisos suficientes.
    *   `404 Not Found`: Recurso no existe.
*   **5xx (Error del Servidor):** Fallo interno del servidor.
    *   `500 Internal Server Error`.

**Manejo de errores en Frontend:**
```javascript
fetch('https://api.ejemplo.com/productos/999')
 .then(res => {
   if (!res.ok) {
     if (res.status === 404) throw new Error('No encontrado');
     throw new Error('Ocurrió un error');
   }
   return res.json();
 })
 .catch(err => alert(err.message));
```

---

## 6. API URI (Uniform Resource Identifier)

Es la dirección que identifica un recurso. En REST, debe ser lógica y clara.

**Estructura:**
`https://api.ejemplo.com/v1/usuarios/42/posts?limit=10`

1.  **Protocolo:** `https://`
2.  **Dominio:** `api.ejemplo.com`
3.  **Versión:** `/v1` (Recomendado para compatibilidad).
4.  **Recurso principal:** `/usuarios` (Siempre en plural).
5.  **ID:** `/42` (Recurso específico).
6.  **Subrecurso:** `/posts` (Publicaciones de ese usuario).
7.  **Query Params:** `?limit=10` (Filtros o paginación).

**Buenas prácticas:**
*   Usar sustantivos en **plural** (/productos).
*   Evitar verbos en la URL (el verbo lo da el método HTTP).
*   Nombres legibles y semánticos.
*   Respetar la jerarquía.

**Construcción dinámica en JS:**
```javascript
const userId = 42;
const url = `https://api.ejemplo.com/v1/usuarios/${userId}/posts`;
fetch(url).then(res => res.json());
```