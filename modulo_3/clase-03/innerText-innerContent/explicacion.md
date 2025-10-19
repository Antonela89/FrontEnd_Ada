### Tabla Comparativa Rápida

| Característica | `textContent` | `innerText` |
| :--- | :--- | :--- |
| **Contenido devuelto** | El texto "crudo" de todos los nodos hijos, incluyendo `<script>` y `<style>`. | El texto "renderizado" y visible para el usuario. |
| **Manejo de CSS** | **Ignora** los estilos. Devuelve el texto sin importar si es visible o no. | **Es consciente** de los estilos. No incluye el texto de elementos ocultos (ej. `display: none;`). |
| **Espacios y Saltos** | Devuelve los espacios en blanco y saltos de línea tal como están en el HTML. | Normaliza los espacios y convierte los saltos de línea del renderizado (ej. `<p>`, `<br>`) en `\n`. |
| **Rendimiento** | **Muy rápido**. Simplemente concatena el contenido de texto de los nodos. | **Más lento**. Requiere que el navegador calcule el layout (reflow) para saber qué es visible. |
| **Asignación de texto**| Al asignar texto, se renderiza como se escribe, sin interpretar HTML. | Al asignar texto, también se renderiza como texto plano. |

---

### Conclusión y Cuándo Usar Cada Uno

*   **Usa `textContent` (Opción recomendada y por defecto):**
    *   **Para obtener o establecer texto sin formato.**
    *   Cuando el **rendimiento** es importante. Es significativamente más rápido porque no necesita calcular el layout de la página.
    *   Cuando necesitas una representación fiel del texto en el DOM, incluyendo espacios y saltos de línea del código fuente.

*   **Usa `innerText` (Solo en casos específicos):**
    *   Cuando necesitas obtener el texto **exactamente como lo ve el usuario**, incluyendo los efectos de CSS como `text-transform` y excluyendo elementos ocultos.
    *   Un caso de uso común es copiar el texto visible de una sección de la página a un portapapeles.
    *   **Ten cuidado:** Su uso puede causar una degradación del rendimiento, ya que obliga al navegador a recalcular los estilos y el layout (conocido como *reflow*), lo cual es una operación costosa.