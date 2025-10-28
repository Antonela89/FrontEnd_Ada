# Carrera Front End

## Actividades Clase Numero 6:

---

### Actividad Integradora: "Crea tu propia To-Do App"

🎯 **Objetivo:**

Hoy trabajarán en grupos de 4 para desarrollar una pequeña aplicación web: una **To-Do App** o **Lista de Tareas**. Esta aplicación les permitirá **agregar, visualizar y eliminar tareas**, mientras aplican lo aprendido en clases sobre **eventos de formulario, validaciones, almacenamiento en el navegador (localStorage), JSON y el objeto location**.

El reto es completarlo en **2 horas**, así que deberán organizarse y distribuir tareas dentro del equipo. ¡Trabajen juntas y diviértanse programando! 🚀

---

### 📝 ¿Qué deben lograr? (Requisitos de la To-Do App)

Su aplicación debe:

✅ Permitir **agregar nuevas tareas** mediante un formulario.
✅ **Validar** que la usuaria no agregue tareas vacías.
✅ **Mostrar las tareas en pantalla** después de agregarlas.
✅ **Marcar tareas como completadas** y poder eliminarlas.
✅ **Almacenar las tareas en localStorage**, para que no se pierdan al recargar la página.
✅ **Borrar todas las tareas** con un solo botón.
✅ **Filtrar las tareas por categoría** a través de la URL.

---

### ⏳ Tiempo estimado y distribución del trabajo

Tendrán **2 horas** para desarrollar la aplicación, por lo que deben organizarse bien:

*   **30 min:** Definir la estructura HTML y los eventos necesarios.
*   **60 min:** Programar la funcionalidad en JavaScript.
*   **30 min:** Pruebas, mejoras y presentación.

Cada integrante puede encargarse de una parte:
*   🧑‍💻 Una persona trabaja en la estructura HTML.
*   🧑‍💻 Otra en la validación y captura de eventos en el formulario.
*   🧑‍💻 Otra en la manipulación del localStorage.
*   🧑‍💻 Y la última en la implementación del filtro de tareas con `location.search`.

---

### 📌 Paso a paso: ¿Cómo hacerlo?

#### 1. Creen la estructura HTML de su To-Do App

En su archivo `index.html`, incluyan:
✅ Un **formulario** con un campo de texto para escribir la tarea y un botón para agregarla.
✅ Un **select** con categorías de tareas (Ej: "Trabajo", "Estudio", "Personal").
✅ Un **div** donde se mostrarán las tareas agregadas.
✅ Un botón para **borrar todas las tareas**.

**Ejemplo de la estructura HTML:**
```html
<form id="formulario">
  <input type="text" id="tarea" placeholder="Escribe una tarea">
  <select id="categoria">
    <option value="Trabajo">Trabajo</option>
    <option value="Estudio">Estudio</option>
    <option value="Personal">Personal</option>
  </select>
  <button type="submit">Agregar</button>
</form>

<div id="lista-tareas"></div>
<button id="borrar-todo">Borrar todas las tareas</button>