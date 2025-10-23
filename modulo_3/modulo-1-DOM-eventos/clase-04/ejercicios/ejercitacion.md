# Carrera Front End

## Actividades Clase Numero 4:

### 1. Capturando y mostrando datos de un formulario

**Objetivo:**
Aprender a obtener datos de un formulario y mostrarlos en pantalla.

**Consigna:**
1.  Crea un formulario con los siguientes campos:
    *   Nombre (input type="text")
    *   Edad (input type="number")
    *   Un botón de envío (button type="submit")
2.  Cuando la usuaria presione el botón, muestra los datos ingresados en la página sin recargarla.

**Preguntas para reflexionar:**
*   ¿Cómo puedes capturar los valores de los inputs con JavaScript?
*   ¿Por qué es importante usar `preventDefault()` en el evento submit?
*   ¿Cómo podrías mostrar los datos dentro de un div en lugar de la consola?

---

### 2. Evitando el envío de un formulario si hay errores

**Objetivo:**
Practicar la validación de datos antes de enviar un formulario.

**Consigna:**
1.  Crea un formulario con los siguientes campos:
    *   Email (input type="email")
    *   Contraseña (input type="password")
    *   Un botón de envío (button type="submit")
2.  Antes de enviar el formulario, valida que:
    *   El email contenga @.
    *   La contraseña tenga al menos 6 caracteres.
3.  Si hay errores, muestra un mensaje en rojo debajo del campo correspondiente y evita el envío del formulario.

**Preguntas para reflexionar:**
*   ¿Cómo puedes detectar si un campo está vacío?
*   ¿Cómo podrías mostrar los mensajes de error sin usar `alert()`?
*   ¿Cómo podrías permitir el envío del formulario solo si todos los datos son correctos?

---

### 3. Limitando el número de caracteres en un textarea

**Objetivo:**
Evitar que la usuaria escriba más caracteres de los permitidos en un textarea.

**Consigna:**
1.  Crea un textarea con un máximo de 150 caracteres.
2.  Muestra un contador de caracteres restantes en tiempo real.
3.  Si la usuaria intenta escribir más de 150 caracteres, impide que lo haga.

**Preguntas para reflexionar:**
*   ¿Cómo puedes detectar cada vez que la usuaria presiona una tecla dentro del textarea?
*   ¿Cómo puedes actualizar el contador de caracteres sin recargar la página?
*   ¿Qué método de JavaScript puedes usar para evitar que se escriban más caracteres?

---

### 4. Selección de opciones con radio y checkbox

**Objetivo:**
Aprender a manejar los valores seleccionados en opciones múltiples.

**Consigna:**
1.  Crea un formulario con:
    *   Tres opciones de color (radio).
    *   Tres opciones de pasatiempos (checkbox).
    *   Un botón para mostrar la selección.
2.  Cuando la usuaria seleccione una opción y presione el botón, muestra en pantalla los valores elegidos.

**Preguntas para reflexionar:**
*   ¿Cómo puedes capturar el valor de un radio button seleccionado?
*   ¿Cómo puedes capturar todos los checkbox marcados?
*   ¿Cómo podrías hacer que, si la usuaria no selecciona ninguna opción, aparezca un mensaje de advertencia?

---

### 5. Generando una URL dinámica con location.search

**Objetivo:**
Comprender cómo manipular parámetros en la URL usando JavaScript.

**Consigna:**
1.  Crea una página con un formulario donde la usuaria ingrese su nombre.
2.  Cuando la usuaria envíe el formulario, la página debe redirigir a una nueva URL que incluya su nombre en los parámetros (`?nombre=María`).
3.  En la nueva página, usa `location.search` para leer el nombre de la URL y mostrar un mensaje de bienvenida.

**Preguntas para reflexionar:**
*   ¿Cómo puedes modificar `location.href` para redirigir a otra página?
*   ¿Cómo puedes extraer el valor del nombre desde `location.search`?
*   ¿Cómo podrías hacer esto sin recargar la página?

---

### 🔥 Desafío Extra:

Crea una calculadora en la que la usuaria ingrese dos números en un formulario, seleccione una operación (+, -, \*, /) y al presionar el botón, muestre el resultado en pantalla sin recargar la página.