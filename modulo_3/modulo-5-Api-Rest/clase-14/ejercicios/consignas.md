# Actividades Clase Número 14

---

### Actividad 1: Diseño de URIs para una API REST

**Consigna:**
Imagina que estás construyendo una aplicación de gestión de bibliotecas. Diseña las URIs para los siguientes recursos, siguiendo las buenas prácticas de REST:

*   Obtener la lista de todos los libros.
*   Ver los detalles de un libro específico (ID: 58).
*   Acceder a las reseñas de un libro (ID: 58).
*   Filtrar libros por género "ciencia ficción" y ordenarlos por fecha de publicación descendente.
*   Añadir una nueva reseña al libro (ID: 58).

Justifica brevemente por qué cada URI cumple con las convenciones REST.

---

### Actividad 2: Selección de Métodos HTTP y Manejo de Respuestas

**Consigna:**
Para cada escenario, indica:
1.  El método HTTP adecuado (GET, POST, PUT, PATCH, DELETE).
2.  Un código de estado HTTP probable que recibirías (ej: 200, 404, 201).
3.  Cómo mostrarías la respuesta al usuario en la interfaz (ej: mensaje de éxito, redirección, alerta).

**Escenarios:**
*   Un usuario envía un formulario de registro.
*   Intentas eliminar un producto que no existe.
*   Actualizas el correo electrónico de un perfil.
*   Solicitas la lista de pedidos recientes.

---

### Actividad 3: Flujo de Comunicación Cliente-Servidor

**Consigna:**
Describe paso a paso, desde la perspectiva del front-end, cómo se realizaría la siguiente acción:
*Un usuario quiere editar el título de una publicación en un blog (ID: 15) y guardar los cambios.*

Incluye:
*   Método HTTP utilizado.
*   URI construida.
*   Datos enviados al servidor.
*   Posibles respuestas del servidor (códigos de estado y su significado).
*   Cómo se actualizaría la interfaz según la respuesta recibida.

---

### Actividad 4: Interpretación de Respuestas JSON

**Consigna:**
Supón que una API responde con el siguiente JSON al obtener detalles de un usuario:
```json
{
  "id": 101,
  "nombre": "Ana López",
  "email": "ana@example.com",
  "ultimo_acceso": "2023-10-05"
}
```
Diseña un esquema visual (puedes dibujarlo o describirlo con palabras) de cómo mostrarías estos datos en una interfaz de perfil de usuario. Indica qué campos usarías y cómo los organizarías (ej: tarjetas, tablas, texto destacado).

---

### Actividad 5: Identificación de Errores Comunes

**Consigna:**
Analiza las siguientes URIs y métodos HTTP, identifica qué errores rompen las convenciones REST y explica cómo corregirlos:

1.  `GET /obtenerUsuario/25`
2.  `POST /actualizarProducto/10`
3.  `DELETE /usuarios?userId=5`
4.  `GET /libros/ciencia-ficcion` (para filtrar por género).
